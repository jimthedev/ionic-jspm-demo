System.config({
  "paths": {
    "*": "*.js",
    "ionic-jspm-demo/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.12",
    "angular-animate": "github:angular/bower-angular-animate@1.3.12",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.3.12",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.13",
    "ionic": "github:driftyco/ionic-bower@1.0.0-beta.14",
    "ionicons": "github:driftyco/ionicons@2.0.1",
    "text": "github:systemjs/plugin-text@0.0.2",
    "css": "github:systemjs/plugin-css@0.1.0",
    "github:angular-ui/ui-router@0.2.13": {
      "angular": "github:angular/bower-angular@1.3.12"
    },
    "github:angular/bower-angular-animate@1.3.12": {
      "angular": "github:angular/bower-angular@1.3.12"
    },
    "github:angular/bower-angular-sanitize@1.3.12": {
      "angular": "github:angular/bower-angular@1.3.12"
    },
    "github:driftyco/ionic-bower@1.0.0-beta.14": {
      "angular": "github:angular/bower-angular@1.3.12",
      "angular-animate": "github:angular/bower-angular-animate@1.3.12",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.3.12",
      "angular-ui-router": "github:angular-ui/ui-router@0.2.13",
      "css": "github:systemjs/plugin-css@0.1.0",
      "ionicons": "github:driftyco/ionicicons@2.0.1"
    },
    "github:driftyco/ionicons@2.0.1": {
      "css": "github:systemjs/plugin-css@0.1.0"
    }
  }
});

