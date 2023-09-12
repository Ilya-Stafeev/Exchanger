import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss'
import { Home, Exchange, About_us, Wallets } from './pages';

const App = () => { 
  return (   
    <BrowserRouter>            
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<Exchange />} />               
        <Route path="/about-us" element={<About_us />} />
        <Route path="/wallets" element={<Wallets />} />        
      </Routes>      
    </BrowserRouter>      
  )
}

export default App
