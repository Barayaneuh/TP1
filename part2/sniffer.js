const express = require('express'); /** exige Express.js */
const app = express();
let j=3000;

for (let i = 0; i < 1001; i++) {
    j++;
    app.listen(port, () => {
        console.log(`http://localhost:${j}/ping`);
      })
  }
  