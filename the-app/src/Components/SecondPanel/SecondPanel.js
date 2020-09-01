import React, { useState, useEffect } from 'react'
import { Grid, Paper, makeStyles, Box } from '@material-ui/core/'
import className from 'classnames'
import Donat from './Donat'
import ChartUsers from './ChartUsers'
import * as d3 from 'd3'
import Svg from './svg'

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(6),
      marginTop: '2rem',
   },
}))

export default function FirstPanel() {
   const classes = useStyles()

   const data = [
      { date: 0, value: 20 },
      { date: 1, value: 80 },
   ]

   const dataChart = [
      { year: 2012, percent: 50 },
      { year: 2013, percent: 30 },
      { year: 2014, percent: 80 },
      { year: 2015, percent: 20 },
      { year: 2016, percent: 55 },
      { year: 2017, percent: 83 },
      { year: 2018, percent: 50 },
      { year: 2019, percent: 30 },
      { year: 2020, percent: 80 },
      { year: 2021, percent: 20 },
      { year: 2022, percent: 55 },
      { year: 2023, percent: 83 },
   ]

   return (
      <Grid container direction="row" justify="center">
         <Grid item xs={12}>
            <Paper className={className(classes.root)}>
               <Box textAlign="center">
                  <Grid container spacing={8} direction="row" justify="space-around" alignItems="center">
                     <Grid item md={12}>
                        <Donat data={data} width={400} height={400} innerRadius={80} outerRadius={200} /> 
                        {/* <ChartUsers data={dataChart} /> */}
                     </Grid>
                  </Grid>
               </Box>
            </Paper>
         </Grid>
      </Grid>
   )
}
