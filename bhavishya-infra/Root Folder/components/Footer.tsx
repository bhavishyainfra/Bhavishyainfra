
import React from 'react';

const Footer: React.FC = () => {
  const contactInfo = {
    phone: '9705233624',
    email: 'bhavishyainfra@gmail.com',
    address: 'Grain Market, Jangaon, Telangana - 506167'
  };

  return (
    <footer id="contact" className="bg-stone-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex flex-col items-start leading-none group">
              <span className="text-2xl md:text-3xl font-black tracking-tighter">
                BHAVISHYA <span className="text-amber-500">INFRA.</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold mt-1 text-amber-500 group-hover:text-white transition-colors">
                Building Constructions
              </span>
            </a>
            <p className="text-stone-400 text-sm leading-relaxed">
              Bhavishya Infra is a premier global infrastructure and construction firm dedicated to engineering excellence and sustainable development. Shaping city skylines since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-stone-400 hover:text-white transition-colors text-sm">Our Services</a></li>
              <li><a href="#portfolio" className="text-stone-400 hover:text-white transition-colors text-sm">Portfolio</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                <a href={`tel:${contactInfo.phone}`} className="text-stone-400 text-sm hover:text-white transition-colors">
                  +91 {contactInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-stone-400 text-sm hover:text-white transition-colors break-all">
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Office</p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500 mb-6">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-4">Subscribe for industry insights and project updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-stone-900 border-stone-800 text-white text-sm p-3 w-full focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button className="bg-amber-500 px-4 hover:bg-amber-600 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 uppercase tracking-widest font-bold">
          <p>© 2024 Bhavishya Infra. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
