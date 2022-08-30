
const employee = {
    name: "Billy",
    streetAddress: "23 Valley"
    }

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,
        name: "Sam",
        streetAddress: "11 Broadway"
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee.streetAddress = "12 Broadway"
        return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee 
      
}function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}