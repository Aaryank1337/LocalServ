const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Hardcoded user data for testing
const hardcodedUser = {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123', // You can hash this if needed
    role: 'user',
    _id: '1' // Unique ID for the user
};

// Route to log in a user
router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    // Check if the email and password match the hardcoded user
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
        // Generate JWT for the hardcoded user
        const token = jwt.sign({ id: hardcodedUser._id, role: hardcodedUser.role }, 'your_jwt_secret', { expiresIn: '1h' });
        return res.status(200).json({ token });
    }

    // If credentials don't match
    return res.status(401).json({ message: 'Invalid credentials' });
});

// You can also set up a registration route if needed, but for this example, it can be skipped.

module.exports = router;