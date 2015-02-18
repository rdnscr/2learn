module common {
    'use strict';

    export class CommonConfig {
        public config: any = {
            // These are the properties we need to set
            //controllerActivateSuccessEvent: '',
            //spinnerToggleEvent: ''
        };

        constructor() {
        }

        public $get(): any {
            return {
                config: this.config
            };
        }
    }

    var commonModule = angular.module('common', []);
    commonModule.provider('commonConfig', CommonConfig);
} 