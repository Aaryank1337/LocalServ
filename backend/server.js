const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS middleware
const serviceProvidersRoutes = require('./routes/serviceProviders'); // Import the service providers routes
const userRoutes = require('./routes/user'); // Import the user routes
const feedbackRoutes = require('./routes/feedback'); // Import feedback routes

// Load environment variables from .env file
dotenv.config({ path: './info.env' }); // Specify the path to the .env file

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/feedback', feedbackRoutes); // Use the feedback route
app.use('/api/providers', serviceProvidersRoutes); // Use the service providers routes
app.use('/api/users', userRoutes); // Use the user routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Root route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});