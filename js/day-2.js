// // patient tracker
// // array to store patient
// let patients = [];
// let patientId = 0;

// // add patient
// function addPatient(name, age, condition)  {
//     if (!name || age <= 0 || !condition) {
//         console.log("Please provide valid patient information.");
//         return;
//     }

//     const patient = {
//         id: patientId++,
//         name: name,
//         age: age,
//         condition: condition,
//         date: new Date().toLocaleDateString()
//     };

//     patients.push(patient);
//     console.log(`Patient ${name} added successfully.`);
// }

// // view patients
// function viewPatients() {
//     if (patients.length === 0) {
//         console.log("No patients found.");
//         return;
//     }

//     console.log("Patient List:");
//     patients.forEach(patient => {
//         console.log(`ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Condition: ${patient.condition}, Date: ${patient.date}`);
//     });
// } 
// // get total patiennts
// function getTotalPatients() {
//     console.log(`Total Patients: ${patients.length}`);
// }
// // filter by condition
// function filterByCondition(condition) {
//     const filteredPatients = patients.filter(patient => patient.condition.toLowerCase() === condition.toLowerCase());
//     if (filteredPatients.length === 0) {
//         console.log("No patients found with the specified condition.");
//         return;
//     }
//     console.log("Filtered Patient List:");
//     filteredPatients.forEach(patient => {
//         console.log(`ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Condition: ${patient.condition}, Date: ${patient.date}`);
//     });
// }
// // deLETE PATIENT
// function deletePatient(id) {
//     const index = patients.findIndex(patient => patient.id === id);
//     if (index === -1) {
//         console.log("Patient not found.");
//         return;
//     }
//     patients.splice(index, 1);
//     console.log("Patient deleted successfully.");
// }

// // Search patient by name
// function searchPatientByName(name) {
//     const foundPatients = patients.filter(patient => patient.name.toLowerCase().includes(name.toLowerCase()));
//     if (foundPatients.length === 0) {
//         console.log("No patients found with the specified name.");
//         return;
//     }
//     console.log("Found Patients:");
//     foundPatients.forEach(patient => {
//         console.log(`ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Condition: ${patient.condition}, Date: ${patient.date}`);
//     });
// }

// // Example usage
// addPatient("John Doe", 30, "peptic ulcer");
// addPatient("Jane Smith", 25, "Cold");
// addPatient("Ngozi uche", 40, "Diabetes"); 
// addPatient("Deborah james", 50, "Flu");
// addPatient("Charlie Davis", 35, "Asthma");
// addPatient("Amina Ali", 28, "Hypertension");
// addPatient("Jemila usman", 45, "cholera");
// addPatient("Eva Green", 33, "Typhoid"); 
// addPatient("Peter hope", 30, "Pneumonia"); // Valid patient

// viewPatients();

// console.log("\nTotal Patients:");
// getTotalPatients();
// console.log("\nFilter by Condition (Flu):");
// filterByCondition("Flu");

// addExpense("Groceries", 150, "Food");
// addExpense("Electricity Bill", 75, "Utilities");
// addExpense("Movie Tickets", 30, "Entertainment");
// addExpense("Dinner", 60, "Food");
// addExpense("Internet Bill", 50, "Utilities");
// addExpense("Gym Membership", 40, "Health");




// expense tracker
let expenses = [];
let expenseId = 0;

// Add expense
function addExpense(description, amount, category) {
    if (!description || amount <= 0) {
        console.log("Please provide valid expense information.");
        return;
    }

    const expense = {
        id: expenseId + 1,
        description: description,
        amount: amount,
        category: category
    };

    expenses.push(expense);
    console.log(`Expense added successfully.`);
}

// View expenses
function viewExpenses() {
    if (expenses.length === 0) {
        console.log("No expenses found.");
        return;
    }
    console.log("Expense List:");
    expenses.forEach(expense => {
        console.log(`ID: ${expense.id}, Description: ${expense.description}, Amount: $${expense.amount}, Category: ${expense.category}`);
    });
}

// Get total expenses
function getTotalExpenses() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    console.log(`Total Expenses: $${total}`);
}

// Filter by category
function filterByCategory(category) {
    const filteredExpenses = expenses.filter(expense => expense.category.toLowerCase() === category.toLowerCase());
    if (filteredExpenses.length === 0) {
        console.log("No expenses found with the specified category.");
        return;
    }
    console.log("Filtered Expense List:");
    filteredExpenses.forEach(expense => {
        console.log(`ID: ${expense.id}, Description: ${expense.description}, Amount: $${expense.amount}, Category: ${expense.category}`);
    });
}
// Delete expense
function deleteExpense(id) {
    const index = expenses.findIndex(expense => expense.id === id);
    if (index === -1) {
        console.log("Expense not found.");
        return;
    }
    expenses.splice(index, 1);
    console.log("Expense deleted successfully.");
}

// Search expense by description
function searchExpenseByDescription(description) {
    const foundExpenses = expenses.filter(expense => expense.description.toLowerCase().includes(description.toLowerCase()));
    if (foundExpenses.length === 0) {
        console.log("No expenses found with the specified description.");
        return;
    }
    console.log("Found Expenses:");
    foundExpenses.forEach(expense => {
        console.log(`ID: ${expense.id}, Description: ${expense.description}, Amount: $${expense.amount}, Category: ${expense.category}`);
    });
}

addExpense("Groceries", 150, "Food");
addExpense("Electricity Bill", 75, "Utilities");
addExpense("Movie Tickets", 30, "Entertainment");
addExpense("Dinner", 60, "Food");
addExpense("Internet Bill", 50, "Utilities");
addExpense("Gym Membership", 40, "Health");
addExpense("Lunch", 20, "Food");
addExpense("Water Bill", 25, "Utilities");
addExpense("Concert Tickets", 100, "Entertainment");
addExpense("Doctor Visit", 200, "Health");
addExpense("Coffee", 5, "Food");
addExpense("Gas Bill", 60, "Utilities");
addExpense("Streaming Subscription", 15, "Entertainment");
addExpense("Medication", 80, "Health");

viewExpenses();
console.log("\nTotal Expenses:");
getTotalExpenses();
console.log("\nFilter by Category (Food):");
filterByCategory("Food");
console.log("\nSearch for Expenses (Groceries):");
searchExpenseByDescription("Groceries");