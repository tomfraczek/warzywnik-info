import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Regulamin – Warzywnik",
  description: "Regulamin korzystania z aplikacji mobilnej Warzywnik.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalPageLayout title="Regulamin" lastUpdated="1 czerwca 2026">
        <h2>Postanowienia ogólne</h2>
        <p>
          Niniejszy Regulamin określa zasady korzystania z aplikacji mobilnej{" "}
          {SITE_NAME} (dalej: &bdquo;Aplikacja&rdquo;), dostępnej w sklepie
          Google Play. Korzystanie z Aplikacji oznacza akceptację niniejszego
          Regulaminu.
        </p>

        <h2>Charakter aplikacji</h2>
        <p>
          Aplikacja {SITE_NAME} jest narzędziem wspomagającym planowanie i
          prowadzenie upraw ogrodniczych. Informacje, sugestie i kalendarze
          upraw dostępne w Aplikacji mają charakter wyłącznie pomocniczy i
          edukacyjny. Twórcy Aplikacji nie gwarantują efektów uprawy ani
          jakichkolwiek wyników ogrodniczych. Warunki pogodowe, gleba, odmiany
          roślin oraz wiele innych czynników zewnętrznych mają bezpośredni wpływ
          na wyniki upraw.
        </p>
        <p>
          Użytkownik korzysta z Aplikacji na własną odpowiedzialność i
          samodzielnie podejmuje decyzje ogrodnicze.
        </p>

        <h2>Konto użytkownika</h2>
        <p>
          Korzystanie z pełnej funkcjonalności Aplikacji może wymagać założenia
          konta. Użytkownik zobowiązany jest do podania prawdziwych danych i
          utrzymania poufności swoich danych logowania. Jedno konto przypisane
          jest do jednej osoby.
        </p>
        <p>
          [PLACEHOLDER – opisz tutaj szczegółowe zasady dotyczące konta,
          usuwania konta oraz co dzieje się z danymi po usunięciu konta.]
        </p>

        <h2>Korzystanie z aplikacji</h2>
        <p>Użytkownik zobowiązuje się do:</p>
        <ul>
          <li>korzystania z Aplikacji zgodnie z jej przeznaczeniem,</li>
          <li>nienaruszania praw osób trzecich,</li>
          <li>
            niepodejmowania działań mogących zakłócić działanie Aplikacji lub
            jej infrastruktury.
          </li>
        </ul>
        <p>
          Zabrania się używania Aplikacji do celów niezgodnych z prawem lub
          dobrymi obyczajami.
        </p>

        <h2>Powiadomienia i sugestie</h2>
        <p>
          Aplikacja może wysyłać powiadomienia push oraz wyświetlać sugestie
          ogrodnicze dopasowane do wprowadzonych upraw. Sugestie mają charakter
          pomocniczy i nie zastępują profesjonalnych porad agrotechnicznych.
          Skuteczność sugestii może się różnić w zależności od regionu, rodzaju
          gleby, warunków pogodowych i odmiany rośliny.
        </p>

        <h2>Ograniczenie odpowiedzialności</h2>
        <p>Twórca Aplikacji nie ponosi odpowiedzialności za:</p>
        <ul>
          <li>skutki decyzji ogrodniczych podjętych na podstawie Aplikacji,</li>
          <li>utratę plonów lub straty materialne wynikające z upraw,</li>
          <li>
            przerwy w działaniu Aplikacji spowodowane czynnikami zewnętrznymi,
          </li>
          <li>utratę danych spowodowaną awarią urządzenia użytkownika.</li>
        </ul>
        <p>
          Aplikacja dostarczana jest w stanie &bdquo;takim, jaki jest&rdquo;
          (as-is), bez gwarancji jakiegokolwiek rodzaju.
        </p>

        <h2>Zmiany w regulaminie</h2>
        <p>
          Twórca zastrzega sobie prawo do zmiany niniejszego Regulaminu. O
          istotnych zmianach użytkownicy zostaną poinformowani za pośrednictwem
          Aplikacji lub drogą e-mailową. Dalsze korzystanie z Aplikacji po
          wprowadzeniu zmian oznacza ich akceptację.
        </p>

        <h2>Kontakt</h2>
        <p>
          W sprawach dotyczących Regulaminu prosimy o kontakt pod adresem:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalPageLayout>
      <Footer />
    </>
  );
}
