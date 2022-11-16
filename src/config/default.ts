// Set default node environment to development
export const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (env !== 'production') {
  // Load values from .env
  require('dotenv').config();
}

export const mysql = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  connectionLimit: process.env.MYSQL_CONNECTION_LIMIT || 10
};
