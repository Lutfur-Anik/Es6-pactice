const add=(x,y)=>x+y;
const sum=(x,y)=>{
    const DoSum=x+y;
    const minus=x-y;
    const result=DoSum*minus;
    return result;
}


const result=sum(7,5);
console.log(result);