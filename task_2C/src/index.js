import express from 'express';
import cors from 'cors';
import fetch from 'isomorphic-fetch';
import canonize from './canonize';



const app = express();
app.use(cors());
app.get('/task2C', (req, res) => {
    const username = canonize(req.query.username);
    res.send(username);
});


app.listen(3000, () => {
    console.log('Example app listening on port 4000!');
});
