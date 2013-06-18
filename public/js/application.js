var geocoder;
var marker;
var map;
var query = '717 California St, San Francisco, CA, USA';
function initialize() {

  geocoder = new google.maps.Geocoder();
  var mapOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

  codeAddress();
}

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          draggable:true,
          animation: google.maps.Animation.DROP
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

