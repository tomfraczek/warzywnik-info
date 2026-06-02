import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warzywnik – inteligentna aplikacja dla ogrodników",
  description:
    "Warzywnik pomaga planować uprawy, prowadzić grządki, pilnować terminów i szybciej reagować na potrzeby roślin. Pobierz z Google Play.",
  metadataBase: new URL("https://warzywnik.pl"),
  openGraph: {
    title: "Warzywnik – inteligentna aplikacja dla ogrodników",
    description:
      "Planuj uprawy, prowadź grządki i nie przegap ważnych terminów ogrodniczych.",
    siteName: "Warzywnik",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
