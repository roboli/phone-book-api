import shortid from 'shortid';
import * as db from '../db/contacts';

interface Contact {
  id: string
  name: string
  email: string,
  phone_work: string | null
  phone_home: string | null
  phone_mobile: string | null
  phone_other: string | null
  address: string | null
}

export const getAll = (query: any = {}): Promise<Contact[]> => {
  return db.getAll(query);
};

export const getOne = async (query: any = {}): Promise<Contact> => {
  return db.getOne(query);
};

export const create = async (model): Promise<string> => {
  const uid = shortid.generate();

  await db.create({
    uid,
    name: model.name,
    email: model.email,
    phone_work: model.phone_work,
    phone_home: model.phone_home,
    phone_mobile: model.phone_mobile,
    phone_other: model.phone_other,
    address: model.address
  });

  return uid;
};

export const update = (query: any = {}, model) => {
  return db.update(query, model);
};

export const remove = (query: any = {}) => {
  return db.remove(query);
};
