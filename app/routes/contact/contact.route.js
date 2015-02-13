import angular from 'angular';
import 'angular-ui-router';

import sharedContactTemplate from './contact.template.html!text';

export var contactRouteModule = angular.module('appModule.contactRouteModule', [
  'ui.router'
]).config([
  '$stateProvider',
  function contactRoute($stateProvider) {
    $stateProvider.state('tabs.contact', { // Loaded inside of tabs, in a sub view
      url: '/contact',
      views: {
        'contact-tab': {
          template: sharedContactTemplate
        }
      }
    }).state('contact', { // Loaded outside of tabs, in the root view
      url: '/contact',
      template: sharedContactTemplate
    });
  }
]).controller('ContactCtrl', [function() {
}]);