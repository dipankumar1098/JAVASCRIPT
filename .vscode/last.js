/* let createEmployee=()=>{
    setTimeout(()=>{console.log("gm")},4000)
                    }
let getEmployee=()=>{
    setTimeout(()=>{console.log("gA")},2000)
                    }
                    createEmployee()
                    getEmployee() */
let createEmployee=(callback)=>{
      setTimeout(()=>{console.log("gm")},4000)
                                        }
let getEmployee=()=>{
                        setTimeout(()=>{console.log("gA")},2000)
                                        }
                                        createEmployee( getEmployee)
                                        