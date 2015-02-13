import angular from 'angular';
import 'angular-ui-router';

import tabsAboutTemplate from './tabs.about.template.html!text';
import aboutTemplate from './about.template.html!text';

export var aboutRouteModule = angular.module('appModule.aboutRouteModule', [
  'ui.router'
]).config([
  '$stateProvider',
  function aboutRoute($stateProvider) {
    $stateProvider.state('tabs.about', { // Loaded inside of tabs, in a sub view
      url: '/about',
      views: {
        'about-tab': {
          template: tabsAboutTemplate
        }
      }
    }).state('about', { // Loaded outside of tabs, in the root view
      url: '/about',
      template: aboutTemplate
    });
  }
]).controller('AboutTabCtrl', [function() {
  console.log('AboutTabCtrl');
}]).controller('AboutCtrl', [function(){
  console.log('AboutCtrl');
}]);