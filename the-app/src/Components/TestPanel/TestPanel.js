import React from 'react'
import { Formik, Form } from 'formik'
import { Grid, Paper, makeStyles } from '@material-ui/core/'
import SignupSchema from './TestPanelErrors'
import FishingStyle from './FishingStyle'
import Gender from './Gender'
import FavoriteShises from './FavoriteFishes'
import QuantitySlider from './QuantitySlider'
import ButtonSubmit from './ButtonSubmit'
import UserName from './UserName'
import Birthday from './Birthday'
import className from 'classnames'

const useStyles = makeStyles(theme => ({
   root: {
      padding: theme.spacing(6),
      marginTop: '2rem',
   },
}))

export default function TestPanel() {
   const classes = useStyles()
   return (
      <Formik
         initialValues={{
            userName: '',
            gender: '',
            birthday: new Date(),
            fishingStyle: '',
            favoriteFishes: {
               checked: [],
            },
            quantityTrips: {
               quantity: [10, 80],
            },
            quantityMoney: {
               quantity: [40, 95],
            },
         }}
         validationSchema={SignupSchema}
         onSubmit={values => {
            console.log(values)
         }}>
         {({ errors, touched, form }) => (
            <Form>
               <Grid container direction="row" justify="center" alignItems="center">
                  <Grid item xs={12}>
                     <Paper className={className(classes.root)}>
                        <Grid
                           container
                           spacing={10}
                           direction="row"
                           justify="space-around"
                           alignItems="center">
                           <Grid item md={3}>
                              <UserName errors={errors} touched={touched} />
                           </Grid>
                           <Grid item md={3}>
                              <Birthday errors={errors} touched={touched} />
                           </Grid>
                           <Grid item md={3}>
                              <Gender errors={errors} touched={touched} />
                           </Grid>
                        </Grid>
                     </Paper>
                  </Grid>
                  <Grid item xs={12}>
                     <Paper className={className(classes.root)}>
                        <Grid
                           container
                           spacing={10}
                           direction="row"
                           justify="space-around"
                           alignItems="center">
                           <Grid item md={3}>
                              <FavoriteShises errors={errors} touched={touched} />
                           </Grid>
                           <Grid item md={4} mt={6}>
                              <QuantitySlider mt={6} name="quantityTrips" state={[10, 85]} />
                              <QuantitySlider name="quantityMoney" state={[15, 90]} />
                           </Grid>
                           <Grid item md={3}>
                              <FishingStyle errors={errors} touched={touched} />
                           </Grid>
                        </Grid>
                     </Paper>
                     <Grid container spacing={10} direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={3}>
                           <ButtonSubmit />
                        </Grid>
                     </Grid>
                  </Grid>
               </Grid>
            </Form>
         )}
      </Formik>
   )
}
