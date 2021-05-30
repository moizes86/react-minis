import React from "react";
import "./Carousel.scss";

const Carousel = () => {
  const images = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/actor-comedian-producer-jerry-seinfeld-poses-for-a-portrait-news-photo-1583950995.jpg?crop=1xw:0.75194xh;center,top&resize=480:*",
    "https://i.pinimg.com/originals/25/74/e1/2574e1c51e6a36069dcb73b7cf6cd182.jpg",
    "https://content.linkedin.com/content/dam/business/marketing-solutions/global/en_US/blog/2015/11/george-costanza.jpg",
    "https://www.wonderwall.com/wp-content/uploads/sites/2/2018/05/1027258-seinfeld.jpg?h=800",
  ];
  return (
    <div className="carousel-container">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {images.map((img, i) => (
            <li
              key={`carousel-indicator-${i}`}
              data-target="#carouselExampleIndicators"
              data-slide-to={i}
              className={i === 0 ? "active" : null}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {images.map((img, i) => (
            <div
              key={`carousel-inner-${i}`}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
              id={`carousel-${i}`}
            >
              <img src={img} className="d-block w-100" />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>{" "}
    </div>
  );
};

export default Carousel;
