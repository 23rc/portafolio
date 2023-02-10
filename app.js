const express = require('express')
const app = express()


const PORT = process.env.PORT || 5000
//seteamos el motor de plantillas
app.set('view engine','ejs')

app.use(express.static('publica'))
app.use('/', require('./rutas/rutas'))



app.listen(PORT, ()=>{
    console.log('PUERTO A UTILIZAR http://localhost:5000')});