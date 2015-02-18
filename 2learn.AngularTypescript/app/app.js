/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var angularTypescript;
(function (angularTypescript) {
    'use strict';

    angularTypescript.app = angular.module('app', [
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'common',
        'common.bootstrap',
        'ui.bootstrap'
    ]);

    // Handle routing errors and success events
    angularTypescript.app.run([
        '$route', function ($route) {
            // Include $route to kick start the router.
        }]);
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=app.js.map
