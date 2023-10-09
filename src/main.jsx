import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/Home'
import GlobalStyles from './styles/globalStyles'
import  '../i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <GlobalStyles />
  </React.StrictMode>,
)
