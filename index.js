const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')



//Express and EJS
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('pages/home')
})


app.listen(port, (error)=>{
    if(error){
        throw(error + 'Error trying to run express server')
    }else{
        console.log('Server running at Port: ' + port)
    }
})