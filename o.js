class bank {
    min_bal=500;
    acc_bal=0;
    deposit(amount){
       this.acc_bal=this.acc_bal+amount;
    }
    withdrawal(amount){
        this.acc_bal=this.acc_bal-amount;
    }
    get_bal(){
        return this.acc_bal-this.min_bal;
        
    }

}
