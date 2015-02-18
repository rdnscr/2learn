module common {
    'use strict';    

    /**
     * Services that persists and retrieves TODOs from localStorage.
     */
    export class Spinner {
        constructor(private common: common.Common, private commonConfig: common.CommonConfig) {
        }

        public spinnerHide(): void {
            this.spinnerToggle(false);
        }

        public spinnerShow(): void {
            this.spinnerToggle(true);
        }

        private spinnerToggle(show): void {
            this.common.$broadcast(this.commonConfig.config.spinnerToggleEvent, { show: show });
        }
    }

    //Register at angulars DI
    angular.module('common').factory('spinner', ['common', 'commonConfig', Spinner]);
}