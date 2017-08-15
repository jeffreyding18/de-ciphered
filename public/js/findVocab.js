var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vocabulary"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT term, definition FROM terms", function (err, result, fields) {
    if (err) throw err;
    for (i = 0; i < result.length; i++) {
      console.log(result[i].definition);
    }

  });
});
