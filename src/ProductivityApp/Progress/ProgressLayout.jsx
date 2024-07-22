import React from 'react'
import  Progress  from './Progress'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function ProgressLayout() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Progress userId={'1'}  />
  </ThemeProvider>
  )
}

export default ProgressLayout