import React from "react";
import Layout from "./../components/Layout/Layout";
 

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="container aboutus-container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="/images/about.jpeg"
              alt="About us"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1>About Us</h1>
            <p className="text-justify mt-2">
              Welcome to our ecommerce store! We are dedicated to providing you with the best online shopping experience, offering a wide range of products to meet all your needs.
            </p>
            <h3>Our Mission</h3>
            <p className="text-justify mt-2">
              Our mission is to make shopping easy, convenient, and enjoyable for our customers. We strive to offer high-quality products at competitive prices, with exceptional customer service.
            </p>
            <h3>Our Values</h3>
            <p className="text-justify mt-2">
              We believe in:
            </p>
            <ul className="text-justify mt-2">
              <li>Customer Satisfaction: Putting our customers first in everything we do.</li>
              <li>Quality: Offering products that meet the highest standards of quality and reliability.</li>
              <li>Integrity: Conducting our business with honesty and transparency.</li>
              <li>Innovation: Continuously improving and innovating to meet the changing needs of our customers.</li>
            </ul>
            <h3>Our Team</h3>
            <p className="text-justify mt-2">
              Our team is made up of passionate and dedicated professionals who are committed to making your shopping experience the best it can be. We work hard to ensure that every aspect of our store meets your expectations.
            </p>
            <h3>Contact Us</h3>
            <p className="text-justify mt-2">
              If you have any questions, comments, or feedback, please don't hesitate to contact us. We're here to help and look forward to hearing from you.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
