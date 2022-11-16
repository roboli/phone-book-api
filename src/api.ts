import express from 'express';
import isValidApiKey from './middleware/isValidApiKey';
import * as contacts from './controllers/contacts';

const router = express.Router();

router.use(isValidApiKey);

router.get('/contacts', contacts.getAll);

router.post('/contacts', contacts.create);

export default router;
