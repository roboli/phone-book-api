import server from './server';
import apiRouter from './api';

const port = 3010;

server.use('/api', apiRouter);

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
