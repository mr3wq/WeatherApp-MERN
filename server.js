
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

// Middleware
app.use(express.json());
app.use(require('cors')());

// Placeholder for MongoDB connection (if using)

// Weather API Route
app.get('/weather/:city', async (req, res) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`);

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));

