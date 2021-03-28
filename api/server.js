// Require packages and set the port
const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const HOST = PORT === 8080 ? 'localhost' : '0.0.0.0';

const app = express();

app.use(body_parser.json());
app.use(cors())

app.use(express.static(path.join(__dirname, '../app/dist')));

app.get('/api/joke', (req, res, next) => {
  const jokes = require('./jokes.json');
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  res.status(200).json(joke);
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../app/dist', 'index.html'))
});


// Start the server
app.listen(PORT, HOST, function(){
  console.log(`Node js server is listening on ${ PORT }`);
});