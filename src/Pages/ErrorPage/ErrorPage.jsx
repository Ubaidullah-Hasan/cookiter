import React from 'react';
import "./ErrorPage.css";
import Header from '../Shared/Header/Header';
import errorImg from "../../assets/errorpage.jpg"

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='error-page mx-auto text-center my-5 my-md-5'>
                <img src={errorImg} alt="image" className='w-50' />
                <h1 className='err-title fw-bolder'>OPPS!!!!</h1>
                <p>Page not found!</p>
            </div>
        </div>
    );
};

export default ErrorPage;