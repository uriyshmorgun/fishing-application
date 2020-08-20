import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useStyles from './style'
import Logo from '../Logo'
import SwitcherDayNight from './../SwitcherDayNight'

function Header({ checked, onChange }) {
   const classes = useStyles()

   return (
      <>
         <AppBar position="static">
            <Toolbar className={classes.root} variant="dense">
               <Logo />
               <SwitcherDayNight checked={checked} onChange={onChange} />
            </Toolbar>
         </AppBar>
      </>
   )
}

export default Header
