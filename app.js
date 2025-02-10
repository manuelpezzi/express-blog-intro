const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/'), (reg, res) => {
    res.send("ciao mondo")

}
app.get('/bacheca', (req, res) => {
    const post = [
        {
            titolo: 'ciambellone',
            contenuto: "Si presenta come una torta forata al centro.o con la forma di uno sfilatino di pane. Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.",
            immagine: "/img/ciambellone.jpg",
            tag: ["dolce", "da forno", "lievitato"]

        }

    ]
    res.json(post);

})
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})