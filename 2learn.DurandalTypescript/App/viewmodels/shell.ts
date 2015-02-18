import LoggerModule = require("services/logger");
import system = require("durandal/system");
import router = require("plugins/router");

export class Shell {
    private system: DurandalSystemModule = system;
    private router: DurandalRootRouter = router;
    private logger: LoggerModule.Logger = new LoggerModule.Logger(system);

    constructor() {
        
    }

    //#region Internal Methods
    public activate() {
        return this.boot();
    }

    public boot() {
        this.log('Hot Towel SPA Loaded!', null, true);

        this.router.on('router:route:not-found', function (fragment) {
            this.logError('No Route Found', fragment, true);
        });

        var routes = [
            { route: '', moduleId: 'home', title: 'Home', nav: 1 },
            { route: 'details', moduleId: 'details', title: 'Details', nav: 2 }];

        return this.router.makeRelative({ moduleId: 'viewmodels' }) // router will look here for viewmodels by convention
            .map(routes)            // Map the routes
            .buildNavigationModel() // Finds all nav routes and readies them
            .activate();            // Activate the router
    }

    public log(msg, data, showToast) {
        this.logger.log(msg, data, system.getModuleId(this), showToast);
    }

    public logError(msg, data, showToast) {
        this.logger.logError(msg, data, system.getModuleId(this), showToast);
    }
    //#endregion
}