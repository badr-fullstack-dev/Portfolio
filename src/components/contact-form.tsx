"use client";

import { Send } from "lucide-react";
import { FormEvent, useId, useState } from "react";

import type { ContactApiResponse, ContactPayload } from "@/lib/contact-schema";
import type { ContactInfo, Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  locale: Locale;
  labels: {
    name: string;
    email: string;
    company: string;
    budget: string;
    projectType: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    privacy: string;
    budgetOptions: string[];
    projectOptions: string[];
  };
  contact: ContactInfo;
};

type Status = "idle" | "loading" | "success" | "error";

function fieldError(
  fieldErrors: ContactApiResponse["fieldErrors"],
  field: keyof ContactPayload,
  locale: Locale,
) {
  if (!fieldErrors?.[field]?.[0]) {
    return undefined;
  }

  const messages: Record<Locale, Partial<Record<keyof ContactPayload, string>>> =
    {
      en: {
        company: "Keep the company name under 120 characters.",
        email: "Enter a valid email address.",
        message: "Write a message between 20 and 2000 characters.",
        name: "Enter a name between 2 and 80 characters.",
        projectType: "Choose a project type.",
      },
      fr: {
        company: "Limitez le nom de l'entreprise à 120 caractères.",
        email: "Indiquez une adresse email valide.",
        message: "Rédigez un message entre 20 et 2000 caractères.",
        name: "Indiquez un nom entre 2 et 80 caractères.",
        projectType: "Choisissez un type de projet.",
      },
    };

  return messages[locale][field] || fieldErrors[field]?.[0];
}

export function ContactForm({ locale, labels, contact }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] =
    useState<ContactApiResponse["fieldErrors"]>();
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setMessage("");
    setFieldErrors(undefined);

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const result = (await response.json()) as ContactApiResponse;

      if (response.ok && result.success) {
        setStatus("success");
        setMessage(result.message || labels.success);
        form.reset();
        return;
      }

      setStatus("error");
      setFieldErrors(result.fieldErrors);
      if (result.code === "validation_error") {
        setMessage(
          locale === "fr"
            ? "Vérifiez les champs indiqués."
            : "Please check the highlighted fields.",
        );
      } else if (result.code === "email_not_configured") {
        setMessage(
          locale === "fr"
            ? `L'envoi email n'est pas encore configuré. Écrivez directement à ${contact.email}.`
            : `Email delivery is not configured yet. Please email ${contact.email} directly.`,
        );
      } else {
        setMessage(result.message || labels.error);
      }
    } catch {
      setStatus("error");
      setMessage(labels.error);
    }
  }

  const baseInput =
    "min-h-12 w-full rounded-[8px] border border-white/12 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20";
  const errorClass = "border-rose-300/70 focus:border-rose-300";

  return (
    <form
      className="grid gap-4 rounded-[8px] border border-white/12 bg-white/[0.045] p-4 shadow-2xl shadow-slate-950/30 sm:p-6"
      noValidate
      onSubmit={handleSubmit}
    >
      <input name="locale" type="hidden" value={locale} />
      <div aria-hidden className="absolute -left-[9999px] h-0 overflow-hidden">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          autoComplete="off"
          id={`${formId}-website`}
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-200"
            htmlFor={`${formId}-name`}
          >
            {labels.name}
          </label>
          <input
            aria-invalid={Boolean(fieldError(fieldErrors, "name", locale))}
            className={cn(
              baseInput,
              fieldError(fieldErrors, "name", locale) && errorClass,
            )}
            id={`${formId}-name`}
            maxLength={80}
            minLength={2}
            name="name"
            required
            type="text"
          />
          <FieldError>{fieldError(fieldErrors, "name", locale)}</FieldError>
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-200"
            htmlFor={`${formId}-email`}
          >
            {labels.email}
          </label>
          <input
            aria-invalid={Boolean(fieldError(fieldErrors, "email", locale))}
            className={cn(
              baseInput,
              fieldError(fieldErrors, "email", locale) && errorClass,
            )}
            id={`${formId}-email`}
            maxLength={160}
            name="email"
            required
            type="email"
          />
          <FieldError>{fieldError(fieldErrors, "email", locale)}</FieldError>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-200"
            htmlFor={`${formId}-company`}
          >
            {labels.company}
          </label>
          <input
            className={cn(
              baseInput,
              fieldError(fieldErrors, "company", locale) && errorClass,
            )}
            id={`${formId}-company`}
            maxLength={120}
            name="company"
            type="text"
          />
          <FieldError>{fieldError(fieldErrors, "company", locale)}</FieldError>
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-200"
            htmlFor={`${formId}-budget`}
          >
            {labels.budget}
          </label>
          <select
            className={baseInput}
            defaultValue=""
            id={`${formId}-budget`}
            name="budget"
          >
            <option value="">{labels.budgetOptions[0]}</option>
            {labels.budgetOptions.slice(1).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-200"
          htmlFor={`${formId}-projectType`}
        >
          {labels.projectType}
        </label>
        <select
          aria-invalid={Boolean(
            fieldError(fieldErrors, "projectType", locale),
          )}
          className={cn(
            baseInput,
            fieldError(fieldErrors, "projectType", locale) && errorClass,
          )}
          defaultValue=""
          id={`${formId}-projectType`}
          name="projectType"
          required
        >
          <option disabled value="">
            {labels.projectType}
          </option>
          {labels.projectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FieldError>
          {fieldError(fieldErrors, "projectType", locale)}
        </FieldError>
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-200"
          htmlFor={`${formId}-message`}
        >
          {labels.message}
        </label>
        <textarea
          aria-invalid={Boolean(fieldError(fieldErrors, "message", locale))}
          className={cn(
            baseInput,
            "min-h-36 resize-y leading-7",
            fieldError(fieldErrors, "message", locale) && errorClass,
          )}
          id={`${formId}-message`}
          maxLength={2000}
          minLength={20}
          name="message"
          required
        />
        <FieldError>{fieldError(fieldErrors, "message", locale)}</FieldError>
      </div>

      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-cyan-300/60 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "loading"}
        type="submit"
      >
        <Send aria-hidden size={17} />
        {status === "loading" ? labels.sending : labels.submit}
      </button>

      <p className="text-xs leading-6 text-slate-400">{labels.privacy}</p>

      <div
        aria-live="polite"
        className={cn(
          "min-h-12 rounded-[8px] border px-4 py-3 text-sm leading-6",
          status === "success" &&
            "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
          status === "error" &&
            "border-rose-300/30 bg-rose-300/10 text-rose-100",
          status !== "success" &&
            status !== "error" &&
            "border-white/10 bg-slate-950/50 text-slate-400",
        )}
      >
        {message ||
          `${labels.email}: ${contact.email} · ${labels.name}: ${contact.name}`}
      </div>
    </form>
  );
}

function FieldError({ children }: { children?: string }) {
  if (!children) {
    return null;
  }

  return <p className="mt-2 text-xs leading-5 text-rose-200">{children}</p>;
}
