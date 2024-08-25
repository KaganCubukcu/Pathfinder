import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <div className="rounded-lg shadow-lg bg-black text-white bottom-0 left-0 right-0">
      <footer className="py-8 px-12">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-title mb-4">Company</h3>
            <ul>
              <li>
                <a href="/about-us" className="block py-1">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="block py-1">
                  Careers
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="block py-1">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="block py-1">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-title mb-4">Support</h3>
            <ul>
              <li>
                <a href="/help-center" className="block py-1">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="block py-1">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/return-policy" className="block py-1">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="/accessibility" className="block py-1">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-title mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-[24px] h-[24px] rounded-full bg-primary flex items-center justify-center">
                <FaFacebook />
              </a>
              <a href="#" className="w-[24px] h-[24px] rounded-full bg-primary flex items-center justify-center">
                <FaXTwitter />
              </a>
              <a href="#" className="w-[24px] h-[24px] rounded-full bg-primary flex items-center justify-center">
                <FaInstagram />
              </a>
              <a href="#" className="w-[24px] h-[24px] rounded-full bg-primary flex items-center justify-center">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-title mb-4">Newsletter</h3>
            <form>
              <input
                type="email"
                className="px-4 py-2 rounded-md border border-neutral-300 w-full mb-2"
                placeholder="Your email address"
              />
              <button type="submit" className="w-full py-2 bg-white text-black rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Pathfinder. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
