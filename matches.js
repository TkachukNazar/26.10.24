let n = prompt("Введіть к-сть сірників: ");
if (isNaN(n)) {
  alert("Ви ввели не число");
} else {
  let i = 0;
  let a = "";
  let b = 1;
  let count;
  while (n > 1) {
    i = 0;
    while (i < n) {
      a += "|  ";
      i++;
    }
    alert(`${a} \n${n}`);
    b++;
    if (b % 2 != 0) {
      do {
        count = +prompt("Скільки сірників берете: ");
        count <= 3 && !isNaN(count) && count > 0
          ? (n -= count || c)
          : alert("Кількість сірників повинна бути в межах від 1 до 3");
      } while (count > 3 || isNaN(count) || count <= 0);
    } else {
      count = Math.floor(Math.random() * 3) + 1;
      if (n == 2) {
        count = 1;
      }
      n -= count;
      alert(`Комп'ютер ходить: ${count}`);
    }
    a = "";
  }
  if (b % 2 != 0) {
    alert("Виграв користувач");
  } else {
    alert("Виграв комп'ютер");
  }
}
