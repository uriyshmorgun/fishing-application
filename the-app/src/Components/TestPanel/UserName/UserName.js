import React from 'react'
import { Field } from 'formik'
import TextField from '@material-ui/core/TextField'

export default function UserName({ errors, touched }) {
   return (
      <Field
         type="userName"
         name="userName"
         placeholder="Your name is..."
         id="standard-basic"
         label="Name"
         as={TextField}
         helperText={touched.userName ? errors.userName : ''}
         error={touched.userName && Boolean(errors.userName)}
      />
   )
}
