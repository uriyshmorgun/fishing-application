import React, { useState } from 'react'
import { Field } from 'formik'
import { Typography, Slider, withStyles } from '@material-ui/core/'
import Box from '@material-ui/core/Box'
import { flexbox } from '@material-ui/system'

const QuantitySldr = withStyles({
   root: {
      width: 250,
      height: 6,
   },
   track: { height: 6, borderRadius: 4 },
   rail: {
      height: 6,
      borderRadius: 4,
   },
   thumb: {
      height: 20,
      width: 20,
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
         boxShadow: 'inherit',
      },
   },
})(Slider)

export default function QuantitySlider(props) {
   const [value, setValue] = useState(props.state)
   const handleChange = (event, newValue, name, setFieldValue) => {
      setValue(newValue)
      setFieldValue(name, newValue)
   }

   return (
      <Field name={props.name}>
         {({ field, form }) => (
            <Box pt={8} display="flex" flexWrap="wrap" justifyContent="center">
               <QuantitySldr
                  value={value}
                  onChange={(e, newValue) => handleChange(e, newValue, field.name, form.setFieldValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  color="secondary"
                  valueLabelDisplay="on"
               />
               {props.name === 'quantityTrips' ? (
                  <Typography id="range-slider" color="textSecondary" gutterBottom variant="subtitle2">
                     Choose "min" and "max" fishing result per day
                  </Typography>
               ) : (
                  <Typography id="range-slider" color="textSecondary" gutterBottom variant="subtitle2">
                     Choose "min" and "max" expenses per fishing day
                  </Typography>
               )}
            </Box>
         )}
      </Field>
   )
}
