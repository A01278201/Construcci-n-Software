const express = require('express');
const router = express.Router();
const controlador = require('../controller/controller');

router.get('/', (req, res) => {
  res.render('landingpage', { titulo: 'Bienvenido' });
});
router.get('/add', controlador.getAdd);
router.post('/add', controlador.postAdd);
router.get('/list', controlador.getList);

module.exports = router;