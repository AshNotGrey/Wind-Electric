import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wind, Zap, Shield, TrendingUp, Star, ArrowRight, Play, CheckCircle } from "lucide-react";
import { products } from "../store";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animations for hero section
    gsap.fromTo(
      [".hero-title", ".hero-subtitle", ".hero-cta", ".hero-image"],
      { opacity: 0 },
      { opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
    );

    // Benefits section animations (removed for functionality)
    // gsap.fromTo(
    //   ".benefit-card",
    //   { opacity: 0 },
    //   { opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    // );

    // Features section animations
    gsap.from(".feature-item", {
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Testimonials animations (removed for functionality)
    // gsap.from(".testimonial-card", {
    //   y: 40,
    //   opacity: 0,
    //   duration: 0.8,
    //   stagger: 0.2,
    //   ease: "power3.out",
    //   scrollTrigger: {
    //     trigger: testimonialsRef.current,
    //     start: "top 80%",
    //     end: "bottom 20%",
    //     toggleActions: "play none none none",
    //   },
    // });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const benefits = [
    {
      icon: Zap,
      title: "Clean Energy",
      description:
        "Generate 100% renewable electricity from wind power, reducing your carbon footprint.",
    },
    {
      icon: Shield,
      title: "Reliable Power",
      description:
        "Advanced technology ensures consistent energy production even in varying wind conditions.",
    },
    {
      icon: TrendingUp,
      title: "Cost Savings",
      description:
        "Reduce your electricity bills by up to 90% with our efficient wind turbine systems.",
    },
  ];

  const features = [
    "Smart monitoring and control systems",
    "Weather-resistant construction",
    "Low noise operation",
    "Easy installation and maintenance",
    "Grid integration capabilities",
    "Mobile app for remote monitoring",
    "Extended warranty coverage",
    "Professional installation support",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
      text: "Installing Wind Electric's turbine was the best decision we made. Our energy bills dropped by 85% in the first year!",
      image: "/images/Sarah Johnson.jpg",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      rating: 5,
      text: "The commercial wind generator has been running flawlessly for 2 years. Excellent ROI and customer support.",
      image: "/images/Michael Chen.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Environmentalist",
      rating: 5,
      text: "Finally, a renewable energy solution that actually works! The quality and efficiency are outstanding.",
      image: "/images/Emily Rodriguez.jpg",
    },
  ];

  const featuredProducts = products.slice(0, 3);

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 hero-gradient opacity-90 z-10'></div>
        <div className='absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20 z-10'></div>

        <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='text-left'>
              <h1 className='hero-title text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                Power Your Future with
                <span className='text-accent-300'> Wind Energy</span>
              </h1>
              <p className='hero-subtitle text-xl text-primary-100 mb-8 max-w-lg'>
                Revolutionary wind turbine technology that generates clean, reliable electricity for
                your home or business. Join the renewable energy revolution today.
              </p>
              <div className='hero-cta flex flex-col sm:flex-row gap-4'>
                <Link to='/products' className='btn-primary text-lg px-8 py-4'>
                  Explore Products
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
                <button className='btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600'>
                  <Play className='mr-2 h-5 w-5' />
                  Watch Demo
                </button>
              </div>
            </div>

            <div className='hero-image z-20'>
              <img
                src='/images/Main Wind Turbine.jpg'
                alt='Wind turbine generating clean energy'
                className='w-full h-auto rounded-2xl shadow-strong opacity-100'
                style={{ opacity: 1, transform: "scale(1)" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle z-30'>
          <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className='py-20 bg-gradient-bg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
              Why Choose Wind Electric?
            </h2>
            <p className='text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto'>
              Our cutting-edge wind turbine technology delivers unmatched performance, reliability,
              and environmental benefits.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className='benefit-card card p-8 text-center group hover:scale-105 transition-transform duration-300'>
                <div className='w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors'>
                  <benefit.icon className='h-8 w-8 text-primary-600 dark:text-primary-400' />
                </div>
                <h3 className='text-xl font-semibold text-secondary-900 dark:text-white mb-4'>
                  {benefit.title}
                </h3>
                <p className='text-secondary-600 dark:text-secondary-300'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className='py-20 bg-white dark:bg-secondary-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-secondary-900 dark:text-white mb-6'>
                Advanced Technology for Maximum Efficiency
              </h2>
              <p className='text-xl text-secondary-600 dark:text-secondary-300 mb-8'>
                Our wind turbines feature the latest innovations in renewable energy technology,
                ensuring optimal performance and reliability.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {features.map((feature, index) => (
                  <div key={index} className='feature-item flex items-center space-x-3'>
                    <CheckCircle className='h-5 w-5 text-success-500 flex-shrink-0' />
                    <span className='text-secondary-700 dark:text-secondary-300'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative'>
              <img
                src='/images/Technology Showcase.jpg'
                alt='Wind turbine technology features'
                className='w-full h-auto rounded-2xl shadow-soft'
              />
              <div className='absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-medium'>
                <div className='text-3xl font-bold'>99.9%</div>
                <div className='text-sm opacity-90'>Uptime Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className='py-20 bg-gradient-bg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
              Featured Products
            </h2>
            <p className='text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto'>
              Discover our most popular wind turbine models designed for various applications.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className='card p-6 group hover:scale-105 transition-transform duration-300'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-48 object-cover rounded-lg mb-4'
                />
                <h3 className='text-xl font-semibold text-secondary-900 dark:text-white mb-2'>
                  {product.name}
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
                  <span className='text-2xl font-bold text-primary-600 dark:text-primary-400'>
                    ${product.price.toLocaleString()}
                  </span>
                </div>
                <Link to={`/product/${product.id}`} className='btn-primary w-full'>
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link to='/products' className='btn-outline text-lg px-8 py-4'>
              View All Products
              <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className='py-20 bg-white dark:bg-secondary-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
              What Our Customers Say
            </h2>
            <p className='text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto'>
              Join thousands of satisfied customers who have transformed their energy consumption
              with our wind turbine solutions.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='testimonial-card card p-6'>
                <div className='flex items-center mb-4'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full mr-4 object-cover'
                  />
                  <div>
                    <h4 className='font-semibold text-secondary-900 dark:text-white'>
                      {testimonial.name}
                    </h4>
                    <p className='text-sm text-secondary-500'>{testimonial.role}</p>
                  </div>
                </div>
                <div className='flex items-center mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-warning-400 fill-current"
                          : "text-secondary-300"
                      }`}
                    />
                  ))}
                </div>
                <p className='text-secondary-600 dark:text-secondary-300 italic'>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>Ready to Go Green?</h2>
          <p className='text-xl text-primary-100 mb-8'>
            Start generating your own clean energy today. Our team is ready to help you choose the
            perfect wind turbine for your needs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/products'
              className='btn-primary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-secondary-100'>
              Get Started
              <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
            <Link
              to='/contact'
              className='btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600'>
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
