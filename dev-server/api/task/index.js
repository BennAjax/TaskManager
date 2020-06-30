import express from 'express';
const router = express.Router();

router.get('/task', (req, res) => {
  res.send('get task');
});
router.get('/task/:id', (req, res) => {});
router.post('/task', (req, res) => {});
router.put('/task:id', (req, res) => {});
router.delete('/task:id', (req, res) => {});

export default router;
