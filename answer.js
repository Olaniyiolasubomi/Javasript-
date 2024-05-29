alert
function sporthouse(age) {
  // The function takes an 'age' parameter, which represents the student's age.

  if (age >= 9 && age <= 11) {
    // This 'if' statement checks if the student's age is between 9 and 11 (inclusive).
    // If the condition is true, the function will return the string "Red house".
    console.log("Red house");
  } else if (age >= 12 && age <= 14) {
    // This 'else if' statement checks if the student's age is between 12 and 14 (inclusive).
    // If the previous 'if' condition was not met and this condition is true, the function will return the string "Yellow house".
    return "Yellow house";
  } else if (age >= 15 && age <= 17) {
    // This 'else if' statement checks if the student's age is between 15 and 17 (inclusive).
    // If the previous conditions were not met and this condition is true, the function will return the string "Green house".
    return "Green house";
  } else if (age >= 18 && age <= 19) {
    // This 'else if' statement checks if the student's age is between 18 and 19 (inclusive).
    // If the previous conditions were not met and this condition is true, the function will return the string "Blue house".
    return "Blue house";
  } else {
    // If none of the above conditions are met, it means the student's age is outside the valid range.
    // In this case, the function will return the string "Invalid age".
    return "Invalid age";
  }
}

// Example usage
console.log(sporthouse(10)); // Output: Red house
console.log(sporthouse(13)); // Output: Yellow house
console.log(sporthouse(16)); // Output: Green house
console.log(sporthouse(18)); // Output: Blue house
console.log(sporthouse(7)); // Output: Invalid age


