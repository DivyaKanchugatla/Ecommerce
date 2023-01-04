import OwlCarousel from "react-owl-carousel";
import "./OwlDemo.css";
const options = {
  margin: 30,
  responsiveClass: true,
  dots: false,
  autoplay: true,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },

    594: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
};
const imagesData = [
  "https://technext.github.io/eshopper/img/vendor-1.jpg",
  "https://technext.github.io/eshopper/img/vendor-2.jpg",
  "https://technext.github.io/eshopper/img/vendor-3.jpg",
  "https://technext.github.io/eshopper/img/vendor-4.jpg",
  "https://technext.github.io/eshopper/img/vendor-5.jpg",
  "https://technext.github.io/eshopper/img/vendor-6.jpg",
  "https://technext.github.io/eshopper/img/vendor-7.jpg",
  "https://technext.github.io/eshopper/img/vendor-8.jpg",
  "https://technext.github.io/eshopper/img/vendor-1.jpg",
  "https://technext.github.io/eshopper/img/vendor-2.jpg",
  "https://technext.github.io/eshopper/img/vendor-3.jpg",
  
];
const OwlDemo = () => {
  return (
    <div className="container-fluid vendorContainer">
      <OwlCarousel {...options}>
        {imagesData.map((item, index) => (
          <div key={index} className="vendorImageContainer">
            <img className="img" src={item} alt="" />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default OwlDemo;
