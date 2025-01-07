const bcrypt = require('bcrypt');
var express = require('express');
var path = require('path');
const cors = require('cors');
var mdb = require('mongoose');
var Users = require('./models/users');
var Form = require('./models/form');

var app = express();
app.use(cors());
const PORT = 9001;
app.use(express.json());

// Connect to MongoDB
mdb.connect("mongodb://localhost:27017/mydb").then(() => {
    console.log("Mongodb Connection Successful");
}).catch((err) => {
    console.error("Check your connection string", err);
});

// Routes
app.get('/', (req, res) => {
    res.json('Optimus Prime : Attention Autobots, Transform and Roll Out');
});

app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({ ...req.body, password: hashedPassword });
        await newUser.save();

        console.log("User added successfully");
        res.status(200).json({ message: "User added successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error adding user" });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await Users.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found", isLoggedIn: false });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials", isLoggedIn: false });
        }

        res.status(200).json({ message: "Login successful", isLoggedIn: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error", isLoggedIn: false });
    }
});


app.get('/getsignup', async (req, res) => {
    try {
        const allSignUpRecords = await Users.find();
        res.json(allSignUpRecords);
        console.log("All data fetched");
    } catch (err) {
        console.error(err);
    }
});

app.post('/form', async (req, res) => {
    try {
        const data = new Form(req.body);
        await data.save();
        console.log("Query added successfully");
        res.status(200).json({ message: "Form submitted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error submitting form" });
    }
});


app.listen(PORT, () => {
    console.log(`Backend Server Started on port ${PORT}`);
});
