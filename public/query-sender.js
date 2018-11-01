/**
 * Receives a query object as parameter and sends it as Ajax request to the POST /query REST endpoint.
 *
 * @param query The query object
 * @returns {Promise} Promise that must be fulfilled if the Ajax request is successful and be rejected otherwise.
 */
function sendQuery(query) {
    return new Promise(function(fulfill, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://cs310.ugrad.cs.ubc.ca:11316/api/v1/project_310/' + query, true);

        request.onload = function() {
            var result = JSON.parse(request.responseText);
            fulfill(result);
        };

        request.onerror = function() {
            reject('The request failed')
        }

        request.send();
    });
};
