<h1>Testaufgabe User API mit NestJS</h1>

<h2>Projektbeschreibung</h2>

<p>Dieses Projekt stellt eine einfache API bereit, die Benutzerinformationen aus der Datei <code>users.json</code> liefert. Die API bietet zwei Hauptendpunkte:</p>

<ol>
  <li><p><code>/v1/users</code> - Gibt eine Liste aller Benutzer zurück.</p></li>
  <li><p><code>/v1/users/:id</code> - Gibt die Informationen eines Benutzers basierend auf seiner ID zurück.</p></li>
</ol>

<p>Die Benutzerdaten werden aus der Datei <code>users.json</code> im <code>src</code>-Verzeichnis gelesen. Das Projekt enthält auch Tests, die den Controller und den Service überprüfen.</p>

<h2>Installation und Start des Projekts</h2>

<h3>Abhängigkeiten installieren</h3>

<p>Um die Abhängigkeiten des Projekts zu installieren, führen Sie den folgenden Befehl aus:</p>

<p><code>npm install</code></p>

<h3>Umgebungsvariablen</h3>

<p>Erstellen Sie eine Datei <code>.env</code> im Stammverzeichnis Ihres Projekts.</p>

<p>Verwenden Sie die Datei <code>.env.example</code> als Vorlage und geben Sie die entsprechenden Daten ein.</p>

<h3>Projekt starten</h3>

<p>Um das Projekt im Entwicklungsmodus zu starten, verwenden Sie den folgenden Befehl:</p>

<p><code>npm run start:dev</code></p>

<p>Das Projekt wird gestartet, und Sie können über die bereitgestellten Endpunkte mit der API interagieren.</p>

<h3>Tests ausführen</h3>

<p>Um die Tests auszuführen, verwenden Sie den folgenden Befehl:</p>

<p><code>npm run test</code></p>

<p>Die Tests überprüfen die Funktionalität der API, einschließlich der Rückgabe der Benutzerliste und der Fehlerbehandlung.</p>

<h3>Aufgabe</h3>

<p>Im Stammverzeichnis des Projekts befindet sich die Datei <code>CodingChallenge.pdf</code>, die die Aufgabenstellung für dieses Projekt enthält.</p>
