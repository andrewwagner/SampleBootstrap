'use strict';

/**
 * @ngdoc directive
 * @name bootstrapSampleAppApp.directive:topNav
 * @description
 * # topNav
 */
angular.module('bootstrapSampleAppApp')
  .directive('topNav', function () {
    return {
      scope: {},
      templateUrl: '../../views/partials/topNav.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the topNav directive');
        var docElem = document.documentElement,
          header = element[0].querySelector( '.navbar-shrink' ),
          didScroll = false,
          changeHeaderOn = 300;

        scope.shrink = false;

        function init() {
          scrollPage();
          window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
              didScroll = true;
              setTimeout( scrollPage, 250 );
              scope.$apply();
            }
          }, true );
        }

        function scrollPage() {
          console.log('scrolling');
          var sy = scrollY();
          console.log(sy);
          if ( sy >= changeHeaderOn ) {
            console.log('here');
            scope.shrink = true;
          } else {
            scope.shrink = false;
              // classie.remove( header, 'cbp-af-header-shrink' );
          }
          console.log(scope.shrink);
          didScroll = false;
        }

        function scrollY() {
          return window.pageYOffset || docElem.scrollTop;
        }
        init();
      }
    };
  });
