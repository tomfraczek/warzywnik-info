import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt – Warzywnik",
  description: "Skontaktuj się z twórcami aplikacji Warzywnik.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-5xl mb-6 block">✉️</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-graphite mb-4">
            Kontakt
          </h1>
          <p className="text-graphite-mid text-lg leading-relaxed mb-8">
            Masz pytanie dotyczące aplikacji Warzywnik? Napisz do nas — chętnie
            odpiszemy.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-3 bg-green-primary text-white font-semibold px-8 py-4 rounded-2xl hover:bg-green-mid transition-colors text-lg"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
