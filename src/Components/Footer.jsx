import React from 'react';
import logo from './../assets/Images/logo.png';
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black black to-black text-white py-12 border-none">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div>
                        {/* <h1 className="text-4xl font-extrabold mb-4">Disney Clone</h1> */}
                        <img src={logo} alt="" className='w-[200px]' />
                        
                    </div>
                    {/* Company Links */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Company</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition duration-300">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition duration-300">Careers</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition duration-300">Press</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition duration-300">Blog</a></li>
                        </ul>
                    </div>
                    {/* Support Links */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Support</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition duration-300">Help Center</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition duration-300">Contact Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition duration-300">Terms of Service</a></li>
                        </ul>
                    </div>
                    {/* Social Media Links */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" className="w-8 h-8" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" className="w-8 h-8" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-8 h-8" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center text-gray-400 text-sm">
                    © 2024 Disney Clone. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
