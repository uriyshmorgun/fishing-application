import React from 'react'
import { Field } from 'formik'
import {
   Checkbox,
   FormLabel,
   FormControl,
   FormGroup,
   FormControlLabel,
   FormHelperText,
} from '@material-ui/core/'

export default function favoriteFishes({ errors, touched }) {
   return (
      <FormControl component="fieldset" error={touched.favoriteFishes && Boolean(errors.favoriteFishes)}>
         <FormLabel component="legend">Favorite Fishes</FormLabel>
         <FormGroup>
            <FormControlLabel
               control={<Field name="favoriteFishes" value="Carp" type="checkbox" as={Checkbox} />}
               label="Carp"
            />
            <FormControlLabel
               control={<Field name="favoriteFishes" value="Perch" type="checkbox" as={Checkbox} />}
               label="Perch"
            />
            <FormControlLabel
               control={<Field name="favoriteFishes" value="Pike" type="checkbox" as={Checkbox} />}
               label="Pike"
            />
            <FormControlLabel
               control={<Field name="favoriteFishes" value="Catfish" type="checkbox" as={Checkbox} />}
               label="Catfish"
            />
         </FormGroup>
         <FormHelperText>{touched.favoriteFishes ? errors.favoriteFishes : ''}</FormHelperText>
      </FormControl>
   )
}
