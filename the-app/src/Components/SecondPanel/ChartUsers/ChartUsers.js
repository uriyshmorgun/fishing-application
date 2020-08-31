import React, { useRef, useState, useEffect } from 'react'
import ComponentD3 from './ComponentD3'

let vis = null

function ChartUsers() {
   const [data, setData] = useState(null)
   const [width, setWidth] = useState(600)
   const [height, setHeight] = useState(600)
   const [active, setActive] = useState(null)
   const refElement = useRef(null)

   useEffect(updateVisOnResize, [width, height])
   useEffect(initVis, [data])

   function initVis() {
      if (data && data.length) {
         const d3Props = {
            data,
            width,
            height,
            onDatapointClick: setActive,
         }
         vis = new ComponentD3(refElement.current, d3Props)
      }
   }
   function updateVisOnResize() {
      vis && vis.resize(width, height)
   }

   useEffect(() => {
      Promise.resolve().then(() => setData(['a', 'b', 'c', 'd', 'f']))
   }, [])

   useEffect(() => {
      if (data && data.length) {
         vis = new ComponentD3(refElement.current, { data, width, height })
      }
   }, [data])

   return <div id="vis-container" ref={refElement} />
}

export default ChartUsers
