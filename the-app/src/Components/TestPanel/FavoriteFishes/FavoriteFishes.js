import React from 'react'
import { Field } from 'formik'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import { CheckboxWithLabel } from 'formik-material-ui'

export default function favoriteFishes() {
   return (
      <FormControl component="fieldset">
         <FormLabel component="legend">Favorite Fishes</FormLabel>
         <FormGroup>
            <FormControlLabel
               label="One"
               control={
                  <Field component={CheckboxWithLabel} name="favoriteFishes" value="One" type="checkbox" />
               }
            />
            <FormControlLabel
               label="two"
               control={
                  <Field component={CheckboxWithLabel} name="favoriteFishes" value="two" type="checkbox" />
               }
            />
            <FormControlLabel
               label="three"
               control={
                  <Field component={CheckboxWithLabel} name="favoriteFishes" value="three" type="checkbox" />
               }
            />
         </FormGroup>
      </FormControl>
   )
}
