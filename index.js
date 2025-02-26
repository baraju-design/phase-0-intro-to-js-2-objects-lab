// Write your solution in this file!
const employee = {
  name: "job",
  streetAddress: "75 luthuli",
};
function updateEmployeeWithKeyAndValue(object, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]; // Remove the key from the object
  return employee;
}
console.log(updateEmployeeWithKeyAndValue());
