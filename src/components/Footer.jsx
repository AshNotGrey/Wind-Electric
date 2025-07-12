import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Wind,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", to: "/about" },
      { label: "Our Mission", to: "/about" },
      { label: "Careers", to: "/contact" },
      { label: "Press", to: "/contact" },
    ],
    products: [
      { label: "Residential", to: "/products?category=residential" },
      { label: "Commercial", to: "/products?category=commercial" },
      { label: "Portable", to: "/products?category=portable" },
      { label: "Smart Home", to: "/products" },
    ],
    support: [
      { label: "Help Center", to: "/contact" },
      { label: "Installation Guide", to: "/contact" },
      { label: "Warranty", to: "/contact" },
      { label: "Contact Support", to: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", to: "/contact" },
      { label: "Terms of Service", to: "/contact" },
      { label: "Cookie Policy", to: "/contact" },
      { label: "GDPR", to: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className='bg-secondary-900 dark:bg-secondary-950 text-white'>
      {/* Main Footer */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <Link to='/' className='flex items-center space-x-2 mb-6'>
              <div className='p-2 bg-primary-600 rounded-lg'>
                <Wind className='h-6 w-6 text-white' />
              </div>
              <span className='text-xl font-bold'>Wind Electric</span>
            </Link>
            <p className='text-secondary-300 mb-6 max-w-md'>
              Leading the renewable energy revolution with cutting-edge wind turbine technology.
              Powering homes and businesses with clean, sustainable energy solutions.
            </p>

            {/* Contact Info */}
            <div className='space-y-3'>
              <div className='flex items-center space-x-3 text-secondary-300'>
                <Phone className='h-4 w-4 text-primary-400' />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center space-x-3 text-secondary-300'>
                <Mail className='h-4 w-4 text-primary-400' />
                <span>info@windelectric.com</span>
              </div>
              <div className='flex items-center space-x-3 text-secondary-300'>
                <MapPin className='h-4 w-4 text-primary-400' />
                <span>123 Wind Street, Green City, GC 12345</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className='text-secondary-300 hover:text-primary-400 transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Products</h3>
            <ul className='space-y-2'>
              {footerLinks.products.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className='text-secondary-300 hover:text-primary-400 transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Support</h3>
            <ul className='space-y-2'>
              {footerLinks.support.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className='text-secondary-300 hover:text-primary-400 transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className='mt-12 pt-8 border-t border-secondary-700'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Newsletter */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>Stay Updated</h3>
              <p className='text-secondary-300 mb-4'>
                Subscribe to our newsletter for the latest updates on renewable energy technology.
              </p>
              <div className='flex space-x-2'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-2 bg-secondary-800 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500'
                />
                <button className='btn-primary'>Subscribe</button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
              <div className='flex space-x-4'>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className='p-3 bg-secondary-800 hover:bg-primary-600 rounded-lg transition-colors'
                    aria-label={social.label}>
                    <social.icon className='h-5 w-5' />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-secondary-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-secondary-300 text-sm'>
              © {currentYear} Wind Electric. All rights reserved.
            </div>
            <div className='flex space-x-6 text-sm'>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className='text-secondary-300 hover:text-primary-400 transition-colors'>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className='fixed bottom-6 right-6 z-40'>
        <a
          href='https://wa.me/15551234567'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center space-x-2 bg-success-600 hover:bg-success-700 text-white px-4 py-3 rounded-full shadow-strong transition-all duration-200 hover:scale-105'>
          <MessageCircle className='h-5 w-5' />
          <span className='font-medium'>Chat with us</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
