import express from 'express';
import cors from 'cors';
import initials from './initials';

const app = express();
app.use(cors());
app.get('/task2B', (req, res) => {
    const fullName = initials(req.query.fullname);
    res.send(fullName);
});
app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
