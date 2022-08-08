import React from 'react';
import './News.css';
import slide_1 from '../../assets/images/slide_1.png';
import slide_2 from '../../assets/images/slide_2.png';
import slide_3 from '../../assets/images/slide_3.png';
import left_arrow from '../../assets/images/left_arrow.png';
import right_arrow from '../../assets/images/right_arrow.png';

const News = () => {
    return (
        <div className='news__body'>
            <div className='news'>
                <p className='news__bar'></p>
                <div className='news__bar__info'>
                    <p className='news__bar__info__title'>Our News</p>
                    <figure className='news__bar__info__figure'>
                        <img className='news__bar__info__figure__arrow' src={left_arrow} alt="left-arrow" />
                        <img className='news__bar__info__figure__arrow' src={right_arrow} alt="right_arrow" />
                    </figure>
                </div>
                <div className='news__container'>
                    <div className='news__container__card'>
                        <img className='news__container__card__image' src={slide_1} alt="slider_image" />
                        <div className='news__container__card__description'>
                            BJIT is a global software development
                            and IT services company,  
                        </div>
                    </div>
                    <div className='news__container__card'>
                        <img className='news__container__card__image' src={slide_2} alt="slider_image" />
                        <div className='news__container__card__description'>
                            BJIT is a global software development
                            and IT services company,  
                        </div>
                    </div>
                    <div className='news__container__card'>
                        <img className='news__container__card__image' src={slide_3} alt="slider_image" />
                        <div className='news__container__card__description'>
                            BJIT is a global software development
                            and IT services company,  
                        </div>
                    </div>
                </div>
                <div className='news__explore'>
                    <button className='news__explore__btn'>Explore more</button>
                </div>
            </div>
        </div>
    );
};

export default News;