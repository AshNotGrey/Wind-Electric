import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { products, useCartStore } from "../store";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const { addItem } = useCartStore();

  const product = products.find((p) => p.id === parseInt(id));

  // Mock images for gallery
  const productImages = [
    product?.image || "/images/Main Gallery Image.jpg",
    "/images/Gallery Image 2.jpg",
    "/images/Gallery Image 3.jpg",
    "/images/Gallery Image 4.jpg",
  ];

  // Mock related products
  const relatedProducts = products.filter((p) => p.id !== parseInt(id)).slice(0, 3);

  // Mock reviews
  const reviews = [
    {
      id: 1,
      user: "John D.",
      rating: 5,
      date: "2024-01-15",
      title: "Excellent Performance",
      comment:
        "This wind turbine has exceeded my expectations. Installation was straightforward and the energy output is impressive.",
      verified: true,
    },
    {
      id: 2,
      user: "Sarah M.",
      rating: 4,
      date: "2024-01-10",
      title: "Great Value for Money",
      comment:
        "Good quality product with solid performance. Customer service was helpful during installation.",
      verified: true,
    },
    {
      id: 3,
      user: "Mike R.",
      rating: 5,
      date: "2024-01-05",
      title: "Highly Recommended",
      comment: "Perfect for our needs. The smart monitoring features are a great addition.",
      verified: true,
    },
  ];

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, Math.min(10, newQuantity)));
  };

  if (!product) {
    return (
      <div className='min-h-screen bg-gradient-bg pt-20 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-secondary-900 dark:text-white mb-4'>
            Product not found
          </h1>
          <Link to='/products' className='btn-primary'>
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-bg pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Breadcrumb */}
        <nav className='flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400 mb-8'>
          <Link to='/' className='hover:text-primary-600 dark:hover:text-primary-400'>
            Home
          </Link>
          <span>/</span>
          <Link to='/products' className='hover:text-primary-600 dark:hover:text-primary-400'>
            Products
          </Link>
          <span>/</span>
          <span className='text-secondary-900 dark:text-white'>{product.name}</span>
        </nav>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
          {/* Product Images */}
          <div>
            <div className='relative mb-4'>
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className='w-full h-96 object-cover rounded-lg'
              />
              {!product.inStock && (
                <div className='absolute top-4 left-4 bg-error-500 text-white px-3 py-1 rounded text-sm font-medium'>
                  Out of Stock
                </div>
              )}
              {product.originalPrice > product.price && (
                <div className='absolute top-4 right-4 bg-success-500 text-white px-3 py-1 rounded text-sm font-medium'>
                  {Math.round(
                    ((product.originalPrice - product.price) / product.originalPrice) * 100
                  )}
                  % OFF
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className='grid grid-cols-4 gap-2'>
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index
                      ? "border-primary-600"
                      : "border-secondary-200 dark:border-secondary-700"
                  }`}>
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className='w-full h-20 object-cover'
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className='text-3xl font-bold text-secondary-900 dark:text-white mb-4'>
              {product.name}
            </h1>

            <div className='flex items-center space-x-4 mb-6'>
              <div className='flex items-center'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-warning-400 fill-current"
                        : "text-secondary-300"
                    }`}
                  />
                ))}
                <span className='ml-2 text-secondary-600 dark:text-secondary-400'>
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <button className='text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400'>
                <Share2 className='h-5 w-5' />
              </button>
              <button className='text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400'>
                <Heart className='h-5 w-5' />
              </button>
            </div>

            <div className='mb-6'>
              <div className='flex items-center space-x-4'>
                <span className='text-3xl font-bold text-primary-600 dark:text-primary-400'>
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <span className='text-xl text-secondary-500 line-through'>
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <p className='text-secondary-600 dark:text-secondary-300 mb-6'>{product.description}</p>

            {/* Key Features */}
            <div className='mb-6'>
              <h3 className='text-lg font-semibold text-secondary-900 dark:text-white mb-3'>
                Key Features
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {product.features.map((feature, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <CheckCircle className='h-4 w-4 text-success-500 flex-shrink-0' />
                    <span className='text-secondary-700 dark:text-secondary-300'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className='mb-6'>
              <div className='flex items-center space-x-4 mb-4'>
                <label className='text-sm font-medium text-secondary-700 dark:text-secondary-300'>
                  Quantity:
                </label>
                <div className='flex items-center border border-secondary-300 dark:border-secondary-600 rounded-lg'>
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className='px-3 py-2 hover:bg-secondary-100 dark:hover:bg-secondary-700'>
                    <ChevronLeft className='h-4 w-4' />
                  </button>
                  <span className='px-4 py-2 min-w-[3rem] text-center'>{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className='px-3 py-2 hover:bg-secondary-100 dark:hover:bg-secondary-700'>
                    <ChevronRight className='h-4 w-4' />
                  </button>
                </div>
              </div>

              <div className='flex space-x-4'>
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className='flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed'>
                  <ShoppingCart className='h-5 w-5 mr-2' />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className='border-t border-secondary-200 dark:border-secondary-700 pt-6'>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <div className='flex items-center space-x-2'>
                  <Truck className='h-5 w-5 text-primary-600 dark:text-primary-400' />
                  <span className='text-sm text-secondary-600 dark:text-secondary-400'>
                    Free Shipping
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Shield className='h-5 w-5 text-primary-600 dark:text-primary-400' />
                  <span className='text-sm text-secondary-600 dark:text-secondary-400'>
                    5-Year Warranty
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <RotateCcw className='h-5 w-5 text-primary-600 dark:text-primary-400' />
                  <span className='text-sm text-secondary-600 dark:text-secondary-400'>
                    30-Day Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className='mb-12'>
          <div className='border-b border-secondary-200 dark:border-secondary-700'>
            <nav className='flex space-x-8'>
              {[
                { id: "description", label: "Description" },
                { id: "specifications", label: "Specifications" },
                { id: "reviews", label: "Reviews" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-primary-600 text-primary-600 dark:text-primary-400"
                      : "border-transparent text-secondary-500 hover:text-secondary-700 dark:hover:text-secondary-300"
                  }`}>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className='py-8'>
            {activeTab === "description" && (
              <div className='prose prose-lg max-w-none dark:prose-invert'>
                <p className='text-secondary-600 dark:text-secondary-300'>{product.description}</p>
                <p className='text-secondary-600 dark:text-secondary-300'>
                  Our {product.name} represents the latest advancement in wind turbine technology,
                  designed to provide reliable, clean energy for your home or business. With
                  advanced blade design and smart monitoring capabilities, this turbine delivers
                  exceptional performance while maintaining quiet operation.
                </p>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className='flex justify-between py-3 border-b border-secondary-200 dark:border-secondary-700'>
                    <span className='font-medium text-secondary-700 dark:text-secondary-300 capitalize'>
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className='text-secondary-900 dark:text-white'>{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className='mb-6'>
                  <h3 className='text-lg font-semibold text-secondary-900 dark:text-white mb-2'>
                    Customer Reviews
                  </h3>
                  <div className='flex items-center space-x-4'>
                    <div className='flex items-center'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "text-warning-400 fill-current"
                              : "text-secondary-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className='text-secondary-600 dark:text-secondary-400'>
                      {product.rating} out of 5 stars
                    </span>
                  </div>
                </div>

                <div className='space-y-6'>
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className='border-b border-secondary-200 dark:border-secondary-700 pb-6'>
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center space-x-2'>
                          <span className='font-medium text-secondary-900 dark:text-white'>
                            {review.user}
                          </span>
                          {review.verified && (
                            <span className='text-success-500 text-sm'>✓ Verified Purchase</span>
                          )}
                        </div>
                        <div className='flex items-center'>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "text-warning-400 fill-current"
                                  : "text-secondary-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <h4 className='font-medium text-secondary-900 dark:text-white mb-2'>
                        {review.title}
                      </h4>
                      <p className='text-secondary-600 dark:text-secondary-300 mb-2'>
                        {review.comment}
                      </p>
                      <span className='text-sm text-secondary-500'>
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className='text-2xl font-bold text-secondary-900 dark:text-white mb-8'>
            Related Products
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className='card p-4 group hover:scale-105 transition-transform duration-300'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-32 object-cover rounded-lg mb-4'
                />
                <h3 className='font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors'>
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-bold text-primary-600 dark:text-primary-400'>
                    ${product.price.toLocaleString()}
                  </span>
                  <Link to={`/product/${product.id}`} className='btn-outline text-sm'>
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

export default ProductDetail;
