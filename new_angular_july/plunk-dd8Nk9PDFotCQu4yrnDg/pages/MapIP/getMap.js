function initialize() {
	//set up map
    var mapCanvas = document.getElementsByClassName('map');
    var mapOptions = {
        center: new google.maps.LatLng(22, 22),
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(mapCanvas[0], mapOptions);
    
	var currentLat = lat.pop(); 
	var currentLon = lon.pop(); 
    
    while(currentLat != undefined){
        placeMarker(currentLat, currentLon);
        currentLat = lat.pop(); 
        currentLon = lon.pop(); 
    }
}
		
function placeMarker(thisLat, thisLon){
	new google.maps.Marker({
        position: new google.maps.LatLng(thisLat, thisLon),
        map: map
    });
}
		
		
		
google.maps.event.addDomListener(window, 'load', initialize);
