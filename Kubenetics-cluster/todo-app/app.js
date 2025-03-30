const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory to-do list (for demonstration)
let todos = [];

// Route: Home page (List to-dos)
app.get('/', (req, res) => {
    res.render('index', { todos });
});

// Route: Add page (Display form to add a new to-do)
app.get('/add', (req, res) => {
    res.render('add');
});

// Route: Handle new to-do submissions
app.post('/add', (req, res) => {
    const { title } = req.body;
    if (title) {
        todos.push(title);
    }
    res.redirect('/');
});

// Route: About page
app.get('/about', (req, res) => {
    res.render('about');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
