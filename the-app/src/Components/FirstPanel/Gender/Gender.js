import React from 'react'
import {
   Radio,
   RadioGroup,
   FormControlLabel,
   FormControl,
   FormLabel,
   FormHelperText,
} from '@material-ui/core/'
import { Field } from 'formik'

export default function Gender({ errors, touched }) {
   const handleChange = (event, name, setFieldValue) => {
      setFieldValue(name, event.target.value)
   }
   return (
      <Field type="gender" name="gender">
         {({ field, form }) => (
            <FormControl component="fieldset" error={touched.gender && Boolean(errors.gender)}>
               <FormLabel component="legend">Gender</FormLabel>
               <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  onChange={e => handleChange(e, field.name, form.setFieldValue)}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
               </RadioGroup>
               <FormHelperText>{touched.gender ? errors.gender : ''}</FormHelperText>
            </FormControl>
         )}
      </Field>
   )
}
