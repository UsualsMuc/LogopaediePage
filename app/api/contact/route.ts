import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  if (!resendApiKey || !fromEmail) {
    return Response.json(
      {
        error:
          "Die E-Mail-Funktion ist noch nicht konfiguriert. Bitte RESEND_API_KEY und CONTACT_FROM_EMAIL setzen."
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

  if (!name || !email || !message) {
    return Response.json({ error: "Bitte alle Felder ausfullen." }, { status: 400 });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: ["novaro-build@gmail.com"],
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
      return Response.json({ error: "Der Versand ist fehlgeschlagen." }, { status: 500 });
    }

    return Response.json({ message: "Die Nachricht wurde versendet." });
  } catch {
    return Response.json({ error: "Der Versand ist fehlgeschlagen." }, { status: 500 });
  }
}
