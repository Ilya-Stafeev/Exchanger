import '../scss/Contact_part.scss';

const Contact_part = () => {
    return (
        <section className='contact-part'>
            <div className="container">
                <div className="row">
                    <div className="contact-part-wrapper">
                        <div className="contact-part-left">
                            <div className="contact-part-title">Start mining now</div>
                            <p className='contact-part-subtitle'>
                                Join now with DYNAMIC to get the latest
                                <br />
                                news and start mining now
                            </p>
                        </div>
                        <div className="contact-part-right">
                            <form action="">
                                <input className='contact-part-field' placeholder="Enter your email" type="email" required />
                                <button className='contact-part-button'>Subscribe</button>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact_part;