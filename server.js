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
        console.log('I AM Connected to Database')
        const db = client.db('Btionary-entries')
        const entriesCollection = db.collection('entries')

    app.use(bodyParser.urlencoded({ extended: true }))

    app.use(express.static(__dirname + '/public'));

    app.post('/entries', (req, res) => {
        entriesCollection.insertOne(req.body)
          .then(result => {
            console.log(result)
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })


    let port = process.env.PORT;
    if (port == null || port == "") {
    port = 8000;
    }
    app.listen(port);

    app.set('view engine', 'ejs')

    app.get('/', (req, res) => {
    db.collection('entries').find().toArray()
        .then(results => {
        res.render('index.ejs', { entries: results })
        })
        .catch(/* ... */)
    })


})
.catch(error => console.error(error))