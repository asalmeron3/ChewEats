function showRestMenu(restId){
  $(".menu").empty();
  let menu = $("<table>").attr("class", "menu");

  $.get("/api/menu-items/"+ restId, function(data){
    data.forEach(e => {
      menu.append(`<tr><td> ${e.name}</td><td>${e.price}</td></tr>`);
    });

    $(".menu-box").append(menu);
  });
};