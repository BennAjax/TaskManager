import express from 'express';
import * as controller from './task-controller';
import * as auth from '../../services/auth-service';
const router = express.Router();

router.get('/task',auth.requireLogin, controller.index);
router.get('/task/:id',auth.requireLogin, controller.show);
router.post('/task',auth.requireLogin, controller.create);
router.put('/task:id',auth.requireLogin, controller.update);
router.delete('/task:id',auth.requireLogin, controller.remove);

export default router;
