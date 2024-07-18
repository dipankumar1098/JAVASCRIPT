function f(str)
{
    let count=0;
    for(char of str)
    {
        if(char=="a" || char=="i" || char=="e" || char=="o" || char=="u")
        {
            count++;
        }
    }
    console.log(count)
}
f("apna college")