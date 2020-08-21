import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Field } from 'formik'

export default function Gender() {
   const handleChange = (event, name, setFieldValue) => {
      setFieldValue(name, event.target.value)
   }
   return (
      <Field type="gender" name="gender">
         {({ field, form }) => (
            <FormControl component="fieldset">
               <FormLabel component="legend">Gender</FormLabel>
               <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={form.values.gender}
                  onChange={e => handleChange(e, field.name, form.setFieldValue)}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
               </RadioGroup>
            </FormControl>
         )}
      </Field>
   )
}
