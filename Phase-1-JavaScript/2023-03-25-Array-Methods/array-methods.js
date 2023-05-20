console.log('Running array methods');

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// console.log(tutorials);

// Create a copy of the array with every title replaced with "Replace Title"
const replaceTutorialTitles = (arr) => {
  const newArray = arr.map(() => {
    return "Replaced Title";
  });
  return newArray;
};
// console.log(replaceTutorialTitles(tutorials));

// Create a copy of the array with the index prepended to the tutorial title
const numberedTutorials = tutorials.map((item, index, arr) => {
  return index + item;
});
// console.log(numberedTutorials);

// Print the first word of each tutorial to the console
tutorials.forEach((tutorial) => {
  // console.log(tutorial.split(' ')[0]);
});

// For loop alternative to Array.forEach()
for (let i = 0; i < tutorials.length; i++) {
  // console.log(tutorials[i].split(' ')[0]);
}

// For loop alternative to Array.map()
const newTutorials = [...tutorials];
for (let i = 0; i < newTutorials.length; i++) {
  const tutorial = newTutorials[i];
  newTutorials[i] = i + tutorial;
}
// console.log(newTutorials);

const records = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  { year: "2012", result: "W" },
  { year: "2011", result: "L" },
  { year: "2010", result: "W" },
  { year: "2009", result: "N/A" },
  { year: "2011", result: "L" },
  { year: "2010", result: "W" },
  { year: "2009", result: "N/A" },
  { year: "2015", result: "L" },
  { year: "2014", result: "W" },
  { year: "2013", result: "N/A" },
  { year: "2012", result: "W" },
];
// console.log(records);

// Loop through the records array and log the year of each record object to the console.
// records.forEach(record => console.log(record.year));

// Replace each object in the array with the value of its year property.
const recordYears = records.map(record => record.year);
// console.log(recordYears);

// Filter the array for every record in the year 2013
const filteredRecords = records.filter(record => record.year === "2013");
// console.log(filteredRecords);

const employee = {
  name: "John Doe",
  "street address": "123 Main St.",
};
console.log(employee);

function updateEmployeeName(employee, name) {
  employee.name = name;
}
// updateEmployeeName(employee, "Jane Doe");
// console.log(employee);

function updateEmployeeNameNonDestructively(employee, name) {
  const newEmployee = { ...employee };
  newEmployee.name = name;
  return newEmployee;
}
// console.log(updateEmployeeNameNonDestructively(employee, "Joey Doe"));

function removeEmployeeName() {
  delete employee.name;
}
// removeEmployeeName();
// console.log(employee);

// Object.keys(employee).forEach(key => console.log(key + ": " + employee[key]));

console.log(["a", "b", "c", "b"].indexOf("b", 2));
