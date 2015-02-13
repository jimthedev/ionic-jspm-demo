import angular from 'angular';
import 'angular-ui-router';

import {homeIndexRouteModule} from './index/home-index.route';

export var homeRouteModule = angular.module('appModule.homeRouteModule', [
  'ui.router',
  homeIndexRouteModule.name
]).config([
  '$stateProvider',
  function homeRoute($stateProvider) {
    $stateProvider.state('tabs.home', {
      abstract: true,
      url: '/home',
      views: {
        'home-tab': {
          template: '<ion-nav-view name="home-contents"></ion-nav-view>'
        }
      }
    }).state('home', {
      url: '/home',
      abstract:true,
      template: '<ion-nav-view name="home-contents"></ion-nav-view>'
    });
  }
]).controller('HomeTabCtrl', ['$scope', function($scope) {
  console.log('HomeTabCtrl');
}]);