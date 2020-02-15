var express = require('express');
var cors = require('cors');

var app = express(cors({
    credentials: true,
  }));
import { MongoClient } from 'mongodb';
var url = 'mongodb://localhost/booklistdb';

var allrecord = [];
app.route('/readinglog').get(cors(),function(req,res) {
    MongoClient.connect(url, function(err,database) {
        console.log("Connected");
        const collect = database.db('booklistdb');
        var cursor = collect.collection('readinglogcollection').find();
        cursor.each(function(err,doc) {
            if(doc != null) {
                console.log("Found record --- added");
                allrecord.push(doc);
            }
        });
        res.send(allrecord);
        console.log(allrecord[0]);
        console.log(allrecord.length);
        console.log("End here");
        database.close();
        allrecord = [];
    });
});

var server = app.listen(3000,function(){

});



function newFunction() {
    return require('express');
}
