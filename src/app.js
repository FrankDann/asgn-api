var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

// DB
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/assignments', {useNewUrlParser: true});

// Routes
var asgnRoute = require("./routes/asgn-router");

// Log activity
app.use((req,res,next) => {
    console.log(`${new Date().toDateString()} ==> ${req.originalUrl}`);
    next();
});

// app.use
app.use(bodyParser.json());
app.use(asgnRoute);
app.use((req,res,next) => {
    res.status(404).send('Page not found, sorry!');
});

// list on port
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});