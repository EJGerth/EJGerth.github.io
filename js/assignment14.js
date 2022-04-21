/*Problem 1*/
let sam = {
  name: 'Sam',
  department: 'Tech',
  designation: 'Manager',
  salary: 40000,
  raise: true,
};

let mary = {
  name: 'Mary',
  department: 'Finance',
  designation: 'Trainee',
  salary: 18500,
  raise: true,
};

let bill = {
  name: 'Bill',
  department: 'HR',
  designation: 'Executive',
  salary: 21200,
  raise: false,
};
console.log('Problem 1', sam, mary, bill);
/*Problem 2*/
const company = {
  companyName: 'Tech Stars',
  website: 'www.techstars.site',
  employees: [sam, mary, bill],
}

console.log('Problem 2, company');

company.employees
/*Problem 3*/

let anna = {
  name: 'Anna',
  department: 'Tech',
  designation: 'Executive',
  salary: 25600,
  raise: false,
};

company.employees.push(anna);
console.log('Problem 3', company);

/*Problem 4*/
let sum = 0;
for (var i = 0; i < company.employees.length; i++) {
  sum += company.employees[i].salary;
}

console.log('Problem 4', sum);

/*Problem 5*/

function increaseBy10(num) {
  return num * 1.1;
}

for (var i = 0; i < company.employees.length; i++) {
  if (company.employees[i].raise) {
  // increase salary
  company.employees[i].salary *= 1.1;
  // reset raise
  company.employees[i].raise = false;
  }
 }
console.log('Problem 5', company);

// Problem 6

const peopleWFH = ['Anna', 'Sam'];
for (var i = 0; i < company.employees.length; i++) {
    company.employees[i].wfh = peopleWFH.includes(company.employees[i].name)
  }
console.log('Problem 6', company);
