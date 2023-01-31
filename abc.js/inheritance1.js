class Member
{
    constructor(name,age,phone_no,adress,salary)
    {
        this.name=name;
        this.age=age;
        this.phone_no=phone_no;
        this.adress=adress;
        this.salary=salary;
    }

 printDetails()
 {
    console.log(this.name)
    console.log(this.age)
    console.log(this.phone_no)
    console.log(this.adress)
   // console.log(salary)
 }
 printSalary()
 {
    console.log(this.salary)
 }
} 
class Employee extends Member 
{
    constructor(name,age,phone_no,adress,salary,specialization)
    {
        super(name,age,phone_no,adress,salary)
        this.specialization=specialization;
    }
    printDeatails()
    {
        super.printDetails();
        console.log(this.specialization);
    }
}
var employee1 = new Employee("Dishant",26,9503724783,"At post Dewada khurd",90000,"softwareEngineer")
employee1.printDeatails();