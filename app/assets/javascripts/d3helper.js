Array.prototype.max = function() {
  var maximum = this[0];
  var length = this.length;
  for (var i = 1; i < length; i++) if (this[i] > maximum) maximum = this[i];
  return maximum;
}

Array.prototype.min = function() {
  var minimum = this[0];
  var len = this.length;
  for (var i = 1; i < length; i++) if (this[i] < minimum) minimum = this[i];
  return minimum;
}
