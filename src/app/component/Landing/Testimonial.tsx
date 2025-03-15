import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Sara",
      comment:
        "I’ve had an amazing experience working with Amir. He is always online whenever I need help with my website, making it so easy to get things fixed or updated quickly. His commitment to deadlines is great and everything is delivered on time. If you’re looking for a reliable and skilled web designer, I highly recommend him!",
      image: "/img/avatar-1.png",
      rating: 5,
    },
    {
      id: 2,
      name: "masoud",
      comment:
        "Working with Amir was a professional and quality collaboration experience for me. Timely delivery and accuracy in work execution, as well as commitment in delivering the work, were important features of working with Amir for me.",
      image: "/img/avatar-1.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Alex",
      comment:
        "Amir was exactly who I neededHis website design was completely customized and perfectly aligned with my brand. He paid great attention to detail, and his creative ideas made my website stand out from the competition.Working with Amir was a highly professional and enjoyable experience. He was always responsive and delivered the project on time. ",
      image: "/img/avatar-1.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Daniel",
      comment:
        "Amir exceeded my expectationsHis designs were modern, user-friendly, and fully SEO-optimized. He helped me improve my digital marketing strategy, which significantly increased my website traffic.What impressed me the most was Amir’s commitment and excellent support.If you’re looking for a high-quality web specialist, Amir is the best choice!",
      image: "/img/avatar-1.png",
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 text-center justify-center sm:mb-28 my-20">
      <h2 className="sm:text-4xl text-2xl sm:w-[50%] mx-auto sm:pb-10 pb-4 sm:mb-20 mb-10 font-bold border-b border-slate-500 dark:border-slate-600 dark:text-gray-200 text-gray-950 md:text-4xl font-sans">
        Why Clients Trust Me
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper sm:pb-14 pb-2 mx-auto"
        style={{
          paddingBottom: "60px",
          margin: "auto",
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-slate-400 dark:bg-slate-800 h-[330px] sm:h-[380px] bg-opacity-40 dark:bg-opacity-30 sm:p-6 p-3 rounded-xl shadow-lg dark:shadow-slate-900 text-center">
              <div className="flex justify-around w-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="sm:w-24 sm:h-24 w-20 h-20 rounded-full mx-auto sm:mb-2 dark:border dark:border-slate-500"
                />

                <div className="flex flex-col justify-center w-3/5">
                  <h3 className="text-xl font-semibold dark:text-white text-slate-900 font-mono text-center">
                    {testimonial.name}
                  </h3>
                  <div className="flex justify-center items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-700 dark:text-amber-300 text-center"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 sm:mt-1 text-gray-900 dark:text-gray-300 font-sans">
                {testimonial.comment}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
