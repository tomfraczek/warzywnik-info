import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Polityka prywatności | Warzywnik",
  description:
    "Polityka prywatności aplikacji mobilnej Warzywnik — informacje o tym, jakie dane są zbierane, w tym podczas logowania przez Google, oraz jak są wykorzystywane.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Polityka prywatności"
        lastUpdated="21 września 2026"
        showDraftNotice={false}
      >
        <p>
          Niniejsza polityka prywatności opisuje, jakie dane są przetwarzane w
          związku z korzystaniem z aplikacji mobilnej Warzywnik oraz strony
          internetowej warzywnik.info (dalej łącznie: &bdquo;Warzywnik&rdquo;
          lub &bdquo;Aplikacja&rdquo;), a także w jakich celach i na jakiej
          podstawie prawnej te dane są wykorzystywane.
        </p>

        <h2>1. Administrator danych</h2>
        <p>
          Administratorem danych osobowych przetwarzanych w związku z
          korzystaniem z Aplikacji Warzywnik jest podmiot prowadzący Aplikację
          (dalej: &bdquo;Administrator&rdquo;). W każdej sprawie dotyczącej
          ochrony danych osobowych, w tym w celu skorzystania z praw opisanych
          w niniejszej polityce, można kontaktować się z Administratorem pod
          adresem e-mail:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>2. Jakie dane są przetwarzane</h2>
        <p>
          W związku z korzystaniem z Aplikacji mogą być przetwarzane
          następujące kategorie danych:
        </p>
        <ul>
          <li>adres e-mail,</li>
          <li>identyfikator użytkownika (ID konta w Aplikacji),</li>
          <li>
            podstawowe dane profilu, jeśli zostaną udostępnione (np. imię i
            nazwisko, zdjęcie profilowe),
          </li>
          <li>
            dane przekazywane podczas logowania przez konto Google — opisane
            szczegółowo w sekcji &bdquo;Logowanie przez Google&rdquo;,
          </li>
          <li>
            dane wprowadzane samodzielnie przez użytkownika w ramach
            korzystania z Aplikacji: warzywniki, grządki, uprawy, rośliny,
            terminy, zadania, notatki oraz inne dane zapisywane w Aplikacji,
          </li>
          <li>
            dane dotyczące subskrypcji i statusu Premium (np. rodzaj planu,
            status i okres ważności subskrypcji),
          </li>
          <li>
            token urządzenia wykorzystywany do wysyłania powiadomień push,
          </li>
          <li>
            podstawowe dane techniczne urządzenia i Aplikacji (np. system
            operacyjny, wersja Aplikacji),
          </li>
          <li>
            lokalizacja geograficzna — wyłącznie w przypadku wyrażenia
            odrębnej zgody na dostęp do lokalizacji.
          </li>
        </ul>
        <p>
          Warzywnik nie sprzedaje danych osobowych użytkowników jakimkolwiek
          podmiotom trzecim.
        </p>

        <h2>3. Logowanie przez Google</h2>
        <p>
          Aplikacja umożliwia zalogowanie się przy użyciu konta Google
          (Google Sign-In). Proces logowania przez Google jest obsługiwany za
          pośrednictwem dostawcy usług uwierzytelniania Clerk, opisanego
          szczegółowo w sekcji &bdquo;Clerk&rdquo; poniżej.
        </p>
        <p>
          W przypadku skorzystania z logowania przez Google, Warzywnik może
          otrzymać od Google następujące dane:
        </p>
        <ul>
          <li>identyfikator konta Google,</li>
          <li>adres e-mail powiązany z kontem Google,</li>
          <li>
            podstawowe informacje profilowe udostępnione przez Google, np.
            imię, nazwisko oraz zdjęcie profilowe (o ile Google je udostępni).
          </li>
        </ul>
        <p>Dane te są wykorzystywane wyłącznie w celu:</p>
        <ul>
          <li>uwierzytelnienia użytkownika,</li>
          <li>utworzenia lub odnalezienia jego konta w Aplikacji Warzywnik,</li>
          <li>umożliwienia zalogowania się do Aplikacji,</li>
          <li>
            powiązania danych zapisanych w Aplikacji z właściwym
            użytkownikiem.
          </li>
        </ul>
        <p>Ponadto Warzywnik wyraźnie informuje, że:</p>
        <ul>
          <li>
            nie otrzymuje ani nie przechowuje hasła do konta Google
            użytkownika,
          </li>
          <li>
            nie uzyskuje poprzez logowanie Google dostępu do Gmaila, Dysku
            Google, Kalendarza, Kontaktów ani innych usług Google, które nie
            są niezbędne do procesu logowania,
          </li>
          <li>dane uzyskane za pośrednictwem Google nie są sprzedawane,</li>
          <li>
            dane uzyskane za pośrednictwem Google nie są wykorzystywane do
            profilowania reklamowego ani kierowania reklam.
          </li>
        </ul>

        <h2>4. Clerk</h2>
        <p>
          Proces rejestracji, logowania, uwierzytelniania oraz zarządzania
          sesją użytkownika obsługiwany jest przez Clerk — zewnętrznego
          dostawcę usług uwierzytelniania. Clerk może przetwarzać w tym celu
          m.in. adres e-mail, identyfikator użytkownika, podstawowe dane
          profilu oraz dane techniczne związane z sesją logowania (np. tokeny
          sesji).
        </p>

        <h2>5. Dane użytkownika dotyczące warzywnika</h2>
        <p>
          Dane wprowadzane samodzielnie przez użytkownika — takie jak
          warzywniki, grządki, uprawy, rośliny, terminy, zadania i notatki —
          są przechowywane w celu świadczenia funkcji Aplikacji oraz
          synchronizacji tych danych z kontem użytkownika, tak aby były
          dostępne po zalogowaniu na dowolnym urządzeniu.
        </p>

        <h2>6. Lokalizacja</h2>
        <p>
          Aplikacja może prosić o dostęp do lokalizacji urządzenia w celu
          ustalenia regionu użytkownika i dostarczenia dopasowanych funkcji
          pogodowych (np. prognozy pogody istotnej dla prowadzonych upraw).
          Dostęp do lokalizacji wymaga odrębnej zgody wyrażonej w systemowych
          ustawieniach urządzenia i może zostać w każdej chwili wycofany w
          ustawieniach systemu operacyjnego.
        </p>
        <p>
          Lokalizacja jest przekazywana do serwera Warzywnik, który wykorzystuje
          ją do pobrania danych pogodowych od zewnętrznego dostawcy danych
          meteorologicznych Open-Meteo. Lokalizacja nie jest wykorzystywana do
          celów reklamowych ani do śledzenia użytkownika.
        </p>

        <h2>7. Powiadomienia push</h2>
        <p>
          Aplikacja może wysyłać powiadomienia push, jeśli użytkownik wyrazi
          na to zgodę w systemowych ustawieniach urządzenia. W celu dostarczania
          powiadomień może być przechowywany token urządzenia (przypisany do
          konta użytkownika), wykorzystywany za pośrednictwem usług Expo
          obsługujących wysyłkę powiadomień w Aplikacji. Użytkownik może w
          każdej chwili wyłączyć powiadomienia w ustawieniach systemu
          operacyjnego swojego urządzenia.
        </p>

        <h2>8. Subskrypcje i płatności</h2>
        <p>
          Aplikacja umożliwia zakup płatnej subskrypcji Premium za
          pośrednictwem Google Play. Obsługa zakupów oraz statusu subskrypcji
          realizowana jest przy wsparciu RevenueCat — usługi zarządzającej
          uprawnieniami (entitlements) i statusem subskrypcji użytkownika.
        </p>
        <p>W związku z obsługą subskrypcji Aplikacja może otrzymywać:</p>
        <ul>
          <li>status subskrypcji,</li>
          <li>rodzaj wykupionego produktu,</li>
          <li>datę zakupu,</li>
          <li>datę wygaśnięcia subskrypcji,</li>
          <li>identyfikatory transakcji lub zakupu.</li>
        </ul>
        <p>
          Warzywnik nie otrzymuje pełnych danych karty płatniczej ani danych
          rachunku bankowego użytkownika — płatności są obsługiwane
          bezpośrednio przez Google Play.
        </p>

        <h2>9. Dane techniczne i bezpieczeństwo</h2>
        <p>
          W związku z korzystaniem z Aplikacji mogą być przetwarzane dane
          techniczne, takie jak: wersja Aplikacji, system operacyjny
          urządzenia, informacje o błędach oraz dane techniczne związane z
          komunikacją z serwerem Aplikacji, w tym adres IP, który może
          występować w logach infrastruktury serwerowej. Dane te są
          wykorzystywane w celach diagnostycznych, zapewnienia bezpieczeństwa,
          zapobiegania nadużyciom oraz prawidłowego działania Aplikacji.
        </p>

        <h2>10. Usługi zewnętrzne</h2>
        <p>
          W ramach działania Aplikacji wykorzystywane są następujące usługi
          zewnętrzne, którym mogą być przekazywane dane opisane powyżej:
        </p>
        <ul>
          <li>
            <strong>Google</strong> — logowanie przez konto Google (Google
            Sign-In),
          </li>
          <li>
            <strong>Clerk</strong> — uwierzytelnianie, rejestracja i
            zarządzanie kontem oraz sesją użytkownika,
          </li>
          <li>
            <strong>Google Play</strong> — obsługa zakupów i subskrypcji na
            urządzeniach z systemem Android,
          </li>
          <li>
            <strong>RevenueCat</strong> — zarządzanie statusem subskrypcji i
            uprawnieniami Premium,
          </li>
          <li>
            <strong>Expo</strong> — infrastruktura aplikacji mobilnej oraz
            wysyłka powiadomień push,
          </li>
          <li>
            <strong>Open-Meteo</strong> — dostawca danych meteorologicznych
            wykorzystywanych w funkcjach pogodowych Aplikacji,
          </li>
          <li>
            <strong>DigitalOcean</strong> — dostawca infrastruktury
            serwerowej, na której działa backend Aplikacji.
          </li>
        </ul>
        <p>
          Wymienieni dostawcy mogą przetwarzać dane zgodnie z własnymi
          politykami prywatności oraz umowami zawartymi z Administratorem,
          w zakresie niezbędnym do świadczenia usług wykorzystywanych przez
          Aplikację.
        </p>

        <h2>11. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
        <p>
          Niektórzy z wymienionych dostawców mogą przetwarzać dane poza
          Europejskim Obszarem Gospodarczym (EOG). W takich przypadkach
          stosowane są odpowiednie mechanizmy prawne przewidziane przez RODO,
          zapewniające właściwy poziom ochrony danych osobowych.
        </p>

        <h2>12. Podstawy prawne przetwarzania</h2>
        <p>Dane osobowe są przetwarzane na podstawie:</p>
        <ul>
          <li>
            art. 6 ust. 1 lit. b RODO — w celu wykonania umowy o świadczenie
            usług Aplikacji (np. utworzenie i obsługa konta),
          </li>
          <li>
            art. 6 ust. 1 lit. a RODO — na podstawie zgody użytkownika (np.
            zgoda na dostęp do lokalizacji lub na powiadomienia push),
          </li>
          <li>
            art. 6 ust. 1 lit. f RODO — w prawnie uzasadnionym interesie
            Administratora (np. zapewnienie bezpieczeństwa i prawidłowego
            działania Aplikacji),
          </li>
          <li>
            art. 6 ust. 1 lit. c RODO — w celu wypełnienia obowiązków
            prawnych ciążących na Administratorze, jeżeli taki obowiązek
            występuje.
          </li>
        </ul>

        <h2>13. Retencja danych</h2>
        <p>
          Dane konta są przechowywane przez czas korzystania z konta w
          Aplikacji. Po usunięciu konta dane są usuwane lub anonimizowane, o
          ile ich dalsze przechowywanie nie jest wymagane przez przepisy
          prawa lub nie jest niezbędne do zapewnienia bezpieczeństwa Aplikacji.
          Kopie zapasowe oraz logi systemowe mogą istnieć przez ograniczony
          okres wynikający z technicznych procesów utrzymania infrastruktury.
        </p>

        <h2>14. Usunięcie konta i danych</h2>
        <p>
          Aplikacja umożliwia samodzielne usunięcie konta bezpośrednio w
          ustawieniach Aplikacji. Po potwierdzeniu operacji trwale usuwane są
          m.in.: konto użytkownika, wszystkie grządki i przestrzenie
          uprawowe, uprawy i powiązane z nimi dane, zadania i rekomendacje,
          zapisana lokalizacja, preferencje powiadomień i urządzenia
          powiązane z powiadomieniami push, przypomnienia oraz dane pogodowe
          i alerty przypisane do konta.
        </p>
        <p>
          Użytkownik może również zwrócić się z prośbą o usunięcie konta lub
          danych drogą mailową, pisząc na adres:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>15. Udostępnianie danych</h2>
        <p>Warzywnik:</p>
        <ul>
          <li>nie sprzedaje danych osobowych użytkowników,</li>
          <li>
            może przekazywać dane dostawcom usług niezbędnym do działania
            Aplikacji, wymienionym w sekcji &bdquo;Usługi zewnętrzne&rdquo;,
          </li>
          <li>
            może udostępnić dane organom publicznym, jeżeli obowiązek taki
            wynika z przepisów prawa.
          </li>
        </ul>

        <h2>16. Reklamy i profilowanie</h2>
        <p>
          Aplikacja Warzywnik nie wyświetla reklam. Warzywnik nie wykorzystuje
          danych uzyskanych za pośrednictwem logowania Google ani innych
          danych użytkowników do profilowania reklamowego ani kierowania
          reklam, a dane te nie są sprzedawane.
        </p>

        <h2>17. Prawa użytkownika</h2>
        <p>
          Zgodnie z RODO użytkownikowi przysługuje prawo do:
        </p>
        <ul>
          <li>dostępu do swoich danych osobowych,</li>
          <li>sprostowania danych,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania,</li>
          <li>
            cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z
            prawem przetwarzania dokonanego przed jej cofnięciem,
          </li>
          <li>
            wniesienia skargi do organu nadzorczego — Prezesa Urzędu Ochrony
            Danych Osobowych.
          </li>
        </ul>
        <p>
          W celu skorzystania z powyższych praw prosimy o kontakt pod adresem
          e-mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>18. Bezpieczeństwo</h2>
        <p>
          Administrator stosuje odpowiednie środki techniczne i
          organizacyjne mające na celu ochronę danych osobowych użytkowników
          przed nieuprawnionym dostępem, utratą lub nieautoryzowanym
          ujawnieniem. Żaden system nie jest jednak w stanie zagwarantować
          absolutnego bezpieczeństwa danych.
        </p>

        <h2>19. Zmiany polityki</h2>
        <p>
          Niniejsza polityka prywatności może być okresowo aktualizowana, w
          szczególności w związku z rozwojem funkcji Aplikacji lub zmianami
          przepisów prawa. Aktualna wersja dokumentu jest zawsze publikowana
          pod adresem: warzywnik.info/privacy-policy.
        </p>

        <h2>20. Kontakt</h2>
        <p>
          W sprawach związanych z niniejszą polityką prywatności lub
          przetwarzaniem danych osobowych prosimy o kontakt pod adresem:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalPageLayout>
      <Footer />
    </>
  );
}
