import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
const recipientEmail = process.env.CONTACT_TO_EMAIL;

console.log("[contact] route loaded env values", {
  CONTACT_TO_EMAIL: recipientEmail ?? "MISSING",
  GMAIL_APP_PASSWORD: gmailAppPassword ? "SET" : "MISSING",
  GMAIL_USER: gmailUser ?? "MISSING"
});

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
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL ?? "MISSING",
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? "SET" : "MISSING",
    GMAIL_USER: process.env.GMAIL_USER ?? "MISSING"
  });

  const rawBody = await request.text();
  console.log("[contact] raw request body", rawBody);

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
    return Response.json({ error: "Ungueltige Anfrage." }, { status: 400 });
  }

  if (!gmailUser || !gmailAppPassword || !recipientEmail) {
    console.error("[contact] Missing env configuration", {
      hasContactToEmail: Boolean(recipientEmail),
      hasGmailAppPassword: Boolean(gmailAppPassword),
      hasGmailUser: Boolean(gmailUser)
    });

    return Response.json(
      {
        error:
          "Die E-Mail-Funktion ist noch nicht konfiguriert. Bitte GMAIL_USER, GMAIL_APP_PASSWORD und CONTACT_TO_EMAIL setzen."
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
    return Response.json({ error: "Bitte alle Felder ausfullen." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return Response.json({ error: "Bitte eine gueltige E-Mail-Adresse eingeben." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    auth: {
      pass: gmailAppPassword,
      user: gmailUser
    },
    service: "gmail"
  });

  try {
    console.info("[contact] Sending email via Gmail", {
      from: gmailUser,
      replyTo: email,
      to: recipientEmail
    });

    await transporter.sendMail({
      from: `"Novaro" <${gmailUser}>`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #18333a;">
          <h2>Neue Anfrage uber Novaro</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
        </div>
      `,
      replyTo: email,
      subject: `Neue Novaro Anfrage von ${name}`,
      to: recipientEmail
    });

    console.info("[contact] Email sent successfully");

    return Response.json({ message: "Die Nachricht wurde versendet." });
  } catch (error) {
    console.error("[contact] Unexpected error while sending email", error);
    return Response.json({ error: "Der Versand ist fehlgeschlagen." }, { status: 500 });
  }
}
