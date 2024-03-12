const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());



let message = [{}];


app.get('/', (req, res) => {
    try {

        let r = (Math.random() + 1).toString(36).substring(7);
        //console.log("random", r);
        res.json(message);
        // res.json(message = r);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post('/api/secrets', (req, res) => {

    try {
        const newMessage = req.body;
        message.push(newMessage);
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});





const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}, my friend!!`);
})
