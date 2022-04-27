const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const uri = "mongodb+srv://daksh:daksh%402001@cluster0.hphbc.mongodb.net/user-interaction?retryWrites=true&w=majority"


app.use('/', require('./routes/routes'))


// app.get('/', (req,res)=>{
//     res.send("<h1>Hello there</h1>")
// })

app.listen(3500, (e) => {
    console.log("Server listening at 3500")
    const connectionParams = {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
    }

    mongoose.connect(uri, connectionParams)
        .then(() => {
            console.log('Connected to the database ')
        })
        .catch((err) => {
            console.error(`Error connecting to the database. ${err}`);
        })
})