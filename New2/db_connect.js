
// get the client
const mysql = require('mysql2');

// create the connection to database
// const connection = mysql.createConnection(
//     {
//     host: '132.148.203.151',
//     user: 'softtruck',
//     database: 'softtruck',
//     password: 'Qwer-123'
//     }
// );

const connection  = mysql.createPool({
    connectionLimit : 10,
    host: '132.148.203.151',
    user: 'softtruck',
    database: 'softtruck',
    password: 'Qwer-123'
});


module.exports.connection = connection;
module.exports.mysql = mysql;


// // simple query
// connection.query(
//     'SELECT * FROM `user`',
//     function(err, results, fields) {
//         if(err) return console.log(err);
//         console.log(results); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available
//     }
// );