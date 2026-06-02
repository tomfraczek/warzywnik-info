import Image from "next/image";
import { GOOGLE_PLAY_URL } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section className="bg-green-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="text-5xl">🌻</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          Zacznij prowadzić swój warzywnik z aplikacją
        </h2>
        <p className="text-green-light text-lg max-w-xl leading-relaxed">
          Pobierz aplikację i uporządkuj swój sezon ogrodniczy.
        </p>
        <GooglePlayBadge />
      </div>
    </section>
  );
}

export function GooglePlayBadge() {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 hover:opacity-90 transition-opacity"
    >
      <Image
        src="/google-play-badge.png"
        alt="Pobierz z Google Play"
        width={200}
        height={77}
        style={{ height: "auto" }}
        priority
      />
    </a>
  );
}
