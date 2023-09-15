import React, { useEffect } from 'react';
import '../scss/Exchange_part.scss';

const Exchange_part: React.FC = () => {
    useEffect(() => {
      const dropdown = document.querySelector('.dropdown') as HTMLElement | null;
      if (!dropdown) return;
  
      dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
      });
  
      const menuItems = document.querySelectorAll('.menu li') as NodeListOf<HTMLElement>;
      menuItems.forEach((item) => {
        item.addEventListener('click', () => {
          const text = item.querySelector('b')?.textContent;
          if (text) {
            const selected = dropdown.querySelector('.selected b') as HTMLElement | null;
            if (selected) {
              selected.textContent = text;
              dropdown.classList.remove('active');
            }
          }
        });
      });
    }, []);  

    return (
        <section className='exchange'>
            <div className="conatainer">
                <div className="exchange-section">
                    <div className='title'>Buy and Sell Coins at <br /> the Crypto with <br /> minimal fees</div>
                    <span className='text'>We take minimal fees, its only 1%</span>
                    <div className='coin-exchange'>
                        <input type="number" min="0"/>
                        <div className='dropdown'>
                            <div className="select">
                                <span className="selected">
                                    <i className='icon-btc'></i>
                                    <b>BTC</b>
                                </span>
                                <div className="caret"></div>
                            </div>
                            <ul className="menu">
                                <li className='active'>
                                    <i className='icon-btc'></i>
                                    <b>BTC</b>
                                </li>
                                <li>
                                    <i className='icon-eth'></i>
                                    <b>ETH</b>
                                </li>
                                <li>
                                    <i className='icon-bch'></i>
                                    <b>BCH</b>
                                </li>
                            </ul>
                        </div>

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