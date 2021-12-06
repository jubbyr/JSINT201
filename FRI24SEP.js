//destructuring assignment+rest parameter
[subject,students,...listOfStudents]=['INT201',50,'A','B','C'];
console.log(subject);
console.log(students);
console.log(listOfStudents);

//object destructuring assignment
({prodId,prodName} = {prodId:111,prodName:'Coke'});
console.log(prodId);
console.log(prodName);

({prodId,prodName,...rest} = {prodName:'Coke',prodId:111,prodPrice:10,prodStock:5});
console.log(prodId);
console.log(prodName);
console.log(rest);
rest.prodPrice = 100;
console.log(rest);
//rest ใช้กับ{}เป็นobj. ถ้าใช้กับ array []เป็น array


let letters =[...'Hello World'];
let value = '';
for(let[index,letter]of letters.entries()){
    console.log(`index: ${index}`);
    console.log(`letter: ${letter}`);
}

//function declaration
function sum(numbers){
    let total=0;//local variable
    for(let num of numbers) total+=num;
    return total;
}
console.log(sum([1,2,3])); //จะถูกเรียกใช้เมื่อเรียกsum ขึ้นมา และจะถูกลบทิ้งไป ไม่สามารถอ้างถึงได้
console.log(sum);
//calling function , function execution
sum([1,2,5,10]);


//function expression
const myFunc =function(numbers){  //const เพื่อไม่ให้ reassign ค่าใหม่
    let total=0;//local variable
    for(let num of numbers) total+=num;
    return total;
}
//calling function, function execution
console.log(myFunc([1,2,3])); 


//function expression+destructuring assignment
const myFunc =function([num1,num2],[value1,value2]){  //const เพื่อไม่ให้ reassign ค่าใหม่
    console.log(num1);
    console.log(num2);
    console.log(value1);
    console.log(value2);
}
//calling function, function execution
myFunc([10,20],[5,2]); 


//spread op.
const myFunc =function(num1,num2,num3){  //const เพื่อไม่ให้ reassign ค่าใหม่
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
//calling function, function execution with spread operator
myFunc(...[10,20,5]); 





// 1.
// function getCourse() {
//     return 'INT201 Client Side Programming I';}

let getCourse = () => 'INT201 Client Side Programming I';

//     //2.
//   function echo(text) {
//     return text;}
let echo = text => text ; 
//   //3.
//   function isKMUTTStudent(student) {
//     if (student.id.length == 13) return true;
//     else return false;}

let isKMUTTStudent = student => student.id.length == 13;


//4.
  function sum(num1, num2, num3) {
    return num1 + num2 + num3;}

//
let sum =(num1, num2, num3) => num1 + num2 + num3;

//   //5.
  function greetingSomeOne(name) {
    const greeting = ['hi', 'hello', 'hey'];
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
  }

//
const greetingSomeOne = name => {
    const greeting = ['hi', 'hello', 'hey'];
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
}


//ex
let products = [
    {prodId:1,price:10,amount: 2},
    {prodId:2,price:5,amount: 10}
];
//map คืนค่าเป็น elementที่ประบกอบด้วยelement ตัวใหม่ที่ได้จากการคำนวณ
let priceIncludeVat = products.map(
    (products) => product.price + products.price * 0.07
);
console.log(priceIncludeVat);

let totalAmt = products.reduce(
    (total,curProd) => (total +=curProd.amount),
    0
);
console.log(totalAmt);
//reduce combined ค่าทั้งหมดในarray โดย => มารวมค่าแบบไหนตามสูตรที่เรากำหนด

//ex for argument obj.
let products = [
    {prodId:1,price:10,amount: 2},
    {prodId:2,price:5,amount: 10}
];
function getProducts(){
    for(let i=0;i<arguments.length;i++){  //ใช้สำหรับตอนเราไม่มีความรู้เกี่ยวกับการใช้parameter
        console.log(arguments[i]) //return เพื่อให้เห็นข้อมูล
    }
}

getProducts(products);


//example for default parameter จะทำการdefault ให้ พวก  unknown หรือคต่าต่างๆที่เรากำหนดไว้
let products = [
    {prodId:1,price:10,amount: 2},
    {prodId:2,price:5,amount: 10}
];
function getProducts(products="unknown",total=0){
      
        console.log(products);
        console.log(total); 
}
getProducts(products);


function doSomething4(num3)
{
    num3=num;
    num3=777;
}

let num = 3;
doSomething4(num);
console.log(num);










