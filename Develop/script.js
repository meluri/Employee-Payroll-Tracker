// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  const employees = [];
  let addMore = true;

  while (addMore) {
    const firstName = prompt("Enter the employee's first name:");
    const lastName = prompt("Enter the employee's last name:");
    let salary = parseFloat(prompt("Enter the employee's salary (as a number):"));

    // Check if the salary is a valid number, default to 0 if not
    if (isNaN(salary)) {
      salary = 0;
    }

    // Push a new employee object to the employees array
    employees.push({
      firstName: firstName || 'Unknown',  // Default to 'Unknown' if no name is provided
      lastName: lastName || 'Unknown',
      salary: salary
    });

    // Ask the user if they want to add another employee
    const continueAdding = prompt("Do you want to add another employee? (yes/no)").toLowerCase();
    if (continueAdding !== 'yes') {
      addMore = false;
    }
  }

  return employees;
};
// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  if (employeesArray.length === 0) {
    console.log("No employees available.");
    return;
  }

  // Calculate total salary
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  // Calculate average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Log the average salary and number of employees
  console.log(`The average salary is $${averageSalary.toFixed(2)} for ${employeesArray.length} employees.`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

    if (employeesArray.length === 0) {
      console.log("No employees available.");
      return;
    }
  
    // Generate a random index to select an employee
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
  
    // Log the employee's full name to the console
    console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
  };

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
function displayEmployees(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
