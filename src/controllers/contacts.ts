import * as contacts from '../models/contacts';

export const getAll = async (req: any, res: any) => {
  try {
    const results = await contacts.getAll();
    res.json(results);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

export const getOne = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const result = await contacts.getOne({ id });
    res.json(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

export const create = async (req: any, res: any) => {
  const { body } = req;

  try {
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
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
