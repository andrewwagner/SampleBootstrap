'use strict';

/**
 * @ngdoc directive
 * @name bootstrapSampleAppApp.directive:footer
 * @description
 * # footer
 */
angular.module('bootstrapSampleAppApp')
  .directive('footer', function () {
    return {
      templateUrl: '../../views/partials/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
