const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("static"));

app.post("/send", (req, res) => {
    const webhook = req.body.webhook;

    const message = {
        content: req.body.message,
    };

    axios.post(webhook, message)
    .then(response => {
        // console.log(`Message sent successfully: "${req.body.message}"`);
        // ^ uncomment if you want logging

        res.json({ "Status": "Sent" });
    })
    .catch(error => {
        console.error("Error sending message:", error);
        res.status(500).json({ "Status": "Error" });
    });
});

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});