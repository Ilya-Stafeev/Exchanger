import '../scss/Baner.scss';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { banner, swiper1, swiper2, swiper3, swiper4, swiper5, swiper6, } from '../assets';

const Baner = () => {    
    return (          
        <section className="baner-main">
            <div className="container">
                <div className="main-banner__wrapper">
                    <div className="rows">
                        <div className="row1">
                            <div className="banner-detail-inner">
                                <h1 className="main-banner__title">
                                    Buy & Sell
                                    <br/>
                                    <span className="h2 text-purple">Crypto Instant</span>
                                </h1>
                                <p className='baner-info'>                                    
                                    Join world’s biggest &amp; tursted Exchange.Trade inBitcoin, Ethereum, Ripple and many more currencies.
                                </p>
                                <a href="/"className='main-baner-action'>Get started now</a>
                            </div>
                            <div className="partner">
                                <h6>Our Partners</h6>
                                <div className="partner__list">
                                    <Swiper
                                    className="swiper-partner swiper-pointer-events"
                                    spaceBetween={40}
                                    slidesPerView={2}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 3, 
                                        },                                                                          
                                    }}
                                    >
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="binance--swiper-slide" role="group" aria-label="1 / 6">
                                                <a href="https://www.binance.com/">
                                                    <img src={swiper1} alt="partner1" />
                                                </a>
                                            </SwiperSlide>
                                            <SwiperSlide role="group" aria-label="2 / 6">
                                                <a href="https://www.ledger.com/">
                                                    <img src={swiper2} alt="partner2" />
                                                </a>
                                            </SwiperSlide>
                                            <SwiperSlide role="group" aria-label="3 / 6">
                                                <a href="https://www.coinbase.com/">
                                                    <img src={swiper3} alt="partner3" />
                                                </a>
                                            </SwiperSlide>
                                            <SwiperSlide className="blockchain--swiper-slide" role="group" aria-label="4 / 6">
                                                <a href="https://www.blockchain.com/">
                                                    <img src={swiper4} alt="partner4" />
                                                </a>
                                            </SwiperSlide>
                                            <SwiperSlide className="whitebit--swiper-slide" role="group" aria-label="5 / 6">
                                                <a href="https://whitebit.com/">
                                                    <img src={swiper5} alt="partner5" />
                                                </a>
                                            </SwiperSlide>
                                            <SwiperSlide  role="group" aria-label="6 / 6">
                                                <a href="https://www.huobi.com/">
                                                    <img  src={swiper6} alt="partner6" />
                                                </a>
                                            </SwiperSlide>
                                        </div>
                                        <span className='swiper-notification'></span>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="main-banner__img-wrapper">
                                <div className="main-banner__img-gray-wrapper">
                                    <img src={banner} alt="ocean-exchange" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  export default Baner