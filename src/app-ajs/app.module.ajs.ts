'use strict';
import * as angular from 'angular';
import './core/core.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.module';
import {downgradeComponent} from '@angular/upgrade/static';
import {ShowDetailsComponent} from '../app/show-details.comonent/show-details.component';
import { downgradeInjectable } from '@angular/upgrade/static';
import { Heroes } from '../app/heroes';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngRoute',
  'core',
  'sellPhone',
  'buyPhone',
  'phoneDetail',
  'phoneList'
])
    .directive(
        'showDetails',
        downgradeComponent({ component: ShowDetailsComponent }) as angular.IDirectiveFactory
    )
    .factory('heroes', downgradeInjectable(Heroes));

