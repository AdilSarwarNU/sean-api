const path = require("path");

module.exports = (app) => {
  var apiUrlPrefix = "/api/v1"

  /**
   * Remove this when you start build your app.
   */
  console.log('-------------------\n\n* Hi there, if this is your first time using the SEAN stack for API-based application and you\'re running, you can now visit http://localhost:3000/api/v1/welcome to see a JSON welcome message.\n\n-------------------');

  app.use(apiUrlPrefix + '/welcome', require('./welcome'));

  app.use((req, res, next) => {
    if(req.accepts('json')) {
      return res
        .status(404)
        .json({
          "error": "The resource is not found."
        });
    }

    res.status(406);
  });
};
