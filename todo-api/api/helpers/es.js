'use strict';

var Elasticsearch = require('elasticsearch');
var client = new Elasticsearch.Client({
    host: 'localhost:10010',
    log: 'error'
})
