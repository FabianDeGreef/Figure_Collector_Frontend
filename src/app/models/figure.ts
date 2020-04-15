export class Figure{

    _id?: string;   
    issue:string;
    name:string;
    description:string;
    price:string;
    height:string;
    edition:string;
    collected:boolean;
    imageUrl:string;

    constructor(issue:string,name:string,description:string,price:string,height:string,edition:string,collected:boolean, imageUrl:string,_id?: string){
        this.issue = issue;
        this.name = name;
        this.description = description;
        this.price = price;
        this.height = height;
        this.edition = edition;
        this.collected = collected;
        this.imageUrl = imageUrl;
        this._id = _id;
    }
}
