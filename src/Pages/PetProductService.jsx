import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productImage1 from '../assets/img/product1.jpg';
import productImage2 from '../assets/img/product2.jpg';
import productImage3 from '../assets/img/product3.jpg';
import productImage4 from '../assets/img/product4.jpg';
import productImage5 from '../assets/img/product5.jpg';
import productImage6 from '../assets/img/product6.jpeg';
import productImage7 from '../assets/img/product7.jpg';
import productImage8 from '../assets/img/product8.jpg';
import AdminHeader from '../components/Header/AdminHeader';


const PetProductService = () => {
  const [products, setProducts] = useState([]);

  // Array of random images for products without images in the database
  const randomImages = [
    productImage1, 
    productImage2, 
    productImage3,
    productImage4,
    productImage5,
    productImage6,
    productImage7,
    productImage8
  ];

  const getAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getAllProductList');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching pet data:', error);
    }
  };

  // Effect to fetch user data when the component mounts
  useEffect(() => {
    // Call the function to fetch user data
    getAllProducts();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-backgroundColor'>
    <AdminHeader/>
    <div className="pet-products-container">
      <h2 mb-5>Pet Products</h2>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.productId} className="product-card mx-10 mb-5 mt-10 rounded-2xl border border-textYellowColor">
            <img
              src={randomImages[Math.floor(Math.random() * randomImages.length)]}
              alt={product.productName}
            />
            <h3 className='mt-5 text-center'>{product.productName}</h3>
            <p className='text-center'>{product.description}</p>
            <p className='text-center'>${product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default PetProductService;



