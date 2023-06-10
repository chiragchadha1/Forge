import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.tsx'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
)
