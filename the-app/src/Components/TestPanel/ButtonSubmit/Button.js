import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
   root: {
      margin: '2rem',
   },
}))

export default function ButtonSubmit() {
   const classes = useStyles()

   return (
      <div className={classes.root}>
         <Button color="secondary" variant="contained" type="submit">
            Submit
         </Button>
      </div>
   )
}
