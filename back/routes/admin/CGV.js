import express from 'express';

// import connection from './conf'

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

export default router;
