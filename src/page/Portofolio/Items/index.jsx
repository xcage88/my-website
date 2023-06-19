import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import movie from './assets/movie.png'
import bootcamp from './assets/Bootcamp-Online.png'
import suit from './assets/Suit-Jawa.png'
import buku from './assets/buku-aplikasi.png'
import card from './assets/card-match.png'


function Items() {
    return (
        <>
            <Swiper 
                effect={'coverflow'}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5
                    }
                }
                pagination={{el: '.swiper-pagination', clickable: true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container'
            >
                <SwiperSlide>
                    <div className='relative flex items-center justify-center h-auto w-full'>
                        <a href="https://hai-movie.netlify.app/" target='_blank'>
                            <img src={movie} alt="anime" className='group-hover:opacity-10'/>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative flex items-center justify-center h-auto w-full'>
                        <a href="https://pair-game-card.netlify.app/" target='_blank'>
                            <img src={card} alt="anime" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative flex items-center justify-center h-auto w-full'>
                        <a href="https://bootcamp-online.netlify.app/" target='_blank'>
                            <img src={bootcamp} alt="anime" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative flex items-center justify-center h-auto w-full'>
                        <a href="https://buku-aplikasi.netlify.app/" target='_blank'>
                            <img src={buku} alt="anime" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative flex items-center justify-center h-auto w-full'>
                        <a href="https://game-suit-jawa.netlify.app/" target='_blank'>
                            <img src={suit} alt="anime" />
                        </a>
                    </div>
                </SwiperSlide>
                <div className="slider-controler">
                    <div className='swiper-button-prev slider-arrow'>
                        <FaArrowLeft/>
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        <FaArrowRight/>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </>
    )
}

export default Items