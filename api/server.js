var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')

var app = express();
import { MongoClient, ObjectID } from 'mongodb';

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
    var bookentry = { title : req.body.title, author : req.body.author, isbn: req.body.isbn };
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
    var bookentry = { title : req.body.title, author : req.body.author, isbn: req.body.isbn };
    var updateValue = { $set: bookentry };
    MongoClient.connect(url,{useUnifiedTopology: true}, function(err,database) {
        const collect = database.db('booklistdb');
        var result = collect.collection('readinglogcollection').findOneAndUpdate(
                                        { _id: ObjectID(req.body.internalId) },
                                        //{ $set : {title : 'The Blind Side: Evolution of Game', author : 'Michael Lewis' }},
                                        updateValue,
                                        function(err,res) {
            if(err) {
                globalres.send(err);
            }
            else {
                bookentry._id = globalres.insertedId;
                globalres.send(bookentry);
            }
        });
        database.close();
    });
});

app.route('/deletelog').delete(cors(),function(req,globalres) {
    var bookentry = { internalId : req.body.internalId };
    console.log("Internal ID");
    console.log(req.body);
    console.log("That was pure data");
    MongoClient.connect(url,{useUnifiedTopology: true}, function(err,database) {
        const collect = database.db('booklistdb');
        var result = collect.collection('readinglogcollection').deleteOne(
                                        { _id: ObjectID(req.body.internalId) },
                                        function(err,res) {
            if(err) {
                globalres.send(err);
            }
            else {
                console.log("Delete successful");
                console.log("Total record deleted : " + res.deletedCount);
                bookentry.recorddelete = true;
                globalres.send(bookentry);
            }
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
