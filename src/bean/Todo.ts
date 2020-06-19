import {Expose, plainToClass} from "class-transformer";

export class Todo {
    @Expose() ids: number | undefined;
    @Expose() userId: number| undefined;
    @Expose() id: number| undefined;
    @Expose() title: string| undefined;
    @Expose() done: boolean| undefined;
    getTitle() {
        return this.title;
    }

    isDone() {
        return this.done;
    }
}
