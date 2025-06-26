import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Judshi from './Judshi.jsx'
import Nav from './Nav.jsx'
import Table from './Table.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Judshi/>
    <Nav/>
    <Table/>
    {/* <App /> */}

  </StrictMode>,
)
