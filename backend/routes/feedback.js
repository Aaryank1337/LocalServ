// backend/routes/feedback.js
const express = require('express');
const router = express.Router();

// Mock data for feedback
const feedbacks = [
    { _id: '1', feedback: 'Great service, easy to use!', user: 'Alice', rating: 5 },
    { _id: '2', feedback: 'Had some issues with the payment process.', user: 'Bob', rating: 3 },
    { _id: '3', feedback: 'Loved the variety of providers available!', user: 'Charlie', rating: 4.5 },
    { _id: '4', feedback: 'Not satisfied with the service provided.', user: 'Dana', rating: 2 },
    { _id: '5', feedback: 'Very user-friendly interface!', user: 'Eve', rating: 4.8 }
];

// Route to get all feedback
router.get('/', (req, res) => {
    res.json(feedbacks); // Return mock feedback data
});

module.exports = router;