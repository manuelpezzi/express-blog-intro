const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/'), (reg, res) => {
    res.send("Server del mio blog")

}
app.get('/bacheca', (req, res) => {
    const post = [
        {
            titolo: 'ciambellone',
            contenuto: "Si presenta come una torta forata al centro.o con la forma di uno sfilatino di pane. Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.",
            immagine: "/img/ciambellone.jpeg",
            tag: ["dolce", "da forno", "lievitato"]

        },

        {
            titolo: "cracker barbabietola",
            contenuto: "I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi.",
            immagine: "/img/cracker_barbabietola.jpeg",
            tag: ["Antipasti", "Ricette vegetariane", "Ricette al forno"]

        },
        {
            titolo: "pane fritto dolce",
            contenuto: "Il pane fritto dolce è la versione più antica dell’odierno french toast! Una deliziosa ricetta antispreco che le nonne preparavano ai bambini per merenda, utilizzando gli ingredienti che si avevano sempre a disposizione in casa: pane raffermo, uova, latte e zucchero, che noi abbiamo deciso di aromatizzare con un pizzico di cannella. Facile e veloce da realizzare, il pane fritto dolce vi riporterà con la mente ai sapori dell’infanzia… gustatelo da solo o accompagnatelo con frutta fresca e yogurt per uno spuntino tanto goloso quanto genuino!",
            immagine: "/img/pane_fritto_dolce.jpeg",
            tag: ["dolce", "fritto", "ricette da forno"]

        },
        {
            titolo: "pasta alla barbabietola",
            contenuto: "Stregati dalla tinta color amaranto della barbabietola e attirati dal suo gusto unico e dalle sue innumerevoli proprietà benefiche, l’abbiamo provata come gustoso colorante al naturale per insaporire diverse pietanze, dando vita così a un fragrante pane, una soffice torta, un cremoso risotto, sfiziose crocchette e dei morbidi gnocchi. Qui vi proponiamo un’altra delizia saporita: la pasta con barbabietola e pecorino, un primo piatto semplice in cui la barbabietola è la indiscussa protagonista. Una crema saporita avvolge con gusto le pennette ai cereali e prima di servire una pioggia di scaglie di pecorino renderà ancora più appetitosa questa pasta dai colori e dai sapori unici.",
            immagine: "img/pasta_barbabietola.jpeg",
            tag: ["pasta", "vegetariana", "pasta fresca"]

        },
        {
            titolo: "torta paesana",
            contenuto: "La torta paesana è un dolce di origine lombarda e precisamente della Brianza, la zona compresa tra la provincia a nord di Milano e il lago di Lecco-Como. E’ un dolce di origine contadina, dalle infinite varianti, ma realizzata principalmente con pane raffermo bagnato nel latte. E’ infatti conosciuta anche come torta di pane o, in dialetto locale, “michelacc” ovvero mica e lac (pane e latte). A seconda dei gusti e delle disponibilità del momento, al pane ammollato ogni famiglia univa ingredienti diversi, chi l’uvetta o chi i pinoli ad esempio. Noi vi presentiamo la nostra versione con l’aggiunta di cacao e amaretti: perfetta da gustare per una merenda dal sapore rustico, la torta paesana è un perfetto dolce di recupero quando si ha del pane avanzato… ed è ancora più buona il giorno dopo!",
            immagine: "img/torta_pesana.jpeg",
            tag: ["dolce", "genuina", "ricetta da forno"]

        }




    ]
    res.json(post);

})
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})