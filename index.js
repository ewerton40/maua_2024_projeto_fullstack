// console.log('hello, NodeJS')
const express = require('express')
const cors = require('cors')

const app = express() //construindo uma aplicação express
app.use(express.json())
app.use(cors())

let filmes = [
    {
        titulo: "Scarface",
        sinopse: "Após receber residência permanente nos Estados Unidos em troca do assassinato de um oficial do governo cubano, Tony Montana se torna o chefe do tráfico de drogas em Miami. Matando qualquer um que entre em seu caminho, Tony eventualmente se torna o maior traficante da Flórida, controlando quase toda a cocaína que entra em Miami. Porém, a pressão da polícia, as guerras com cartéis colombianos e sua própria paranoia servem para alimentar as chamas de sua eventual queda."
    },
    {
        titulo: "Goodfellas",
        sinopse: "Um jovem cresce na máfia e trabalha arduamente para crescer entre seus companheiros. Ele gosta da vida de dinheiro e luxo, mas não liga para o horror que provoca. Infelizmente, a dependência de drogas e alguns erros finalmente destroem sua escalada até o topo. Baseado no livro Wiseguy por Nicholas Pileggi."
    }
]



//get url: http://localhost:3000/oi
app.get('/oi', (req, res) => {
    res.send('oi')
})


app.get ('/filmes', (req,res) => {
    res.json(filmes)
})


app.post ('/filmes', (req,res) => {
    //obter os dados que o cliente enviou
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    //montar o json filme
    const filme = {titulo: titulo, sinopse: sinopse}
    // inserir o filme na lista de filmes
    filmes.push(filme)
    res.json(filmes)
})



app.listen(3000, () => console.log("server up and running"))