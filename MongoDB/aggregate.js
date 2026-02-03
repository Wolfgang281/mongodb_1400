//! ========================== aggregation =========================================
//! whatever operations are performed using aggregate() it does not modify the original data

/* 
! Aggregation in MongoDB is like a data processing pipeline.

Imagine you have many documents (records), and you want to:
?  filter them
?  group them
?  count them
?  sort them
?  and calculate totals or averages
?  or join two collections

? Instead of writing many queries, you use one single pipeline where data flows step by step.
*/

/*
? In MongoDB, aggregation essentially refers to a powerful framework that allows us to process, transform, and analyze data in a pipeline-based manner, very similar to how SQL performs GROUP BY, HAVING, JOIN, and complex reporting operations. The core idea behind aggregation is that instead of simply fetching documents, we can push documents through a series of well-defined stages — such as filtering, grouping, projecting, sorting, joining, and computing — to generate meaningful insights or reshaped data.

It is a data processing pipeline. Each stage in the pipeline takes the incoming documents, applies a specific transformation, and passes the results to the next stage. For example, $match is like a filter, $group performs grouping and aggregations like count, sum, avg, min, max, $project reshapes the fields, $sort reorders documents, and $lookup performs joins across collections. */

//! db.collection_name.aggregate([{$match}, {s2}, {s3}, {s4}, ...])
//? input to stage1 --> collection
//? input to stage2 --> op of stage1
//? input to stage3 --> op of stage2

//& each stage:{} can only consist one aggregation operator , $match, $project, $addFields, etc...

//& different aggregation operators

//? $match --> it is used to filter out the documents based on some conditions
db.collection_name.aggregate([
  {
    $match: { conditions },
  },
]);

//? $project --> it is used to hide/display (to display use key:1, to hide use key:0) the fields of the documents and also used for aliasing. if key is present then it will be displayed otherwise if not present then it will not be displayed
db.collection_name.aggregate([
  {
    $project: {
      key: 1,
      key2: 0,
      aliasName: "$originalFieldName",
      //   key: <conditions>,
    },
  },
]);

//? $group --> it is used to group the documents based on some field and perform aggregate functions like sum, avg, min, max, count. (these 5 operators can be used only inside $group)
db.collection_name.aggregate([
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 },
      max: { $max: "$fieldName" },
      min: { $min: "$fieldName" },
      avg: { $avg: "$fieldName" },
      sum: { $sum: "$fieldName" },
    },
  },
]);

//? $sort --> it is used to sort the documents in ascending or descending order based on some field,
//~(default is ascending order)
db.collection_name.aggregate([
  {
    $sort: { fieldName: 1 / -1, fieldName2: 1 / -1 }, // 1 for ascending order, -1 for descending order
  },
]);

//? $skip --> it is used to skip the first n documents
db.collection_name.aggregate([
  {
    $skip: n,
  },
]);

//? $limit --> it is used to restrict the number of documents to n
db.collection_name.aggregate([
  {
    $limit: n,
  },
]);

//? $unwind: it is used to fatten the array field
db.collection_name.aggregate([
  {
    $unwind: "$arrayFieldName",
  },
]);

//? $lookup: it is used to perform join operation between two or more collections
db.collection_name.aggregate([
  //& collection_name --> local collection
  {
    $lookup: {
      from: "otherCollectionName", // collection to join
      //& otherCollection_name foreign collection
      localField: "fieldName", // field from the input documents
      foreignField: "fieldName", // field from the documents of the "from" collection
      as: "outputArrayFieldName", // output array field, normally same as localField
    },
  },
]);

//? $unwind --> it is used to deconstruct an array field from the input documents to output a document for each element (used to flatten the array)
db.collection_name.aggregate([
  {
    $unwind: "$arrayFieldName",
  },
]);

//? $addFields --> it is used to add a field while fetching the documents
db.collection_name.aggregate([
  {
    //  $addFields:{ name: {value or expression}}
  },
]);

//? $add --> { $add: [num1, num2, .....] }

//? $subtract --> { $subtract: [num1, num2] } --> num1 - num2

//? $divide --> { $divide: [num1, num2] } --> num1/num2

//? $mod --> { $mod: [num1, num2] } --> num1%num2

//? $multiply --> { $multiply: [num1, num2] } --> num1*num2

//? $ifNull --> it is used to assign a default value if the field is not present
{
  $ifNull: ["$field", defaultValue];
}

//? $year --> it is used to extract year from date input
{
  $year: "$hireDate";
}

//? $month --> it is used to extract month from date input
{
  $month: "$hireDate";
}
// for filtering month values ranges from 1 (jan) to 12 (dec)

//? $dayOfMonth --> it is used to extract day from date input
{
  $dayOfMonth: "$hireDate";
}
// for filtering day values ranges from 1 to 31
// for particular days 1(Sunday) t0 7(Saturday)

//? $bucket --> it is used to group documents based on ranges
/**
 * groupBy: The expression to group by.
 * boundaries: An array of the lower boundaries for each bucket.
 * default: The bucket name for documents that do not fall within the specified boundaries
 * output: {
 *   outputN: Optional. The output object may contain a single or numerous field names used to accumulate values per bucket.
 * }
 */
// db.collection_name.aggregate([
//   {
//     $bucket: {
//       groupBy: "$fieldName",
//       boundaries: [lowerLimit, upperLimit, upperLimit, ...],
//       default: "default value",
//       output: {
//         count: { $sum: 1 },
//         names: { $push: "$name" },
//         age: { $push: "$age" },
//         ...
//       },
//     },
//   },
// ]);

//? $bucketAuto -->
/**
 * groupBy: The expression to group by.
 * buckets: The desired number of buckets
 * output: {
 *   outputN: Optional. The output object may contain a single or numerous field names used to accumulate values per bucket.
 * }
 */
db.collection_name.aggregate([
  {
    $bucketAuto: {
      groupBy: "",
      buckets: "",
      output: {},
    },
  },
]);
