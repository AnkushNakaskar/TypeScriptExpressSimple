import * as bodyparser from 'body-parser';
import * as controllers from "@controller/index";
import {ApplicationLogger} from '@logging/Logger'
import * as log4js from "log4js";
import {Server as server} from '@overnightjs/core';


let logger = ApplicationLogger.getAppLogger("http");


export class ExampleServer extends server {

    private readonly SERVER_STARTED = 'Example server started on port: ';

    constructor() {
        super(true);
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended: true}));
        this.app.use(log4js.connectLogger(logger, {level: 'info'}));
        this.setupControllers();
    }

    private setupControllers(): void {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = (controllers as any)[name];
                ctlrInstances.push(new controller());
            }
        }
        super.addControllers(ctlrInstances);
    }

    public start(port: number): void {
        this.app.get('*', (req, res) => {
            res.send("No mapping found");
        });
        this.app.listen(port, () => {
            logger.info(this.SERVER_STARTED + port);
        });
    }
}

export default ExampleServer;

