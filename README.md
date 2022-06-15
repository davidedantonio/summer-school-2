# JavaScript

## Prima iniziare

Assicuratevi di avere una versione di Node.js LTS installata sulla vostra macchina. Dal terminale digitate quanto segue:

```
$ npm install -g serve
```

`serve` altro non è che un comando che crea un server http per servire file statici. Utilizzarlo è molto semplice. Dal terminale recatevi nella directory che contiene i tuoi file `.html`, `.css`, `.js` e digitate il comando:

```
$ serve
```

In alternativa potete tranquillamente indicare come parametro la directory che volete utilizzare:

```
$ serve path/to/your/project
```

Maggiori dettagli sul suo utilizzo li trovate al seguente indirizzo:

[https://www.npmjs.com/package/serve](https://www.npmjs.com/package/serve)

## Esercizio 1

Implementare un semplice contatore che visualizzi come risultato quanto segue:

![](/images/es-1.png)

- [ ] Implementare un template HTML che rispetti quello nella figura sopra (non hanno importanza i font o i colori).
- [ ] Implementare un listener sul pulsante "ADD ONE" che incrementi il di 1 il _Counter_ (quindi _"Counter: 1"_, _"Counter: 2"_ etc.).
- [ ] Nello stesso listener implementato al punto precedente, fare in modo che _Counter Double_ incrementi del doppio di _Counter_ (quindi _"Counter 1 - Counter Double 2"_, _"Counter: 2 - Counter Double: 4"_ etc.)
- [ ] Implementare un listener sul pulsante "REMOVE ONE" che decrementi di 1 _Counter_ e aggiornare _Counter Double_ in modo che sia sempre il doppio di _Counter Double_ (quindi _"Counter: 4 - Counter Double: 8"_, _"Counter: 3 - Counter Double 6"_ etc.)

### Regole

- Non utlizzare le classi JavaScript, ma solo variabili e funzioni.
- Utilizzate il Design System implementato nella lezione precedente :smile:

## Esercizio 2

Implementare lo stesso esecizio implementato in precedenza ma utilizzando le classi JavaScript.

## Esercizio 3

Implementare una _"Todo List"_ che visualizzi la lista di cose da fare nel modo seguente:

![](/images/es-2_1.png)

### Parte 1

- [ ] Implementare un template HTML che rispetti quello nella figura sopra (anche in questo caso lo stile non ha importanza).
- [ ] Implementare un listener sul pulsante "ADD" che effettua le seguenti operazioni:
  - [ ] Prenda la stringa in input e la trasformi in una "cosa da fare". Una cosa da fare è un oggetto JavaScript che ha le seguenti caratteristiche:
    - [ ] id: L'identificativo univoco della cosa da fare.
    - [ ] description: La descrizione della cosa da fare (es "Learn JavaScript")
    - [ ] done: Un valore booleano che ci fa capire se quella determinata cosa è stata fatta o meno
  - [ ] Una volta creato l'oggetto deve inserirlo nella _"Lista"_ delle cose da fare
  - [ ] Nel caso in cui l'input text è vuoto mostrare un messaggio di errore
  - [ ] Aggiorni la lista in visualizzazione
  - [ ] Svuota l'input di testo sopra
- [ ] Implementare un listener sulla lista di cose da fare in modo che questa venga rimossa dalla lista. Di conseguenza aggiorni la lista delle cose da fare in visualizzazione.

### Parte 2

- [ ] Affiancare alla lista delle cose da fare, la lista delle cose fatte. In modo da rispettare il seguente template:

![](/images/es-2_2.png)

- [ ] Ogni volta che una cosa da fare viene rimossa dalla lista delle cose fatte viene inserita in quella delle già fatte.
- [ ] Quando viene cliccata la checkbox di una cosa già fatta questa viene spostata nuovamente nella lista delle cose da fare.

### Regole

- Utilizzate il Design System implementato nella lezione precedente :smile:
- Utilizzare le classi JavaScript.