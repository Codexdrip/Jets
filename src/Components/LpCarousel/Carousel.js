import React from "react";
import cs1 from "../../Images/cs1.gif";
import cs2 from "../../Images/cs2.gif";
import cs3 from "../../Images/cs3.gif";
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
        <div style={{ maxheight: "10px" }}>
          <img src={cs1} />
          <p className="legend">Legend 1</p>
        </div>
        <div height="100" width="100">
          <img src={cs2} />
          <p className="legend">Legend 2</p>
        </div>
        <div height="100" width="100">
          <img src={cs3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </section>
  );
};

export default ImageRotate;
