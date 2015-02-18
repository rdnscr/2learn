/// <reference path="../scripts/typings/toastr/toastr.d.ts" />
var config;
(function (_config) {
    'use strict';

    var app = angular.module('app');

    // Configure Toastr
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    // For use with the HotTowel-Angular-Breeze add-on that uses Breeze
    _config.remoteServiceName = 'breeze/Breeze';

    _config.events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        spinnerToggle: 'spinner.toggle'
    };

    _config.config = {
        appErrorPrefix: '[HT Error] ',
        docTitle: 'HotTowel: ',
        events: _config.events,
        remoteServiceName: _config.remoteServiceName,
        version: '2.1.0'
    };

    app.value('config', _config.config);

    app.config([
        '$logProvider', function ($logProvider) {
            // turn debugging off/on (no info or warn)
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
        }]);

    //#region Configure the common services via commonConfig
    app.config([
        'commonConfigProvider', function (cfg) {
            cfg.config.controllerActivateSuccessEvent = _config.config.events.controllerActivateSuccess;
            cfg.config.spinnerToggleEvent = _config.config.events.spinnerToggle;
        }]);
})(config || (config = {}));
//# sourceMappingURL=config.js.map
