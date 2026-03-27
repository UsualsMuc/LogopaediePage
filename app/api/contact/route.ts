import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL;
const toEmail = process.env.CONTACT_TO_EMAIL;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  if (!resendApiKey || !fromEmail || !toEmail) {
    console.error("[contact] Missing env configuration", {
      hasContactFromEmail: Boolean(fromEmail),
      hasContactToEmail: Boolean(toEmail),
      hasResendApiKey: Boolean(resendApiKey)
    });

    return Response.json(
      {
        error:
          "Die E-Mail-Funktion ist noch nicht konfiguriert. Bitte RESEND_API_KEY, CONTACT_FROM_EMAIL und CONTACT_TO_EMAIL setzen."
      },
      { status: 500 }
    );
  }

  const body = (await request.json()) as {
    email?: string;
    message?: string;
    name?: string;
  };

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
      fromEmail,
      toEmail
    });

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
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

      return Response.json({ error: "Der Versand ist fehlgeschlagen." }, { status: 500 });
    }

    console.info("[contact] Email sent successfully", {
      fromEmail,
      replyTo: email,
      toEmail
    });

    return Response.json({ message: "Die Nachricht wurde versendet." });
  } catch (error) {
    console.error("[contact] Unexpected error while sending email", error);

    return Response.json({ error: "Der Versand ist fehlgeschlagen." }, { status: 500 });
  }
}
