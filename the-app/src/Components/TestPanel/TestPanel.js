import React from 'react'
import { Form, Formik } from 'formik'
import FishingStyle from './FishingStyle'
import Gender from './Gender'
import ButtonSubmit from './ButtonSubmit'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({}))

export default function TestPanel() {
   const classes = useStyles()
   return (
      <Formik initialValues={{ fishingStyle: '', gender: 'female' }} onSubmit={values => {}}>
         {() => (
            <Form>
               <Grid container spacing={6} direction="row" justify="center" alignItems="center">
                  <Grid item xs={3}>
                     <Gender />
                  </Grid>
                  <Grid item xs={3}>
                     <FishingStyle />
                  </Grid>
                  <Grid item xs={3}>
                     <ButtonSubmit />
                  </Grid>
               </Grid>
            </Form>
         )}
      </Formik>
   )
}
