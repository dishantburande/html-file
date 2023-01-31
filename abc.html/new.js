function Person(firstName, lastName, age, sex) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
    this.printFullName = () => {
      console.log("Full name = ", this.firstName, this.lastName);
    };
  }
  
  Person.prototype.findegligibleOrNot = function findegligibleOrNot(minAge) {
    console.log(this.age);
    if (this.age > minAge) {
      console.log(this.firstName + " egligible ");
    } else {
      console.log(this.firstName + " not Egligible");
    }
  };
  
  function createNewStudents() {
    const person1 = new Person("yash", "prasad", 10, "M");
    const person2 = new Person("vaibhav", "prasad", 20, "M");
  
    person1.printFullName();
    person1.findegligibleOrNot(18);
    person2.printFullName();
    person2.findegligibleOrNot(18);
  }
  
  createNewStudents();
  