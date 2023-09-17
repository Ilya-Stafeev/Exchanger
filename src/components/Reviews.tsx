import React, { useState, useRef } from 'react';
import '../scss/Reviews.scss';
import { left_arrow, right_arrow, F, S, E, J, } from '../assets';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    infinite: true, 
    slidesToShow: 2, 
    slidesToScroll: 2, 
    arrows: false,
    nextArrow: (
      <button className='slider-control next' onClick={goToNext}>
        <img src={right_arrow} alt="" />
      </button>
    ),
    prevArrow: (
      <button className='slider-control prev' onClick={goToPrev}>
        <img src={left_arrow} alt="" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  }; 

  return (
    <section className='reviews'>
      <div className="container">
        <div className="slider-title">
          <div className='heading'>Customers About Us</div>
          <div className="slider-controls">
            <button className='slider-control prev' onClick={goToPrev}>
              <img src={left_arrow} alt="" />
            </button>
            <button className='slider-control next' onClick={goToNext}>
              <img src={right_arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="slider-wrapper">          
          <Slider {...settings} ref={sliderRef}>
            <div>       
              <div className="slide-title-wrapper">
                  <div className="slide-title">ocean-exchange the best</div>
                  <div className="slide-subtitle">                    
                    Thank you ocean-exchange, for the excellent customer service very fast on fixing my problem, these exchange deserve more the five stars, thanks to the great help and attention of Stephanie, thank you, I look forward to using the services again.     
                  </div>
              </div>       
              <div className="slide-bottom-wrapper">
                <div className="slide-user-info-img">
                  <img src={E} alt="" />
                </div>
                <div className="slide-user-info">
                  <div className="slide-user-info-title">Edwin</div>
                  <div className="slide-user-info-date">February 13, 2022</div>
                </div>
              </div>
            </div>

            <div>       
              <div className="slide-title-wrapper">
                  <div className="slide-title">Recommend using ocean-exchange</div>
                  <div className="slide-subtitle">                    
                    What can I say about this service? I like its simple interface. The exchange is done quickly enough and the service fee is not very high. If you don't want to spend a lot of time trading on the stock exchange, I recommend using ocean-exchange.   
                  </div>
              </div>       
              <div className="slide-bottom-wrapper">
                <div className="slide-user-info-img">
                  <img src={J} alt="" />
                </div>
                <div className="slide-user-info">
                  <div className="slide-user-info-title">Jimmy C.</div>
                  <div className="slide-user-info-date">August 24, 2020</div>
                </div>
              </div>
            </div>

            <div>       
              <div className="slide-title-wrapper">
                  <div className="slide-title">Fast, reliable, + transaction history !</div>
                  <div className="slide-subtitle">                    
                    Thank you ocean-exchange, for the excellent customer service very fast on fixing my problem, these exchange deserve more the five stars, thanks to the great help and attention of Stephanie, thank you, I look forward to using the services again.     
                  </div>
              </div>       
              <div className="slide-bottom-wrapper">
                <div className="slide-user-info-img">
                  <img src={F} alt="" />
                </div>
                <div className="slide-user-info">
                  <div className="slide-user-info-title">Franklin Plummer</div>
                  <div className="slide-user-info-date">March 25, 2022</div>
                </div>
              </div>
            </div>

            <div>       
              <div className="slide-title-wrapper">
                  <div className="slide-title">Highly recommend, super</div>
                  <div className="slide-subtitle">                    
                    Help save me, I ask you, I am at the address Kazakhstan, village... I'm new to the world of cryptocurrencies, and ocean-exchange has done it this way... simple! I can also get Theta, which is not offered on most platforms. I highly recommend this 👌
                  </div>
              </div>       
              <div className="slide-bottom-wrapper">
                <div className="slide-user-info-img">
                  <img src={S} alt="" />
                </div>
                <div className="slide-user-info">
                  <div className="slide-user-info-title">Sandra Cun</div>
                  <div className="slide-user-info-date">March 19, 2022</div>
                </div>
              </div>
            </div>           
          </Slider>          
        </div>
      </div>
    </section>
  );
};

export default Reviews;
