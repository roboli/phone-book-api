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

export const remove = (qry: any) => {
  if (!qry) {
    throw new Error('DB Query is required');
  }

  if (!qry.all) {
    if (qry.id) {
      return queries.remove_contact({ id: qry.id }, adapter);
    } else {
      throw new Error('DB Query not supported');
    }
  }

  return queries.remove_all({}, adapter);
};
