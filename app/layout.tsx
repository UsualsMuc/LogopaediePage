import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novaro | Werkzeug für den Logopäden von morgen",
  description:
    "Werkzeug für den Logopäden von morgen: Novaro schafft fantasiegestützte Inhalte für Kinder und spart Zeit im therapeutischen Alltag.",
  openGraph: {
    title: "Novaro | Werkzeug für den Logopäden von morgen",
    description:
      "Werkzeug für den Logopäden von morgen: fantasiegestützte Inhalte für Kinder, direkt nutzbar im therapeutischen Alltag.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Novaro Vorschau mit dem Satz Werkzeug für den Logopäden von morgen"
      }
    ],
    locale: "de_DE",
    siteName: "Novaro",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Novaro | Werkzeug für den Logopäden von morgen",
    description:
      "Fantasiegestützte Inhalte für Kinder, direkt nutzbar im therapeutischen Alltag.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
