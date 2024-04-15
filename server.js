const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


const directoryPath = path.join(__dirname, 'public');


app.use(express.static(directoryPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(directoryPath, 'login.html'));
});


app.post('/login', (req, res) => {

    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        res.redirect('/notes'); 
    } else {
        res.status(401).send('Unauthorized'); 
    }
});


app.listen(PORT, () => {
    console.log(`Authentication Service is running on http://localhost:${PORT}`);
});