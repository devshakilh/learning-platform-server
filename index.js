const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const categories = require('./data/category.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Course API Running')
});
app.get('/course-categories', (req, res) => {
    res.send(categories)
});