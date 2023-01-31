class Student {
  constructor(firstName, lastName , rollNumber , age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.rollNumber= rollNumber;
      this.age=age;
      //complete this function to initialize the object
  }
  
  printFullName() {
      //complete this function to print the full Name of the student object invoking the method
     this.printFullName = () => {
         console.log(this.firstName,this.lastName);
  }
  
  minorOrMajor(){
     //If age greater than 18 print Major
     //if age less than 18 print Minor
     //Complete this function
      if (this.age >= 18) {
  console.log("Major");
} else {
  console.log("Minor");
}
  
}
function createNewStudents(){
  const student1 = new student("yash", "prasad", 12, 27);
  const student2 = new student("vaibhav", "prasad", 14, 15);
  
  student1.printFullName();
  student1.minorOrMajor();
  student2.printFullName();
  student2.minorOrMajor();
}    
  
  //create 2 object Yash and Ram with initial values as mentioned in question


  //Print yash's full name by invoking printFullName()   
  

  //Print whether yash is minor or major by invoking minorOrMajor function
 

 //Print Rams's full name by invoking printFullName()  
  

  //Print whether Ram is minor or major by invoking minorOrMajor function

}

async function readInput() {
      let inputString = '';
      var output=[];
      process.stdin.on('data', inputStdin => {
          inputString += inputStdin;
          const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
          const argumentsArr = inputArr[0].split(',');
          createNewStudents()
          process.exit();
          
      })
      

}
readInput();