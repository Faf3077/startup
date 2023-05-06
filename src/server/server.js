const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');

var connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "password",
   database: "auth_signup",
   port: "3306"
})


// подключаюсь к бд
connection.connect((err) => {
   if (err) {
      throw err
   }
   else {
      console.log("connected")
   }
})

// Маршрут для обработки запроса на регистрацию пользователя
router.post('/authorization/register', (req, res) => {
   const { username, password } = req.body;
   const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
   connection.query(query, [username, password], (err, result) => {
      if (err) {
         console.error(err);
         res.status(500).send('Ошибка регистрации');
      } else {
         res.status(200).send('Пользователь зарегистрирован');
      }
   });
});

// Маршрут для обработки запроса на авторизацию пользователя
router.post('/authorization/login', (req, res) => {
   const { username, password } = req.body;
   const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
   connection.query(query, [username, password], (err, result) => {
     if (err) {
       console.error(err);
       res.status(500).send('Ошибка авторизации');
     } else {
       if (result.length === 0) {
         res.status(401).send('Неверное имя пользователя или пароль');
       } else {
         const token = jwt.sign({ id: result[0].id }, 'mysecretkey');
         res.status(200).json({ token });
       }
     }
   });
 });

module.exports = router;

// промежуточное ПО body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// определенные маршруты
app.use('/', router);

const port = process.env.PORT || 8080;
app.listen(port);
console.log("App is listening on port " + port)
