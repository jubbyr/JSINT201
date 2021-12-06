//array.join(separator)  //syntax


let cryptocurrency = new Array('BTC','BNB','ETH','XRP')
console.log(cryptocurrency.join());
console.log(cryptocurrency.join('/'));
console.log(cryptocurrency.join(' and '));
console.log(cryptocurrency.join(' or anything '));

const add= function (n1,n2){
    //n1 and n2 are local scope
    return n1+n2;
};
console.log(5,2);
console.log(10,20);
console.log(1,4);

function operator(n1,n2,fn){
  return fn(n1,n2); //not equals to "return fn"
}

let addResult3=operator(5,3, add); //not equals to "operator(5"
console.log(addResult3);



let result =10;
const add= function (n1,n2){
    //n1 and n2 result are local scope
    let result = 0;
    result = n1+n2;
    console.log(`result: ${result}`); //??  n1+n2
    return n1+n2;
};
console.log(`result: ${result}`);  //10 
console.log(n1);//จะerror เพราะอยู่นอก function
console.log(5,2); //n1=5,n2=2,result =7(แต่resultจะอยู่ในข้างบนอ้างถึงไม่ได้อีก)
console.log(10,20);
console.log(1,4);



let result =10;
const add= function (n1,n2){
    //n1 and n2 result are local scope
    console.log(`result in add() is ${result}`); //10
    result = n1+n2;

    console.log(`result: ${result}`); //??  n1+n2
    return n1+n2;
};
console.log(`result: ${result}`) //10




