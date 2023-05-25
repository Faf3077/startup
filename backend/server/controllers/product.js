import {getUsers, insertUsers} from "../models/productModel.js";


export const showUsers = (req, res) => {
   getUsers((err, results) => {
       if (err){
           res.send(err);
       }else{
           res.json(results);
       }
   });
}

export const createUsers = (req,res)=>{
    const data = req.body

    insertUsers(data,(err,results) =>{
        if(err){
            res.send(err);
        }
        else{
            res.json(results)
        }
    })
}