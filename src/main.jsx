import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Judshi from './Judshi.jsx'
import Nav from './Nav.jsx'
import Table from './Table.jsx'
import Properties from './Properties.jsx';
import Count from './Count.jsx'
import This from './This.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Judshi/>*/}
    {/*<Nav/>*/}
    {/*<Table/>*/}
    {/* <App /> */}
    {/*<Properties name="Developers" content="How Are You"/>*/}
<Count/>
<This/>
  </StrictMode>,
)
