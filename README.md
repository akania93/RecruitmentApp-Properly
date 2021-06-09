<h1>RecruitmentApp-Properly</h1>
<p>Wersja demonstracyjna aplikacji Properly nad którą obecnie pracuję w ramach zlecenia. Repozytorium stworzone dla celów rekrutacji. Wersja aplikacji pomija proces rejestracji i logowania użytkownika (w toku). Prace nad projektem wciąż trwają dlatego nie jest ona skończona. Ma na celu przedstawienie moich umiejętności i sposobu pisania kodu.</p>
<h3>Instalacja</h3>
<ol>
	<li>Pobierz repozytorium</li>
	<li>Otwórz wiersz poleceń głównym folderze aplikacji</li>
	<li>Wpisz polecenie <code>npm intall</code>. Aplikacja zostanie zainstalowana.</li>
	<li>Uruchom backend (json-server). W tym celu otwórz nową konsolę w głównym folderze aplikacji i wpisz polecenie <code>npm run mock</code>. Api odpali się pod adresem <code>http://localhost:3000</code>.</li>
	<li>Uruchom program. W pierwszej konsoli wpisz polecenie <code>npm start</code>.</li>
	<li>Otwórz stronę pod adresem <code>http://localhost:4200/</code>.</li>
	<li>Zaloguj się przyciskiem "Zaloguj - wersja rekrutacyjna</li>
</ol>
<h3>Gdzie klikać? :)</h3>
<p>
	Po zalogowaniu zostaniesz przeniesiony do panelu admina >> CMS >> FAQ gdzie można dodawać nowe pytania FAQ. Następnie możesz je wyświetlić po stronie usera.
	Jeśli klikniesz w trybik w headerze możesz zobaczyć formularz edycji usera oraz zmiany hasła.
</p>
<img src="https://lh3.googleusercontent.com/JNpuzX1qZJfo-FptT0GaOa9N1XYGddQamyWp2mfTEk1lZck07P0EFzgzCY2Udyaw27tiasurBD0FCQCUeVDBm6Dpf2OaQaBnSC_s_aTryVRO8aqigCjcUsnJ4DCpOcEbre2YWMjZZU0EbwUIRAbWDEOcb9zMK8XDycRaJxS1u_uDfYD4pA3UgSNI55l4YGOmC509YL5otlaRCQoYPTTPb8qsgJ-HgBcwan52frS_5jejF18bWKKc6q0KdKQ-MdWCOfPUxJqlUmsjqx7lvY2Ak0q_OA49NVqqk7IxY9jOxtnU7jPAlJMYc45GhtBWVI7KpjilY9PawY1NGKY_U9uWQFEJumdq9xKRtP4Vjcrs5YgBB8kF0QMVkQuNjKQvb8WLLV0Hu0_lsEPTYUyYP1qPFuQO3_lLVWHCS3u2x0QXL0KPxK9guWLzt1GUPK32HUvr0pxmmRl5Jk-FrPF6eKB0BYQDE88hxgH8aKoberO-_9Aeg2FQDacjF7JqsJgLNEwY2yfaK4dzwpQDv_rCy-hT0jL75VjtZ85Migcrd0P5TVk9mnX1P4YCJRE_vmjlLZVsgzs8gRJbBkFc6RA82c6_p0cyk7z7TJtM5jdrWUprpd4uis2ZQGP-t4Wfca4vj9mB9sWNRzBtgRwwssy-jhlX842GY5hGwr-h7_e8NmkRU2TiO9HXP-UdJ8nFRChmix1iiRZGMiMCQGnaFcV0awVHQ7w=w1920-h947-no?authuser=1">
<img src="https://lh3.googleusercontent.com/o_GD4DhVXo1SsmFmstrejzogVVyvR-shBN46EhvVBJK1PgrgxwgWW2g8QxKlWcNXN7oWBGZufnMQnHC_xFcFUQ_d8ZIRbGB776B-erfunr93RGRo41kIispQF7gVGTUYo4nLc65psiuB-D87YsONYyTVILXC8717Csx8fyHyoIuPNCjLEKH2Wgcbgrfst174ekkfJK8MfZYkZjfgjynw0Vs8R96ZSVrCFxkIE1orHugmfgsFKzJ4vLclWPouy50hTBWce90-Gm9c8Au5CYEhQsS7YrqpekUFZhbet_LNKQA4dwPnB4JaFcbPhBlQI53w4HDQZbC_s7C0s0LrWNHWyOnUZVuifCltdymb17l4O7raNBcvCQIlGJjSEtiB1SNS5waA8BViH5OKJ9VmU8Njw6YIDVZiZcCaGtq-bEEEnA-VsOXgaEPGx5Jk0WREbR9FhYBtPfQh5AFTwDSwO3juZxUfni-KCKNOxXJP9RJ7QARn4XvpmoiFcmJrQcRFMhpVb-4HwnBWoANvLP9T9-HwXmtg44_VABBkh_sMzhzS-jI8yanig9v_f19iRyMTLa28hKuTzzKynbIdErVPWpCtPPlMsV-tXsHBnuNkmS6V_CK4kA_MCOVdyhVug46E8D50Zw6IyUsOSp-kdCWKNm9vkDW-9C-TbrwmO1TLWjeoy7Koaq5cm3rps0LTEJB-_5gXbxclczVcIwn_6ccZ8ip93YY=w1913-h947-no?authuser=1">
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
