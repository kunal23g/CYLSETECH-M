import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

 
  return (
    <div className=" max-w-[1200px] mx-auto mt-16 py-10 flex flex-col min-h-screen  text-white">
      <div className="flex-grow flex flex-col lg:flex-row">
        
        
        <div className="lg:mr-8  flex-1 bg-white text-black p-8 mx-3  lg:p-12 ">
          {!isSubmitted ? (
            <>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 font-foundersGrotesk" >Let's Create Something Epic Together.</h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xl font-bold mb-2 font-foundersGrotesk" htmlFor="name">
                    YOUR NAME *
                  </label>
                  <input
                    className="w-full text-lg p-3 font-neueMontreal border border-gray-300 rounded-lg"
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xl font-bold mb-2 font-foundersGrotesk" htmlFor="email">
                    EMAIL *
                  </label>
                  <input
                    className="w-full text-lg p-3 border font-neueMontreal border-gray-300 rounded-lg"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xl font-bold mb-2 font-foundersGrotesk" htmlFor="companyName">
                    COMPANY NAME *
                  </label>
                  <input
                    className="w-full text-lg p-3 font-neueMontreal border border-gray-300 rounded-lg"
                    id="companyName"
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                {(
                  <div>
                    
                    <button
                      className="w-full text-xl bg-black text-white p-4 rounded-lg mt-6 hover:bg-gray-900 transition-colors"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                  </div>
                )}
              </form>
            </>
          ) : (
            <div className=" px-3 flex flex-col justify-between items-center lg:justify-center  md:h-full">
              <h2 className="mt-6 px-3 text-4xl md:text-5xl lg:text-6xl font-bold  text-center">
                Thank you for contacting us!
              </h2>
              <br />
              <h1 className=' md:mt-16 text-7xl font-foundersGrotesk'>CYLSETECH</h1>
              {/* <h1>CYLSETECH</h1> */}
            </div>
          )}
        </div>
      </div>
      
      
    </div>
  );
};

export default ContactForm;