import express from 'express';
import bodyParser from 'body-parser';

const port   = 3010;
const server = express();

server.use(bodyParser.json());

server.get('/ping', (req, res) => { res.json({ result: 'pong' }); });

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
