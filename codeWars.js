// Create a phone number
function createPhoneNumber(numbers) {
  let numstr = numbers.join("");
  return `(${numstr.slice(0, 3)}) ${numstr.slice(3, 7)}-${numstr.slice(7, 10)}`;
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// Number which is the sum of all the values to the power of the length of the number
function narcissistic(value) {
  arrayVal = String(value).split("");
  let cubedSum = arrayVal
    .map((digit) => Math.pow(digit, arrayVal.length))
    .reduce((tot, num) => {
      return tot + num;
    }, 0);

  if (value < 10) {
    return true;
  }

  return cubedSum === value;
}
narcissistic(153);

///change letters
function DNAStrand(dna) {
  let newDNA = dna.split("").map((letter) => {
    if (letter === "A") {
      return letter.replace("A", "T");
    } else if (letter === "T") {
      return letter.replace("T", "A");
    } else if (letter === "G") {
      return letter.replace("G", "C");
    } else if (letter === "C") {
      return letter.replace("C", "G");
    } else {
      return letter;
    }
  });
  return newDNA.join("");
}

DNAStrand("ATTGC");
//ternary
function DNAStrand(dna) {
  let newDNA = dna.split("").map((letter) => {
    return letter === "A"
      ? letter.replace("A", "T")
      : letter === "T"
      ? letter.replace("T", "A")
      : letter === "G"
      ? letter.replace("G", "C")
      : letter === "C"
      ? letter.replace("C", "G")
      : letter;
  });
  return newDNA.join("");
}
DNAStrand("ATTGC");

// Return the next square if sq is a perfect square, -1 otherwise
function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    for (let i = sq + 1; i < Math.pow(10, 1000); i++) {
      if (Number.isInteger(Math.sqrt(i))) {
        return i;
      }
    }
    return i;
  } else {
    return -1;
  }
}
//better answer
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
findNextSquare(121);
