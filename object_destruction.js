let emp={
            id:'101',
            Name:"Deepan_kumar",
            email:'deepan@gmail.com'
        }
let details={
            salary:'25000',
            email :'deepan@gmail.com'
        }
let emp_details={...emp , ...details}
console.log(emp_details);//object doesn't allow Duplicates