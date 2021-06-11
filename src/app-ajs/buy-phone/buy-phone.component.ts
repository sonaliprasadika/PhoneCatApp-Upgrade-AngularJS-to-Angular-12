'use strict';
import * as angular from 'angular';
// Register `phoneDetail` component, along with its associated controller and template
angular.
module('buyPhone', []).
component('buyPhone', {
    template: require('!raw-loader!./buy-phone.template.html'),
    controller: ['$scope',
        function BuyPhoneController($scope) {
            $scope.message = "Customer";
        }
    ]
});

// /**
//  * Create a wrapper directive for every angularjs component and
//  * add it to AppModule's declaration array.
//  */
// import { Directive, ElementRef, Injector } from '@angular/core';
// import { UpgradeComponent } from '@angular/upgrade/static';
//
// @Directive({
//     selector: 'buy-phone',
//     jit: true,
// })
// export class BuyPhoneDirective extends UpgradeComponent {
//     constructor(elementRef: ElementRef, injector: Injector) {
//         super('buyPhone', elementRef, injector);
//     }
// }
