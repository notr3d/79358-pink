var myCenter=new google.maps.LatLng(59.936291, 30.321001);
            function initialize()
            {
            var mapProp = {
              center:myCenter,
              zoom:18,
              mapTypeId:google.maps.MapTypeId.ROADMAP
              };
            var map=new google.maps.Map(document.querySelector(".map__container"),mapProp);

            var marker=new google.maps.Marker({
              position:myCenter,
              icon:"img/misc/map-marker.svg"
              });
            marker.setMap(map);
            }
            google.maps.event.addDomListener(window, "load", initialize);