import mysql from "mysql2";

// create the connection to database
const db = mysql.createConnection({
   host: "77.222.40.238",
   user: "see320mgma",
   password: "Koder496219906",
   database: "see320mgma",
});

export default db;