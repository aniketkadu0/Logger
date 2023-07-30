exports.ExecuteSQL = async (req, connection) => {
  var query = `INSERT INTO app_logs (eventType,
    userId,description,
    callStack,functionName,
    eventTime,moduleName,machineName) values(
    ${req.body.eventType},'${req.body.userId}',
    '${req.body.description}','${req.body.callStack}',
    '${req.body.functionName}','${
    new Date().toISOString("en-IN").slice(0, 11).replace("T", " ") +
    new Date().toLocaleTimeString().replace(" PM", "")
  }','${req.body.moduleName}','${req.body.machineName}')`;

  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    else {
      connection.end();
      console.log("Connection end");
    }
  });
};
