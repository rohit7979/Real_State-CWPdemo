import React from "react";
import { styles } from "../../styles/styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { reviews } from "../../constants/reviews";

const Reviews2 = () => {
  const swiper = useSwiper();

  return (
    <section className={`w-full py-6 lg:py-12 ${styles.paddingHorizontal}`}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="w-full flex flex-col items-center justify-start gap-6"
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={index}>
              <p className="text-gray-500 text-lg text-center lg:w-[70%] mb-4 mx-auto">
                {review.review}
              </p>
              <div className="flex flex-col items-center gap-2">
                <p className="font-semibold text-base my-1">{review.name}</p>
                <p className="text-gray-500 text-sm font-medium">
                  {review.designation}
                </p>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            className="bg-yellow-500 w-11 h-11 rounded-full flex items-center justify-center"
            onClick={() => swiper.slidePrev()}
          >
            <MdKeyboardArrowLeft className="text-white text-2xl" />
          </button>
          <button
            className="bg-yellow-500 w-11 h-11 rounded-full flex items-center justify-center"
            onClick={() => swiper.slideNext()}
          >
            <MdKeyboardArrowRight className="text-white text-2xl" />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Reviews2;
