// Task 1: Function to calculate average marks from user input
function calculateAverageMarks() {
  let inputMarks = document.getElementById("marksInput").value;
  let marks = inputMarks.split(',').map(mark => parseFloat(mark.trim()));
  marks = marks.filter(mark => !isNaN(mark));

  if (marks.length === 0) {
    document.getElementById("result-task1").textContent = "Please enter valid marks.";
    return;
  }

  let sum = marks.reduce((acc, curr) => acc + curr, 0);
  let average = sum / marks.length;
  document.getElementById("result-task1").textContent = `Average Marks: ${average.toFixed(2)}`;
}

// Task 2: Function to apply 10% discount
function applyDiscount() {
  let inputPrices = document.getElementById("pricesInput").value;
  let prices = inputPrices.split(',').map(price => parseFloat(price.trim()));
  prices = prices.filter(price => !isNaN(price));

  if (prices.length === 0) {
    document.getElementById("result-task2").textContent = "Please enter valid prices.";
    return;
  }

  let discountedPrices = prices.map(price => price - (price * 0.10));
  document.getElementById("result-task2").textContent = `Prices after 10% discount: ${discountedPrices.join(', ')}`;
}

// Task 3: Function to update the companies names
let companiesArray = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
function updateCurrentCompaniesDisplay() {
  document.getElementById("currentCompanies").textContent = `Current Companies: [${companiesArray.map(company => `"${company}"`).join(', ')}]`;
}

//Function to add or delete companies in the array
function modifyCompanies() {
  // Get the values from the input fields
  let companyToAdd = document.getElementById("addCompanyInput").value.trim();
  let companyToDelete = document.getElementById("deleteCompanyInput").value.trim();

  // If add and delete are provided, replace the company (hold the same place)
  if (companyToAdd && companyToDelete) {
    let companyIndex = companiesArray.indexOf(companyToDelete);
    if (companyIndex !== -1) {
      companiesArray[companyIndex] = companyToAdd; // Replace the deleted company with the new one
    } else {
      document.getElementById("result-task3").textContent = `"${companyToDelete}" not found in the company list.`;
      return;
    }
  } 
  // If only delete is provided, it will delete the company
  else if (companyToDelete) {
    let companyIndex = companiesArray.indexOf(companyToDelete);
    if (companyIndex !== -1) {
      companiesArray.splice(companyIndex, 1); // Remove the company if found
    } else {
      document.getElementById("result-task3").textContent = `"${companyToDelete}" not found in the company list.`;
      return;
    }
  } 
  // If only add is provided, it will add company at the end
  else if (companyToAdd) {
    companiesArray.push(companyToAdd);
  }

  // Update the display of the current companies
  updateCurrentCompaniesDisplay();

  // to Display the updated companies list
  document.getElementById("result-task3").textContent = `Updated Companies: ${companiesArray.join(', ')}`;
}

// Initial display of current companies names
updateCurrentCompaniesDisplay();

// Adding event listeners to buttons
document.getElementById("averageMarks").addEventListener("click", calculateAverageMarks);
document.getElementById("applyDiscount").addEventListener("click", applyDiscount);
document.getElementById("modifyCompanies").addEventListener("click", modifyCompanies);
