var Fruit = prompt("How many KG of orange do you want?");
var orderdetail = "";
while (Fruit != 2 && Fruit != 3) {
    Fruit = prompt("How many KG of orange do you want?");
}
if (Fruit == 2) {
    orderdetail = "congrats you gained a one KG more";
}
else {
    if (Fruit == 3) {
        orderdetail = "congrats you gained a two KG more";
    }
}
var picture = prompt("How many picture do you want to print?");
var sum = ""
var pic = '<img src="orange.jpg"/>'
for (var i = 0; i < picture; i++) {
    sum = sum + pic;
}

confirm("Are you sure??");
alert("Thank you for using this page!");
document.write(orderdetail);
document.write(sum);
