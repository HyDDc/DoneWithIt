const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');



// Starting our app.
const app = express();

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'my_db',
  port     : '8889'
});


// // Creating a GET route that returns data from the 'users' table.
// app.get('/users', function (req, res) {
//     // Connecting to the database.
//     //connection.getConnection(function (err, connection) {

//     // Executing the MySQL query (select all data from the 'users' table).
//     connection.query('SELECT * FROM users', function (error, results, fields) {
//       // If some error occurs, we throw an error.
//       if (error) throw error;

//       // Getting the 'response' from the database and sending it to our route. This is were the data is.
//       res.send(results)
//     });
//     });
// });

app.get('/users', function(req, res){
    connection.query('select * from users', function(error, rows, fields){
          if(error) console.log(error);
  
          else{
              console.log(rows);
              res.send(rows);
  
          }
  
    });
  });

// Starting our server.
var server = app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
 var host = server.address().address;
 var port = server.address().port;
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('connected');
    }
});


