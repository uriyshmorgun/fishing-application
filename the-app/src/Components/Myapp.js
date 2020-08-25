import React, { useState, useEffect } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Header from './Components/Header'
import SimpleTabs from './Components/Tabs'
import { grey, lightBlue, red } from '@material-ui/core/colors'
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles'
import './App.css'

function App() {
   const [darkState, setDarkState] = useState(false)
   const palletType = darkState ? 'dark' : 'light'
   const mainPrimaryColor = darkState ? grey[800] : lightBlue[600]
   const mainSecondaryColor = darkState ? red['A700'] : lightBlue[600]
   const darkTheme = unstable_createMuiStrictModeTheme({
      palette: {
         type: palletType,
         primary: {
            main: mainPrimaryColor,
         },
         secondary: {
            main: mainSecondaryColor,
         },
      },
      overrides: {
         MuiButton: {
            textPrimary: {
               color: red['A700'],
            },
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
      <React.StrictMode>
         <ThemeProvider theme={darkTheme}>
            <Header checked={darkState} onChange={handleThemeChange} />
            <SimpleTabs overrides={darkTheme.overrides} checked={darkState} />
         </ThemeProvider>
      </React.StrictMode>
   )
}

export default App
