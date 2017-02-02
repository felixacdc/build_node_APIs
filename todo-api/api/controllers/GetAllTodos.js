'use strict';

// var client = require('../helpers/es');
var Elasticsearch = require('elasticsearch');
var client = new Elasticsearch.Client({
    host: 'localhost:10010',
    log: 'error'
});

module.exports = {
    GetAllTodos: GetAllTodos
}

function GetAllTodos(req, res) {
    client.search({
        index: 'todo',
        type: 'todo',
        q: '*',
        _sourceInclude: 'todo_id, todo, completed, tags, author, completeddate, duedate'
    }).then(function(error, response) {
        if (error) {
            res.end(JSON.stringify(error));
        } else {
            var results = [];
            results = response.hits.hits.map((hit) => {
                return hit._sourse
            });
            res.header('Content-Type', 'application/json');
            res.end(JSON.stringify(results));
        }
    });
}