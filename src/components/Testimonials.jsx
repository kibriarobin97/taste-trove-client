import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import icon from "../assets/icon/Vector.png"

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <SectionTitle subHeading={'What Our Clients Say'} heading={'TESTIMONIALS'}></SectionTitle>
            <Swiper
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mx-24 my-14"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col justify-center items-center text-center md:px-32 space-y-3">
                            <div className="flex justify-center items-center gap-3">
                                <img src={icon} alt="" className="h-8"/>
                                <img src={icon} alt="" className="h-8"/>
                            </div>
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={review?.rating}
                                readOnly
                            />
                            <p>{review?.details}</p>
                            <h3 className="text-2xl font-medium text-[#CD9003]">{review?.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;