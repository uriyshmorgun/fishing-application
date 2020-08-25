import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from './TabPanel'
import className from 'classnames'
import TestPanel from './../TestPanel'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
   tabsRoot: {
      display: 'flex',
      justifyContent: 'center',
   },

   root: {
      flexGrow: 1,
      height: 'auto',
      overflow: 'hidden',
   },
   textColorPrimary: {
      color: 'red',
   },
   tabPanel: {
      background: '#616161',
   },
   darkPanel: {
      background: '#f5f5f5',
   },
   darkTabs: {
      background: '#4c4c4c',
   },
   lightTabs: {
      background: '#ececec',
   },
   tabPanelwidth: {
      width: '100%',
      minHeight: 'calc(100vh - 148px)',
   },
   tabPanelCapitalize: {
      textTransform: 'capitalize',
      fontWeight: 600,
   },
}))

export default function SimpleTabs(props) {
   const classes = useStyles()
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <div className={classes.root}>
         <Tabs
            classes={{ scroller: classes.tabsRoot, indicator: classes.tabsIndicator }}
            className={className(props.checked ? classes.darkTabs : classes.lightTabs)}
            orientation="horizontal"
            indicatorColor="secondary"
            textColor="secondary"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example">
            <Tab className={className(classes.tabPanelCapitalize)} label="Test" />
            <Tab className={className(classes.tabPanelCapitalize)} label="two" />
            <Tab className={className(classes.tabPanelCapitalize)} label="three" />
         </Tabs>
         <TabPanel
            value={value}
            index={0}
            className={className(
               classes.tabPanelwidth,
               props.checked ? classes.tabPanel : classes.darkPanel,
            )}>
            <TestPanel />
         </TabPanel>
         <TabPanel
            value={value}
            index={1}
            className={className(
               classes.tabPanelwidth,
               props.checked ? classes.tabPanel : classes.darkPanel,
            )}>
            Item Two
         </TabPanel>
         <TabPanel
            value={value}
            index={2}
            className={className(
               classes.tabPanelwidth,
               props.checked ? classes.tabPanel : classes.darkPanel,
            )}>
            Item Three
         </TabPanel>
      </div>
   )
}
