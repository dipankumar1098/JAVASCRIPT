class a
{
    m1(){
        console.log("this is m1");
    }
    m2(){

        console.log("this is m2");
    }
}
class b extends a
{
    m3(){
        console.log("this is m3");
    }
}   
let c=new child();
console.log(c);
c.m1()
c.m2()
c.m3()
