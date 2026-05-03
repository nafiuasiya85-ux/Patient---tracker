// patient tracker
// array to store patient
let patients = [];
let patientId = 0;

// add patient
function addPatient(name, age, condition)  {
    if (!name || age <= 0 || !condition) {
        console.log("Please provide valid patient information.");
        return;
    }

    const patient = {
        id: patientId++,
        name: name,
        age: age,
        condition: condition,
        date: new Date().toLocaleDateString()
    };

    patients.push(patient);
    console.log(`Patient ${name} added successfully.`);
}

// view patients
function viewPatients() {
    if (patients.length === 0) {
        console.log("No patients found.");
        return;
    }

    console.log("Patient List:");
    patients.forEach(patient => {
        console.log(`ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Condition: ${patient.condition}, Date: ${patient.date}`);
    });
} 
// get total patiennts
function getTotalPatients() {
    console.log(`Total Patients: ${patients.length}`);
}
// filter by condition
function filterByCondition(condition) {
    const filteredPatients = patients.filter(patient => patient.condition.toLowerCase() === condition.toLowerCase());
    if (filteredPatients.length === 0) {
        console.log("No patients found with the specified condition.");
        return;
    }
    console.log("Filtered Patient List:");
    filteredPatients.forEach(patient => {
        console.log(`ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Condition: ${patient.condition}, Date: ${patient.date}`);
    });
}
// deLETE PATIENT
function deletePatient(id) {
    const index = patients.findIndex(patient => patient.id === id);
    if (index === -1) {
        console.log("Patient not found.");
        return;
    }
    patients.splice(index, 1);
    console.log("Patient deleted successfully.");
}

// Search patient by name
function searchPatientByName(name) {
    const foundPatients = patients.filter(patient => patient.name.toLowerCase().includes(name.toLowerCase()));
    if (foundPatients.length === 0) {
        console.log("No patients found with the specified name.");
        return;
    }
    console.log("Found Patients:");
    foundPatients.forEach(patient => {
        console.log(`ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Condition: ${patient.condition}, Date: ${patient.date}`);
    });
}

// Example usage
addPatient("John Doe", 30, "peptic ulcer");
addPatient("Jane Smith", 25, "Cold");
addPatient("Ngozi uche", 40, "Diabetes"); 
addPatient("Deborah james", 50, "Flu");
addPatient("Charlie Davis", 35, "Asthma");
addPatient("Amina Ali", 28, "Hypertension");
addPatient("Jemila usman", 45, "cholera");
addPatient("Eva Green", 33, "Typhoid"); 
addPatient("Peter hope", 30, "Pneumonia"); // Valid patient

viewPatients();

console.log("\nTotal Patients:");
getTotalPatients();
console.log("\nFilter by Condition (Flu):");
filterByCondition("Flu");

