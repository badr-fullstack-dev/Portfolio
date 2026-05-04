import { Resend } from "resend";

import {
  contactSchema,
  type ContactApiResponse,
} from "@/lib/contact-schema";
import { contactInfo } from "@/lib/content";

export const runtime = "nodejs";

function json(body: ContactApiResponse, status = 200) {
  return Response.json(body, { status });
}

function clean(value: string | undefined) {
  return value?.trim() || "Non precise";
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return json(
      {
        code: "invalid_json",
        message: "Invalid JSON payload.",
        success: false,
      },
      400,
    );
  }

  if (
    payload &&
    typeof payload === "object" &&
    "website" in payload &&
    typeof payload.website === "string" &&
    payload.website.trim().length > 0
  ) {
    return json({
      message: "Message received.",
      success: true,
    });
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return json(
      {
        code: "validation_error",
        fieldErrors: parsed.error.flatten().fieldErrors,
        message: "Please check the highlighted fields.",
        success: false,
      },
      400,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return json(
      {
        code: "email_not_configured",
        message: `Email delivery is not configured yet. Please contact ${contactInfo.email} directly.`,
        success: false,
      },
      503,
    );
  }

  const resend = new Resend(apiKey);
  const data = parsed.data;
  const subject = `[Portfolio] ${data.projectType} - ${data.name}`;
  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${clean(data.company)}`,
    `Budget: ${clean(data.budget)}`,
    `Project type: ${data.projectType}`,
    `Locale: ${data.locale || "fr"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  try {
    const result = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Badreddine Portfolio <onboarding@resend.dev>",
      replyTo: data.email,
      subject,
      text,
      to: [toEmail],
    });

    if (result.error) {
      return json(
        {
          code: "send_failed",
          message: `Email delivery failed. Please contact ${contactInfo.email} directly.`,
          success: false,
        },
        502,
      );
    }

    return json({
      message: "Message sent. Thank you for the brief.",
      success: true,
    });
  } catch {
    return json(
      {
        code: "send_failed",
        message: `Email delivery failed. Please contact ${contactInfo.email} directly.`,
        success: false,
      },
      502,
    );
  }
}
