function getCustomers(){
  $.get("/api/customers", function(data){
    data.forEach(customer => {
      console.log(customer);
    });
  });
};

$("#customer-dialog").dialog({
  autoOpen: false,
  modal: true,
  buttons: {
    agatha: function(){console.log("Agatha");},
    rio: function(){console.log("Rio");},
    teen: function(){console.log("Teen");}
  }
});

$("#open-modal").on("click", function(){
  $("#customer-dialog").dialog("open");
  console.log("clicked on modal button");
});
