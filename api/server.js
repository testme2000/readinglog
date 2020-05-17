var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')

var app = express();
import { MongoClient } from 'mongodb';

/////////////////////////////////////////////////////////////////////////////
// CORS related Setting
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Body Parsing Code
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
////////////////////////////////////////////////////////////////////////////
var url = 'mongodb://localhost/booklistdb';

var allrecord = [];
app.route('/readinglog').get(cors(),function(req,res) {
    MongoClient.connect(url, function(err,database) {
        const collect = database.db('booklistdb');
        var cursor = collect.collection('readinglogcollection').find();
        cursor.each(function(err,doc) {
            if(doc != null) {
                allrecord.push(doc);
            }
        });
        res.send(allrecord);
        database.close();
        allrecord = [];
    });
});

app.route('/createlogentry').post(cors(),function(req,globalres) {
    var bookentry = { title : req.body.title, author : req.body.author };
    let result = null;
    MongoClient.connect(url, function(err,database) {
        const collect = database.db('booklistdb');
        result = collect.collection('readinglogcollection').insertOne(bookentry,function(err,res) {
            if(err) res.send(err);
            bookentry._id = res.insertedId;
            globalres.send(bookentry);
        });
        database.close();
    });
});

app.route('/updatelog').put(cors(),function(req,globalres) {
    console.log(req.body);
    IMPLEMENT UPDATE LOG METHOD
    var bookentry = { title : req.body.title, author : req.body.author };
    MongoClient.connect(url, function(err,database) {
        const collect = database.db('booklistdb');
        result = collect.collection('readinglogcollection').findOneAndUpdate(
                                        { _id: req.body.internalId },
                                        bookentry,
                                        { new: true},
                                        function(err,res) {
            if(err) res.send(err);
            bookentry._id = res.insertedId;
            globalres.send(bookentry);
        });
        database.close();
    });
});

var server = app.listen(3000,function(){
    console.log("Server started");
});

function newFunction() {
    return require('express');
}
