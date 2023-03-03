/* exported data */

var data = {
  view: 'home',
  dailyQuotes: [],
  favorites: []
};

var animeObjInJSON = localStorage.getItem('ajax-local-storage');

window.addEventListener('beforeunload', function (e) {
  var animeDataStringify = JSON.stringify(data);
  localStorage.setItem('ajax-local-storage', animeDataStringify);
});

if (animeObjInJSON !== null) {
  data = JSON.parse(animeObjInJSON);
}
