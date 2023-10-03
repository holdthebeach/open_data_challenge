import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {DashboardProvider} from './Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </React.StrictMode>,
)
