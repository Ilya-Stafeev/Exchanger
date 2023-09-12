import '../scss/Exchange_part.scss';
import { add_user, credit_card, wallet, diagram } from '../assets';

const Exchange_part = () => {
    return (
        <section className='exchange'>
            <div className="conatainer">
                <div className="exchange-section">
                    <div className='title'>Buy and Sell Coins at <br /> the Crypto with <br /> minimal fees</div>
                    <span className='text'>We take minimal fees, its only 1%</span>
                    <div className='coin-exchange'>
                        <input type="number" min="0"/>
                        <span className='select'>
                            <span className='currency'>
                                <i className='icon-btc' title="BTC"></i>
                                <b>USD</b>
                            </span>
                            <span className='arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                </svg>
                            </span>
                        </span>

                        <div className='equal'>=</div>
                        
                        <input type="number"  min="0"/>
                        <span className='select'>
                            <span className='currency'>
                                <i className='icon-btc' title="BTC"></i>
                                <b>USD</b>
                            </span>
                            <span className='arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                </svg>
                            </span>
                        </span>
                    </div>
                    <button className='conduct-exchange'>exchange now</button>
                </div>
            </div>
        </section>
    );
};
export default Exchange_part;