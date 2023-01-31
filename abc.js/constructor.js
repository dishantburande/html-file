class student 
{
  constructor(name,roll_no,grade,marks)
  {
  this.name=name;
  this.roll_no=roll_no;
  this.grade=grade;
  this.marks=marks;
  }
}
var std1=new student("pappu",5,"A",80)
console.log("Name of student is " +std1.name)
console.log("Roll no " +std1.roll_no)
console.log("Marks Obtained " +std1.marks)
console.log("Grade " +std1.grade)

