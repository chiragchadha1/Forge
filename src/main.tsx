import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.tsx'
import Hero from './components/Hero.tsx'
import './assets/css/index.css'
import Quote from './components/Quote.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Quote />
  </React.StrictMode>,
)
