import React from 'react'
import { Field } from 'formik'
import { InputLabel, Select, FormControl, FormHelperText } from '@material-ui/core/'

const fishingStyles = [
   {
      value: 'No style',
      label: 'No style',
   },
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

export default function FishingStyle({ errors, touched }) {
   const handleChange = (event, name, setFieldValue) => {
      setFieldValue(name, event.target.value)
   }

   return (
      <Field name="fishingStyle">
         {({ field, form }) => (
            <FormControl variant="outlined" error={touched.fishingStyle && Boolean(errors.fishingStyle)}>
               <InputLabel>Fishing styles</InputLabel>
               <Select
                  native
                  label="Select"
                  value={form.values.style}
                  onChange={e => handleChange(e, field.name, form.setFieldValue)}>
                  {fishingStyles.map(option => (
                     <option key={option.value} value={option.value}>
                        {option.value}
                     </option>
                  ))}
               </Select>
               <FormHelperText>{touched.fishingStyle ? errors.fishingStyle : ''}</FormHelperText>
            </FormControl>
         )}
      </Field>
   )
}
