import React from 'react'
import DashboardLayout from './DashboardLayout'
import { ThemeProvider } from './Context/themeContext'

function Dashboard() {
  return (
    <ThemeProvider>
      <DashboardLayout />
    </ThemeProvider>
  )
}

export default Dashboard