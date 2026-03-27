import { Resend } from "resend";

export const dynamic = "force-dynamic";

const resendApiKey = process.env.RESEND_API_KEY;
const senderEmail = process.env.CONTACT_FROM_EMAIL;
const recipientEmail = process.env.CONTACT_TO_EMAIL;

  console.log("[contact] route loaded env values", {
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL ?? "MISSING",
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL ?? "MISSING",
  RESEND_API_KEY: process.env.RESEND_API_KEY ?? "MISSING"
});

process.stdout.write(
  `[contact] route loaded env values stdout ${JSON.stringify({
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL ?? "MISSING",
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL ?? "MISSING",
    RESEND_API_KEY: process.env.RESEND_API_KEY ?? "MISSING"
  })}\n`
);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  console.log("[contact] process.env values", {
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL ?? "MISSING",
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL ?? "MISSING",
    RESEND_API_KEY: process.env.RESEND_API_KEY ?? "MISSING"
  });

  const rawBody = await request.text();
  console.log("[contact] raw request body", rawBody);
  process.stdout.write(
    `[contact] request debug ${JSON.stringify({
      CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL ?? "MISSING",
      CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL ?? "MISSING",
      RESEND_API_KEY: process.env.RESEND_API_KEY ?? "MISSING",
      rawBody
    })}\n`
  );

  let body: {
    email?: string;
    message?: string;
    name?: string;
  };

  try {
    body = JSON.parse(rawBody) as {
      email?: string;
      message?: string;
      name?: string;
    };
  } catch (error) {
    console.error("[contact] invalid json body", error);
    process.stderr.write(`[contact] invalid json body ${String(error)}\n`);
    return Response.json({ error: "Ungueltige Anfrage." }, { status: 400 });
  }

  if (!resendApiKey || !senderEmail || !recipientEmail) {
    console.error("[contact] Missing env configuration", {
      hasContactFromEmail: Boolean(senderEmail),
      hasContactToEmail: Boolean(recipientEmail),
      hasResendApiKey: Boolean(resendApiKey)
    });
    process.stderr.write(
      `[contact] missing env configuration ${JSON.stringify({
        hasContactFromEmail: Boolean(senderEmail),
        hasContactToEmail: Boolean(recipientEmail),
        hasResendApiKey: Boolean(resendApiKey)
      })}\n`
    );

    return Response.json(
      {
        error:
          "Die E-Mail-Funktion ist noch nicht konfiguriert. Bitte RESEND_API_KEY, CONTACT_FROM_EMAIL und CONTACT_TO_EMAIL setzen."
      },
      { status: 500 }
    );
  }

  const name = body.name?.toString().trim();
  const email = body.email?.toString().trim();
  const message = body.message?.toString().trim();

  console.info("[contact] Incoming contact request", {
    email,
    hasMessage: Boolean(message),
    messageLength: message?.length ?? 0,
    name
  });

  if (!name || !email || !message) {
    console.warn("[contact] Validation failed: missing fields", {
      hasEmail: Boolean(email),
      hasMessage: Boolean(message),
      hasName: Boolean(name)
    });

    return Response.json({ error: "Bitte alle Felder ausfullen." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    console.warn("[contact] Validation failed: invalid email", { email });

    return Response.json({ error: "Bitte eine gueltige E-Mail-Adresse eingeben." }, { status: 400 });
  }

  const resend = new Resend(resendApiKey);

  try {
    console.info("[contact] Sending email via Resend", {
      recipientEmail,
      senderEmail
    });

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `Neue Novaro Anfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #18333a;">
          <h2>Neue Anfrage uber Novaro</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
        </div>
      `
    });

    if (error) {
      console.error("[contact] Resend returned an error", error);
      process.stderr.write(`[contact] resend error ${JSON.stringify(error)}\n`);

      return Response.json({ error: "Der Versand ist fehlgeschlagen." }, { status: 500 });
    }

    console.info("[contact] Email sent successfully", {
      recipientEmail,
      replyTo: email,
      senderEmail
    });

    return Response.json({ message: "Die Nachricht wurde versendet." });
  } catch (error) {
    console.error("[contact] Unexpected error while sending email", error);
    process.stderr.write(`[contact] unexpected error ${String(error)}\n`);

    return Response.json({ error: "Der Versand ist fehlgeschlagen." }, { status: 500 });
  }
}
