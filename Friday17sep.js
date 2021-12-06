//#1
let num1=10;
let num2=20;
num2=num1; //assign แค่ค่า 
num2=55;
console.log(num1) //num1=10
console.log(num2) //num2=55 เพราะว่าหลังจาก
//#2
let std1={id:1,name:"Susan"};
let std2={id:2,name:"John"};
std2=std1;//std1 assign value (memory address) points to the same memory address
std2.name="Peter";
console.log(std1) //std1=id:1 name="Susan"
console.log(std2) //std2=id:1 name="Peter"

console.log(num1==num2) //num1==num2 ? primitive values are compared
console.log(std1==std2) //std1==std2 ? memory address are compared


//#3
function doSomething1(student){ //student is a formal parameter //student=std3
    student.id=63130500161; 
}
let std3={id:3 ,name: "Joe"};
doSomething1(std3); //std3 is an actual parameter
console.log(std3); // id:63130500161 ,name: "Joe"
//obj เมื่อใดที่มีการพูดถึง obj จะเป็น memories address ทันที ทำให้ค่าที่เปลี่ยนไปเป็นid:63...
//#4
function doSomething2(num){
    num=555;
}
let num3 =1;
doSomething2(num3);
console.log(num3); // =1
//แต่พอมาเป็น int(primitive value) ที่เป็นปกติ ทำให้ 555 ไม่ได้ assign ค่าเข้าไปใน num3 จึงมีค่าเป็น1 

let arr1 = [10,'in progress',true,1];
console.log(arr1[0]); //[integer expression]
console.log(arr1.length);
console.log(arr1[  arr1  [  arr1.length-1  ]  ]  )


let colors=[
    ['pink','red'], //element#1
    ['yellow','orange','brown'] //element#2
];
console.log(colors[0][1]);  //มิติที่1 อ้าง [0] set ที่1  ['pink','red'] มิติที่2 เผื่อเข้าถึง element ในarray
console.log(colors[1][2]);
console.log(colors[0].length-1); //output=1 จำนวนelementของnested array 
console.log(colors.length-1); //output=1 จำนวนelementของnested array 
console.log(colors[0][colors[0].length-1]); //output=red
console.log(colors[colors.length-1][colors[0].length-1]); //output=orange
console.log(colors[colors.length-1][colors[1].length-1]); //output=brown
//access the last element of the last 2nd dimension array

let arr =[1,2,3,4];
let arr2=arr;
arr2[1] = 999;
console.log(arr); //[ 1, 999, 3, 4 ]

function doSomething(temp){
    for(let i=0;i<temp.length;i++){
        temp[i]=temp[i] *2;
    }
}
doSomething(arr);
console.log(arr); //[ 2, 1998, 6, 8 ]


let students=[
    {id:1 ,name:"Ann"},
    {id:2,name:"Susan"},
    {id:3, name:"John"}
];
//แก้ไขชื่อตัวสุดท้าย
console.log(students[0]);
students[students.length-1].name='Umaporn'; //อ้างถึงelement ในarray โดยต้องมีก้ามปู
console.log(students[students.length-1]);

 //...spread operator on an iterable obj.
let students2=[1,...students,100];
students2[1].name="XYZ";
console.log(students2);
