import Image from "next/image";
import { GooglePlayBadge } from "./CtaSection";

export default function HeroSection() {
  return (
    <section className="bg-green-pale pt-14 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
    <div className="relative w-full max-w-[420px] scale-[0.9504] origin-center">
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-green-primary/20 bg-white p-2">
        <Image
          src="/hero_family.png"
          alt="Rodzina korzystająca z aplikacji Warzywnik"
          width={640}
          height={760}
          className="w-full h-auto rounded-[1.5rem] object-cover"
          priority
        />
      </div>

      <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-light rounded-full opacity-60 -z-10" />
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-beige rounded-full opacity-80 -z-10" />
    </div>
  );
}
