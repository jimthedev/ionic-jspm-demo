import angular from 'angular';
import {appModule} from 'app';

angular.element(document).ready(function() {
  angular.bootstrap(document.querySelector('[data-main-app]'), [
    appModule.name
  ], {
    strictDi: true
  });
});