const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// To run this code, make sure you have Node.js and Express installed.
// You can install Express by running `npm install express` in your terminal.
// Then, run this file using `node index.js` and visit http://localhost:3000 in your browser.