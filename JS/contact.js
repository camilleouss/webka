ymaps.ready(init);

function init() {
   var myMap = new ymaps.Map("map", {
      center: [43.237161, 76.945626],
      zoom: 11
   })

   var worldOffices = [myGeoObject = new ymaps.GeoObject({}),

   myMap.geoObjects
      .add(myGeoObject)

      .add(new ymaps.Placemark([43.267125, 76.939015], {
         // Two types of title 
         hintContent: '<h2>Mametova street, 47</h2>',
         balloonContent: '<h2>Mametova street, 47</h2>'
      },
         {
            iconLayout: 'default#image',
            iconImageHref: 'img/iconMarker.png',
         }))



      .add(new ymaps.Placemark([40.760375, -73.972754], {
         hintContent: '<h2>New York</h2>',
         balloonContent: '<h2>New York</h2>'
      },
         {
            iconLayout: 'default#image',
            iconImageHref: 'img/iconMarker.png',
         }))
   ]
};