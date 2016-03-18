import d3 from 'd3';
import React from 'react';
import ReactFauxDOM from 'react-faux-dom'

class InterestGraph extends React.Component {
  render() {

    // Data
    var data = this.props.data

    // Dimension
    var margin = this.props.margin
    var width = this.props.width - margin.left - margin.right
    var height = this.props.height - margin.top - margin.bottom

    // Create a svg node
    var node = ReactFauxDOM.createElement('svg')

    if (data.length > 0) {
      var x = d3.scale.linear()
      .range([0, width])
      /*
      .domain([
        0,
        d3.max(data[1], function(d) {return d.year; })
      ]);
      */
      .domain(
        d3.extent(data[1].data, function(d) { return d.year })
      );

      var y = d3.scale.linear()
      .range([height, 0])
      .domain(
        d3.extent(data[1].data, function(d) { return d.endBalance })
      );

      var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom')

      var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')

      var svg = d3.select(node)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)

      svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Balance ($)')

      // Draw lines
      data.forEach(function(lineData) {
        var line = d3.svg.line()
        .x(function (d) { return x(d.year) })
        .y(function (d) { return y(d.endBalance) })
        .interpolate('linear');

        svg.append('path')
        .datum(lineData.data)
        .attr('class', 'line')
        .attr('d', line)
        .attr('stroke', lineData.colour)
        .attr('stroke-width', 2)
        .attr('fill', 'none')

        // Draw cycle
        svg.selectAll('circle.'+lineData.className)
        .data(lineData.data)
        .enter().append('circle')
        .attr('class', lineData.className)
        .attr('cx', function(d) { return x(d.year) })
        .attr('cy', function(d) { return y(d.endBalance) })
        .attr('r', 8)
        .style('fill', 'green')
        .on('mouseover', function(event) {
          d3.select(this).style('fill', 'red');
        })
        .on('mouseout', function(event) {
          d3.select(this).style('fill', 'green');
        })
        .append('svg:title')
        .text(function(d) { return 'Year:' + d.year + ' - ' + d.endBalance })
      });
    }

    return (
      <div className="interest-graph">
        <h2>The Graph</h2>
        {node.toReact()}
      </div>
    );
  }
}

InterestGraph.defaultProps = {
  width: 960,
  height: 500,
  margin: {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  },
  data: []
}

export default InterestGraph;
