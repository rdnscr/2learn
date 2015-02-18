import LoggerModule = require("services/logger");
import system = require("durandal/system");

export class Home {
    private title: string = 'Home';
    private logger: LoggerModule.Logger = new LoggerModule.Logger(system);

    constructor() {

    }

    public activate() {
        this.logger.log(this.title + ' View Activated', null, this.title, true);
        return true;
    }
}