// Require packages and set the port
const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors')
const port = 3800;
const app = express();

app.use(body_parser.json());
app.use(cors())


app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Connected!' });
});

// Start the server
app.listen(process.env.PORT || 4242, function(){
  console.log('Your node js server is running');
});