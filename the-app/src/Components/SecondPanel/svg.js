import * as d3 from 'd3'
import { select } from 'd3'
import React from 'react'

export default function Svg() {
   const svg = select('svg')
   const width = svg.attr('width', 400)
   const height = svg.attr('height', 500)

   const circle = svg
      .append('circle')
      .attr('r', height / 2)
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('fill', 'red')

   return <svg></svg>
}
