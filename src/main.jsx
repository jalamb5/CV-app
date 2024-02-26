import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './components/title'
import General from './components/general'
import Education from './components/education'
import Experience from './components/experience'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title />
    <General />
    <Education />
    <Experience />
  </React.StrictMode>,
)
