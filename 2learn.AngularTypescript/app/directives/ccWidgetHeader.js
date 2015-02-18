var angularTypescript;
(function (angularTypescript) {
    var CcWidgetHeader = (function () {
        function CcWidgetHeader() {
            this.directive = {
                link: this.link,
                scope: {
                    'title': '@',
                    'subtitle': '@',
                    'rightText': '@',
                    'allowCollapse': '@'
                },
                templateUrl: '/app/layout/widgetheader.html',
                restrict: 'A'
            };
        }
        CcWidgetHeader.prototype.link = function (scope, element, attrs) {
            attrs.$set('class', 'widget-head');
        };
        return CcWidgetHeader;
    })();

    angular.module('app').directive('ccWidgetHeader', function () {
        return new CcWidgetHeader().directive;
    });
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=ccWidgetHeader.js.map
