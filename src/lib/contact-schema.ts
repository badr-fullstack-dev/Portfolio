import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  deadline: z.string().trim().max(80).optional().or(z.literal("")),
  projectType: z.string().trim().min(2).max(80),
  message: z.string().trim().min(20).max(2000),
  website: z.string().optional(),
  locale: z.enum(["fr", "en"]).optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export type ContactApiResponse = {
  success: boolean;
  message: string;
  code?:
    | "validation_error"
    | "email_not_configured"
    | "send_failed"
    | "invalid_json"
    | "rate_limited";
  fieldErrors?: Partial<Record<keyof ContactPayload, string[]>>;
};
