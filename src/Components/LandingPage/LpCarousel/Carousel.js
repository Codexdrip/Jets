import React from "react";
import cs1 from "../../Images/concert.jpg";
import cs2 from "../../Images/bigCrowd.jpg";
import cs3 from "../../Images/largeCrowd.jpg";
import "../../CSS/carousel.min.css";
import "../../CSS/Carousel.css";
import { Carousel } from "react-responsive-carousel";

const ImageRotate = () => {
  return (
    <section>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        showThumbs={false}
        dynamicHeight={true}
      >
        <div>
          <img src={cs1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={cs2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={cs3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </section>
  );
};

export default ImageRotate;
