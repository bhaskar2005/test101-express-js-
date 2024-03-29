const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('loginStudent');
});

app.get('/register', (req, res) => {
    res.render('registerStudent');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
