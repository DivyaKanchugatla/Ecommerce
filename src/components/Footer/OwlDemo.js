import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import imagesData from "../../assets/OwlDemoImages/OwlDemoImages";
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
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200:{
        items:5
    }
  },
};

const OwlDemo = () => {
  
    return (
      <>
        {/* <div className="container-fluid m-3">
          <div className="row">
            <div className="d-none  d-lg-block">
              <OwlCarousel items={6} margin={3} autoplay={true}>
                <div className="picture-container">
                  <img
                    className="img "
                    alt="pic1"
                    src={"https://technext.github.io/eshopper/img/vendor-5.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shadw"
                    alt="pic2"
                    src={"https://technext.github.io/eshopper/img/vendor-3.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shadw"
                    alt="pic3"
                    src={"https://technext.github.io/eshopper/img/vendor-2.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shaow"
                    alt="pic4"
                    src={"https://technext.github.io/eshopper/img/vendor-1.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shaow"
                    alt="pic5"
                    src={"https://technext.github.io/eshopper/img/vendor-6.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shaow"
                    alt="pic6"
                    src={"https://technext.github.io/eshopper/img/vendor-7.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic7"
                    src={"https://technext.github.io/eshopper/img/vendor-8.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic8"
                    src={"https://technext.github.io/eshopper/img/vendor-3.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic9"
                    src={"https://technext.github.io/eshopper/img/vendor-2.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic10"
                    src={"https://technext.github.io/eshopper/img/vendor-1.jpg"}
                  />
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="row">
            <div className="d-none d-lg-none d-md-block">
              <OwlCarousel items={4} margin={8} autoplay={true}>
                <div className="picture-container">
                  <img
                    className="img "
                    alt="pic1"
                    src={"https://technext.github.io/eshopper/img/vendor-5.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shadw"
                    alt="pic2"
                    src={"https://technext.github.io/eshopper/img/vendor-3.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shadw"
                    alt="pic3"
                    src={"https://technext.github.io/eshopper/img/vendor-2.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shaow"
                    alt="pic4"
                    src={"https://technext.github.io/eshopper/img/vendor-1.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shaow"
                    alt="pic5"
                    src={"https://technext.github.io/eshopper/img/vendor-6.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shaow"
                    alt="pic6"
                    src={"https://technext.github.io/eshopper/img/vendor-7.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic7"
                    src={"https://technext.github.io/eshopper/img/vendor-8.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic8"
                    src={"https://technext.github.io/eshopper/img/vendor-3.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic9"
                    src={"https://technext.github.io/eshopper/img/vendor-2.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic10"
                    src={"https://technext.github.io/eshopper/img/vendor-1.jpg"}
                  />
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 d-sm-block d-md-none">
              <OwlCarousel items={2} margin={8} autoplay={true}>
                <div className="picture-container">
                  <img
                    className="img "
                    alt="pic1"
                    src={"https://technext.github.io/eshopper/img/vendor-5.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shadw"
                    alt="pic2"
                    src={"https://technext.github.io/eshopper/img/vendor-3.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shadw"
                    alt="pic3"
                    src={"https://technext.github.io/eshopper/img/vendor-2.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shaow"
                    alt="pic4"
                    src={"https://technext.github.io/eshopper/img/vendor-1.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shaow"
                    alt="pic5"
                    src={"https://technext.github.io/eshopper/img/vendor-6.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shaow"
                    alt="pic6"
                    src={"https://technext.github.io/eshopper/img/vendor-7.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic7"
                    src={"https://technext.github.io/eshopper/img/vendor-8.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic8"
                    src={"https://technext.github.io/eshopper/img/vendor-3.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic9"
                    src={"https://technext.github.io/eshopper/img/vendor-2.jpg"}
                  />
                </div>
                <div className="picture-container">
                  <img
                    className="img shdow"
                    alt="pic10"
                    src={"https://technext.github.io/eshopper/img/vendor-1.jpg"}
                  />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div> */}
         <div className="container-fluid pt-5">
        <div className="row">
       <OwlCarousel {...options}>
       {imagesData.map((img,index) => {                 
          return (
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1"  key={index}> 
                 <div className="card border-0 mb-4">               
                        <div className="picture-container">
                          <img
                                className="owlCarousel-img"
                                alt="pic1"
                                src={img}
                             />
                        </div>
                        </div>                                        
                    </div>
                 );
                })}
       </OwlCarousel>
                </div>
        </div>
      </>
    );
  }


export default OwlDemo;
