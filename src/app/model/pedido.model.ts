export class Pedido{
    public id:number;
    private name:string;
    private detail:string;
    private status: string;
    constructor(name:string, detail:string, status:string){
        this.id = Math.random() * 10000;
        this.name = name;
        this.detail = detail;
        this.status = status;
    }
    setName(name:string){
        this.name = name;
    }
    setDetail(detail:string){
        this.detail = detail;
    }
    setStatus(status:string){
        this.status = status;
    }
    getName(): string{
        return this.name;
    }
    getDetail(): string{
        return this.detail;
    }
    getStatus(): string{
        return this.status;
    }
    setId(id: number){
        this.id = id;
    }
    getId(): number{
        return this.id;
    }
}
