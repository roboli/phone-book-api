import * as contacts from '../src/models/contacts';

export default async () => {
  await contacts.remove({ all: true });
};
