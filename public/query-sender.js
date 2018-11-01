/**
 * Receives a query object as parameter and sends it as Ajax request to the POST /query REST endpoint.
 *
 * @param query The query object
 * @returns {Promise} Promise that must be fulfilled if the Ajax request is successful and be rejected otherwise.
 */
function sendQuery(query) {
    return new Promise(function(fulfill, reject) {
        // TODO: provided a query string, make a request to 
        //       'http://cs310.ugrad.cs.ubc.ca:11316/api/v1/project_310/<address>'
        //       fulfill({lat: , lon: }) when no error
        //       otherwise, reject() with the error message
    });
};
