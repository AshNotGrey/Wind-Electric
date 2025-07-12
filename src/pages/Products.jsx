import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Filter,
  Grid,
  List,
  Star,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";
import { products, useFilterStore, useCartStore } from "../store";

const Products = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { filters, sortBy, setFilters, setSortBy, resetFilters } = useFilterStore();
  const { addItem } = useCartStore();

  const itemsPerPage = 6;

  // Filter and sort products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filters.category === "all" || product.category === filters.category;
    const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const matchesWattage =
      product.wattage >= filters.minWattage && product.wattage <= filters.maxWattage;
    const matchesStock = !filters.inStock || product.inStock;
    const matchesRating = product.rating >= filters.rating;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesWattage &&
      matchesStock &&
      matchesRating
    );
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      case "wattage":
        return b.wattage - a.wattage;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "portable", label: "Portable" },
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "name", label: "Name A-Z" },
    { value: "wattage", label: "Highest Wattage" },
  ];

  const handleAddToCart = (product) => {
    addItem(product, 1);
  };

  const ProductCard = ({ product }) => (
    <div className='card p-6 group hover:scale-105 transition-transform duration-300'>
      <div className='relative mb-4'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-48 object-cover rounded-lg'
        />
        {!product.inStock && (
          <div className='absolute top-2 right-2 bg-error-500 text-white px-2 py-1 rounded text-sm font-medium'>
            Out of Stock
          </div>
        )}
        {product.originalPrice > product.price && (
          <div className='absolute top-2 left-2 bg-success-500 text-white px-2 py-1 rounded text-sm font-medium'>
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            OFF
          </div>
        )}
      </div>

      <h3 className='text-xl font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors'>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>

      <p className='text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-2'>
        {product.description}
      </p>

      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center space-x-1'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? "text-warning-400 fill-current"
                  : "text-secondary-300"
              }`}
            />
          ))}
          <span className='text-sm text-secondary-500 ml-2'>({product.reviews})</span>
        </div>
        <span className='text-sm text-secondary-500'>{product.wattage}W</span>
      </div>

      <div className='flex items-center justify-between mb-4'>
        <div>
          <span className='text-2xl font-bold text-primary-600 dark:text-primary-400'>
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice > product.price && (
            <span className='text-sm text-secondary-500 line-through ml-2'>
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      <div className='flex space-x-2'>
        <Link to={`/product/${product.id}`} className='flex-1 btn-outline text-center'>
          View Details
        </Link>
        <button
          onClick={() => handleAddToCart(product)}
          disabled={!product.inStock}
          className='btn-primary disabled:opacity-50 disabled:cursor-not-allowed'>
          <ShoppingCart className='h-4 w-4' />
        </button>
      </div>
    </div>
  );

  return (
    <div className='min-h-screen bg-gradient-bg pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
            Wind Turbines
          </h1>
          <p className='text-xl text-secondary-600 dark:text-secondary-300'>
            Discover our range of high-performance wind turbines for every application.
          </p>
        </div>

        {/* Search and Controls */}
        <div className='flex flex-col lg:flex-row gap-4 mb-8'>
          <div className='flex-1 relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400' />
            <input
              type='text'
              placeholder='Search products...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500'
            />
          </div>

          <div className='flex items-center space-x-4'>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className='btn-secondary flex items-center space-x-2'>
              <Filter className='h-4 w-4' />
              <span>Filters</span>
              {showFilters ? (
                <ChevronUp className='h-4 w-4' />
              ) : (
                <ChevronDown className='h-4 w-4' />
              )}
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='input py-2'>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className='flex border border-secondary-300 dark:border-secondary-600 rounded-lg overflow-hidden'>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-primary-600 text-white"
                    : "bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400"
                }`}>
                <Grid className='h-4 w-4' />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-primary-600 text-white"
                    : "bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400"
                }`}>
                <List className='h-4 w-4' />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className='card p-6 mb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div>
                <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ category: e.target.value })}
                  className='input py-2'>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                  Price Range
                </label>
                <div className='flex space-x-2'>
                  <input
                    type='number'
                    placeholder='Min'
                    value={filters.minPrice}
                    onChange={(e) => setFilters({ minPrice: Number(e.target.value) })}
                    className='input py-2'
                  />
                  <input
                    type='number'
                    placeholder='Max'
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ maxPrice: Number(e.target.value) })}
                    className='input py-2'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                  Wattage Range
                </label>
                <div className='flex space-x-2'>
                  <input
                    type='number'
                    placeholder='Min W'
                    value={filters.minWattage}
                    onChange={(e) => setFilters({ minWattage: Number(e.target.value) })}
                    className='input py-2'
                  />
                  <input
                    type='number'
                    placeholder='Max W'
                    value={filters.maxWattage}
                    onChange={(e) => setFilters({ maxWattage: Number(e.target.value) })}
                    className='input py-2'
                  />
                </div>
              </div>

              <div className='flex items-end space-x-4'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    checked={filters.inStock}
                    onChange={(e) => setFilters({ inStock: e.target.checked })}
                    className='rounded border-secondary-300 text-primary-600 focus:ring-primary-500'
                  />
                  <span className='ml-2 text-sm text-secondary-700 dark:text-secondary-300'>
                    In Stock Only
                  </span>
                </label>

                <button onClick={resetFilters} className='btn-secondary text-sm'>
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div className='mb-8'>
          <p className='text-secondary-600 dark:text-secondary-300'>
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedProducts.length)} of{" "}
            {sortedProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className='flex justify-center mt-12'>
            <div className='flex space-x-2'>
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className='btn-secondary disabled:opacity-50 disabled:cursor-not-allowed'>
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentPage === i + 1
                      ? "bg-primary-600 text-white"
                      : "bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700"
                  }`}>
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className='btn-secondary disabled:opacity-50 disabled:cursor-not-allowed'>
                Next
              </button>
            </div>
          </div>
        )}

        {/* No Results */}
        {paginatedProducts.length === 0 && (
          <div className='text-center py-12'>
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-2xl font-semibold text-secondary-900 dark:text-white mb-2'>
              No products found
            </h3>
            <p className='text-secondary-600 dark:text-secondary-300 mb-6'>
              Try adjusting your filters or search terms.
            </p>
            <button
              onClick={() => {
                resetFilters();
                setSearchTerm("");
                setCurrentPage(1);
              }}
              className='btn-primary'>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
