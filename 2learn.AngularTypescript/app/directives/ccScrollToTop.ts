module angularTypescript {
    class CcImgPerson {       
        public directive = {
            link: this.link,
            template: '<a href="#"><i class="fa fa-chevron-up"></i></a>',
            restrict: 'A'
        };

        constructor(public $window: any) {
            
        }

        public link(scope, element, attrs): void {
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
        }
    }

    angular.module('app').directive('ccScrollToTop', ['$window', ($window) => new CcImgPerson($window).directive]);
}