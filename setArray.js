//Kodiri level 1 last exercise

function addValue(array, value) {
  return Array.from(new Set(array).add(value));
}

function removeValue(array, value) {
  let setFromArray = new Set(array);
  setFromArray.delete(value);
  return Array.from(setFromArray);
}

function changeCase(str) {
  let arr = [...str];
  let arr2 = arr.map((letter) => swapCase(letter)).join("");
  return arr2;
}

function swapCase(letter) {
  if (letter === letter.toUpperCase()) {
    return letter.toLowerCase();
  } else {
    return letter.toUpperCase();
  }
}

changeCase("This Coding Challenge");

///get date
function getFormattedTime(date) {
  let hours = normaliseDateToken(date.getHours());
  let minutes = normaliseDateToken(date.getMinutes());
  let seconds = normaliseDateToken(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function normaliseDateToken(dateToken) {
  return dateToken < 10 ? `0${dateToken}` : `${dateToken}`;
}
getFormattedTime(new Date());
