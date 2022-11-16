import shortid from 'shortid';
import * as db from '../db/contacts';

interface Contact {
  id: string
  name: string
  email: string
}

export const getAll = (query: any = {}): Promise<Contact[]> => {
  return db.getAll(query);
};

export const create = async (model): Promise<string> => {
  const uid = shortid.generate();

  await db.create({
    uid,
    name: model.name,
    email: model.email
  });

  return uid;
};

export const remove = (query: any = {}) => {
  return db.remove(query);
};
