import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    projectIdea: ''
  });
  const [rotate, setRotate] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="mt-14 pb-8 flex flex-col lg:flex-row min-h-screen bg-black text-white">
      <div className="w-full lg:w-1/2 p-8 relative min-h-[50vh] lg:min-h-screen">
        <div className='absolute flex flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {[0, 1].map((index) => (
            <div 
              key={index}
              className='relative flex items-center justify-center w-[30vw] h-[30vw] sm:w-[25vw] sm:h-[25vw] md:w-[20vw] md:h-[20vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-100'
            >
              <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                <div 
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`
                  }} 
                  className='line flex absolute top-1/2 left-1/2 w-full h-10'
                >
                  <div className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-zinc-100'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 mr-8 bg-white text-black p-8 font-foundersGrotesk">
        {!isSubmitted ? (
          <>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8">Let's Create Something Epic Together.</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-xl md:text-2xl font-bold mb-2" htmlFor="name">
                  YOUR NAME *
                </label>
                <input
                  className="w-full text-xl md:text-2xl p-2 border border-gray-300 rounded"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-xl md:text-2xl font-bold mb-2" htmlFor="email">
                  EMAIL *
                </label>
                <input
                  className="w-full text-xl md:text-2xl p-2 border border-gray-300 rounded"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-xl md:text-2xl font-bold mb-2" htmlFor="companyName">
                  COMPANY NAME *
                </label>
                <input
                  className="w-full text-xl md:text-2xl p-2 border border-gray-300 rounded"
                  id="companyName"
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              {step === 1 && (
                <button
                  className="w-full bg-gray-200 text-xl md:text-2xl text-black p-3 rounded mt-4"
                  onClick={nextStep}
                  type="button"
                >
                  EXPLAIN PROJECT IDEA →
                </button>
              )}
              {step === 2 && (
                <div className="mb-4">
                  <label className="block text-2xl md:text-3xl font-bold mb-2" htmlFor="projectIdea">
                    PROJECT IDEA
                  </label>
                  <textarea
                    className="w-full p-2 border text-xl md:text-2xl border-gray-300 rounded"
                    id="projectIdea"
                    name="projectIdea"
                    value={formData.projectIdea}
                    onChange={handleChange}
                    rows="4"
                  />
                  <button
                    className="w-full text-xl md:text-2xl bg-black text-white p-3 rounded mt-4"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              )}
              <div className="text-2xl text-gray-500 mt-4 flex justify-between">
                <span>Start a project</span>
                <span>Partner with us</span>
                <span>Work with us</span>
              </div>
            </form>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-foundersGrotesk font-bold text-center">
              Thank you for contacting us!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;