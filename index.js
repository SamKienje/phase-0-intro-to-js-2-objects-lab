
const employee = {
  name: "Kienje",
  streetAddress: "74,Rongai"

};

function updateEmployeeWithKeyAndValue(employee, key, value) {

  // Alternate using ES6 Spread operators:
  // return { ...employee, ...{ [key]: value } }
  return Object.assign({}, employee, { [key]: value });
  
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;


  return employee;

}

function deleteFromEmployeeByKey(employee, key) {

  // Alternate using ES6 Spread operators:
  // const newObj = { ...employee }
  const newObj = Object.assign({}, employee);


  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
}