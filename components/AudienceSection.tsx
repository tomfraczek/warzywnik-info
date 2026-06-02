const audiences = [
  {
    icon: "🌱",
    title: "Początkujący ogrodnicy",
    description:
      "Nie wiesz, od czego zacząć? Warzywnik poprowadzi Cię krok po kroku — od siewu po zbiory.",
  },
  {
    icon: "🏡",
    title: "Działkowcy",
    description:
      "Masz swój kawałek ogrodu na działce? Łatwo zarządzaj wieloma uprawami i nie przegap ważnych terminów.",
  },
  {
    icon: "📦",
    title: "Miłośnicy podwyższonych grządek",
    description:
      "Planujesz uprawy w skrzyniach i donicach? Śledź każdą grządkę osobno i dostosowuj opiekę do konkretnych roślin.",
  },
  {
    icon: "📋",
    title: "Osoby lubiące porządek",
    description:
      "Chcesz mieć wszystko pod kontrolą? Zamiast notatek i arkuszy kalkulacyjnych — jedna prosta aplikacja.",
  },
];

export default function AudienceSection() {
  return (
    <section id="audience" className="bg-green-pale py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-green-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Dla kogo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite">
            Dla kogo jest Warzywnik?
          </h2>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold text-[#1c1c2e] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-[#3d3d52] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
