let goToGoa=(success,failure)=>{ 
    let accBal=5000
    if(accBal>1500)
    {
        success("You can go to Goa")
    }
    else
    {
        failure("You can't go to Goa")
    }
}
goToGoa(()=>{},()=>{})