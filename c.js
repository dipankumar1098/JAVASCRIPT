class Account{
    acc_id;
    acc_name;
    acc_bal;
    constructor(id,name,bal)
    { 
        this.acc_id=id;
        this.acc_name=name;
        this.acc_bal=bal;
    }
}
let a=new Account(101, 'rahul',5000)
let b=new Account(102,'sonia',4000)
let c=new Account(103,'priyanka', 6000)