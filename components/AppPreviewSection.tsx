const previews = [
  {
    title: "Moje grządki",
    emoji: "🗺️",
    lines: [
      "Grządka #1 — pomidory, papryka",
      "Grządka #2 — marchew, cebula",
      "Grządka #3 — sałata, rukola",
    ],
    tag: "3 aktywne",
    tagColor: "bg-[#d8f3dc] text-[#2d6a4f]",
  },
  {
    title: "Dzisiejszy plan",
    emoji: "✅",
    lines: [
      "Podlej pomidory",
      "Sprawdź stan marchewek",
      "Wysiewa pora po 15 maja",
    ],
    tag: "3 zadania",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    title: "Alerty i sugestie",
    emoji: "⚠️",
    lines: [
      "Nocny przymrozek — jutro rano",
      "Brakuje nawodnienia — papryka",
      "Termin siewu buraka — teraz",
    ],
    tag: "2 alerty",
    tagColor: "bg-red-50 text-red-600",
  },
];

export default function AppPreviewSection() {
  return (
    <section className="bg-beige py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-green-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Twój sezon pod kontrolą
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-graphite mb-5 leading-snug">
              Mniej chaosu, więcej kontroli nad sezonem
            </h2>
            <p className="text-graphite-mid text-lg leading-relaxed">
              Zamiast zapisywać wszystko w notatniku, możesz prowadzić swój
              warzywnik w jednej aplikacji — od planowania po zbiory.
            </p>
          </div>

          {/* Preview cards */}
          <div className="flex flex-col gap-5">
            {previews.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl shrink-0">{card.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-graphite text-base">
                      {card.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${card.tagColor}`}
                    >
                      {card.tag}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {card.lines.map((line) => (
                      <li
                        key={line}
                        className="text-sm text-graphite-mid flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-primary shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
