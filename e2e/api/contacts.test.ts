import { expect } from 'chai';
import request from 'supertest';
import config from 'config';
import server from '../../src/server';
import apiRouter from '../../src/api';
import * as contacts from '../../src/models/contacts';

describe('Contacts API', () => {
  server.use('/api', apiRouter);

  describe('DELETE /api/contacts/:id', () => {
    describe('Remove one contact', () => {
      let newId: string;

      before(async () => {
        newId = await contacts.create({
          name: 'Random One',
          email: 'any@mail.com',
          phone_work: 'phone_work',
          phone_home: 'phone_home',
          phone_mobile: 'phone_mobile',
          phone_other: 'phone_other',
          address: 'address'
        })
      })

      it('should return 200', () => {
        return request(server)
          .delete(`/api/contacts/${newId}`)
          .set('Authorization', `ApiKey ${config.apiKey}`)
          .expect(200)
          .then(() => contacts.getOne({ id: newId }))
          .then((result) => {
            expect(result).to.be.undefined;
          });
      })
    })
  })

  describe('GET /api/contacts', () => {
    describe('Fetch all contacts', () => {
      before(async () => {
        await contacts.create({
          name: 'Random One',
          email: 'any@mail.com'
        })

        await contacts.create({
          name: 'Random Two',
          email: 'other@mail.com'
        })
      })

      it('should return 200 with list of contacts', () => {
        return request(server)
          .get('/api/contacts')
          .set('Authorization', `ApiKey ${config.apiKey}`)
          .expect(200)
          .then(({ body }) => {
            expect(body.length).to.be.equal(2);
          });
      })
    });

    describe('Fetch first five contacts', () => {
      before(async () => {
        await contacts.create({
          name: 'Random One',
          email: 'any@mail.com'
        });

        await contacts.create({
          name: 'Random Two',
          email: 'other@mail.com'
        });

        await contacts.create({
          name: 'Random Three',
          email: 'any@three.com'
        });

        await contacts.create({
          name: 'Random Four',
          email: 'any@four.com'
        });

        await contacts.create({
          name: 'Random Four',
          email: 'any@four.com'
        });

        await contacts.create({
          name: 'Random Five',
          email: 'any@five.com'
        });

        await contacts.create({
          name: 'Random Six',
          email: 'any@six.com'
        });

        await contacts.create({
          name: 'Random Seven',
          email: 'any@seven.com'
        });
      })

      it('should return 200 with list of contacts', () => {
        return request(server)
          .get('/api/contacts?index=0&size=5')
          .set('Authorization', `ApiKey ${config.apiKey}`)
          .expect(200)
          .then(({ body }) => {
            expect(body.length).to.be.equal(5);
          });
      })
    });
  });

  describe('GET /api/contacts/:id', () => {
    describe('Fetch one contact', () => {
      let newId: string;

      before(async () => {
        newId = await contacts.create({
          name: 'Random One',
          email: 'any@mail.com',
          phone_work: 'phone_work',
          phone_home: 'phone_home',
          phone_mobile: 'phone_mobile',
          phone_other: 'phone_other',
          address: 'address'
        })
      })

      it('should return 200 with contact', () => {
        return request(server)
          .get(`/api/contacts/${newId}`)
          .set('Authorization', `ApiKey ${config.apiKey}`)
          .expect(200)
          .then(({ body }) => {
            const { id, ...rest } = body;

            expect(id).to.be.equal(newId);

            expect(rest).to.be.eql({
              name: 'Random One',
              email: 'any@mail.com',
              phone_work: 'phone_work',
              phone_home: 'phone_home',
              phone_mobile: 'phone_mobile',
              phone_other: 'phone_other',
              address: 'address'
            });
          });
      })
    })
  });

  describe('POST /api/contacts', () => {
    describe('Create contact', () => {
      const data = {
        name: 'Mike Test',
        email: 'an@email.com'
      }

      it('should return 201 with new id', () => {
        return request(server)
          .post('/api/contacts')
          .set('Authorization', `ApiKey ${config.apiKey}`)
          .send(data)
          .expect(201)
          .then(({ body }) => {
            expect(body.id).to.be.a('string');
          });
      });
    });
  });

  describe('PUT /api/contacts/:id', () => {
    describe('Update one contact', () => {
      let newId: string;

      before(async () => {
        newId = await contacts.create({
          name: 'Random One',
          email: 'any@mail.com',
          phone_work: 'phone_work',
          phone_home: 'phone_home',
          phone_mobile: 'phone_mobile',
          phone_other: 'phone_other',
          address: 'address'
        })
      })

      it('should return 200', () => {
        const data = {
          name: 'New Name',
          email: 'new@email.com',
          phone_work: 'new phone_work',
          phone_home: 'new phone_home',
          phone_mobile: 'new phone_mobile',
          phone_other: 'new phone_other',
          address: 'new address'
        };

        return request(server)
          .put(`/api/contacts/${newId}`)
          .set('Authorization', `ApiKey ${config.apiKey}`)
          .send(data)
          .expect(200)
          .then(() => contacts.getOne({ id: newId }))
          .then((result) => {
            expect(result).to.be.eql({
              id: newId,
              name: 'New Name',
              email: 'new@email.com',
              phone_work: 'new phone_work',
              phone_home: 'new phone_home',
              phone_mobile: 'new phone_mobile',
              phone_other: 'new phone_other',
              address: 'new address'
            });
          });
      })
    })
  });

});
