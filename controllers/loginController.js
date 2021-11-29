const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const db = require('../models') 

const loginController = {
    listarUsuarios: async (req, res) => {
        const cadastroUsuarioRows  = await  db.Usuario.findAll();

        res.render('listarUsuario',{usuarios:cadastroUsuarioRows})
    },

    viewCadastrarUsuarios: (req,res) => {
        res.render('cadastrarUsuario', {formAction:"/login/cadastrarUsuario", usuario:{}})
    },

    cadastrarUsuarios: async (req, res) => {
        const nomeUsuario = req.body.nome;
        const emailUsuario = req.body.email;
        const salt = bcrypt.genSaltSync(10);
        const senhaCriptografada = bcrypt.hashSync(req.body.senha, salt);
    
        await db.Usuario.create({
            nome: nomeUsuario,
            email: emailUsuario,
            senha: senhaCriptografada
        })
    
       // await req.flash('success', "Registro criado com sucesso")
    
        res.redirect("listarUsuario")
    }
   
}

module.exports = loginController