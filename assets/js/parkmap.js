var ParkMap = function(parks, mapId, zoomLevel) {
    var self = this;
    self.mapId = mapId;
    self.zoomLevel = zoomLevel || null;
    self.map = null;
    self.markers = [];
    self.parks = parks;
    self.infowindow = null;
    self.visitedIcon = '/assets/img/markers/pin-green.png';
    self.notVisitedIcon = '/assets/img/markers/pin-gray.png';

    function addClickHandlerToMarker(marker, park) {
        marker.addListener("click", function() {
            self.infowindow.close();
            self.infowindow.setContent(park.name);
            self.infowindow.open(self.map, marker);
        });
    }


    function init() {
        self.infowindow = new google.maps.InfoWindow();
        var bounds = new google.maps.LatLngBounds();
    
        var mapSettings = {
            gestureHandling: 'cooperative',
            styles: mapstyles.WY,
            controlSize: 22
        };

        self.map = new google.maps.Map(document.getElementById(self.mapId), mapSettings);
    
        for(var i = 0; i < self.parks.length; i++) {
            var park = self.parks[i];
            var icon = park.visited ? self.visitedIcon : self.notVisitedIcon;

            var marker = new google.maps.Marker({
                position: { lat: park.lat, lng: park.lng },
                map: self.map,
                icon: { url: icon },
            });

            addClickHandlerToMarker(marker, park);
            self.markers.push(marker);

            bounds.extend(marker.position);

            if(self.zoomLevel === null) {
                self.map.fitBounds(bounds);
            }
        }

        if(self.zoomLevel !== null) {
            self.map.setCenter(bounds.getCenter());
            self.map.setZoom(self.zoomLevel);
        }
    }

    return {
        init: init
    }
}





