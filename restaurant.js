let restaurant = $("<div>").attr("class", "restaurant");
let restaurantPic = $("<img>").attr({
  "class": "restaurant-img",
  "src": "./restaurant-placeholder.jpeg"
});

restaurant.append(restaurantPic);
restaurant.append(`<p> Name: ${"MickeyB's"}</p>`);
restaurant.append(`<p> Restaurant's Shared Rate: ${"$1/mile"}</p>`);


$(".restaurant-list").append(restaurant);