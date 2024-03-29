require('dotenv').config();

const express = require('express')
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = 2000 || process.env.PORT;

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App Listening on Port ${PORT}`);
});


app.get('/search', (req, res) => {
    const searchTerm = req.query.q; // Get the search term from the query string
    const searchResults = performSearch(searchTerm); // Implement your search function
    res.json(searchResults);
});

