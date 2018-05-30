const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 5000,
    secrets = require('./secrets'),
    app = express();

mongoose.connect(secrets.mlab, (err) => {
    console.log('Connected to mLab')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.end();
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})