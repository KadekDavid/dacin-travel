"use client";

import { useMemo, useState } from "react";

const packageOptions = ["Not sure yet", "Day Tour", "Adventure Tour", "Family Tour", "Custom Bali Trip"];

type PlanningFormValues = {
  name: string;
  date: string;
  groupSize: string;
  packageType: string;
  message: string;
};

function sanitizeName(value: string) {
  return value.replace(/[^\p{L}\s]/gu, "").replace(/\s{2,}/g, " ");
}

function sanitizeGroupSize(value: string) {
  return value.replace(/\D/g, "");
}

function getValidationErrors(form: PlanningFormValues, minimumDate: string) {
  return {
    name: form.name && !/^[\p{L}\s]+$/u.test(form.name) ? "Name can only contain letters and spaces." : "",
    date: form.date && form.date < minimumDate ? "Travel date cannot be earlier than today." : "",
    groupSize: form.groupSize && !/^\d+$/.test(form.groupSize) ? "Group size can only contain numbers." : "",
  };
}

function getWhatsappUrl(form: PlanningFormValues) {
  const message = [
    "Hello, I'd like help planning a Bali tour.",
    `Name: ${form.name || "-"}`,
    `Travel date: ${form.date || "-"}`,
    `Group size: ${form.groupSize || "-"}`,
    `Preferred package: ${form.packageType}`,
    `Notes: ${form.message || "-"}`,
  ].join("\n");

  return `https://wa.me/6281337373852?text=${encodeURIComponent(message)}`;
}

export default function ContactPlanningForm() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    groupSize: "",
    packageType: packageOptions[0],
    message: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const today = useMemo(() => {
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() - currentDate.getTimezoneOffset());

    return currentDate.toISOString().slice(0, 10);
  }, []);

  const errors = useMemo(() => getValidationErrors(form, today), [form, today]);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function updateName(value: string) {
    updateField("name", sanitizeName(value));
  }

  function updateGroupSize(value: string) {
    updateField("groupSize", sanitizeGroupSize(value));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const submittedForm = {
      name: sanitizeName(String(formData.get("name") ?? form.name)),
      date: String(formData.get("date") ?? form.date),
      groupSize: sanitizeGroupSize(String(formData.get("groupSize") ?? form.groupSize)),
      packageType: String(formData.get("packageType") ?? form.packageType),
      message: String(formData.get("message") ?? form.message),
    };
    const submittedErrors = getValidationErrors(submittedForm, today);

    setForm(submittedForm);
    setHasSubmitted(true);

    if (Object.values(submittedErrors).some(Boolean)) return;

    window.open(getWhatsappUrl(submittedForm), "_blank", "noopener,noreferrer");
  }

  function shouldShowError(field: keyof typeof errors) {
    return Boolean(errors[field]) && (hasSubmitted || Boolean(form[field]));
  }

  return (
    <form className="ui-card flex h-full flex-col p-5 sm:p-7 lg:p-8" onSubmit={handleSubmit} noValidate>
      <div className="mb-5">
        <span className="ui-eyebrow mb-3">Planning Form</span>
        <h2 className="m-0 text-2xl font-extrabold leading-tight text-slate-950">Share your trip details</h2>
        <p className="m-0 mt-3 text-sm leading-7 text-slate-600">
          Fill the fields below, then send the details through WhatsApp so the team can check the best package fit.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Name</span>
          <input
            className={`ui-input w-full ${shouldShowError("name") ? "border-red-400 focus:border-red-500 focus:ring-red-500/10" : ""}`}
            name="name"
            value={form.name}
            onChange={(event) => updateName(event.target.value)}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={shouldShowError("name")}
          />
          <span className="mt-1 block text-xs font-semibold text-slate-500">Letters and spaces only.</span>
          {shouldShowError("name") && <span className="mt-1 block text-xs font-semibold text-red-600">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Travel Date</span>
          <input
            className={`ui-input w-full ${shouldShowError("date") ? "border-red-400 focus:border-red-500 focus:ring-red-500/10" : ""}`}
            type="date"
            name="date"
            value={form.date}
            onChange={(event) => updateField("date", event.target.value)}
            min={today}
            aria-invalid={shouldShowError("date")}
          />
          <span className="mt-1 block text-xs font-semibold text-slate-500">Minimum date is today.</span>
          {shouldShowError("date") && <span className="mt-1 block text-xs font-semibold text-red-600">{errors.date}</span>}
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Group Size</span>
          <input
            className={`ui-input w-full ${shouldShowError("groupSize") ? "border-red-400 focus:border-red-500 focus:ring-red-500/10" : ""}`}
            name="groupSize"
            value={form.groupSize}
            onChange={(event) => updateGroupSize(event.target.value)}
            placeholder="Example: 4"
            inputMode="numeric"
            pattern="[0-9]*"
            aria-invalid={shouldShowError("groupSize")}
          />
          <span className="mt-1 block text-xs font-semibold text-slate-500">Numbers only.</span>
          {shouldShowError("groupSize") && <span className="mt-1 block text-xs font-semibold text-red-600">{errors.groupSize}</span>}
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Package Interest</span>
          <select
            className="ui-input w-full"
            name="packageType"
            value={form.packageType}
            onChange={(event) => updateField("packageType", event.target.value)}
          >
            {packageOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Notes</span>
        <textarea
          className="ui-input min-h-28 w-full py-3"
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Hotel area, preferred route, pickup needs, or special request"
        />
      </label>

      <button type="submit" className="ui-btn ui-btn-primary mt-5 w-full lg:mt-auto">
        Send Planning Details
      </button>
    </form>
  );
}
