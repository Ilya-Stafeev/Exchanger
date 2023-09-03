import '../scss/About_part.scss';
import { add_user, credit_card, wallet, diagram } from '../assets';
const About_part = () => {
    return (
        <section className='about-part'>
            <div className="container">
                <div className="rows">
                    <div className="row1">
                        <div className="heading">About ocean-exchange</div>
                        <p className='info'>
                            We store 96% of the digital assets on cold wallets and use WAF to
                            detect and block hacker attacks. Moreover, we use two-factor
                            authentication and anti-phishing software to add another level of
                            protection to your account.
                        </p>
                    </div>
                    <div className="row2">
                        <div className="items-container">
                            <div className="part-item">
                                <div className="img-wrapper">
                                    <img src={add_user} alt="add_user" />
                                </div>
                                <div className="content-wrapper">
                                    <div className='content-title'>Create an Account</div>
                                    <p className='content-subtitl'>
                                        Sign up with your email and mobile in just 5 minutes
                                    </p>
                                </div>
                            </div>
                            <div className="part-item">
                            <div className="img-wrapper">
                                    <img src={credit_card} alt="credit_card" />
                                </div>
                                <div className="content-wrapper">
                                    <div className='content-title'>Verify Bank Account</div>
                                    <p className='content-subtitl'>
                                        Verify Your Bank Account in Easy Way
                                    </p>
                                </div>
                            </div>
                            <div className="part-item">
                            <div className="img-wrapper">
                                    <img src={wallet} alt="wallet" />
                                </div>
                                <div className="content-wrapper">
                                    <div className='content-title'>Add Funds to Wallet</div>
                                    <p className='content-subtitl'>
                                        Quickly add money to your investment wallet      
                                    </p>
                                </div>
                            </div>
                            <div className="part-item">
                            <div className="img-wrapper">
                                    <img src={diagram} alt="diagram" />
                                </div>
                                <div className="content-wrapper">
                                    <div className='content-title'>Start Tranding Instantly</div>
                                    <p className='content-subtitl'>
                                        Buy & Sell a variety of top coins at the best prices
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About_part;