//! objects --> data structure, using which we can store data in key-value pair separated by comma
let employee = {
  name: "varun",
  age: 34,
  isMarried: true,
  skills: ["html", "css"],
  address: {
    city: "noida",
    state: "up",
  },
  commission: undefined,
  salary: null,
  hireDate: new Date(),
  printName: function () {
    console.log("hi");
    return 123;
  },
  "print-address": function () {
    console.log("address");
  },

  "print age": function () {
    console.log("age");
  },

  1: "this is something",
};

//! if we are using hyphens(-), spaces(" ") --> keys should be wrapped in quotes
//? avoid using duplicate keys
//? function used in objects are called methods

//~ iso date format (YYYY-MM-DDTHH:mm:ss.sssZ)

// console.log(employee);
// console.log(employee.skills);
// console.log(employee.address.state);
// console.log(employee.printName());
// console.log(employee["age"]);
// console.log(employee[1]);
// console.log(employee["print-address"]);

//! we have two ways to access the properties of an object
//& 1) using dot notation
//& 2) using bracket notation

let e1 = {
  name: "varun",
  age: 34,
  id: 1243,
  contact: "23525",
};
let e2 = {
  name: "aswin",
  age: 34,
  id: 1243,
};
let e3 = {
  name: "sri",
  age: 34,
  id: 1243,
  contact: "675867867",
  email: "s@hmail.com",
  // 10 keys
};
