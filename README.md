<h1>RecruitmentApp-Properly</h1>
<p>Wersja demonstracyjna aplikacji Properly nad którą obecnie pracuję w ramach zlecenia. Repozytorium stworzone dla celów rekrutacji. Wersja aplikacji pomija proces rejestracji i logowania użytkownika (w toku). Prace nad projektem wciąż trwają dlatego nie jest ona skończona. Ma na celu przedstawienie moich umiejętności i sposobu pisania kodu.</p>
<h3>Instalacja</h3>
<ol>
	<li>Pobierz repozytorium</li>
	<li>Otwórz wiersz poleceń głównym folderze aplikacji</li>
	<li>Wpisz polecenie <code>npm install</code>. Aplikacja zostanie zainstalowana.</li>
	<li>Uruchom backend (json-server). W tym celu otwórz nową konsolę w głównym folderze aplikacji i wpisz polecenie <code>npm run mock</code>. Api odpali się pod adresem <code>http://localhost:3000</code>.</li>
	<li>Uruchom program. W pierwszej konsoli wpisz polecenie <code>npm start</code>.</li>
	<li>Otwórz stronę pod adresem <code>http://localhost:4200/</code>.</li>
	<li>Zaloguj się przyciskiem "Zaloguj - wersja rekrutacyjna"</li>
</ol>
<h3>Gdzie klikać? :)</h3>
<p>
	Po zalogowaniu zostaniesz przeniesiony do panelu admina >> CMS >> FAQ gdzie można dodawać nowe pytania FAQ. Następnie możesz je wyświetlić po stronie usera.
	Jeśli klikniesz w trybik w headerze możesz zobaczyć formularz edycji usera oraz zmiany hasła.
</p>
<img src="https://iv.pl/images/aeb9d859ce294b06d07cb3f50717ee15.png">
<img src="https://iv.pl/images/d6682cfb0316c53048703eb96316a15b.png">
<h3>Co wykorzystuje aplikacja i jakie umiejętności można z niej wyczytać?</h3>
<ul>
	<li>routing aplikacji z podziałem na moduły ładowane leniwie (lazy loading)</li>
	<li>umiejętność konfiguracji dodatkowych bibliotek takich jak np. bootstrap, primeng, nebular</li>
	<li>obsługa wielojęzyczności aplikacji poprzez bibliotekę ngx-translate</li>
	<li>znajomość rxJS, posługiwanie się Subject, BehaviourSubject, operatorami itd</li>
	<li>komunikacja z API poprzez <code>HttpClient</code> oraz sposób obsługi błędów</li>
	<li>tworzenie modeli danych, serwisów, store dla komunikacji z API</li>
	<li>mockowanie danych</li>
	<li>obsługa i walidacja formularzy. Brak możliwości zapisu gdy formularz zawiera błędy</li>
	<li>obsługa zaawansowanej tabelki do przedstawiania danych wraz z paginacją, wyszukiwaniem, sortowaniem</li>
	<li>wyświetlania popupów a nawet obsługa tabów wewnątrz popupu</li>
	<li>tworzenie CMS. Korzystając z wysiwyg editor</li>
	<li>podejście do clean code</li>
	<li>podejście do tworzenia czystego i przemyślanego CSS. Wygląd aplikacji jest w wersji roboczej, natomiast wygląda schludnie a kod pisany w podejściu clean.</li>
	<li>zastosowanie lintera oraz prettiera dla kodu. Opcja <code>npm run precommit</code> sprawdzająca kod przed commitem</li>
</ul>
