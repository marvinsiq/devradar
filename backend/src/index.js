const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const mongoConfig = require('./credentials/mongo');

const app = express();

mongoose.connect(`mongodb+srv://${mongoConfig.user}:${mongoConfig.pass}@${mongoConfig.url}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(routes);

app.listen(3333, function () {
    console.log("Servidor executando na porta 3333.");
});