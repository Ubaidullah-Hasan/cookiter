import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import "./Testemonial.css"

const Testemonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            title: "CEO, XYZ Company",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eleifend tellus. Pellentesque eget libero euismod, pretium odio vitae, dapibus leo. Donec lobortis lacus ut nulla auctor, quis ultrices nisi egestas. ",
            image: "https://picsum.photos/id/1018/100/100",
        },
        {
            id: 2,
            name: "Jane Smith",
            title: "Founder, ABC Company",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eleifend tellus. Pellentesque eget libero euismod, pretium odio vitae, dapibus leo. Donec lobortis lacus ut nulla auctor, quis ultrices nisi egestas. ",
            image: "https://picsum.photos/id/1021/100/100",
        },
        {
            id: 3,
            name: "Bob Johnson",
            title: "Director, PQR Company",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eleifend tellus. Pellentesque eget libero euismod, pretium odio vitae, dapibus leo. Donec lobortis lacus ut nulla auctor, quis ultrices nisi egestas. ",
            image: "https://picsum.photos/id/1020/100/100",
        },
    ];



    return (
        <section id="testimonials" className='my-5'>
            
            <div className='testimonials'>
                <Container>
                    <Row>
                        <Col>
                            <Carousel>
                                {testimonials.map((testimonial) => (
                                    <Carousel.Item key={testimonial.id}>
                                        <div className="testimonial-container text-white">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="rounded-circle mx-auto d-block mb-3"
                                            />
                                            <h3 className="text-center mb-2">{testimonial.name}</h3>
                                            <h4 className="text-center mb-4">{testimonial.title}</h4>
                                            <p className="text-center">{testimonial.quote}</p>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Testemonial;