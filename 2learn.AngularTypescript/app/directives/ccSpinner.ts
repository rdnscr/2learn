module angularTypescript {
    class CcSpinner {
        public directive = {
            link: (scope, element, attrs) => this.link(scope, element, attrs),
            restrict: 'A'
        };

        constructor(public $window: any) {
            
        }

        public link(scope, element, attrs): void {
            scope.spinner = null;
            scope.$watch(attrs.ccSpinner, (options) => {
                if (scope.spinner) {
                    scope.spinner.stop();
                }
                scope.spinner = new this.$window.Spinner(options);
                scope.spinner.spin(element[0]);
            }, true);
        }
    }

    angular.module('app').directive('ccSpinner', ['$window', ($window) => new CcSpinner($window).directive]);
}