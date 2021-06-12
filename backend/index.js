const auth = require('./src/routes/auth.js');
const dbConnect = require('./src/utils/dbConnect.js');

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3333;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//DB

const db = mongoose.connect(
    dbConnect(),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('CONECTADO A MONGODB ATLAS!');
        }
    }
);

app.get('/', (req, res) => {
    res.send('BIENVENID@');
});

app.use('/auth/', auth);

app.listen(port, () => {
    console.log(`Localhost ready: http://localhost:${port}`);
});
