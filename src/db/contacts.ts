import puresql from 'puresql';
import connection from '../utils/mysql';

// Create the adapter
const adapter = puresql.adapters.mysql(connection, () => { });

// Load our queries
const queries = puresql.loadQueries(__dirname + '/contacts.sql');

export const getAll = (qry: any) => {
  return queries.get_all({}, adapter);
};

export const create = async (contact) => {
  const result = await queries.insert_contact({ '$contact': contact }, adapter);
  return result.insertId;
};
