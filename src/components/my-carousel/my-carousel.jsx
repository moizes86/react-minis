import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./my-carousel.scss";

const MyCarousel = () => {
  const images = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/actor-comedian-producer-jerry-seinfeld-poses-for-a-portrait-news-photo-1583950995.jpg?crop=1xw:0.75194xh;center,top&resize=480:*",
    "https://i.pinimg.com/originals/25/74/e1/2574e1c51e6a36069dcb73b7cf6cd182.jpg",
    "https://content.linkedin.com/content/dam/business/marketing-solutions/global/en_US/blog/2015/11/george-costanza.jpg",
    "https://www.wonderwall.com/wp-content/uploads/sites/2/2018/05/1027258-seinfeld.jpg?h=800",
  ];
  return (
    <div className="carousel-container">
      <h2 className="text-center text-dark mb-5">Giddy Up!</h2>
      <Carousel>
        {images.map((img, i) => (
          <Carousel.Item key={`image-${i}`}>
            {console.log(img)}
            <img className="d-block w-100" src={img} alt={`img-${i}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
