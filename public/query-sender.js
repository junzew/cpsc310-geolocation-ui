/**
 * Receives a query object as parameter and sends it as Ajax request to the POST /query REST endpoint.
 *
 * @param query The query object
 * @returns {Promise} Promise that must be fulfilled if the Ajax request is successful and be rejected otherwise.
 */
function sendQuery(query) {
    return new Promise(function(fulfill, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://cs310.students.cs.ubc.ca:11316/api/v1/project_310/' + query, true);
        request.onload = function() {
            let result = JSON.parse(request.responseText);
            if ('error' in result) {
                reject(result.error);
            } else {
                fulfill(result);
            }
        };

        request.onerror = function() {
            reject('The request failed')
        };

        request.send();
    });
}
