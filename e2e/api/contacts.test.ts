import { expect } from 'chai';
import request from 'supertest';
import config from 'config';
import server from '../../src/server';
import apiRouter from '../../src/api';

describe('Contacts API', () => {
  server.use('/api', apiRouter);

  describe('POST /api/contacts', () => {
    describe('Create contact', () => {
      const data = {
        name: 'Mike Test',
        email: 'an@email.com'
      }

      it('should return 200', () => {
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
