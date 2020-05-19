const connection = require('../database/connection');

module.exports={

    async index(req,res){
        
    },

    async create(req,res){
        const user_id= req.headers.authorization;

        const {title,description,value}= req.body;

        if(!user_id){
            return res.status(401).json({error: 'Operation not permitted.'});
        }
        
        const response= await connection('contents').insert({
            title,
            description,
            value,
            user_id
        });

        res.json(response);

    },

    async delete(req,res){
        const {id}= req.params;
        const user_id= req.headers.authorization;

        const response= await connection('contents').where('id', id).select('user_id').first();

        if (response.user_id !== user_id) {
            return res.status(401).json({ error: 'Operation not permitted.' });
        }
        
        await connection('contents').where('id', id).delete();

        return res.status(204).send();
    

    }
}