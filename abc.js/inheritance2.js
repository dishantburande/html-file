class shape
{
    print_shape()
    {
        console.log("this is shape")
    }
}
class rectangle extends shape
{
    print_ractangle()
    {
        console.log("this is rectangular shape")
    }
}
class circle extends shape
{
    print_cicle()
    {
        console.log("this is circular shape")
    }
}
class square extends rectangle
{
    print_square()
    {
        console.log("square is a rectangle")
    }
}
var sqr1=new square();
sqr1.print_shape();
sqr1.print_ractangle();