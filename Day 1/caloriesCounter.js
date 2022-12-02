// Import the fs library (included in NODE)
const fs = require('fs');

// Access to the data file and extract data
fs.readFile('./caloriesData.txt', 'utf8', (err, data) => {
    // Check errors accessing to the file
    if (err) {
      console.error(err);
      return;
    }
    // Declare the array variable to put the Elves calories amount
    let sortedList = [];
    // Declare a counter
    let amountValue = 0;
    // Transform the data file in an Array taking line breaks into account
    data.split(/\r\n|\r|\n/, -1).map((element) => {
        // Loop de array using .map() method and check if the element has any value
        if(element.length){
            // If has value, add this value at counter variable parsing it as an Integer removing spaces if any
            amountValue += parseInt(element.trim());
        } else {
            // If the element hasn't value, it means that is a empty line, so push the counter value at array
            sortedList.push(amountValue);
            // Sort the array in descending order
            sortedList.sort((a, b) => a - b).reverse();
            // Reset the counter
            amountValue = 0;
        }
    });
    // RESULT: (**Part one**) Get the first element of the array (The big one) checking before if the list has values
    sortedList.length && console.log("Elve with maximum calories: " + sortedList[0])
    // RESULT: (**Part two**) Get the three first elements of the array and add them checking before if the list has values
    sortedList.length && console.log("Total amount of three maximum calories elves: " + (sortedList[0] + sortedList[1] + sortedList[2]))
  });