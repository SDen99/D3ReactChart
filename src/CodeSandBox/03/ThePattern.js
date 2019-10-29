import { select } from 'd3-selection';

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
    this.svg.style('background-color', 'red');
  };
};

export default ThePattern;
