const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const alert = require('alert');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'shiraz',
  password: 'shiraz2017',
  database: 'netflix_signup'
});

connection.connect((error) => {
  if (error) {
    console.log('Error connecting to the database', error);
    return;
  }
  console.log('Connected to the database');
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/movies', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    alert('Please fill in all the details');
    return;
  }

  connection.query('SELECT * FROM signup WHERE email = ?', [email], (error1, result1) => {
    if (error1) {
      throw error1;
    }

    if (result1.length === 0) {
      alert('User does not exist. Please sign up first');
      return;
    }

    connection.query('SELECT password FROM signup WHERE email = ?', [email], (error2, result2) => {
      if (error2) {
        throw error2;
      }

      if (password !== result2[0].password) {
        alert('Password is incorrect');
        return;
      }

      res.redirect('/movies');
    });
  });
});

app.post('/submit', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    alert('Please fill in all the details');
    return;
  }

  connection.query('SELECT * FROM signup WHERE email = ?', [email], (error, result) => {
    if (error) {
      throw error;
    }

    if (result.length > 0) {
      alert('User already exists');
      return;
    } else {
      connection.query('INSERT INTO signup (email, password) VALUES (?, ?)', [email, password], (error, results) => {
        if (error) {
          console.error('Error inserting data:', error);
          res.status(500).send('Error inserting data');
          return;
        }
        res.redirect('/movies');
      });
    }
  });
});

const parentDir = path.dirname(__dirname);
const buildDir = path.join(parentDir, 'client', 'build');
app.use(express.static(buildDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
