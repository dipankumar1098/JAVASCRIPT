for(let i=1;i<=1000;i++){
    let year=i;
    if(year%4==0 && (year%100!=0 || year%400==0))

    {
        console.log(i);
    }
    // else{
    //     console.log("not a leap year");
    // }
}
