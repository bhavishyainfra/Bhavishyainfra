
import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  
  const contactDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const portfolioDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (portfolioDropdownRef.current && !portfolioDropdownRef.current.contains(event.target as Node)) {
        setIsPortfolioOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const serviceItems = [
    { name: 'Building homes', href: '#services' },
    { name: 'Apartments', href: '#services' },
    { name: 'Developing ventures', href: '#services' },
  ];

  const portfolioItems = [
    { name: 'Interior Designing', href: '#portfolio' },
    { name: 'Exterior Designing', href: '#portfolio' },
    { name: 'Ongoing Projects', href: '#portfolio' },
    { name: 'Completed Projects', href: '#portfolio' },
    { name: 'Renovation & Remodeling', href: '#portfolio' },
  ];

  const contactInfo = {
    phone: '9705233624',
    email: 'bhavishyainfra@gmail.com',
    address: 'Grain Market, Jangaon, Telangana - 506167'
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" onClick={scrollToTop} className="flex flex-col items-start leading-none group">
              <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
                BHAVISHYA <span className="text-amber-500">INFRA.</span>
              </span>
              <span className={`text-[10px] uppercase tracking-[0.3em] font-bold mt-1 transition-colors ${isScrolled ? 'text-amber-600' : 'text-amber-400 group-hover:text-white'}`}>
                Building Constructions
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              onClick={scrollToTop}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors ${isScrolled ? 'text-stone-700 hover:text-amber-500' : 'text-stone-200 hover:text-white'}`}
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center text-sm font-semibold uppercase tracking-widest transition-colors focus:outline-none ${isScrolled ? 'text-stone-700 hover:text-amber-500' : 'text-stone-200 hover:text-white'}`}
              >
                Services <i className={`fas fa-chevron-down ml-2 text-[10px] transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isServicesOpen && (
                <div 
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute left-0 mt-4 w-60 bg-white shadow-2xl rounded-sm border-t-4 border-amber-500 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {serviceItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-6 py-3 text-sm font-bold uppercase tracking-widest text-stone-700 hover:bg-stone-50 hover:text-amber-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Portfolio Dropdown */}
            <div className="relative" ref={portfolioDropdownRef}>
              <button
                onMouseEnter={() => setIsPortfolioOpen(true)}
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className={`flex items-center text-sm font-semibold uppercase tracking-widest transition-colors focus:outline-none ${isScrolled ? 'text-stone-700 hover:text-amber-500' : 'text-stone-200 hover:text-white'}`}
              >
                Portfolio <i className={`fas fa-chevron-down ml-2 text-[10px] transition-transform ${isPortfolioOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isPortfolioOpen && (
                <div 
                  onMouseLeave={() => setIsPortfolioOpen(false)}
                  className="absolute left-0 mt-4 w-72 bg-white shadow-2xl rounded-sm border-t-4 border-amber-500 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {portfolioItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsPortfolioOpen(false)}
                      className="block px-6 py-3 text-sm font-bold uppercase tracking-widest text-stone-700 hover:bg-stone-50 hover:text-amber-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            {/* Contact Dropdown */}
            <div className="relative" ref={contactDropdownRef}>
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className={`flex items-center text-sm font-semibold uppercase tracking-widest transition-colors focus:outline-none ${isScrolled ? 'text-stone-700 hover:text-amber-500' : 'text-stone-200 hover:text-white'}`}
              >
                Contact <i className={`fas fa-chevron-down ml-2 text-[10px] transition-transform ${isContactOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isContactOpen && (
                <div className="absolute right-0 mt-4 w-72 bg-white shadow-2xl rounded-sm border-t-4 border-amber-500 py-6 px-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-2 rounded-sm mr-3">
                        <i className="fas fa-phone-alt text-xs"></i>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-1">Call Us</p>
                        <a href={`tel:${contactInfo.phone}`} className="text-stone-900 font-bold hover:text-amber-500 transition-colors">
                          +91 {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-2 rounded-sm mr-3">
                        <i className="fas fa-envelope text-xs"></i>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-1">Email Us</p>
                        <a href={`mailto:${contactInfo.email}`} className="text-stone-900 font-bold hover:text-amber-500 transition-colors break-all">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-2 rounded-sm mr-3">
                        <i className="fas fa-map-marker-alt text-xs"></i>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-1">Visit Us</p>
                        <p className="text-stone-900 text-sm font-medium leading-relaxed">
                          {contactInfo.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-sm text-sm font-bold uppercase transition-colors shadow-lg shadow-amber-500/20">
              Get Quote
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-stone-900' : 'text-white'} p-2`}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full left-0 animate-in slide-in-from-top duration-300 shadow-xl max-h-[90vh] overflow-y-auto">
          <div className="px-4 py-8 space-y-6">
            <a
              href="#"
              onClick={scrollToTop}
              className="block text-stone-900 text-lg font-bold uppercase tracking-wide hover:text-amber-500"
            >
              Home
            </a>

            <div className="space-y-4">
              <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">Services</p>
              {serviceItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-stone-700 text-base font-bold uppercase tracking-widest hover:text-amber-500 pl-4"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">Portfolio</p>
              {portfolioItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-stone-700 text-base font-bold uppercase tracking-widest hover:text-amber-500 pl-4"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="pt-6 border-t border-stone-100 space-y-6">
              <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">Contact Details</p>
              <div className="space-y-4">
                <a href={`tel:${contactInfo.phone}`} className="flex items-center text-stone-700 font-semibold">
                  <i className="fas fa-phone-alt mr-3 text-amber-500"></i> +91 {contactInfo.phone}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center text-stone-700 font-semibold">
                  <i className="fas fa-envelope mr-3 text-amber-500"></i> {contactInfo.email}
                </a>
                <div className="flex items-start text-stone-700 font-semibold">
                  <i className="fas fa-map-marker-alt mr-3 mt-1 text-amber-500"></i> 
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-amber-500 text-white px-6 py-4 rounded-sm font-bold uppercase tracking-widest">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
