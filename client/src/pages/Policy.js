import React from "react";
import Layout from "./../components/Layout/Layout";
 

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="container mt-5 policy-container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="/images/contactus.jpeg"
              alt="Privacy Policy"
              className="img-fluid"
              
            />
          </div>
          <div className="col-md-6">
            <h1>Privacy Policy</h1>
             
            <h3>1. Information We Collect</h3>
            <p>
              We collect various types of information in connection with the
              services we provide, including:
            </p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, shipping address, and payment information.
              </li>
              <li>
                <strong>Account Information:</strong> Login credentials,
                purchase history, and preferences.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, operating system, and device information.
              </li>
            </ul>
            <h3>2. How We Use Your Information</h3>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Processing and fulfilling your orders.</li>
              <li>Sending you updates about your order status.</li>
              <li>Personalizing your shopping experience.</li>
              <li>Improving our website and services.</li>
              
            </ul>
             
            <h3>4. Security</h3>
            <p>
              We take appropriate measures to protect your personal information
              from unauthorized access, disclosure, alteration, or destruction.
            </p>
             
            
            <h3>7. Contact Us</h3>
            <p>
              If you have any questions or concerns about our privacy policy,
              please contact us at support@example.com.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
