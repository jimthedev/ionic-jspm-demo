import angular from 'angular';
import 'angular-ui-router';

import sharedHomeIndexTemplate from './home-index.template.html!text';

export var homeIndexRouteModule = angular.module('appModule.homeIndexRouteModule', [
  'ui.router'
]).config([
  '$stateProvider',
  function homeRoute($stateProvider) {
    $stateProvider.state('home.index', {
      url: '/index',
      views: {
        'home-contents': {
          template: sharedHomeIndexTemplate
        }
      }
    }).state('tabs.home.index', {
      url: '/index',
      views: {
        'home-contents': {
          template: sharedHomeIndexTemplate
        }
      }
    });
  }
]).
controller('HomeIndexCtrl', [function(){
  console.log('In HomeIndexCtrl');
}]);