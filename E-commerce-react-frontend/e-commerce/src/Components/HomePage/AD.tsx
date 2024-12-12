import Carousel  from "react-bootstrap/Carousel";
import '/src/assets/css/_ad-block.scss';


function AD() {
  return (
    <Carousel
    interval={1000}
    controls={true}
    indicators={false}>
      <Carousel.Item>
        <img className="ad" src="/images/img1.webp" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="ad" src="/images/img2.webp" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="ad" src="/images/img3.webp" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default AD;
