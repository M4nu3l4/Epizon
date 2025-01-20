<!DOCTYPE html>
<html lang="it">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
 
   
</head>

<body>
  <header>
    <h1>Applicazione Ricerca Lavori Remoti</h1>
    <p>Un'applicazione web per cercare, visualizzare e gestire annunci di lavoro remoti.</p>
  </header>

  <section>
    <h2>Indice</h2>
    <ul>
      <li><a href="#introduzione">Introduzione</a></li>
      <li><a href="#caratteristiche">Caratteristiche</a></li>
      <li><a href="#installazione">Installazione</a></li>
      <li><a href="#uso">Utilizzo</a></li>
      <li><a href="#tecnologie">Tecnologie</a></li>
      <li><a href="#contributi">Contributi</a></li>
    </ul>
  </section>

  <section id="introduzione">
    <h2>Introduzione</h2>
    <p>
      Questa è un'applicazione web sviluppata utilizzando <strong>React.js</strong> e <strong>Redux</strong> con l'obiettivo
      di cercare e visualizzare annunci di lavoro remoti. Gli utenti possono cercare lavori tramite parole chiave, visualizzare i dettagli e gestire una lista di aziende preferite.
    </p>
    <p>
      L'app acquisisce gli annunci di lavoro tramite un'API e permette agli utenti di aggiungere le aziende delle offerte preferite a una sezione dedicata chiamata "Preferiti".
    </p>
  </section>

  <section id="caratteristiche">
    <h2>Caratteristiche</h2>
    <ul>
      <li>
        <strong>Ricerca Lavori:</strong> Cerca lavori remoti inserendo parole chiave o titoli di lavoro.
      </li>
      <li>
        <strong>Annunci Aziendali:</strong> Visualizza le offerte di lavoro per azienda specifica.
      </li>
      <li>
        <strong>Aziende Preferite:</strong> Salva le aziende preferite e visualizzale in seguito in una sezione dedicata.
      </li>
      <li>
        <strong>Layout Responsivo:</strong> Design completamente responsivo con l'uso di Bootstrap 5, garantendo una buona esperienza utente su tutti i dispositivi.
      </li>
      <li>
        <strong>Routing:</strong> Navigazione con React Router per gestire le diverse pagine dell'app, come ricerca, aziende e preferiti.
      </li>
    </ul>
  </section>

  <section id="installazione">
    <h2>Installazione</h2>
    <p>Per eseguire questa applicazione in locale, segui questi passaggi:</p>
    <ol>
      <li>Clona questo repository:</li>
      <pre><code>git clone https://github.com/tuo-username/remote-jobs-search.git</code></pre>
      <li>Accedi alla cartella del progetto:</li>
      <pre><code>cd remote-jobs-search</code></pre>
      <li>Installa le dipendenze:</li>
      <pre><code>npm install</code></pre>
      <li>Avvia il server di sviluppo:</li>
      <pre><code>npm start</code></pre>
      <li>Apri l'applicazione nel tuo browser:</li>
      <pre><code>http://localhost:3000</code></pre>
    </ol>
  </section>

  <section id="uso">
    <h2>Utilizzo</h2>
    <p>Una volta che l'applicazione è in esecuzione, puoi utilizzarla come segue:</p>
    <ul>
      <li>
        Inserisci una parola chiave (es. "developer", "designer", ecc.) nella barra di ricerca per visualizzare gli
        annunci di lavoro remoti pertinenti.
      </li>
      <li>
        Clicca su un annuncio di lavoro per visualizzare più dettagli, inclusi il titolo del lavoro, il nome
        dell'azienda e la posizione.
      </li>
      <li>
        Clicca sul bottone "Aggiungi ai Preferiti" per aggiungere l'azienda dell'annuncio alla tua lista di aziende
        preferite.
      </li>
      <li>
        Naviga nella sezione <strong>Preferiti</strong> per visualizzare tutte le tue aziende e lavori salvati.
      </li>
    </ul>
  </section>

  <section id="tecnologie">
    <h2>Tecnologie</h2>
    <p>L'applicazione è costruita utilizzando le seguenti tecnologie:</p>
    <ul>
      <li><strong>React.js</strong> - Libreria per la creazione dell'interfaccia utente.</li>
      <li><strong>Redux</strong> - Libreria per la gestione dello stato globale dell'applicazione.</li>
      <li><strong>React Router</strong> - Per la gestione delle rotte dell'applicazione.</li>
      <li><strong>Bootstrap 5</strong> - Framework CSS per il design responsivo.</li>
      <li><strong>React Bootstrap</strong> - Componenti React basati su Bootstrap.</li>
      <li><strong>API Heroku</strong> - API esterna per ottenere gli annunci di lavoro.</li>
    </ul>
  </section>

  <section id="contributi">
    <h2>Contributi</h2>
    <p>Se desideri contribuire allo sviluppo di questa applicazione, segui questi passaggi:</p>
    <ol>
      <li>Forka questo repository.</li>
      <li>Crea un nuovo ramo per la tua funzionalità o correzione di bug.</li>
      <li>Apporta le modifiche e effettua un commit.</li>
      <li>Pusha le modifiche nel tuo repository forkato.</li>
      <li>Apri una pull request descrivendo le modifiche apportate.</li>
    </ol>
  </section>

  <footer class="footer">
    <p>Creato ❤️ da Manuela Lissia</p>
  </footer>
</body>

</html>
