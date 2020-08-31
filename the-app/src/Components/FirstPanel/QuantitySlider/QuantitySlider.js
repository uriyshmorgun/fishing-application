import React, { useState, useEffect } from 'react'
import { Field } from 'formik'
import { Typography, Slider, withStyles } from '@material-ui/core/'
import Box from '@material-ui/core/Box'

const QuantitySldr = withStyles({
   root: {
      width: 240,
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
   const [value, setValue] = useState(props.values[`${props.name}`].quantity)
   const handleChange = (event, newValue, name, setFieldValue) => {
      setValue(newValue)
      setFieldValue(name, newValue)
   }

   return (
      <Field name={props.name}>
         {({ field, form }) => (
            <Box pt={6} display="flex" flexDirection="column" flexWrap="wrap" alignItems="center">
               <QuantitySldr
                  value={value}
                  onChange={(e, newValue) => handleChange(e, newValue, field.name, form.setFieldValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  color="secondary"
                  valueLabelDisplay="on"
               />
               <Typography id="range-slider" color="textSecondary" gutterBottom variant="subtitle2">
                  {/* {form.values[`${props.name}`].messege} */}
                  {/* {console.log(form)} */}
                  {props.name === 'quantityMoney'
                     ? 'Choose "min" and "max" money expenses per day'
                     : 'Choose "min" and "max" fishing result per day'}
               </Typography>
            </Box>
         )}
      </Field>
   )
}
