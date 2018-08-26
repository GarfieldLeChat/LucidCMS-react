import React, { Component } from "react";
import slide1 from "./assets/images/carousel/img1.jpg";
import slide2 from "./assets/images/carousel/img2.jpg";
import slide3 from "./assets/images/carousel/img3.jpg";
import slide4 from "./assets/images/carousel/img4.jpg";
import slide5 from "./assets/images/carousel/img5.jpg";
import slide6 from "./assets/images/carousel/img6.jpg";
 
class Carousel extends Component {
  render() {
    return (
    <div>
        <h2>Carousel</h2>
        <div id="carousel">

            <div class="carousel-slide">
            <img alt="" src={slide1} width="300" />
            <h3 class="carousel-slide-title">Title 1</h3>
            <p class="carousel-slide-text">Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 </p>
            </div>

            <div class="carousel-slide">
            <img alt="" src={slide2} width="300" />
            <h3 class="carousel-slide-title">Title 2</h3>
            <p class="carousel-slide-text">Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 </p>
            </div>

            <div class="carousel-slide">
            <img alt="" src={slide3} width="300" />
            <h3 class="carousel-slide-title">Title 3</h3>
            <p class="carousel-slide-text">Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 </p>
            </div>

            <div class="carousel-slide">
            <img alt="" src={slide4} width="300" />
            <h3 class="carousel-slide-title">Title 4</h3>
            <p class="carousel-slide-text">Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 Text 4 </p>
            </div>

            <div class="carousel-slide">
            <img alt="" src={slide5} width="300" />
            <h3 class="carousel-slide-title">Title 5</h3>
            <p class="carousel-slide-text">Text 5 Text 5 Text 5 Text 5 Text 5 Text 5 Text 5 Text 5 </p>
            </div>

            <div class="carousel-slide">
            <img alt="" src={slide6} width="300" />
            <h3 class="carousel-slide-title">Title 6</h3>
            <p class="carousel-slide-text">Text 6 Text 6 Text 6 Text 6 Text 6 Text 6 Text 6 Text 6 </p>
            </div>
        </div>

        <div id="carousel-controls">
            <div id="prev"></div>
            <div id="next"></div>
        </div>
        
        <div id="pager"></div>
    </div>
    );
  }
}
 
export default Carousel;