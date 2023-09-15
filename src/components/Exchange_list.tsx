import '../scss/Exchange_list.scss';
import { useEffect, useState } from 'react';
import { Raising, Decline } from '../assets'; 

function Exchange_list() {
  const [prices, setPrices] = useState({
    BTC: 0, ETH: 0, BCH: 0, LTC: 0, BNB: 0, XMR: 0,    
    IOTA: 0, XLM: 0, ADA: 0, TRX: 0, XTZ: 0, NEO: 0,
    XEM: 0, XRP: 0, EOS: 0, DOGE: 0, DOT: 0, UNI: 0,
    CAKE: 0, SHIB: 0, BUSD: 0, USDC: 0, MATIC: 0, LINK: 0,
    ATOM: 0, DAI: 0, TON: 0, LEO: 0, MKR: 0, AVAX: 0,
    WBTC: 0, ARB: 0, VET: 0, AXS: 0, INJ: 0, APE: 0,
    RPL: 0, COMP: 0,
  });

  const [priceChanges, setPriceChanges] = useState({
    BTC: 0, ETH: 0, BCH: 0, LTC: 0, BNB: 0, XMR: 0,    
    IOTA: 0, XLM: 0, ADA: 0, TRX: 0, XTZ: 0, NEO: 0,
    XEM: 0, XRP: 0, EOS: 0, DOGE: 0, DOT: 0, UNI: 0,
    CAKE: 0, SHIB: 0, BUSD: 0, USDC: 0, MATIC: 0, LINK: 0,
    ATOM: 0, DAI: 0, TON: 0, LEO: 0, MKR: 0, AVAX: 0,
    WBTC: 0, ARB: 0, VET: 0, AXS: 0, INJ: 0, APE: 0,
    RPL: 0, COMP: 0,
  });

  useEffect(() => {
    const binanceWebSocket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

    binanceWebSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      if (Array.isArray(data)) {
        const newPrices: { [key: string]: number } = {};
        const newPriceChanges: { [key: string]: number } = {};
  
        data.forEach((tickerData) => {
          const symbol = tickerData.s.replace('USDT', '');
          if (['BTC', 'ETH', 'BCH', 'LTC', 'BNB', 'XMR', 'IOTA', 'XLM', 'ADA', 
               'TRX', 'XTZ', 'NEO', 'XEM', 'XRP', 'EOS', 'DOGE', 'DOT', 'UNI',
               'CAKE', 'SHIB', 'BUSD', 'USDC', 'MATIC', 'LINK', 'ATOM', 'DAI',
               'TON', 'LEO', 'MKR', 'AVAX', 'WBTC', 'ARB', 'VET', 'AXS', 'INJ',
               'APE', 'RPL', 'COMP'].includes(symbol)) {
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
    <section className="coins-part">
      <div className="container">        
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
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-XMR' title="BTC"></i>
                <h5 className='full_name'>Monero</h5>
                <span className='abb_name'>XMR</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.XMR.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.XMR)}               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-IOTA' title="ETH"></i>
                <h5 className='full_name'>Miota</h5>
                <span className='abb_name'>IOTA</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.IOTA.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.IOTA)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-BNB' title="BCH"></i>
                <h5 className='full_name'>Binance-coin</h5>
                <span className='abb_name'>BNB</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.BNB.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.BNB)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-XLM' title="LTC"></i>
                <h5 className='full_name'>Stellar</h5>
                <span className='abb_name'>XLM</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.XLM.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.XLM)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-ADA' title="BTC"></i>
                <h5 className='full_name'>Cardano</h5>
                <span className='abb_name'>ADA</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.ADA.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.ADA)}               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-TRX' title="ETH"></i>
                <h5 className='full_name'>Tron</h5>
                <span className='abb_name'>TRX</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.TRX.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.TRX)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-XTZ' title="BCH"></i>
                <h5 className='full_name'>Tezos</h5>
                <span className='abb_name'>XTZ</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.XTZ.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.XTZ)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-NEO' title="LTC"></i>
                <h5 className='full_name'>Neo</h5>
                <span className='abb_name'>NEO</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.NEO.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.NEO)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-XEM' title="BTC"></i>
                <h5 className='full_name'>Nem</h5>
                <span className='abb_name'>XEM</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.XEM.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.XEM)}               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-XRP' title="ETH"></i>
                <h5 className='full_name'>Ripple</h5>
                <span className='abb_name'>XRP</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.XRP.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.XRP)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-EOS' title="BCH"></i>
                <h5 className='full_name'>Eosio</h5>
                <span className='abb_name'>EOS</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.EOS.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.EOS)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-DOGE' title="LTC"></i>
                <h5 className='full_name'>Dogecoin</h5>
                <span className='abb_name'>DOGE</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.DOGE.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.DOGE)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-DOT' title="BTC"></i>
                <h5 className='full_name'>Polkadot</h5>
                <span className='abb_name'>DOT</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.DOT.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.DOT)}               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-UNI' title="ETH"></i>
                <h5 className='full_name'>UniSwap</h5>
                <span className='abb_name'>UNI</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.UNI.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.UNI)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-CAKE' title="BCH"></i>
                <h5 className='full_name'>PancakeSwap</h5>
                <span className='abb_name'>CAKE</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.CAKE.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.CAKE)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-SHIB' title="LTC"></i>
                <h5 className='full_name'>SHIBA INU</h5>
                <span className='abb_name'>SHIB</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.SHIB.toFixed(7)}</h4>                
                {renderPriceChange(priceChanges.SHIB)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-BUSD' title="BTC"></i>
                <h5 className='full_name'>Binance USD</h5>
                <span className='abb_name'>BUSD</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.BUSD.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.BUSD)}               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-USDC' title="ETH"></i>
                <h5 className='full_name'>USD Coin</h5>
                <span className='abb_name'>USDC</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.USDC.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.USDC)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-MATIC' title="BCH"></i>
                <h5 className='full_name'>Polygon</h5>
                <span className='abb_name'>MATIC</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.MATIC.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.MATIC)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-LINK' title="LTC"></i>
                <h5 className='full_name'>Chainlink</h5>
                <span className='abb_name'>LINK</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.LINK.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.LINK)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-ATOM' title="BTC"></i>
                <h5 className='full_name'>Cosmos</h5>
                <span className='abb_name'>ATOM</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.ATOM.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.ATOM)}               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-DAI' title="ETH"></i>
                <h5 className='full_name'>Dai</h5>
                <span className='abb_name'>DAI</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.DAI.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.DAI)}                
              </div>
            </div>
          </div>        
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-MKR' title="BTC"></i>
                <h5 className='full_name'>Maker</h5>
                <span className='abb_name'>MKR</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.MKR.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.MKR)}               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-AVAX' title="ETH"></i>
                <h5 className='full_name'>Avalanche</h5>
                <span className='abb_name'>AVAX</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.AVAX.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.AVAX)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-WBTC' title="BCH"></i>
                <h5 className='full_name'>Wrapped Bitcoin</h5>
                <span className='abb_name'>WBTC</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.WBTC.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.WBTC)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-ARB' title="LTC"></i>
                <h5 className='full_name'>Arbitrum</h5>
                <span className='abb_name'>ARB</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.ARB.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.ARB)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-VET' title="BTC"></i>
                <h5 className='full_name'>VeChain</h5>
                <span className='abb_name'>VET</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.VET.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.VET)}               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-AXS' title="ETH"></i>
                <h5 className='full_name'>Axie Infinity</h5>
                <span className='abb_name'>AXS</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.AXS.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.AXS)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-INJ' title="BCH"></i>
                <h5 className='full_name'>Injective</h5>
                <span className='abb_name'>INJ</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.INJ.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.INJ)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-APE' title="LTC"></i>
                <h5 className='full_name'>ApeCoin</h5>
                <span className='abb_name'>APE</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.APE.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.APE)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-RPL' title="BCH"></i>
                <h5 className='full_name'>Rocket Pool</h5>
                <span className='abb_name'>RPL</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.RPL.toFixed(2)}</h4>
                {renderPriceChange(priceChanges.RPL)}                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card_header">
                <i className='card_icon icon-COMP' title="LTC"></i>
                <h5 className='full_name'>Compound</h5>
                <span className='abb_name'>COMP</span>
              </div>
              <div className="card_body">
                <h4 className="price">${prices.COMP.toFixed(2)}</h4>                
                {renderPriceChange(priceChanges.COMP)}                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exchange_list;
