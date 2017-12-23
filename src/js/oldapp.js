(function ($) {
  // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 48,
          },
          1000,
          'easeInOutExpo',
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(() => {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54,
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(() => {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  });
}(jQuery)); // End of use strict

// Google Maps Scripts
let map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', () => {
  map.setCenter(new google.maps.LatLng(30.284376, -81.389987));
});

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  const mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 16,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(30.284376, -81.389987), // Luxe

    // Disables the default Google Maps UI components
    disableDefaultUI: false,
    scrollwheel: true,
    draggable: true,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        featureType: 'landscape',
        stylers: [
          {
            hue: '#FFBB00',
          },
          {
            saturation: 43.400000000000006,
          },
          {
            lightness: 37.599999999999994,
          },
          {
            gamma: 1,
          },
        ],
      },
      {
        featureType: 'road.highway',
        stylers: [
          {
            hue: '#FFC200',
          },
          {
            saturation: -61.8,
          },
          {
            lightness: 45.599999999999994,
          },
          {
            gamma: 1,
          },
        ],
      },
      {
        featureType: 'road.arterial',
        stylers: [
          {
            hue: '#FF0300',
          },
          {
            saturation: -100,
          },
          {
            lightness: 51.19999999999999,
          },
          {
            gamma: 1,
          },
        ],
      },
      {
        featureType: 'road.local',
        stylers: [
          {
            hue: '#FF0300',
          },
          {
            saturation: -100,
          },
          {
            lightness: 52,
          },
          {
            gamma: 1,
          },
        ],
      },
      {
        featureType: 'water',
        stylers: [
          {
            hue: '#0078FF',
          },
          {
            saturation: -13.200000000000003,
          },
          {
            lightness: 2.4000000000000057,
          },
          {
            gamma: 1,
          },
        ],
      },
      {
        featureType: 'poi',
        stylers: [
          {
            hue: '#00FF6A',
          },
          {
            saturation: -1.0989010989011234,
          },
          {
            lightness: 11.200000000000017,
          },
          {
            gamma: 1,
          },
        ],
      },
    ],
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  const mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  map = new google.maps.Map(mapElement, mapOptions);

  // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
  const image = 'img/map-marker.svg';
  const myLatLng = new google.maps.LatLng(30.284376, -81.389987);
  const beachMarker = new google.maps.Marker({
    position: myLatLng,
    map,
    icon: image,
  });
}
