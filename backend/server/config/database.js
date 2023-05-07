import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "password",
   database: "auth_signup",
   port: "3306"
});

export default db;