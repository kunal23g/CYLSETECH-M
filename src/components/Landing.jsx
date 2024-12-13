import React, { useState, useEffect } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/eyeS.jpg';

const ProductSlider = ({ 
  items, 
  autoSlide = false, 
  autoSlideInterval = 3000,
  title = "Featured Products",
  
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-sliding mechanism
  useEffect(() => {
    let intervalId;
    if (autoSlide && items.length > 1) {
      intervalId = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
    }
    return () => clearInterval(intervalId);
  }, [autoSlide, autoSlideInterval, items.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-11 px-4 py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-7xl font-foundersGrotesk font-bold text-white">
          {title}
        </h2>
        
      </div>

      {/* Slider Container */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Slider Wrapper with Fixed Dimensions */}
        <div className="relative w-full h-full flex items-center justify-center">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`
                absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out
                ${currentIndex === index 
                  ? 'opacity-100 scale-100 z-10' 
                  : 'opacity-0 scale-95 z-0'
                }
              `}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col relative">
                {/* Image Container with Reduced Opacity and Centered Title */}
                <div className="h-[500px] w-full overflow-hidden font-foundersGrotesk  relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                    <h3 className="  p-2 text-7xl md:text-9xl font-bold text-white drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {items.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/75 rounded-full p-2 shadow-md hover:bg-white z-20"
            >
              <FaAngleDoubleLeft className="text-gray-700" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/75 rounded-full p-2 shadow-md hover:bg-white z-20"
            >
              <FaAngleDoubleRight className="text-gray-700" />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {items.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  h-2 w-2 rounded-full transition-all 
                  ${currentIndex === index 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-gray-300'
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Example usage
const App = () => {
  const productItems = [
    {
      title: " PROVEN VIDEO ANALYTICS",
      imageUrl: img2,
    },
    {
      title: "CROWD MANAGEMENT",
      imageUrl: img1,
    },
    {
      title: "DELIVERY MANAGEMENT",
      imageUrl: img3,
    },
    {
      title: "FACIAL RECOGNITION",
      imageUrl: img4,
    }
  ];

  return (
    <ProductSlider 
      items={productItems}
      autoSlide={true}
      autoSlideInterval={5000}
      title="Discover our innovative technology"
      
    />
  );
};

export default App;
