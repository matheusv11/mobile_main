const connection= require('../database/connection');

module.exports={
    async index(req,res){
        const user_id= req.headers.authorization;
        const {page=1}= req.query;

        const count= await connection('contents').where('user_id', user_id).count().first();
        
        const response= await connection('users')
        .join('contents', 'contents.user_id', '=', 'users.id')//Pega contents de users registrados
        .where('users.id', user_id)
        .limit(5)
        .offset((page-1)*5)
        .select('*')//Está sobrepondo id do user porem contents possui o id de user

        res.header('x-total-count', count['count(*)']);

        res.json(response);

    }
}