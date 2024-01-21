require('dotenv').config();

const express = require('express')
const expressLayout = require('express-ejs-layouts');

const userRouter = require("./routes/user_router");
const homeRouter = require("./routes/home_router");
// const searchRouter = require("./routes/search_router");
// const threadsRouter = require("./routes/threads_router");

const app = express();
const PORT = 2000 || process.env.PORT;

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(homeRouter);
app.use(userRouter);
// app.use(searchRouter);
// app.use(threadsRouter);

app.listen(PORT, () => {
    console.log(`App Listening on Port ${PORT}`);
});

app.get('/search', (req, res) => {
    const searchTerm = req.query.q; // Get the search term from the query string
    const searchResults = performSearch(searchTerm); // Implement your search function
    res.json(searchResults);
});

