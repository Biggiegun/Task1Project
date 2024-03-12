const express = require('express');
const Response_ = require('express');
const Request_ = require('express');
const bodyParser = require('body-parser');
const crypto_ = require('crypto');

const app = express();

app.use(bodyParser.json());

// Map structure
let secrets: Map<string, { message: string }> = new Map();

// Aleatory value function
function newMessage(): string {
    return crypto_.randomBytes(32).toString('hex');
}

let secretKey: string;

// Posting secret message
app.post('/api/secrets', (req, res) => {
    try {
        const { message }: { message: string } = req.body;
        secretKey = newMessage();
        secrets[secretKey] = message;
        res.status(201).json({ secretKey });
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

// Retrieving the message
let excecuted = true;
app.get(`/api/secret/:secretKey`, (req, res) => {
    secretKey = req.params['secretKey'];
    let secretMessage: string = secrets[secretKey];

    if (!excecuted) {
        res.status(500).json({ message: "Not found, or already read !!!" });
    } else {
        //secrets.clear
        res.status(200).json({ "secretMessage": secretMessage });
        excecuted = !excecuted;
    }
});

// Server logic test....
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}, my friend!!`);
})
