import puresql from 'puresql';
import connection from '../utils/mysql';

// Create the adapter
const adapter = puresql.adapters.mysql(connection, () => { });

// Load our queries
const queries = puresql.loadQueries(__dirname + '/contacts.sql');

export const getAll = (qry: any, opts: any) => {
  let options = {};

  if (opts.size) {
    options['limit'] = parseInt(opts.size);

    if (opts.index) {
      options['offset'] = parseInt(opts.index);
    } else {
      options['offset'] = 0;
    }
  }

  if (Object.keys(options).length) {
    return queries.get_all_limit(options, adapter);
  } else {
    return queries.get_all(options, adapter);
  }
};

export const getOne = async (qry) => {
  if (!qry) {
    throw new Error('DB Query is required');
  }

  if (qry.id) {
    const result = await queries.get_one({ id: qry.id }, adapter);
    return result && result[0];
  } else {
    throw new Error('DB Query not supported');
  }
};

export const create = async (contact) => {
  const result = await queries.insert_contact({ '$contact': contact }, adapter);
  return result.insertId;
};

export const update = (qry, contact) => {
  if (!qry) {
    throw new Error('DB Query is required');
  }

  const parts = [];

  if (Object.prototype.hasOwnProperty.call(contact, 'name')) {
    parts.push(['name = :name', { name: contact.name }]);
  }

  if (Object.prototype.hasOwnProperty.call(contact, 'email')) {
    parts.push(['email = :email', { email: contact.email }]);
  }

  if (Object.prototype.hasOwnProperty.call(contact, 'phone_work')) {
    parts.push(['phone_work = :phone_work', { phone_work: contact.phone_work }]);
  }

  if (Object.prototype.hasOwnProperty.call(contact, 'phone_home')) {
    parts.push(['phone_home = :phone_home', { phone_home: contact.phone_home }]);
  }

  if (Object.prototype.hasOwnProperty.call(contact, 'phone_mobile')) {
    parts.push(['phone_mobile = :phone_mobile', { phone_mobile: contact.phone_mobile }]);
  }

  if (Object.prototype.hasOwnProperty.call(contact, 'phone_other')) {
    parts.push(['phone_other = :phone_other', { phone_other: contact.phone_other }]);
  }

  if (Object.prototype.hasOwnProperty.call(contact, 'address')) {
    parts.push(['address = :address', { address: contact.address }]);
  }

  const fields = {
    operator: ',',
    parts
  };

  if (qry.id) {
    return queries.update_contact({ id: qry.id, '~fields': fields }, adapter);
  } else {
    throw new Error('DB Query not supported');
  }
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
