import '../scss/Reviews.scss';
import { left_arrow, right_arrow } from '../assets';

const Reviews = () => {
    return (
        <section className='reviews'>
            <div className="container">
                <div className="slider-title">
                    <div className='heading'>Customers About Us</div>
                    <div className="slider-controls">
                        <button className='slider-control prev'>
                            <img src={left_arrow} alt="" />
                        </button>
                        <button className='slider-control next'>
                            <img src={right_arrow} alt="" />
                        </button>
                    </div>
                </div>
                <div className="slider-wrapper"></div>
            </div>
        </section>
    );
};
export default Reviews;