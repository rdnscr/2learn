var angularTypescript;
(function (angularTypescript) {
    var CcImgPerson = (function () {
        function CcImgPerson($window) {
            this.$window = $window;
            this.directive = {
                link: this.link,
                template: '<a href="#"><i class="fa fa-chevron-up"></i></a>',
                restrict: 'A'
            };
        }
        CcImgPerson.prototype.link = function (scope, element, attrs) {
            var $win = $(this.$window);
            element.addClass('totop');
            $win.scroll(toggleIcon);

            element.find('a').click(function (e) {
                e.preventDefault();

                // Learning Point: $anchorScroll works, but no animation
                //$anchorScroll();
                $('body').animate({ scrollTop: 0 }, 500);
            });

            function toggleIcon() {
                $win.scrollTop() > 300 ? element.slideDown() : element.slideUp();
            }
        };
        return CcImgPerson;
    })();

    angular.module('app').directive('ccScrollToTop', ['$window', function ($window) {
            return new CcImgPerson($window).directive;
        }]);
})(angularTypescript || (angularTypescript = {}));
//# sourceMappingURL=ccScrollToTop.js.map
