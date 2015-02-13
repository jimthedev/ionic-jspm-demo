import angular from 'angular';
import 'angular-ui-router';

import {homeRouteModule} from '../home/home.route';
import tabsTemplate from './tabs.template.html!text';

export var tabsRouteModule = angular.module('appModule.tabsRouteModule', [
  'ui.router'
]).config([
  '$stateProvider',
  ($stateProvider) => {
    $stateProvider.state('tabs', {
      abstract: true,
      url: '/tab',
      template: tabsTemplate
    });
  }
]);