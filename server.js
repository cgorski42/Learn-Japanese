const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

let ans_mode = 0;
let q_mode = 2;

app.get('/api/items/', (req, res) => {
    res.send({ans_mode:ans_mode, q_mode:q_mode});
}

app.post('/api/items/', (req, res) => {
    ans_mode = req.body.ans_mode;
    q_mode = req.body.q_mode;
    res.send({ans_mode:ans_mode, q_mode:q_mode});
}

app.listen(3000, () => console.log('Server listening on port 3000!'))

app.put('/api/items/:id', (req, res) => {}

app.delete('/api/items/:id', (req, res) => {}
