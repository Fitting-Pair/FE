import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Swiper } from "swiper/react";
import { ReactNode } from "react";

const SwiperComponent = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={10}
      initialSlide={1}
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
