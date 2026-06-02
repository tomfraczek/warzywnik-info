import Link from "next/link";
import { CONTACT_EMAIL, GOOGLE_PLAY_URL } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-3">
              <span className="text-2xl">🌱</span>
              <span>Warzywnik</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Inteligentna aplikacja mobilna dla ogrodników — planuj uprawy,
              prowadź grządki i nie przegap ważnych terminów.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-gray-300 font-semibold text-sm uppercase tracking-widest mb-4">
              Nawigacja
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Strona główna
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Regulamin
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gray-300 font-semibold text-sm uppercase tracking-widest mb-4">
              Kontakt
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-5">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold bg-green-primary text-white px-4 py-2 rounded-lg hover:bg-green-mid transition-colors"
              >
                Google Play →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © {currentYear} Warzywnik. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
