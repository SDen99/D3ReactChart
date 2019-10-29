import { select} from 'd3-selection';
import { Dimensions, Scales, Axes } from './utilities';
import Letters from './Letters';

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
  };

  init=(data, dims)=>{
    this.data = data;
    this.dims = new Dimensions(dims); //<-----one
    this.chart = this.svg.append('g');
    this.chart.attr('transform', `translate(${this.dims.margin.left}, ${this.dims.margin.top})`);
    this.scales = new Scales(this.data, this.dims);//<-------two
    this.axes = new Axes(this.chart, this.scales, this.dims);//<-----three
    this.letters = new Letters(this.chart, this.data, this.scales);
  };

  updateData=(data)=>{
    this.letters.updateData(data)
  };

  updateDims=(dims)=>{
    this.dims.setDims(dims);
    this.scales.setScales(this.data, this.dims);
    this.axes.updateAxes(this.scales, this.dims);
    this.letters.updateScales(this.scales);
  };

  mapData=(mapping)=>{
    this.letters.mappingState(mapping);
  };

};

export default ThePattern;
