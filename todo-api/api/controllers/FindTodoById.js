'use strict';

// var client = require('../helpers/es');
var Elasticsearch = require('elasticsearch');
var client = new Elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
});

module.exports = {
    FindTodoById: FindTodoById
}

function FindTodoById(req, res) {
    console.log(`Getting Todo with id ${req.swagger.params.id.value}`);
    client.search({
        index: 'todo',
        type: 'todo',
        id: req.swagger.params.todo.value.todo_id
    }).then(function(response) {
        res.header('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }, function(error) {
        res.header('Content-Type', 'application/json');
        console.log(error);
        res.statusCode = 409;
        res.end(JSON.stringify(error));
    });
}