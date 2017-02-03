'use strict';

// var client = require('../helpers/es');
var Elasticsearch = require('elasticsearch');
var client = new Elasticsearch.Client({
    host: 'localhost:10010',
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
    }).then(function(error, response) {
        if (error) {
            console.log(error);
            res.statusCode = 409;
            res.end(JSON.stringify(error));
        }
    });
}