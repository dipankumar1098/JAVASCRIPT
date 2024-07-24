class Account{
    acc_Bal=0;
    min_Bal=500;
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    withdrawl(cash){
        this.acc_Bal= this.acc_Bal - cash;
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}
let a1=new Account();
a1.deposit_Amount(5000);
a1.withdrawl(15);
console.log(a1)
console.log(a1.get_Bal())