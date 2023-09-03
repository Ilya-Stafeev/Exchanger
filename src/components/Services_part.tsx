import '../scss/Services_part.scss';
import { hands, money_hand, money_round, gift, timer, crypto, document, support,} from '../assets';
const Services_part = () => {
    return (
        <section className='services-part'>
            <div className="container">
                <div className="heading">
                    <div className='title'>Our Best Services</div>
                    <span className='subtitle'>We Translate Your Dream Into Reality</span>
                </div>
                <div className="row">
                    <div className="services-part">
                        <div className="services-cart">
                            <div className="img-service">
                                <img src={hands} alt="" />
                            </div>
                            <div className="service-content">
                                <div className='service-title'>
                                    Safety Comes First
                                </div>
                                <p className='service-subtitle'>                                    
                                    Your Bitcoin is held in our secure escrow until the trade is completed successfully.                 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="services-part">
                        <div className="services-cart">
                            <div className="img-service">
                                <img src={money_hand} alt="" />
                            </div>
                            <div className="service-content">
                                <div className='service-title'>
                                    Easy Deposit & Withdrawls
                                </div>
                                <p className='service-subtitle'>                                    
                                    Get a life-time free Currency wallet maintained by Bitadder, the leading provider of secure Bitcoin wallets.                      
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="services-part">
                        <div className="services-cart">
                            <div className="img-service">
                                <img src={money_round} alt="" />
                            </div>
                            <div className="service-content">
                                <div className='service-title'>
                                    Low Charges
                                </div>
                                <p className='service-subtitle'>                                    
                                    Our algorithms always works to find the most profitable charges                     
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="services-part">
                        <div className="services-cart">
                            <div className="img-service">
                                <img src={gift} alt="" />
                            </div>
                            <div className="service-content">
                                <div className='service-title'>
                                    Bonus & Referral
                                </div>
                                <p className='service-subtitle'>                                    
                                    Earn a referral bonus of up to 30% of your friends Binance Futures trading fees.                     
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="services-part">
                        <div className="services-cart">
                            <div className="img-service">
                                <img src={timer} alt="" />
                            </div>
                            <div className="service-content">
                                <div className='service-title'>
                                    Fast Transactions
                                </div>
                                <p className='service-subtitle'>                                    
                                    Buy or Sell Bitcoin on ocean-exchange in real time so fast as possible                      
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="services-part">
                        <div className="services-cart">
                            <div className="img-service">
                                <img src={crypto} alt="" />
                            </div>
                            <div className="service-content">
                                <div className='service-title'>
                                    Deep Encryption
                                </div>
                                <p className='service-subtitle'>                                    
                                    Our platform is designed to protect funds and personal data better. Your privacy always comes first                   
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="services-part">
                        <div className="services-cart">
                            <div className="img-service">
                                <img src={document} alt="" />
                            </div>
                            <div className="service-content">
                                <div className='service-title'>
                                    Fast KYC
                                </div>
                                <p className='service-subtitle'>                                    
                                    Fast and comprehensive AI-assisted identity verification               
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="services-part">
                        <div className="services-cart">
                            <div className="img-service">
                                <img src={support} alt="" />
                            </div>
                            <div className="service-content">
                                <div className='service-title'>
                                    24/7 Support
                                </div>
                                <p className='service-subtitle'>                                    
                                    Our customer service team works 24/7 to provide you with an exceptional level of support.                      
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Services_part;