import * as db from '../db/contacts';

interface Contact {
  id: string
  name: string
  email: string
}

export const getAll = (query: any = {}): Promise<Contact[]> => {
  return db.getAll(query);
};
