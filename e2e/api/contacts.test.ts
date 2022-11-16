import { expect } from 'chai';
import request from 'supertest';
import config from 'config';
import server from '../../src/server';
import apiRouter from '../../src/api';
import * as contacts from '../../src/models/contacts';

describe('Contacts API', () => {
  server.use('/api', apiRouter);

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
  })
});
