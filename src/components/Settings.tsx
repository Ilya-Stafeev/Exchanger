import '../scss/Settings.scss';
import { } from '../assets';
const Settings = () => {
    return (
        <section className='settings'>
            <div className="container-fluid">
                <div className="row">
                    <div className="row1">
                        <div className="left-buttons-group">
                            <div className="rows-btn">
                                <button className='btn'>
                                    <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 25.5a1.5 1.5 0 011.486 1.297L34 27v4a4 4 0 01-3.701 3.989L30 35H10a4 4 0 01-3.989-3.701L6 31v-4a1.5 1.5 0 012.986-.203L9 27v3.5a1.5 1.5 0 001.5 1.5h19a1.5 1.5 0 001.5-1.5V27l.014-.203A1.5 1.5 0 0132.5 25.5zM20 5a1.5 1.5 0 011.5 1.5v15L24 19a1.414 1.414 0 011.825-.15L26 19a1.414 1.414 0 010 2l-4.94 4.94a1.5 1.5 0 01-2.12 0L14 21a1.414 1.414 0 011.825-2.15L16 19l2.5 2.5v-15A1.5 1.5 0 0120 5z" fill="#fff"></path>
                                    </svg>
                                    <span>Deposit</span>
                                </button>
                                <button className='btn'>
                                    <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 25.5a1.5 1.5 0 011.486 1.296L34 27v4a4 4 0 01-3.701 3.989L30 35H10a4 4 0 01-3.989-3.701L6 31v-4l.014-.204a1.5 1.5 0 012.972 0L9 27v3.5a1.5 1.5 0 001.5 1.5h19a1.5 1.5 0 001.5-1.5V27l.014-.204A1.5 1.5 0 0132.5 25.5zM18.94 6.06a1.5 1.5 0 011.952-.145l.169.146L26 11c.497.497.547 1.272.15 1.825L26 13a1.415 1.415 0 01-1.825.15L24 13l-2.5-2.5v15a1.5 1.5 0 01-2.986.203L18.5 25.5v-15L16 13l-.175.15a1.415 1.415 0 01-1.974-1.975L14 11l4.94-4.94z" fill="#fff"></path>
                                    </svg>
                                    <span>Withdraw</span>
                                </button>
                                <button className='btn'>
                                    <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                                        <path d="M11.879 14H9.74l-.008-3 .013-.233A2 2 0 0111.733 9h17l.233.013A2 2 0 0130.733 11v2l.014.204a1.5 1.5 0 002.972 0l.014-.204v-2a5 5 0 00-5-5h-17a5 5 0 00-5 5v3H4.707c-.89 0-1.337 1.077-.707 1.707l3.586 3.586a1 1 0 001.414 0l3.586-3.586c.63-.63.184-1.707-.707-1.707zm17.035 12h2.138l.008 3-.013.233A2 2 0 0129.06 31H12l-.233-.014A2 2 0 0110 29v-2l-.014-.203a1.5 1.5 0 00-2.972 0L7 27v2a5 5 0 005 5h17.06a5 5 0 005-5v-3h2.026c.89 0 1.337-1.077.707-1.707l-3.586-3.586a1 1 0 00-1.414 0l-3.586 3.586c-.63.63-.184 1.707.707 1.707z" fill="#fff"></path>
                                    </svg>
                                    <span>Transfer</span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <ul className='nav-tabs'>
                                <li className='nav-item'>
                                    <span className='nav-link'>
                                        <svg className="profile-nav-tab-list-item-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.7207C14 6.6177 13.103 5.7207 12 5.7207C10.897 5.7207 10 6.6177 10 7.7207C10 8.8237 10.897 9.7207 12 9.7207C13.103 9.7207 14 8.8237 14 7.7207ZM16 7.7207C16 9.9267 14.206 11.7207 12 11.7207C9.794 11.7207 8 9.9267 8 7.7207C8 5.5147 9.794 3.7207 12 3.7207C14.206 3.7207 16 5.5147 16 7.7207ZM5 20.7207C5 16.8607 8.141 13.7207 12 13.7207C15.859 13.7207 19 16.8607 19 20.7207C19 21.2727 18.553 21.7207 18 21.7207C17.447 21.7207 17 21.2727 17 20.7207C17 17.9637 14.757 15.7207 12 15.7207C9.243 15.7207 7 17.9637 7 20.7207C7 21.2727 6.553 21.7207 6 21.7207C5.447 21.7207 5 21.2727 5 20.7207Z" fill="#fff"></path>
                                        </svg>
                                        <span>My Profile</span>
                                    </span>
                                </li>
                                <li className='nav-item'>
                                    <span className='nav-link'>
                                        <svg className="profile-nav-tab-list-item-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.7207C14 6.6177 13.103 5.7207 12 5.7207C10.897 5.7207 10 6.6177 10 7.7207C10 8.8237 10.897 9.7207 12 9.7207C13.103 9.7207 14 8.8237 14 7.7207ZM16 7.7207C16 9.9267 14.206 11.7207 12 11.7207C9.794 11.7207 8 9.9267 8 7.7207C8 5.5147 9.794 3.7207 12 3.7207C14.206 3.7207 16 5.5147 16 7.7207ZM5 20.7207C5 16.8607 8.141 13.7207 12 13.7207C15.859 13.7207 19 16.8607 19 20.7207C19 21.2727 18.553 21.7207 18 21.7207C17.447 21.7207 17 21.2727 17 20.7207C17 17.9637 14.757 15.7207 12 15.7207C9.243 15.7207 7 17.9637 7 20.7207C7 21.2727 6.553 21.7207 6 21.7207C5.447 21.7207 5 21.2727 5 20.7207Z" fill="#fff"></path>
                                        </svg>
                                        <span>Security</span>
                                    </span>
                                </li>
                                <li className='nav-item'>
                                    <span className='nav-link'>
                                        <svg className="profile-nav-tab-list-item-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.7207C14 6.6177 13.103 5.7207 12 5.7207C10.897 5.7207 10 6.6177 10 7.7207C10 8.8237 10.897 9.7207 12 9.7207C13.103 9.7207 14 8.8237 14 7.7207ZM16 7.7207C16 9.9267 14.206 11.7207 12 11.7207C9.794 11.7207 8 9.9267 8 7.7207C8 5.5147 9.794 3.7207 12 3.7207C14.206 3.7207 16 5.5147 16 7.7207ZM5 20.7207C5 16.8607 8.141 13.7207 12 13.7207C15.859 13.7207 19 16.8607 19 20.7207C19 21.2727 18.553 21.7207 18 21.7207C17.447 21.7207 17 21.2727 17 20.7207C17 17.9637 14.757 15.7207 12 15.7207C9.243 15.7207 7 17.9637 7 20.7207C7 21.2727 6.553 21.7207 6 21.7207C5.447 21.7207 5 21.2727 5 20.7207Z" fill="#fff"></path>
                                        </svg>
                                        <span>Wallet</span>
                                    </span>
                                </li>
                                <li className='nav-item'>
                                    <span className='nav-link'>
                                        <svg className="profile-nav-tab-list-item-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.7207C14 6.6177 13.103 5.7207 12 5.7207C10.897 5.7207 10 6.6177 10 7.7207C10 8.8237 10.897 9.7207 12 9.7207C13.103 9.7207 14 8.8237 14 7.7207ZM16 7.7207C16 9.9267 14.206 11.7207 12 11.7207C9.794 11.7207 8 9.9267 8 7.7207C8 5.5147 9.794 3.7207 12 3.7207C14.206 3.7207 16 5.5147 16 7.7207ZM5 20.7207C5 16.8607 8.141 13.7207 12 13.7207C15.859 13.7207 19 16.8607 19 20.7207C19 21.2727 18.553 21.7207 18 21.7207C17.447 21.7207 17 21.2727 17 20.7207C17 17.9637 14.757 15.7207 12 15.7207C9.243 15.7207 7 17.9637 7 20.7207C7 21.2727 6.553 21.7207 6 21.7207C5.447 21.7207 5 21.2727 5 20.7207Z" fill="#fff"></path>
                                        </svg>
                                        <span>History</span>
                                    </span>
                                </li>
                                <li className='nav-item'>
                                    <span className='nav-link'>
                                        <svg className="profile-nav-tab-list-item-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.7207C14 6.6177 13.103 5.7207 12 5.7207C10.897 5.7207 10 6.6177 10 7.7207C10 8.8237 10.897 9.7207 12 9.7207C13.103 9.7207 14 8.8237 14 7.7207ZM16 7.7207C16 9.9267 14.206 11.7207 12 11.7207C9.794 11.7207 8 9.9267 8 7.7207C8 5.5147 9.794 3.7207 12 3.7207C14.206 3.7207 16 5.5147 16 7.7207ZM5 20.7207C5 16.8607 8.141 13.7207 12 13.7207C15.859 13.7207 19 16.8607 19 20.7207C19 21.2727 18.553 21.7207 18 21.7207C17.447 21.7207 17 21.2727 17 20.7207C17 17.9637 14.757 15.7207 12 15.7207C9.243 15.7207 7 17.9637 7 20.7207C7 21.2727 6.553 21.7207 6 21.7207C5.447 21.7207 5 21.2727 5 20.7207Z" fill="#fff"></path>
                                        </svg>
                                        <span>Referral</span>
                                    </span>
                                </li>
                                <li className='nav-item'>
                                    <span className='nav-link'>
                                        <svg className="profile-nav-tab-list-item-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.7207C14 6.6177 13.103 5.7207 12 5.7207C10.897 5.7207 10 6.6177 10 7.7207C10 8.8237 10.897 9.7207 12 9.7207C13.103 9.7207 14 8.8237 14 7.7207ZM16 7.7207C16 9.9267 14.206 11.7207 12 11.7207C9.794 11.7207 8 9.9267 8 7.7207C8 5.5147 9.794 3.7207 12 3.7207C14.206 3.7207 16 5.5147 16 7.7207ZM5 20.7207C5 16.8607 8.141 13.7207 12 13.7207C15.859 13.7207 19 16.8607 19 20.7207C19 21.2727 18.553 21.7207 18 21.7207C17.447 21.7207 17 21.2727 17 20.7207C17 17.9637 14.757 15.7207 12 15.7207C9.243 15.7207 7 17.9637 7 20.7207C7 21.2727 6.553 21.7207 6 21.7207C5.447 21.7207 5 21.2727 5 20.7207Z" fill="#fff"></path>
                                        </svg>
                                        <span>Log Out</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>            
                    <div className="row2">
                        <div className="row">
                            <div className="row-container">
                                <div className="component">
                                    <div className="settings-alert">
                                        <div>
                                            <div>Email confirmation!</div>
                                            <p>
                                                Your email is not confirmed. Please confirm your email and enter the received code.
                                            </p>
                                        </div>
                                        <a href="">Confirm</a>
                                    </div>
                                </div>
                                <div className="component">
                                    <div className="settings-alert">
                                        <div>
                                            <div>Promo code</div>
                                            <p>
                                                Alphanumeric discount key for online purchases, unlocking special benefits.
                                            </p>
                                        </div>
                                        <a href="">Enter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row"></div>    
                    </div>                    
                </div>
            </div>
        </section>
    );
};
export default Settings;