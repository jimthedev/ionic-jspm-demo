// Vendor module dependencies
import angular from 'angular';
import 'angular-animate';
import 'angular-sanitize';
import ionic from 'ionic/js/ionic-angular';

// Vendor CSS dependencies
import 'ionicons/css/ionicons.min.css!css';

// Internal module dependencies
import {appConfigModule} from 'config/app.config';
import {tabsRouteModule} from 'routes/tabs/tabs.route';
import {homeRouteModule} from 'routes/home/home.route';
import {aboutRouteModule} from 'routes/about/about.route';
import {contactRouteModule} from 'routes/contact/contact.route';

// import the html summary of the current state
import navigationTemplate from './utils/navigation.template.html!text';
import currentStateTemplateDetails from './utils/currentStateTemplateDetails.template.html!text';

export var appModule = angular.module('appModule', [
  'ngAnimate',
  'ngSanitize',
  'ionic',
  appConfigModule.name,
  homeRouteModule.name,
  tabsRouteModule.name,
  aboutRouteModule.name,
  contactRouteModule.name

// Feel free to ignore the following controller. It is used to capture and show state
// information in this demo app as you navigate around.
]).controller('CurrentStateTemplateDetailsController',['$state', function($state) {

  var vm = this;

  // Get the state name
  this.currentState = $state.current.name;

  // See if it is inside tabs
  var tabsStateLocated = /tabs/gmi;
  this.isStateInsideTabs = tabsStateLocated.test($state.current.name);

}]).run(['$templateCache',function($templateCache){

  // Cache this in our app since we're using it on every page with an ng-include
  $templateCache.put('/utils/currentStateTemplateDetails.template.html', currentStateTemplateDetails);
  
}]).directive('navigation', function(){
  return {
    template: navigationTemplate
  };
}).directive('currentStateTemplateDetails', function(){
  return {
    template: currentStateTemplateDetails
  }
});