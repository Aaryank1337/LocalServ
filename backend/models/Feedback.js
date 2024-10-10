// backend/models/Feedback.js
const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    feedback: {
        type: String,
        required: true, // Ensure feedback is required
    },
    user: {
        type: String, // Assuming you want to store the username or user ID
        required: true, // Ensuring this is required if linking feedback to a user
    },
    rating: {
        type: Number, // Optionally store a rating value
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set the date when feedback is created
    }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);