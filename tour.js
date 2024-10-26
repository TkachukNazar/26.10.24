let a = prompt("Введіть країну: ");

let s;
let price = 0;
let hot = false;
let coef = 0.8;
hot = confirm("Тур гарячий?");
switch (a) {
  case "Іспанія":
    hot ? (price = 1000 * coef) : (price = 1000);
    s = `Ціна туру в Іспанію: $${price}`;
    break;
  case "Англія":
    hot ? (price = 820 * coef) : (price = 820);
    s = `Ціна туру в Англію: $${price}`;
    break;
  case "Італія":
    hot ? (price = 650 * coef) : (price = 650);
    s = `Ціна туру в Італію: $${price}`;
    break;
  case "Франція":
    hot ? (price = 700 * coef) : (price = 700);
    s = `Ціна туру в Францію: $${price}`;
    break;
  default:
    s = "Вкажіть правильно країну";
}
alert(s);
