const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json("Get Route is here");
})

app.post('/', (req, res) => {
    res.json("Post Route is here");
})

app.listen(3000, () => {
    console.log('Server started on 3000');
})