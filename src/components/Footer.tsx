import '../scss/Footer.scss';
import { logo } from '../assets';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="row1">
                        <div className="info">
                            <a href="">
                                <img src={logo} alt="" />
                                <div className='info-title'>ocean-exchange</div>
                            </a>
                            <ul className='list'>
                                <li>
                                    <p>
                                        <a href="tel:++49 (176) 839 341 32">+49 (176) 839 341 32</a>
                                    </p>
                                </li>
                                <li>
                                    <p></p>
                                </li>
                                <li>
                                    <p></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="widget"></div>
                    </div>
                    <div className="row3">
                        <div className="footer-contact__wrapper"></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">

            </div>
        </footer>
    );
};
export default Footer;