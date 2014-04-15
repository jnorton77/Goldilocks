var xAxisDay = d3.scale.linear()
                    .domain([0, 24])
                    .range([0, 960])
                    // .ticks(5)      #this is reading as undefined ... must be appended some other way.
                    .rangePoints([0, 960])
                    // .orient("bottom")

var yAxis = d3.scale.linear()
                    .domain([1, 5])
                    .rangePoints([0, 1200])
                    // .orient("left")
