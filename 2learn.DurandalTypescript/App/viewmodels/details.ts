import LoggerModule = require("services/logger");
import system = require("durandal/system");

export class Details {
    private title: string = 'Details';
    private logger: LoggerModule.Logger = new LoggerModule.Logger(system);

    constructor() {
        
    }

    public activate() {
        this.logger.log(this.title + ' View Activated', null, this.title, true);
        return true;
    }
}