var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

// DB
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);