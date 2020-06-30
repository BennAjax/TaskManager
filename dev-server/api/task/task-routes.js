import express from 'express';
import * as controller from './task-controller'
const router = express.Router();

router.get('/task', controller.index);
router.get('/task/:id', controller.show);
router.post('/task', controller.create);
router.put('/task:id', controller.update);
router.delete('/task:id', controller.remove);

export default router;
