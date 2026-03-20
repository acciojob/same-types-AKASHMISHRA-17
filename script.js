function isSameType(value1, value2) {
  // Condition 3 & 4: Handle NaN specifically
  // We use Number.isNaN because it doesn't do type coercion
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return Number.isNaN(value1) && Number.isNaN(value2);
  }

  // Condition 1 & 2: Standard type comparison
  return typeof value1 === typeof value2;
}

//do not change the code below.
// let value1 = prompt("Enter Start of the Range.");
// let value2 = prompt("Enter End Of the Range.");
// alert(isSameType(value1, value2));
