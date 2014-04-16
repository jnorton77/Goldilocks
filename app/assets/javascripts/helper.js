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

var parseHRates = function(heartRates) {
  var holder = [];
  for(var i=0; i<heartRates.length; i++) {
    var date = new Date(heartRates[i]["recorded_at"])
    holder.push({
      "x" : date,
      "y" : heartRates[i]["bpm"]
    })
  }
  console.log(_.sortBy(holder, function(object){return object.x}))
  return (_.sortBy(holder, function(object){return object.x}));
}

// var parseEventRectangles = function(events) {
//   var holder = [];
//   for(var i=0; i<events.length; i++) {
//     var beginTime = new Date(event[i]["beginTime"])
//     var endTime = new Date(event)[i]["endTime"]
//     holder.push({
//       "x" : date,
//       "width" : beginTime - endTime
//       "y" : 900
//     })
//   }
//   console.log(_.sortBy(holder, function(object){return object.x}))
//   return (_.sortBy(holder, function(object){return object.x}));
// }
