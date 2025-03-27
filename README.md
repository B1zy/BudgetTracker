# Projekt-Dokumentation


Kamil Bielski
| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | Webseite erstellt, Dokumentation vervollständigt |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

Ein Budget-Tracker mit C#/.NET und Python: Finanzdaten erfassen, Ausgaben automatisch kategorisieren und monatliche Berichte per Skript generieren – für bessere Übersicht über Einnahmen/Ausgaben.

Ich entwickle eine Webanwendung, um Einnahmen und Ausgaben einfach zu verwalten. Im Kern besteht das Projekt aus einem Frontend (HTML/JavaScript) mit einem Eingabeformular für Transaktionen und einem Diagramm zur Visualisierung der Finanzdaten. Das Backend wird mit einer .NET-API umgesetzt, die alle Daten in einer SQL-Datenbank speichert. Zentral ist dabei das Testen der Verbindung zwischen Frontend und Backend – etwa ob das Formular Daten korrekt an die API sendet oder das Diagramm aktualisierte Werte anzeigt (z. B. mit Postman).

Falls Zeit bleibt, erweitere ich die Anwendung um Python-Skripte, die z. B. monatliche PDF-Zusammenfassungen generieren oder automatisch Kategorien wie „Wohnen“ für Einträge wie „Miete“ erkennen.
### 1.2 User Stories
| US-№ | Verbindlichkeit | Typ         | Beschreibung                                     |
| ---- | --------------- | ---------- | ------------------------------------------------ |
| 1    | Muss           | Funktional | Als Nutzer möchte ich neue Transaktionen erfassen, damit ich meine Ausgaben und Einnahmen im Überblick habe. |
| 2    | Muss           | Funktional | Als Nutzer möchte ich die erfassten Transaktionen kategorisieren, damit ich meine Ausgaben pro Kategorie verfolgen kann. |
| 3    | Kann           | Funktional | Als Nutzer möchte ich monatliche PDF-Berichte generieren, damit ich einen umfangreichen Überblick über meine Finanzen habe. |
| 4    | Muss           | Technisch  | Als Entwickler möchte ich die Datenbankstruktur anlegen, damit Transaktionen sicher und dauerhaft gespeichert werden können. |





### 1.3 Testfälle

| TC-№ | Ausgangslage                                   | Eingabe                        | Erwartete Ausgabe                                              |
| ---- | ---------------------------------------------- | ----------------------------- | -------------------------------------------------------------- |
| 1.1  | Eine neue Transaktion ist noch nicht erfasst   | "Wasserrechnung", Betrag 50   | Transaktion wird erfolgreich angelegt und in der Übersicht angezeigt. |
| 2.1  | Mehrere vorhandene Transaktionen ohne Kategorie | Transaktion "Einkauf", Betrag 30, Kategorie "Lebensmittel" | Transaktion wird kategorisiert gespeichert, Kategorie-Kosten werden aktualisiert. |
| 3.1  | Wenige vorhandene Transaktionen (z. B. 2-3)    | Befehl oder Button "PDF erstellen" | Monats-PDF mit korrekten Summen und Transaktionen wird generiert. |
| 4.1  | Eine Transaktion wurde in der Webseite eingegeben | "Stromrechnung", Betrag 75       | Transaktion wird der Tabelle `Transaktionen` in der Datenbank hinzugefügt. |




## 2 Planen

| AP-№ | Frist       | Zuständig | Beschreibung                                                           | geplante Zeit |
| ---- | ---------- | --------- | ---------------------------------------------------------------------- | ------------- |
| 1.A  | 31.03.2025 |kamil| Formular zur Erfassung einer neuen Transaktion anlegen                | 45'           |
| 1.B  | 31.03.2025 |     "      | Datenbanktabelle für Transaktionen erstellen                           | 45'           |
| 2.A  | 07.04.2025 |     "      | Kategorien-Funktion in der Datenbank und im Formular integrieren       | 45'           |
| 2.B  | 07.04.2025 |   "        | Anzeige der kategorisierten Ausgaben im Frontend                       | 45'           |
| 3.A  | 14.04.2025 |   "        | PDF-Generierungsfunktion mit Python-Skript implementieren              | 45'           |
| 3.B  | 14.04.2025 | "          | Test und Validierung der PDF-Ausgabe (z. B. mit Dummy-Daten)           | 45'           |





## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
