const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.dirname('public')))
//Accueil
app.get('/' , (req, res, next) =>{
    res.render('accueil')
})
//erreur
app.get('',(req, res, next) =>{
    res.render('err')
})

//////////////// connection de l'utilisateur
io.on('connection', (socket)=> {
    console.log('Utilisateur connecté')

    socket.on('chat message' , (msg) => {
        io.emit('chat message', msg);
    })
})





//////////////// lecture du server sur le port 3000

server.listen(3000)
