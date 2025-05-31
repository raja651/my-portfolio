import express from "express";
import { validateUserInput } from "../custom-validations/validateUserInput";
import { rateLimiter } from "../custom-validations/ratelimiter";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Apply rate limiter to all routes
app.use(rateLimiter);

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/api/data", validateUserInput, (req, res) => {
  res.json({
    message: "Data received",
    data: req.body,
  });
});

// Error handling middleware - should be last
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

export default app;
