import {getUsers} from "../models/productModel.js";


export const showUsers = (req, res) => {
   getUsers((err, results) => {
       if (err){
           res.send(err);
       }else{
           res.json(results);
       }
   });
}