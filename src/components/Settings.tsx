import '../scss/Settings.scss';
import { } from '../assets';
const Settings = () => {
    return (
        <section className='settings'>
            <div className="container-fluid">
                <div className="row">
                    <div className="row1">
                        <div className="row1-fixed">
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
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.7207C11.448 16.7207 11 16.2727 11 15.7207C11 15.1687 11.448 14.7207 12 14.7207C12.552 14.7207 13 15.1687 13 15.7207C13 16.2727 12.552 16.7207 12 16.7207ZM12 12.7207C10.346 12.7207 9 14.0667 9 15.7207C9 17.3747 10.346 18.7207 12 18.7207C13.654 18.7207 15 17.3747 15 15.7207C15 14.0667 13.654 12.7207 12 12.7207ZM18 19.7207C18 20.2727 17.552 20.7207 17 20.7207H7C6.448 20.7207 6 20.2727 6 19.7207V11.7207C6 11.1687 6.448 10.7207 7 10.7207H8H10H14H16H17C17.552 10.7207 18 11.1687 18 11.7207V19.7207ZM10 6.8317C10 5.6677 10.897 4.7207 12 4.7207C13.103 4.7207 14 5.6677 14 6.8317V8.7207H10V6.8317ZM17 8.7207H16V6.8317C16 4.5657 14.206 2.7207 12 2.7207C9.794 2.7207 8 4.5657 8 6.8317V8.7207H7C5.346 8.7207 4 10.0667 4 11.7207V19.7207C4 21.3747 5.346 22.7207 7 22.7207H17C18.654 22.7207 20 21.3747 20 19.7207V11.7207C20 10.0667 18.654 8.7207 17 8.7207Z" fill="#fff"></path>
                                            </svg>
                                            <span>Security</span>
                                        </span>
                                    </li>
                                    <li className='nav-item'>
                                        <span className='nav-link'>
                                            <svg className="profile-nav-tab-list-item-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4506 2.12434C16.5126 1.82089 17.6196 2.43588 17.923 3.49795C17.9741 3.67663 18 3.86156 18 4.04739V5.72166H20C21.1046 5.72166 22 6.61709 22 7.72166V19.7217C22 20.8262 21.1046 21.7217 20 21.7217H4C2.89543 21.7217 2 20.8262 2 19.7217H2.0267C2.00895 19.6141 2 19.5052 2 19.3959V7.47596C2 6.583 2.59195 5.79823 3.45056 5.55291L15.4506 2.12434ZM10.1401 19.7217H20V11.7217H18V15.9674C18 16.8603 17.408 17.6451 16.5494 17.8904L10.1401 19.7217ZM18 7.72166H20V9.72166H18V7.72166ZM4 7.47593V19.3959L16 15.9673V4.04736L4 7.47593ZM14 9.72166C14 10.2739 13.5523 10.7217 13 10.7217C12.4477 10.7217 12 10.2739 12 9.72166C12 9.16937 12.4477 8.72166 13 8.72166C13.5523 8.72166 14 9.16937 14 9.72166Z" fill="#fff"></path>
                                            </svg>
                                            <span>Wallet</span>
                                        </span>
                                    </li>
                                    <li className='nav-item'>
                                        <span className='nav-link'>
                                            <svg className="profile-nav-tab-list-item-icon--stroke" height="20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                                                <path d="M5.52786 16.7023C6.6602 18.2608 8.3169 19.3584 10.1936 19.7934C12.0703 20.2284 14.0409 19.9716 15.7434 19.0701C17.446 18.1687 18.766 16.6832 19.4611 14.8865C20.1562 13.0898 20.1796 11.1027 19.527 9.29011C18.8745 7.47756 17.5898 5.96135 15.909 5.02005C14.2282 4.07875 12.2641 3.77558 10.3777 4.16623C8.49129 4.55689 6.80919 5.61514 5.64045 7.14656C4.47171 8.67797 3.89482 10.5797 4.01579 12.5023M4.01579 12.5023L2.51579 11.0023M4.01579 12.5023L5.51579 11.0023" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 8V12L15 15" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                                            </svg>
                                            <span>History</span>
                                        </span>
                                    </li>
                                    <li className='nav-item'>
                                        <span className='nav-link'>
                                            <svg className="profile-nav-tab-list-item-icon" aria-hidden="true" height="25" width="25" focusable="false" data-prefix="fal" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path data-v-2c8f192c="" fill="#fff" d="M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM320 256c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm244 192h-40c-15.2 0-29.3 4.8-41.1 12.9 9.4 6.4 17.9 13.9 25.4 22.4 4.9-2.1 10.2-3.3 15.7-3.3h40c24.2 0 44 21.5 44 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.1-34.1-80-76-80zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm304.1 180c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM480 432c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zM157.1 268.9c-11.9-8.1-26-12.9-41.1-12.9H76c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c5.5 0 10.8 1.2 15.7 3.3 7.5-8.5 16.1-16 25.4-22.4z"></path>
                                            </svg>
                                            <span>Referral</span>
                                        </span>
                                    </li>
                                    <li className='nav-item'>
                                        <span className='nav-link'>
                                            <svg className="profile-nav-tab-list-item-icon" width="25" height="25" data-v-880b41fc="" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="sign-out-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path data-v-880b41fc="" fill="#fff" d="M160 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L333.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H176c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L356.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H176c-26.5 0-48 21.6-48 48zM0 112v288c0 26.5 21.5 48 48 48h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48C21.5 64 0 85.5 0 112z"></path>
                                            </svg>
                                            <span>Log Out</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>            
                    <div className="row2">
                        <div className="row2-component">
                            <div className="top-content">
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
                                        <div className='settings-alert-content'>
                                            <div className='settings-alert-title'>Promo code</div>
                                            <p className='settings-alert-info'>
                                                Alphanumeric discount key for online purchases, unlocking special benefits.
                                            </p>
                                        </div>
                                        <a href="" className='settings-alert-btn'>Enter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row2-component">
                            <div className="tab-content">
                                <div className="tab-wallet">
                                    <div className="wallet-profile-card">
                                        <div className="title-wrapper">
                                            <div className='balances-my-title'>My Wallets</div>
                                        </div>
                                        <div className="balances-wrapper">
                                            <ul className='profile-card'>
                                                <li className='profile-list'>
                                                    <div className='profile-list-header'>
                                                        <i></i>
                                                        <p>Total Equity</p>
                                                    </div>
                                                    <div className='profile-list-quantity'>BTC 0.00000</div>
                                                </li>
                                                <li className='profile-list'>
                                                    <div className='profile-list-header'>
                                                        <i></i>
                                                        <p>USDT Equity</p>
                                                    </div>
                                                    <div className='profile-list-quantity'>$0</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <table className='currency-table'>
                                            <thead>
                                                <tr>
                                                    <th>Coin</th>
                                                    <th>Qty</th>
                                                    <th>Usd</th>
                                                    <th colSpan={3}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='wallet-coin'>
                                                        <div className='coin-info'>
                                                            <i className='icon'></i>
                                                            <span className='currency-pair'>BTC/USDT</span>
                                                            <div className='pricing-title'>bitcoin</div>
                                                        </div>
                                                    </td>
                                                    <td className='wallet-qty-cell'>0.00000</td>
                                                    <td className='wallet-usd-cell'>0$</td>                                                    
                                                    <td className='wallet-action-cell'>
                                                        <button>Deposit</button>
                                                    </td>
                                                    <td  className='wallet-action-cell'>
                                                        <button>Withdraw</button>
                                                    </td>
                                                    <td  className='wallet-action-cell'>
                                                        <button>Transfer</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>                                    
                                </div>                                   
                            </div>                            
                        </div>    
                    </div>                    
                </div>
            </div>
        </section>
    );
};
export default Settings;