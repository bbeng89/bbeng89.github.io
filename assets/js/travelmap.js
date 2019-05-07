var TravelMap = function(locations) {
    var self = this;
    self.map;
    self.markers = [];
    self.path = [];
    self.locations = locations;
    self.homeIcon = '🏠';
    self.currentLocationIcon = '⭐';

    // create path by extracting coords from locations
    for(var i = 0; i < self.locations.length; i++) {
        self.path.push(self.locations[i].coords);
    }
    

    var addClickHandlerToMarker = function(marker, url) {
        marker.addListener('click', function() {
            window.location.href = url;
        })
    }
    
    var setPath = function() {
        var travelPath = new google.maps.Polyline({
            path: self.path,
            geodesic: true,
            strokeColor: '#3266ba',
            strokeOpacity: 0.5,
            strokeWeight: 3
        });
    
        travelPath.setMap(self.map);
    }

    function init() {
        var bounds = new google.maps.LatLngBounds();
    
        self.map = new google.maps.Map(document.getElementById('map'), {
            // options
            gestureHandling: 'cooperative',
            styles: mapstyles.WY
        });
    
        for(var i = 0; i < self.locations.length; i++) {
            var location = self.locations[i];
            var settings = {
                position: location.coords,
                map: self.map
            };
    
            if(i == 0) {
                settings.label = self.currentLocationIcon;
            }
            else if (i == (self.locations.length - 1)) {
                settings.label = self.homeIcon;
            }
    
            var marker = new google.maps.Marker(settings);

            addClickHandlerToMarker(marker, location.url);
    
            self.markers.push(marker);
            bounds.extend(marker.position);
        }
    
        self.map.fitBounds(bounds);
        setPath();
    }

    return {
        init: init
    }
}





