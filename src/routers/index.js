import express from 'express';

import docrouter from '../documentation/index.doc.js';
import UserRoute from './UserRoutes.js';
import Auth from './authRouter.js';
import Company from './companyRoutes.js';
import Message from './contactMessages.js';

const router = express.Router();
router.use('/docs', docrouter);
router.use('/users', UserRoute);
router.use('/auth', Auth);
router.use('/companies', Company);
router.use('/contact-messages', Message);

export default router;
