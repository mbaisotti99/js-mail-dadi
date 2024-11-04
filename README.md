
## Consegna

#### Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON USARE INCLUDES!


#### Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

### Consigli del giorno:

1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
<br>
<br>
<br>

---

### Svolgimento Mail

#### Dati

+ Mail utente (prompt)
+ Array contenente mail verificate con accessi "admin" []
+ Mail è verificata o no? (bool)

#### Esecuzione Logica

1. Chiedi mail a utente
2. Il nome della mail coincide con una delle mail admin?
    + **SI** : Mail è verificata
    + **NO** :  Mail non è verificata

#### Stampa

La mail è verificata?
+ SI: Stampa "Accesso riuscito" 
+ NO: Stampa "Accesso non riuscito"

---

### Svolgimento Dadi

#### Dati

+ Numero random dell'IA
+ Numero random dell'user
+ Vittoria/Sconfitta (bool)

#### Esecuzione Logica

1. Genera entrambi i numeri casualmente
2. Il numero user è più alto del numeroIA?
    + SI: User vince, assegno il valore al bool Vittoria/Sconfitta
    + NO: User perde, assegno il valore al bool Vittoria/Sconfitta


#### Stampa

L'utente vince?
+ SI: Stampa scritta vittoria
+ NO: Stampa scritta sconfitta
