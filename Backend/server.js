import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';  // Ensure the file extension is included
import authRoutes from './routes/authRoutes.js';  // Ensure the file extension is included
import { errorHandler } from './middleware/errorMiddleware.js';  // Ensure the file extension is included

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

// Access environment variables using process.env
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
