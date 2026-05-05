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
    deadline: string;
    projectType: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    privacy: string;
    idleHint: string;
    helpers: {
      email: string;
      company: string;
      budget: string;
      deadline: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      company: string;
      deadline: string;
    };
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
        deadline: "Keep the timeline under 80 characters.",
        email: "Enter a valid email address.",
        message: "Write a message between 20 and 2000 characters.",
        name: "Enter a name between 2 and 80 characters.",
        projectType: "Choose a project type.",
      },
      fr: {
        company: "Limitez le nom de l'entreprise à 120 caractères.",
        deadline: "Limitez le délai à 80 caractères.",
        email: "Indiquez une adresse email valide.",
        message: "Rédigez un message entre 20 et 2000 caractères.",
        name: "Indiquez un nom entre 2 et 80 caractères.",
        projectType: "Choisissez un type de projet.",
      },
    };

  return messages[locale][field] || fieldErrors[field]?.[0];
}

function describedBy(...ids: (string | false | undefined)[]) {
  const list = ids.filter(Boolean).join(" ");
  return list || undefined;
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
    "min-h-12 w-full rounded-[8px] border border-white/12 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20";
  const errorClass = "border-rose-300/70 focus:border-rose-300";
  const helperClass = "mt-2 text-xs leading-5 text-slate-400";

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const companyId = `${formId}-company`;
  const budgetId = `${formId}-budget`;
  const deadlineId = `${formId}-deadline`;
  const projectTypeId = `${formId}-projectType`;
  const messageId = `${formId}-message`;

  const nameErr = fieldError(fieldErrors, "name", locale);
  const emailErr = fieldError(fieldErrors, "email", locale);
  const companyErr = fieldError(fieldErrors, "company", locale);
  const deadlineErr = fieldError(fieldErrors, "deadline", locale);
  const projectTypeErr = fieldError(fieldErrors, "projectType", locale);
  const messageErr = fieldError(fieldErrors, "message", locale);

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
            htmlFor={nameId}
          >
            {labels.name}
          </label>
          <input
            aria-describedby={describedBy(nameErr && `${nameId}-err`)}
            aria-invalid={Boolean(nameErr)}
            autoComplete="name"
            className={cn(baseInput, nameErr && errorClass)}
            id={nameId}
            maxLength={80}
            minLength={2}
            name="name"
            placeholder={labels.placeholders.name}
            required
            type="text"
          />
          <FieldError id={`${nameId}-err`}>{nameErr}</FieldError>
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-200"
            htmlFor={emailId}
          >
            {labels.email}
          </label>
          <input
            aria-describedby={describedBy(
              `${emailId}-help`,
              emailErr && `${emailId}-err`,
            )}
            aria-invalid={Boolean(emailErr)}
            autoComplete="email"
            className={cn(baseInput, emailErr && errorClass)}
            id={emailId}
            maxLength={160}
            name="email"
            placeholder={labels.placeholders.email}
            required
            type="email"
          />
          <p className={helperClass} id={`${emailId}-help`}>
            {labels.helpers.email}
          </p>
          <FieldError id={`${emailId}-err`}>{emailErr}</FieldError>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-200"
            htmlFor={companyId}
          >
            {labels.company}
          </label>
          <input
            aria-describedby={describedBy(
              `${companyId}-help`,
              companyErr && `${companyId}-err`,
            )}
            aria-invalid={Boolean(companyErr)}
            autoComplete="organization"
            className={cn(baseInput, companyErr && errorClass)}
            id={companyId}
            maxLength={120}
            name="company"
            placeholder={labels.placeholders.company}
            type="text"
          />
          <p className={helperClass} id={`${companyId}-help`}>
            {labels.helpers.company}
          </p>
          <FieldError id={`${companyId}-err`}>{companyErr}</FieldError>
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-200"
            htmlFor={budgetId}
          >
            {labels.budget}
          </label>
          <select
            aria-describedby={describedBy(`${budgetId}-help`)}
            className={baseInput}
            defaultValue=""
            id={budgetId}
            name="budget"
          >
            <option value="">{labels.budgetOptions[0]}</option>
            {labels.budgetOptions.slice(1).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className={helperClass} id={`${budgetId}-help`}>
            {labels.helpers.budget}
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-200"
            htmlFor={projectTypeId}
          >
            {labels.projectType}
          </label>
          <select
            aria-describedby={describedBy(
              projectTypeErr && `${projectTypeId}-err`,
            )}
            aria-invalid={Boolean(projectTypeErr)}
            className={cn(baseInput, projectTypeErr && errorClass)}
            defaultValue=""
            id={projectTypeId}
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
          <FieldError id={`${projectTypeId}-err`}>{projectTypeErr}</FieldError>
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-200"
            htmlFor={deadlineId}
          >
            {labels.deadline}
          </label>
          <input
            aria-describedby={describedBy(
              `${deadlineId}-help`,
              deadlineErr && `${deadlineId}-err`,
            )}
            aria-invalid={Boolean(deadlineErr)}
            autoComplete="off"
            className={cn(baseInput, deadlineErr && errorClass)}
            id={deadlineId}
            maxLength={80}
            name="deadline"
            placeholder={labels.placeholders.deadline}
            type="text"
          />
          <p className={helperClass} id={`${deadlineId}-help`}>
            {labels.helpers.deadline}
          </p>
          <FieldError id={`${deadlineId}-err`}>{deadlineErr}</FieldError>
        </div>
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-200"
          htmlFor={messageId}
        >
          {labels.message}
        </label>
        <textarea
          aria-describedby={describedBy(
            `${messageId}-help`,
            messageErr && `${messageId}-err`,
          )}
          aria-invalid={Boolean(messageErr)}
          className={cn(
            baseInput,
            "min-h-36 resize-y leading-7",
            messageErr && errorClass,
          )}
          id={messageId}
          maxLength={2000}
          minLength={20}
          name="message"
          required
        />
        <p className={helperClass} id={`${messageId}-help`}>
          {labels.helpers.message}
        </p>
        <FieldError id={`${messageId}-err`}>{messageErr}</FieldError>
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

      <p className="text-sm leading-6 text-slate-400">{labels.idleHint}</p>

      <div
        aria-live="polite"
        className={cn(
          "rounded-[8px] border px-4 py-3 text-sm leading-6 transition",
          status === "success" &&
            "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
          status === "error" &&
            "border-rose-300/30 bg-rose-300/10 text-rose-100",
          status === "loading" &&
            "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
          status === "idle" && "hidden",
        )}
        role="status"
      >
        {status === "loading" ? labels.sending : message}
      </div>
    </form>
  );
}

function FieldError({ children, id }: { children?: string; id: string }) {
  if (!children) {
    return null;
  }

  return (
    <p className="mt-2 text-xs leading-5 text-rose-200" id={id}>
      {children}
    </p>
  );
}
