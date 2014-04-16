var parseResponses = function(responses) {
  var holder = [];
  for(var i=0; i<responses.length; i++) {
    var date = new Date(responses[i]["created_at"])
    holder.push({
      "x" : date,
      "y" : responses[i]["answer"]
    })
  }
  return (_.sortBy(holder, function(object){return object.x}));
}

var ordinalParseResponses = function(responses) {
  var holder = [];
  for(var i=0; i<responses.length; i++) {
    var date = new Date(responses[i]["created_at"])
    holder.push({
      "x" : date,
      "answer" : ["Comfort Zone", "Comfort-Learning Zone", "Learning Zone", "Panic-Learning Zone", "Panic Zone"][i%5]
    })
  }
  return (_.sortBy(holder, function(object){return object.x}));
}

var parseHRates = function(heartRates) {
  var holder = [];
  for(var i=0; i<heartRates.length; i++) {
    var date = new Date(heartRates[i]["created_at"])
    holder.push({
      "x" : date,
      "y" : heartRates[i]["bpm"]
    })
  }
  console.log(_.sortBy(holder, function(object){return object.x}))
  return (_.sortBy(holder, function(object){return object.x}));
}
