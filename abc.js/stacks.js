let data = [];
let currentsize = data.length;
let max = 5;

function Push(newVal){
    if(currentsize >=max){
     // alert("stack is full")
    }
    data[currentsize]=newVal;
    currentsize += 1;
 
}
function pop(){

if(currentsize >0){

currentsize -= 1;
data.length=currentsize;
 }
}

Push(20);
Push(30);
Push(50);
Push(10);
Push(55);
Push(80);
pop();
pop();
pop();



console.warn(data);
