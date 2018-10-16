const express = require("express");
const path = require("path");

const app = express();
const publicFolderPath = path.join(__dirname, "public");

app.use(express.json());
app.use(express.static(publicFolderPath));

const users = [];

// add POST request listener here
app.post("/api/user", function (req, res) {

    if (users.find(user => user.username === req.body.username)) {
        res.status(409);
        res.send(new Error("Username taken, choose new username"));
    } else {
        req.body.id = Math.floor(Math.random() * 1000);
        users.push(req.body);
        res.status(201);
        res.send(req.body);
        res.send(console.log("User successfully created"));
    }
    console.log(users);
})

app.listen(3000, () => console.log("running on port 3000"));