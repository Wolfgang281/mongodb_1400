//! humongous

//! data ==> raw of facts and figures

//? example ==> varun, 34, ashwin, 23

//! information ==> processed data
//? example ==> varun is 34 years old and ashwin is 23 years old

//~ database --> it is a container in which data is stored, fetch, update, etc..

//! DBMS (database management system) --> this is software which is used to manage the database (CRUD : create, read, update and delete)

//& there are two types of DBMS

//! SQL (oracle, mysql, postgresql)
//? structured query language
//? here data is stored in tables
//? rows and cols
//? RDBMS: relational

//~ NoSQL
//? not only structured query language
//? here data is stored in format which is -->  document({key:value}), key-value, graph, wide col
//? non RDBMS

//! sample data --> name, age, id

//! if i want to insert the data in sql dbs,
//? 1) database(dbName)
//? 2) table (tableName) --> name(varchar), age(int), id(int)
//? 3) insert data
//~ e1 ==> varun, 34, 123
//~ e2 ==> ashwin, null, 123
//~ e2 ==> sri, 23, 123, sri@gmail.com (not possible)

//! because the schema is predefined/static

//! 1) sql dbs are used when the relation between data is the first priority

//! if i want to insert the data in no-sql dbs,
//? 1) database(dbName)
//? 2) collection(documents) --> name
//? 3) insert data
//~ e1 ==> name--> varun, age--> 34, id--> 123
//~ e2 ==> name--> ashwin, id-->  123
//~ e2 ==> sri, 23, 123, sri@gmail.com , 899080918, sal, .........

//! because the schema is dynamic
//! 1) no-sql dbs are used when the priority is storing/handling large amount of data

//! 4 types of no-sql databases

//? 1) document based --> in this, data is inserted in form of javascript like objects(BSON)
// example
let user1 = {
  name: "varun",
  age: 34,
  email: "v@gmail.com",
  skills: ["html", "css"],
};

let user2 = {
  name: "ashwin",
  age: 23,
  email: "a@gmail.com",
  skills: ["html", "css"],
};

//? 2) key-value pair --> in this, data is stored in form of key-value pair and each key-value pair is a separate entity.
//!  example
// "user1:u@gmail.com" : "data"
//~ used in --> rate-limiting (ip address), caching(storing the data somewhere from winch accessing the data can be faster) (they are in-memory databases --> RAM)  example --> redisDB

//? 3) graph database --> data is stored in the nodes and different nodes are connected with the help of edges , example --> neo4j (used in social media applications)

//? 4) wide column database/ columnar database --> data is getting stored in form of rows and columns, example --> cassendraDB (used for ai model training, (used in analytics))
//TODO:

//~ difference between sql and no-sql databases

//! sql
//? 1) it is static in nature, here structure is predefine
//? 2) also known as RDBMS
//? 3) here data is stored in for form of tables (rows and cols)
//? 4) it is used when relation between data is the first priority
//? 5) using sql dbs, writing complex queries is easy (join, nested queries)
//? 6) it supports vertical scaling
//? 7) examples --> mysql, postgresql, etc....
//? 8) data rollback is possible

//! no-sql
//? 1) it is dynamic in nature, here structure is not predefined (be default the structure is not defined )
//? 2) also known as nonRDBMS
//? 3) here data is stored in form of documents, key-value pair, graphs, wide columns
//? 4) it is used when the priority is storing/handling large amount of data
//? 5)  using no-sql dbs, writing complex queries is hard (join, nested queries) (complex)
//? 6) it supports horizontal scaling
//? 7) examples --> mongoDB, cassendraDB, neo4j, redisDB, etc...
//? 8) data rollback is not possible ()

db.emp.aggregate([
  {
    $match: {
      name: {
        $regex: /a/,
      },
    },
  },
  {
    $lookup: {
      from: "dept",
      localField: "deptNo",
      foreignField: "deptNo",
      as: "deptNo",
    },
  },
  {
    $unwind: {
      path: "$deptNo",
    },
  },
  {
    $group: {
      _id: "$job",
      count: {
        $sum: 1,
      },
      deptDetails: {
        $addToSet: "$deptNo",
      },
    },
  },
  {
    $unwind: {
      path: "$deptDetails",
    },
  },
  {
    $project: {
      count: 1,
      job: "$_id",
      _id: 0,
      facilities: "$deptDetails.facilities",
      location: "$deptDetails.loc",
    },
  },
]);

//! scaling --> it is a process of altering the specs(RAM, Disk) of the system
let myLaptop = {
  RAM: 8,
  Disk: 512,
};
//? movies, series, games, etc... (left RAM-512mb, disk-1GB)
//? i need to add more data

//! 1) delete existing application and data (this is not allowed)

//! 2) increase the specs (vertical scaling) : in this, new resources are added to the existing system
let myLaptopUpgraded = {
  RAM: 16,
  Disk: 1024,
};

//! 3) buy a new laptop (horizontal scaling): in this, new resources are added with the existing system
let myNewLaptop = {
  RAM: 8,
  Disk: 512,
};

//! highly available and distributed
//! 60k --> 60k (16, 1024)
//! 60k --> 30k (8, 512), 30k (8, 512)

//!@ used in AirBnB, uber, netflix, linkedin, etc...

//~ ============================== MONGODB ====================================

//? 25 days (basics(compass, mongod server, mongosh), CRUD (commands), operators, aggregation, indexing)
//! theory --> (replication, sharding) // system design

//! mongodb --> it is nosql database which stores data in BSON format. it is dynamic in nature (by default there is no schema). it is open source, cross-platform.
// geoJSON

//! 1) community(mongodb) server --> it is a mongodb server, through which we can interact with database, by default it's port number is 27107, complete address will be
//~  mongodb://localhost:27017/ ==> domain name
//~  mongodb://127.0.0.1:27017/ ==>  ip address

//? steps to install it --> all default options >> select complete >> install

//! 2) compass --> it is GUI (graphical User interface), through which we can interact(CRUD) with database visually without writing any commands (or knowledge of mongodb commands)
//? while adding documents using compass, pass the input in JSON format

//! 3) mongo shell --> CLI (command line interface) (terminal) (through which we can interact(CRUD) with database by typing mongodb commands. it is built using javascript.(js objects, j)

//? to tap into the shell, open terminal and type "mongosh" and press enter
//? to exit the shell press ctrl + c, or .exit

//! top start mongodb server, open as admin, and type "net start mongodb"
//! to stop mongodb server, open as admin, and type "net stop mongodb"

//! the default database name is test

//~  ======================= mongodb shell commands ========================

//? 1) to display all the databases
// show dbs
// show databases

//? 2) to create a database
// use database_name
//& example -->  use college

//& new databases --> temporary it gets stored in storage engine(wired tiger)
// a) create a new collection
// b) insert a document

//? 3) to create a collection
// db.createCollection("collection_name")
//& example --> db.createCollection("professors")

//! after every op, refresh the compass to see the changes

// datatype of db --> object (createCollection)

//? 4) to show all the collections in a database
// show collections
// show tables : this was introduces just to make developers familiar with the show collections command,

//? 5) to rename a collection
// db.collection_name.renameCollection("new_name")
db.professors.renameCollection("teachers");

//! we cannot rename the database

let db = {
  createCollection: function () {},
  dropDatabase: function () {},
  professors: {
    renameCollection: function () {},
    drop: function () {},
  },
};

//? 6) to delete a collection
// db.collection_name.drop()
db.teachers.drop();

//? 7) to delete a database
// db.dropDatabase()
//& example --> db.dropDatabase()

//~ ===========================================================================
//~ ====================== CRUD on documents =====================================
//~ ===========================================================================

//? 8) to insert a single document  --> {} (insertOne())
db.collection_name.insertOne({ doc }); //? {}
// --> js objects, json data
//! database >> collection >> documents
db.books.insertOne({
  name: "The Alchemist",
  author: "Paulo",
  genre: "Novel",
  rating: 4.5,
  price: 19.99,
});

//! shell is built on js

db.books.insertOne({
  name: "Harry Potter",
  author: "jk rowling",
  genre: "Novel",
  rating: 4.5,
  price: 19.99,
});

db.books.insertOne({
  name: "The Lord of the Rings",
  author: "Tolkien",
  genre: "Novel",
  rating: 4.5,
  price: 19.99,
  publishedDate: new Date(),
  publisher: undefined,
});

let resp = {
  acknowledged: true, //? getting confirmation from db, that data is saved
  insertedId: ObjectId("696a01dc71d8ede22a735189"),
};

//! BSON --> bson stands for binary json (binary javascript object notation)
//? 1) in this, the data is stored in binary format.
//? 2) mongodb uses bson to store data (conversion done by mongo-driver).
//? 3) it is not human readable.
//? 4) bson supports various other datatypes like date, functions, undefined and along with that some other data types like ObjectId.

//! ObjectId --> this is a 12 bytes hexadecimal string of type ObjectId.
//? 1) it is unique for each document
//? 2) whenever a new document is inserted, mongodb automatically assigns and _id to that document, unless we explicitly assign _id to that document.
//? 3) also acts as a unique identifier
//? 4) _id is immutable

//! this _id is divided into three parts (4,5,3)
//? 1) first 4 bytes --> (timestamp), it stores the the time at which the document is inserted
//? 2) next 5 bytes --> PUI (process unique identifier) ==> (2)process id + (3)machine id
//? 3) last 3 bytes --> counter, starts at random value and increments by 1 for each document inserted

db.books.insertOne({
  name: "the child",
  author: "james",
  genre: "triller",
  rating: 4.5,
  price: 19.99,
  _id: "123456789",
});

db.books.insertOne({
  name: "the child 2",
  author: "james",
  genre: "triller",
  rating: 4.5,
  price: 19.99,
  _id: 123456789,
});

//? 8) to insert multiple documents  --> (insertMany([]))
// db.collection_name.insertMany([{doc1}, {doc2}, {doc3}, ...]);
db.books.insertMany(
  { name: "the killing", author: "lee-child" }, // book1
  { name: "the savings", author: "randomName" }, // book2
);

//? 8) to fetch/read single document  --> findOne(): this will return the first matched document
db.collection_name.findOne({ filterCondition }, { projection }, { options });
// all the arguments are not mandatory
//& 1) {filterCondition} ==> here we pass the condition on which we need to filter out the documents
//& 2) {projection} ==> using projection, we can display/hide fields in the output. while using projection, _id will displayed by default
// display ==> { fieldName: 1 }
// hide ==> { fieldName: 0 }

// display the details of user whose name is "smith"
db.books.findOne({ key: "value" });
db.books.findOne({ genre: "thriller" });
db.books.findOne({ name: "the killing" });

db.books.findOne({}); // when no conditions are passed, the first document is fetched
db.books.findOne();

//! mongodb is case sensitive

db.sampleData.insertMany([
  { name: "ashwin", age: 34, sal: 340000, gender: "m" },
  { name: "ashwini", age: 33, sal: 440000, gender: "f" },
  { name: "sri", age: 31, sal: 300000, gender: "m" },
  { name: "sirisha", age: 35, sal: 390000, gender: "f" },
]);

db.sampleData.findOne({ name: "ashwini" });
db.sampleData.findOne(
  { gender: "f" }, // filter
  { name: 1, _id: 0, age: 1 }, // projection
);

//? 8) to fetch/read multiple documents  --> find(): it returns an array of matched documents
db.collection_name.find({ filterCondition }, { projection }, { options });

/// display the names and sal of all the male employees
db.sampleData.find({ gender: "m" }, { name: 1, sal: 1, _id: 0 });

db.sampleData.find({}); // when no conditions are passed, all the documents are fetched
db.sampleData.find();

//! ============ NOTE: ========================= find() returns a cursor(pointer) --> object
//TODO:

//? 9) to delete a single document  --> deleteOne(): this will delete the first matched document
db.collection_name.deleteOne({ filterCondition }); // in this, the first matched document is deleted

db.collection_name.deleteOne({}); // when no conditions are passed, the first document is deleted
db.collection_name.deleteOne(); // this will give an error

db.sampleData.deleteOne({ gender: "m" });

//? 9) to delete multiple documents  --> deleteMany(): this will delete all the matched document
db.collection_name.deleteMany({ filterCondition });

db.collection_name.deleteMany({}); // all the documents will be deleted

//? 9) to update a single document  --> updateOne(): this will update the first matched document
db.collection_name.updateOne({ filter }, { updation_value }, { options });

db.collection_name.updateOne({}, { updation_value }, { options }); //first document in the collection will be updated

//? 10) to update multiple documents  --> updateMany(): this will update all the matched documents
db.collection_name.updateMany({ filter }, { updation_value }, { options });

db.collection_name.updateMany({}, { updation_value }, { options }); // all will be updated

db.books.updateOne({ author: "james" }, { $set: { price: 25 } });

//! ======================== operators ================================
//! Operators ==> all operators in mongodb starts with "$"
//~ query operators: used in filter object
//? ==> comparison operators (less than, not equals to, etc.)
//? ==> logical operators (logical AND, logical OR, etc..)
//? ==> array operators (size, all, elemMatch, etc..)
//? ==> element operators (exists, type, etc..)
//? ==> evaluation operators (regex, expr, $mod, $where(bod optimization), etc..)
//~ update operators
//? ==> field update op (set, unset, etc..)
//? ==> arithmetic update op (max, min, inc, etc..)
//? ==> array update op (push, pull, etc..)
//! questions
//! cursor
//! data modelling
//~ aggregation operators ()
//? ==> pipeline stages op (match, group, etc..)
//? ==> accumulator op (max, min, avg, count, sum)
//? ==> arithmetic and date op (add, subtract, date, etc..)
//~ projection operators ($, $slice, etc..)
//~ geospatial operators ==> (GeoJSON format)
//! indexing, replication, sharding (theory)

//~ ========================================================================
//! operators --> these are reserved symbols which are used to perform specific operations
// operands --> these are the values which are used to perform the operations
// 2 + 3 --> operator is (+), operands are (2, 3)

//~! 1) comparison op
// less than =============================== $lt
// less than or equal to =================== $lte
// greater than or equal to ================ $gte
// greater than ============================ $gt
// equals to =============================== $eq
// not equals to =========================== $ne

//? syntax for above 6 op
//? filter object ====> { fieldName: {$op: value} }

// in ====================================== $in
// not in ================================== $nin
//? syntax for above 6 op
//? filter object ====> { fieldName: {$in: ["v1", "v2", "v3",.....]} }
//~ $in: will fetch all the documents, which will match any one of the given values
//~ $nin: will fetch all the documents, which fails to fulfill any one of the given values

//& get the details of all the emp whose age is less than 32
db.sampleData.find({ age: { $lt: 32 } }); // 32 is not included
db.sampleData.find({ age: { $lte: 32 } }); // 32 is included

db.sampleData.find({ name: { $ne: "sri" } });

//? json data

///! mongo tools
//? mongoimport "C:\Users\ASUS\Desktop\Classes\emp.emp.json" -d demo -c emp --jsonArray
//? mongoimport path -d dbName -c collName --jsonArray

//& display all the emp names having salary more than 2000
db.emp.find({ sal: { $gt: 2000 } }, { empName: 1, _id: 0, sal: 1 });

// db.emp.updateMany({}, { $rename: { salary: "sal" } });

// display all the emp names who are working in department 10 and department 20
db.emp.find(
  {
    deptNo: { $eq: 20 }, // 2
    deptNo: { $eq: 10 }, // 1
  }, //! filter abject
  {
    deptNo: 1,
    _id: 0,
  },
);
/// this will not work
// js object duplicate key

db.emp.find(
  { deptNo: { $in: [10, 20] } }, // filter , implicit use of logical OR
  { deptNo: 1, _id: 0 }, // projection
); // 14

//! explicit and implicit
db.sampleData.deleteOne({ gender: "m" }); // implicit, use of $eq
db.sampleData.deleteOne({ gender: { $eq: "m" } });

db.emp.findOne({ empName: "smith" });
db.emp.findOne({ empName: { $eq: "smith" } });

//! two ways to create collection
db.createCollection();
db.collection_name.insertMany();

// display all the emp details who are working as clerk in department 10
db.emp.find(
  {
    // first condition
    job: "clerk",
    // second condition
    sal: { $gt: 3000 },
  },
  {
    job: 1,
    deptNo: 1,
    _id: 0,
    sal: 1,
  },
);

// display all the emp details who are having sal in between 1000 and 2000
db.emp.find(
  {
    //first
    sal: { $lt: 2000 },
    // second
    sal: { $gt: 1000 },
  },
  {
    sal: 1,
  },
);

db.emp.find({ job: "clerk", deptNo: 20, job: "manager" });

//! logical operators (logical AND, logical OR, etc..)
// and =================> $and (this will fetch all the documents when all the conditions are fulfilled)

// or ==================> $or (this will fetch all the documents when any one of the given conditions are fulfilled)

// nor =================> $nor (this will fetch all the documents which will fail to fulfill all the given values) --> acts like exact opposite of $or

// not =================> $not

//? syntax for $and, $or, $nor
//? filter object ====>
//? { $op: [{c1}, {c2}, {c3}, .....] }

//! this will invert the expression is begin passed
//? syntax for $not
//? filter object ====>
//? { fieldName: { $not : {expression}  }  } // $gt:45, $eq: "value"

//~ logical and ==> this will fetch all the documents, which fulfills al the given conditions

// display all the emp details who are working as clerk in department 10
db.emp.find(
  {
    $nor: [
      { job: "clerk" }, //c1
      { deptNo: { $eq: 10 } }, //c2
    ],
  },
  {
    job: 1,
    deptNo: 1,
  },
);

//! display all the emp names who are not working in dept 10
db.emp.find({ deptNo: { $ne: 10 } }, { deptNo: 1 });
db.emp.find({ deptNo: { $not: 10 } }, { deptNo: 1 });

db.emp.find({ age: { $not: { $gte: 40 } } }, { age: 1 });
db.emp.find({ age: { $lt: 40 } }, { age: 1 });

// 66a23517b5c6990483c4e49b --> find the user
db.emp.findOne({ _id: ObjectId("66a23517b5c6990483c4e49b") });
//! mongodb _id === "string"
//! we have to specify that _id is a type of ObjectId, other wise it will be considered as a string

db.emp.insertOne({
  _id: "1234",
  name: "abc",
  age: 34,
  sal: 3499,
});

db.emp.findOne({ _id: ObjectId("1234") });

//! display all the emp who were hired after 1981
db.emp.find({ hireDate: { $gt: ISODate("YYYY-MM-DD") } });
db.emp.find({ hireDate: { $gt: ISODate("1981-12-31") } }, { hireDate: 1 });

//! display all the emp names who are having their performance rating greater than 4.3
db.emp.find(
  { "performance.rating": { $gt: 4.3 } },
  { empName: 1, "performance.rating": 1 },
);
//~ while using nested object properties, use double quotes to avoid error

//! display all the emp details who are having react as one of their skills
db.emp.find({ skills: "react" }, { skills: 1, _id: 0 });

//! display all the emp details who are having react and sql as one of their skills
db.emp.find({ skills: ["html", "sales"] }, { skills: 1, _id: 0 });

//! ================ array op ==============================
//! all ===========================> $all
//! size ==========================> $size
//! element match =================> $elemMatch

//? syntax for $all ==>
// filter part ==>
//? {fieldName: { $all: ['v1', "v2", .....] }}
//~ this will fetch all the documents which will fulfill all the given values
//! display all the emp details who are having react and sql as one of their skills
db.emp.find({ skills: { $all: ["html", "php", "react"] } }, { skills: 1 });
db.emp.find({ skills: { $in: ["html", "php", "react"] } }, { skills: 1 });
db.emp.find({ deptNo: { $in: [10, 20] } });

//? syntax for $size ==>
// filter part ==>
//? {fieldName: { $size:+INTEGER VALUE }}
//~ this will fetch the documents based on the size/length of the array
//! display all the emp names who are having only 2 skills
db.emp.find({ skills: { $size: 2 } }, { skills: 1 });

let cart = [
  { mobileId: M123, name: "samsung", price: 200000 },
  { headphoneId: H345, name: "sony", price: 67000 },
];

//! it is used to filter out the documents based on some conditions, when the array contains objects/documents in it.
//? syntax for $elemMatch ==>
// filter part ==>
//? {fieldName: { $elemMatch: {conditions} }}

db.students.insertMany([
  {
    name: "Aman Sharma",
    age: 22,
    city: "Delhi",
    courses: [
      { subject: "Math", marks: 85, semester: 1, grade: "A", credits: 4 },
      { subject: "Physics", marks: 72, semester: 1, grade: "B", credits: 3 },
      { subject: "Math", marks: 90, semester: 2, grade: "A+", credits: 4 },
      { subject: "Chemistry", marks: 68, semester: 2, grade: "B", credits: 3 },
      { subject: "Math", marks: 45, semester: 3, grade: "F", credits: 4 },
    ],
    scholarships: [
      { name: "Merit Scholarship", amount: 50000, year: 2023 },
      { name: "Sports Scholarship", amount: 20000, year: 2024 },
    ],
  },
  {
    name: "Rohit Verma",
    age: 23,
    city: "Mumbai",
    courses: [
      { subject: "Math", marks: 60, semester: 1, grade: "C", credits: 4 },
      { subject: "Chemistry", marks: 88, semester: 1, grade: "A", credits: 3 },
      { subject: "Physics", marks: 55, semester: 2, grade: "D", credits: 3 },
      { subject: "Math", marks: 92, semester: 2, grade: "A+", credits: 4 },
    ],
    scholarships: [{ name: "Need-based Aid", amount: 30000, year: 2023 }],
  },
  {
    name: "Neha Singh",
    age: 21,
    city: "Bangalore",
    courses: [
      { subject: "Physics", marks: 91, semester: 1, grade: "A+", credits: 3 },
      { subject: "Math", marks: 78, semester: 1, grade: "B+", credits: 4 },
      { subject: "Chemistry", marks: 85, semester: 2, grade: "A", credits: 3 },
      { subject: "Physics", marks: 88, semester: 2, grade: "A", credits: 3 },
    ],
    scholarships: [
      { name: "Merit Scholarship", amount: 50000, year: 2023 },
      { name: "Research Grant", amount: 75000, year: 2024 },
    ],
  },
  {
    name: "Priya Gupta",
    age: 20,
    city: "Delhi",
    courses: [
      { subject: "Math", marks: 95, semester: 1, grade: "A+", credits: 4 },
      { subject: "Physics", marks: 89, semester: 1, grade: "A", credits: 3 },
      { subject: "Math", marks: 88, semester: 2, grade: "A", credits: 4 },
      { subject: "Chemistry", marks: 92, semester: 2, grade: "A+", credits: 3 },
    ],
    scholarships: [],
  },
  {
    name: "Vikram Rao",
    age: 24,
    city: "Pune",
    courses: [
      { subject: "Chemistry", marks: 45, semester: 1, grade: "F", credits: 3 },
      { subject: "Physics", marks: 50, semester: 1, grade: "D", credits: 3 },
      { subject: "Math", marks: 55, semester: 2, grade: "D", credits: 4 },
      { subject: "Chemistry", marks: 82, semester: 2, grade: "A-", credits: 3 },
    ],
    scholarships: [
      { name: "Second Chance Program", amount: 15000, year: 2024 },
    ],
  },
  {
    name: "Anjali Reddy",
    age: 22,
    city: "Hyderabad",
    courses: [
      { subject: "Math", marks: 76, semester: 1, grade: "B+", credits: 4 },
      { subject: "Chemistry", marks: 91, semester: 1, grade: "A+", credits: 3 },
      { subject: "Physics", marks: 84, semester: 2, grade: "A", credits: 3 },
      { subject: "Math", marks: 65, semester: 2, grade: "C", credits: 4 },
      { subject: "Math", marks: 88, semester: 3, grade: "A", credits: 4 },
    ],
    scholarships: [{ name: "Merit Scholarship", amount: 50000, year: 2023 }],
  },
]);

//! students who have scored above 90 im math in sem-1
db.students.find(
  {
    courses: {
      $elemMatch: { marks: { $gt: 90 }, subject: "Math", semester: 1 },
    },
  },
  {
    name: 1,
    _id: 0,
  },
);

//! display the name of the students who have failed(marks<50) in any exam in semester 1
db.students.find({
  courses: {
    $elemMatch: {
      marks: { $lt: 50 }, // condition-1
      semester: 2, // condition-2
    },
  },
});

//! students with scholarship above 40,000 in 2024
db.students.find({
  scholarships: {
    $elemMatch: {
      amount: { $gt: 40000 }, //c1
      year: 2024, // c2
    },
  },
});

//! ================================ element operators (exists, type, etc..)
// exists =====================================> $exists
// type =======================================> $type

//~ it will return the documents if the fieldName is present.
//? syntax for $exists
// filter part
// { fieldName: {$exists: true/false} }

db.emp.find({ email: { $exists: true } });

//! display all the names of the emp who are getting a bonus
db.emp.find(
  { bonus: { $exists: true } }, // filter
  { empName: 1, _id: 0 }, // projection
);

//~ it will return the documents if the fieldName matches the datatype
//? syntax for $type
// filter part
// { fieldName: {$type: datatype} }

db.emp.find({ sal: { $type: "number" } });

//! ============================= evaluation operators (regex, expr, etc..) ======================

//? regex =======================================> $regex
//? regular expression --> used for pattern matching (only works on string datatypes)

//~ syntax for regex -->
// filter part
// { fieldName: { $regex: /pattern/ } }

//& first way --> we are applying regex anywhere in the name (firs, last ......)
//! display all the emp details who are having letter 'a' in their name
db.emp.find({ empName: { $regex: /a/ } }, { empName: 1, _id: 0 });

//& second way --> we are applying regex at the start
// cap symbol (shift + 6 ==> ^) will start the pattern matching from the beginning of the string
//! display all the emp details who are having first letter as "a" in their name
db.emp.find({ empName: { $regex: /^a/ } }, { empName: 1, _id: 0 });
//! display all the emp details who are having "al" as the first two letters
db.emp.find({ empName: { $regex: /^al/ } }, { empName: 1, _id: 0 });

//& third way --> we are applying regex at the end
// dollar symbol (shift + 4 ==> $) will start the pattern matching from the end of the string
//! display all the emp details who are having letter "s" as the last character
db.emp.find({ empName: { $regex: /s$/ } }, { empName: 1, _id: 0 });

//& fourth way -->
// for skipping the characters use dot(.) symbol.
// one dot will represent 1 character
//! display all the emp details who are having letter "s" as the second last character
db.emp.find({ empName: { $regex: /e.$/ } }, { empName: 1 });
//! display all the emp details who are having letter "a" as the second character
db.emp.find({ empName: { $regex: /^.a/ } }, { empName: 1 });

//! display all the emp names who are having exactly 4 letters in their name
db.emp.find({ empName: { $regex: /^....$/ } }, { empName: 1 });

//& fifth way -->
// for skipping the n characters use dot(*) symbol.
// one dot will represent 1 character
//! display all the emp details whose name starts with "a" and ends with "s"
db.emp.find({ empName: { $regex: /^j.*s$/ } }, { empName: 1 });

//? expr =======================================> $expr
//? expression --> 1) it is used to perform operations(comparison) in the documents
//? --> 2) it is used to perform aggregation operations //TODO:

//~ syntax for expr -->
// filter part
// { $expr: { $CO: [] } }
//? co -> comparison operator

// display all the emp names and sal whose sal is greater than 2500
db.emp.find({ sal: { $gt: 2500 } }, { empName: 1, sal: 1, _id: 0 });
db.emp.find({ $expr: { $gt: ["$sal", 2500] } }, { empName: 1, sal: 1, _id: 0 });

//! whenever we are passing document fields as value ==>  1) use Double quotes and 2) prefix it with $

// show the emp whose commission (comm) is greater than the salary (sal)
// .count()
db.emp.find(
  { $expr: { $gt: ["$comm", "$sal"] } },
  { empName: 1, comm: 1, sal: 1, _id: 0 },
);

//~ updateOne/updateMany({filter}, {updation}, {options})
//? update existing key
//? update existing value
//? add a new key-value pair
//? delete a existing key-value pair
//! ======================== update op ===============
///! //? ==> field update op (set, unset, rename)
//? set =========================> $set
//? unset =======================> $unset
//? rename ======================> $rename

//~ $set ==> using $set we can update the existing value and if the keyName is not present then a new key-value pair will be created
//? syntax for $set ==>
// updation part ==>
// { $set: { keyName1: value1, keyName2: value2,....... } }

db.students.updateMany(
  { age: 22 },
  { $set: { city: "Gurugram", age: 25, email: "abc@gmail.com" } },
);

let updatedResp = {
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0,
};

db.students.updateMany({}, { $set: { hasInsurance: false } });

db.students.updateMany({}, { $set: { hasInsurance: "" } });
db.students.updateOne({}, { $set: { hasInsurance: null } });
db.students.updateMany({}, { $set: { hasInsurance: undefined } });

//~ $unset ==> using $unset we can remove a key-value pair from the document
//? syntax for $unset ==>
// updation part ==>
// { $unset: { keyName1: 1} } // here we have to pass truthy values

db.students.updateMany({}, { $unset: { hasInsurance: "" } });
db.students.updateOne({}, { $unset: { age: 1 } });

//~ $rename ==> using $rename we can modify the existing key
//? syntax for $rename ==>
// updation part ==>
// { $rename: { oldKeyName: newKeyName} }

db.students.updateMany(
  {}, // filter
  { $rename: { name: "username" } }, // updation
  { upsert: false }, // options --> upsert and by default it's value is false
);

db.students.updateOne({ age: 25 }, { $set: { email: "abc@gmail.com" } });

db.students.updateOne(
  { age: 250, sal: 50000, name: "smith" },
  { $set: { phone: "9869868981" } },
  { upsert: true }, // update + insert
);

//! ================== //? ==> arithmetic update op (max, min, inc)===============================
//?  $max, $min, $inc
//? syntax for $max and $min
//? updation part ==>
// { $max/$min: {fieldName: value }
//~ $max will only update the data when the passed value is strictly greater than the saved value

//~ $min will only update the data when the passed value is strictly lower than the saved value

//~ in case the field_name is not present, then a new key-value pair will be added

db.scores.insertMany([
  {
    name: "varun",
    maxScore: 300,
    minScore: 120,
  },
  {
    name: "ashwini",
    maxScore: 250,
    minScore: 90,
  },
]);
db.scores.updateOne({ name: "varun" }, { $max: { maxScore: 300 } });

db.scores.updateOne({ name: "varun" }, { $min: { lowScore: 300 } });

//? syntax for $inc
//? it is used to increment/decrement the data by specific values
//~ in case the field_name is not present, then a new key-value pair will be added
//~ null cannot be used with $inc
//? updation part ==>
// { $inc: {fieldName: +/- INTEGER NUMBER }

db.scores.updateOne({ name: "varun" }, { $inc: { sal: null } });

//! =================== array update op (push, pull, etc..) =====================
//? $push --> this will add an element at the last
//~ syntax --> { $push: {fieldName: "value"} } "objects""strings, numbers"
db.emp.updateOne({}, { $push: { skills: "html" } });

db.emp.updateOne({}, { $push: { skills: ["node", "css"] } }); //& this will add a nested array inside skills array, to add multiple values we use $each along with $push

//? $push + $each (($position, $sort, $slice): modifiers) --> using these, we can add multiple values in the array
//~ syntax --> { $push: {fieldName: {$each: [v1, v2, v3,......]}} }

db.emp.updateOne(
  { empName: "ward" },
  { $push: { skills: { $each: ["node", "mongodb"] } } },
);

db.emp.updateOne(
  { empName: "scott" },
  { $push: { skills: { $each: ["gen_ai"], $position: 3, $sort: 1 } } },
);
// sort -> 1 for ascending and -1 for descending

db.emp.updateOne({}, { $push: { hobbies: "singing" } });
// when the field is not present then a new field will be created whose datatype will be array

//? addToSet --> $addToSet is used to add only unique values in an array
// { $addToSet: {fieldName: value} }
//~ (($position, $sort, $slice): modifiers these cannot be used with addToSet

db.emp.updateOne(
  { empName: "ward" },
  {
    $addToSet: { skills: { $each: ["node", "mongodb", "css"] } },
  },
);

//? $pop --> this will remove an element from an array either from last or first
// syntax --> { $pop: { fieldName: 1/-1 } } (1 --> from end, -1 from start)

db.emp.updateOne({}, { $pop: { skills: -1 } });

//? $pullAll --> this will remove all the occurrences present in the array if it matches with the values/literals
// updation part --> { $pullAll: {fieldName: [v1, v2, .....]} }
db.emp.updateOne({}, { $pullAll: { skills: ["sql", "react"] } });
//! $pullAll will accept array of values

//? $pull --> this will remove all the occurrences present in the array if it matches with the values/literals or conditions
// syntax --> updation part -->
// { $pull: { fields: { expression } } }
db.emp.updateOne({}, { $pull: { skills: { $regex: /e/ } } });
db.emp.updateOne({}, { $pull: { skills: "mongodb" } });

//! diff between $pull and $pullAll --> using $pull we can pass conditions

//! 1) we can update the first matching element ({})
//! 2) we can update all the elements
//! 3) we can update all the matching elements

db.users.insertMany([
  {
    name: "Rajesh Kumar",
    age: 32,
    currentCompany: "Amazon",
    totalExperience: 10,
    experience: [
      {
        company: "TCS",
        duration: 24,
        role: "Developer",
        salary: 400000,
        rating: 3.5,
      },
      {
        company: "Infosys",
        duration: 36,
        role: "Senior Developer",
        salary: 800000,
        rating: 4.2,
      },
      {
        company: "Amazon",
        duration: 18,
        role: "Tech Lead",
        salary: 2500000,
        rating: 4.8,
      },
    ],
  },
  {
    name: "Priya Sharma",
    age: 28,
    currentCompany: "Google",
    totalExperience: 6,
    experience: [
      {
        company: "Wipro",
        duration: 18,
        role: "Developer",
        salary: 450000,
        rating: 3.8,
      },
      {
        company: "Microsoft",
        duration: 24,
        role: "SDE-2",
        salary: 1800000,
        rating: 4.5,
      },
      {
        company: "Google",
        duration: 12,
        role: "Senior Engineer",
        salary: 3200000,
        rating: 4.9,
      },
    ],
  },
  {
    name: "Amit Verma",
    age: 35,
    currentCompany: "Flipkart",
    totalExperience: 12,
    experience: [
      {
        company: "Accenture",
        duration: 30,
        role: "Analyst",
        salary: 350000,
        rating: 3.2,
      },
      {
        company: "Capgemini",
        duration: 36,
        role: "Consultant",
        salary: 700000,
        rating: 3.9,
      },
      {
        company: "Flipkart",
        duration: 18,
        role: "Product Manager",
        salary: 2200000,
        rating: 4.6,
      },
    ],
  },
  {
    name: "Sneha Reddy",
    age: 30,
    currentCompany: "Microsoft",
    totalExperience: 8,
    experience: [
      {
        company: "TCS",
        duration: 24,
        role: "Developer",
        salary: 420000,
        rating: 3.6,
      },
      {
        company: "Amazon",
        duration: 30,
        role: "SDE-2",
        salary: 1600000,
        rating: 4.4,
      },
      {
        company: "Microsoft",
        duration: 12,
        role: "Senior SDE",
        salary: 2800000,
        rating: 4.7,
      },
    ],
  },
  {
    name: "Vikram Singh",
    age: 26,
    currentCompany: "Infosys",
    totalExperience: 4,
    experience: [
      {
        company: "Cognizant",
        duration: 18,
        role: "Junior Developer",
        salary: 380000,
        rating: 3.4,
      },
      {
        company: "Infosys",
        duration: 24,
        role: "Developer",
        salary: 650000,
        rating: 4.0,
      },
    ],
  },
  {
    name: "Ananya Iyer",
    age: 33,
    currentCompany: "Netflix",
    totalExperience: 11,
    experience: [
      {
        company: "Wipro",
        duration: 24,
        role: "Developer",
        salary: 400000,
        rating: 3.5,
      },
      {
        company: "Adobe",
        duration: 36,
        role: "Senior Developer",
        salary: 1500000,
        rating: 4.3,
      },
      {
        company: "Netflix",
        duration: 18,
        role: "Staff Engineer",
        salary: 4000000,
        rating: 4.9,
      },
    ],
  },
  {
    name: "Rohit Malhotra",
    age: 29,
    currentCompany: "Paytm",
    totalExperience: 7,
    experience: [
      {
        company: "HCL",
        duration: 20,
        role: "Developer",
        salary: 360000,
        rating: 3.3,
      },
      {
        company: "Swiggy",
        duration: 28,
        role: "Backend Developer",
        salary: 1100000,
        rating: 4.1,
      },
      {
        company: "Paytm",
        duration: 14,
        role: "Senior Developer",
        salary: 1800000,
        rating: 4.5,
      },
    ],
  },
  {
    name: "Kavya Nair",
    age: 31,
    currentCompany: "Uber",
    totalExperience: 9,
    experience: [
      {
        company: "Infosys",
        duration: 30,
        role: "Developer",
        salary: 500000,
        rating: 3.7,
      },
      {
        company: "Ola",
        duration: 24,
        role: "Senior Developer",
        salary: 1300000,
        rating: 4.2,
      },
      {
        company: "Uber",
        duration: 18,
        role: "Tech Lead",
        salary: 3500000,
        rating: 4.8,
      },
    ],
  },
  {
    name: "Arjun Kapoor",
    age: 27,
    currentCompany: "Zomato",
    totalExperience: 5,
    experience: [
      {
        company: "Tech Mahindra",
        duration: 18,
        role: "Junior Developer",
        salary: 340000,
        rating: 3.2,
      },
      {
        company: "Myntra",
        duration: 20,
        role: "Developer",
        salary: 900000,
        rating: 4.0,
      },
      {
        company: "Zomato",
        duration: 10,
        role: "SDE-2",
        salary: 1600000,
        rating: 4.4,
      },
    ],
  },
  {
    name: "Divya Menon",
    age: 34,
    currentCompany: "Oracle",
    totalExperience: 12,
    experience: [
      {
        company: "Accenture",
        duration: 36,
        role: "Analyst",
        salary: 380000,
        rating: 3.4,
      },
      {
        company: "SAP",
        duration: 30,
        role: "Consultant",
        salary: 1200000,
        rating: 4.1,
      },
      {
        company: "Oracle",
        duration: 24,
        role: "Senior Consultant",
        salary: 2000000,
        rating: 4.5,
      },
    ],
  },
  {
    name: "Karthik Bose",
    age: 28,
    currentCompany: "PhonePe",
    totalExperience: 6,
    experience: [
      {
        company: "Cognizant",
        duration: 24,
        role: "Developer",
        salary: 420000,
        rating: 3.6,
      },
      {
        company: "Razorpay",
        duration: 20,
        role: "Backend Engineer",
        salary: 1400000,
        rating: 4.3,
      },
      {
        company: "PhonePe",
        duration: 12,
        role: "Senior Engineer",
        salary: 2400000,
        rating: 4.7,
      },
    ],
  },
  {
    name: "Meera Joshi",
    age: 30,
    currentCompany: "Salesforce",
    totalExperience: 8,
    experience: [
      {
        company: "TCS",
        duration: 28,
        role: "Developer",
        salary: 410000,
        rating: 3.5,
      },
      {
        company: "Deloitte",
        duration: 26,
        role: "Consultant",
        salary: 1100000,
        rating: 4.2,
      },
      {
        company: "Salesforce",
        duration: 14,
        role: "Lead Developer",
        salary: 2600000,
        rating: 4.6,
      },
    ],
  },
  {
    name: "Siddharth Rao",
    age: 25,
    currentCompany: "Freshworks",
    totalExperience: 3,
    experience: [
      {
        company: "Wipro",
        duration: 15,
        role: "Junior Developer",
        salary: 350000,
        rating: 3.3,
      },
      {
        company: "Freshworks",
        duration: 18,
        role: "Developer",
        salary: 800000,
        rating: 4.1,
      },
    ],
  },
  {
    name: "Pooja Gupta",
    age: 32,
    currentCompany: "LinkedIn",
    totalExperience: 10,
    experience: [
      {
        company: "HCL",
        duration: 24,
        role: "Developer",
        salary: 390000,
        rating: 3.4,
      },
      {
        company: "Snapdeal",
        duration: 30,
        role: "Senior Developer",
        salary: 1000000,
        rating: 4.0,
      },
      {
        company: "LinkedIn",
        duration: 22,
        role: "Staff Engineer",
        salary: 3800000,
        rating: 4.8,
      },
    ],
  },
  {
    name: "Aditya Khanna",
    age: 29,
    currentCompany: "Adobe",
    totalExperience: 7,
    experience: [
      {
        company: "Infosys",
        duration: 26,
        role: "Developer",
        salary: 480000,
        rating: 3.7,
      },
      {
        company: "Intuit",
        duration: 22,
        role: "SDE-2",
        salary: 1700000,
        rating: 4.4,
      },
      {
        company: "Adobe",
        duration: 14,
        role: "Senior Engineer",
        salary: 2900000,
        rating: 4.7,
      },
    ],
  },
]);

db.users.find({ experience: { $elemMatch: { duration: { $gt: 30 } } } });

db.users.findOne({ name: "Rajesh Kumar" });

//! 1) we can update the first matching element ({}) --> $

//~ Add a bonus field to the experience history in which the duration is greater than 20
db.users.updateOne(
  { experience: { $elemMatch: { duration: { $gt: 20 } } } }, // filter
  { $set: { "experience.$.bonus": "" } }, // updation
);
//? "experience.$" ==> this will point to the first matching experience object
//? "experience.$.duration" ==> this will point to the duration field of the first matching experience object

//! 2) we can update all the elements --> $[]
db.users.updateOne(
  { experience: { $elemMatch: { duration: { $gt: 20 } } } }, // filter
  { $unset: { "experience.$[].bonus": "" } }, // updation
);

//! 3) we can update all the matching elements --> $[e]
db.users.updateOne(
  { experience: { $elemMatch: { duration: { $gt: 20 } } } }, // filter
  { $set: { "experience.$[e].incentive": 200 } }, // updation
  {
    arrayFilters: [{ "e.duration": { $gt: 20 } }],
  },
);

//& add topCompany:true, to all the exp entries where the company is either google, amazon, or microsoft
db.users.find({
  experience: {
    $elemMatch: { company: { $in: ["Amazon", "Google", "Microsoft"] } },
  },
});

db.users.updateMany(
  {
    experience: {
      $elemMatch: { company: { $in: ["Amazon", "Google", "Microsoft"] } },
    },
  },
  { $set: { "experience.$[e].topCompany": true } },
  {
    arrayFilters: [
      {
        "e.company": { $in: ["Amazon", "Google", "Microsoft"] }, // conditions
      },
    ],
  },
);
//& add midLevel:true, to all the exp history where salary is between 80,000 and 15,00,000
db.users.find({
  experience: { $elemMatch: { salary: { $gt: 800000, $lt: 15000000 } } },
});

db.users.updateMany(
  {
    experience: { $elemMatch: { salary: { $gt: 80000, $lt: 15000000 } } },
  },
  {
    $set: { "experience.$[e].midLevel": true },
  },
  {
    arrayFilters: [{ "e.salary": { $gt: 80000, $lt: 15000000 } }],
  },
);

//& find all the emp who are having sal bw 1000 and 2000
db.emp.find(
  { $and: [{ sal: { $gt: 1000 } }, { sal: { $lt: 2000 } }] },
  {
    _id: 0,
    sal: 1,
  },
);
db.emp.find({ sal: { $gt: 1000, $lt: 2000 } }, { _id: 0, sal: 1 });

//! 48. Find departments whose deptNo is divisible by 10 (use $mod)
// { fieldname: {$mod: [divisor, remainder]} }
db.emp.find({ age: { $mod: [10, 0] } }, { age: 1 });

//! 49. Find employees where age multiplied by 100 is less than salary (use $expr) //TODO:

//! 50. Find all employees whose job title contains "man" (manager, salesman)
db.emp.find({ job: { $regex: /^man/ } }, { job: 1 });

//! 57. Find employees working in dept 20 or 30 AND have "sql" skill
db.emp.find({
  $and: [
    { skills: "sql" }, // first condition
    { deptNo: { $in: [20, 30] } }, // second condition
  ],
});
db.emp.find({ skills: "sql", deptNo: { $in: [20, 30] } });

//! 58. Find all managers or analysts with performance rating above 4.5

//! 59. Find employees with exactly 3 projects AND education is "master" or "phd"
db.emp.find({ skills: { $size: 3 }, education: { $in: ["master", "phd"] } });

//! 27. Set performance rating to 4.9 for employee "martin" and also add last promotion date as today's date to the emp data
db.emp.updateOne(
  { empName: "ward" },
  {
    $set: {
      "performance.rating": 4.9,
      "performance.lastPromotedDate": ISODate("2026-01-31"),
    },
  },
);

//! 28. Add a new facility "gym" to the facilities array of department 20
db.emp.updateOne({ deptNo: 20 }, { $addToSet: { facilities: "gym" } });

//! Add "trainingRequired" field as true for all clerks with performance rating below 4.0
db.emp.updateMany(
  {
    job: "clerk",
    "performance.rating": { $lt: 4 },
  },
  {
    $set: { trainingRequired: true },
  },
);

//! 24. Add skill "problem_solving" at position 1 in skills array for employee "scott"
db.emp.updateOne(
  { empName: "scott" },
  { $push: { skills: { $each: ["problem_solving"], $position: 1 } } },
);

//! 25. Add project "urgent_fix" at position 0 for all analysts

//! find() --> array (X) and findOne() --> object

db.emp.insertMany([
  { no: 1 },
  { no: 2 },
  { no: 3 },
  { no: 4 },
  { no: 5 },
  { no: 6 },
  { no: 7 },
]);

db.emp.find().forEach((doc) => {
  print(doc.age);
  print(doc.empName);
});

// (itCount(), pretty(), forEach(), count());

//! https://excalidraw.com/#json=IiI49j0Q_y_hABOvbyD3T,EdL3PGxqI_JMqW6Fo2mz7w

//! data modelling ==> it defines how data is stored and what is the relation between the data

//? how to define relation between data --> 1) embedded(nested) 2) referenced
//? in mongodb, by default no structure is present --> to (check)validate the data
//& users
let doc1 = {
  username: "abc",
  userAge: 45,
  userContactDetails: {
    email: "abc@gmail",
    phone: "8765434567",
  },
  userAddressDetails: {
    city: "noida",
    state: "up",
  },
};
//! denormalized data

//& advantage -->
//? 1) single query can be used to fetch complete data

//& disadvantage -->
//? 1) 16 MB is the maximum size of a document in MongoDB
//? 2) 100 levels of nesting can be performed
//? 3) sometimes we are over-fetching the data
//? 4) update operations are slow

db.moviesList.insertMany([
  {
    name: "mission impossible",
    genre: "action",
    actors: {
      actor1: "tom cruise",
      age1: 47,
      actor2: "simon P",
      age2: 48,
    },
  },
  {
    name: "silent-hill",
    genre: "horror",
    actors: {
      actor2: "simon P",
      age: 47,
    },
  },
]);

db.moviesList.findOne({}, { actors: 0 });

//& normalized data -> referenced data
//& users
let u1 = {
  _id: "U123",
  username: "abc",
  userAge: 45,
  contactDetails: "C123",
};

let u2 = {
  _id: "U345",
  username: "def",
  userAge: 45,
};

//& contact collection
let c1 = {
  _id: "C123",
  email: "abc@gmail",
  phone: "8765434567",
};

db.moviesName.insertMany([
  {
    _id: "M123",
    name: "mission imposable",
    genre: "action",
  },
  {
    _id: "M234",
    name: "silent-hill",
    genre: "horror",
  },
]);

db.actors.insertMany([
  {
    _id: "A123",
    name: "tom cruise",
    age: 47,
  },
  {
    _id: "A234",
    name: "simon P",
    age: 48,
  },
]);

db.moviesName.updateOne(
  { _id: "M123" },
  { $set: { actor1: "A123", actor2: "A234" } },
);

db.moviesName.aggregate([
  {
    $lookup: {
      from: "actors",
      localField: "actor1",
      foreignField: "id",
      as: "actor1",
    },
  },
]);

//! products and cart
//! embedded

let cart1 = {
  prod1: { name: "samsung phone", price: "50000", qty: 3, brand: "sam" },
  prod2: { name: "laptop", price: "70000", qty: 1, brand: "asus" },
  prod3: { name: "mouse", price: "2000", qty: 2, brand: "asus" },
  prod4: { name: "TV", price: "800000", qty: 1, brand: "samsung" },
};
let cart2 = {
  prod1: { name: "keyboard", price: "10000", qty: 1, brand: "asus" },
  prod2: { name: "shoes", price: "5000", qty: 1, brand: "nike" },
  prod3: { name: "mouse", price: "2000", qty: 2, brand: "sam" },
  prod4: { name: "bottle", price: "800", qty: 1, brand: "nike" },
};

//! referenced
//! cart collection
let c0 = {
  prod1: { pId: "P123", qty: 3 },
  prod2: { pId: "P234", qty: 4 },
};
let c2 = {
  prod1: { name: "keyboard", price: "10000", qty: 1, brand: "asus" },
  prod2: { name: "shoes", price: "5000", qty: 1, brand: "nike" },
  prod3: { name: "mouse", price: "2000", qty: 2, brand: "sam" },
  prod4: { name: "bottle", price: "800", qty: 1, brand: "nike" },
};

//! prod coll
let p1 = {
  _id: "P123",
  name: "phone",
  price: "50000",
  brand: "sam",
};
let p2 = {
  _id: "P234",
  name: "laptop",
  price: "70000",
  brand: "asus",
};
let p3 = {
  name: "mouse",
  brand: "asus",
  price: "4000",
};

let emp = {
  name: "abc",
}; // 0x3ae2
stu = emp;
stu.name = "xyz";

console.log(emp);
// pass by value
// pass by reference

//! to create a collection
db.createCollection("collection_name", { structure });

/* 
let users
{
  name:string
  age:string
  isMarried:boolean
}

*/
//! not used in projects

db.createCollection("userColl", {
  validator: {
    //? this will validate the incoming the data
    $jsonSchema: {
      //? defining the schema
      bsonType: "object", //? input type of incoming data
      required: ["name", "age", "isMarried"],
      properties: {
        name: {
          bsonType: "string",
        },
        age: {
          bsonType: "int",
        },
        isMarried: {
          bsonType: "bool",
        },
      },
    },
  },
});

db.userColl.insertOne({
  name: "abc",
  age: 23,
  isMarried: true,
  email: "abc@gmail",
});

{
  name: string;
  isMarried: boolean;
  address: {
    city: string;
    state: string;
  }
  skills: [string];
}

db.createCollection("user2Coll", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "isMarried", "address", "skills"],
      properties: {
        name: {},
        isMarried: {},
        address: {
          bsonType: "object",
          required: ["city", "state"],
          properties: {
            city: {},
            state: {},
          },
        },
        skills: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
        },
      },
    },
  },
});

db.user2Coll.insertOne({
  name: 123,
  isMarried: "true",
  address: {
    city: ["abc"],
    state: ["abc"],
  },
  skills: [true, "abc"],
});

//! ================================================================================
//! using aggregate() --> we can only fetch the data
//~ ==================== AGGREGATION ===============================================
//? DATA PROCESSING PIPELINE --> multiple queries (stage) are combined to a single query

//! aggregate()
//! QUES) display the count of emp in each department who are are working in "new york"
//? find() X (not possible using find())

//? syntax for aggregate()
//~ db.collection_name.aggregate([{stage1}, {stage2}, {stage3}, ....]);
//! here each stage represent a query
//~ aggregation operators --> $match, $group, $lookup, $unwind, $project

//? syntax for stages : { $aggregation-op: {} }

//? input to the first stage is the complete collection
//! output of each stage in input to the next stage
//! in each stage only one aggregation operator is used

//! ============== different aggregation op ==============
//! $match --> it is used to apply conditions (it is used to filter the documents based on conditions)
//? find all the emp names who are working as clerk
db.emp.find({ job: "clerk" }, { empName: 1, _id: 0 });

db.emp.aggregate([
  {
    $match: { job: "clerk" },
  }, //& stage 1
  {
    $project: {
      empName: 1,
      _id: 0,
    },
  }, //& stage-2
]);

db.emp.aggregate([
  {
    $project: {
      empName: 1,
      _id: 0,
      job: 1,
    },
  }, //& stage-2
  {
    $match: { job: "clerk" },
  }, //& stage 1
]);

db.emp.aggregate([
  {
    $match: {
      job: "clerk",
    },
  },
  {
    $project: {
      empName: 1,
      _id: 0,
    },
  },
]);

//? find all the emp names who are working as clerk and display their names as username

db.emp.aggregate([
  {
    $match: {
      job: "clerk",
    },
  },
  {
    $project: {
      username: "$empName", //? aliasing
      age: 1,
      _id: 0,
      above25: { $gte: ["$age", 25] },
    },
  },
]);

//! whenever we are passing doc field as a value then we have to use double quotes and $ symbol before it.
// ? {aliasName: "$fieldName"} $project op

//& $group --> it is used to group the documents based on some value
//? {
//?   $group: {
//?     _id: "$fieldName"; //? grouping value (to avoid duplicates)
//?     count: {$sum: 1}
//?     total:{$sum: "$fieldName"},
//?     average:{$avg: "$fieldName"},
//?     max:{$max: "$fieldName"},
//?     min:{$min: "$fieldName"},
//?   }
//? }
//~ (max, min, count, total and average are used in the group stage only)

//? find the number of employees in each job (clerk, manager, ....)
db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      count: { $sum: 1 },
    },
  },
]);

//! 1. Find all employees with salary greater than 2000
db.emp.aggregate([
  {
    $match: { sal: { $gt: 2000 } },
  },
]);

//! 2. Find all employees name and hireDate working in department 20 or 30
db.emp.aggregate([
  { $match: { deptNo: { $in: [20, 30] } } }, //s1
  { $project: { empName: 1, hireDate: 1, _id: 0 } }, //s2
]);

//! 3. Find all managers and analysts in department 10 or 30
db.emp.aggregate([
  {
    $match: {
      $and: [
        { job: { $in: ["manager", "analysts"] } },
        { deptNo: { $in: [10, 30] } },
      ],
    },
  },
  {
    $project: {
      job: 1,
      deptNo: 1,
      _id: 0,
    },
  },
]);

//! 4. Find employees with performance rating above 4.0

//! 5. Find all active departments

//! 6. Find employees hired after 1985
ISODate("YYYY-MM-DD");
$gt-- > ISODate("1985-12-31");
$gte-- > ISODate("1986-01-01");

db.emp.aggregate([
  {
    $match: {
      hireDate: { $gte: ISODate("1986-01-01") },
    },
  },
  {
    $project: {
      hireDate: 1,
    },
  },
]);
