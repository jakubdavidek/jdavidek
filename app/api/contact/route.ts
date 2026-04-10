import { NextRequest, NextResponse } from "next/server";

// ── Konfigurace ────────────────────────────────────────────
// Vyberte jednu z možností níže a odkomentujte.
// Výchozí: Resend (doporučeno pro Next.js)
// ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validace
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Chybí povinná pole (name, email, message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Neplatná e-mailová adresa." }, { status: 400 });
    }

    // ── MOŽNOST A: Resend ─────────────────────────────────
    // npm install resend
    // Přidat do .env.local: RESEND_API_KEY=re_xxxxxx
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "web@jdavidek.cz",          // ← ověřená doména v Resend
    //   to: "jdavidek@centrum.cz",
    //   replyTo: email,
    //   subject: `Nová poptávka: ${service || "bez kategorie"} — ${name}`,
    //   html: emailTemplate({ name, email, phone, service, message }),
    // });

    // ── MOŽNOST B: Formspree (bez vlastního backendu) ────
    // Registrace na formspree.io, poté nahradit endpoint níže.
    //
    // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", Accept: "application/json" },
    //   body: JSON.stringify({ name, email, phone, service, message }),
    // });
    // if (!res.ok) throw new Error("Formspree error");

    // ── MOŽNOST C: Nodemailer (vlastní SMTP) ──────────────
    // npm install nodemailer @types/nodemailer
    // Přidat do .env.local: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
    //
    // import nodemailer from "nodemailer";
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT) || 587,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: `"jdavidek.cz" <${process.env.SMTP_USER}>`,
    //   to: "jdavidek@centrum.cz",
    //   replyTo: email,
    //   subject: `Poptávka: ${service || "obecná"} — ${name}`,
    //   html: emailTemplate({ name, email, phone, service, message }),
    // });

    // ── Aktuálně: simulace úspěchu (nahradit výše) ───────
    console.log("[Kontaktní formulář]", { name, email, phone, service, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[API /contact]", err);
    return NextResponse.json(
      { error: "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu." },
      { status: 500 }
    );
  }
}

// ── HTML šablona e-mailu ──────────────────────────────────
function emailTemplate({
  name,
  email,
  phone,
  service,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="cs">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;">
        
        <!-- Header -->
        <tr>
          <td style="background:#0d0d0d;padding:28px 32px;">
            <div style="font-family:Georgia,serif;font-size:22px;color:#fff;margin-bottom:3px;">Jiří Davídek</div>
            <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#ea6c00;">Čistící Služby — Nová poptávka</div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:28px 32px;">
            <h2 style="font-size:16px;font-weight:600;color:#111;margin:0 0 20px;">Nová zpráva z webu</h2>

            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
              ${row("Jméno", name)}
              ${row("E-mail", `<a href="mailto:${email}" style="color:#ea6c00">${email}</a>`)}
              ${phone ? row("Telefon", `<a href="tel:${phone.replace(/\s/g,"")}" style="color:#ea6c00">${phone}</a>`) : ""}
              ${service ? row("Služba", service) : ""}
              <tr>
                <td style="padding:10px 0 4px;color:#888;width:120px;vertical-align:top;">Zpráva</td>
                <td style="padding:10px 0 4px;color:#111;border-bottom:1px solid #f0f0f0">
                  <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
                </td>
              </tr>
            </table>

            <div style="margin-top:24px;">
              <a href="mailto:${email}?subject=Re: Vaše poptávka — jdavidek.cz"
                 style="display:inline-block;background:#ea6c00;color:#fff;text-decoration:none;padding:10px 20px;border-radius:30px;font-size:13px;font-weight:600;">
                Odpovědět
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9f7f4;padding:16px 32px;font-size:11px;color:#bbb;">
            Tato zpráva byla odeslána přes kontaktní formulář na jdavidek.cz.
            Pro přímý kontakt: +420 606 513 793
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
`.trim();
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 0;color:#888;width:120px;border-bottom:1px solid #f5f5f5;vertical-align:top;">${label}</td>
      <td style="padding:8px 0;color:#111;border-bottom:1px solid #f5f5f5;">${value}</td>
    </tr>`;
}

function escapeHtml(str: string) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
