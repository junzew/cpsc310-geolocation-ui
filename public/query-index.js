/**
 * This hooks together all the methods and binds them to mouse clicks on the query button in the UI.
 *
 * The sequence is as follows:
 * 1.) Click on query button in the UI
 * 2.) Query string (the address) is extracted from UI using the global function buildQuery()
 * 3.) Query object is sent to the Geolocation endpoint using the global function sendQuery()
 * 4.) Result location is then rendered in the UI, as an embedded map using the openstreet map API
 */

// example openstreetmap url
// http://www.openlinkmap.org/small.php?lat=49.26125&lon=-123.24807&zoom=18

// documentation: https://wiki.openstreetmap.org/wiki/OpenLinkMap#Embed_map_in_another_website

// TODO: listen to "query" button click, and when it is clicked, extract query string and
//       use AJAX to get lat/long. Then update the map's iframe and show result in the #result-message
