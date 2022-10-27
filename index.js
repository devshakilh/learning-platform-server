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
app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;

    const selectedCourse = course.filter(n => n.id == id);
    res.send(selectedCourse);
    console.log(id);
});
app.get('/course-premium/:_id', (req, res) => {
    const _id = req.params._id;
    const cheekOut = course.filter(h => h._id == _id);
    res.send(cheekOut);

});
app.listen(port, () => {
    console.log('Course Details server running on port', port);

})