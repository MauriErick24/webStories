const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const cors = require('cors');

// const PORT = 4000;
const port = 4000;

const app = express();

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'sisinf',
// });

const db = mysql.createConnection({
  host: 'containers-us-west-126.railway.app',
  port: 7182,
  user: 'root',
  password: 'nhGy2mhQCBwzNNBGU3bY',
  database: 'railway',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});



///middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/// routes 

app.get('/', (req, res)=>{
    res.send('home')
});


app.get('/userStory', (req, res) =>{
  console.log(req.params.user);
    const query = 'select * from user_story where user_id = ' + req.params.user;
    db.query(query, (err, data) => {
      console.log(err, data);
      if (err) return res.json({ error: err.sqlMessage });
      else return res.json({ data });
    });
  });



app.post('/newUserStory', (req, res) => {
    const sql = 'insert into user_story(title, yo_como, requiero, tal_que, criterio_aceptacion,importancia, complejidad) values (?)';
    const values = [...Object.values(req.body)];
    console.log("insert", values);
    
    let responseSent = false; // variable de estado para verificar si ya se envió una respuesta
    
    db.query(sql, [values], (err, data) => {
      if (err) {
        console.error(err);
        if (!responseSent) { // verificamos que aún no se haya enviado una respuesta
          responseSent = true;
          return res.status(500).json({ error: err.sqlMessage });
        }
      } else {
        console.log(data);
        if (!responseSent) { // verificamos que aún no se haya enviado una respuesta
          responseSent = true;
          return res.status(200).json({ message: 'Los datos se insertaron correctamente' });
        }
      }
    });
  });

///

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});