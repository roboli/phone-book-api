import express from 'express';
import * as contacts from './controllers/contacts';

const router = express.Router();

router.get('/contacts', contacts.getAll);

router.post('/contacts', contacts.create);

export default router;
