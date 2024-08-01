function cal(a,b,op)
        {
            if(op=="sum")
            {
                return a+b;
            }
            if(op="mul")
            {
                return a*b;
            }
        }
let r1=cal(10,20,"sum")
let r2=cal(10,20,"mul")

console.log(r1);
console.log(r2);