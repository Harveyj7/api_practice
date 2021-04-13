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
