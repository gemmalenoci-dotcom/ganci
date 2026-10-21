/* Il gancio giusto, in 4 passi · logica tutta nel browser, nessun dato esce */
(function(){
'use strict';

/* ==================== DATI ==================== */
var CATS=[
 {n:"NON",t:"Controintuitivo",f:"Non [RISULTATO] se continui a [AZIONE]",e:"Non aumenterai follower se continui a postare senza strategia",g:["conoscere"],q:"Smonta un'abitudine comune, quando hai un'abitudine sbagliata da mettere in discussione"},
 {n:"OPINIONE SCOMODA",t:"Controintuitivo",f:"Unpopular opinion: [AFFERMAZIONE CHE SFIDA IL DOGMA]",e:"Unpopular opinion: postare ogni giorno non ti farà crescere più velocemente",g:["conoscere"],q:"Quando hai una posizione netta e vera che il settore non dice"},
 {n:"REVERSE LIST",t:"Controintuitivo",f:"Non fare [LISTA DI COSE] se vuoi [RISULTATO]",e:"Non fare queste cose sul tuo profilo se vuoi attirare clienti locali",g:["conoscere"],q:"Quando il contenuto è una lista di errori da evitare"},
 {n:"DOMANDA DI IDENTIFICAZIONE",t:"Identificazione estrema",f:"Sai perché [PROBLEMA SPECIFICO DEL TARGET]?",e:"Sai perché il profilo del tuo ristorante non ti porta clienti?",g:["conoscere","fidelizzare"],q:"Quando conosci bene il problema di chi guarda: la domanda resta sospesa, mai rispondere nel gancio"},
 {n:"SE",t:"Identificazione estrema",f:"Se sei [TARGET] e non [AZIONE], ti stai perdendo [RISULTATO]",e:"Se sei una parrucchiera e non fai questo, ti stai perdendo metà dei tuoi clienti",g:["conoscere","fidelizzare"],q:"Quando vuoi chiamare in causa un target preciso con una perdita concreta"},
 {n:"DEVI",t:"Identificazione estrema",f:"Devi assolutamente [AZIONE] se sei [TARGET]",e:"Devi assolutamente salvare questo video se gestisci un salone",g:["conoscere"],q:"Per i contenuti da salvare: checklist, procedure, riferimenti"},
 {n:"SEGNI",t:"Identificazione estrema",f:"X segni che [PROBLEMA O SITUAZIONE]",e:"3 segni che il tuo social media manager non sta lavorando davvero",g:["fidelizzare","conoscere"],q:"Quando il contenuto è un elenco di sintomi: la versione negativa converte di più"},
 {n:"POV",t:"Identificazione estrema",f:"POV: [SCENA IN SECONDA PERSONA]",e:"POV: sei il titolare di un salone che non sa cosa pubblicare il lunedì mattina",g:["fidelizzare"],q:"Quando hai una scena riconoscibile da mostrare, anche in b-roll"},
 {n:"STUPORE + COMMUNITY",t:"Identificazione estrema",f:"Avete presente [SITUAZIONE COMUNE]? Vi svelo il segreto",e:"Avete presente quelle attività sempre curate sui social? Vi svelo il loro segreto",g:["fidelizzare","conoscere"],q:"Quando parli a chi ti segue già e vuoi dare un dietro le quinte"},
 {n:"LISTA",t:"Valuta sociale",f:"X cose che [AFFERMAZIONE SORPRENDENTE]",e:"5 cose che il 90% dei ristoratori non sa di Instagram",g:["conoscere"],q:"Quando hai dati o insight che pochi conoscono. Il numero va nel corpo, qui serve la sorpresa"},
 {n:"AUTORITÀ NUMERICA",t:"Valuta sociale",f:"Ho analizzato [X] profili e questi sono i pattern che funzionano",e:"Ho analizzato 200 profili di parrucchieri e questi sono i 3 errori che si ripetono",g:["conoscere","vendere"],q:"Solo se l'analisi l'hai fatta davvero: il numero deve essere vero"},
 {n:"CONFRONTO",t:"Valuta sociale",f:"[X] vs [Y]: qual è la differenza vera?",e:"Un salone con 500 follower vs uno con 50.000: qual è la differenza vera?",g:["conoscere"],q:"Quando hai due casi da mettere a confronto"},
 {n:"COSA",t:"Utilità pratica",f:"Cosa [AZIONE SPECIFICA]: guida pratica",e:"Cosa pubblicare su Instagram se hai un ristorante locale",g:["conoscere","fidelizzare"],q:"Per i contenuti pratici, tutorial e how-to"},
 {n:"DOVREBBE",t:"Utilità pratica",f:"Ogni [TARGET] dovrebbe [AZIONE] almeno una volta",e:"Ogni ristoratore dovrebbe provare questo tipo di contenuto almeno una volta",g:["conoscere"],q:"Quando consigli uno strumento o una pratica a un target preciso"},
 {n:"TRUCCO",t:"Utilità pratica",f:"Il trucco di [CATEGORIA] che nessuno ti dice",e:"Il trucco di fotografia food che nessun corso ti insegna",g:["conoscere","fidelizzare"],q:"Quando hai un'astuzia da mestiere che si impara solo facendo"},
 {n:"PROSSIMA VOLTA",t:"Utilità pratica",f:"La prossima volta che [SITUAZIONE], fai questo",e:"La prossima volta che fotografi un piatto col telefono, fai questo",g:["fidelizzare"],q:"Quando il consiglio scatta in una situazione precisa e ricorrente"},
 {n:"COME",t:"Utilità pratica",f:"Come [RISULTATO] in [TEMPO] anche se [LIMITE]",e:"Come ho triplicato il fatturato in 6 mesi con soli 2.000 follower",g:["vendere","conoscere"],q:"Quando hai un risultato vero con un tempo credibile"},
 {n:"ERRORE",t:"Utilità pratica",f:"L'errore numero 1 che i [TARGET] commettono su [PIATTAFORMA]",e:"L'errore numero 1 che i ristoratori commettono su Instagram",g:["conoscere"],q:"Quando c'è un errore che vedi ripetersi di continuo"},
 {n:"IMPORTANTE",t:"Emozione forte",f:"La cosa più importante che [ESPERIENZA CHE INSEGNA]",e:"La cosa più importante che ho imparato dopo 3 anni a fotografare ristoranti",g:["fidelizzare"],q:"Quando c'è una lezione tirata fuori da anni di esperienza vera"},
 {n:"ERRORE PERSONALE",t:"Emozione forte",f:"Ho sbagliato [AZIONE] per [TEMPO]. Ecco come l'ho sistemato",e:"Ho sbagliato il modo di presentarmi ai clienti per 2 anni. Ecco cosa ho imparato",g:["fidelizzare","vendere"],q:"Quando puoi raccontare uno sbaglio tuo senza vergogna: crea fiducia"},
 {n:"PIVOT NARRATIVO",t:"Emozione forte",f:"[ASPETTATIVA COMUNE]. La realtà: [VERITÀ SORPRENDENTE]",e:"Tutti pensano che la Fashion Week sia glamour. La realtà: una persona sola che non ha dormito",g:["fidelizzare"],q:"Quando la verità è l'opposto di quello che si crede"},
 {n:"SEGRETO NASCOSTO",t:"Emozione forte",f:"Il segreto di [CATEGORIA DI SUCCESSO] che nessuno condivide",e:"Il segreto delle attività locali che crescono su Instagram e che nessuno condivide",g:["conoscere","fidelizzare"],q:"Quando c'è un meccanismo che i migliori usano e non raccontano"},
 {n:"STORIA PERSONALE",t:"Emozione forte",f:"A [ETÀ O MOMENTO] [EVENTO CHE HA CAMBIATO TUTTO]",e:"A 25 anni ho lasciato il lavoro fisso per girare il Friuli con una reflex",g:["fidelizzare"],q:"Per le storie di svolta, in prima persona e con un dettaglio vero"},
 {n:"CLIFFHANGER PERSONALE",t:"Emozione forte",f:"[EVENTO SPECIFICO]... e sai cosa è successo dopo?",e:"Il parrucchiere mi ha detto che bastava una foto col telefono. Gli ho mostrato la differenza",g:["fidelizzare","vendere"],q:"Quando c'è una scena vissuta con un finale che vale la pena aspettare"},
 {n:"DA A A B IN T",t:"Promessa",f:"Come è passato [NOME] da [STATO A] a [STATO B] in [TEMPO]",e:"Come è passato il profilo di Marta da zero a 30 clienti in un mese",g:["vendere"],q:"Solo con un caso vero e con il consenso di chi lo ha vissuto"},
 {n:"DI ESCLUSIONE",t:"Posizionamento",f:"Se cerchi qualcuno che [AZIONE SPECIFICA DEL SETTORE], non sono io",e:"Se cerchi qualcuno che gestisce i social del tuo ristorante senza mai entrare in cucina, non sono io",g:["vendere"],q:"Per posizionarti: dice a chi non sei adatta, e attira chi lo è"},
 {n:"QUALIFICAZIONE / PSICOLOGIA INVERSA",t:"Posizionamento",f:"Se vuoi [X INDESIDERATO], scrolla. Se invece vuoi [Y DESIDERATO], ascolta",e:"Se vuoi sentirti dire che il tuo profilo è perfetto così, scrolla. Se invece vuoi ottimizzarlo, ascolta",g:["vendere"],q:"Quando vuoi filtrare chi guarda: polarizza"},
 {n:"QUIZ / SFIDA VISIVA",t:"Formato visivo",f:"[CONFRONTO]. Indovinate quale [CRITERIO]",e:"Stessa pasta, stesso ristorante. Una fa venire fame, l'altra sembra un avanzo. Indovinate qual è col telefono",g:["conoscere"],q:"Quando hai due immagini o due versioni da far scegliere"},
 {n:"IPERBOLE EMOTIVA",t:"Emozione forte",f:"Questa cosa sta letteralmente [CONSEGUENZA DRAMMATICA]",e:"Questa cosa sta letteralmente facendo morire il profilo del tuo salone",g:["conoscere","vendere"],q:"Quando il problema è davvero grave e vuoi dirlo senza giri"},
 {n:"RIPETIZIONE RITMICA",t:"Formato visivo",f:"[X] che non esiste, [Y] che non esiste, [Z] che non esiste",e:"Un salone che non esiste, una cliente che non esiste, un risultato che non esiste. Questa è l'AI",g:["conoscere"],q:"Per i contenuti con ritmo e montaggio, quando c'è un pattern da far notare"}
];

CATS.push(
 {n:"AZIONE",t:"Utilità pratica",f:"Se fai [AZIONE] per [TEMPO] ecco cosa succede a [COSA CAMBIA]",e:"Se posti 1 Reel al giorno per 30 giorni ecco cosa succede ai tuoi DM",g:["conoscere","fidelizzare"],q:"Quando puoi mostrare una trasformazione nel tempo"},
 {n:"BISOGNO",t:"Utilità pratica",f:"L'unica cosa che devi sapere per [RISULTATO]",e:"L'unica cosa che devi sapere per far funzionare l'algoritmo di Instagram nel 2026",g:["conoscere"],q:"Quando togli complessità e dai una cosa sola su cui concentrarsi"},
 {n:"MOTIVO",t:"Utilità pratica",f:"Il motivo per cui non stai [RISULTATO] è che non [AZIONE]",e:"Il motivo per cui non cresci su Instagram è che non capisci la differenza tra reach e impression",g:["conoscere","fidelizzare"],q:"Quando sai qual è il vero blocco di chi guarda"},
 {n:"TEST",t:"Emozione forte",f:"Ho provato [COSA] per [TEMPO]. Ecco cosa è successo",e:"Ho provato il metodo 5-3-1 per i Reels per un mese. Ecco cosa è successo ai miei follower",g:["fidelizzare","conoscere"],q:"Quando hai testato davvero qualcosa e puoi raccontare il risultato"},
 {n:"DAY IN THE LIFE",t:"Emozione forte",f:"24 ore nella vita di [PROFESSIONE]",e:"24 ore nella vita di una social media manager freelance",g:["fidelizzare"],q:"Per dietro le quinte con un inizio, un mezzo e una fine"},
 {n:"SEGRETO A LUNGO NASCOSTO",t:"Emozione forte",f:"Ho tenuto questo segreto per anni: [COSA]",e:"Ho tenuto questo segreto per anni: ecco come creo i miei contenuti in metà tempo",g:["conoscere","fidelizzare"],q:"Quando stai per rivelare qualcosa che usi davvero e non hai mai detto"},
 {n:"RIVELAZIONE LEGATA ALL'ETÀ",t:"Emozione forte",f:"Avevo [ETÀ] anni quando ho imparato [COSA]",e:"Avevo 25 anni quando ho imparato che il networking conta più del curriculum",g:["fidelizzare"],q:"Quando una lezione ti è arrivata in un momento preciso della vita"},
 {n:"REVERSE PSYCHOLOGY",t:"Posizionamento",f:"Non sei pronta per [COSA]",e:"Non sei pronta per questo trucco di editing, ma te lo mostro lo stesso",g:["conoscere"],q:"Quando vuoi sfidare chi guarda a restare"}
);
var PT={"NON":"Smonta un'abitudine","OPINIONE SCOMODA":"Un'opinione controcorrente","REVERSE LIST":"Cosa NON fare","DOMANDA DI IDENTIFICAZIONE":"Una domanda che lascia sospesi","SE":"Parla a chi è proprio così","DEVI":"Un consiglio da salvare","SEGNI":"I segnali che qualcosa non va","POV":"Una scena in cui ti riconosci","STUPORE + COMMUNITY":"Un segreto che svelo","LISTA":"Cose che pochi sanno","AUTORITÀ NUMERICA":"Ho analizzato tanto, ecco cosa ho visto","CONFRONTO":"Due cose a confronto","COSA":"Cosa fare, in pratica","DOVREBBE":"Cosa ogni persona dovrebbe fare","TRUCCO":"Un trucco da mestiere","PROSSIMA VOLTA":"Cosa fare la prossima volta che","COME":"Come ottenere un risultato","ERRORE":"L'errore che vedo sempre","IMPORTANTE":"La lezione più importante","ERRORE PERSONALE":"Un mio sbaglio","PIVOT NARRATIVO":"Tutti credono una cosa, in realtà un'altra","SEGRETO NASCOSTO":"Il segreto che nessuno dice","STORIA PERSONALE":"Un momento che ha cambiato tutto","CLIFFHANGER PERSONALE":"Una scena con il finale sospeso","DA A A B IN T":"Il prima e dopo di una persona","DI ESCLUSIONE":"Dico a chi NON faccio per","QUALIFICAZIONE / PSICOLOGIA INVERSA":"Scrolla se, ascolta se","QUIZ / SFIDA VISIVA":"Indovina quale","IPERBOLE EMOTIVA":"Una frase forte e diretta","RIPETIZIONE RITMICA":"Una frase ripetuta tre volte","AZIONE":"Cosa succede se lo fai per 30 giorni","BISOGNO":"L'unica cosa da sapere","MOTIVO":"Il motivo per cui non ci riesci","TEST":"L'ho provato per te","DAY IN THE LIFE":"Una giornata nella vita di","SEGRETO A LUNGO NASCOSTO":"Un segreto che tenevo da anni","RIVELAZIONE LEGATA ALL'ETÀ":"Quando l'ho capito avevo tot anni","REVERSE PSYCHOLOGY":"Non sei pronta per questo"};
CATS.forEach(function(c){c.pt=PT[c.n]||c.n});

var LEVE=[
 {k:"cur",n:"Curiosità incompiuta",d:"Apre un loop che il cervello vuole chiudere, senza dare la risposta",ex:"Sai perché il tuo reel migliore non ti ha portato nessun cliente?",lab:"Curiosità incompiuta",cats:["DOMANDA DI IDENTIFICAZIONE","CLIFFHANGER PERSONALE","SEGRETO NASCOSTO","TRUCCO","STUPORE + COMMUNITY","QUIZ / SFIDA VISIVA","TEST","SEGRETO A LUNGO NASCOSTO"]},
 {k:"fomo",n:"Paura di perdere qualcosa",d:"Una perdita concreta, mai un'urgenza finta",ex:"Se sei una parrucchiera e non fai questo, ti stai perdendo metà dei clienti",lab:"FOMO",cats:["SE","DEVI","IPERBOLE EMOTIVA","ERRORE","NON","SEGNI"]},
 {k:"id",n:"Mi riconosco subito",d:"Precisione chirurgica sul vissuto di chi guarda",ex:"Ogni settimana apri il telefono e non sai cosa pubblicare",lab:"Identificazione immediata",cats:["DOMANDA DI IDENTIFICAZIONE","SE","SEGNI","POV","STUPORE + COMMUNITY","ERRORE PERSONALE","DEVI","MOTIVO","RIVELAZIONE LEGATA ALL'ETÀ"]},
 {k:"ctr",n:"Rompe una credenza",d:"Dice una cosa vera che il settore non dice",ex:"Postare ogni giorno non ti farà crescere più in fretta",lab:"Controintuitivo",cats:["NON","OPINIONE SCOMODA","REVERSE LIST","PIVOT NARRATIVO","SEGRETO NASCOSTO","DI ESCLUSIONE","QUALIFICAZIONE / PSICOLOGIA INVERSA","TRUCCO","REVERSE PSYCHOLOGY"]},
 {k:"pro",n:"Promessa con un tempo credibile",d:"Un risultato concreto e misurabile, con una durata verosimile",ex:"Come ho ottenuto 30 richieste in un mese con 2.000 follower",lab:"Promessa specifica",cats:["COME","DA A A B IN T","AUTORITÀ NUMERICA","COSA","PROSSIMA VOLTA","LISTA","AZIONE","BISOGNO"]}
];
var LEVA_CONS={conoscere:"ctr",fidelizzare:"id",vendere:"pro"};

var SWIPE=["voglio clienti, non follower","so fare benissimo il mio lavoro ma non so raccontarlo","mi visualizzano sempre le solite 30 persone","ho buttato tanti soldi","fuffa","sono ferma da mesi","cambio la bio ogni mese perché non so chi sono online","senza snaturarmi","forse il problema sono io"];

var MODALITA_ALL=[
 {k:"sint",n:"Riassunto del tema",e:"SOS capelli secchi d'estate"},
 {k:"eti",n:"Titolo breve",e:"SOS capelli secchi"},
 {k:"eq",n:"Problema = soluzione",e:"ESTATE = CAPELLI SECCHI → la soluzione"},
 {k:"dom",n:"Una domanda secca",e:"Sei sicura che sia il glutine?"},
 {k:"kw",n:"Parola chiave in maiuscolo, poi una domanda",e:"GLUTINE: sei sicura ti gonfi?"},
 {k:"ann",n:"Annuncio di cosa mostri",e:"Come taglio le zampette di Havana"},
 {k:"pov",n:"Una scena (POV)",e:"POV: stai mangiando con i pastori in Sardegna"},
 {k:"cap",n:"Rimando alla caption",e:"Sei gonfia e non sai la causa? Leggi in caption"}
];

var MODALITA=MODALITA_ALL.filter(function(m){return ["sint","dom","kw","pov","eti"].indexOf(m.k)>-1}).map(function(m){
  var nm={sint:"Riassunto",dom:"Domanda",kw:"Parola chiave e domanda",pov:"Scena",eti:"Titolo"}[m.k];
  var ex={sint:"Come ho triplicato il fatturato in 6 mesi con tiktok",dom:"Sei sicura che sia il glutine?",kw:"GLUTINE: sei sicura ti gonfi?",pov:"POV: stai mangiando con i pastori in Sardegna",eti:"SOS capelli secchi"}[m.k];
  return {k:m.k,n:nm,e:ex};
});
var SCHERMO=[
 ["Tutti ti dicono di togliere il glutine quando sei gonfia. A volte può essere la soluzione, ma ne sei davvero sicura?","GLUTINE: sei sicura ti gonfi?","Parola chiave più domanda"],
 ["Come ho triplicato il mio fatturato in meno di 6 mesi grazie a tiktok con pochi follower e basse visual","Come ho triplicato il fatturato in 6 mesi con tiktok","Riassunto del tema"],
 ["Se non mi pubblichi un video al giorno 7 giorni su 7 per tutta la tua vita, su tiktok non riuscirai a vendermi niente","Per vendere su Tiktok devi pubblicare almeno 1 video al giorno","Riassunto del tema"],
 ["Vi prego ditemi che non sono l'unica a cui hanno prescritto gli occhiali e puntualmente non li mette","POV: odi indossare gli occhiali","Una scena (POV)"],
 ["Questi non sono punti neri però questi si","Punti neri: li hai davvero?","Parola chiave più domanda"],
 ["linkedin è mio social network preferito però penso che nel 2026 sia arrivato il momento di decretarne la fine come luogo per trovare lavoro","Linkedin non serve più a trovare lavoro","Riassunto del tema"],
 ["Smetti di usare shampoo come questo o questo solo perchè solo virali, o almeno poi non lamentarti se i capelli ti si sporcano dopo 24 ore","Smetti di usare questi shampoo","Titolo breve"],
 ["questa ero io a 17 anni, 10 anni fa, ma è possibile che avessi più rughe di adesso?","10 anni fa avevo più rughe di oggi??","Una domanda secca"]
];
var AFF=[
 ["Vendi il beneficio, mai lo strumento","non nominare file, pdf, scheda: nomina il risultato"],
 ["Tempo credibile","«10 minuti» è la corsa vera, «5 minuti» suona impossibile"],
 ["Cliffhanger più archetipo relazionale","«Sai perché...? Tutto è partito da mia madre...»"],
 ["Autorità universale","«con questa regola non sbagli mai» batte «la formula che uso io»"],
 ["Self-test","costringi a chiedersi «io che categoria sono?»"],
 ["Definisci per intenzione, non per esclusione","«Non ti dirò mai che sei perfetta così: cercherò sempre il modo per migliorarti»"],
 ["Visual chunking e verbi attivi","«ti costruisco 5 outfit» batte «ti faccio vedere come cavarne 5»"],
 ["Nome proprio","«Giorgia non si era mai sentita così bella» batte «questa cliente»"],
 ["«Mai così» invece di «mai»","evoca il picco positivo, non il fondo del passato"],
 ["Effetto «anche io»","domanda che intercetta la sensazione, poi «Anche io» per disinnescare la vergogna"],
 ["Valida la frustrazione prima della soluzione","«Sai perché il contouring ti sta male? Perché lo hai sempre fatto nel modo sbagliato»"],
 ["Rispondi alla domanda del cliente, non alla tua","«Cosa ti porti dietro da una consulenza d'immagine?» e non «Cosa fa una consulente d'immagine?»"]
];

/* Banca: v = gancio vero (dai contenuti di Unlike Academy, testo come pubblicato), s = esempio di scuola */
var BANCA=[
 {x:"Ma siamo davvero sicuri che la nuova funzione sulle storie sia positiva al cento per cento?",c:"",l:"Controintuitivo",f:"talking",v:"v",n:"Domanda che incrina l'entusiasmo di tutti"},
 {x:"Vuoi crescere su TikTok nel 2026? INIZIA A FARE LE LIVE!!",c:"",l:"Promessa specifica",f:"talking",v:"v",n:"Domanda al target e comando secco"},
 {x:"30 giorni di sospensione da Instagram se non rispetti le nuove regole dei Trial Reels",c:"",l:"FOMO",f:"talking",v:"v",n:"Paura più numero concreto"},
 {x:"Mi hanno dato della fuffa guru. E sapete che cosa ci ho fatto? Ci ho creato un format, anzi due",c:"CLIFFHANGER PERSONALE",l:"Curiosità incompiuta",f:"story",v:"v",n:"Scena vissuta con ribaltamento"},
 {x:"Come fare i soldi sui social in poco tempo a partire da domani? Spoiler: non è possibile",c:"PIVOT NARRATIVO",l:"Controintuitivo",f:"talking",v:"v",n:"Domanda e spoiler onesto, in linea con l'antifuffa"},
 {x:"Ho ricevuto due feedback negativi da parte di persone che hanno acquistato i miei prodotti, e no, non me ne vergogno",c:"",l:"Curiosità incompiuta",f:"story",v:"v",n:"Vulnerabilità e ribaltamento"},
 {x:"Se tu vai in palestra e non ottieni risultati, vai a denunciare la palestra o dai la colpa a te stesso?",c:"",l:"Controintuitivo",f:"talking",v:"v",n:"Analogia che porta a una colpa ribaltata"},
 {x:"Vuoi i follower? Rispondi a questa domanda: perché dovrei seguirti?",c:"",l:"Identificazione immediata",f:"talking",v:"v",n:"Domanda specchio"},
 {x:"Se i tuoi social non funzionano è perché non ci credi davvero",c:"OPINIONE SCOMODA",l:"Controintuitivo",f:"talking",v:"v",n:"Tesi netta, poi si smonta il luogo comune dell'algoritmo"},
 {x:"L'altro giorno in live uno mi ha scritto: «Insegni social media marketing e poi hai tre commenti su TikTok»",c:"CLIFFHANGER PERSONALE",l:"Curiosità incompiuta",f:"story",v:"v",n:"Commento ricevuto in live, citato alla lettera"},
 {x:"Devi creare più contenuti di quelli che consumi",c:"RIPETIZIONE RITMICA",l:"Controintuitivo",f:"talking",v:"v",n:"Ripetuta tre volte a schermo, il ritmo fa il gancio"},
 {x:"«Gemma ma io non ho mai idea di cosa postare». Smettila di cercare idee di contenuto nella tua testa. Inizia a parlare con il tuo pubblico",c:"",l:"Identificazione immediata",f:"talking",v:"v",n:"Obiezione del target citata, poi risposta"},
 {x:"Blocco creativo in estate? Questo succede perché ti stai limitando",c:"",l:"Identificazione immediata",f:"talking",v:"v",n:"Diagnosi e colpa ribaltata"},
 {x:"«No grazie, non lo compro perché costa troppo». Te lo sei mai sentito dire?",c:"DOMANDA DI IDENTIFICAZIONE",l:"Identificazione immediata",f:"talking",v:"v",n:"Obiezione del cliente recitata"},
 {x:"«Non ti riesco a trovare! Non ti riesco a vedere! Non mi appari mai nei Per Te»",c:"",l:"Identificazione immediata",f:"talking",v:"v",n:"Frase del pubblico recitata: chi la dice si riconosce subito"},
 {x:"Perché la challenge «Indovina l'oggetto» sta facendo fare milioni di views ai creator?",c:"",l:"Curiosità incompiuta",f:"talking",v:"v",n:"Domanda sul perché di un fenomeno"},
 {x:"Ma come fa Piero Armenti a fare milioni di visualizzazioni, con i testi storti, senza editing, e video girati così?",c:"",l:"Controintuitivo",f:"talking",v:"v",n:"Paradosso: tutto sembra sbagliato eppure funziona"},
 {x:"«Gemma, ma quando inizi a fare qualcosa di serio?» Queste sono le parole che mi disse il mio professore di architettura, quattro anni fa",c:"STORIA PERSONALE",l:"Curiosità incompiuta",f:"story",v:"v",n:"Citazione e ferita"},
 {x:"Avete presente quelle che sono sempre curate e voi non capite come fanno? Vi svelo il loro segreto",c:"STUPORE + COMMUNITY",l:"Identificazione immediata",f:"talking",v:"v",n:"Parla a un'esperienza che il target condivide e promette il segreto"},
 {x:"Il tuo armadio è pieno e non hai niente da metterti? Ti spiego perché",c:"",l:"Identificazione immediata",f:"talking",v:"v",n:"Domanda su un dolore reale, per chi si riconosce"},
 {x:"Cerchi qualcuno che ti aiuti a valorizzare il tuo corpo ma non sei pronta a sentirti dire che non stai bene con tutto? Allora non sono la professionista giusta per te",c:"DI ESCLUSIONE",l:"Controintuitivo",f:"story",v:"v",n:"Filtra chi guarda e posiziona con forza"},
 {x:"Ma cosa fa una consulente d'immagine? Vi porto con me dentro una consulenza",c:"",l:"Curiosità incompiuta",f:"talking",v:"v",n:"Versione più forte: «Cosa ti porti dietro da una consulenza d'immagine?»"},
 {x:"Siamo nell'epoca del tutto e subito",c:"",l:"Identificazione immediata",f:"story",v:"v",n:"Diagnosi culturale, poi si va al caso"},
 {x:"Le views misurano la curiosità, non l'intenzione",c:"OPINIONE SCOMODA",l:"Controintuitivo",f:"talking",v:"s",n:"Scritta per mostrare la struttura"},
 {x:"«Voglio clienti, non follower» me lo dite tutte. Poi aprite ChatGPT e gli chiedete il post più virale possibile. Vedi il problema?",c:"",l:"Controintuitivo",f:"talking",v:"s",n:"Parole vere del target e pensiero a voce alta"},
 {x:"So fare benissimo il mio lavoro, ma non so raccontarlo. Te lo dici anche tu?",c:"DOMANDA DI IDENTIFICAZIONE",l:"Identificazione immediata",f:"talking",v:"s",n:"Effetto «anche io» con le parole del target"},
 {x:"Mi visualizzano sempre le solite 30 persone",c:"",l:"Identificazione immediata",f:"talking",v:"s",n:"Specificità: il numero e il vissuto"},
 {x:"Quel reel da 50.000 views che non ti ha portato un solo cliente?",c:"",l:"Curiosità incompiuta",f:"talking",v:"s",n:"Il ricordo che fa male, la risposta sta nel video"},
 {x:"Hai investito, non ha funzionato, e ti sei convinta che il problema fossi tu",c:"",l:"Identificazione immediata",f:"story",v:"s",n:"Valida la frustrazione, poi toglie la colpa"},
 {x:"Il webinar è gratis. E no, non finisce con lo sconto a scalare di quelli che già conosci",c:"",l:"Controintuitivo",f:"talking",v:"s",n:"Disinnesca la diffidenza prima che nasca"}
].concat(CATS.map(function(c){return {x:c.e,c:c.n,l:"",f:"talking",v:"s",n:"Esempio di formula"}}));

var LIMITS={talking:{max:15,label:"talking head"},story:{max:30,label:"storytelling"},visual:{max:20,label:"confronto visivo o quiz"},broll:{max:15,label:"b-roll"},carosello:{max:12,label:"carosello, prima slide"}};
var FMT_LAB={talking:"talking head",story:"storytelling",visual:"confronto visivo o quiz",broll:"b-roll, solo testo",carosello:"carosello"};
var OB_LAB={conoscere:"farsi conoscere",fidelizzare:"fidelizzare",vendere:"vendere"};

/* ==================== STATO ==================== */
var KEY="ganci-v2";
var S={focus:"",modo:"idea",gi:"",idea:"",target:"",obiettivo:"conoscere",pain:"",formato:"talking",t1:"",t2:"",t3:"",t4:"",leva:"",cands:[],full:false,tutte:false};
try{var sv=JSON.parse(localStorage.getItem(KEY)||"null");if(sv&&typeof sv==="object"){for(var k in sv){if(k in S)S[k]=sv[k]}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function $(id){return document.getElementById(id)}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
function toast(m){var t=$("toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.h);toast.h=setTimeout(function(){t.classList.remove("on")},2200)}
function copyText(t,msg){
  var ok=function(){toast(msg||"Copiato")};
  var rs=function(){var a=document.createElement("textarea");a.value=t;a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(a);ok()};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok).catch(rs)}else{rs()}
}
function words(t){return t.trim().split(/\s+/).filter(Boolean)}
function sentences(t){var m=t.match(/[^.!?…]+[.!?…]*/g);return m?m.map(function(s){return s.trim()}).filter(Boolean):[]}
function cap1(s){return s?s.charAt(0).toUpperCase()+s.slice(1):s}
function catByName(n){for(var i=0;i<CATS.length;i++){if(CATS[i].n===n)return CATS[i]}return null}

/* ==================== ANALISI ==================== */
function detectLeva(t){
  var l=t.toLowerCase(),o=[];
  if(/unpopular opinion|non (hai bisogno|serve|servono|ti serve)|non è (colpa|l'algoritmo|il glutine)|tutti (pensano|ti dicono|dicono)|è una bugia|la verità è|nessuno (ti dice|te lo dice)|non è possibile|non ci credi/.test(l))o.push("Controintuitivo");
  if(/se sei|se hai|se anche tu|ti è mai capitato|hai mai |pov[:.]|ogni (volta|settimana|giorno)|anche io|te lo dici anche tu|avete presente|hai presente|chi guarda|ti riconosci|te lo sei mai/.test(l))o.push("Identificazione immediata");
  if(/stai perdendo|ti stai perdendo|\bperdi\b|rischi di|sta (letteralmente )?(uccidendo|facendo morire|rovinando)|nel frattempo|se non fai|giorni di sospensione/.test(l))o.push("FOMO");
  if(/come ho |come sono |in \d+ (giorni|ore|mesi|minuti|settimane|anni)|da .{2,25} a .{2,25} in |ti (preparo|costruisco|porto) .{0,30}(in|un)/.test(l))o.push("Promessa specifica");
  if(/sto per |cambierà la vita|ti cambierà|assurd|incredibil|non ci crederai|non ci credo|sai perch|sai cosa|sai com|indovina|il motivo per cui|e sai cosa|il segreto|il trucco|che nessuno|\.\.\.$|…$|spoiler/.test(l)||/\?\s*$/.test(t.trim()))o.push("Curiosità incompiuta");
  return o;
}
function detectCat(t){
  var l=t.toLowerCase().trim();
  var T=[["REVERSE PSYCHOLOGY",/^non sei pront/],["AZIONE",/^se fai .{3,40} per \d+/],["TEST",/^ho (provato|testato)/],["DAY IN THE LIFE",/^\d+ ore nella vita/],["RIVELAZIONE LEGATA ALL'ETÀ",/^avevo \d+ anni/],["BISOGNO",/^l.unica cosa che/],["MOTIVO",/^il motivo (principale )?per cui/],["SEGRETO A LUNGO NASCOSTO",/ho tenuto questo segreto/],["REVERSE LIST",/^non fare (quest|[0-9]|le |gli |mai )/],["NON",/^non /],["OPINIONE SCOMODA",/^unpopular opinion/],["DOMANDA DI IDENTIFICAZIONE",/^(ma )?sai (perché|perche|cosa|com|quanto)/],["SE",/^se (sei|hai|anche tu|passi|gestisci)/],["QUALIFICAZIONE / PSICOLOGIA INVERSA",/scrolla[.,]? se (invece )?(vuoi|preferisci)|se vuoi .{3,40}[, ]scrolla/],["DI ESCLUSIONE",/non sono io[.!]?$|non faccio per te[.!]?$/],["DEVI",/^devi /],["SEGNI",/\bsegni che\b/],["AUTORITÀ NUMERICA",/ho (analizzato|studiato|guardato|visto) \d+/],["CONFRONTO",/\bvs\b|qual è la differenza/],["DA A A B IN T",/come è passat|da .{2,25} a .{2,25} in /],["COME",/^(ecco )?come (ho|sono|ha|si|puoi)/],["ERRORE",/l.errore (numero|n[. ]?1|più grande) .{0,40}(commett|fann)/],["ERRORE PERSONALE",/^ho sbagliato/],["LISTA",/^\d+ (cose|motivi|errori|segreti|trucchi|modi)/],["COSA",/^cosa (pubblicare|fare|serve|scrivere|postare|ti porti)/],["DOVREBBE",/dovrebbe .{3,50} almeno una volta|^ogni .{2,30} dovrebbe/],["TRUCCO",/^il trucco/],["PROSSIMA VOLTA",/^la prossima volta che/],["IMPORTANTE",/^la cosa più importante/],["PIVOT NARRATIVO",/tutti pensano|la realtà[:.]/],["SEGRETO NASCOSTO",/^il segreto/],["STORIA PERSONALE",/^a \d+ anni/],["POV",/^pov[:. ]/],["STUPORE + COMMUNITY",/^avete presente|^hai presente/],["CLIFFHANGER PERSONALE",/e sai cosa è successo/],["QUIZ / SFIDA VISIVA",/indovina(te)?/],["IPERBOLE EMOTIVA",/sta letteralmente/],["RIPETIZIONE RITMICA",/che non esiste.*che non esiste/]];
  for(var i=0;i<T.length;i++){if(T[i][1].test(l))return T[i][0]}
  return null;
}
function trimToLimit(t,max){
  var ss=sentences(t),acc=[],n=0;
  for(var i=0;i<ss.length;i++){var c=words(ss[i]).length;if(n+c<=max){acc.push(ss[i]);n+=c}else break}
  if(acc.length)return acc.join(" ");
  var w=words(t).slice(0,max).join(" ");
  var ci=w.lastIndexOf(",");
  if(ci>20)w=w.slice(0,ci);
  return w.replace(/[,;:\s]+$/,"");
}
function dropSentence(t,re){
  var ss=sentences(t).filter(function(s){return !re.test(s.toLowerCase())});
  return ss.length?ss.join(" "):t;
}

function analyze(text,fmt){
  var f=[],t=text.trim(),l=t.toLowerCase(),ws=words(t),n=ws.length,ss=sentences(t),lim=LIMITS[fmt]||LIMITS.talking;
  var aperturaBad=false;
  if(n>lim.max+3){f.push({dim:"len",sev:"bad",title:"Troppo lungo: "+n+" parole, il limite è "+lim.max+" per "+lim.label,detail:"Il limite non è negoziabile. Se non riesci a tagliare senza perdere il senso, scegli una categoria più breve",fix:"Taglia le subordinate in coda e tieni la tensione",fx:function(x){return trimToLimit(x,lim.max)}})}
  else if(n>lim.max){f.push({dim:"len",sev:"warn",title:"Al limite: "+n+" parole su "+lim.max,detail:"Sei appena oltre. Di solito c'è una parola di contesto o una coda da togliere",fix:"Rileggi l'ultima frase: se spiega quello che hai già detto, taglia"})}
  var apRe=/^(in questo (video|reel|contenuto|post)|oggi vi parlo|oggi parliamo|oggi vi mostro|oggi voglio parlarvi|ciao ragazz[eai]|ciao a tutt[ei]|buongiorno|benvenut[aei]|ecco \d+ consigli|vi spiego come)/;
  if(apRe.test(l)){aperturaBad=true;f.push({dim:"struct",sev:"bad",title:"Apertura che annuncia il video",detail:"Il gancio non descrive il video: è già il video. Chi scrolla non aspetta la fine dell'annuncio",fix:"Entra direttamente nella tensione",prima:"Vi faccio vedere cosa succede nel ristorante quando cambiamo le foto",dopo:"Stessa pasta, stesso ristorante: una fa venire fame, l'altra no",fx:function(x){var y=x.replace(/^(in questo (video|reel|contenuto|post)|oggi vi parlo di|oggi parliamo di|oggi vi mostro|oggi voglio parlarvi di|ciao ragazz[eai]|ciao a tutt[ei]|buongiorno|benvenut[aei]|vi spiego come)[^.,:!?]*[.,:!?]\s*/i,"");return y.trim()&&y!==x?cap1(y):x}})}
  else if(/^(allora|quindi|dunque|volevo|premesso|piccola premessa)/.test(l)){aperturaBad=true;f.push({dim:"talk",sev:"warn",title:"Parti con una zeppa, non con la tensione",detail:"Le prime 3-5 parole sono le uniche che tutti vedono",fix:"Togli la prima parola o frase e verifica: quasi sempre migliora",fx:function(x){return cap1(x.replace(/^(allora|quindi|dunque|volevo|premesso|piccola premessa)[,:]?\s*/i,""))}})}
  if(/[—–]/.test(t)){f.push({dim:"talk",sev:"bad",title:"Trattini lunghi nel gancio",detail:"Nessuno pronuncia un trattino",fix:"Sostituisci con punto, virgola o due punti",fx:function(x){return x.replace(/\s*[—–]\s*/g,", ")}})}
  if(/^(gancio|hook)( verbale| testuale)?\s*:/.test(l)||/\((trigger|leva|categoria)/i.test(t)){f.push({dim:"struct",sev:"bad",title:"Etichette tecniche nel testo",detail:"Il gancio è la frase che dici, non la sua scheda tecnica",fix:"Togli etichette e parentesi",fx:function(x){return x.replace(/^(gancio|hook)( verbale| testuale)?\s*:\s*/i,"").replace(/\s*\((trigger|leva|categoria)[^)]*\)/gi,"")}})}
  var qi=t.indexOf("?");
  if(qi>-1&&qi<t.length-1){var after=t.slice(qi+1).trim().toLowerCase();if(/^(perché|perche|non è colpa|la risposta|te lo dico|semplice|facile|il motivo)/.test(after)){f.push({dim:"loop",sev:"bad",title:"Rispondi alla tua stessa domanda",detail:"La domanda da sola è già il gancio: la risposta chiude il loop e spegne la curiosità",fix:"Fermati alla domanda",prima:"Sai perché compri vestiti che poi non metti? Non è colpa tua",dopo:"Sai perché continui a comprare vestiti che poi non metti?",fx:function(x){return x.slice(0,x.indexOf("?")+1)}})}}
  if(/sai (in )?quale (categoria|tipologia)|sai qual è (la tua|il tuo)|che tipo sei\?/.test(l)){f.push({dim:"loop",sev:"bad",title:"Chiusura che categorizza",detail:"«Sai qual è la tua?» chiude il loop invece di aprirlo",fix:"Finisci sull'affermazione secca: chi guarda si fa la domanda da solo",prima:"Il taglio sbagliato può rovinare il tuo viso. Sai qual è la tua facial shape?",dopo:"Il taglio di capelli sbagliato può rovinare il tuo viso. In peggio",fx:function(x){return dropSentence(x,/sai (in )?quale (categoria|tipologia)|sai qual è (la tua|il tuo)|che tipo sei/)}})}
  if(/ti (ci )?ritrovi\?|ti riconosci\?|vi ci ritrovate\?/.test(l)){f.push({dim:"loop",sev:"warn",title:"Chiusura relatable debole",detail:"«Ti ci ritrovi?» racconta quello che chi guarda già sa, invece di aprire un loop",fix:"Apri direttamente con la domanda che colpisce il dolore",fx:function(x){return dropSentence(x,/ti (ci )?ritrovi|ti riconosci|vi ci ritrovate/)}})}
  var run=0,maxRun=0;ss.forEach(function(s){var c=words(s).length;if(c<=4){run++;maxRun=Math.max(maxRun,run)}else run=0});
  if(maxRun>=3){f.push({dim:"talk",sev:"bad",title:"Tre o più frasi spezzettate di fila",detail:"Nessuno parla a raffiche di tre parole: suona da slide, non da persona",fix:"Riscrivi in modo discorsivo, con una frase che respira",prima:"Blocco. Non sai cosa girare. Ogni settimana la stessa storia",dopo:"Ogni settimana apri il telefono e non sai cosa pubblicare"})}
  else if(maxRun===2&&ss.length>2){f.push({dim:"talk",sev:"warn",title:"Ritmo un po' spezzettato",detail:"Due frasi brevissime di fila reggono solo se tagliano su qualcosa di emotivamente fortissimo",fix:"Leggilo ad alta voce: se suona da presentazione, unisci"})}
  if(/\b\d+\s+(errori|cose|motivi|consigli|trucchi|segreti|passaggi|step|regole)\b/.test(l)&&!/\bsegni che\b/.test(l)){f.push({dim:"struct",sev:"warn",title:"Il numero della lista è nel gancio",detail:"Nel metodo Unlike il numero va nel corpo del video: nel gancio serve la tensione, non l'indice",fix:"Togli il numero e apri sul problema che la lista risolve"})}
  if(ss.length>1){var last=ss[ss.length-1].toLowerCase();if(/(ti|vi|te lo|ve lo) spiego tutto|ti dico (tutto|io come)|vi faccio vedere[.!]?$|ti faccio vedere[.!]?$|guarda(te)? (il video|fino alla fine)|scoprilo nel video|ne parliamo nel video|vediamolo insieme[.!]?$/.test(last)){f.push({dim:"loop",sev:"warn",title:"Coda che annuncia genericamente il video",detail:"«Ti spiego tutto» non aggiunge niente: si tiene solo se apre un loop reale o promette qualcosa di specifico",fix:"Taglia la coda",fx:function(x){var s=sentences(x);s.pop();return s.join(" ")||x}})}}
  if(/contenuti di valore|fare la differenza|portare risultati|raggiungere i tuoi obiettivi|strategia (giusta|vincente)|al livello successivo|fare il salto di qualità/.test(l)){f.push({dim:"talk",sev:"warn",title:"Frasi da manuale di marketing",detail:"Parole che potrebbe dire chiunque: il dettaglio specifico dice che viene dall'esperienza vera",fix:"Sostituisci con un dettaglio concreto del tuo mestiere"})}
  var leve=detectLeva(t);
  if(!leve.length){f.push({dim:"leva",sev:"warn",title:"Manca un motivo per restare",detail:"Non emerge curiosità, riconoscersi, paura di perdere qualcosa, sorpresa o promessa: rischia di scivolare via nello scroll",fix:"Chiediti qual è il dolore, il sogno o l'obiezione di chi guarda, e parti da lì"})}
  var cat=detectCat(t);
  if(fmt==="carosello"){f.push({dim:"info",sev:"info",title:"Carosello: scrivi anche la seconda slide",detail:"Instagram a volte fa partire il carosello da lì, quindi la seconda slide deve reggersi da sola",fix:""})}
  /* qualità */
  var ctxw={};[S.target,S.pain,S.idea].join(" ").toLowerCase().split(/[^a-zàèéìòù']+/).forEach(function(w){if(w.length>=5)ctxw[w]=1});
  var ctxHit=Object.keys(ctxw).some(function(w){return l.indexOf(w)>-1});
  var swHit=SWIPE.some(function(s){return l.indexOf(s)>-1});
  var spec=(/\d/.test(t)?4:0)+((ctxHit||swHit)?5:0)+((/\s[A-ZÀ-Ý][a-zà-ÿ]{2,}/.test(t)||/["“«]/.test(t))?3:0);
  var mark=/sto per|assurd|incredibil|folle|cambier|shock|mai visto|\?|\bnon\b|\bmai\b|errore|sbagli|perch[eé]|fuffa|nessuno|\d|se sei|pov|unpopular|colpa|segreto|trucco|scrolla|spoiler|verità|smettila|\bvs\b|davvero/;
  var f5=ws.slice(0,5).join(" ").toLowerCase();
  var tens=aperturaBad?0:(mark.test(f5)?10:(mark.test(l)?5:0));
  var levaPts=0;if(leve.length){var lv=null;LEVE.forEach(function(x){if(x.k===S.leva)lv=x});levaPts=(lv&&leve.indexOf(lv.lab)>-1)?10:6;if(!S.leva)levaPts=10}
  var bad=0,warn=0,tb=0,tw=0;
  f.forEach(function(x){if(x.dim==="talk"){if(x.sev==="bad")tb++;else tw++}else if(x.dim!=="leva"&&x.dim!=="info"){if(x.sev==="bad")bad++;else warn++}});
  var rules=Math.max(0,60-bad*16-warn*7);
  var parl=Math.max(0,8-tb*4-tw*2);
  var total=rules+spec+tens+levaPts+parl;
  var badAll=f.filter(function(x){return x.sev==="bad"}).length;
  var verd,vc;
  if(badAll>=2||total<55){verd="Da rifare";vc="bad"}else if(total<78||badAll===1){verd="Quasi, rifinisci";vc="warn"}else{verd="Pronto da provare";vc="ok"}
  return {f:f,n:n,lim:lim,leve:leve,cat:cat,total:Math.min(100,total),rules:rules,spec:spec,tens:tens,leva:levaPts,parl:parl,verd:verd,vc:vc};
}
var DIMS={leva:"Perché guardare",struct:"Forma",len:"Lunghezza",talk:"Suona parlato",loop:"Curiosità aperta"};
function dimSev(f,d){var s="ok";f.forEach(function(x){if(x.dim===d){if(x.sev==="bad")s="bad";else if(x.sev==="warn"&&s!=="bad")s="warn"}});return s}

/* ==================== PROMPT ==================== */
function core(full){
  var cats=CATS.map(function(c){return "· "+c.n+": "+c.f+(full?" (es: "+c.e+")":"")}).join("\n");
  return "IL METODO UNLIKE PER I GANCI (regole da rispettare)\n\n"+
"1) LE 5 LEVE: curiosità incompiuta (apre un loop, non dà la risposta) · paura di perdere (una perdita concreta, mai urgenza finta) · identificazione immediata (nomina chi guarda con precisione) · controintuitivo (rompe una credenza vera, non clickbait) · promessa specifica con tempo credibile\n"+
"2) LUNGHEZZA, conta le parole dopo aver scritto: talking head o tutorial MAX 15 parole · storytelling o fidelizzare MAX 25-30 · confronto visivo o quiz MAX 20 · prima slide di un carosello MAX 12\n"+
"3) LE FORMULE UNLIKE (la formula è uno scaffold: riempi i campi, non stravolgere la struttura):\n"+cats+"\n"+
"4) PAIN POINT E DESIDERIO: il gancio parte dal dolore, dal sogno o dall'obiezione di chi guarda, mai dall'argomento del video\n"+
"5) PARLATO: leggibile ad alta voce alla prima, mai tre frasi brevissime di fila, dettagli concreti del mestiere\n"+
"6) LOOP APERTO: la tensione nelle prime 3-5 parole, mai rispondere alla propria domanda\n"+
"7) DIVIETI: niente «In questo video» né «Oggi vi parlo di», niente trattini lunghi, il numero della lista va nel corpo e non nel gancio, niente emoji, niente etichette tecniche dentro i ganci\n"+
"8) GANCIO A SCHERMO: circa 10 parole, diverso dal parlato, autoconclusivo (sintesi, etichetta, equazione, domanda secca, keyword più domanda, annuncio, POV, rimando alla caption)";
}
function ctxBlock(){
  var o=[];
  if(S.idea)o.push("IDEA DEL CONTENUTO: "+S.idea);
  if(S.target)o.push("PER CHI È: "+S.target);
  if(S.pain)o.push("COSA DICE O PENSA CHI GUARDA: "+S.pain);
  o.push("OBIETTIVO: "+OB_LAB[S.obiettivo]);
  o.push("FORMATO: "+FMT_LAB[S.formato]+" (limite "+(LIMITS[S.formato]||LIMITS.talking).max+" parole per il gancio parlato)");
  var tens=[];
  if(S.t1)tens.push("controintuitivo: "+S.t1);if(S.t2)tens.push("cosa sente chi guarda: "+S.t2);if(S.t3)tens.push("cosa perde: "+S.t3);if(S.t4)tens.push("cosa non dice nessuno: "+S.t4);
  if(tens.length)o.push("TENSIONE CENTRALE: "+tens.join(" · "));
  var lv=null;LEVE.forEach(function(x){if(x.k===S.leva)lv=x});if(lv)o.push("LEVA SCELTA: "+lv.n);
  return o.join("\n");
}
var CHIUSURA="REGOLE DI SCRITTURA: italiano, parlato naturale, nessun trattino lungo, nessuna emoji, nessuna etichetta tecnica dentro i ganci\nLe parole sono mie: tieni il mio modo di parlare e non scrivere al posto mio come sono";
function promptGen(){
  return "Sei l'esperto di ganci di Unlike Academy per contenuti video brevi (Instagram e TikTok)\nDevo pubblicare questo contenuto e mi servono i ganci, creati applicando il metodo qui sotto\n\n"+ctxBlock()+"\n\n"+core(S.full)+"\n\nCOSA DEVI FARE\n1. Scrivi in tre righe la tensione centrale dell'idea, il pain point o desiderio più forte e se l'idea regge per chi non conosce chi la pubblica\n2. Dammi 10 opzioni di gancio con almeno 4 leve e 8 formule diverse, almeno 3 coraggiose o polarizzanti e almeno 1 fuori dagli schemi\n3. Per ogni opzione: gancio parlato con il conteggio delle parole (dentro il limite), formula usata, leva, gancio a schermo diverso dal parlato, e una riga su perché ferma lo scroll\n4. Chiudi con i 3 migliori e dimmi quale useresti per prima\n\n"+CHIUSURA;
}
function promptFix(c){
  return "Sei l'esperto di ganci di Unlike Academy per contenuti video brevi (Instagram e TikTok)\nRiscrivi il gancio qui sotto applicando il metodo\n\nGANCIO: \""+c.text+"\"\n"+ctxBlock()+"\n\n"+core(S.full)+"\n\nCOSA DEVI FARE\n1. Diagnosi in una riga: qual è il problema principale\n2. Cinque riscritture: A fix minimo con la stessa struttura · B e C con la formula migliore tra quelle elencate · D e E coraggiose (polarizzante, esclusione, iperbole o angolo ribaltato)\n3. Per ognuna: conteggio parole dentro il limite, categoria, leva e gancio a schermo diverso dal parlato\n4. Segna la migliore con una riga sul perché\n\n"+CHIUSURA;
}
function promptTest(c){
  return "Fai l'avvocato del diavolo sul gancio qui sotto, per un contenuto video breve\n\nGANCIO: \""+c.text+"\"\n"+ctxBlock()+"\n\nRispondi in modo secco\n1. Lo potrebbe dire qualsiasi altra persona del mio settore? Se sì, dove è generico\n2. In quale punto si perde chi non mi conosce\n3. Quali parole suonano scritte o da AI\n4. Una versione più polarizzante: un gancio forte non piace a tutti\n5. Una versione che usa le parole di chi guarda\n\nRegole: conta le parole di ogni versione e rispetta il limite del formato, parlato naturale, nessun trattino lungo, nessuna emoji\n"+CHIUSURA;
}

/* ==================== NAVIGAZIONE ==================== */
var curP=1;
function go(p,noScroll){
  curP=p;
  ["p1","p3","p4"].forEach(function(id){$(id).classList.toggle("on",id==="p"+p)});
  var bs=document.querySelectorAll("#passi button");
  for(var j=0;j<bs.length;j++){var n=+bs[j].dataset.p;bs[j].classList.toggle("on",n===p);bs[j].classList.toggle("fatto",n<p)}
  var sli=document.querySelectorAll("#passi li");if(p===3&&sli[1])sli[1].style.display="";
  if(p===3)renderP3();
  if(p===4)renderCands();
  if(!noScroll){var el=$("strumento");window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-8,behavior:"smooth"})}
}
document.querySelectorAll("#passi button").forEach(function(b){b.addEventListener("click",function(){
  var n=+b.dataset.p;
  if(n===3){if(!readP1(true))return}
  if(n===4&&!S.cands.length){S.cands.push(newCand(""));save()}
  go(n);
})});

/* ==================== PASSO 1 ==================== */
function readP1(strict){
  S.idea=$("idea").value;S.target=$("target").value;S.obiettivo=$("obiettivo").value;S.pain=$("pain").value;S.formato=$("formato").value;S.gi=$("gi").value;
  S.leva=LEVA_CONS[S.obiettivo];save();
  if(strict&&S.modo==="idea"&&!S.idea.trim()){toast("Scrivi prima di cosa parla il video, bastano due righe");$("idea").focus();return false}
  return true;
}
function setModo(m){
  S.modo=m;save();
  document.querySelectorAll("#modi button").forEach(function(b){b.classList.toggle("on",b.dataset.m===m)});
  $("m-idea").style.display=m==="idea"?"":"none";$("m-gancio").style.display=m==="gancio"?"":"none";
  $("a1").style.display=m==="idea"?"":"none";$("g1").style.display=m==="gancio"?"":"none";
  var sb=document.querySelectorAll("#passi li");if(sb[1])sb[1].style.display=m==="gancio"?"none":"";
}
document.querySelectorAll("#modi button").forEach(function(b){b.addEventListener("click",function(){setModo(b.dataset.m)})});
function fillP1(){
  $("idea").value=S.idea;$("target").value=S.target;$("obiettivo").value=S.obiettivo;$("pain").value=S.pain;$("formato").value=S.formato;$("gi").value=S.gi;
  setModo(S.modo);
}
function renderSwipe(){
  var h="";SWIPE.forEach(function(s){h+='<button type="button" class="chip" data-s="'+esc(s)+'">'+esc(s)+'</button>'});
  $("swipe").innerHTML=h;
  $("swipe").addEventListener("click",function(e){
    var b=e.target.closest(".chip");if(!b)return;
    var p=$("pain"),s=b.dataset.s;
    if(p.value.toLowerCase().indexOf(s)>-1)return;
    p.value=(p.value.trim()?p.value.trim()+" · ":"")+s;readP1();
  });
}
$("a1").addEventListener("click",function(){if(readP1(true))go(3)});
$("g1").addEventListener("click",function(){
  readP1();
  if(!S.gi.trim()){toast("Incolla prima il tuo gancio");$("gi").focus();return}
  S.cands.push(newCand(S.gi.trim()));S.gi="";$("gi").value="";save();go(4);
});
$("vai-idea").addEventListener("click",function(){go(1);setTimeout(function(){$("idea").focus()},400)});
["idea","target","pain","gi"].forEach(function(id){$(id).addEventListener("input",function(){readP1()})});
["obiettivo","formato"].forEach(function(id){$(id).addEventListener("change",function(){readP1()})});

/* ==================== PASSO 3 ==================== */
function newCand(text,cat){return {id:"c"+Date.now().toString(36)+Math.floor(Math.random()*999),text:text,cat:cat||"",mod:"sint",scr:"",leva:S.leva}}
function addCand(text,cat){S.cands.push(newCand(text,cat));save();$("tieni-n").textContent=S.cands.length+(S.cands.length===1?" gancio tenuto":" ganci tenuti")}
function recCats(){
  var lv=null;LEVE.forEach(function(x){if(x.k===S.leva)lv=x});
  var sc=CATS.map(function(c){var s=0;if(lv&&lv.cats.indexOf(c.n)>-1)s+=2;if(c.g.indexOf(S.obiettivo)>-1)s+=1;return {c:c,s:s}});
  sc.sort(function(a,b){return b.s-a.s});
  return sc.filter(function(x){return x.s>0}).map(function(x){return x.c});
}
function slotsOf(f){var m=f.match(/\[[^\]]+\]/g)||[];return m.map(function(s){return s.slice(1,-1)})}
function prefill(name){
  var u=name.toUpperCase();
  if(/TARGET/.test(u)&&!/PROBLEMA/.test(u))return S.target;
  if(/PROBLEMA|SITUAZIONE/.test(u))return S.pain.split(" · ")[0]||"";
  return "";
}
function renderP3(){
  var rec=recCats(),show=S.tutte?CATS.slice():rec.slice(0,6);
  if(S.focus){var fc=catByName(S.focus);if(fc){show=show.filter(function(x){return x!==fc});show.unshift(fc)}S.focus=""}
  $("a-intro").textContent=S.tutte?"Tutte le formule":"Le formule che funzionano meglio per "+OB_LAB[S.obiettivo];
  $("piuCat").textContent=S.tutte?"Mostra solo le consigliate":"Mostra tutte le formule";
  var h="";
  show.forEach(function(c){
    var sl=slotsOf(c.f),idx=CATS.indexOf(c);
    h+='<div class="gc" data-i="'+idx+'"><span class="tr">'+esc(c.n)+'</span><span class="nm">'+esc(c.pt)+'</span><span class="qu">'+esc(c.q)+'</span><div class="fm">'+esc(c.f).replace(/\[(.*?)\]/g,"<em>[$1]</em>")+'</div><div class="es">Es: '+esc(c.e)+'</div><div class="sl">';
    sl.forEach(function(s,j){var v=prefill(s);h+='<div><label>'+esc(cap1(s.toLowerCase()))+'</label><input type="text" data-j="'+j+'" value="'+esc(v)+'" placeholder="'+esc(s.toLowerCase())+'"></div>'});
    h+='</div><div class="pv vuoto"></div><div class="ct"></div><div class="az"><button type="button" class="btn mini" data-act="tieni">Tieni questo</button></div></div>';
  });
  $("gridA").innerHTML=h;
  document.querySelectorAll("#gridA .gc").forEach(function(el){updateSlots(el)});
  $("tieni-n").textContent=S.cands.length?S.cands.length+(S.cands.length===1?" gancio tenuto":" ganci tenuti"):"";
  renderB();
}
function slotText(el){
  var c=CATS[+el.dataset.i],vals=[].map.call(el.querySelectorAll("input"),function(i){return i.value.trim()});
  var j=0,all=true,txt=c.f.replace(/\[[^\]]+\]/g,function(m){var v=vals[j++];if(!v){all=false;return m}return v});
  return {txt:txt,all:all,any:vals.some(Boolean)};
}
function updateSlots(el){
  var r=slotText(el),pv=el.querySelector(".pv"),ct=el.querySelector(".ct"),lim=(LIMITS[S.formato]||LIMITS.talking);
  var n=words(r.txt).length;
  pv.textContent=r.any?r.txt:"Compila i campi per vedere il gancio";
  pv.classList.toggle("vuoto",!r.any);
  ct.textContent=r.any?n+" parole · limite "+lim.max+(r.all?"":" · mancano dei campi"):"";
  ct.classList.toggle("over",r.any&&n>lim.max);
}
$("gridA").addEventListener("input",function(e){var el=e.target.closest(".gc");if(el)updateSlots(el)});
$("gridA").addEventListener("click",function(e){
  var b=e.target.closest("[data-act=tieni]");if(!b)return;
  var el=b.closest(".gc"),r=slotText(el);
  if(!r.any){toast("Compila prima almeno un campo");return}
  addCand(r.txt,CATS[+el.dataset.i].n);toast("Aggiunto ai ganci tenuti");
});
$("piuCat").addEventListener("click",function(){S.tutte=!S.tutte;save();renderP3()});
document.querySelectorAll("#tabs3 button").forEach(function(b){b.addEventListener("click",function(){
  document.querySelectorAll("#tabs3 button").forEach(function(x){x.classList.toggle("on",x===b)});
  ["A","B","C"].forEach(function(k){$("tp"+k).classList.toggle("on",k===b.dataset.t)});
})});

/* banca */
function renderBFilters(){
  var h='<option value="">Tutti i tipi</option>';CATS.forEach(function(c){h+='<option value="'+esc(c.n)+'">'+esc(c.pt)+'</option>'});
  $("bcat").innerHTML=h;
}
var bTutti=false;
function relB(g){
  var ctx=[S.idea,S.target,S.pain].join(" ").toLowerCase().split(/[^a-zàèéìòù']+/).filter(function(w){return w.length>=5});
  var l=(g.x+" "+g.n).toLowerCase(),s=0;
  ctx.forEach(function(w){if(l.indexOf(w)>-1)s+=2});
  var lv=null;LEVE.forEach(function(x){if(x.k===S.leva)lv=x});
  if(lv&&g.l===lv.lab)s+=2;
  if(lv&&lv.cats.indexOf(g.c)>-1)s+=1;
  if(g.v==="v")s+=1;
  return s;
}
function renderB(){
  var q=$("bq").value.trim().toLowerCase(),cat=$("bcat").value,tp=$("btipo").value,out="",n=0,tot=0;
  var filtrato=!!(q||cat||tp);
  var list=BANCA.map(function(g,i){return {g:g,i:i,s:relB(g)}}).sort(function(a,b){return b.s-a.s});
  list.forEach(function(o){
    var g=o.g,i=o.i;
    if(cat&&g.c!==cat)return;if(tp&&g.v!==tp)return;if(q&&(g.x+" "+g.n+" "+g.c).toLowerCase().indexOf(q)===-1)return;
    tot++;
    if(!bTutti&&!filtrato&&n>=12)return;
    n++;
    out+='<div class="gc"><span class="etich '+(g.v==="v"?"":"sc")+'">'+(g.v==="v"?"Gancio vero di Gemma":"Esempio scritto da noi")+'</span><div class="pv" style="border-color:var(--line)">'+esc(g.x)+'</div><div class="ct">'+esc([g.c?(catByName(g.c)||{pt:g.c}).pt:"",g.l].filter(Boolean).join(" · "))+'</div><div class="qu">'+esc(g.n)+'</div><div class="az"><button type="button" class="btn mini" data-b="'+i+'">Parto da questo</button></div></div>';
  });
  $("gridB").innerHTML=out||'<p class="vuoto-msg">Nessun gancio con questi filtri</p>';
  $("bn").textContent=(filtrato||bTutti?tot+" ganci":"I "+n+" più vicini alla tua idea, su "+tot)+" · «Gancio vero» lo ha usato Gemma nei suoi video, «Esempio scritto da noi» mostra la struttura";
  $("bpiu").style.display=(filtrato||bTutti||tot<=12)?"none":"";
}
$("bpiu").addEventListener("click",function(){bTutti=true;renderB()});
["bq"].forEach(function(id){$(id).addEventListener("input",renderB)});["bcat","btipo"].forEach(function(id){$(id).addEventListener("change",renderB)});
$("gridB").addEventListener("click",function(e){var b=e.target.closest("[data-b]");if(!b)return;var g=BANCA[+b.dataset.b];addCand(g.x,g.c);toast("Aggiunto ai tuoi ganci: riscrivilo con le tue parole")});
/* prompt */
document.addEventListener("click",function(e){var b=e.target.closest("[data-cp]");if(b&&b.dataset.cp==="gen"){readP1();copyText(promptGen(),"Prompt copiato: incollalo in Claude o ChatGPT")}});
$("pcorto").addEventListener("click",function(){S.full=false;save();$("pcorto").classList.add("on");$("pfull").classList.remove("on")});
$("pfull").addEventListener("click",function(){S.full=true;save();$("pfull").classList.add("on");$("pcorto").classList.remove("on")});
$("a3").addEventListener("click",function(){
  if(!S.cands.length){toast("Non hai ancora tenuto nessun gancio: scrivine uno tuo qui sotto")}
  if(!S.cands.length)S.cands.push(newCand(""));save();go(4);
});
$("c-ho").addEventListener("click",function(){if(!S.cands.length)S.cands.push(newCand(""));save();go(4)});
$("i3").addEventListener("click",function(){go(1)});

/* ==================== PASSO 4 ==================== */
function renderCands(){
  var h="";
  S.cands.forEach(function(c){h+='<div class="cand" data-id="'+c.id+'"></div>'});
  $("cands").innerHTML=h;
  S.cands.forEach(function(c){fillCand(c,true)});
  renderConfronto();renderFinale();
}
function candById(id){for(var i=0;i<S.cands.length;i++){if(S.cands[i].id===id)return S.cands[i]}return null}
function fillCand(c,first){
  var el=document.querySelector('.cand[data-id="'+c.id+'"]');if(!el)return;
  var keep=el.querySelector("textarea.gt");
  if(first||!keep){
    el.innerHTML='<div class="top"><div><label class="fl" style="margin-top:0">Il gancio che dirai a voce</label><textarea class="gt" aria-label="Gancio parlato" placeholder="Scrivi o incolla qui il tuo gancio, lo controllo subito">'+esc(c.text)+'</textarea><p class="hint" style="margin-top:6px" data-r="cnt"></p></div><div data-r="voto"></div></div><div data-r="res"></div>'+
    '<div class="sbh">La scritta sullo schermo</div><p class="hint" style="margin:0 0 8px">È la frase che compare nel video nei primi secondi, per chi guarda senza audio. Circa 10 parole, diversa da quello che dici: lo riassume. Scegli come vuoi scriverla: ti propongo una bozza, poi rifiniscila</p><div class="chips gmod">'+MODALITA.map(function(m){return '<button type="button" class="chip'+(m.k===c.mod?' on':'')+'" data-mod="'+m.k+'"><b>'+esc(m.n)+'</b><br><span>«'+esc(m.e)+'»</span></button>'}).join("")+'</div><div style="margin-top:10px"><input type="text" class="gs" value="'+esc(c.scr)+'" aria-label="Scritta sullo schermo" placeholder="Bozza da rifinire"><p class="hint" style="margin-top:6px" data-r="scnt"></p></div>'+
    '<div class="azioni no-print"><button class="btn mini" data-a="rev" type="button">Chiedi a Claude di migliorarlo</button><button class="btn mini btn-linea" data-a="test" type="button">Cerca i punti deboli con Claude</button><button class="btn mini btn-linea" data-a="del" type="button">Elimina questo gancio</button></div><p class="hint no-print" style="margin-top:8px">I primi due bottoni copiano un messaggio già pronto: lo incolli in Claude o in ChatGPT e ricevi la risposta</p>';
  }
  updateCand(c);
}
function altHtml(c,a){
  var t=c.text.trim(),tips=[];
  if(a.spec<8)tips.push("Rendilo più tuo: aggiungi un dettaglio concreto, per esempio un numero, il tuo mestiere o una frase che il tuo pubblico dice davvero");
  if(a.tens<10)tips.push("Metti la cosa più sorprendente nelle prime 5 parole e lascia il contesto dopo");
  if(!a.leve.length)tips.push("Scegli perché qualcuno dovrebbe restare: una domanda lasciata aperta, una credenza sbagliata, una promessa concreta");
  if(a.n>a.lim.max)tips.push("Taglia fino a "+a.lim.max+" parole: togli le spiegazioni in coda");
  if(!tips.length)tips.push("Ottimo. Ora leggilo ad alta voce, se suona scritto riscrivilo, e prova anche una versione più coraggiosa");
  var h='<div class="sbh">Cosa fare adesso</div><ul class="tips">'+tips.map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul>';
  /* formule da provare */
  var lv=null;LEVE.forEach(function(x){if(a.leve.length&&x.lab===a.leve[0])lv=x});
  var pool=lv?CATS.filter(function(x){return lv.cats.indexOf(x.n)>-1}):recCats();
  pool=pool.filter(function(x){return x.n!==a.cat&&x.g.indexOf(S.obiettivo)>-1});
  if(pool.length<3)pool=pool.concat(recCats().filter(function(x){return x.n!==a.cat&&pool.indexOf(x)===-1}));
  pool=pool.slice(0,3);
  if(pool.length){
    h+='<div class="sbh">Prova a riscriverlo con una di queste formule</div><div class="grid">';
    pool.forEach(function(x){h+='<div class="gc"><span class="nm">'+esc(x.pt)+'</span><div class="fm">'+esc(x.f).replace(/\[(.*?)\]/g,"<em>[$1]</em>")+'</div><div class="es">Es: '+esc(x.e)+'</div><div class="az no-print"><button type="button" class="btn mini" data-a="fm" data-n="'+esc(x.n)+'">Prova questa formula</button></div></div>'});
    h+='</div>';
  }
  /* ganci veri simili */
  var tw=t.toLowerCase().split(/[^a-zàèéìòù']+/).filter(function(w){return w.length>=5});
  var sim=BANCA.map(function(g,i){var s=0,l=g.x.toLowerCase();tw.forEach(function(w){if(l.indexOf(w)>-1)s+=2});if(a.leve.length&&g.l===a.leve[0])s+=3;if(a.cat&&g.c===a.cat)s+=2;if(g.v==="v")s+=1;return {g:g,i:i,s:s}}).filter(function(o){return o.g.x.toLowerCase()!==t.toLowerCase()&&o.s>1}).sort(function(x,y){return y.s-x.s}).slice(0,3);
  if(sim.length){
    h+='<div class="sbh">Ganci veri che usano la stessa leva, per ispirarti</div><div class="grid">';
    sim.forEach(function(o){h+='<div class="gc"><span class="etich '+(o.g.v==="v"?"":"sc")+'">'+(o.g.v==="v"?"Gancio vero di Gemma":"Esempio scritto da noi")+'</span><div class="pv" style="border-color:var(--line)">'+esc(o.g.x)+'</div><div class="qu">'+esc(o.g.n)+'</div><div class="az no-print"><button type="button" class="btn mini" data-a="addb" data-i="'+o.i+'">Parto da questo</button></div></div>'});
    h+='</div>';
  }
  return h;
}
function scrDraft(c){
  var base=(S.idea||c.text).trim(),w=words(base),pn=words(S.pain.split(" · ")[0]||""),m=c.mod,t=c.text.trim();
  var q=(t.match(/[^.!?]*\?/)||[""])[0].trim();var fs=(sentences(t)[0]||t).replace(/[.,!?…]+$/,"");
  var first=function(a,n){var r=a.slice(0,n);while(r.length>3&&/^(in|di|a|da|il|la|le|lo|i|gli|un|una|uno|e|che|per|con|del|della|dei|delle|al|nel|sul|perché|se|ma|o)$/i.test(r[r.length-1]))r.pop();return r.join(" ")};
  var kw=(words((S.target||S.idea||t)).filter(function(x){return x.length>=5})[0]||"TEMA").toUpperCase().replace(/[^A-ZÀ-Ý0-9]/g,"");
  switch(m){
    case "sint":return cap1(first(w,9));
    case "eti":return first(w,4).toUpperCase();
    case "eq":return (pn.length?first(pn,3).toUpperCase():"IL PROBLEMA")+" = "+"LA SOLUZIONE";
    case "dom":return q?first(words(q),12):first(words(fs),10)+"?";
    case "kw":return kw+": "+(q?first(words(q),8):first(words(fs),6).toLowerCase()+"?");
    case "ann":return "Come "+first(w,7).toLowerCase();
    case "pov":return "POV: "+(pn.length?first(pn,8):first(w,8)).toLowerCase();
    case "cap":return first(words(fs),8)+"? Leggi in caption";
  }
  return "";
}
function updateCand(c){
  var el=document.querySelector('.cand[data-id="'+c.id+'"]');if(!el)return;
  var t=c.text.trim(),cnt=el.querySelector('[data-r=cnt]'),vt=el.querySelector('[data-r=voto]'),rs=el.querySelector('[data-r=res]');
  if(!t){cnt.textContent="";vt.innerHTML="";rs.innerHTML='<p class="vuoto-msg">Scrivi o incolla il gancio qui sopra per vedere il voto</p>';return}
  var a=analyze(t,S.formato);c._a=a;
  cnt.textContent=a.n+" parole · limite "+a.lim.max+" per "+a.lim.label;
  var col=a.vc==="ok"?"var(--ok)":a.vc==="warn"?"var(--warn)":"var(--bad)";
  vt.innerHTML='<div class="big">'+a.total+'<small>/100</small></div><span class="verd '+a.vc+'">'+a.verd+'</span><div class="meter"><i style="width:'+a.total+'%;background:'+col+'"></i></div>';
  var h='<div class="quali"><div>Segue il metodo '+a.rules+'/60</div><div>È concreto<div class="mb"><i style="width:'+Math.round(a.spec/12*100)+'%"></i></div></div><div>Ferma lo scroll<div class="mb"><i style="width:'+a.tens*10+'%"></i></div></div><div>Ha un perché<div class="mb"><i style="width:'+a.leva*10+'%"></i></div></div><div>Suona parlato<div class="mb"><i style="width:'+Math.round(a.parl/8*100)+'%"></i></div></div></div>';
  h+='<div class="chips" style="margin-top:12px">'+(a.leve.length?'<span class="chip stat">Perché funziona: '+esc(a.leve.join(" + "))+'</span>':"")+(a.cat?'<span class="chip stat pk">Tipo di gancio: '+esc(a.cat)+'</span>':"")+'</div>';
  h+='<div class="dims">';
  Object.keys(DIMS).forEach(function(d){
    var s=dimSev(a.f,d),notes=a.f.filter(function(x){return x.dim===d}).map(function(x){return x.title});
    var nt=notes.length?notes.join(" · "):({leva:a.leve.length?"Attiva: "+a.leve.join(", "):"Ok",struct:a.cat?"Riconosciuta: "+a.cat:"Ok",len:a.n+" parole, nel limite",talk:"Suona naturale",loop:"Lascia la curiosità aperta"})[d];
    h+='<div class="dim"><span class="dot '+s+'"></span><span class="nm">'+DIMS[d]+'</span><span class="nt">'+esc(nt)+'</span></div>';
  });
  h+='</div>';
  var fx=a.f.filter(function(x){return x.fx&&x.fx(t)!==t&&x.fx(t).trim()});
  if(a.f.length){
    h+='<div class="sbh">Cosa migliorare</div>';
    a.f.sort(function(x,y){return (x.sev==="bad"?0:x.sev==="warn"?1:2)-(y.sev==="bad"?0:y.sev==="warn"?1:2)});
    a.f.forEach(function(x,i){
      h+='<div class="fnd '+(x.sev==="bad"?"bad":"")+'"><h5>'+esc(x.title)+'</h5><p>'+esc(x.detail)+'</p>'+(x.fix?'<p><b>Come si sistema:</b> '+esc(x.fix)+'</p>':"");
      if(x.prima)h+='<div class="pd"><div><span>Prima</span>'+esc(x.prima)+'</div><div class="dopo"><span>Dopo</span>'+esc(x.dopo)+'</div></div>';
      if(x.fx){var nv=x.fx(t);if(nv&&nv.trim()&&nv!==t)h+='<div class="fix-prop"><b>Diventa:</b> '+esc(nv)+'<br><button class="btn mini" style="margin-top:8px" data-a="fix" data-i="'+i+'" type="button">Applica la correzione</button></div>'}
      h+='</div>';
    });
    if(fx.length>1)h+='<div class="azioni no-print"><button class="btn mini" data-a="fixall" type="button">Applica tutte le correzioni</button></div>';
  }else{h+='<p class="nota-ok">I controlli non trovano problemi. Ultimo test, quello vero: leggilo ad alta voce, se suona scritto riscrivilo</p>'}
  h+=altHtml(c,a);
  rs.innerHTML=h;rs._a=a;
  if(!c.scr){c.scr=scrDraft(c)}
  var si=el.querySelector(".gs");if(si&&document.activeElement!==si){si.value=c.scr}
  var sn=words(c.scr||"").length;el.querySelector('[data-r=scnt]').textContent=(c.scr?sn+" parole":"")+(sn>12?" · meglio sotto le 10":"");
}
$("cands").addEventListener("input",function(e){
  var el=e.target.closest(".cand");if(!el)return;var c=candById(el.dataset.id);
  if(e.target.classList.contains("gt")){c.text=e.target.value;save();updateCand(c);renderConfronto();renderFinale()}
  else if(e.target.classList.contains("gs")){c.scr=e.target.value;save();el.querySelector('[data-r=scnt]').textContent=(c.scr?words(c.scr).length+" parole":"");renderFinale()}
});

$("cands").addEventListener("click",function(e){
  var mb=e.target.closest("[data-mod]");
  if(mb){var el0=mb.closest(".cand"),c0=candById(el0.dataset.id);c0.mod=mb.dataset.mod;c0.scr=scrDraft(c0);save();el0.querySelectorAll("[data-mod]").forEach(function(x){x.classList.toggle("on",x===mb)});el0.querySelector(".gs").value=c0.scr;el0.querySelector('[data-r=scnt]').textContent=words(c0.scr).length+" parole";renderFinale();return}
  var b=e.target.closest("[data-a]");if(!b)return;var el=b.closest(".cand"),c=candById(el.dataset.id),a=b.dataset.a;
  if(a==="fm"){S.focus=b.dataset.n;save();go(3);document.querySelector('#tabs3 [data-t=A]').click();return}
  if(a==="addb"){var gg=BANCA[+b.dataset.i];S.cands.push(newCand(gg.x,gg.c));save();renderCands();toast("Aggiunto: riscrivilo con le tue parole");return}
  if(a==="fix"){var f=el.querySelector('[data-r=res]')._a.f[+b.dataset.i];var nv=f.fx(c.text.trim());c.text=nv;el.querySelector("textarea.gt").value=nv;save();updateCand(c);renderConfronto();renderFinale();toast("Correzione applicata")}
  else if(a==="fixall"){var t=c.text.trim(),n=0;for(var k=0;k<5;k++){var an=analyze(t,S.formato);var f2=an.f.filter(function(x){return x.fx&&x.fx(t).trim()&&x.fx(t)!==t})[0];if(!f2)break;t=f2.fx(t);n++}c.text=t;el.querySelector("textarea.gt").value=t;save();updateCand(c);renderConfronto();renderFinale();toast(n+" correzioni applicate")}
  else if(a==="rev"){copyText(promptFix(c),"Prompt copiato: incollalo in Claude o ChatGPT")}
  else if(a==="test"){copyText(promptTest(c),"Prompt copiato: incollalo in Claude o ChatGPT")}
  else if(a==="del"){S.cands=S.cands.filter(function(x){return x!==c});save();renderCands()}
});
$("nuovo").addEventListener("click",function(){S.cands.push(newCand(""));save();renderCands();setTimeout(function(){var ts=document.querySelectorAll(".cand textarea.gt");if(ts.length)ts[ts.length-1].focus()},100)});
$("i4").addEventListener("click",function(){go(3)});

function renderConfronto(){
  var rows=S.cands.filter(function(c){return c.text.trim()}).map(function(c){var a=analyze(c.text.trim(),S.formato);return {c:c,a:a}});
  var box=$("confronto");
  if(rows.length<2){box.style.display="none";if(rows.length)$("kitvoto").textContent=rows[0].a.total;return}
  box.style.display="";
  rows.sort(function(x,y){return y.a.total-x.a.total});
  var h='<h3>Confronta i tuoi ganci</h3><div class="scroll-x" style="margin-top:10px"><table class="tab-conf"><thead><tr><th>Gancio</th><th>Voto</th><th>Parole</th><th>Tipo</th><th>Perché funziona</th></tr></thead><tbody>';
  rows.forEach(function(r,i){h+='<tr><td>'+(i===0&&rows.length>1?'★ ':'')+esc(r.c.text.trim())+'</td><td><b>'+r.a.total+'</b><br>'+esc(r.a.verd)+'</td><td>'+r.a.n+'</td><td>'+esc(r.a.cat?(catByName(r.a.cat)||{pt:r.a.cat}).pt:"nessuna formula")+'</td><td>'+esc(r.a.leve.join(", ")||"nessuna")+'</td></tr>'});
  h+='</tbody></table></div>';
  box.innerHTML=h;
  var top=rows[0];$("kitvoto").textContent=top.a.total;
}
function schedaTxt(){
  var o=[];
  S.cands.filter(function(c){return c.text.trim()}).forEach(function(c,i){
    var a=analyze(c.text.trim(),S.formato);
    o.push("GANCIO "+(i+1)+"\nParlato: "+c.text.trim()+"\nA schermo: "+(c.scr||"da scrivere")+"\nTipo: "+(a.cat?(catByName(a.cat)||{pt:a.cat}).pt:"nessuna formula")+" · Perché funziona: "+(a.leve.join(", ")||"nessuno")+"\nVoto: "+a.total+"/100 ("+a.verd+") · "+a.n+" parole");
  });
  var ctx=[];if(S.idea)ctx.push("Idea: "+S.idea);if(S.target)ctx.push("Per chi: "+S.target);if(S.pain)ctx.push("Parole di chi guarda: "+S.pain);ctx.push("Obiettivo: "+OB_LAB[S.obiettivo]+" · Formato: "+FMT_LAB[S.formato]);
  return "LA MIA SCHEDA GANCI\n"+ctx.join("\n")+"\n\n"+o.join("\n\n");
}
function renderFinale(){
  var box=$("finale");
  var has=S.cands.some(function(c){return c.text.trim()});
  if(!has){box.style.display="none";return}
  box.style.display="";
  box.innerHTML='<h3>La tua scheda</h3><p class="aiuto">Copia la scheda o stampala. I tuoi ganci restano solo in questo browser</p><div class="azioni"><button class="btn sm" id="f-copia" type="button">Copia la scheda</button><button class="btn sm btn-linea" id="f-stampa" type="button">Stampa</button><button class="btn sm btn-linea" id="f-svuota" type="button">Svuota i miei ganci</button></div><p class="hint" style="margin-top:12px"><b>Leggilo ad alta voce:</b> se suona scritto, riscrivilo</p>';
}
$("finale").addEventListener("click",function(e){
  var id=e.target.id;
  if(id==="f-copia")copyText(schedaTxt(),"Scheda copiata");
  else if(id==="f-stampa")window.print();
  else if(id==="f-svuota"){if(confirm("Svuoto tutti i tuoi ganci e i campi?")){S.cands=[];S.idea=S.target=S.pain=S.t1=S.t2=S.t3=S.t4="";S.leva="";save();fillP1();renderCands();toast("Svuotato");go(1)}}
});

/* ==================== LIBRERIA ==================== */
(function(){
  var g={},h="";CATS.forEach(function(c){(g[c.t]=g[c.t]||[]).push(c)});
  Object.keys(g).forEach(function(k){h+='<h4 style="margin-top:14px">'+esc(k)+'</h4><ul>';g[k].forEach(function(c){h+='<li><b>'+esc(c.pt)+'</b> · '+esc(c.f)+'<br><span class="ex">Es: '+esc(c.e)+'</span><br><span class="hint">Quando: '+esc(c.q)+'</span></li>'});h+='</ul>'});
  $("cat-list").innerHTML=h;
  $("tab-schermo").innerHTML='<thead><tr><th>A voce</th><th>Sullo schermo</th><th>Come è scritta</th></tr></thead><tbody>'+SCHERMO.map(function(r){return '<tr><td>'+esc(r[0])+'</td><td><b>'+esc(r[1])+'</b></td><td>'+esc(r[2])+'</td></tr>'}).join('')+'</tbody>';
  $("mod-list").innerHTML=MODALITA_ALL.map(function(m){return '<li><b>'+esc(m.n)+'</b> · '+esc(m.e)+'</li>'}).join("");
  $("aff-list").innerHTML=AFF.map(function(a){return '<li><b>'+esc(a[0])+'</b> · '+esc(a[1])+'</li>'}).join("");
})();

/* ==================== AVVIO ==================== */
renderSwipe();renderBFilters();fillP1();
if(S.cands.length){$("tieni-n").textContent=S.cands.length+(S.cands.length===1?" gancio tenuto":" ganci tenuti")}
window.__ganci={analyze:analyze,S:S,promptGen:promptGen,BANCA:BANCA,CATS:CATS};
})();
