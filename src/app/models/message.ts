export class Message {
    constructor(public header:string,
                public body:string,
                public id:number = null) {
    }
}