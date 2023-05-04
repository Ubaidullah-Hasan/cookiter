import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../assets/banner1.jpeg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpeg"
import "./Slider.css";


const Slider = () => {
    return (
        <div className='slider-cus'>
            <Carousel>
                <Carousel.Item interval={10000} className='text-position'>
                    <img
                        className="d-block w-100 slider-img"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="title text-white ">
                            Your Skills
                            <span className="text-success"> Art</span><br />
                            Of Cooking Here
                        </h1>

                        <p className="subtitle d-none d-md-block text-white bg-dark bg-opacity-25 mx-auto">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100 slider-img"
                        src={banner1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 className="title text-white ">
                            Learn The
                            <span className="text-success"> Art</span><br />
                            Of Cooking Here
                        </h1>

                        <p className="subtitle  d-none d-md-block text-white mx-auto d-none d-md-block">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100 slider-img"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className="title text-white ">
                            Cooking 
                            <span className="text-success"> Art</span><br />
                            Of Cooking Here
                        </h1>

                        <p className="subtitle  d-none d-md-block text-white  mx-auto">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;