import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from './TabPanel'
import { styles } from './style'

const useStyles = makeStyles(theme => ({
   tabsRoot: {
      display: 'flex',
      justifyContent: 'center',
   },
   root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      position: 'fixed',
      top: 85 + 'px',
      bottom: 0 + 'px',
      width: 100 + '%',
   },
}))

export default function SimpleTabs() {
   const classes = useStyles()
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <div className={classes.root}>
         <Tabs
            classes={{ scroller: classes.tabsRoot }}
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            style={styles.tabsBackground}>
            <Tab label="Item One Item One" />
            <Tab label="two" />
            <Tab label="three" />
         </Tabs>
         <TabPanel value={value} index={0}>
            Item One
         </TabPanel>
         <TabPanel value={value} index={1}>
            Item Two
         </TabPanel>
         <TabPanel value={value} index={2}>
            Item Three
         </TabPanel>
      </div>
   )
}
