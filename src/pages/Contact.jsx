import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      action: "Call us",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@windelectric.com", "support@windelectric.com"],
      action: "Email us",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Wind Street", "Green City, GC 12345", "United States"],
      action: "Get directions",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
      action: "Schedule a call",
    },
  ];

  const faqs = [
    {
      question: "How long does installation take?",
      answer:
        "Typical installation takes 1-3 days depending on the turbine size and site complexity. Our team will provide a detailed timeline during the consultation.",
    },
    {
      question: "What maintenance is required?",
      answer:
        "Our wind turbines require minimal maintenance. We recommend annual inspections and cleaning. All maintenance is covered under our 5-year warranty.",
    },
    {
      question: "How much energy can I generate?",
      answer:
        "Energy generation depends on wind conditions, turbine size, and location. Our residential turbines typically generate 3,000-15,000 kWh annually.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we offer flexible financing options including lease-to-own and low-interest loans. We can help you find the best option for your budget.",
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-bg pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
            Get in Touch
          </h1>
          <p className='text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto'>
            Have questions about our wind turbines? Need a quote? Want to learn more about renewable
            energy? We're here to help.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <div className='card p-8'>
              <h2 className='text-2xl font-bold text-secondary-900 dark:text-white mb-6'>
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className='text-center py-12'>
                  <CheckCircle className='h-16 w-16 text-success-500 mx-auto mb-4' />
                  <h3 className='text-2xl font-bold text-secondary-900 dark:text-white mb-2'>
                    Message Sent!
                  </h3>
                  <p className='text-secondary-600 dark:text-secondary-300 mb-6'>
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className='btn-primary'>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='input'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Subject *
                    </label>
                    <select
                      name='subject'
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className='input'>
                      <option value=''>Select a subject</option>
                      <option value='general'>General Inquiry</option>
                      <option value='quote'>Request a Quote</option>
                      <option value='installation'>Installation Questions</option>
                      <option value='support'>Technical Support</option>
                      <option value='partnership'>Partnership Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                      Message *
                    </label>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className='input resize-none'
                      placeholder='Tell us about your project or questions...'
                    />
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed'>
                    {isSubmitting ? (
                      <div className='flex items-center justify-center'>
                        <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className='h-5 w-5 mr-2' />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className='space-y-6'>
            {contactInfo.map((info, index) => (
              <div key={index} className='card p-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <info.icon className='h-6 w-6 text-primary-600 dark:text-primary-400' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-semibold text-secondary-900 dark:text-white mb-2'>
                      {info.title}
                    </h3>
                    <div className='space-y-1'>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className='text-secondary-600 dark:text-secondary-300 text-sm'>
                          {detail}
                        </p>
                      ))}
                    </div>
                    <button className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium mt-2'>
                      {info.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <div className='card p-6 bg-success-50 dark:bg-success-900/20 border-success-200 dark:border-success-800'>
              <div className='flex items-center space-x-3 mb-3'>
                <MessageCircle className='h-6 w-6 text-success-600 dark:text-success-400' />
                <h3 className='font-semibold text-success-900 dark:text-success-100'>Quick Chat</h3>
              </div>
              <p className='text-success-700 dark:text-success-300 text-sm mb-4'>
                Need immediate assistance? Chat with our team on WhatsApp.
              </p>
              <a
                href='https://wa.me/15551234567'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary bg-success-600 hover:bg-success-700 text-sm w-full'>
                Start Chat
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className='mt-16'>
          <div className='card p-8'>
            <h2 className='text-2xl font-bold text-secondary-900 dark:text-white mb-6'>
              Visit Our Office
            </h2>
            <div className='aspect-video bg-secondary-200 dark:bg-secondary-700 rounded-lg flex items-center justify-center'>
              <div className='text-center'>
                <MapPin className='h-16 w-16 text-secondary-400 mx-auto mb-4' />
                <p className='text-secondary-600 dark:text-secondary-400'>
                  Interactive map will be embedded here
                </p>
                <p className='text-sm text-secondary-500 dark:text-secondary-500 mt-2'>
                  123 Wind Street, Green City, GC 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mt-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-secondary-900 dark:text-white mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-secondary-600 dark:text-secondary-300'>
              Find answers to common questions about our wind turbines and services.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {faqs.map((faq, index) => (
              <div key={index} className='card p-6'>
                <h3 className='text-lg font-semibold text-secondary-900 dark:text-white mb-3'>
                  {faq.question}
                </h3>
                <p className='text-secondary-600 dark:text-secondary-300'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <div className='card p-8 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800'>
            <h2 className='text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4'>
              Ready to Get Started?
            </h2>
            <p className='text-primary-700 dark:text-primary-300 mb-6 max-w-2xl mx-auto'>
              Take the first step towards renewable energy. Our team is ready to help you choose the
              perfect wind turbine for your needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a href='/products' className='btn-primary'>
                Explore Products
              </a>
              <a href='/about' className='btn-outline'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
