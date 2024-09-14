import { Line } from "@/img";
import "./SimilarListings.css";
import Image from "next/image";
import SwiperCards from "@/components/swiper/swiperCards/SwiperCards";

const SimilarListings = () => {
  return (
    <div className="similar-listings">
      <div className="similar-listings-wrap">
        <div className="similar-listings-title">
          <Image src={Line} alt="Line" />
          <h1>Similar listings</h1>
        </div>
      </div>
      <div className="similar-listings-cards">
        <SwiperCards />
      </div>
    </div>
  );
};

export default SimilarListings;
