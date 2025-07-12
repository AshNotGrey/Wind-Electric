import { Link } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShoppingBag,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { useCartStore } from "../store";

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  const subtotal = getTotal();
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className='min-h-screen bg-gradient-bg pt-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='text-center'>
            <div className='w-24 h-24 bg-secondary-200 dark:bg-secondary-700 rounded-full flex items-center justify-center mx-auto mb-6'>
              <ShoppingBag className='h-12 w-12 text-secondary-400' />
            </div>
            <h1 className='text-3xl font-bold text-secondary-900 dark:text-white mb-4'>
              Your cart is empty
            </h1>
            <p className='text-xl text-secondary-600 dark:text-secondary-300 mb-8'>
              Looks like you haven't added any wind turbines to your cart yet.
            </p>
            <Link to='/products' className='btn-primary text-lg px-8 py-4'>
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-bg pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <Link
            to='/products'
            className='inline-flex items-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 mb-4'>
            <ArrowLeft className='h-4 w-4 mr-2' />
            Continue Shopping
          </Link>
          <h1 className='text-3xl font-bold text-secondary-900 dark:text-white'>
            Shopping Cart ({items.length} items)
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Cart Items */}
          <div className='lg:col-span-2'>
            <div className='card p-6'>
              <div className='space-y-6'>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center space-x-4 p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-20 h-20 object-cover rounded-lg'
                    />

                    <div className='flex-1'>
                      <h3 className='font-semibold text-secondary-900 dark:text-white mb-1'>
                        <Link
                          to={`/product/${item.id}`}
                          className='hover:text-primary-600 dark:hover:text-primary-400'>
                          {item.name}
                        </Link>
                      </h3>
                      <p className='text-sm text-secondary-600 dark:text-secondary-300 mb-2'>
                        {item.wattage}W • {item.category}
                      </p>
                      <div className='flex items-center justify-between'>
                        <span className='text-lg font-bold text-primary-600 dark:text-primary-400'>
                          ${item.price.toLocaleString()}
                        </span>

                        <div className='flex items-center space-x-2'>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className='w-8 h-8 flex items-center justify-center border border-secondary-300 dark:border-secondary-600 rounded hover:bg-secondary-100 dark:hover:bg-secondary-700'>
                            <Minus className='h-4 w-4' />
                          </button>
                          <span className='w-12 text-center font-medium'>{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className='w-8 h-8 flex items-center justify-center border border-secondary-300 dark:border-secondary-600 rounded hover:bg-secondary-100 dark:hover:bg-secondary-700'>
                            <Plus className='h-4 w-4' />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className='text-right'>
                      <div className='font-bold text-secondary-900 dark:text-white mb-2'>
                        ${(item.price * item.quantity).toLocaleString()}
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className='text-error-600 hover:text-error-700 dark:text-error-400 dark:hover:text-error-300'>
                        <Trash2 className='h-4 w-4' />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Actions */}
              <div className='mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-700'>
                <div className='flex justify-between items-center'>
                  <button
                    onClick={clearCart}
                    className='text-secondary-600 dark:text-secondary-400 hover:text-error-600 dark:hover:text-error-400'>
                    Clear Cart
                  </button>
                  <Link to='/products' className='btn-outline'>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <div className='card p-6 sticky top-24'>
              <h2 className='text-xl font-bold text-secondary-900 dark:text-white mb-6'>
                Order Summary
              </h2>

              <div className='space-y-4 mb-6'>
                <div className='flex justify-between'>
                  <span className='text-secondary-600 dark:text-secondary-400'>Subtotal</span>
                  <span className='font-medium'>${subtotal.toLocaleString()}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-secondary-600 dark:text-secondary-400'>Shipping</span>
                  <span className='font-medium text-success-600'>Free</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-secondary-600 dark:text-secondary-400'>Tax</span>
                  <span className='font-medium'>${tax.toFixed(2)}</span>
                </div>
                <div className='border-t border-secondary-200 dark:border-secondary-700 pt-4'>
                  <div className='flex justify-between'>
                    <span className='text-lg font-bold text-secondary-900 dark:text-white'>
                      Total
                    </span>
                    <span className='text-lg font-bold text-primary-600 dark:text-primary-400'>
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link to='/checkout' className='w-full btn-primary text-center mb-4'>
                Proceed to Checkout
              </Link>

              {/* Shipping Info */}
              <div className='space-y-3 pt-6 border-t border-secondary-200 dark:border-secondary-700'>
                <div className='flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400'>
                  <Truck className='h-4 w-4 text-success-500' />
                  <span>Free shipping on orders over $500</span>
                </div>
                <div className='flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400'>
                  <Shield className='h-4 w-4 text-success-500' />
                  <span>5-year warranty included</span>
                </div>
                <div className='flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400'>
                  <RotateCcw className='h-4 w-4 text-success-500' />
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-secondary-900 dark:text-white mb-8'>
            You might also like
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {items.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className='card p-4 group hover:scale-105 transition-transform duration-300'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-32 object-cover rounded-lg mb-4'
                />
                <h3 className='font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors'>
                  <Link to={`/product/${item.id}`}>{item.name}</Link>
                </h3>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-bold text-primary-600 dark:text-primary-400'>
                    ${item.price.toLocaleString()}
                  </span>
                  <Link to={`/product/${item.id}`} className='btn-outline text-sm'>
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
