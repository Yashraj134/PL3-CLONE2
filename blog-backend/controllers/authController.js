const db = require('../models/db');
const bcrypt = require('bcryptjs');

// Register a new user
exports.register = (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

    db.query(query, [username, email, hashedPassword], (err) => {
        if (err) return res.status(500).json({ error: 'Registration failed' });
        res.status(201).json({ message: 'User registered successfully' });
    });
};

// Login user
exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const user = results[0];
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        req.session.user = user;
        res.json({ message: 'Login successful', user });
    });
};

// Logout user
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).json({ error: 'Failed to log out' });
        res.json({ message: 'Logged out successfully' });
    });
};
