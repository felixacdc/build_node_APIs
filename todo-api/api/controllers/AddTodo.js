'use strict';

// var client = require('../helpers/es');
var Elasticsearch = require('elasticsearch');
var client = new Elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
});

module.exports = {
    AddTodo: AddTodo
}

function AddTodo(req, res) {
    client.search({
        index: 'todo',
        type: 'todo',
        id: req.swagger.params.todo.value.todo_id,
        body: req.swagger.params.todo.value
    }).then(function(response) {
        res.header('Content-Type', 'application/json');
        console.log(`Todo ${req.swagger.params.todo.value.todo_id} added to Elasticsearch`);
        res.end();
    }, function(error) {
        res.header('Content-Type', 'application/json');
        console.log(error);
        res.statusCode = 409;
        res.end(JSON.stringify(error));
    });
}