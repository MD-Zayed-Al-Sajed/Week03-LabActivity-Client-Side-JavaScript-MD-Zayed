function sortAndAddNumbers() {
    // Get the input value
    const input = document.getElementById("arrayInput").value;
  
    // Convert the input string to an array of numbers
    const numbers = input.split(",").map(Number);
  
    if (numbers.length === 0 || numbers.some(isNaN)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers!";
      return;
    }
  
    // Find the range of numbers between the smallest and largest numbers
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
  
    // Track missing numbers
    const additionalNumbers = [];
  
    // Add missing numbers between min and max
    for (let i = min; i <= max; i++) {
      if (!numbers.includes(i)) {
        numbers.push(i); // Add missing numbers
        additionalNumbers.push(i); // Track added numbers
      }
    }
  
    // Sort the array in descending order
    const sortedNumbers = numbers.sort((a, b) => b - a);

    // Result Display
    const resultHTML = `
      <p>Original Input: ${input}</p>
      <p>Sorted Array (with missing numbers added): ${sortedNumbers.join(", ")}</p>
      <p>Additional Numbers Added: ${additionalNumbers.length > 0 ? additionalNumbers.join(", ") : "None"}</p>
    `;
    document.getElementById("result").innerHTML = resultHTML;
  }

  function combineArrays() {
    // Get the input values for the two arrays
    const input1 = document.getElementById("arrayInput1").value;
    const input2 = document.getElementById("arrayInput2").value;
  
    // Convert the input strings to arrays of numbers
    const arr1 = input1.split(",").map(Number);
    const arr2 = input2.split(",").map(Number);
  
    if (arr1.length === 0 || arr2.length === 0 || arr1.some(isNaN) || arr2.some(isNaN)) {
      document.getElementById("result2").innerHTML = "Please enter valid numbers for both arrays!";
      return;
    }
  
    // Combine the two arrays
    const combinedArray = [...arr1, ...arr2];
  
    // Remove duplicates
    const uniqueArray = [...new Set(combinedArray)];
  
    // Sort the array in ascending order
    const sortedUniqueArray = uniqueArray.sort((a, b) => a - b);
  
    // Find the duplicate numbers that were removed
    const duplicateNumbers = combinedArray.filter((item, index) => combinedArray.indexOf(item) !== index);
    const uniqueDuplicates = [...new Set(duplicateNumbers)]; // Remove duplicate duplicates
  
    // Display the result
    const resultHTML = `
      <p>Original Array 1: ${arr1.join(", ")}</p>
      <p>Original Array 2: ${arr2.join(", ")}</p>
      <p>Combined and Sorted Array (with duplicates removed): ${sortedUniqueArray.join(", ")}</p>
      <p>Duplicate Numbers Removed: ${uniqueDuplicates.length > 0 ? uniqueDuplicates.join(", ") : "None"}</p>
    `;
    document.getElementById("result2").innerHTML = resultHTML;
  }
  