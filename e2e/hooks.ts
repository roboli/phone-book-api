import conn from '../src/utils/mysql';
import cleanDb from './cleanDb';

before(async () => {
  await cleanDb();
});

after(() => {
  conn.end();
});
