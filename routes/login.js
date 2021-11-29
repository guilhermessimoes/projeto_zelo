var express = require('express');
const loginController = require('../controllers/loginController');
var router = express.Router();
const {loginValidator, esqueceuLoginValidator, createLoginValidator} = require("../middleware/loginValidator")


router.get('/listarUsuario', loginController.listarUsuarios)

router.get('/cadastrarUsuario', loginController.viewCadastrarUsuarios)
router.post('/cadastrarUsuario', loginController.cadastrarUsuarios)


module.exports = router;
