const features = [
  {
    icon: "🗺️",
    title: "Planowanie grządek",
    description: "Twórz grządki i przypisuj do nich uprawy.",
  },
  {
    icon: "📅",
    title: "Kalendarz upraw",
    description:
      "Sprawdzaj terminy siewu, sadzenia, pielęgnacji i zbiorów.",
  },
  {
    icon: "✅",
    title: "Zadania i przypomnienia",
    description:
      "Otrzymuj podpowiedzi, kiedy wykonać ważne prace w ogrodzie.",
  },
  {
    icon: "💡",
    title: "Sugestie dla roślin",
    description:
      "Korzystaj z praktycznych wskazówek dopasowanych do upraw.",
  },
  {
    icon: "⛅",
    title: "Pogoda i alerty",
    description:
      "Reaguj na zmiany pogody, ryzyko dla ogrodu i warunki upraw.",
  },
  {
    icon: "🥦",
    title: "Baza warzyw",
    description:
      "Sprawdzaj podstawowe informacje o popularnych warzywach.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#2d6a4f] font-semibold text-sm uppercase tracking-widest mb-3">
            Funkcje
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c2e]">
            Co możesz zrobić w aplikacji?
          </h2>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#f5f0e8] rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="font-bold text-[#1c1c2e] text-lg">
                {feature.title}
              </h3>
              <p className="text-[#3d3d52] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
