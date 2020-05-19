const connection= require('../database/connection');
const crypto= require('crypto');

module.exports={

    async index(req,res){
        const response= await connection('users').select('*');

        res.json(response);
    },

    async create(req,res){
        const id= crypto.randomBytes(4).toString('hex');

        const {name, email, password}= req.body;//Mesmo que const data= {name: req.body.name} etc

        const response= await connection('users').insert({
            id,
            name,
            email,
            password
        });

        res.json(response);
    },


}