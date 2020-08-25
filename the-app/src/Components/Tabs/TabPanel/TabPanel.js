import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
   root: {
      // padding: '0',
      // margin: '2rem'
   },
}))

function TabPanel(props) {
   const classes = useStyles()
   const { children, value, index, ...other } = props
   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`vertical-tabpanel-${index}`}
         aria-labelledby={`vertical-tab-${index}`}
         {...other}>
         {value === index && (
            <Container classes={{ root: classes.root }}>
               <Box>{children}</Box>
            </Container>
         )}
      </div>
   )
}

export default TabPanel
