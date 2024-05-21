import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../assets/home/slide1.jpg"
import slide2 from "../assets/home/slide2.jpg"
import slide3 from "../assets/home/slide3.jpg"
import slide4 from "../assets/home/slide4.jpg"
import slide5 from "../assets/home/slide5.jpg"
import SectionTitle from './SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle subHeading={'From 11:00am to 11:00pm'}
                heading={'ORDER ONLINE'}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='lg:text-2xl text-xl uppercase text-center text-white -mt-10'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='lg:text-2xl text-xl uppercase text-center text-white -mt-10'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='lg:text-2xl text-xl uppercase text-center text-white -mt-10'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='lg:text-2xl text-xl uppercase text-center text-white -mt-10'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='lg:text-2xl text-xl uppercase text-center text-white -mt-10'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;