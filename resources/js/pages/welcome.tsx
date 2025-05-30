// resources/js/Pages/Welcome.tsx
import { type SharedData } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React from 'react';

export default function Welcome() {
  const { auth } = usePage<SharedData>().props;
  const bookingForm = useForm({ name: '', email: '', date: '', time: '' });
  const contactForm = useForm({ name: '', email: '', message: '' });

  function submitBooking(e: React.FormEvent) {
    e.preventDefault();
    bookingForm.post('/book-appointment', {
      onSuccess: () => alert('Appointment requested!'),
    });
  }

  function submitContact(e: React.FormEvent) {
    e.preventDefault();
    contactForm.post('/contact', {
      onSuccess: () => alert('Message sent!'),
    });
  }

  return (
    <>
      <Head title="MiNHAJ | Home">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      {/* Glassmorphic Navbar */}
      <header className="fixed w-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border-b border-white/30 dark:border-gray-700/30 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
          <div className="text-2xl font-bold tracking-wide text-indigo-600">MiNHAJ</div>
          <nav className="space-x-6 text-sm font-medium">
            <Link href="#home" className="hover:text-indigo-400 transition-colors">Home</Link>
            <Link href="#about" className="hover:text-indigo-400 transition-colors">About</Link>
            <Link href="#expertise" className="hover:text-indigo-400 transition-colors">Expertise</Link>
            <Link href="#services" className="hover:text-indigo-400 transition-colors">Services</Link>
            <Link href="#projects" className="hover:text-indigo-400 transition-colors">Projects</Link>
            <Link href="#blog" className="hover:text-indigo-400 transition-colors">Blog</Link>
            <Link href="#testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</Link>
            <Link href="#booking" className="hover:text-indigo-400 transition-colors">Booking</Link>
            <Link href="#contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
            {auth.user ? (
              <Link
                href={route('dashboard')}
                className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href={route('login')}
                  className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
                >
                  Login
                </Link>
                <Link
                  href={route('register')}
                  className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="pt-28 font-sans antialiased text-gray-800 dark:text-gray-200">
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co/WWm9phT0/ytktykk7.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="max-w-xl text-center px-6">
              <h1 className="text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
                Crafting Digital Experiences
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Full-Stack Developer & Solutions Architect specializing in React, Node.js,
                Laravel & Cloud-native architectures.
              </p>
              <Link
                href="#expertise"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition"
              >
                Explore My Work
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glassmorphic p-6 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700">
                <img
                  src="https://random-image-pepebigotes.vercel.app/api/random-image"
                  alt="MiNHAJ Portrait"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div>
                <p className="mb-6 leading-relaxed">
                  With over 6 years of experience, I design and implement scalable,
                  high-performance web applications and microservices. My expertise
                  spans from conceptual mockups to production deployments in cloud
                  environments.
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong>Location:</strong> Dubai, UAE
                  </li>
                  <li>
                    <strong>Email:</strong> minhaj@minhaj.pro
                  </li>
                  <li>
                    <strong>Phone:</strong> +971 50 123 4567
                  </li>
                  <li>
                    <strong>Languages:</strong> English, Arabic
                  </li>
                  <li>
                    <strong>Interests:</strong> Open–source, Cloud computing, AI/ML,
                    Travelling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">My Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Frontend Development',
                  desc:
                    'Building responsive, accessible user interfaces using React, Next.js, and TypeScript.',
                  tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Headless UI'],
                },
                {
                  title: 'Backend & API',
                  desc:
                    'Designing RESTful and GraphQL APIs, microservices, and serverless functions.',
                  tech: ['Node.js', 'Express', 'Laravel 12', 'GraphQL', 'Serverless'],
                },
                {
                  title: 'Cloud & DevOps',
                  desc:
                    'Deploying and managing cloud infrastructure with CI/CD pipelines & monitoring.',
                  tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="glassmorphic p-8 rounded-2xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700"
                >
                  <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                  <p className="mb-4">{section.desc}</p>
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {section.tech.map((t) => (
                      <li
                        key={t}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full text-sm"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Services I Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Web Application Development',
                  icon: '🌐',
                  desc:
                    'End-to-end web apps using modern JS frameworks, secure authentication, and scalable backends.',
                },
                {
                  title: 'API Design & Integration',
                  icon: '🔗',
                  desc:
                    'RESTful, GraphQL, and gRPC API implementation with comprehensive documentation.',
                },
                {
                  title: 'Cloud Architecture',
                  icon: '☁️',
                  desc:
                    'Design and deploy highly available, fault-tolerant systems on AWS and GCP.',
                },
                {
                  title: 'DevOps & CI/CD',
                  icon: '⚙️',
                  desc:
                    'Automated build, test, and deployment pipelines with monitoring and alerts.',
                },
                {
                  title: 'UI/UX Design',
                  icon: '🎨',
                  desc:
                    'User-centered design, prototyping, and usability testing for optimal experiences.',
                },
                {
                  title: 'Technical Consulting',
                  icon: '💡',
                  desc:
                    'Architecture reviews, performance tuning, and best-practice guidance.',
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="glassmorphic p-8 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700 hover:scale-105 transform transition"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Selected Projects</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: 'SaaS Dashboard',
                  img: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                  desc:
                    'A multi-tenant SaaS dashboard built with React, Tailwind, and Laravel 12. Real-time charts and role-based access.',
                  link: '#',
                },
                {
                  title: 'E-Commerce Platform',
                  img: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                  desc:
                    'Full-featured e-commerce solution with Stripe integration, inventory management, and advanced search.',
                  link: '#',
                },
                {
                  title: 'Mobile Social App',
                  img: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                  desc:
                    'Cross-platform React Native app with real-time chat, push notifications, and deep linking.',
                  link: '#',
                },
                {
                  title: 'IoT Dashboard',
                  img: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                  desc:
                    'Real-time device monitoring and control panel using WebSockets and MQTT.',
                  link: '#',
                },
              ].map((project, idx) => (
                <div key={idx} className="glassmorphic overflow-hidden rounded-2xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/20">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.desc}</p>
                    <Link
                      href={project.link}
                      className="text-indigo-600 hover:underline font-medium"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Optimizing React Performance',
                  img: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                  date: 'May 15, 2025',
                  link: '#',
                },
                {
                  title: 'Laravel 12 New Features',
                  img: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                  date: 'April 28, 2025',
                  link: '#',
                },
                {
                  title: 'Deploying with Docker & Kubernetes',
                  img: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                  date: 'March 10, 2025',
                  link: '#',
                },
              ].map((post, idx) => (
                <div key={idx} className="glassmorphic overflow-hidden rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                    <Link
                      href={post.link}
                      className="text-indigo-600 hover:underline font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">What Clients Say</h2>
            <div className="space-y-8">
              {[
                {
                  name: 'Alice Johnson',
                  role: 'CEO, TechCorp',
                  avatar: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                  feedback:
                    'MiNHAJ delivered our enterprise dashboard ahead of schedule and with exceptional code quality. Highly recommended!',
                },
                {
                  name: 'David Lee',
                  role: 'CTO, FinServe',
                  avatar: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                  feedback:
                    'His attention to detail and deep understanding of cloud architecture transformed our platform’s reliability.',
                },
                {
                  name: 'Sara Ahmed',
                  role: 'Product Manager, HealthPlus',
                  avatar: 'https://random-image-pepebigotes.vercel.app/api/random-image',
                  feedback:
                    'Professional, communicative, and extremely skilled—MiNHAJ is our go-to consultant for all things web.',
                },
              ].map((t, idx) => (
                <div
                  key={idx}
                  className="glassmorphic flex items-start gap-6 p-6 rounded-2xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/20"
                >
                  <img
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    className="w-16 h-16 rounded-full border-2 border-indigo-600"
                  />
                  <div>
                    <p className="italic mb-2">“{t.feedback}”</p>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Booking Section */}
        <section id="booking" className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Book an Appointment</h2>
            <form
              onSubmit={submitBooking}
              className="grid gap-6 p-8 glassmorphic backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/20 rounded-2xl"
            >
              <div>
                <label htmlFor="b-name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  id="b-name"
                  value={bookingForm.data.name}
                  onChange={(e) => bookingForm.setData('name', e.target.value)}
                  required
                  className="w-full border rounded px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="b-email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="b-email"
                  type="email"
                  value={bookingForm.data.email}
                  onChange={(e) => bookingForm.setData('email', e.target.value)}
                  required
                  className="w-full border rounded px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="b-date" className="block text-sm font-medium mb-1">
                    Date
                  </label>
                  <input
                    id="b-date"
                    type="date"
                    value={bookingForm.data.date}
                    onChange={(e) => bookingForm.setData('date', e.target.value)}
                    required
                    className="w-full border rounded px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="b-time" className="block text-sm font-medium mb-1">
                    Time
                  </label>
                  <input
                    id="b-time"
                    type="time"
                    value={bookingForm.data.time}
                    onChange={(e) => bookingForm.setData('time', e.target.value)}
                    required
                    className="w-full border rounded px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
            <form
              onSubmit={submitContact}
              className="grid gap-6 p-8 glassmorphic backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/20 rounded-2xl"
            >
              <div>
                <label htmlFor="c-name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  id="c-name"
                  name="name"
                  required
                  value={contactForm.data.name}
                  onChange={(e) => contactForm.setData('name', e.target.value)}
                  className="w-full border rounded px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="c-email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  value={contactForm.data.email}
                  onChange={(e) => contactForm.setData('email', e.target.value)}
                  className="w-full border rounded px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="c-message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={5}
                  required
                  value={contactForm.data.message}
                  onChange={(e) => contactForm.setData('message', e.target.value)}
                  className="w-full border rounded px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Me</h3>
              <p className="text-sm leading-relaxed">
                I’m MiNHAJ, a passionate full-stack developer and architect based in Dubai.
                I help businesses build robust, scalable, and user-friendly digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#home" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-white transition">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-sm">
                <strong>Email:</strong> minhaj@minhaj.pro<br />
                <strong>Phone:</strong> +971 50 123 4567<br />
                <strong>Location:</strong> Dubai, UAE
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://github.com/minhaj" className="hover:text-white transition">
                  GitHub
                </Link>
                <Link href="https://linkedin.com/in/minhaj" className="hover:text-white transition">
                  LinkedIn
                </Link>
                <Link href="mailto:minhaj@minhaj.pro" className="hover:text-white transition">
                  Email
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} MiNHAJ. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}

// Note: Glassmorphic utility classes can be defined in your tailwind.css:
// .glassmorphic { @apply backdrop-blur-md; }
// and ensure you have backdrop-filter enabled in tailwind.config.js.
