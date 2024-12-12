import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible((prevScrollPos > currentScrollPos && currentScrollPos > 10) || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    // useEffect(() => {
    //     if (location.hash) {
    //         const id = location.hash.replace('#', '');
    //         const element = document.getElementById(id);
    //         if (element) {
    //             element.scrollIntoView({ behavior: 'smooth' });
    //         }

    //     }
    // }, [location]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigation = (item) => {
        setIsOpen(false); // Close mobile menu if open
        if (item === "Contact") {
            navigate('/contact');
        } else {
            const sectionId = item.replace(/\s+/g, '-').toLowerCase();
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const scrollToTop = () => {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const navItems = ["Services", "Our Work", "About Us", "Insights", "Contact"];

    return (
        <>
            <style jsx>{`
                .nav-link {
                    position: relative;
                    overflow: hidden;
                    display: inline-block;
                }
                .nav-link span {
                    display: inline-block;
                    transition: transform 0.3s ease;
                }
                .nav-link span:nth-child(1) {
                    transform: translateY(0);
                }
                .nav-link span:nth-child(2) {
                    position: absolute;
                    top: 100%;
                    left: 0;
                }
                .nav-link:hover span:nth-child(1) {
                    transform: translateY(-100%);
                }
                .nav-link:hover span:nth-child(2) {
                    transform: translateY(-100%);
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: white;
                    transform: translateX(-101%);
                    transition: transform 0.3s ease;
                }
                .nav-link:hover::after {
                    transform: translateX(0);
                }
            `}</style>
            <nav className={`fixed w-full z-[100] transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="backdrop-blur-lg text-white font-neueMontreal px-4 sm:px-6 lg:px-16 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl sm:text-3xl lg:text-4xl cursor-pointer" onClick={scrollToTop}>
                        CYLSETECH
                    </div>
                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item, index) => (
                            <a 
                                key={index} 
                                onClick={() => handleNavigation(item)}
                                className={`nav-link text-lg capitalize font-light cursor-pointer ${index === 4 && "ml-16"}`}
                            >
                                <span>{item}</span>
                                <span>{item}</span>
                            </a>
                        ))}
                    </div>
                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="lg:hidden text-3xl focus:outline-none p-2" aria-label="Toggle menu">
                       {isOpen? 'X': '☰'
                       }
                    </button>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden backdrop-blur-lg text-white font-neueMontreal px-4 py-4 space-y-2">
                        {navItems.map((item, index) => (
                            <a 
                                key={index} 
                                onClick={() => handleNavigation(item)}
                                className="block py-2 text-lg capitalize font-light cursor-pointer"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;