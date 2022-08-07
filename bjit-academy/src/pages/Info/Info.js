import React from 'react';
import './Info.css';
import tick from '../../assets/images/tick.png';
import courseLevel from '../../assets/images/course_level.png';
import calender1 from '../../assets/images/calender_1.png';
// import smallClock from '../../assets/images/small_colck.png';
import calender from '../../assets/images/calender.png';
import big_clock from '../../assets/images/big_clock.png';
import location from '../../assets/images/location.png';
import person from '../../assets/images/person.png';

const Info = () => {
    return (
        <section className='section'>
            <section className='section__container'>
                <section className='section__container__course'>
                    <article className='section__container__course__course-curriculum'>
                        <div className='section__container__course__course-curriculum__course'>
                            Courses Info
                        </div>
                        <div className='section__container__course__course-curriculum__curriculum'>
                            Curriculum
                        </div>
                    </article>
                    <article className='section__container__course__course-article--about'>
                        <p>About Course</p>
                        <article>
                            This course is specially designed for new and aspiring app makers. 
                            Every year more and more people rely on mobile devices to meet their 
                            changing needs. It is the perfect time to start learning Mobile App development. 
                            This course blends both theory and practice to help you build apps the right way. 
                            You will learn from great Instructors with industry experience who will help 
                            you at every step, and guide you to understand the best practices of mobile 
                            app development. 
                        </article>
                    </article>
                    <article className='section__container__course__course-article--earn'>
                        <p>Earn a Certificate</p>
                        <article>
                            After the successful completion of this course and hands-on project, 
                            you will earn a certificate, and you can proudly celebrate your achievement 
                            with your professional network and prospective employers. To get this certificate, 
                            you must ace the tests, achieving a good score. 
                        </article>
                    </article>
                    <article className='section__container__course__course-article--require'>
                        <p>Requirements</p>
                        <div className='section__container__course__course-article--require__tick' >
                            <div>
                                <img src={tick} alt="" />
                            </div>
                            <div>
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. 
                            </div>
                        </div>
                        <div className='section__container__course__course-article--require__tick'>
                            <div>
                                <img src={tick} alt="" />
                            </div>
                            <div>
                                It is a long established fact that a reader will be distracted by the readable content 
                                of a page when looking at its layout. 
                            </div>
                        </div>
                        <div className='section__container__course__course-article--require__tick'>
                            <div>
                                <img src={tick} alt="" />
                            </div>
                            <div>
                                It is a long established fact that a reader will be distracted by the readable. 
                            </div>
                        </div>
                        <div className='section__container__course__course-article--require__tick'>
                            <div>
                                <img src={tick} alt="" />
                            </div>
                            <div>
                                It is a long established fact that a reader will be distracted. 
                            </div>
                        </div>
                    </article>
                </section>
                <section className='section__container__detail'>
                    <section className='section__container__detail__topic'>
                        <figure>
                            <img src={courseLevel} alt="Course Level" />
                        </figure>
                        <section>
                            <p>Course Level</p>
                            <p>Beginner Level</p>
                        </section>
                    </section>
                    <section className='section__container__detail__topic'>
                        <figure>
                            <img src={calender1} alt="Course Level" /> 
                            {/* <img src={smallClock} alt="small clock" />                            */}
                        </figure>
                        <section>
                            <p>Start form</p>
                            <p>June, 2022</p>
                        </section>
                    </section>
                    <section className='section__container__detail__topic'>
                        <figure>
                            <img src={calender} alt="Course Level" />
                        </figure>
                        <section>
                            <p>Course Duration</p>
                            <p>4 month</p>
                        </section>
                    </section>
                    <section className='section__container__detail__topic'>
                        <figure>
                            <img src={big_clock} alt="Class schedule" />
                        </figure>
                        <section>
                            <p>Class schedule</p>
                            <p>Monday to Friday(8:00 AM to 5:00PM)</p>
                        </section>
                    </section>
                    <section className='section__container__detail__topic'>
                        <figure>
                            <img src={calender} alt="Class schedule" />
                        </figure>
                        <section>
                            <p>Last date to apply</p>
                            <p>30 June 2022</p>
                        </section>
                    </section>
                    <section className='section__container__detail__topic'>
                        <figure>
                            <img src={location} alt="Course Level" />
                        </figure>
                        <section>
                            <p>Location</p>
                            <p>BJIT Academy</p>
                        </section>
                    </section>
                    <section className='section__container__detail__topic'>
                        <figure>
                            <img src={person} alt="Course Level" />
                        </figure>
                        <section>
                            <p>Resource person</p>
                            <p>Audin Kundu Rushow</p>
                        </section>
                    </section>
                    <section className='section__container__detail__apply'>
                        <button className='section__container__detail__apply__btn'>Apply now</button>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Info;