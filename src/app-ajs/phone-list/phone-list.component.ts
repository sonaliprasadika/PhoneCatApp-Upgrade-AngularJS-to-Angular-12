'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    template: require('!raw-loader!./phone-list.template.html'),
    controller: ['Phone', 'heroes',
      function PhoneListController(Phone, heroes) {
        this.phones = Phone.query();
        this.orderProp = 'age';
        console.log('Service from Angular: ' + heroes.get());
      }
    ]
  });
