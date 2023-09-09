import { useEffect, useState } from 'react';
import '../scss/Navbar.scss';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { useTheme } from '../hooks/use-theme';

const Navbar = () => {
  //Выподающие меню
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  //Переключение тем
  const {theme, setTheme} = useTheme();

  const handleToggle = () => {
    setTheme(prevMode => (prevMode === "light-mode" ? "dark-mode" : "light-mode"));
  };
  //Появление тени у Header при скроле в низ
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (       
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
          {/* Логотип */}        
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>            
            </div>           
          {/* Ссылки для больших экранов */}
          <div className={`navbar-collapse ${menuOpen ? 'open' : ''}`}>
            <ul className="links">            
              <li className='nav-item'>
                <Link to="/exchange">Exchange</Link>
              </li>
              <li className='nav-item'>
                <Link to="/options">Options</Link>
              </li>
              <li className='nav-item'>
                <Link to="/staking">Staking</Link>
              </li>
              <li className='nav-item'>
                <Link to="/about-us">About Us</Link>
              </li>               
            </ul>
          </div>          
            {/* Правая секция */}
            <div className="right-section">
              {/* Переключатель тем */}
              <div className="theme-switcher">
                <div className={`toggle-switch ${theme === "dark-mode" ? 'dark-mode' : 'light-mode'}`} onClick={handleToggle}></div>
              </div>
              {/* Кнопка авторизации */}
              <button className="login-button">Login</button>
              {/* Кнопка мобильной навигации */}
              <button className="mobile-toggle" onClick={toggleMenu}>      
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>            
              </button>
              {/* Выподающие меню */}
              <div className={`navbar-collapse ${menuOpen ? 'open' : ''}`}>
                <ul className="mobile-links">
                  <li className='nav-item-mob'>
                    <Link to="/wallets">Wallets</Link>
                  </li>
                  <li className='nav-item-mob'>
                    <Link to="/exchange">Exchange</Link>
                  </li>
                  <li className='nav-item-mob'>
                    <Link to="/options">Options</Link>
                  </li>
                  <li className='nav-item-mob'>
                    <Link to="/staking">Staking</Link>
                  </li>
                  <li className='nav-item-mob'>
                    <Link to="/about-us">About Us</Link>
                  </li>           
                </ul>
                <button className="mobail-login-button">Login</button>
              </div>
            </div>
          </nav>
        </div>  
      </header>  
      
      
  )
}
export default Navbar