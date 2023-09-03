import '../scss/Top_market.scss';
import { useEffect, useState } from 'react';
import { Raising, Decline } from '../assets'; 

function Top_market() {
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

  useEffect(() => {
    const binanceWebSocket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

    binanceWebSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      // Обновляем цены только для выбранных валют (BTC, ETH, BCH, LTC, BNB)
      if (Array.isArray(data)) {
        const newPrices: { [key: string]: number } = {};
        const newPriceChanges: { [key: string]: number } = {};
  
        data.forEach((tickerData) => {
          const symbol = tickerData.s.replace('USDT', '');
          if (['BTC', 'ETH', 'BCH', 'LTC', 'BNB'].includes(symbol)) {
            const currentPrice = parseFloat(tickerData.c);
            const priceChange = parseFloat(tickerData.p);
            const priceChangePercentage = (priceChange / (currentPrice - priceChange)) * 100;
  
            newPrices[symbol] = currentPrice;
            newPriceChanges[symbol] = priceChangePercentage;
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
  }, []);

  const renderPriceChange = (change: number) => {
    let icon: string | null = null;
    let sign = '';
    let colorClass = 'black'; 

    if (change < 0) {
      sign = '';
      colorClass = 'red';
      icon = Decline;
    } else if (change > 0) {
      sign = '+';
      colorClass = 'green';
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
    <section className="top_market">
      <div className="container">
        <h2 className='top-market_title'>
          Get Various Crypto Coin
        </h2>
        <div className="rows">
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-btc' title="BTC"></i>
                <h5 className='full_name'>Bitcoin</h5>
                <span className='abb_name'>BTC</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.BTC.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.BTC)}               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-eth' title="ETH"></i>
                <h5 className='full_name'>Ethereum</h5>
                <span className='abb_name'>ETH</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.ETH.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.ETH)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-bch' title="BCH"></i>
                <h5 className='full_name'>Bitcoin Cash</h5>
                <span className='abb_name'>BCH</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.BCH.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.BCH)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-ltc' title="LTC"></i>
                <h5 className='full_name'>Litecoin</h5>
                <span className='abb_name'>LTC</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.LTC.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.LTC)}                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Top_market;
