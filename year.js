class User{
    current_year=2024;
    cal_age(year){
    return this.current_year - year
    }
}
let u1= new User();
let u2= new User();
let age1=u1.cal_age(1983);
console.log(u1.cal_age(2022));