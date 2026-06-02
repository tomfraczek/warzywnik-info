import Link from "next/link";
import { GooglePlayBadge } from "./CtaSection";

export default function HeroSection() {
  return (
    <section className="bg-green-pale pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white text-green-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-green-light w-fit shadow-sm">
              <span>🌿</span>
              <span>Aplikacja mobilna</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-graphite leading-tight">
              Twój inteligentny pomocnik{" "}
              <span className="text-green-primary">w warzywniku</span>
            </h1>

            <p className="text-lg text-graphite-mid leading-relaxed max-w-lg">
              Warzywnik pomaga planować uprawy, prowadzić grządki, pilnować
              terminów i szybciej reagować na potrzeby roślin.
            </p>

            <GooglePlayBadge />
          </div>

          {/* Phone mockup placeholder */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-64 sm:w-72">
      {/* Phone frame */}
      <div className="relative bg-graphite rounded-[2.5rem] p-3 shadow-2xl shadow-green-primary/20">
        {/* Screen */}
        <div className="bg-green-pale rounded-4xl overflow-hidden aspect-9/19">
          {/* Status bar */}
          <div className="bg-green-primary px-5 py-3 flex items-center justify-between">
            <span className="text-white text-xs font-medium">9:41</span>
            <span className="text-white text-xs">Warzywnik</span>
            <span className="text-white text-xs">●●●</span>
          </div>

          {/* App content preview */}
          <div className="p-4 flex flex-col gap-3">
            <p className="text-graphite font-bold text-sm">Moje grządki 🌱</p>

            {/* Bed card */}
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-green-primary">
                  Grządka #1
                </span>
                <span className="text-xs bg-green-light text-green-primary px-2 py-0.5 rounded-full">
                  aktywna
                </span>
              </div>
              <div className="flex gap-2">
                {["🍅", "🥦", "🥕"].map((v) => (
                  <div
                    key={v}
                    className="bg-green-pale rounded-lg p-1.5 text-sm"
                  >
                    {v}
                  </div>
                ))}
              </div>
            </div>

            {/* Task card */}
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <p className="text-xs font-semibold text-graphite mb-2">
                Dziś do zrobienia
              </p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs text-graphite-mid">
                  <span className="w-4 h-4 rounded-full bg-green-light flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  Podlej pomidory
                </div>
                <div className="flex items-center gap-2 text-xs text-graphite-mid">
                  <span className="w-4 h-4 rounded-full border border-green-light flex items-center justify-center text-[10px]" />
                  Sprawdź marchewki
                </div>
              </div>
            </div>

            {/* Alert card */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
              <p className="text-xs font-semibold text-amber-700 mb-1">
                ⚠️ Alert pogodowy
              </p>
              <p className="text-xs text-amber-600">
                Jutro nocny przymrozek. Zabezpiecz sadzonki.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-light rounded-full opacity-60 -z-10" />
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-beige rounded-full opacity-80 -z-10" />
    </div>
  );
}
