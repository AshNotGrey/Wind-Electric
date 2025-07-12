import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft, Wind } from "lucide-react";

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gradient-bg pt-20 flex items-center justify-center'>
      <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* 404 Illustration */}
        <div className='mb-8'>
          <div className='w-32 h-32 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6'>
            <Wind className='h-16 w-16 text-primary-600 dark:text-primary-400' />
          </div>
          <div className='text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4'>404</div>
        </div>

        {/* Content */}
        <h1 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
          Page Not Found
        </h1>
        <p className='text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-md mx-auto'>
          Oops! The page you're looking for seems to have blown away in the wind. Let's get you back
          on track.
        </p>

        {/* Actions */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <Link to='/' className='btn-primary'>
            <Home className='h-5 w-5 mr-2' />
            Go Home
          </Link>
          <Link to='/products' className='btn-outline'>
            <Search className='h-5 w-5 mr-2' />
            Browse Products
          </Link>
        </div>

        {/* Quick Links */}
        <div className='card p-6'>
          <h3 className='text-lg font-semibold text-secondary-900 dark:text-white mb-4'>
            Popular Pages
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <Link
              to='/products'
              className='flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors'>
              <div className='w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center'>
                <Search className='h-5 w-5 text-primary-600 dark:text-primary-400' />
              </div>
              <div className='text-left'>
                <div className='font-medium text-secondary-900 dark:text-white'>Products</div>
                <div className='text-sm text-secondary-600 dark:text-secondary-300'>
                  Browse our wind turbines
                </div>
              </div>
            </Link>

            <Link
              to='/about'
              className='flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors'>
              <div className='w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center'>
                <Wind className='h-5 w-5 text-primary-600 dark:text-primary-400' />
              </div>
              <div className='text-left'>
                <div className='font-medium text-secondary-900 dark:text-white'>About Us</div>
                <div className='text-sm text-secondary-600 dark:text-secondary-300'>
                  Learn about our mission
                </div>
              </div>
            </Link>

            <Link
              to='/contact'
              className='flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors'>
              <div className='w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center'>
                <Search className='h-5 w-5 text-primary-600 dark:text-primary-400' />
              </div>
              <div className='text-left'>
                <div className='font-medium text-secondary-900 dark:text-white'>Contact</div>
                <div className='text-sm text-secondary-600 dark:text-secondary-300'>
                  Get in touch with us
                </div>
              </div>
            </Link>

            <Link
              to='/cart'
              className='flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors'>
              <div className='w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center'>
                <Search className='h-5 w-5 text-primary-600 dark:text-primary-400' />
              </div>
              <div className='text-left'>
                <div className='font-medium text-secondary-900 dark:text-white'>Cart</div>
                <div className='text-sm text-secondary-600 dark:text-secondary-300'>
                  View your cart
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <div className='mt-8'>
          <button
            onClick={() => window.history.back()}
            className='inline-flex items-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400'>
            <ArrowLeft className='h-4 w-4 mr-2' />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
