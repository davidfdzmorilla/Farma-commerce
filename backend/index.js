const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Welcome to Farma-commerce Backend!');
});

app.listen(3001, () => {
  console.log('Farma-commerce backend listening on port 3001!');
});
