var async = require('async');
var oracledb = require('oracledb');


oracledb.getConnection(
  {
    user          : "someuserx",
    password      : "mypass123",
    connectString : "localhost:1521/test"
  },
  function(err, connection)
  {
    if (err) { console.error(err); return; }
    connection.execute(
      "SELECT * FROM sys.table1",
      function(err, result)
      {
        if (err) { console.error(err); return; }
        console.log(result.rows);
      });
  });

  
