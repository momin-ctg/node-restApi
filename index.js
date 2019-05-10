const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1> Server Working </h1>')
});

app.listen(3000, () => {
    console.log('Server Working at http://localhost:3000');
});
