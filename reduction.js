let first = +prompt("Введіть чисельник дробу: ");
let second = +prompt("Введіть знаменник дробу: ");
if (isNaN(first) || isNaN(second)) alert("Ви ввели не число");
else {
  let first2 = first;
  let second2 = second;
  while (first2 != second2) {
    if (first2 < second2) {
      second2 -= first2;
    } else {
      first2 -= second2;
    }
  }

  first /= first2;
  second /= second2;
  if (first == 0 || second == 0) {
    alert("Error");
  } else {
    if (first > second) {
      if (first % second == 0) {
        alert(`${~~(first / second)}`);
      } else {
        alert(`${~~(first / second)}  ${first % second}/${second}`);
      }
    } else {
      alert(`${first}/${second}`);
    }
  }
}
