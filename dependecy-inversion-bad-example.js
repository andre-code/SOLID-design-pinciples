// Let's say I want to contact the server for some data and fill it in the form using jquery
getData("/address/to/data", function (data) {
  $("#input1").text(data.property1);
  $("#input2").text(data.property2);
});

// But then we are not going to use jquery anymore, that forces to change all the logic code  
getData("/address/to/data", function (data) {
  document.getElementById("input1").value = data.property1;
  document.getElementById("input2").value = data.property2;
});