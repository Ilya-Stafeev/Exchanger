import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './index.scss'
import {Home} from './pages';

const App = () => { 
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
      
  )
}

export default App
