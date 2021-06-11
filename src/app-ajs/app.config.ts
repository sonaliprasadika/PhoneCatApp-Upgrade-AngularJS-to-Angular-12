'use strict';
import * as angular from 'angular';

angular.
module('phonecatApp').
config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
    when('/phones', {
      template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', {
      template: '<show-details></show-details>'
    }).
    when('/sellPhones', {
      template: require('!raw-loader!./sell-phone/sell-phone.html'),
      controller: 'SellPhoneController'
    }).
    otherwise('/phones');
  }
]);
