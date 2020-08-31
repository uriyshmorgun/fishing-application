import * as d3 from 'd3'

class ComponentD3 {
   containerEl
   props
   svg

   constructor(containerEl, props) {
      this.containerEl = containerEl
      this.props = props
      console.log(props)
      const { width, height } = props
      this.svg = d3
         .select(containerEl)
         .append('svg')
         .attr('width', width)
         .attr('height', height)
         .attr('fill', 'red')
      this.updateDatapoints()
   }

   updateDatapoints = () => {
      const {
         svg,
         props: { data, width, height },
      } = this
      svg.selectAll('circle')
         .data(data)
         .enter()
         .append('circle')
         .style('fill', 'red')
         .attr('cx', () => Math.random() * width)
         .attr('cy', () => Math.random() * height)
         .attr('r', 10)
         .on('mouseup', (d, i, nodes) => this.setActiveDatapoint(d, nodes[i]))
   }

   setActiveDatapoint = (d, node) => {
      // console.log(node)
      d3.select(node).style('fill', 'yellow')
      // console.log(d)
      this.props.onDatapointClick(d)
   }

   resize = (width, height) => {
      const { svg } = this
      svg.attr('width', width).attr('height', height)
      svg.selectAll('circle')
         .attr('cx', () => Math.random() * width)
         .attr('cy', () => Math.random() * height)
   }
}

export default ComponentD3
