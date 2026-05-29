"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/lib/data";

const labels = {
  en: {
    labelName: "Full Name", labelEmail: "Email Address", labelPhone: "Phone Number",
    labelInterest: "Interest", labelMessage: "Tell Us About Your Project",
    selectModel: "Select a model...",
    bespoke: "Custom Design / Not Sure Yet",
    privacy: "We respond to all enquiries within one business day. Your information is kept strictly confidential.",
    send: "Send Enquiry", sending: "Sending...",
    thankYou: "Thank You",
    received: "We've received your enquiry and will be in touch within one business day.",
    sendAnother: "Send Another Message",
    messagePlaceholder: "Site location, land size, desired timeline, special requirements...",
    phonePlaceholder: "+90 (555) 000 0000",
  },
  bg: {
    labelName: "Пълно Име", labelEmail: "Имейл Адрес", labelPhone: "Телефонен Номер",
    labelInterest: "Интерес", labelMessage: "Разкажете ни за вашия проект",
    selectModel: "Изберете модел...",
    bespoke: "Собствен Дизайн / Не Съм Сигурен Още",
    privacy: "Отговаряме на всички запитвания в рамките на един работен ден. Вашата информация е строго поверителна.",
    send: "Изпратете Запитване", sending: "Изпращане...",
    thankYou: "Благодарим Ви",
    received: "Получихме вашето запитване и ще се свържем с вас в рамките на един работен ден.",
    sendAnother: "Изпратете Друго Съобщение",
    messagePlaceholder: "Местоположение на имота, размер на парцела, желан срок, специални изисквания...",
    phonePlaceholder: "+359 (88) 000 0000",
  },
};

interface FormData {
  name: string; email: string; phone: string;
  interest: string; message: string;
}
const initialForm: FormData = { name: "", email: "", phone: "", interest: "", message: "" };

export function ContactForm({ lang }: { lang: Lang }) {
  const t = labels[lang];
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
        <div className="w-16 h-16 border border-brand-accent flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 12l5 5L20 7" stroke="#C8A26A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-white">{t.thankYou}</h3>
        <p className="font-sans text-brand-gray-light text-sm max-w-sm leading-relaxed">{t.received}</p>
        <Button onClick={() => setSubmitted(false)} variant="outline">{t.sendAnother}</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label={t.labelName} name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Ahmet Yıldırım" />
        <Field label={t.labelEmail} name="email" type="email" value={form.email} onChange={handleChange} required placeholder="ahmet@example.com" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label={t.labelPhone} name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder={t.phonePlaceholder} />
        <SelectField
          label={t.labelInterest}
          name="interest"
          value={form.interest}
          onChange={handleChange}
          options={[
            { value: "", label: t.selectModel },
            { value: "studio-65", label: "Studio 65" },
            { value: "horizon-160", label: "Horizon 160" },
            { value: "skyline-180", label: "Skyline 180" },
            { value: "vista-240", label: "Vista 240" },
            { value: "summit-320", label: "Summit 320" },
            { value: "pinnacle-400", label: "Pinnacle 400" },
            { value: "bespoke", label: t.bespoke },
          ]}
        />
      </div>
      <TextareaField label={t.labelMessage} name="message" value={form.message} onChange={handleChange} placeholder={t.messagePlaceholder} rows={5} />
      <div className="flex items-center justify-between gap-6 pt-2">
        <p className="font-sans text-brand-gray text-xs leading-relaxed max-w-xs">{t.privacy}</p>
        <Button type="submit" variant="primary" size="lg" disabled={loading}>
          {loading ? t.sending : t.send}
        </Button>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string; name: string; type: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; placeholder?: string;
}

function Field({ label, name, type, value, onChange, required, placeholder }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gray">
        {label}{required && <span className="text-brand-accent ml-1">*</span>}
      </span>
      <input
        type={type} name={name} value={value} onChange={onChange}
        required={required} placeholder={placeholder}
        className="bg-brand-tertiary border border-brand-border text-white font-sans text-sm px-4 py-3 outline-none focus:border-brand-accent transition-colors duration-200 placeholder:text-brand-gray/50"
      />
    </label>
  );
}

interface SelectFieldProps {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

function SelectField({ label, name, value, onChange, options }: SelectFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gray">{label}</span>
      <select
        name={name} value={value} onChange={onChange}
        className="bg-brand-tertiary border border-brand-border text-white font-sans text-sm px-4 py-3 outline-none focus:border-brand-accent transition-colors duration-200 appearance-none cursor-pointer"
        style={{ color: value ? "white" : "#8A8A8A" }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} style={{ background: "#1E1E1E" }}>{opt.label}</option>
        ))}
      </select>
    </label>
  );
}

interface TextareaFieldProps {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string; rows?: number;
}

function TextareaField({ label, name, value, onChange, placeholder, rows = 4 }: TextareaFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gray">{label}</span>
      <textarea
        name={name} value={value} onChange={onChange}
        placeholder={placeholder} rows={rows}
        className="bg-brand-tertiary border border-brand-border text-white font-sans text-sm px-4 py-3 outline-none focus:border-brand-accent transition-colors duration-200 placeholder:text-brand-gray/50 resize-none"
      />
    </label>
  );
}
