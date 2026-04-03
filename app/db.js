const mysql = require("mysql2/promise");

const pool = mysql.createPool({

    host: "database-1.cjmyauyayakc.ap-south-1.rds.amazonaws.com",
    user: "root",
    password: "rootadmin",
    database: "taskdb",
    port: 3306

});

module.exports = pool;