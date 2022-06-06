import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css';
const Faq = () => {
    return (
        <div className='container faq-section'>
            <h1 className='text-center'> Frequently Asked Question  </h1>
             <hr className='new-line' />
               <div className='row d-flex'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <img src="https://i.ibb.co/YZQ0bzc/faq-banner.png" alt="" />
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 faq-area'>
                    <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>1. What is JS mainly used for? </Accordion.Header>
    <Accordion.Body>
    JavaScript is a programming language used primarily by Web browsers to create a dynamic and interactive experience for the user. Most of the functions and applications that make the Internet indispensable to modern life are coded in some form of JavaScript.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header> 2.what is react js?</Accordion.Header>
    <Accordion.Body>
    React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
    React JS is a JavaScript library used in web development to build interactive elements on websites.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header> 3.what is difference between library and framework?</Accordion.Header>
    <Accordion.Body>
    Libraries provide developers with predefined functions and classes to make their work easier and boost the development process. Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header> 4.why use bootstrap?</Accordion.Header>
    <Accordion.Body>
    Advantages of Bootstrap: Easy to use: Anybody with just basic knowledge of HTML and CSS can start using Bootstrap. Responsive features: Bootstrap's responsive CSS adjusts to phones, tablets, and desktops. Mobile-first approach: In Bootstrap 3, mobile-first styles are part of the core framework.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </div>
                   
               </div>
        </div>
    );
};

export default Faq;