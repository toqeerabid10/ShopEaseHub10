import React from 'react'
import Header from './Navbar.js';
import Footer from './Footer.js';
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children,title,description,author,keywords}) => {
  return (
    <div>
     <Helmet>
     <meta charSet="UTF-8" />
     <meta name="description" content={description} />
     <meta name="keywords" content={keywords} />
     <meta name="author" content= {author}/>
     <title>{title}</title>
  </Helmet>

      <Header></Header>
      <main style={{ minHeight: "75vh" }}>{children}</main>
      <Toaster />
      <Footer></Footer>
    </div>
  )
}
Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb,Ecommerce",
  author: "Toqeer Ahmad",
};

 
export default Layout

