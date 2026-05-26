"use client";

import { useMemo, useState } from "react";

const packageOptions = ["Not sure yet", "Day Tour", "Adventure Tour", "Family Tour", "Custom Bali Trip"];

export default function ContactPlanningForm() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    groupSize: "",
    packageType: packageOptions[0],
    message: "",
  });

  const whatsappUrl = useMemo(() => {
    const message = [
      "Hello, I'd like help planning a Bali tour.",
      `Name: ${form.name || "-"}`,
      `Travel date: ${form.date || "-"}`,
      `Group size: ${form.groupSize || "-"}`,
      `Preferred package: ${form.packageType}`,
      `Notes: ${form.message || "-"}`,
    ].join("\n");

    return `https://wa.me/6281337373852?text=${encodeURIComponent(message)}`;
  }, [form]);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className="ui-card p-5 sm:p-7">
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
            className="ui-input w-full"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Travel Date</span>
          <input
            className="ui-input w-full"
            type="date"
            value={form.date}
            onChange={(event) => updateField("date", event.target.value)}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Group Size</span>
          <input
            className="ui-input w-full"
            value={form.groupSize}
            onChange={(event) => updateField("groupSize", event.target.value)}
            placeholder="Example: 4 adults"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">Package Interest</span>
          <select
            className="ui-input w-full"
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
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Hotel area, preferred route, pickup needs, or special request"
        />
      </label>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="ui-btn ui-btn-primary mt-5 w-full">
        Send Planning Details
      </a>
    </form>
  );
}
