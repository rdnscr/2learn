var angularTypescript;
(function (angularTypescript) {
    var CcSidebar = (function () {
        function CcSidebar() {
            this.directive = {
                link: this.link,
                restrict: 'A'
            };
        }
        CcSidebar.prototype.link = function (scope, element, attrs) {
            var $sidebarInner = element.find('.sidebar-inner');
            var $dropdownElement = element.find('.sidebar-dropdown a');
            element.addClass('sidebar');
            $dropdownElement.click(dropdown);

            function dropdown(e) {
                var dropClass = 'dropy';
                e.preventDefault();
                if (!$dropdownElement.hasClass(dropClass)) {
                    hideAllSidebars();
                    $sidebarInner.slideDown(350);
                    $dropdownElement.addClass(dropClass);
                } else if ($dropdownElement.hasClass(dropClass)) {
                    $dropdownElement.removeClass(dropClass);
                    $sidebarInner.slideUp(350);
                }

                function hideAllSidebars() {
                    $sidebarInner.slideUp(350);
                    $('.sidebar-dropdown a').removeClass(dropClass);
                }
            }
        };
        return CcSidebar;
    })();

    angular.module('app').directive('ccSidebar', function () {
        return new CcSidebar().directive;
    });
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=ccSidebar.js.map
