let currentCustomer;

function getCustomerById(id){
  $.get("/api/customers/" + id, function(data){
    let customerData = data[0];
    if(currentCustomer){
      let changeCustomer = confirm("You are currently ordering as "+ currentCustomer.name + ". Would you like to change?");
      if(changeCustomer){
        currentCustomer = customerData;
      }
    } else {
      currentCustomer = customerData;
    }
    $("#customer-dialog").dialog("close");
  });
};

$("#customer-dialog").dialog({
  autoOpen: false,
  modal: true,
  buttons: {
    Agatha: function(){getCustomerById("1");},
    Rio: function(){getCustomerById("3");},
    Teen: function(){getCustomerById("2");},
    Lilia: function(){getCustomerById("4");},
    Jen: function(){getCustomerById("5");},
    Alice: function(){getCustomerById("6");}
  }
});

$("#open-modal").on("click", function(){
  $("#customer-dialog").dialog("open");
  console.log("clicked on modal button");
});
