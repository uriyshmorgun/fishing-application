import React from 'react'
import { Formik, Form } from 'formik'
import { Grid, Paper, makeStyles, Box } from '@material-ui/core/'
import SignupSchema from './TestPanelErrors'
import FishingStyle from './FishingStyle'
import Gender from './Gender'
import FavoriteShises from './FavoriteFishes'
import QuantitySlider from './QuantitySlider'
import ButtonSubmit from './ButtonSubmit'
import UserName from './UserName'
import Birthday from './Birthday'
import TransferList from './TransferList'
import className from 'classnames'

const useStyles = makeStyles(theme => ({
   root: {
      padding: theme.spacing(6),
      marginTop: '2rem',
   },
}))
const calcResult = values => {
   return [25, 25, 25, 25]
}
export default function FirstPanel({ setValue, setDonatValue }) {
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
               quantity: [18, 80],
            },
            quantityMoney: {
               quantity: [13, 95],
            },

            left: ['vobler', 'drag', 'dynamite', 'rat poison', 'worms', 'electric rod'],
            right: ['ratlins', 'fishing net', 'boilies', 'jig', 'fly', 'trolling'],
         }}
         // validationSchema={SignupSchema}
         onSubmit={values => {
            const result = calcResult(values)
            console.log(values)
            setDonatValue(result)
            setValue(1)
         }}>
         {({ errors, touched, form, values }) => (
            <Form>
               <Grid container direction="row" justify="center">
                  <Grid item xs={12}>
                     <Paper className={className(classes.root)}>
                        <Box textAlign="center">
                           <Grid
                              container
                              spacing={8}
                              direction="row"
                              justify="space-around"
                              alignItems="center">
                              <Grid item md={3}>
                                 <Gender errors={errors} touched={touched} />
                              </Grid>
                              <Grid item md={6}>
                                 <Birthday errors={errors} touched={touched} />
                              </Grid>
                              <Grid item md={3}>
                                 <UserName errors={errors} touched={touched} />
                              </Grid>
                           </Grid>
                        </Box>
                     </Paper>
                  </Grid>
                  <Grid item xs={12}>
                     <Paper className={className(classes.root)}>
                        <Box textAlign="center">
                           <Grid
                              container
                              spacing={8}
                              direction="row"
                              justify="space-around"
                              alignItems="center">
                              <Grid item md={3}>
                                 <FavoriteShises errors={errors} touched={touched} />
                              </Grid>
                              <Grid item md={6} mt={6}>
                                 <QuantitySlider name="quantityTrips" values={values} />
                                 <QuantitySlider name="quantityMoney" values={values} />
                              </Grid>
                              <Grid item md={3}>
                                 <FishingStyle errors={errors} touched={touched} />
                              </Grid>
                           </Grid>
                        </Box>
                     </Paper>
                  </Grid>
                  <Grid item xs={12}>
                     <Paper className={className(classes.root)}>
                        <Box textAlign="center">
                           <Grid
                              container
                              spacing={8}
                              direction="row"
                              justify="space-around"
                              alignItems="center">
                              <Grid item md={12}>
                                 <TransferList errors={errors} touched={touched} />
                              </Grid>
                           </Grid>
                        </Box>
                     </Paper>
                     <Grid container spacing={10} direction="row" justify="space-around" alignItems="center">
                        <Grid item mt={6}>
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
