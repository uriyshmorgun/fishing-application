import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import SimpleTabs from './Components/Tabs'
import { grey, lightBlue, red } from '@material-ui/core/colors'
import './App.css'

function App() {
   const [darkState, setDarkState] = useState(false)
   const palletType = darkState ? 'dark' : 'light'
   const mainPrimaryColor = darkState ? grey[800] : lightBlue[600]
   const mainSecondaryColor = darkState ? red['A700'] : lightBlue[600]
   const darkTheme = createMuiTheme({
      palette: {
         type: palletType,
         primary: {
            main: mainPrimaryColor,
         },
         secondary: {
            main: mainSecondaryColor,
         },
      },
   })
   const handleThemeChange = () => {
      setDarkState(!darkState)
   }

   useEffect(() => {
      if (new Date().getHours() >= 19 || (new Date().getHours() <= 8 && !localStorage.getItem('darkstate'))) {
         setDarkState(true)
      }
      if (localStorage.getItem('darkstate')) {
         localStorage.getItem('darkstate') === 'true' ? setDarkState(true) : setDarkState(false)
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('darkstate', darkState)
   })

   return (
      <ThemeProvider theme={darkTheme}>
         <Header checked={darkState} onChange={handleThemeChange} />
         <SimpleTabs checked={darkState} />
      </ThemeProvider>
   )
}

export default App
