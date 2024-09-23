const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const http = require('http');
const querystring = require('querystring');

const app = express();

// Allow CORS for all origins
app.use(cors());

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Sample Route
app.post("/", (req, res) => {
    console.log(req.body);

    //Handle Server Request here and Store into Database 
    console.log("Form Filled and Server Processed");
});

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));