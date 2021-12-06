const MAX_STUDENT=50

let maxStudent=50

const player1={id:1,name:'Adam'};  //ถ้าเกิดมีการให้ค่าใดๆในconst จะไม่สามารถเปลี่ยนแปลงค่าได้ แต่propertiesสามารถmodifiedได้อยู่
let player2={id:2,name:'John'};
// player1=player2; //memory address, cann't assign
player2=player1;//player1 address assigns to p.2
//setter-mutator methods/mutated(modified) syntax แก้ไขค่า
player1.id=5; //or player1["id"]=5;
player1.name="Mary";

//getter-accessor method
console.log(player1);
console.log(player2); //?ได้อะไร เหมือนกับplayer 1 เพราะ player2=player1;


//ชนิดข้อมูลและข้อดีของการใช้ชนิดข้อมูล
//#0 variable with single values
// let product1='coke';
// let product2='Pepsi';
// let price1=15;
// let price2=13;
//#1 array set of multiple values 
let product =["Coke","Pepsi"];
let price = [15,13];
//0และ1  เป็นข้อมูลที่คนละเรื่องคนละด้านไม่มีอะไรย่อย เป็นอิสระจากกันได้เลย เลยมักแยกตัวแปรออกจากกัน
//#2 objในarray
//array of objects
//products อันนี้มี 2 item
let products=[
    {product:"Coke",price:15}, //obj 
    {product:"Pepsi",price:13}
];
//เหมาะกับ inventory ของproduct เก้บข้อมูลที่เป็ร array ของ product พวก stock  สินค้ามีอะไรบ้างในinventoryเรา
//แบบ2,3 ต่างกันยังไง สถานการณ์ไหนเหมาะกับแบบ2และอันไหนเหมาะกับแบบ3
//แบบ2 เหมาะกับ
//#3 arrayในobj 
//object with array value {propertyKey: propertyValue1,propertykey2:propertyValue2}
//ในนี้มี2 property   keyแรกเป็น products ชนิดข้อมูลvalue:array    values price ก็เป็น array
//concept array คือมีหลายๆค่าได้
// let product2 ={
//     products:["Coke","Pepsi"],
//     prices: [15,13]
// };
let product2 ={
    productName:"iPhone6",
    colors: ['green','red','black'],
    distributers:[x,y,z]
};
//arrayของcolor  เหมาะกับค่าที่เกี่ยวข้องกันมักเก้บไว้ในobj ลักษณะของobj นั้นๆมาdesign เป้น properties


//constructor function
//#วิธีปกติ onject literal ไม่ผูกพันธ์กับชื่อ class
let dice1={
    faceValue: 0,
    // roll:function(){
    // return Math.floor(Math.random()*6)+1;
// }
};
console.log(dice1);
console.log(dice1.roll());

let dice2={
    faceValue: 0 
    //ต้องมี math random
};
console.log(dice2);
console.log(dice2.roll()); 
//ถ้าไม่มีclass แล้วอยากให้functionใช้งานroll ได้ด้วยคือต้องเอาfuntion มาใส่ roll:function(){
 //   return Math.floor(Math.random()*6)+1;ถึงจะใช้ roll ได้
 //ซึ่งถ้ามีหลายobj ก็ต้องมานั่งcopy

 //#2ลองทำโดยใช้ class
 class Dice{
    roll(){
        return Math.floor(Math.random()*6)+1;
    }
 }
let dice1 = new Dice();
console.log(dice1);
console.log(dice1.roll());
let dice2 = new Dice();
console.log(dice2);
console.log(dice2.roll());


class Dice{
    constructor(gameTitle){
        console.log('constructor is working');
        this._diceName = gameTitle;
        this._faceValue=0;  //this ควรตามด้วยหน้า12 javascriptobj.   //ในการสร้างconstructor
        if(this._diceName === undefined){
            this._diceName = "Unknown"
        } else{
            this._diceName=gameTitle;
        }    
    }    
    roll(){
        this._faceValue = Math.floor(Math.random()*6)+1;
        return this._faceValue;
    }
    get faceValue(){
        console.log("getter working")
        return this._faceValue;
    }
    set faceValue(faceValue){
        console.log("setter working")
        this._faceValue=faceValue;
    }
    toString(){
        return `game = ${this._diceName},faceValue = ${this._faceValue}`;
    }
 }
let dice1 = new Dice("Hi-Lo");
console.log(dice1);
console.log(dice1.roll());

console.log(dice1.faceValue); 
//or
console.log(dice1['faceValue']);
dice1['faceValue']=5;
console.log(dice1);
console.log(dice1.toString());
// let dice2 = new Dice();
// console.log(dice2);
// console.log(dice2.roll());
//เมื่อไหร่ก็ตามที่เราสร้างobj แบบ ไม่มี fn เราไม่มีความจำเป็นต้องสร้างclass เลย แต่ถ้าทุกครั้งเรามีfn เพิ่มเติมแล้วต้องการให้ถูกตรวจสอบ
//จะต้องใช้class ทุกครั้ง

//ทุกๆclass จะมีobj ที่ชื่อprototype  เก็บโครงสร้างproperty ละก็ method
//เป้นวิธีการเพิ่มmethod ให้ dice เปรียบเสมือน มี obj tostring ในclass
Dice.prototype.toString = function(){
    return `game = ${this._diceName},faceValue = ${this._faceValue}`;
}
console.log(dice1.toString());
// console.log(dice2.toString());
console.log(Dice.prototype.isPrototypeOf(dice1));  //เพื่อเช็ค

let player1 = {id:1, name:"Adam"}  //let player 1  = new Object()
console.log(Object.prototype.isPrototypeOf(player1)); //เป็นการเช็คว่าprototype ของobj เป็น ptp ของ player1

let adminPlayer = Object.create(player1);
adminPlayer.level = 'super';
//prototype chaining
console.log(`${adminPlayer.id},${adminPlayer.name},${adminPlayer.level}`);



