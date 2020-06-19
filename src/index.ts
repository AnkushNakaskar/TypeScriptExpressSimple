import {Todo} from '@bean/Todo'
import {ApplicationLogger} from '@logging/Logger';
import {plainToClass} from "class-transformer";
import ExampleServer from "@server/ExampleServer";

let logger=ApplicationLogger.getAppLogger("main");


function convertJsonInputToObject(inputJsonString:string) {

    try {
        logger.info("Logger for file..this is new...")
        logger.error("Error level in logging")
    }catch (e) {
        logger.error("Exception in logging")
    }

    console.log( inputJsonString);

    let users =plainToClass(Todo,JSON.parse(inputJsonString), { excludeExtraneousValues: true });
    console.log("Users details")
    console.log(users)








}
// var inputJsonString="{\"id\": \"1123\",\"userId\": \"1\",\"test\": 1,\"idsxas\": 1,\"title\": \"Add Info about the new project\",\"done\": true}"
// convertJsonInputToObject(inputJsonString);

var server =new ExampleServer();
server.start(8786);
