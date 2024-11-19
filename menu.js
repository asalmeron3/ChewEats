let menu = $("<div>").attr("class", "menu");
let menuItem = $("<div>").attr("class", "menu-item");

menuItem.append(`<table><tr><td> ${"FoodNamePlaceHolder"}</td><td>${"PricePlaceHolder"}</td></tr></table>`);
menu.append(menuItem);

$(".menu-box").append(menu);