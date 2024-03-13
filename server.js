// server.js
const express = require('express');
const axios = require('axios'); // Import the axios module
const path = require('path'); // Include the path module
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Serve HTML file with form
app.get('/graph', (req, res) => {
    res.sendFile(path.join(__dirname, 'graph.html')); // Serve HTML file
});

// Serve JSON data fetched from external URL
app.get('/cpuData', async (req, res) => {
    try {
        const response = await axios.get('http://98.70.37.217:8000/check_mount'); // Fetch data from the specified URL using axios
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

