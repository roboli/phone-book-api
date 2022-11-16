import conn from '../src/utils/mysql';

after(() => {
  conn.end();
});
