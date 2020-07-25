// applying DIP
function fillFromServer(url, view) {
  getData(url, function (data) {
      view.setValues(data);
  });
}

// In JS is a bit less easy to see the abstraction but we can say that our particular instance, the textViewJQuery, is a detail that "depends" on the abstraction view.
var textViewJQuery = {
  setValues: function (data) {
    $("#input1").text(data.property1);
    $("#input2").text(data.property2);
  }
};
fillFromServer("/address/to/data", textViewJQuery);

// And then I just create a new "implementation" of the view abstraction, like so:
var textViewNoJQuery = {
  setValues: function (data) {
    document.getElementById("input1").value = data.property1;
    document.getElementById("input2").value = data.property2;
  }
};
// Finally I inject this particular instance of the view abstraction into my fillFromServer abstraction:
fillFromServer("/address/to/data", textViewNoJQuery);