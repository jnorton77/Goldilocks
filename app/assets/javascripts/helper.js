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

var parseResponses = function(responses) {
  var holder = [];
  for(var i=0; i<responses.length; i++) {
    var date = new Date(responses[i]["created_at"])
    var hourInteger = date.getHours() + date.getMinutes()/60 + date.getSeconds()/3600
    holder.push({
      "x" : hourInteger,
      "y" : responses[i]["answer"]
    })
  }
  return holder;
}