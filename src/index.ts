import path from 'path';
import express, { Express } from 'express';
import morgan from 'morgan';

const port = 3000;
const app: Express = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/heartbeat', (_req, res) => {
  return res.send('Boop');
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
