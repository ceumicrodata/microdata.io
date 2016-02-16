function initMap( mapContainer, lat, lng, zoom, title) {

  // Specify features and elements to define styles.
  var styleArray = [
    {
      featureType: "all",
      stylers: [
       { saturation: -80 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 50 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(mapContainer, {
    center: {lat: lat, lng: lng},
    scrollwheel: false,
    // Apply the map style array to the map.
    styles: styleArray,
    zoom: zoom
  });
  
  var marker = new google.maps.Marker({
    position: {lat: lat, lng: lng},
    map: map,
    title: title,
    icon: "img/marker.png"
  });
}

var mapsApiLoaded = false;
var eventsLoaded = false;

function onLoadMapsApi() {
    mapsApiLoaded = true;
    addMaps();
}
function onEventsLoaded() {
    eventsLoaded = true;
    addMaps();
}
function addMaps() {
    if (eventsLoaded && mapsApiLoaded) {
        $(".ceu-map").each( function() {
            var lat = parseFloat($(this).attr("lat").replace(',', '.'));
            var lng = parseFloat($(this).attr("lng").replace(',', '.'));
            var zoom = parseFloat($(this).attr("zoom"));
            var title = $(this).attr("title");
            initMap (this, lat, lng, zoom, title);
        });
    }
}