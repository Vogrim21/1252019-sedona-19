var mapBlock = document.querySelector('#map');

if (mapBlock && typeof ymaps !== 'undefined') {
  var poster = mapBlock.querySelector('.products-offers__map-poster');

  var data = {
    center: [34.998633, -111.861734],
    controls: [],
    zoom: 7
  };
  var placemarkTemplate = '<div class="products-offers__placemark"></div>';

  ymaps.ready(function () {
    var map = new ymaps.Map(mapBlock.id, data);

    map.geoObjects.add(new ymaps.Placemark(
      data.center,
      null,
      {
        iconLayout: ymaps.templateLayoutFactory.createClass(placemarkTemplate)
      }
    ));
    map.behaviors.disable('scrollZoom');

    poster.classList.add('products-offers__map-poster--hidden');
  });
}
