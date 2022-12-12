import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import GetData from "../../Services/appServices";

const HeaderSwiper = () => {

    const { data } = GetData("header-swipers");

    if (!data) { return <p>please wait ...</p> }
    console.log('swiper daata  =>', data);

    return (
        <>
            <Swiper
                effect='fade'
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="header-swiper"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {data[0].images.map((item) => (
                    <SwiperSlide>
                        <img src={`http://localhost:1337${item.url}`} width="100%" height="100%" />
                    </SwiperSlide>
                ))}

            </Swiper>


        </>
    )

}


export default HeaderSwiper;







// <div className="swiper">
//     <div className="swiper-wrapper">

//         {data[0].images.map((item) => (
//             <div className="swiper-slide">
//                 <img src={`http://localhost:1337${item.url}`} width="100%" height="100%" />
//             </div>
//         ))}


//     </div>
//     <div className="swiper-pagination"></div>

//     <div className="swiper-button-prev"></div>
//     <div className="swiper-button-next"></div>

//     <div className="swiper-scrollbar"></div>
// </div>