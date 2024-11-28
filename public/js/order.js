let cart = {items: []};
let orderSubTotal = 0;

function reviewOrder(buttonInfo){
  console.log("coordinates: " + currentRestData.lat + " , " + currentRestData.lng);
  getCustomers();
  // will calculate the total of the order and the shared rates between the customer and the restaurant based on the area minimum
  //"restaurant shared rate: " + currentRestData.rate);
  //"Subtotal: " + buttonInfo.toFixed(2));
  //"Subtotal Plus Tax: " + (Number(buttonInfo)*1.08).toFixed(2));
  //"Total with 1 dollar app fee: " + ((Number(buttonInfo)*1.08 + 1).toFixed(2)));
  //"This order will need your share of delivery or doesnot meet restaurants min");
  //restaurant min revenue, max distance/ shared cost, location/coordinates
  //have a select pop up with the characters and their location/ shared rate
}


function addToCart(menuItem){
  // menuItem is an obj with the keys name, price, and restId
  let itemData = menuItem.data();
  let allItems = cart.items;
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
  cart.items.forEach(item =>{
    let {quantity, name, price} = item;
    let itemsCalculatedPrice = quantity * Number(price);
    let row = $("<tr>").append(`<td> ${quantity}  x ${name} ... ${itemsCalculatedPrice.toFixed(2)}</td>`);
    orderSubTotal+= itemsCalculatedPrice;
    $(".customer-cart").append(row);
  })
  $(".customer-cart").append(`<tr id=subtotal ><td> Subtotal = ${orderSubTotal.toFixed(2)}</td></tr>`);
  $(".customer-cart").append(`<button class=place-order> Place My Order </button>`);
};

$(".menu").on("click", ".add-to-cart", function(){
  let rowDataObj = $($(this).parent());
  addToCart(rowDataObj);
});

$(".customer-cart").on("click", ".place-order", function(){
  reviewOrder(orderSubTotal);
});