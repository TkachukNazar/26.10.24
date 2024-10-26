let n = +prompt("Enter n: ");
if (isNaN(n)) {
  alert("Error. You entered not number");
} else {
  let oldoldf = 1;
  let oldf = 1;
  let newf;

  console.log(`${oldoldf}`);
  console.log(`${oldf}`);
  let a = `${oldoldf} ${oldf}`;
  for (let i = 0; i < n - 2; i++) {
    newf = oldoldf + oldf;
    oldoldf = oldf;
    oldf = newf;
    console.log(`${newf}`);
    a += ` ${newf}`;
  }
  alert(a);
  console.log(a);
}
