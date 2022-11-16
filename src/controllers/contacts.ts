import * as contacts from '../models/contacts';

export const getAll = async (req: any, res: any) => {
  const results = await contacts.getAll();
  res.json(results);
};

export const getOne = async (req: any, res: any) => {
  const { id } = req.params;

  const result = await contacts.getOne({ id });

  res.json(result);
};

export const create = async (req: any, res: any) => {
  const { body } = req;

  const id = await contacts.create({
    name: body.name,
    email: body.email,
    phone_work: body.phone_work,
    phone_home: body.phone_home,
    phone_mobile: body.phone_mobile,
    phone_other: body.phone_other,
    address: body.address
  });

  res.status(201).json({ id });
}
