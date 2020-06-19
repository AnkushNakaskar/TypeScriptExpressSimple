import {Request, Response} from 'express';
import {Controller, Get} from '@overnightjs/core';
import {ApplicationLogger} from '@logging/Logger'

let logger = ApplicationLogger.getAppLogger("TodoController");

@Controller('api')
export class TodoController {

    @Get(':msg')
    private getMessage(req: Request, res: Response) {

        logger.info("Request param : "+req.params.msg);
        logger.info("Request query : "+req.query.qs1);
        res.status(200).json({
            message: req.params.msg,
        });
    }
}
