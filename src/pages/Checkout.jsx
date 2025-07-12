import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, CreditCard, Truck, CheckCircle, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useCartStore } from "../store";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCartStore();

  const [formData, setFormData] = useState({
    // Shipping
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",

    // Payment
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",

    // Options
    saveInfo: false,
    newsletter: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState("shipping");
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getTotal();
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate("/checkout/success");
    }, 2000);
  };

  const isFormValid = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
      "state",
      "zipCode",
    ];
    return requiredFields.every((field) => formData[field].trim() !== "");
  };

  if (items.length === 0) {
    return (
      <div className='min-h-screen bg-gradient-bg pt-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-secondary-900 dark:text-white mb-4'>
              Your cart is empty
            </h1>
            <p className='text-xl text-secondary-600 dark:text-secondary-300 mb-8'>
              Add some products to your cart before checking out.
            </p>
            <button onClick={() => navigate("/products")} className='btn-primary'>
              Continue Shopping
            </button>
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
          <button
            onClick={() => navigate("/cart")}
            className='inline-flex items-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 mb-4'>
            <ArrowLeft className='h-4 w-4 mr-2' />
            Back to Cart
          </button>
          <h1 className='text-3xl font-bold text-secondary-900 dark:text-white'>Checkout</h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Form */}
          <div className='lg:col-span-2'>
            <form onSubmit={handleSubmit} className='space-y-8'>
              {/* Shipping Information */}
              <div className='card p-6'>
                <div className='flex items-center space-x-2 mb-6'>
                  <Truck className='h-5 w-5 text-primary-600 dark:text-primary-400' />
                  <h2 className='text-xl font-semibold text-secondary-900 dark:text-white'>
                    Shipping Information
                  </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      First Name *
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className='input'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Last Name *
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className='input'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='input'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Phone Number *
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className='input'
                    />
                  </div>
                  <div className='md:col-span-2'>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Street Address *
                    </label>
                    <input
                      type='text'
                      name='address'
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className='input'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      City *
                    </label>
                    <input
                      type='text'
                      name='city'
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className='input'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      State/Province *
                    </label>
                    <input
                      type='text'
                      name='state'
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className='input'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      ZIP/Postal Code *
                    </label>
                    <input
                      type='text'
                      name='zipCode'
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className='input'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Country
                    </label>
                    <select
                      name='country'
                      value={formData.country}
                      onChange={handleInputChange}
                      className='input'>
                      <option value='United States'>United States</option>
                      <option value='Canada'>Canada</option>
                      <option value='United Kingdom'>United Kingdom</option>
                      <option value='Australia'>Australia</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className='card p-6'>
                <div className='flex items-center space-x-2 mb-6'>
                  <CreditCard className='h-5 w-5 text-primary-600 dark:text-primary-400' />
                  <h2 className='text-xl font-semibold text-secondary-900 dark:text-white'>
                    Payment Information
                  </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='md:col-span-2'>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Card Number *
                    </label>
                    <div className='relative'>
                      <input
                        type='text'
                        name='cardNumber'
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder='1234 5678 9012 3456'
                        maxLength='19'
                        required
                        className='input pr-10'
                      />
                      <CreditCard className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400' />
                    </div>
                  </div>
                  <div className='md:col-span-2'>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Name on Card *
                    </label>
                    <input
                      type='text'
                      name='cardName'
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className='input'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Expiry Month *
                    </label>
                    <select
                      name='expiryMonth'
                      value={formData.expiryMonth}
                      onChange={handleInputChange}
                      required
                      className='input'>
                      <option value=''>Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                          {String(i + 1).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Expiry Year *
                    </label>
                    <select
                      name='expiryYear'
                      value={formData.expiryYear}
                      onChange={handleInputChange}
                      required
                      className='input'>
                      <option value=''>Year</option>
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() + i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      CVV *
                    </label>
                    <div className='relative'>
                      <input
                        type={showPassword ? "text" : "password"}
                        name='cvv'
                        value={formData.cvv}
                        onChange={handleInputChange}
                        maxLength='4'
                        required
                        className='input pr-10'
                      />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                        {showPassword ? (
                          <EyeOff className='h-4 w-4 text-secondary-400' />
                        ) : (
                          <Eye className='h-4 w-4 text-secondary-400' />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Options */}
              <div className='card p-6'>
                <h2 className='text-xl font-semibold text-secondary-900 dark:text-white mb-6'>
                  Additional Options
                </h2>

                <div className='space-y-4'>
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      name='saveInfo'
                      checked={formData.saveInfo}
                      onChange={handleInputChange}
                      className='rounded border-secondary-300 text-primary-600 focus:ring-primary-500'
                    />
                    <span className='ml-3 text-secondary-700 dark:text-secondary-300'>
                      Save payment information for future purchases
                    </span>
                  </label>

                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      name='newsletter'
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className='rounded border-secondary-300 text-primary-600 focus:ring-primary-500'
                    />
                    <span className='ml-3 text-secondary-700 dark:text-secondary-300'>
                      Subscribe to our newsletter for updates and special offers
                    </span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <div className='card p-6 sticky top-24'>
              <h2 className='text-xl font-bold text-secondary-900 dark:text-white mb-6'>
                Order Summary
              </h2>

              {/* Items */}
              <div className='space-y-4 mb-6'>
                {items.map((item) => (
                  <div key={item.id} className='flex items-center space-x-3'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-12 h-12 object-cover rounded'
                    />
                    <div className='flex-1'>
                      <h4 className='font-medium text-secondary-900 dark:text-white text-sm'>
                        {item.name}
                      </h4>
                      <p className='text-secondary-600 dark:text-secondary-400 text-sm'>
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className='font-medium text-secondary-900 dark:text-white'>
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className='space-y-3 border-t border-secondary-200 dark:border-secondary-700 pt-4'>
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
                <div className='border-t border-secondary-200 dark:border-secondary-700 pt-3'>
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

              {/* Security Notice */}
              <div className='mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg'>
                <div className='flex items-center space-x-2 mb-2'>
                  <Lock className='h-4 w-4 text-primary-600 dark:text-primary-400' />
                  <span className='text-sm font-medium text-primary-700 dark:text-primary-300'>
                    Secure Checkout
                  </span>
                </div>
                <p className='text-xs text-primary-600 dark:text-primary-400'>
                  Your payment information is encrypted and secure. We never store your credit card
                  details.
                </p>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handleSubmit}
                disabled={!isFormValid() || isProcessing}
                className='w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed'>
                {isProcessing ? (
                  <div className='flex items-center justify-center'>
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                    Processing...
                  </div>
                ) : (
                  `Place Order • $${total.toFixed(2)}`
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
