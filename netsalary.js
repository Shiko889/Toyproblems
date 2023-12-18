 // Function to calculate PAYE (tax) based on the given tax rates and gross salary
function calculatePAYE(grossSalary) {
    // Define tax brackets and rates based on the provided information
    // Implement the logic to calculate PAYE
    // Use the tax brackets and rates to determine the PAYE amount
    let paye = 0;
    // Calculation logic goes here
    return paye;
}
//Function  to calculate NHIF deductions based on the given NHIF rates and gross salary
function calculateNHIF(grossSalary) {
    // Define NHIF deduction rates based on the provided information
    // Implement the logic to calculate NHIF deductions
    let nhifDeductions = 0;
    // Calculation logic goes here
    return nhifDeductions;
}

// Function to calculate NSSF deductions based on the given NSSF rates and gross salary
function calculateNSSF(grossSalary) {
    // Define NSSF deduction rates based on the provided information
    // Implement the logic to calculate NSSF deductions
    let nssfDeductions = 0;
    // Calculation logic goes here
    return nssfDeductions;
}

// Function to calculate net salary using the previously defined functions
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (tax)
    const paye = calculatePAYE(grossSalary);

    // Calculate NHIF Deductions
    const nhifDeductions = calculateNHIF(grossSalary);

    // Calculate NSSF Deductions
    const nssfDeductions = calculateNSSF(grossSalary);

    // Calculate Net Salary
    const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;

    // Return the calculated values
    return {
        grossSalary,
        paye,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}

