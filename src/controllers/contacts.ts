import * as contacts from '../models/contacts';

export const getAll = async (req: any, res: any) => {
  const results = await contacts.getAll();
  res.json(results);
};

export const create = async (req: any, res: any) => {
  const id = await contacts.create({
    name: req.body.name,
    email: req.body.email
  });

  res.status(201).json({ id });
}
