var angularTypescript;
(function (angularTypescript) {
    var CcWidgetMinimize = (function () {
        function CcWidgetMinimize() {
            this.directive = {
                link: this.link,
                template: '<i class="fa fa-chevron-up"></i>',
                restrict: 'A'
            };
        }
        CcWidgetMinimize.prototype.link = function (scope, element, attrs) {
            //$('body').on('click', '.widget .wminimize', minimize);
            attrs.$set('href', '#');
            attrs.$set('wminimize');
            element.click(minimize);

            function minimize(e) {
                e.preventDefault();
                var $wcontent = element.parent().parent().next('.widget-content');
                var iElement = element.children('i');
                if ($wcontent.is(':visible')) {
                    iElement.removeClass('fa fa-chevron-up');
                    iElement.addClass('fa fa-chevron-down');
                } else {
                    iElement.removeClass('fa fa-chevron-down');
                    iElement.addClass('fa fa-chevron-up');
                }
                $wcontent.toggle(500);
            }
        };
        return CcWidgetMinimize;
    })();

    angular.module('app').directive('ccWidgetMinimize', function () {
        return new CcWidgetMinimize().directive;
    });
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=ccWidgetMinimize.js.map
