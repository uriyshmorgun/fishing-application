import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from './TabPanel'
import { styles } from './style'


const useStyles = makeStyles((theme) => ({
  tabsRoot: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs classes={{scroller: classes.tabsRoot}} value={value} onChange={handleChange} aria-label="simple tabs example" style={styles.tabsBackground} >
          <Tab label="one"  />
          <Tab label="two"  />
          <Tab label="three"  />
        </Tabs>
      </AppBar>
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
  );
}

