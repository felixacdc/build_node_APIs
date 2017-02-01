'use strict';

module.exports = {
    GetAllTodos: GetAllTodos
}

function GetAllTodos(req, res, next) {
    res.json([
        {
            todo_id: 0,
            todo: "Get some milk",
            author: "jim",
            createddate: "2017-02-01T04:20:12.364Z",
            duedate: "2017-02-01T04:20:12.364Z",
            completed: false
        },
        {
            todo_id: 1,
            todo: "Get some milk",
            author: "Austin",
            createddate: "2017-02-01T04:20:12.364Z",
            duedate: "2017-02-01T04:20:12.364Z",
            completed: false
        }
    ]);
}