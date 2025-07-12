import { Wind, Zap, Globe, Users, Award, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Wind,
      number: "10,000+",
      label: "Wind Turbines Installed",
      description: "Across residential and commercial properties",
    },
    {
      icon: Zap,
      number: "50MW+",
      label: "Clean Energy Generated",
      description: "Enough to power thousands of homes",
    },
    {
      icon: Globe,
      number: "25,000+",
      label: "Tons CO2 Saved",
      description: "Reducing environmental impact annually",
    },
    {
      icon: Users,
      number: "5,000+",
      label: "Happy Customers",
      description: "Satisfied with our renewable solutions",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Wind Electric was established with a vision to democratize renewable energy access.",
      icon: "🚀",
    },
    {
      year: "2019",
      title: "First Product Launch",
      description: "Introduced our flagship residential wind turbine with smart monitoring.",
      icon: "⚡",
    },
    {
      year: "2020",
      title: "Commercial Expansion",
      description: "Launched commercial-grade turbines for businesses and farms.",
      icon: "🏢",
    },
    {
      year: "2021",
      title: "Smart Technology",
      description: "Integrated IoT capabilities and AI-powered optimization.",
      icon: "🤖",
    },
    {
      year: "2022",
      title: "Global Recognition",
      description: "Received industry awards for innovation and sustainability.",
      icon: "🏆",
    },
    {
      year: "2023",
      title: "Market Leadership",
      description: "Became the leading provider of residential wind energy solutions.",
      icon: "👑",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      image: "/images/Dr. Sarah Chen.jpg",
      bio: "Former NASA engineer with 15+ years in renewable energy. PhD in Mechanical Engineering.",
      linkedin: "#",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      image: "/images/Michael Rodriguez.jpg",
      bio: "Expert in wind turbine design and smart grid integration. 20+ patents in renewable energy.",
      linkedin: "#",
    },
    {
      name: "Emily Johnson",
      role: "Head of Operations",
      image: "/images/Emily Johnson.jpg",
      bio: "Operations specialist with experience scaling renewable energy companies globally.",
      linkedin: "#",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      image: "/images/David Kim.jpg",
      bio: "Leading our engineering team in developing next-generation wind turbine technology.",
      linkedin: "#",
    },
  ];

  const values = [
    {
      icon: Wind,
      title: "Sustainability First",
      description:
        "Every decision we make prioritizes environmental impact and long-term sustainability.",
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description:
        "Constantly pushing the boundaries of what's possible in renewable energy technology.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Our customers' success and satisfaction are at the heart of everything we do.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Committed to making renewable energy accessible to communities worldwide.",
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 hero-gradient'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-5xl lg:text-6xl font-bold text-white mb-6'>About Wind Electric</h1>
          <p className='text-xl text-primary-100 max-w-3xl mx-auto'>
            We're revolutionizing renewable energy by making wind power accessible, affordable, and
            efficient for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-20 bg-gradient-bg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
              Our Mission
            </h2>
            <p className='text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto'>
              To accelerate the world's transition to sustainable energy by providing innovative
              wind turbine solutions that are accessible to everyone.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='mission-card card p-6 text-center group hover:scale-105 transition-transform duration-300'>
                <div className='w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors'>
                  <value.icon className='h-8 w-8 text-primary-600 dark:text-primary-400' />
                </div>
                <h3 className='text-xl font-semibold text-secondary-900 dark:text-white mb-4'>
                  {value.title}
                </h3>
                <p className='text-secondary-600 dark:text-secondary-300'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-white dark:bg-secondary-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
              Our Impact
            </h2>
            <p className='text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto'>
              Numbers that tell the story of our commitment to renewable energy and environmental
              sustainability.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='stat-item text-center'>
                <div className='w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <stat.icon className='h-10 w-10 text-primary-600 dark:text-primary-400' />
                </div>
                <div className='text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2'>
                  {stat.number}
                </div>
                <div className='text-lg font-semibold text-secondary-900 dark:text-white mb-2'>
                  {stat.label}
                </div>
                <p className='text-secondary-600 dark:text-secondary-300'>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className='py-20 bg-gradient-bg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
              Our Journey
            </h2>
            <p className='text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto'>
              From startup to industry leader, here's how we've grown and evolved over the years.
            </p>
          </div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800'></div>

            <div className='space-y-12'>
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}>
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className='card p-6'>
                      <div className='text-3xl mb-2'>{item.icon}</div>
                      <h3 className='text-xl font-semibold text-secondary-900 dark:text-white mb-2'>
                        {item.title}
                      </h3>
                      <p className='text-secondary-600 dark:text-secondary-300'>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className='absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-900 flex items-center justify-center'>
                    <div className='w-2 h-2 bg-white rounded-full'></div>
                  </div>

                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8 text-right"}`}>
                    <div className='text-2xl font-bold text-primary-600 dark:text-primary-400'>
                      {item.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20 bg-white dark:bg-secondary-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
              Meet Our Team
            </h2>
            <p className='text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto'>
              The passionate individuals driving innovation and making renewable energy accessible
              to everyone.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {team.map((member, index) => (
              <div
                key={index}
                className='team-member card p-6 text-center group hover:scale-105 transition-transform duration-300'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-24 h-24 rounded-full mx-auto mb-4 object-cover'
                />
                <h3 className='text-xl font-semibold text-secondary-900 dark:text-white mb-1'>
                  {member.name}
                </h3>
                <p className='text-primary-600 dark:text-primary-400 font-medium mb-3'>
                  {member.role}
                </p>
                <p className='text-secondary-600 dark:text-secondary-300 text-sm mb-4'>
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className='inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium'>
                  View Profile
                  <ArrowRight className='ml-1 h-4 w-4' />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className='py-20 bg-gradient-bg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-secondary-900 dark:text-white mb-4'>
              Recognition & Awards
            </h2>
            <p className='text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto'>
              Industry recognition for our innovation, sustainability, and commitment to excellence.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='card p-8 text-center'>
              <Award className='h-16 w-16 text-primary-600 dark:text-primary-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-secondary-900 dark:text-white mb-2'>
                Innovation Award 2023
              </h3>
              <p className='text-secondary-600 dark:text-secondary-300'>
                Recognized for breakthrough wind turbine technology
              </p>
            </div>

            <div className='card p-8 text-center'>
              <TrendingUp className='h-16 w-16 text-primary-600 dark:text-primary-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-secondary-900 dark:text-white mb-2'>
                Fastest Growing Company
              </h3>
              <p className='text-secondary-600 dark:text-secondary-300'>
                Top 10 fastest growing renewable energy companies
              </p>
            </div>

            <div className='card p-8 text-center'>
              <CheckCircle className='h-16 w-16 text-primary-600 dark:text-primary-400 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-secondary-900 dark:text-white mb-2'>
                Sustainability Excellence
              </h3>
              <p className='text-secondary-600 dark:text-secondary-300'>
                Awarded for environmental impact and commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 hero-gradient'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Join the Renewable Energy Revolution
          </h2>
          <p className='text-xl text-primary-100 mb-8'>
            Be part of the solution. Discover how our wind turbines can power your future while
            protecting our planet.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/products'
              className='btn-primary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-secondary-100'>
              Explore Products
              <ArrowRight className='ml-2 h-5 w-5' />
            </a>
            <a
              href='/contact'
              className='btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600'>
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
