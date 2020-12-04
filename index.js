const crypto = require("crypto");
const { exec } = require("child_process");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
	res.send("webhook is live");
});

app.post("/deploy", (req, res) => {
	res.send("deployed something");
});

app.listen(PORT, (req, res) => {
	console.log("server listening on port:" + PORT);
});
