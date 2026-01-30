/* 
! Find employees with sal greater than 2000.

! Find departments with budget less than or equal to 150000.

! Query employees whose city equals "Chicago".

! Find employees whose education is not "bachelor".

! Find employees whose deptNo is in [10, 30].

! Find employees whose empNo is not in [7369, 7499].

! Query employees with bonus >= 1000 and sal < 3000. (not this)

! Find employees where mgr field is null.

! Find departments where headOfDept exists (non-null). (not this)

! Query employees whose age is between 25 and 40 (inclusive). (not this)
*/

/* 


Q: Write a query to find the details of employee with empNo: 7839 using findOne().
Q: What are the three parameters of findOne()? Which ones are optional?
Q: Write a query to find one employee from department 30.
Q: Find one employee whose job is "manager".
Q: Write a query to find any one document from the emp collection (no filter).
Q: Find one employee and return only their empName and job fields (exclude _id).
Q: What does findOne() return if no document matches the filter?
Q: Find one employee with sal greater than 3000.
Q: Find one employee who works in "Chicago" city.
Q: Write a query to find one employee whose empName is "king" and return only empName, job, and sal.
Q: Find one document from dept collection where deptNo is 20.
Q: What is the difference between findOne() and find()?
Q: Find one employee whose age is less than 30.
Q: Write a query to find one employee with commission (comm) equal to 0.
Q: Find one employee who has "python" in their skills array.
Q: Find the department located in "dallas" (case-sensitive).
Q: Write a query to find one employee with salary between 2000 and 3000.
Q: Find one employee whose manager (mgr) is 7698.
Q: In projection, what does 1 mean and what does 0 mean?
Q: Find one employee who works in department 20 AND has a salary greater than 2000, returning only empName, sal, and deptNo.
Q: Write a query to find one employee whose performance rating is greater than 4.5 (nested field).
Q: Find one employee from the emp collection who either works in department 10 OR has a job as "analyst".
Q: Write a query to find one employee who does NOT have insurance (havingInsurance: false).
Q: Find one employee whose salary is in the array [1100, 1250, 1500].
Q: Write a query to find one employee who has both "html" and "python" in their skills array.
Q: Find one remote employee (isRemote: true) who works in department 20.
Q: Write a query to find one employee whose age is NOT equal to 25.
Q: Find one employee whose empName starts with "m" (you'll need to research regex).
Q: Write a query to find the department with exactly 0 employees.
Q: Find one employee with a performance rating less than or equal to 4.0 and return only their empName and performance object.
Q: Write a query to find one employee whose education is "master" and job is "manager".
Q: Find one employee who was hired after January 1, 1982 (hireDate comparison).
Q: Write a query to find one employee whose projects array contains "project_alpha".
Q: Find one employee who has a bonus greater than 1000 but no commission (comm: 0).
Q: Write a query to find one department that is NOT active (isActive: false).
Q: Find one employee whose city is either "Noida" or "Pune".
Q: Write a query to find one employee with totalHoursWorked greater than 2000.
Q: Find one employee whose lastReviewDate (nested in performance) is in 2024.
Q: Write a query to find one employee whose empNo is greater than 7800 and return all fields except _id and skills.

*/

let c = 10;

// ============================================
// MONGODB OPERATORS PRACTICE QUESTIONS
// Collections: emp.dept & emp.emp
// ============================================

// ============================================
// ARRAY OPERATORS ($size, $all, $elemMatch, $in, $nin)
// ============================================

// 1. Find all employees who have exactly 3 skills

// 2. Find all employees who have exactly 4 skills

// 3. Find all employees who have more than 2 skills (use $expr with $size)

// 4. Find all employees who have both "sql" and "python" skills

// 5. Find all employees who have both "html" and "java" skills

// 6. Find all employees working on both "project_alpha" and "research_initiative"

// 7. Find departments that have both "conference_room" and "printer" facilities

// 8. Find departments with exactly 2 facilities

// 9. Find departments with exactly 3 facilities

// 10. Find employees whose job is either "manager" or "analyst"

// 11. Find employees from cities: "Chicago", "Dallas", or "New York"

// 12. Find employees with education level "master", "phd", or "mba"

// 13. Find departments NOT located in "boston" or "chicago"

// 14. Find employees whose job is NOT "clerk" or "salesman"

// 15. Find employees who have skills in "java", "python", or "c++"

// 16. Find all employees who do NOT have "sql" in their skills array

// 17. Find employees working on exactly 1 project

// 18. Find employees working on exactly 2 projects

// 19. Find employees with performance rating greater than 4.0 (use $elemMatch concept with embedded doc)

// 20. Find all employees who have "leadership" OR "management" in their skills

// ============================================
// ELEMENT OPERATORS ($exists, $type)
// ============================================

// 21. Find all employees who have an "incentive" field

// 22. Find all employees who do NOT have an "incentive" field

// 23. Find all departments where "headOfDept" field exists

// 24. Find all departments where "headOfDept" is null

// 25. Find employees where "mgr" field exists and is not null

// 26. Find employees where "comm" is 0 (commission is zero)

// 27. Find employees where "havingInsurance" field exists

// 28. Find employees where "havingInsurance" does not exist

// 29. Find all employees where "skills" is an array type

// 30. Find all employees where "age" is a number type

// 31. Find departments where "budget" exists

// 32. Find employees where "totalHoursWorked" exists and is greater than 2000

// 33. Find all employees who have a "city" field

// 34. Find departments where "isActive" field exists

// 35. Find employees where "bonus" field exists and is greater than 1000

// ============================================
// EVALUATION OPERATORS ($regex, $expr, $mod, $where)
// ============================================

// 36. Find all employees whose name starts with "m" (case insensitive)

// 37. Find all employees whose name ends with "n" (case insensitive)

// 38. Find all employees whose name contains "ar" (case insensitive)

// 39. Find departments whose name contains "sales" (case insensitive)

// 40. Find departments whose location starts with "new" (case insensitive)

// 41. Find employees whose city name ends with "go" (Chicago)

// 42. Find employees where salary is greater than bonus (use $expr)

// 43. Find employees where totalHoursWorked is greater than 2000 (use $expr)

// 44. Find departments where budget is greater than 150000 (use $expr)

// 45. Find employees where (sal + bonus) is greater than 3000 (use $expr)

// 46. Find employees where comm is greater than bonus (use $expr)

// 47. Find employees whose empNo is divisible by 2 (use $mod)

// 48. Find departments whose deptNo is divisible by 10 (use $mod)

// 49. Find employees where age multiplied by 100 is less than salary (use $expr)

// 50. Find all employees whose job title contains "man" (manager, salesman)

// ============================================
// COMBINED OPERATORS (Mix of Array, Element, Evaluation)
// ============================================

// 51. Find employees with exactly 2 skills AND salary greater than 2000

// 52. Find employees who have "python" skill AND work remotely (isRemote: true)

// 53. Find employees who DON'T have insurance AND salary is less than 1500

// 54. Find departments with more than 2 facilities AND budget greater than 150000

// 55. Find employees whose name starts with "s" OR ends with "d"

// 56. Find employees with incentive field AND commission greater than 0

// 57. Find employees working in dept 20 or 30 AND have "sql" skill

// 58. Find all managers or analysts with performance rating above 4.5

// 59. Find employees with exactly 3 projects AND education is "master" or "phd"

// 60. Find departments where employeeCount is greater than 3 AND isActive is true

//! update op questions
// ============================================
// MONGODB UPDATE OPERATORS PRACTICE QUESTIONS
// Collections: emp.dept & emp.emp
// ============================================

// ============================================
// $expr OPERATOR (Comparison & Aggregation)
// ============================================

// 1. Find all employees whose salary is greater than their bonus

// 2. Find all employees whose age is less than their department number

// 3. Find all employees whose totalHoursWorked is greater than (salary * 0.5)

// 4. Find all employees whose commission is greater than their bonus

// 5. Find employees hired in the month of April (month = 4)

// 6. Find employees hired in the month of December (month = 12)

// 7. Find employees hired in the year 1981

// 8. Find employees whose (salary + bonus + comm) is greater than 4000

// 9. Find departments where budget is greater than (employeeCount * 50000)

// 10. Find employees where totalHoursWorked divided by age is greater than 50

// ============================================
// $mod OPERATOR (Modulo Operations)
// ============================================

// 11. Find all employees whose salary is even (divisible by 2, remainder 0)

// 12. Find all employees whose salary is odd (divisible by 2, remainder 1)

// 13. Find employees whose empNo is divisible by 3 (remainder 0)

// 14. Find employees whose bonus is divisible by 500 (remainder 0)

// 15. Find departments whose deptNo is divisible by 10 (remainder 0)

// 16. Find employees whose age is divisible by 5 (remainder 0)

// 17. Find employees whose totalHoursWorked when divided by 100 gives remainder 0

// 18. Find departments whose budget when divided by 10000 gives remainder 0

// 19. Find employees whose empNo ends in 0 (divisible by 10)

// 20. Find employees whose commission when divided by 400 gives remainder 0

// ============================================
// FIELD UPDATE OPERATORS ($set, $unset, $rename)
// ============================================

// 21. Add a new field "lastPromotionDate" with current date to employee "smith"

// 22. Update employee "allen" salary to 2000

// 23. Add a field "parkingSpot" with value "A-101" to employee "king"

// 24. Set "isActive" to false for department 40

// 25. Add "workFromHome" field with value true for employee "ward"

// 26. Update the location of "accounting" department to "manhattan"

// 27. Set performance rating to 4.9 for employee "martin"

// 28. Add a new facility "gym" to the facilities array of department 20

// 29. Rename field "sal" to "salary" for all employees (if not done already)

// 30. Rename field "comm" to "commission" for all employees

// 31. Rename field "loc" to "location" for all departments

// 32. Remove the "incentive" field from employee "ward"

// 33. Remove the "age" field from all employees in department 30

// 34. Remove "headOfDept" field from department 40

// 35. Add "emailVerified" field with value true to all managers

// ============================================
// ARITHMETIC UPDATE OPERATORS ($max, $min, $inc, $mul)
// ============================================

// 36. Update employee "smith" salary to 1500 only if 1500 is greater than current salary ($max)

// 37. Update employee "james" salary to 1000 only if 1000 is less than current salary ($min)

// 38. Increase salary of employee "adams" by 500 ($inc)

// 39. Decrease commission of employee "martin" by 200 ($inc with negative)

// 40. Increase bonus of all clerks by 300

// 41. Increase budget of department 20 by 50000

// 42. Decrease totalHoursWorked of employee "turner" by 50 hours

// 43. Increase performance rating of employee "ford" by 0.2 (use $inc)

// 44. Update salary of "allen" to 1800 only if 1800 is greater than current salary

// 45. Increase age of employee "miller" by 1 (birthday increment)

// 46. Multiply salary of employee "king" by 1.1 (10% raise using $mul)

// 47. Multiply bonus of all analysts by 1.15 (15% increase)

// 48. Multiply budget of all active departments by 1.05 (5% increase)

// 49. Increase employeeCount of department 30 by 1 (new hire)

// 50. Set floor number to 6 for department 10, only if 6 is greater than current floor

// ============================================
// COMBINED UPDATE OPERATIONS
// ============================================

// 51. For employee "scott": increase salary by 500 AND add field "certified" with value true

// 52. For employee "blake": set performance rating to 4.5 AND increase bonus by 200

// 53. For all salesmen: increase commission by 100 AND add "targetAchieved" field as true

// 54. For department 20: increase budget by 30000 AND add facility "cafeteria"

// 55. For employee "jones": rename "totalHoursWorked" to "hoursLogged" AND increase it by 100

// 56. For all employees in dept 10: increase salary by 300 AND increase bonus by 150

// 57. For employee "clark": set salary to 2800 (only if greater) AND remove "age" field

// 58. For all remote employees: increase bonus by 400 AND add "remoteAllowance" field with 200

// 59. For department "sales": increase employeeCount by 2 AND set isActive to true

// 60. For all employees with insurance: increase bonus by 250 AND add "insurancePremium" with 100

// ============================================
// ADVANCED UPDATE SCENARIOS
// ============================================

// 61. Increase salary by 10% for all employees whose performance rating is above 4.5

// 62. Add "seniorEmployee" field as true for employees hired before 1982

// 63. Set commission to 0 for all employees whose job is NOT "salesman"

// 64. Increase budget by 20000 for departments with more than 4 employees

// 65. Add "trainingRequired" field as true for all clerks with performance rating below 4.0

// 66. Decrease bonus by 100 for employees without insurance

// 67. Add "performanceBonus" of 500 for employees with rating exactly 5.0

// 68. Update totalHoursWorked to minimum of 2000 for all employees (using $max)

// 69. Set all commissions to maximum of 1000 (reduce if higher using $min)

// 70. Increase salary by age * 10 for all employees in research department (use $expr in filter)

let b = 30;

//! questions for array update operators ($push, $pull, $pullAll, $pop, $each($slice, $position, $sort,), $addToSet, $, $[], $[e])
// ============================================
// MONGODB ARRAY UPDATE OPERATORS PRACTICE QUESTIONS
// Collections: emp.dept & emp.emp
// ============================================

// ============================================
// $push OPERATOR (Add elements to array)
// ============================================

// 1. Add a new skill "mongodb" to employee "smith"

// 2. Add a new project "mobile_app" to employee "allen"

// 3. Add facility "parking_lot" to department 10

// 4. Add skill "docker" to employee "jones"

// 5. Add project "cloud_migration" to employee "king"

// 6. Add facility "security_desk" to department 20

// 7. Add skill "kubernetes" to employee "scott"

// 8. Add a new project "api_development" to employee "ward"

// 9. Add facility "recreation_room" to all active departments

// 10. Add skill "typescript" to all employees in department 30

// ============================================
// $push with $each (Add multiple elements)
// ============================================

// 11. Add multiple skills ["angular", "vue", "svelte"] to employee "turner"

// 12. Add multiple projects ["project_beta", "project_gamma"] to employee "blake"

// 13. Add multiple facilities ["elevator", "emergency_exit"] to department 30

// 14. Add skills ["nodejs", "express", "nestjs"] to employee "adams"

// 15. Add projects ["security_audit", "compliance_review"] to employee "clark"

// 16. Add facilities ["water_cooler", "vending_machine"] to department 10

// 17. Add skills ["aws", "azure", "gcp"] to all managers

// 18. Add projects ["training_program", "onboarding_system"] to employee "ford"

// 19. Add multiple skills ["git", "jenkins", "ci/cd"] to employee "miller"

// 20. Add facilities ["bike_rack", "locker_room"] to all departments with budget > 150000

// ============================================
// $push with $each and $position (Insert at specific position)
// ============================================

// 21. Add skill "leadership" at the beginning (position 0) of skills array for employee "jones"

// 22. Add project "priority_project" at position 0 for employee "king"

// 23. Add facility "reception" at the beginning of facilities for department 20

// 24. Add skill "problem_solving" at position 1 in skills array for employee "scott"

// 25. Add project "urgent_fix" at position 0 for all analysts

// ============================================
// $push with $each and $slice (Limit array size)
// ============================================

// 26. Add skill "graphql" to employee "ward" and keep only last 5 skills (use $slice: -5)

// 27. Add project "new_feature" to employee "martin" and keep only last 3 projects

// 28. Add facility "storage_new" to department 40 and keep only first 2 facilities (use $slice: 2)

// 29. Add skill "solidity" to employee "adams" and keep only last 4 skills

// 30. Add project "optimization" to employee "blake" and keep only last 4 projects

// ============================================
// $push with $each and $sort (Sort array after insertion)
// ============================================

// 31. Add skill "animation" to employee "allen" and sort all skills alphabetically (use $sort: 1)

// 32. Add project "analytics_dashboard" to employee "scott" and sort projects in descending order

// 33. Add facility "auditorium" to department 20 and sort facilities alphabetically

// 34. Add skill "testing" to employee "turner" and sort skills in ascending order

// 35. Add multiple skills ["redis", "kafka"] to employee "ford" and sort all skills

// ============================================
// $push with $each, $position, $slice, $sort COMBINED
// ============================================

// 36. Add "team_lead" skill at position 0 to "jones", keep last 6 skills, and sort them

// 37. Add projects ["refactoring", "documentation"] at position 0 to "clark", keep last 5, sort them

// 38. Add facility "innovation_lab" to dept 20 at position 1, keep last 4 facilities, sort them

// ============================================
// $addToSet OPERATOR (Add only if not exists - no duplicates)
// ============================================

// 39. Add skill "python" to employee "clark" only if it doesn't already exist

// 40. Add project "project_alpha" to employee "jones" only if not already present

// 41. Add facility "conference_room" to department 10 only if it doesn't exist

// 42. Add skill "sql" to employee "smith" only if not present (avoid duplicates)

// 43. Add project "sales_campaign_q1" to employee "blake" only if not already added

// 44. Add facility "printer" to all departments, but only if they don't have it already

// 45. Add skill "html" to all employees in dept 30, avoiding duplicates

// ============================================
// $addToSet with $each (Add multiple unique elements)
// ============================================

// 46. Add skills ["react", "angular", "vue"] to employee "ward" avoiding duplicates

// 47. Add projects ["audit_2024", "compliance_check"] to employee "king" without duplicates

// 48. Add facilities ["first_aid", "fire_extinguisher"] to dept 30 avoiding duplicates

// 49. Add skills ["agile", "scrum", "kanban"] to all managers without creating duplicates

// 50. Add projects ["code_review", "peer_testing"] to all analysts avoiding duplicates

// ============================================
// $pull OPERATOR (Remove specific elements from array)
// ============================================

// 51. Remove skill "html" from employee "jones"

// 52. Remove project "data_entry" from employee "james"

// 53. Remove facility "storage" from department 40

// 54. Remove skill "sql" from employee "smith"

// 55. Remove project "web_portal" from employee "turner"

// 56. Remove facility "loading_dock" from all departments

// 57. Remove skill "excel" from all clerks

// 58. Remove project "sales_campaign_q1" from all employees in dept 30

// 59. Remove facility "coffee_machine" from department 10

// 60. Remove skill "powerpoint" from employee "martin"

// ============================================
// $pull with conditions (Remove based on criteria)
// ============================================

// 61. Remove all skills that start with "html" from employee "clark"

// 62. Remove all projects containing "sales" in name from employee "blake"

// 63. Remove facilities starting with "old_" from all departments

// 64. Remove all skills with length less than 3 characters from employee "adams"

// 65. Remove projects that end with "_q1" from all salesmen

// ============================================
// $pullAll OPERATOR (Remove multiple specific values)
// ============================================

// 66. Remove skills ["sql", "excel"] from employee "james"

// 67. Remove projects ["sales_campaign_q1", "sales_campaign_q2"] from employee "allen"

// 68. Remove facilities ["storage", "loading_dock"] from department 40

// 69. Remove skills ["html", "css", "javascript"] from employee "miller"

// 70. Remove multiple projects ["project_alpha", "research_initiative"] from employee "smith"

// 71. Remove facilities ["printer", "coffee_machine"] from department 10

// 72. Remove skills ["blockchain", "ai"] from all employees in dept 20

// ============================================
// $pop OPERATOR (Remove first or last element)
// ============================================

// 73. Remove the last skill from employee "turner" (use $pop: 1)

// 74. Remove the first project from employee "blake" (use $pop: -1)

// 75. Remove the last facility from department 20 (use $pop: 1)

// 76. Remove the first skill from employee "clark" (use $pop: -1)

// 77. Remove the last project from all analysts (use $pop: 1)

// 78. Remove the first facility from department 30 (use $pop: -1)

// 79. Remove the last skill from all employees with more than 3 skills

// 80. Remove the first project from employee "king" (use $pop: -1)

// ============================================
// $ POSITIONAL OPERATOR (Update first matching array element)
// ============================================

// 81. Employee "clark" has ["java", "python", "html", "accounting"]. Change "python" to "python3"
//     Find by skills: "python" and update that specific element

// 82. Employee "turner" has multiple skills. Update the first occurrence of "javascript" to "javascript_es6"

// 83. Department 20 has facilities array. Update first "conference_room" to "conference_room_A"

// 84. For employee "jones", update the project "project_alpha" to "project_alpha_v2"

// 85. Update first skill "sql" to "postgresql" for employee "smith"

// ============================================
// $[] ALL POSITIONAL OPERATOR (Update all array elements)
// ============================================

// 86. Convert all skills to uppercase for employee "adams" (use $toUpper with $[])

// 87. Add "_completed" suffix to all projects for employee "martin"

// 88. Add "_zone" suffix to all facilities in department 30

// 89. Prepend "skill_" to all skills for employee "james"

// 90. Append "_2024" to all projects for employee "ford"

// ============================================
// $[element] FILTERED POSITIONAL (Update specific array elements matching criteria)
// ============================================

// 91. Employee "clark" has skills ["java", "python", "html", "accounting"]
//     Update all skills that have length > 5 characters to add "_advanced" suffix
//     Use arrayFilters

// 92. For employee "blake", update all projects that contain "sales" to add "_priority" suffix
//     Use arrayFilters with $regex

// 93. Update all facilities in dept 20 that start with "conference" to add "_renovated" suffix

// 94. For employee "turner", update all skills that match ["javascript", "html", "php"] to add "_v2"

// 95. Update all projects for "jones" that don't contain "alpha" to add "_archived" suffix

// ============================================
// COMPLEX ARRAY UPDATE SCENARIOS
// ============================================

// 96. Add "expert_" prefix to all skills for managers with performance rating > 4.0

// 97. Remove "sales_campaign_q1" from all employees and add "sales_campaign_q4" instead

// 98. For all remote employees, add skills ["remote_collaboration", "zoom"] avoiding duplicates

// 99. Add facility "solar_panel" to all departments with budget > 180000 at position 0

// 100. Remove last 2 skills from employees who have more than 5 skills (use $slice)

// 101. Add project "year_end_review" to all employees, keep only last 4 projects sorted alphabetically

// 102. For dept 10, remove all facilities and add new ones ["modern_office", "smart_board", "lounge"]

// 103. Update all skills containing "sql" to "sql_certified" for employees with insurance

// 104. Add "urgent" tag to first project of all employees with performance rating < 3.5

// 105. Remove skills ["html", "css"] from all employees and add ["react", "nextjs"] without duplicates

let a = 20;
// aggregating
// ============================================
// MONGODB AGGREGATION PIPELINE PRACTICE QUESTIONS
// Collections: emp.dept & emp.emp
// ============================================

// ============================================
// STAGE 1: $match (Filtering documents)
// ============================================

// 1. Find all employees with salary greater than 2000

// 2. Find all employees working in department 20 or 30

// 3. Find all managers and analysts

// 4. Find employees with performance rating above 4.0

// 5. Find all active departments

// 6. Find employees hired after 1985

// 7. Find all remote employees

// 8. Find departments with budget greater than 150000

// 9. Find employees who have insurance

// 10. Find all salesmen with commission greater than 500

// ============================================
// STAGE 2: $project (Selecting/transforming fields)
// ============================================

// 11. Show only empName, job, and salary for all employees

// 12. Show deptNo, dName, and budget for all departments

// 13. Show employee name and calculate annual salary (salary * 12)

// 14. Show employee name and total compensation (sal + bonus + comm)

// 15. Show department name and budget in thousands (budget / 1000)

// 16. Show employee name and whether salary > 2000 (boolean field)

// 17. Show employee name, job, and hide _id field

// 18. Show first 3 characters of employee name (use $substr)

// 19. Show department name in uppercase

// 20. Show employee name and number of skills (use $size)

// ============================================
// STAGE 3: $group (Grouping and aggregating)
// ============================================

// 21. Count total number of employees in each department

// 22. Find average salary by department

// 23. Find total salary expense by department

// 24. Find maximum salary in each department

// 25. Find minimum salary in each department

// 26. Count employees by job role

// 27. Find total bonus paid by department

// 28. Find average performance rating by job role

// 29. Count total employees by city

// 30. Find sum of budget for all departments

// 31. Find average age by education level

// 32. Count remote vs non-remote employees

// 33. Find total commission paid by department

// 34. Find the highest bonus in each job category

// 35. Count employees with and without insurance

// ============================================
// STAGE 4: $sort (Sorting documents)
// ============================================

// 36. Sort employees by salary in descending order

// 37. Sort departments by budget in ascending order

// 38. Sort employees by hireDate (oldest first)

// 39. Sort employees by performance rating (highest first)

// 40. Sort employees by name alphabetically

// 41. Sort departments by employeeCount descending

// 42. Sort employees by age ascending

// 43. Sort employees first by department, then by salary descending

// 44. Sort employees by totalHoursWorked descending

// 45. Sort departments by established date (oldest first)

// ============================================
// STAGE 5: $limit and $skip (Pagination)
// ============================================

// 46. Get top 5 highest paid employees

// 47. Get top 3 departments by budget

// 48. Skip first 3 employees and show next 5

// 49. Get employees ranked 4-7 by salary

// 50. Show only first 2 departments

// ============================================
// STAGE 6: $lookup (Joining collections)
// ============================================

// 51. Join employees with their department information

// 52. Join departments with their employees

// 53. For each employee, show their department name and location

// 54. For each department, show all employee names working there

// 55. Join employees with departments and show only matching records

// ============================================
// STAGE 7: $unwind (Deconstructing arrays)
// ============================================

// 56. Unwind skills array to show one skill per document

// 57. Unwind projects array for all employees

// 58. Unwind facilities array for departments

// 59. Count total number of skills across all employees (after unwind)

// 60. Count how many employees have each specific skill (unwind then group)

// 61. List all projects with employee names (unwind projects)

// 62. Show each facility with its department name (unwind facilities)

// ============================================
// STAGE 8: $addFields (Adding computed fields)
// ============================================

// 63. Add a field "annualSalary" (salary * 12) to all employees

// 64. Add field "totalCompensation" (sal + bonus + comm)

// 65. Add field "experienceYears" (current year - hire year)

// 66. Add field "isHighPerformer" (rating >= 4.5)

// 67. Add field "budgetInMillions" (budget / 1000000)

// 68. Add field "skillCount" (number of skills)

// 69. Add field "projectCount" (number of projects)

// 70. Add field "hourlyRate" (salary / totalHoursWorked)

// ============================================
// STAGE 9: $count (Counting documents)
// ============================================

// 71. Count total number of employees

// 72. Count employees with salary > 2000

// 73. Count departments with budget > 150000

// 74. Count remote employees

// 75. Count managers across all departments

// ============================================
// STAGE 10: $sum, $avg, $max, $min in $group
// ============================================

// 76. Find total salary budget across all departments

// 77. Find average employee age

// 78. Find the highest salary in the company

// 79. Find the lowest salary in the company

// 80. Calculate total hours worked by all employees

// 81. Find average bonus by department

// 82. Find total commission paid company-wide

// 83. Find maximum performance rating

// 84. Find minimum age across all employees

// 85. Calculate average totalHoursWorked by job role

// ============================================
// STAGE 11: $bucket and $bucketAuto (Grouping into ranges)
// ============================================

// 86. Group employees into salary ranges: 0-1500, 1500-3000, 3000+

// 87. Group employees by age ranges: 20-30, 30-40, 40-50, 50+

// 88. Group departments by budget ranges: 0-150k, 150k-200k, 200k+

// 89. Auto-bucket employees into 3 groups by salary

// 90. Group employees by performance rating ranges: 0-3, 3-4, 4-5

// ============================================
// STAGE 12: $facet (Multiple aggregation pipelines)
// ============================================

// 91. Get both: top 5 earners AND average salary by department

// 92. Get: total employees count AND employees grouped by job

// 93. Get: highest salary AND lowest salary AND average salary

// 94. Get: department statistics AND employee statistics in one query

// 95. Get: remote employee count AND non-remote count AND average salary for each

// ============================================
// STAGE 13: $sortByCount (Group and count, then sort)
// ============================================

// 96. Count employees by job role and sort by count

// 97. Count employees by city and sort by count

// 98. Count employees by education level and sort

// 99. Count employees by department and sort

// 100. Count departments by location and sort

// ============================================
// STAGE 14: $replaceWith (Replace document root)
// ============================================

// 101. Replace root with performance subdocument for all employees

// 102. Extract only the embedded performance object as main document

// 103. Promote performance fields to top level

// ============================================
// STAGE 15: $out and $merge (Output to collection)
// ============================================

// 104. Create a new collection "high_performers" with employees having rating > 4.5

// 105. Create "dept_summary" collection with employee count and avg salary per dept

// 106. Merge aggregation results into existing collection

// ============================================
// COMPLEX AGGREGATION SCENARIOS
// ============================================

// 107. Find department with highest average employee salary

// 108. Find top 3 most common skills across all employees

// 109. Calculate salary percentile ranking for each employee

// 110. Find employees earning more than their department average

// 111. List departments with their total compensation expense (sal + bonus + comm)

// 112. Find the most experienced employee in each department

// 113. Calculate manager-to-employee ratio by department

// 114. Find employees working on more than 2 projects

// 115. Get monthly hiring trend (count of employees hired each month)

// 116. Find correlation between education level and average salary

// 117. List all unique skills in the company with employee count per skill

// 118. Calculate retention rate by hire year

// 119. Find departments where average performance rating > 4.0

// 120. Get employee distribution across salary quartiles

// ============================================
// STAGE 16: $cond, $switch (Conditional expressions)
// ============================================

// 121. Classify employees as "Junior" (sal < 1500), "Mid" (1500-3000), "Senior" (>3000)

// 122. Categorize performance: "Excellent" (>4.5), "Good" (3.5-4.5), "Needs Improvement" (<3.5)

// 123. Label departments as "Large" (>5 emp), "Medium" (3-5), "Small" (<3)

// 124. Mark employees as "Experienced" if hired before 1985, else "Recent"

// 125. Classify age groups: "Young" (<30), "Mid-career" (30-45), "Senior" (>45)

// ============================================
// STAGE 17: String Operators ($concat, $toUpper, $toLower, $substr)
// ============================================

// 126. Create full employee title: "Mr./Ms. [Name] - [Job]"

// 127. Convert all department names to uppercase

// 128. Extract first 3 letters of employee names

// 129. Concatenate department name and location: "Sales - Chicago"

// 130. Convert employee names to lowercase

// ============================================
// STAGE 18: Date Operators ($year, $month, $dayOfMonth, $dateToString)
// ============================================

// 131. Extract hire year for all employees

// 132. Extract hire month for all employees

// 133. Find employees hired in specific month (e.g., April)

// 134. Calculate years of service for each employee

// 135. Format hireDate as "DD-MM-YYYY" string

// 136. Group employees by hire year and count

// 137. Find employees with anniversary this month

// 138. Extract day of week when employee was hired

// ============================================
// STAGE 19: Array Operators ($size, $filter, $map, $reduce)
// ============================================

// 139. Count number of skills for each employee

// 140. Filter employees who have "python" in skills

// 141. Show only employees with more than 3 skills

// 142. Extract first 2 skills from each employee

// 143. Check if employee has any skill from ["java", "python", "c++"]

// 144. Count total unique skills in company

// 145. Find employees who have all skills from ["sql", "python"]

// ============================================
// STAGE 20: $setWindowFields (Window functions)
// ============================================

// 146. Rank employees by salary within their department

// 147. Calculate running total of salary by department

// 148. Find salary difference between employee and dept average

// 149. Assign row numbers to employees sorted by hire date

// 150. Calculate moving average of last 3 salaries by department

// ============================================
// STAGE 21: $geoNear and Location-based (if coordinates added)
// ============================================

// Note: These require adding coordinates to department locations

// 151. Find departments within 100km of given coordinates

// 152. Sort departments by distance from headquarters

// 153. Find nearest department to a given location

// ============================================
// STAGE 22: $redact (Conditional document filtering)
// ============================================

// 154. Redact sensitive salary info for employees earning > 4000

// 155. Show only public department information (hide budget)

// ============================================
// STAGE 23: $sample (Random sampling)
// ============================================

// 156. Get 5 random employees

// 157. Get 2 random departments

// 158. Random sample of 3 managers

// ============================================
// STAGE 24: Multi-stage Complex Pipelines
// ============================================

// 159. Find avg salary by dept, filter depts with avg > 2000, sort by avg desc

// 160. Count employees by city, show only cities with > 2 employees

// 161. Calculate total compensation by dept, sort desc, limit to top 3

// 162. Unwind skills, group by skill, count, sort by count desc, limit 5

// 163. Join emp with dept, calculate total emp cost per dept, sort by cost

// 164. Group by education, find avg salary, avg age, count employees

// 165. Find employees above dept avg salary with their salary difference

// 166. Calculate dept-wise performance metrics (avg rating, total bonus)

// 167. Find top performer in each department by performance rating

// 168. Analyze hiring trends: count by year and month

// 169. Find correlation between skills count and salary

// 170. Department efficiency: budget per employee, sort by efficiency
