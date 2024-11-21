$.get("/api", function(data){
  data.forEach(e => {
    let restaurant = $("<div>").attr({
      "class": "restaurant",
      "id": `${e.name}`
    });
    let restaurantPic = $("<img>").attr({
      "class": "restaurant-img",
      "src": "./restaurant-placeholder.jpeg"
    });

    restaurant.append(restaurantPic);
    restaurant.append(`<p> Name: ${e.name}</p>`);
    restaurant.append(`<p> Restaurant's Shared Rate: ${e.shared_rate_per_mile}</p>`);

    $(".restaurant-list").append(restaurant);

    $(".restaurant").on("click", function(){
      let restId = $(this).attr("id");
      showRestMenu(restId);
    });
  });
});

function showRestMenu(restName){
  $(".menu-box")[0].classList.toggle("hidden");
}
