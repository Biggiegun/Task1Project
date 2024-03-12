const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.json());

const port = 3000;

mongoose.connect('mongodb://localhost:27017/rest-api-tutorial', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}, my friend!!`);
})