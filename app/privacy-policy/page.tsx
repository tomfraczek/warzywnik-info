import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Polityka prywatności – Warzywnik",
  description: "Polityka prywatności aplikacji mobilnej Warzywnik.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Polityka prywatności"
        lastUpdated="1 czerwca 2026"
      >
        <h2>Administrator danych</h2>
        <p>
          Administratorem danych osobowych użytkowników aplikacji Warzywnik jest
          [PLACEHOLDER – imię, nazwisko lub nazwa firmy, adres]. W sprawach
          dotyczących ochrony danych osobowych można kontaktować się pod
          adresem: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Jakie dane mogą być przetwarzane</h2>
        <p>
          W zależności od sposobu korzystania z aplikacji, mogą być przetwarzane
          następujące dane:
        </p>
        <ul>
          <li>Adres e-mail (przy rejestracji konta)</li>
          <li>Dane wprowadzone przez użytkownika (grządki, uprawy, notatki)</li>
          <li>
            Dane techniczne urządzenia (system operacyjny, wersja aplikacji)
          </li>
          <li>
            Dane analityczne (anonimowe statystyki użytkowania – [PLACEHOLDER –
            potwierdź, jakie narzędzia analityczne są używane])
          </li>
        </ul>

        <h2>Cel przetwarzania danych</h2>
        <p>Dane przetwarzane są w celu:</p>
        <ul>
          <li>świadczenia usług aplikacji Warzywnik,</li>
          <li>obsługi konta użytkownika,</li>
          <li>wysyłania powiadomień push (za zgodą użytkownika),</li>
          <li>
            poprawy jakości aplikacji na podstawie anonimowych danych
            analitycznych.
          </li>
        </ul>

        <h2>Logowanie i konto użytkownika</h2>
        <p>
          Aplikacja umożliwia założenie konta użytkownika. Logowanie odbywa się
          za pośrednictwem usługi [PLACEHOLDER – np. Clerk, Firebase Auth lub
          innego dostawcy]. Dane logowania są przetwarzane zgodnie z polityką
          prywatności wybranego dostawcy usług uwierzytelniania.
        </p>

        <h2>Dane techniczne i analityczne</h2>
        <p>
          Aplikacja może zbierać anonimowe dane techniczne, takie jak informacje
          o urządzeniu, wersji systemu operacyjnego czy sposobie korzystania z
          funkcji. Dane te służą wyłącznie do poprawy jakości aplikacji i nie są
          powiązane z tożsamością użytkownika.
        </p>
        <p>
          [PLACEHOLDER – jeśli używasz Google Analytics, Firebase Analytics,
          Sentry lub innego narzędzia, opisz je tutaj.]
        </p>

        <h2>Powiadomienia push</h2>
        <p>
          Aplikacja może wysyłać powiadomienia push, jeśli użytkownik wyrazi na
          to zgodę. Zgoda na powiadomienia może być wycofana w dowolnym momencie
          w ustawieniach urządzenia.
        </p>

        <h2>Usługi zewnętrzne</h2>
        <p>Aplikacja może korzystać z następujących usług zewnętrznych:</p>
        <ul>
          <li>
            [PLACEHOLDER – wymień używane usługi, np. Firebase, Clerk,
            OpenWeatherMap, Sentry itp. i opisz cel ich użycia]
          </li>
        </ul>
        <p>
          Każda z tych usług posiada własną politykę prywatności, za którą
          administrator aplikacji Warzywnik nie ponosi odpowiedzialności.
        </p>

        <h2>Prawa użytkownika</h2>
        <p>Użytkownikowi przysługuje prawo do:</p>
        <ul>
          <li>dostępu do swoich danych osobowych,</li>
          <li>ich sprostowania lub usunięcia,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>
            wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony
            Danych Osobowych).
          </li>
        </ul>

        <h2>Kontakt</h2>
        <p>
          W sprawach związanych z prywatnością lub przetwarzaniem danych prosimy
          o kontakt pod adresem:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalPageLayout>
      <Footer />
    </>
  );
}
