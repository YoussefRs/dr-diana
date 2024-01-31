const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse incoming POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Handling form submission
app.post("/submit-form", (req, res) => {
  // Your existing code for processing the form data
  const {
    parent,
    child,
    birthchild,
    weight,
    height,
    childbirth,
    feeding,
    vaccination,
    diagnoses,
    surgeries,
    infections,
    allergies,
    respiration,
    chronic,
  } = req.body;
    console.log(req.body)

  // ... (rest of the code)

  res.status(200).send("Form submitted successfully");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
