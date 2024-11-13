// // const express = require('express');
// // const mysql = require('mysql2');
// // const path = require('path');
// // const bcrypt = require('bcrypt');
// // const jwt = require('jsonwebtoken');
// // const app = express();

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, 'public')));

// // const SECRET_KEY = 'kdkwndwknwkfnwkfnwkfn';

// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: '22510123',
// //   database: 'hospitals'
// // });

// // db.connect((err) => {
// //   if (err) {
// //     console.error('error connecting: ' + err.stack);
// //     return;
// //   }
// //   console.log('connected as id ' + db.threadId);
// // });

// // // Middleware to authenticate token
// // function authenticateToken(req, res, next) {
// //   const token = req.headers['authorization'];
// //   if (!token) return res.sendStatus(401);

// //   jwt.verify(token, SECRET_KEY, (err, user) => {
// //     if (err) return res.sendStatus(403);
// //     req.user = user;
// //     next();
// //   });
// // }

// // // Routes for serving HTML pages
// // app.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'frontend.html'));
// // });

// // app.get('/login', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'login.html'));
// // });

// // app.get('/signup', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'signup.html'));
// // });

// // // Route for user signup
// // app.post('/signup', async (req, res) => {
// //   const { username, password } = req.body;
// //   const hashedPassword = await bcrypt.hash(password, 10);
// //   const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
// //   db.query(query, [username, hashedPassword], (err, result) => {
// //     if (err) throw err;
// //     res.send('User registered successfully');
// //   });
// // });

// // // Route for user login
// // app.post('/login', (req, res) => {
// //   const { username, password } = req.body;
// //   const query = 'SELECT * FROM users WHERE username = ?';
// //   db.query(query, [username], async (err, results) => {
// //     if (err) throw err;
// //     if (results.length && await bcrypt.compare(password, results[0].password)) {
// //       const user = { id: results[0].id, username: results[0].username };
// //       const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
// //       res.json({ token });
// //     } else {
// //       res.send('Invalid username or password');
// //     }
// //   });
// // });

// // // Route for booking an appointment (with token check)
// // app.post('/book/submit', authenticateToken, (req, res) => {
// //   const { patientName, doctorName, appointmentDate } = req.body;
// //   const query = 'INSERT INTO appointments (patient_name, doctor_name, appointment_date) VALUES (?, ?, ?)';
// //   db.query(query, [patientName, doctorName, appointmentDate], (err, result) => {
// //     if (err) throw err;
// //     res.send('Appointment booked successfully');
// //   });
// // });

// // // Route for viewing appointments (with token check)
// // app.get('/appointments/list', authenticateToken, (req, res) => {
// //   const query = 'SELECT * FROM appointments';
// //   db.query(query, (err, results) => {
// //     if (err) throw err;
// //     res.json(results);
// //   });
// // });

// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });


// const express = require('express');
// const mysql = require('mysql2');
// const path = require('path');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const SECRET_KEY = 'your_jwt_secret_key';

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '22510123',
//   database: 'hospitals'
// });

// db.connect((err) => {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + db.threadId);
// });

// // Middleware to authenticate token
// function authenticateToken(req, res, next) {
//   const token = req.headers['authorization'];
//   if (!token) return res.sendStatus(401);

//   jwt.verify(token, SECRET_KEY, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Route for user signup
// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
//   db.query(query, [username, hashedPassword], (err, result) => {
//     if (err) throw err;
//     res.send('User registered successfully');
//   });
// });

// // Route for user login
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const query = 'SELECT * FROM users WHERE username = ?';
//   db.query(query, [username], async (err, results) => {
//     if (err) throw err;
//     if (results.length && await bcrypt.compare(password, results[0].password)) {
//       const user = { id: results[0].id, username: results[0].username };
//       const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
//       res.json({ token });
//     } else {
//       res.send('Invalid username or password');
//     }
//   });
// });

// // Route for booking an appointment (with token check)
// app.post('/book/submit', authenticateToken, (req, res) => {
//   const { patientName, doctorName, appointmentDate } = req.body;
//   const query = 'INSERT INTO appointments (patient_name, doctor_name, appointment_date) VALUES (?, ?, ?)';
//   db.query(query, [patientName, doctorName, appointmentDate], (err, result) => {
//     if (err) throw err;
//     res.send('Appointment booked successfully');
//   });
// });

// // Route for viewing appointments (with token check)
// app.get('/appointments/list', authenticateToken, (req, res) => {
//   const query = 'SELECT * FROM appointments';
//   db.query(query, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 } // 10 minutes
}));

// Routes
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



// CREATE DATABASE IF NOT EXISTS blog_app;
// USE blog_app;

// CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(50),
//     email VARCHAR(100) UNIQUE,
//     password VARCHAR(255),
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
// npm install express mysql2 bcryptjs express-session dotenv
