var myVar; 

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  $(".loading").hide();
  $(".quiz").show();
}
