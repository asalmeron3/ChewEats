let currentRestData;

$.get("/api/restaurants", function(data){
  data.forEach(e => {
    let restaurant = $("<div>").attr({
      "class": "restaurant",
      "data-dbid": `${e.id}`,
      "data-rate": `${e.shared_rate_per_mile}`,
      "data-lat" : `${e.lat}`,
      "data-lng" : `${e.lng}`
    });
    let restaurantPic = $("<img>").attr({
      "class": "restaurant-img",
      "src": "./restaurant-placeholder.jpeg"
    });

    restaurant.append(restaurantPic);
    restaurant.append(`<p> Name: ${e.name}</p>`);
    restaurant.append(`<p> Restaurant's Shared Rate: ${e.shared_rate_per_mile}</p>`);

    $(".restaurant-list").append(restaurant);
    
  });

  $(".restaurant").on("click", function(){
    currentRestData = $(this).data();
    if(cart.items.length == 0) {
      cart.restId = currentRestData.dbid;
      showRestMenu(currentRestData);  
    } else if (currentRestData.dbid != cart.restId){
      let emptyTheCart = confirm("You are ordering from a different restaurant. Would you like to cancel your current cart?");
      if(emptyTheCart){
        cart = {items: []};
        orderSubTotal = 0;
        $(".customer-cart").empty();
        showRestMenu(currentRestData);  
      }
    }
  });
});