import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from "swiper";

const data = [
  {
    avatar: AVT1,
    name: "Hieu Hien",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sedpariatur voluptatibus odit architecto! Laboriosam itaqueperspiciatis sed officia, laudantium perferendis amet suscipitnihil ipsa, eveniet saepe, qui cumque id consectetur.",
  },
  {
    avatar: AVT2,
    name: "HungDung",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sedpariatur voluptatibus odit architecto! Laboriosam itaqueperspiciatis sed officia, laudantium perferendis amet suscipitnihil ipsa, eveniet saepe, qui cumque id consectetur.",
  },
  {
    avatar: AVT3,
    name: "Hai Trieu",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sedpariatur voluptatibus odit architecto! Laboriosam itaqueperspiciatis sed officia, laudantium perferendis amet suscipitnihil ipsa, eveniet saepe, qui cumque id consectetur.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {data.map(({avatar, name, review, index}) => {
          return (
            <SwiperSlide  key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
