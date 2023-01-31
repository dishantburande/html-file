class count_objects{
    static j=0;
    constructor(){
        count_objects.j=count_objects.j+1;

    }
}
let a = new count_objects()
let b =new count_objects()
let c= new count_objects()
let d= new count_objects()
//let e = new count_objects()
console.log(count_objects.j);