import React from 'react'
import { Field } from 'formik'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'

const fishingStyles = [
   {
      value: 'Spinning',
      label: 'Spinning',
   },
   {
      value: 'Feeder',
      label: 'Feeder',
   },
   {
      value: 'Carp fishing',
      label: 'Carp fishing',
   },
   {
      value: 'Sea fishing',
      label: 'Sea fishing',
   },
   {
      value: 'Winter fishing',
      label: 'Winter fishing',
   },
]

export default function FishingStyle() {
   const handleChange = (event, name, setFieldValue) => {
      setFieldValue(name, event.target.value)
   }
   return (
      <Field name="fishingStyle">
         {({ field, form }) => (
            <FormControl variant="outlined">
               <InputLabel>Fishing styles</InputLabel>
               <Select
                  native
                  label="Select"
                  value={form.values.style}
                  inputProps={{
                     name: 'fishingStyle',
                  }}
                  onChange={e => handleChange(e, field.name, form.setFieldValue)}>
                  {fishingStyles.map(option => (
                     <option key={option.value} value={option.value}>
                        {option.value}
                     </option>
                  ))}
               </Select>
            </FormControl>
         )}
      </Field>
   )
}
