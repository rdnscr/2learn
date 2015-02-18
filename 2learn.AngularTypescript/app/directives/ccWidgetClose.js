var angularTypescript;
(function (angularTypescript) {
    var CcWidgetClose = (function () {
        function CcWidgetClose() {
            this.directive = {
                link: this.link,
                template: '<i class="fa fa-remove"></i>',
                restrict: 'A'
            };
        }
        CcWidgetClose.prototype.link = function (scope, element, attrs) {
            attrs.$set('href', '#');
            attrs.$set('wclose');
            element.click(close);

            function close(e) {
                e.preventDefault();
                element.parent().parent().parent().hide(100);
            }
        };
        return CcWidgetClose;
    })();

    angular.module('app').directive('ccWidgetClose', function () {
        return new CcWidgetClose().directive;
    });
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=ccWidgetClose.js.map
