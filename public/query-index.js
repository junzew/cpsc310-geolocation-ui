/**
 * This hooks together all the CampusExplorer methods and binds them to clicks on the submit button in the UI.
 *
 * The sequence is as follows:
 * 1.) Click on query button in the reference UI
 * 2.) Query string is extracted from UI using global function buildQuery()
 * 3.) Query object is sent to the Geolocation endpoint using global function sendQuery()
 * 4.) Result is then rendered in the reference UI
 */

// example openstreetmap url
// http://www.openlinkmap.org/small.php?lat=49.26125&lon=-123.24807&zoom=18

// TODO: listen to "query" button click, and when it is clicked, extract query string and 
//       use AJAX to get lat/long. Then update Google map's iframe and show result in the #result-message
document.getElementById('query-button').addEventListener('click', function() {
    let query = buildQuery();
    let mapIframe = document.getElementById('map-iframe');
    let resultMessage = document.getElementById('result-message');

    sendQuery(query)
        .then(function(result) {
            mapIframe.src =
                "http://www.openlinkmap.org/small.php?lat=" + result.lat + "&lon=" + result.lon + "&zoom=18";
        })
        .catch(function(error) {
            resultMessage.innerText = error;
        });
});