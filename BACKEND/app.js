
require('dotenv').config();
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const helmet = require('helmet');
const cors = require('cors');
const hsts = require('./middleware/hsts');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL).then(() => console.log('Db connected...'));

app.use(helmet());
app.use(cors({ origin: 'https://localhost:4200 ', optionsSuccessStatus: 200}));
app.use(express.json());
app.use(hsts);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));

app.use((reg,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

https.createServer({
    key: fs.readFileSync('./keys/privatekey.pem'),
    cert: fs.readFileSync('./keys/certificate.pem'),
},app).listen(3000);