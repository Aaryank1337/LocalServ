// backend/routes/serviceProviders.js
const express = require('express');
const router = express.Router();

// Mock data for service providers (this can later be replaced with a database query)
const providers = [
    { id: 1, name: 'John Doe', description: 'Plumber', rating: 4.5 },
    { id: 2, name: 'Jane Smith', description: 'Electrician', rating: 4.8 },
    { id: 3, name: 'Alice Johnson', description: 'Appliance Repair', rating: 4.2 },
    { id: 4, name: 'Alice Johnson', description: 'Appliance Repair', rating: 4.2 },
    { id: 5, name: 'Alice Johnson', description: 'Appliance Repair', rating: 4.2 },
    { id: 6, name: 'Alice Johnson', description: 'Appliance Repair', rating: 4.2 },
    { id: 7, name: 'Alice Johnson', description: 'Appliance Repair', rating: 4.2 }
];

// Route to get all service providers
router.get('/', (req, res) => {
    res.json(providers);
});

module.exports = router;