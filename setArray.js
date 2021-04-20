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

//lower intermediate : how many capitals in string

function howManyCapitals(string) {
  return string
    .split("")
    .reduce((acc, char) => (isCapital(char) ? ++acc : acc), 0);
}

function isCapital(char) {
  return char !== " " && char === char.toUpperCase();
}

function swap(obj) {
  return Object.keys(obj).reduce((result, x) => {
    result[obj[x]] = x;
    return result;
  }, {});
}

//array methods

function append(array, element) {
  array.concat(element);
  return;
}

function prepend(array, element) {
  array.unshift(element);
  return array;
}

function deleteFirst(array) {
  array.shift();
  return array;
}

function deleteLast(array) {
  array.pop();
  return array;
}

//Continuously refresh browser page
javascript: document.getElementsByTagName("body")[0].innerHTML =
  '<iframe id="testFrame" src="' +
  window.location.toString() +
  '" style="position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;"></iframe>';
reloadTimer = setInterval(function () {
  document.getElementById("testFrame").src = document.getElementById(
    "testFrame"
  ).src;
}, 10000);

console.log(document.querySelector("body > div.main > div").innerText);
