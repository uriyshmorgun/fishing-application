import React from 'react'
import { Field } from 'formik'
import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { InputLabel } from '@material-ui/core/'

const DatePickerField = ({ field, form }) => {
   const currentError = form.errors[field.birthday]
   return (
      <KeyboardDatePicker
         clearable
         name="birthday"
         // value={field.value}
         format="dd/MM/yyyy"
         helperText={currentError}
         error={Boolean(currentError)}
         // onError={error => {
         //    if (error !== currentError) {
         //       form.setFieldError(field.birthday, error)
         //    }
         //    console.log(error)
         // }}
         onChange={date => form.setFieldValue(field.name, date, false)}
      />
   )
}

export default function Birthday({ errors, touched }) {
   return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <InputLabel>Birthday</InputLabel>
         <Field component={DatePickerField} name="birthday" />
      </MuiPickersUtilsProvider>
   )
}
