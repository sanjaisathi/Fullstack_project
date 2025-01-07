const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 9001;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse incoming JSON requests

// Simulated database for user authentication
const users = [
  { email: "test@example.com", password: "password123" },
  { email: "user@example.com", password: "mypassword" },
];

// POST /login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Log the incoming request for debugging
  console.log("Login request received:", { email, password });

  // Find the user in the "database"
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Simulate a token generation (in real-world, use JWT or similar)
    const token = "mockToken12345";

    // Respond with a token and success message
    res.status(200).json({
      token,
      message: "Login successful",
    });
  } else {
    // Respond with an error for invalid credentials
    res.status(401).json({
      message: "Invalid email or password",
    });
  }
});

// Default route for server testing
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
