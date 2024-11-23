function reviewOrder(){
  // will calculate the total of the order and the shared rates between the customer and the restaurant based on the area minimum
}


function addToOrder(menuItem){
  // menuItem is an obj with the keys name, price, and restId
};

$(".menu").on("click", ".menu-item", function(){
  let rowDataObj = $(this).data();
  addToOrder(rowDataObj);
});