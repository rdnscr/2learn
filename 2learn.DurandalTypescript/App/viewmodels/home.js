define(["require", "exports", "services/logger", "durandal/system"], function(require, exports, LoggerModule, system) {
    var Home = (function () {
        function Home() {
            this.title = 'Home';
            this.logger = new LoggerModule.Logger(system);
        }
        Home.prototype.activate = function () {
            this.logger.log(this.title + ' View Activated', null, this.title, true);
            return true;
        };
        return Home;
    })();
    exports.Home = Home;
});
//# sourceMappingURL=home.js.map
