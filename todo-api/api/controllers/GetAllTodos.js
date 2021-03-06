'use strict';

// var client = require('../helpers/es');
var Elasticsearch = require('elasticsearch');
var client = new Elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
});
var monitor = require("../helpers/monitor");

module.exports = {
    GetAllTodos: GetAllTodos
}

function GetAllTodos(req, res) {
    var start = monitor();
    client.search({
        index: 'todo',
        type: 'todo',
        q: '*',
        _sourceInclude: 'todo_id, todo, completed, tags, author, completeddate, duedate'
    }).then(function(response) {
        var results = [];
        results = response.hits.hits.map((hit) => {
            return hit._source
        });
        res.header('Content-Type', 'application/json');
        res.end(JSON.stringify(results));
        monitor(start, 'GetAllTodos');
    }, function(error) {
        res.end(JSON.stringify(error));
    });
}