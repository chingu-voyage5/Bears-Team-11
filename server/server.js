const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
    port = process.env.PORT || 5000,
    app = express(),
    cors = require('cors'),
    schema = require('./schema');

require('dotenv').config();

mongoose.connect(process.env.MLAB_URI, (err) => {
  console.log('Connected to mLab')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {  
  res.end();
})

app.use('/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
);

app.use('/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' })
);

app.listen(port, () => {
  console.log('Go to http://localhost:5000/graphiql to run queries!');
})