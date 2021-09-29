class love{
    constructor(){
        this.heart='i love you';
    }
}
class child extends love{
    constructor(name){
        super();
        this.name=name;
    }
}
const baby=new child('Tarin');
const baby2=new child('nidi');
console.log(baby,baby2);