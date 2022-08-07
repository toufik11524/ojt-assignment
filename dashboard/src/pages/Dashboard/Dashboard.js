import React from 'react';
import './Dashboard.css';
import search from '../../assets/images/search.png';
import notifications from '../../assets/images/notifications.png';
import profile from '../../assets/images/profile.png';
import logo from '../../assets/images/example logo.png';
import profileImage from '../../assets/images/Profile image.png';
import dashboard from '../../assets/images/dashboard.png';
import tradeview from '../../assets/images/trading view.png';
import fileManager from '../../assets/images/files.png';
import traffic from '../../assets/images/analytics.png';
import users from '../../assets/images/Group 15.png';
import calendar from '../../assets/images/calendar.png';
import message from '../../assets/images/messages.png';
import payements from '../../assets/images/payments.png';

const Dashboard = () => {
    return (
        <section className='dashboard'>
            <section className='dashboard__container'>
                <header className='dashboard__container__header'>
                    <span className='dashboard__container__header__logo'>
                        <img src={logo} alt="logo" />
                    </span>
                    <span className='dashboard__container__header__sidenav'>
                        <img src={search} alt="search" />
                        <img src={notifications} alt="notifications" />
                        <img src={profile} alt="profile" />
                    </span>
                </header>
                {/* bellow section be flex */}
                <section className='dashboard__container__sidebar'>
                    <section className='dashboard__container__sidebar__left'>
                        <header className='dashboard__container__sidebar__left__header'>
                            <span className='dashboard__container__sidebar__left__header__title' >
                                <img src={profileImage} alt="profie_image" />
                                <h3>Miroslav Minev</h3>
                            </span>
                            <span className='dashboard__container__sidebar__left__header__price'>
                                <p>$ 52</p>
                            </span>
                        </header>
                        <hr className='dashboard__container__sidebar__left__linebar' />

                        <section className='dashboard__container__sidebar__left__special'>
                            <span className='dashboard__container__sidebar__left__special__first'>
                                <img src={dashboard} alt="dashboard" />
                            </span>
                            <span className='dashboard__container__sidebar__left__special__second'>
                                Dashboard
                            </span>
                        </section>
                        <section className='dashboard__container__sidebar__left__common'>
                            <span className='dashboard__container__sidebar__left__common__first'>
                                <img src={tradeview} alt="tradeview" />
                            </span>
                            <span className='dashboard__container__sidebar__left__common__second'>
                                Tradeview
                            </span>
                        </section>
                        <section className='dashboard__container__sidebar__left__common'>
                            <span className='dashboard__container__sidebar__left__common__first'>
                                <img src={fileManager} alt="fileManager" />
                            </span>
                            <span className='dashboard__container__sidebar__left__common__second'>
                                File manager
                            </span>
                        </section>
                        <section className='dashboard__container__sidebar__left__common'>
                            <span className='dashboard__container__sidebar__left__common__first'>
                                <img src={traffic} alt="traffic" />
                            </span>
                            <span className='dashboard__container__sidebar__left__common__second'>
                                Traffic analyzer
                            </span>
                        </section>
                        <section className='dashboard__container__sidebar__left__common'>
                            <span className='dashboard__container__sidebar__left__common__first'>
                                <img src={users} alt="users" />
                            </span>
                            <span className='dashboard__container__sidebar__left__common__second'>
                                Users manager
                            </span>
                        </section>
                        <section className='dashboard__container__sidebar__left__common'>
                            <span className='dashboard__container__sidebar__left__common__first'>
                                <img src={calendar} alt="calendar" />
                            </span>
                            <span className='dashboard__container__sidebar__left__common__second'>
                                Calendar
                            </span>
                        </section>
                        <section className='dashboard__container__sidebar__left__special--message'>
                            <span className='dashboard__container__sidebar__left__special--message__part'>
                                <span className='dashboard__container__sidebar__left__special--message__part__first'>
                                    <img src={message} alt="message" />
                                </span>
                                <span className='dashboard__container__sidebar__left__special--message__part__second'>
                                    Messages
                                </span>
                            </span>
                            <span  className='dashboard__container__sidebar__left__special--message__part2'>
                                8
                            </span>
                        </section>
                        <section className='dashboard__container__sidebar__left__common'>
                            <span className='dashboard__container__sidebar__left__common__first'>
                                <img src={payements} alt="payements" />
                            </span>
                            <span className='dashboard__container__sidebar__left__common__second'>
                                Payments
                            </span>
                        </section>
                        
        
                    </section>
                    <section>
                            {/* middle side bar */}
                    </section>
                    <section>
                            {/* right side bar */}
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Dashboard;