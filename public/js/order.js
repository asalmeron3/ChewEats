function reviewOrder(){
  // will calculate the total of the order and the shared rates between the customer and the restaurant based on the area minimum
}


function addToOrder(menuItem){
  console.log(menuItem.data("name") + " : " + menuItem.data("price"));
};

$(".menu").on("click", "tr", function(){
  let row = this;
  console.log(this);
  addToOrder(row);
});