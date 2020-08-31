import React, { useState } from 'react'
import { Field } from 'formik'
import {
   makeStyles,
   Grid,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Checkbox,
   Button,
   Paper,
   Typography,
   Box,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
   root: {
      margin: 'auto',
   },
   paper: {
      width: 250,
      height: 350,
      overflow: 'auto',
   },
   button: {
      margin: theme.spacing(0.5, 0),
   },
}))

function not(a, b) {
   return a.filter(value => b.indexOf(value) === -1)
}

function intersection(a, b) {
   return a.filter(value => b.indexOf(value) !== -1)
}

export default function TransferList({ errors, touched, form, field }) {
   const classes = useStyles()
   const [checked, setChecked] = useState([])
   const [left, setLeft] = useState(['vobler', 'drag', 'dynamite', 'rat poison', 'worms', 'electric rod'])
   const [right, setRight] = useState(['ratlins', 'fishing net', 'boilies', 'jig', 'fly', 'trolling'])
   const leftChecked = intersection(checked, left)
   const rightChecked = intersection(checked, right)

   const handleToggle = value => () => {
      const currentIndex = checked.indexOf(value)
      const newChecked = [...checked]

      if (currentIndex === -1) {
         newChecked.push(value)
      } else {
         newChecked.splice(currentIndex, 1)
      }

      setChecked(newChecked)
   }

   const handleAllRight = (event, name, setFieldValue) => {
      setFieldValue('right', right.concat(left))
      setFieldValue('left', [])
      setRight(right.concat(left))
      setLeft([])
   }

   const handleCheckedRight = (event, name, setFieldValue) => {
      // console.log(name)
      setFieldValue('right', right.concat(leftChecked))
      setFieldValue('left', not(left, leftChecked))
      setRight(right.concat(leftChecked))
      setLeft(not(left, leftChecked))
      setChecked(not(checked, leftChecked))
   }

   const handleCheckedLeft = (event, name, setFieldValue) => {
      setFieldValue('left', left.concat(rightChecked))
      setFieldValue('right', not(right, rightChecked))
      setLeft(left.concat(rightChecked))
      setRight(not(right, rightChecked))
      setChecked(not(checked, rightChecked))
   }

   const handleAllLeft = (event, name, setFieldValue) => {
      setFieldValue('left', left.concat(right))
      setFieldValue('right', [])
      setLeft(left.concat(right))
      setRight([])
   }

   const customList = items => (
      <Paper className={classes.paper}>
         <List dense component="div" role="list">
            {items.map(value => {
               const labelId = `transfer-list-item-${value}-label`
               return (
                  <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                     <ListItemIcon>
                        <Checkbox
                           checked={checked.indexOf(value) !== -1}
                           tabIndex={-1}
                           disableRipple
                           inputProps={{ 'aria-labelledby': labelId }}
                        />
                     </ListItemIcon>
                     <ListItemText id={labelId} primary={`${value}`} />
                  </ListItem>
               )
            })}
            <ListItem />
         </List>
      </Paper>
   )

   return (
      <>
         <Box p={2} boxShadow={2}>
            <Typography variant="h6" gutterBottom align="left">
               Task:
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="left">
               Place in the correct order next blocks of permitted and prohibited types of fishing
            </Typography>
         </Box>
         <Field name="transferQuestions">
            {({ field, form }) => (
               <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
                  <Grid item>
                     <Box mt={3}>
                        <Typography variant="subtitle1" gutterBottom align="center">
                           Permitted
                        </Typography>
                     </Box>
                     {customList(left, field, form)}
                  </Grid>
                  <Grid item>
                     <Grid container direction="column" alignItems="center">
                        <Button
                           variant="outlined"
                           size="small"
                           className={classes.button}
                           onClick={e => handleAllRight(e, 'right', form.setFieldValue)}
                           disabled={left.length === 0}
                           aria-label="move all right">
                           ≫
                        </Button>
                        <Button
                           variant="outlined"
                           size="small"
                           className={classes.button}
                           onClick={e => handleCheckedRight(e, 'right', form.setFieldValue)}
                           disabled={leftChecked.length === 0}
                           aria-label="move selected right">
                           &gt;
                        </Button>
                        <Button
                           variant="outlined"
                           size="small"
                           className={classes.button}
                           onClick={e => handleCheckedLeft(e, 'left', form.setFieldValue)}
                           disabled={rightChecked.length === 0}
                           aria-label="move selected left">
                           &lt;
                        </Button>
                        <Button
                           variant="outlined"
                           size="small"
                           className={classes.button}
                           onClick={e => handleAllLeft(e, 'left', form.setFieldValue)}
                           disabled={right.length === 0}
                           aria-label="move all left">
                           ≪
                        </Button>
                     </Grid>
                  </Grid>
                  <Grid item>
                     <Typography variant="subtitle1" gutterBottom align="center">
                        Prohibited
                     </Typography>
                     {customList(right)}
                  </Grid>
               </Grid>
            )}
         </Field>
      </>
   )
}
