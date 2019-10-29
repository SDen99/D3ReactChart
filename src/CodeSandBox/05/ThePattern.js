import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
    this.svg.style('background-color', 'red');
    this.margin = { top: 20, left: 30, bottom: 20, right: 30 };
  };

  init=(data, dims)=>{
    this.setDims(dims); //<-----one
    this.setScales(); //<-------two
    this.chart = this.svg.append('g');
    this.chart.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
    this.chart.append('text').text(`height: ${dims.height}`);
    this.createAxes();//<-----three

    this.updateData(data);
  };

  // first; set up dims, including inner dimensions as everything else hinges on these initial dimensions.
  setDims=(dims)=>{
    this.dims = dims;
    this.innerHeight = this.dims.height-(this.margin.top+this.margin.bottom);
    this.innerWidth = this.dims.width-(this.margin.left+this.margin.right);
  };

  // second; set up scales using new dims
  setScales=()=>{
    this.xScale =
      scaleLinear()
        .domain([0, 9])
        .range([0, this.innerWidth])

    this.yScale =
      scaleLinear()
        .domain([0, 10])
        .range([this.innerHeight, 0])
  };

  // third; create axis groups using the following methods.
  createAxes=()=>{
    this.scaleAxes();

    this.xAxisBottomG =
      this.chart.append('g')
        .attr('transform', `translate(0, ${this.innerHeight})`)
        .call(this.xAxisBottom)

    this.yAxisLeftG =
      this.svg.append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
        .call(this.yAxisLeft)
  };

  scaleAxes=()=>{
    this.xAxisBottom =
      axisBottom()
        .scale(this.xScale)
        .tickSize(-this.innerHeight)

    this.yAxisLeft =
      axisLeft()
        .scale(this.yScale)
        .tickSize(-this.innerWidth)
  };

  updateData=(data)=>{
    console.log('data: ', data)
  };

  updateDims=(dims)=>{

  };

};

export default ThePattern;
