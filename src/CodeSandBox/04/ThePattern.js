import { select } from 'd3-selection';

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
    this.svg.style('background-color', 'red');
    this.margin = { top: 20, left: 30, bottom: 20, right: 30 };
  };

  init=(data, dims)=>{
    this.chart = this.svg.append('g');
    this.chart.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
    this.chart.append('text').text(`height: ${dims.height}`);

    this.updateData(data);
  };

  updateData=(data)=>{
    console.log('data: ', data);
  };

  updateDims=(dims)=>{
  };
  
};

export default ThePattern;
