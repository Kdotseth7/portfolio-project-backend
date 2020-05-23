const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const knex = require('knex');
const people = require('./controllers/people');
const root = require('./controllers/root');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'test',
        database : 'portfolio-project'
    }
});

// Root Endpoint
app.get('/',
    (req, res) => { root.rootHandler(req, res, db) });

// People Endpoint
app.post('/people',
    (req, res) => { people.peopleHandler(req, res, db) });

app.listen(3050, () => {
    console.log('App is listening on Port No. 3050');
});