import express from 'express';
import isValidApiKey from './middleware/isValidApiKey';
import * as contacts from './controllers/contacts';

const router = express.Router();

router.use(isValidApiKey);

router.delete('/contacts/:id', contacts.remove);

router.get('/contacts', contacts.getAll);
router.get('/contacts/:id', contacts.getOne);

router.post('/contacts', contacts.create);

export default router;
