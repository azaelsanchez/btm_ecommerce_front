import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const Slider = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="w-50"
                src="https://seguros.elcorteingles.es/admin/assets/uploads/files/images/thumbnails_xl/5bf4b-dia-mundial-del-galgo.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="w-50"
                src="https://www.xlsemanal.com/wp-content/uploads/sites/3/2019/05/galgo-perro-caza-abandono-1-768x506.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className=" w-50"
                src="https://www.nolodejesalazar.es/www.nolodejesalazar.es/uploads/2019/05/no-lo-dejes-al-azar-border-collie.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Slider;