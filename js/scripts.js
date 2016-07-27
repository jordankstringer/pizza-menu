function Pizza(size) {
  this.size = size;
  this.addon = [];
};

Pizza.prototype.cost = function() {
  var cost = 10;

  if (this.size === "xtra") {
    cost + 12;
  } else if (this.size === "large") {
    cost + 8;
  } else if (this.size === "medium") {
    cost + 4;
  } else if (this.size === "small") {
    cost + 0;
}

  if (this.addon.length === 0) {
    cost + 1;
  } else {
    cost += this.addon.length;
}

  return price;

};
