import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
  res.send('get task');
});
router.post('/register', (req, res) => {});

export default router;
