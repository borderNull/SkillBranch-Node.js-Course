import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';
import _ from 'lodash';
import getValue  from './getVal';


const app = express();
app.use(express.static('/task3A'));
app.use('/^(?:\/)?(.*?)(?:\/)?$/', function(res, req, next) {
    next();
});
app.use(bodyParser.json());
app.use(cors());

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let pc = {};

fetch(pcUrl)
    .then(async(res) => {
        pc = await res.json();
    })
    .catch(err => {
        console.log('Что-то пошло не так:', err);
    });


app.get(/^(?:\/)?(.*?)(?:\/)?$/, function(req, res) {
    let result = getValue(pc, req.params[0]);
    console.log(req.params);
    let path = req.params[0];
    console.log(path);

     let v = {};
     for (let key in pc.hdd) {
        const d = pc.hdd[key].volume;
        if (!v[d])
            v[d] = 0;
        v[d] += pc.hdd[key].size;
     }
     for (let key in v) {
        v[key] = v[key] + 'B';
     }

    if (path == 'volumes')
        result = v;

    if (result == 'Not Found')
        res.status(404).send(result);
    else
        res.json(result);
});


app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Server Error");
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
