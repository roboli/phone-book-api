import config from 'config';
import server from './server';
import apiRouter from './api';

const port = config.port;

server.use('/api', apiRouter);

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
