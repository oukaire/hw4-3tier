var express = require('express');
var app     = express();
var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MyNewPass',
  database: 'contacts'
});


// used to serve static files from public directory
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('Hello-world');
});

// test with curl 'http://localhost:3000/add?firstName=peter'

app.get('/add', function(req, res){
  
  console.log('firstName: ', req.query.firstName);
  console.log('lastName: ', req.query.lastName);

  res.send(`echoing: ${req.query.firstName}`);
});

app.get('/random', function(req, res) {
  var q = req.query
  console.log('All in order:', q.firstName, q.lastName, q.phoneNumber, q.email, q.university, q.major)

  connection.query(
   `INSERT INTO 
      \`contacts\` 
    VALUES
      ('Brian', 'Harry', '6171111122', 'bh@gmail.com', 'Tufts', 'Sociology'),
      ('John', 'Moss', '8787871176', 'jmoss@hot.com', 'MIT', 'Biology'),
      ('${q.firstName}', '${q.lastName}', '${q.phoneNumber}', '${q.email}', '${q.university}', '${q.major}')`,
    function(err, results, fields) {
     console.log(results);
     res.send(results);
    }
  );
});

app.get('/read', function(req, res){

   connection.query(
     'SELECT * FROM `contacts`',
     function(err, results, fields) {
       console.log(results);
       res.send(results);
     }
   );

});


app.listen(3000, function() {
	console.log("Running on port 3000");
});
