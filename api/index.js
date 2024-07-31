console.log("Starting server...");
const express = require('express');
const connectDB = require('./server.js');

const app = express();

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api', require("./Routes/users.js"));

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express on Vercel with MongoDB!' });
  });
  

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default app;
