var insectkiller = prompt("How many KG of orange do you want?");
var orderdetail = "";

if (insectkiller > 1 && insectkiller < 5) {
    orderdetail = "congrats you gained a one KG more"
}
else {
    if (insectkiller >= 5 && insectkiller < 10) {
        orderdetail = "congrats you gained a two KG more";
    }
}
confirm("Are you sure??");
alert("Thank you for using this page!");
document.write(orderdetail);
