import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useStyles from './style'
import Logo from '../Logo'


function Header() {
  const classes = useStyles()
  return (
    <>
      <AppBar className={classes.menuWrapper} position="static">
        <Toolbar variant="dense">
              <Logo />
           </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
