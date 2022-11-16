import * as contacts from '../models/contacts';

export const getAll = async (req: any, res: any) => {
  const results = await contacts.getAll();
  res.json(results);
};
