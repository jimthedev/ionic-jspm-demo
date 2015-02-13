import angular from 'angular';
import 'angular-ui-router';

export var appConfigModule = angular.module('appConfigModule', [
  'ui.router'
]).config([
  '$urlRouterProvider', '$httpProvider', '$compileProvider',
  function ($urlRouterProvider, $httpProvider, $compileProvider) {
    $httpProvider.useApplyAsync(true);
    $compileProvider.debugInfoEnabled(false);
    $urlRouterProvider.otherwise('/tab/home/index');
  }
]);

/*
.run([
  '$rootScope',
  function($rootScope) {
    $rootScope.$on('$stateChangeError', function $stateChangeError(event, toState,
      toParams, fromState, fromParams, error) {
      console.group();
      console.error('$stateChangeError', error);
      console.error(error.stack);
      console.info('event', event);
      console.info('toState', toState);
      console.info('toParams', toParams);
      console.info('fromState', fromState);
      console.info('fromParams', fromParams);
      console.groupEnd();
    });

    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){ 
	    console.log(unfoundState.to); // "lazy.state"
	    console.log(unfoundState.toParams); // {a:1, b:2}
	    console.log(unfoundState.options); // {inherit:false} + default options
	});
  }
]); */