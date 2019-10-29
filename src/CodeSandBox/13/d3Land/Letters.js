import { select, selectAll } from 'd3-selection';

class Letters {
  constructor(chart, data, scales){
    this.chart = chart;
    this.data = data;
    this.scales = scales;
    this.t = 1000;
    this.keyFunc=null;
    this.updateData(this.data);
  };

  mappingState=(mapping)=>{
    if(mapping)
      this.keyFunc=(d)=>d.id;
    else
      this.keyFunc=null;
  };

  updateData=(data)=>{
    this.data = data;
    this.allChars = this.chart.selectAll('.letter').data(this.data,this.keyFunc);

    this.allChars
      .transition().duration(this.t)
      .text((d)=>d.letter)
      .attr('fill', 'orange')
      .attr('y', (d)=>this.scales.yScale(4))
      .attr('x', (d,i)=>this.scales.xScale(d.id))

    this.enter();
  };

  enter=()=>{
    this.allChars.enter().append('text')
      .text((d)=>d.letter)
      .attr('fill', 'green')
      .attr('class', 'letter')
      .attr('x', (d,i)=>this.scales.xScale(d.id))
      .attr('y', (d)=>this.scales.yScale(12))
      .transition().duration(this.t)
      .attr('y', (d)=>this.scales.yScale(4))

    this.exit();
  };

  exit=()=>{
    this.allChars.exit()
      .attr('fill', 'red')
      .transition().duration(this.t)
      .attr("y", this.scales.yScale(-1))
      .style("fill-opacity", 0)
      .remove();
  };

  updateScales=(scales)=>{
    this.scales = scales;
    this.allChars = this.chart.selectAll('.letter')
      .transition().duration(500)
      .attr('x', (d, i)=>this.scales.xScale(d.id))
      .attr('y', (d)=>this.scales.yScale(4))
  };

};

export default Letters
