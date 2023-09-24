// console.log('Hello Iyke!')

let name = ['mike', 'hegfj', 'ken', 'abel', 'bishop']

let no = name.slice(0, this.name)

// console.log(no)

function deleteRestOfWord(inputString, targetLetter) {
    // Find the index of the target letter
    const index = inputString.indexOf(targetLetter);
  
    // If the target letter is found, truncate the string
    if (index !== -1) {
      return inputString.slice(0, index + 1); // Include the target letter
    } else {
      // Handle the case when the target letter is not found
      return inputString;
    }
  }
  
  // Example usage:
  const inputString = "example.pdf";
  const targetLetter = ".";
  const result = deleteRestOfWord(inputString, targetLetter);
  console.log(result); // Output: "exampla"