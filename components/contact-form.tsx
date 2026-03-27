"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const requestBody = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    console.log("[contact-form] outgoing request", requestBody);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const payload = (await response.json()) as { error?: string; message?: string };
    console.log("[contact-form] response", {
      ok: response.ok,
      payload,
      status: response.status
    });

    if (!response.ok) {
      setStatus("error");
      setMessage(payload.error ?? "Die Nachricht konnte nicht gesendet werden.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage(payload.message ?? "Nachricht erfolgreich gesendet.");
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input
        className="rounded-[1.25rem] border border-line bg-white px-4 py-4 text-sm outline-none transition focus:border-accent"
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className="rounded-[1.25rem] border border-line bg-white px-4 py-4 text-sm outline-none transition focus:border-accent"
        type="email"
        name="email"
        placeholder="E-Mail"
        required
      />
      <textarea
        className="min-h-32 rounded-[1.25rem] border border-line bg-white px-4 py-4 text-sm outline-none transition focus:border-accent"
        name="message"
        placeholder="Nachricht"
        required
      />
      <button
        className="w-full rounded-full bg-brand px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#c15b29] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
      </button>
      {message ? (
        <p
          className={`text-sm ${status === "success" ? "text-success" : "text-[#b6544f]"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
