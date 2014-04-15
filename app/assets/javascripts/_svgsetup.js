var margin = {top: 20, right: 20, bottom: 20, left:20},
    width = 1240,
    height = 1000,
    svgWidth = width - margin.left - margin.right,
    svgHeight = height - margin.top - margin.bottom;

var svgWindow = d3.select("svg").attr("width", svgWidth)
                                .attr("height", svgHeight)

var xAxisDay = d3.scale.ordinal()
                    .domain([0, 24])
                    .range([0, svgWidth])
                    // .ticks(5)      #this is reading as undefined ... must be appended some other way.
                    .rangePoints([0, svgWidth])
                    // .orient("bottom")

var yAxis = d3.scale.ordinal()
                    .domain([1, 5])
                    .rangePoints([0, svgHeight])
                    // .orient("left")
