function Pizza(size) {
  this.pieSize = size;
  this.addon = [];
};

Pizza.prototype.cost = function() {
  var cost = 10;

  if (this.pieSize == "xtra") {
    cost += 12;
  } else if (this.pieSize == "large") {
    cost += 8;
  } else if (this.pieSize == "medium") {
    cost += 4;
  } else {
    cost;
}

  if (this.addon.length === 0) {
    cost + 1;
  } else {
    cost += this.addon.length;
}

  return cost;

};



$(document).ready(function() {
  $("form#pizza-menu").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("select#pizza-option").val();
    var newPizza = new Pizza(pizzaSize);
    var addon = $("input.inlineCheckbox:checkbox:checked").each(function() {
      newPizza.addon.push(addon);
    });

    var pizzaSum = newPizza.cost();

      $("#output").show();
      $("#sum").text(pizzaSum);

  });
});
