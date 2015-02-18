var angularTypescript;
(function (angularTypescript) {
    var CcSpinner = (function () {
        function CcSpinner($window) {
            var _this = this;
            this.$window = $window;
            this.directive = {
                link: function (scope, element, attrs) {
                    return _this.link(scope, element, attrs);
                },
                restrict: 'A'
            };
        }
        CcSpinner.prototype.link = function (scope, element, attrs) {
            var _this = this;
            scope.spinner = null;
            scope.$watch(attrs.ccSpinner, function (options) {
                if (scope.spinner) {
                    scope.spinner.stop();
                }
                scope.spinner = new _this.$window.Spinner(options);
                scope.spinner.spin(element[0]);
            }, true);
        };
        return CcSpinner;
    })();

    angular.module('app').directive('ccSpinner', ['$window', function ($window) {
            return new CcSpinner($window).directive;
        }]);
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=ccSpinner.js.map
