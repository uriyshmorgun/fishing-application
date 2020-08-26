import React, { useState, useEffect } from 'react'
import { Grid, Paper, makeStyles, Box } from '@material-ui/core/'
import className from 'classnames'
import Donat from './Donat'
import * as d3 from 'd3'

const useStyles = makeStyles(theme => ({
   root: {
      padding: theme.spacing(6),
      marginTop: '2rem',
   },
}))

export default function FirstPanel() {
   const classes = useStyles()
   const generateData = (value, length = 5) =>
      d3.range(length).map((item, index) => ({
         date: index,
         value: value === null || value === undefined ? Math.random() * 100 : value,
      }))

   const [data, setData] = useState(generateData(0))
   const changeData = () => {
      setData(generateData())
   }
   console.log()

   useEffect(() => {
      setData(generateData())
   }, [!data])

   return (
      <Grid container direction="row" justify="center">
         <Grid item xs={12}>
            <Paper className={className(classes.root)}>
               <Box textAlign="center">
                  <Grid container spacing={8} direction="row" justify="space-around" alignItems="center">
                     <Grid item md={12}>
                        <Donat data={data} width={400} height={400} innerRadius={80} outerRadius={200} />
                     </Grid>
                  </Grid>
               </Box>
            </Paper>
         </Grid>
      </Grid>
   )
}
