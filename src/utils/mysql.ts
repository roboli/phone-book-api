import mysql from 'mysql';
import config from 'config';

interface MySQL {
  host: string
  user: string
  password: string
  database: string
  port: string | number
  connectionLimit: string | number
}

const configMysql: MySQL = config.get('mysql');

const connection = mysql.createConnection({
  host: configMysql.host,
  user: configMysql.user,
  password: configMysql.password,
  database: configMysql.database
});


export default connection;
