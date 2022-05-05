

 map = L.map('map').setView([39.070,35.530],7);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(map);







// Geoserver ekleme linki

 nexrad = L.tileLayer.wms("http://127.0.1.1:8080/geoserver/wms/nexrad/n0r.cgi", 
 {
     
    
    layers:' GIS:yenituzla,GIS:mahallenoktaadi1,GIS:mahalle_adi ' , 
        
    format: 'image/png',
    transparent:true,
    attribution: "Weather data © 2012 IEM Nexrad"

 
}) 

.addTo(map);

