import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card fields={"genInfo"} />
    <Card fields={"education"} />
    <Card fields={"experience"} />
  </React.StrictMode>,
)
