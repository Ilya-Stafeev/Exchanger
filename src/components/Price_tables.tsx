import '../scss/Price_tables.scss';
import { useEffect, useState } from 'react';
import { BTC, ETH, BCH, LTC, BNB, Raising, Decline} from '../assets';


const Price_tables = () => {
  const [prices, setPrices] = useState({
    BTC: 0,
    ETH: 0,
    BCH: 0,
    LTC: 0,
    BNB: 0,
  });

  const [priceChanges, setPriceChanges] = useState({
    BTC: 0,
    ETH: 0,
    BCH: 0,
    LTC: 0,
    BNB: 0,
  });

  const [marketCaps, setMarketCaps] = useState({
    BTC: 0,
    ETH: 0,
    BCH: 0,
    LTC: 0,
    BNB: 0,
  });

  useEffect(() => {
    const binanceWebSocket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

    binanceWebSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      // Обновляем цены только для выбранных валют (BTC, ETH, BCH, LTC, BNB)
      if (Array.isArray(data)) {
        const newPrices: { [key: string]: number } = {};
        const newPriceChanges: { [key: string]: number } = {};
        const newMarketCaps: { [key: string]: number } = {};
  
        data.forEach((tickerData) => {
          const symbol = tickerData.s.replace('USDT', '');
          if (['BTC', 'ETH', 'BCH', 'LTC', 'BNB'].includes(symbol)) {
            const currentPrice = parseFloat(tickerData.c);
            const priceChange = parseFloat(tickerData.p);
            const priceChangePercentage = (priceChange / (currentPrice - priceChange)) * 100;
            const marketCap = parseFloat(tickerData.mktCap);
  
            newPrices[symbol] = currentPrice;
            newPriceChanges[symbol] = priceChangePercentage;
            newMarketCaps[symbol] = marketCap;
          }
        });

        setPrices((prevPrices) => ({
          ...prevPrices,
          ...newPrices,
        }));

        setPriceChanges((prevPriceChanges) => ({
          ...prevPriceChanges,
          ...newPriceChanges,
        }));

        setMarketCaps((prevMarketCaps) => ({
          ...prevMarketCaps,
          ...newMarketCaps,
        }));
      }
    });

    binanceWebSocket.addEventListener('close', () => {
      // Обработка закрытия соединения
      console.log('Соединение закрыто');
    });

    // Закрыть соединение WebSocket при размонтировании компонента
    return () => {
      binanceWebSocket.close();
    };
  }, [prices, priceChanges]);

  const renderPriceChange = (change: number) => {
    let icon: string | null = null;
    let sign = '';
    let colorClass = 'black'; 

    if (change < 0) {
      sign = '';
      colorClass = 'red1';
      icon = Decline;
    } else if (change > 0) {
      sign = '+';
      colorClass = 'green1';
      icon = Raising;
    }
    return (
      <div className={`changes ${colorClass}`}>
        {change !== 0 ? (
          <div>
            {`${sign}${change.toFixed(3)}%`}
            {icon && <img src={icon} alt="BNB" />}
          </div>
      ) : (
        <div>
          {`${sign}0.000%`}
        </div>
      )}
      </div>
    );
  };
  return (
    <div className="price-tables">
      <div className="container">
        <div className="heading">
          <h2 className='main_title'>Cryptocurrency Live</h2>
          <span className='main-text'>Price Tables</span>
        </div>
        <div className="list-pading">
          <div className="list-block">
            <table className='currency-table'>
              <thead>
                <tr>                
                  <th className='number-cell'>#</th>
                  <th className='currency-name-cell'>Name</th>
                  <th className='last-price-cell'>Last Price</th>
                  <th className='changes-h-cell'>24h %</th>
                  <th className='market-cap-cell'>Market Cap</th>
                  <th className='nothing'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div className="coins">
                      <img src={BTC} alt="BTC"/>
                      <h6>Bitcoin</h6>
                      <span>BTC</span>
                    </div>                    
                  </td>
                  <td>{prices.BTC.toFixed(2)}$</td>
                  <td>
                    <div>{renderPriceChange(priceChanges.BTC)}</div>
                  </td>
                  <td>${marketCaps.BTC.toFixed(2)}</td>
                  <td><a className='btn' href="">Exchange</a></td>                
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div className="coins">
                      <img src={ETH} alt="ETH"/>
                      <h6>Ethereum</h6>
                      <span>ETH</span>
                    </div>                    
                  </td>
                  <td>{prices.ETH.toFixed(2)}$</td>
                  <td>
                    <div>{renderPriceChange(priceChanges.ETH)}</div>
                  </td>
                  <td></td>
                  <td><a className='btn' href="">Exchange</a></td>  
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <div className="coins">
                      <img src={BCH} alt="BCH"/>
                      <h6>Binance Coin</h6>
                      <span>BCH</span>
                    </div>                    
                  </td>
                  <td>{prices.BCH.toFixed(2)}$</td>
                  <td>
                    <div>{renderPriceChange(priceChanges.BCH)}</div>
                  </td>
                  <td></td>
                  <td><a className='btn' href="">Exchange</a></td>  
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  <div className="coins">
                    <img src={LTC} alt="LTC"/>
                    <h6>Litecoin</h6>
                    <span>LTC</span>
                  </div>                    
                  </td>
                  <td>{prices.LTC.toFixed(2)}$</td>
                  <td>
                    <div>{renderPriceChange(priceChanges.LTC)}</div>
                  </td>
                  <td></td>
                  <td><a className='btn' href="">Exchange</a></td>  
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <div className="coins">
                      <img src={BNB} alt="BNB"/>
                      <h6>Bitcoin Cash</h6>
                      <span>BNB</span>
                    </div>                    
                  </td>
                  <td>{prices.BNB.toFixed(2)}$</td>
                  <td>
                    <div>{renderPriceChange(priceChanges.BNB)}</div>
                  </td>
                  <td></td>
                  <td><a className='btn' href="">Exchange</a></td>  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Price_tables;