const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db.js');
const authRoute = require('./routes/authRoute.js');
const cors = require('cors');
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(cors())
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoute);

// REST API
app.get("/", (req, res) => {
    res.send({
        message: "Welcome to Ecommerce App"
    });
});

// Connect to the database
connectDB().then(() => {
    // Start the server after a successful database connection
    const PORT =   8080;
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
}).catch(error => {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process with failure
});
