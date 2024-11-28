function getCustomers(){
  $.get("/api/customers", function(data){
    data.forEach(customer => {
      console.log(customer);
    });
  });
};