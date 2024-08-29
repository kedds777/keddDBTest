console.log("Starting server...");
const express = require('express');
const connectDB = require('./server.js');
var cors = require('cors')

const app = express();

app.use(cors())

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api', require("./Routes/users.js"));
  

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//export default app;
