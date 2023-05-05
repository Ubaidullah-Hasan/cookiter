import React from 'react';
import { Container, Card } from 'react-bootstrap';
import ReactToPDF from '../../ReacttoPDF/ReactToPDF';

import { PDFDownloadLink } from '@react-pdf/renderer';

const Blog = () => {
    return (

        <Container className='my-md-4'>
            <div className='bg-success text-white py-2 py-md-3 px-md-4 px-2 mb-3 mb-md-4 d-md-flex  justify-content-between align-items-center'>
                <h1>Frequently Asked Questions</h1>
                <PDFDownloadLink document={<ReactToPDF />} fileName='blog' >
                    {({ loading }) => (loading ? <button>Loading Document...</button> : <button className='btn btn-light mt-2 mt-md-0'>DOWNLOAD</button>)}
                </PDFDownloadLink>
            </div>

        <ReactToPDF> 
            <Card className='mb-3'>
                <Card.Header>
                    1. What is the differences between uncontrolled and controlled components?
                </Card.Header>
                <Card.Body>
                    <Card.Text className='mb-1'>
                        In React, have tow kinds of components, controlled or uncontrolled component. The difference between they managed and update data in different way.
                    </Card.Text>
                    <Card.Text className='mb-1'>
                        controlled components is that they provide a more predictable and reliable way of managing component state. They can also be easier to test and debug since the state is managed by React. The main disadvantage is that they require more code to implement.
                    </Card.Text>
                    <Card.Text>
                        On the other hand, uncontrolled components require less code and can be faster to implement. However, they are less reliable since they consuming more time on the DOM. They are also harder to test and debug since the state is not managed by React
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='mb-3'>
                <Card.Header>
                    2. How to validate React props using PropTypes ?
                </Card.Header>
                <Card.Body>
                    <Card.Text className='mb-1'>
                        In React,PropTypes are used to validate the props that are passed to a component. PropTypes is a library that check the types of props.
                    </Card.Text>
                    <Card.Text className='mb-1'>
                        If you want to use the PropTypes you first need import the 'propTypes' library.
                    </Card.Text>
                    <Card.Text>
                        If a prop is passed to the component that doesn't match the expected type, a warning message will be logged to the console. This can help catch errors early and make debugging easier.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='mb-3'>
                <Card.Header>
                    3. what is the difference between nodejs and express js ?
                </Card.Header>
                <Card.Body>
                    <Card.Text className='mb-1'>
                        Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
                        Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
                    </Card.Text>
                    <Card.Text className='mb-1'>
                        Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
                    </Card.Text>
                    <Card.Text>
                        Node.js provides a runtime environment for executing JavaScript code outside the browser, while Express.js provides a web framework for building web applications on top of Node.js.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>
                    4. What is a custom hook, and why will you create a custom hook ?
                </Card.Header>
                <Card.Body>
                    <Card.Text className='mb-1'>
                        Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.
                    </Card.Text>
                    <Card.Text className='mb-1'>
                        You might create a custom hook when you have a piece of code that you use in many places in your application, but it doesn't fit well into a component, and you don't want to create a Higher-Order Component or a Render Prop. With a custom hook, you can extract that common logic into a separate function that you can then use in any component that needs it. It's a way to separate concerns and make your code more modular, readable, and reusable.
                    </Card.Text>
                </Card.Body>
            </Card>
        </ReactToPDF>
        
        </Container>
    );
};

export default Blog;