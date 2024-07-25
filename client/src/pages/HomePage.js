import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/HomePage.css';
import Layout from '../components/Layout/Layout';

const HomePage = () => {
  return (
    <Layout>
    <div className="home-container ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-container">
            <div className="info">
              <h5>WINKEL ECOMMERCE SHOP</h5>
              <h1>Catch Your Own <br /><strong>Stylish & Look</strong></h1>
              <p>Experience the ultimate shopping destination for the latest in style and elegance</p>
              <button className="btn btn-warning btn-discover">Discover Now</button>
            </div>
          </div>
          <div className="col-md-6 image-container">
            <img src="/images/home2.PNG" alt="Stylish Look" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default HomePage;
