let cart = {items: []};

function reviewOrder(){
  // will calculate the total of the order and the shared rates between the customer and the restaurant based on the area minimum
}


function addToCart(menuItem){
  // menuItem is an obj with the keys name, price, and restId
  let itemData = menuItem.data();
  let isSameRestaurant = checkIfSameRestaurant(itemData);
  let allItems = cart.items;
  if(isSameRestaurant){
    let itemDoesNotExist = true;
    if(allItems.length != 0){
      $(".customer-cart").empty();
      allItems.forEach(e => {
        if(itemData.name == e.name){
          itemDoesNotExist = false;
          e.quantity++;
        }
      });
    };

    if(itemDoesNotExist) {
      let item = {"quantity": 1, "name": itemData.name, "price":itemData.price};
      allItems.push(item);
    };
    cart.items = allItems;
    let orderSubTotal = 0;
    cart.items.forEach(e =>{
      let {quantity, name, price} = e;
      let itemsCalculatedPrice = quantity * Number(price);
      let row = $("<tr>").append(`<td> ${quantity}  X ${name} ... ${itemsCalculatedPrice}</td>`);
      orderSubTotal+= itemsCalculatedPrice;
      $(".customer-cart").append(row);
    })
    $(".customer-cart").append(`<tr><td> Subtotal = ${orderSubTotal}`);
  } else {
    alert("You are ordering from a different restaurant. Would you like to cancel your current cart?");
  };
};

function checkIfSameRestaurant(itemData) {
  if(cart.restId) {
    if(cart.restId == itemData.restid) {
      return true;
    } else if( cart.restid != itemData.restid){
      return false;
    }
  } else {
    cart.restId = itemData.restid;
    return true;
  }
};

$(".menu").on("click", ".add-to-cart", function(){
  let rowDataObj = $($(this).parent());
  addToCart(rowDataObj);
});
