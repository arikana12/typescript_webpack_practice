export default class SaySomething{
    message: string;

    constructor(message:string){
        this.message = message;
    }

    public sayText(el:HTMLElement | null){
        if(el){
            el.innerText = this.message;
        }
    }
}