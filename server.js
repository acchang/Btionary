if(process.env.NODE_ENV !== 'production'){
    const dotenv = require('dotenv')
    dotenv.config({ debug: true })
}

const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect(process.env.DATABASE_URL, { useUnifiedTopology: true})
        .then(client => {
        console.log('Connected to Database')
        const db = client.db('Btionary-entries')
        const entriesCollection = db.collection('entries')

    app.use(bodyParser.urlencoded({ extended: true }))

    app.post('/entries', (req, res) => {
        entriesCollection.insertOne(req.body)
          .then(result => {
            console.log(result)
          })
          .catch(error => console.error(error))
      })

    app.listen(3000, function() {
        console.log('listening on 3000')
    })

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })

    app.post('/quotes', (req, res) => {
        console.log(req.body)
    })

})
.catch(error => console.error(error))