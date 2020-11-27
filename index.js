// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JS MAP

const students = [
  { id: 21, name: "Rahiyan" },
  { id: 31, name: "Mizanur" },
  { id: 41, name: "Habibur" },
  { id: 71, name: "Kamrul" }
];
const name = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);

///////////////////////////////////////////////

// Without Map

let arrM = [1, 2, 3, 4, 5];

let squaredArray = [];

for (let i = 0; i < arrM.length; i++) {
  squaredArray.push(arrM[i] ** 2);
}

// Output:
console.log(squaredArray); // [ 1, 4, 9, 16, 25 ]
// With map
// Using map and arrow function it be applied something like this:
const newArrs = arrM.map(val => val ** 2);
console.log(newArrs); // [ 1, 4, 9, 16, 25 ]

// bigger
let EmployeesObject = {
  Employees: [
    {
      userId: "rirani",
      jobTitleName: "Developer",
      firstName: "Romin",
      lastName: "Irani",
      employeeCode: "E1",
      region: "CA",
      phoneNumber: "408-1234567",
      emailAddress: "romin.k.irani@gmail.com"
    },
    {
      userId: "nirani",
      jobTitleName: "Database Admin",
      firstName: "Neil",
      lastName: "Irani",
      employeeCode: "E2",
      region: "CA",
      phoneNumber: "408-1111111",
      emailAddress: "neilrirani@gmail.com"
    },
    {
      userId: "thanks",
      jobTitleName: "Program Directory",
      firstName: "Tom",
      lastName: "Hanks",
      employeeCode: "E3",
      region: "CA",
      phoneNumber: "408-2222222",
      emailAddress: "tomhanks@gmail.com"
    }
  ]
};

// Storing employee Array in separately for readability
const data = EmployeesObject.Employees;

// Extracting the required data and storing into new array
const curatedData = data.map(
  employee =>
    `Name: ${employee.firstName} ${employee.lastName}, Title: ${
      employee.jobTitleName
    }`
);

console.log(curatedData);

// Output:
[
  "Name: Romin Irani, Title: Developer",
  "Name: Neil Irani, Title: Database Admin",
  "Name: Tom Hanks, Title: Program Directory"
];
console.log("");

//////////// without filter

let marks = [34, 56, 67, 12, 98, 71, 45, 32];
let passed = 0;
for (let i = 0; i < marks.length; i++) {
  if (marks[i] > 35) {
    passed++;
  }
}

console.log(passed); // 5

// With filter

let passedStudents = marks.filter(mark => mark > 35).length; // 5

//// Another without filter

let animals = [
  { name: "FluffyKins ", Species: "rabbit" },
  { name: "DexLuthor ", Species: "dog" },
  { name: "Trenton ", Species: "dog" },
  { name: "Joey ", Species: "dog" },
  { name: "FetchFishy ", Species: "fish" },
  { name: "Dianna ", Species: "fish" },
  { name: "CatePurry ", Species: "cat " },
  { name: "BobBear ", Species: "bear" },
  { name: "Todd ", Species: "bear" },
  { name: "AlexLeon ", Species: "lion" }
];

let dogsFor = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].Species == "dog") {
    dogsFor.push(animals[i]);
  }
}

console.log(dogsFor);

//Output:
// [
//     { name: "DexLuthor 🐕", Species: "dog" },
//     { name: "Trenton 🐕", Species: "dog" },
//     { name: "Joey 🐕", Species: "dog" },
// ];

///// with filter

const dogs = animals.filter(animal => animal.Species === "dog");

//Output:
// [
//     { name: "DexLuthor 🐕", Species: "dog" },
//     { name: "Trenton 🐕", Species: "dog" },
//     { name: "Joey 🐕", Species: "dog" },
// ];
console.log("");

//////////// WITHOUT REDUCE

let scores = [99, 45, 67, 35, 76, 29, 78, 83, 69, 88];

let avgs = 0;

function avgFor(arr) {
  for (let i = 0; i < arr.length; i++) {
    avgs += arr[i];
  }
  return avgs;
}

console.log(avgFor(scores)); // 669
/////////////// With Reduce:

let avgsa = scores.reduce((sum, score) => sum + score);
console.log(avgsa); //669
//////////////// ANOTHER WITH REDUCE

let EmployeesObject2 = {
  Employees: [
    {
      userId: "rirani",
      jobTitleName: "Developer",
      firstName: "Romin",
      lastName: "Irani",
      preferredFullName: "Romin Irani",
      employeeCode: "E1",
      salary: 75000,
      region: "CA",
      phoneNumber: "408-1234567",
      emailAddress: "romin.k.irani@gmail.com"
    },
    {
      userId: "nirani",
      jobTitleName: "Database Admin",
      firstName: "Neil",
      lastName: "Irani",
      preferredFullName: "Neil Irani",
      employeeCode: "E2",
      region: "CA",
      salary: 90000,
      phoneNumber: "408-1111111",
      emailAddress: "neilrirani@gmail.com"
    },
    {
      userId: "thanks",
      jobTitleName: "Program Directory",
      firstName: "Tom",
      lastName: "Hanks",
      preferredFullName: "Tom Hanks",
      employeeCode: "E3",
      region: "CA",
      salary: 150000,
      phoneNumber: "408-2222222",
      emailAddress: "tomhanks@gmail.com"
    },
    {
      userId: "draks",
      jobTitleName: "Full Stack Developer",
      firstName: "Drake",
      lastName: "Smith",
      preferredFullName: "Drake Smith",
      employeeCode: "E3",
      region: "CA",
      salary: 150000,
      phoneNumber: "408-2222222",
      emailAddress: "tomhanks@gmail.com"
    }
  ]
};

const salaries = EmployeesObject2.Employees;

const avgSalary =
  salaries.reduce((avg, employee) => avg + employee.salary, 0) /
  salaries.length;

// Output
console.log(avgSalary); // 116250
console.log("");

///////////////

// 1. Remove duplicates from an array of numbers/strings
// Well, this is the only one not about map/reduce/filter, but it’s so compact that it was hard not to put it in the list. Plus we’ll use it in a few examples too.

const values = [3, 1, 3, 5, 2, 4, 4, 4];
const uniqueValues = [...new Set(values)];

// uniqueValues is [3, 1, 5, 2, 4]
console.log(uniqueValues);
console.log("");
/////////////////////
//2. A simple search (case-sensitive)
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const users = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" }
];

let res = users.filter(it => it.name.includes("oli"));

// res is []
console.log(res);
console.log("");
////////////
//3. A simple search (case-insensitive)
let rest = users.filter(it => new RegExp("oli", "i").test(it.name));

// res is
// [
//   { id: 97, name: 'Oliver', age: 28, group: 'admin' }
// ]
console.log(rest);
console.log("");

//4. Check if any of the users have admin rights
//The some() method tests whether at least one element in the array passes the test implemented by the provided function.

const hasAdmin = users.some(user => user.group === "admin");

// hasAdmin is true
console.log(hasAdmin);
console.log("");

//5. Flattening an array of arrays
//The result of the first iteration is equal to : […[], …[1, 2, 3]] means it transforms to [1, 2, 3] — this value we provide as an ‘acc’ on the second iteration and so on.

const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flating = nested.reduce((acc, it) => [...acc, ...it], []);

// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flating);
//We can slightly improve this code by omitting an empty array[]as the second argument for reduce(). Then the first value of the nested will be used as the initial acc value. Thanks to Vladimir Efanov.

let flats = nested.reduce((acc, it) => [...acc, ...it]);

// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flats);
console.log("");
//Note that using the spread operator inside a reduce is not great for performance. This example is a case when measuring performance makes sense for your use-case. ☝️

// Thanks to Paweł Wolak, here is a shorter way without Array.reduce:

let flat = [].concat.apply([], nested);
//Also Array.flat is coming, but it’s still an experimental feature.

//6. Create an object that contains the frequency of the specified key
//Let’s group and count the ‘age’ property for each item in the array:

const users2 = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" }
];

const groupByAge = users2.reduce((acc, it) => {
  acc[it.age] = acc[it.age] + 1 || 1;
  return acc;
}, {});

// groupByAge is {23: 1, 28: 2, 34: 1}
console.log(groupByAge);
console.log("");

//7. Indexing an array of objects (lookup table)
//Instead of processing the whole array for finding a user by id, we can construct an object where the user’s id represents a key (with constant searching time).

const uTable = users.reduce((acc, it) => ((acc[it.id] = it), acc), {});

// uTable equals:
// {
//   11: { id: 11, name: 'Adam', age: 23, group: 'editor' },
//   47: { id: 47, name: 'John', age: 28, group: 'admin' },
//   85: { id: 85, name: 'William', age: 34, group: 'editor' },
//   97: { id: 97, name: 'Oliver', age: 28, group: 'admin' }
// }

//8. Extract the unique values for the given key of each item in the array
//Let’s create a list of existing users’ groups. The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const listOfUserGroups = [...new Set(users.map(it => it.group))];

// listOfUserGroups is ['editor', 'admin'];
console.log(listOfUserGroups);
console.log("");

//9. Object key-value map reversal

const cities = {
  Lyon: "France",
  Berlin: "Germany",
  Paris: "France"
};

let countries2 = Object.keys(cities).reduce(
  (acc, k) => ((acc[cities[k]] = [...(acc[cities[k]] || []), k]), acc),
  {}
);

// countries is
// {
//   France: ["Lyon", "Paris"],
//   Germany: ["Berlin"]
// }

console.log(countries2);
console.log("");
//////
/// 1
let countries = Object.keys(cities).reduce((acc, k) => {
  let country = cities[k];
  acc[country] = acc[country] || [];
  acc[country].push(k);
  return acc;
}, {});
/// 2
const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
const fahrenheit = celsius.map(t => t * 1.8 + 32);

// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]
console.log(fahrenheit);
console.log("");

//11. Encode an object into a query string
const params = { lat: 45, lng: 6, alt: 1000 };

const queryString = Object.entries(params)
  .map(p => encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1]))
  .join("&");

// queryString is "lat=45&lng=6&alt=1000"
console.log(queryString);
console.log("");

//12. Print a table of users as a readable string only with specified keys
//Sometimes you want to print your array of objects with selected keys as a string, but you realize that JSON.stringify is not that great ?

const users4 = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" }
];

users4.map(({ id, age, group }) => `\n${id} ${age} ${group}`).join("");

// it returns:
// "
// 11 23 editor
// 47 28 admin
// 85 34 editor
// 97 28 admin"
// JSON.stringify can make the string output more readable, but not as a table:

JSON.stringify(users4, ["id", "name", "group"], 2);

// it returns:
// "[
//   {
//     "id": 11,
//     "name": "Adam",
//     "group": "editor"
//   },
//   {
//     "id": 47,
//     "name": "John",
//     "group": "admin"
//   },
//   {
//     "id": 85,
//     "name": "William",
//     "group": "editor"
//   },
//   {
//     "id": 97,
//     "name": "Oliver",
//     "group": "admin"
//   }
// ]"
console.log("");
//13. Find and replace a key-value pair in an array of objects
//Let’s say we want to change John’s age. If you know the index, you can write this line: users[1].age = 29. However, let’s take a look at another way of doing it:

const updatedUsers = users.map(p =>
  p.id !== 47 ? p : { ...p, age: p.age + 1 }
);

// John is turning 29 now

//14. Union (A ∪ B) of arrays
//Less code than importing and calling the lodash method union.

const arraA = [1, 4, 3, 2];
const arraB = [5, 2, 6, 7, 1];

[...new Set([...arraA, ...arraB])]; // returns [1, 4, 3, 2, 5, 6, 7]
//15. Intersection (A ∩ B) of arrays
//The last one!

const arrA = [1, 4, 3, 2];
const arrB = [5, 2, 6, 7, 1];

arrA.filter(it => arrB.includes(it)); // returns [1, 2]
