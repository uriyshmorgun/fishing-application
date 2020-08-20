import React from 'react'
import Switch from '@material-ui/core/Switch'

export default function SwitcherDayNight(props) {
   return (
      <div>
         <Switch
            checked={props.checked}
            onChange={props.onChange}
            name="checkedA"
            color="secondary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
         />
      </div>
   )
}
