"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MoveRight, Phone, CheckCircle2, Truck, Train, Plane,
  Package, ShieldCheck, Users, MapPin,
  Quote, Star, Award, Heart, Globe, Clock, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";

// Professional Counter Component
const CounterValue = ({ to }: { to: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate: (latest) => setCount(Math.floor(latest)),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const sliderImages = [
    "/b8.jpeg",
    "/b9.jpeg",
    "/b7.jpeg"
  ];

  const testimonials = [
    {
      name: "M/s, Khadim India Ltd.",
      role: "Logistics Manager",
      text: "Deb Air Express has been our primary logistics partner for years. Their professionalism and timely delivery across India have significantly improved our supply chain efficiency.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
      name: "Pankaj Sharma",
      role: "Business Owner",
      text: "Starting out, I needed a reliable partner. Their express delivery service is unmatched in reliability and speed. I highly recommend them to any growing business.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
      name: "Anjali Gupta",
      role: "E-commerce Entrepreneur",
      text: "As an online seller, speed is everything. Their real-time tracking gives me and my customers peace of mind throughout the delivery process.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
    }
  ];

  const services = [
    { icon: Truck, title: "Road Express Logistics", desc: "Reliable surface transportation covering the entire Indian subcontinent with a dedicated fleet and real-time transit visibility.", color: "bg-blue-600", img: "/b7.jpeg", badge: "Most Reliable" },
    { icon: Plane, title: "Air Freight & Next-Day", desc: "Speed is our core promise. We offer overnight deliveries to all major Indian metros through our premium air cargo network.", color: "bg-[#3EA9D8]", img: "/air.jpg", badge: "Critical Priority" },
    { icon: Train, title: "Rail & Multi-Modal Cargo", desc: "Cost-optimized large scale cargo solutions leveraging India's vast railway infrastructure for your industrial bulk shipments.", color: "bg-purple-600", img: "/train.jpg", badge: "Bulk Solution" },
    { icon: Package, title: "Specialized Hand Delivery", desc: "Exclusive sensitive document and parcel handling for high-value items requiring unparalleled personal care and security.", color: "bg-orange-600", img: "/b5.jpeg", badge: "High Security" }
  ];

  // Auto-slide Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  // Automatic Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Smooth 6 second rotation
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-white overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative w-full pt-16 pb-8 lg:pt-24 lg:pb-12 overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[550px] flex items-center bg-black">

        {/* Background Image Slider */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={sliderImages[currentSlide]}
              alt={`Deb Air Express Banner`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Premium Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#06041A] via-[#06041A]/50 to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-black/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row items-center w-full">
          <motion.div
            className="flex-1 text-left max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center bg-[#3EA9D8]/20 backdrop-blur-md border border-[#3EA9D8]/30 px-3 py-1 rounded-full text-[#3EA9D8] text-xs font-bold mb-6 tracking-wider uppercase">
              <Package size={14} className="mr-2" />
              India's Premier Logistics Node
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Revolutionizing <br />
              <span className="text-[#3EA9D8]">Indian Logistics</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-lg font-medium opacity-90">
              Empowering your growth with 27 years of technological precision and nationwide reach. Your mission-critical shipments, our priority.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-white/90 text-sm md:text-base font-semibold">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-[#3EA9D8] mr-3" />
                Same-Day Express
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-[#3EA9D8] mr-3" />
                24/7 Priority Support
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/track" className="w-full sm:w-auto">
                <button className="w-full bg-[#3EA9D8] hover:bg-[#288eb9] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center">
                  Track Consignment
                  <MoveRight className="ml-2" />
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                  Request Quote
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] w-full z-10 border-4 border-gray-50">
                <Image src="/b1.jpeg" alt="Logistics Support" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#3EA9D8] p-6 rounded-2xl shadow-2xl z-20 hidden md:block">
                <div className="flex items-center gap-3 text-white">
                  <Globe size={32} />
                  <div>
                    <div className="font-bold text-xl uppercase tracking-tighter">Pan India</div>
                    <div className="text-[10px] uppercase font-black tracking-widest opacity-80">Network Coverage</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-xs mb-4 block">Proven Performance</span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1D1860] mb-6 leading-tight">
                27 Years of Relentless <br /> Logistics Perfection
              </h3>
              <p className="text-gray-600 text-sm md:text-[15px] mb-6 leading-relaxed">
                Founded in 1995, Deb Air Express has evolved from a local courier and cargo handler into a nationwide logistics powerhouse. We provide end-to-end solutions that bridge the gap between businesses and their goals across every pincode in India.
              </p>
              <div className="space-y-4 mb-8">
                {["Proprietary Tracking Infrastructure", "Dedicated Multi-Modal Fleet", "Industrial Scale Scalability"].map((feat) => (
                  <div key={feat} className="flex items-center font-bold text-gray-700 text-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 text-[#3EA9D8]">
                      <CheckCircle2 size={14} />
                    </div>
                    {feat}
                  </div>
                ))}
              </div>
              <Link href="/about">
                <button className="px-8 py-3.5 bg-[#1D1860] text-white rounded-xl font-bold hover:bg-[#2e268a] transition-all flex items-center shadow-lg">
                  Core Values <MoveRight className="ml-3 w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2.5 Why Choose Us Section */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-3 block">Our Edge</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">Why Choose Us?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise-grade security and advanced tracking for every shipment across our network." },
              { icon: Clock, title: "Speed Delivery", desc: "Our premium air freight network ensures next-day delivery in all major Indian metros." },
              { icon: MapPin, title: "Wide Coverage", desc: "Serving every pincode in India through our proprietary multi-modal transport hubs." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-[#3EA9D8]/30 hover:shadow-[0_20px_50px_rgba(29,24,96,0.08)] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#3EA9D8] mb-6 shadow-sm group-hover:bg-[#3EA9D8] group-hover:text-white transition-all transform group-hover:rotate-6">
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-[#1D1860] mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Services - ZIG ZAG FORM */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-3 block underline underline-offset-8 decoration-2">Premium Expertise</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">Our Strategic Solutions</h3>
          </div>

          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-24`}
              >
                {/* Image Part */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 w-full"
                >
                  <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl group border-8 border-white">
                    <Image src={service.img} alt={service.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D1860]/60 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className={`px-4 py-2 rounded-full text-white text-[10px] font-black tracking-widest uppercase shadow-lg ${service.color}`}>
                        {service.badge}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Text Part */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 text-left"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${service.color} text-white shadow-xl mb-6`}>
                    <service.icon size={24} />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-[#1D1860] mb-4 leading-tight">{service.title}</h4>
                  <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link href="/services" className="inline-flex items-center text-[#3EA9D8] font-black text-sm tracking-widest group">
                    EXPLORE SERVICE <MoveRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="py-12 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-3 block">Endorsements</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">What Clients Say</h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full ring-4 ring-[#3EA9D8]/20 p-1">
                        <Image
                          src={testimonials[activeTestimonial].image}
                          alt={testimonials[activeTestimonial].name}
                          width={112} height={112}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#3EA9D8] rounded-full flex items-center justify-center text-white border-2 border-white shadow-lg">
                        <Quote size={14} fill="currentColor" />
                      </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] text-center border border-gray-50 relative shadow-sm">
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FFC107" className="text-[#FFC107]" />)}
                      </div>
                      <p className="text-base md:text-lg text-gray-700 font-medium italic mb-8 leading-relaxed max-w-2xl mx-auto">
                        "{testimonials[activeTestimonial].text}"
                      </p>
                      <h4 className="text-xl font-black text-[#1D1860] mb-1">{testimonials[activeTestimonial].name}</h4>
                      <span className="text-[#3EA9D8] font-bold uppercase tracking-widest text-[10px]">{testimonials[activeTestimonial].role}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-2 mt-10">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeTestimonial === i ? "bg-[#3EA9D8] w-8" : "bg-gray-200 w-3 hover:bg-gray-300"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-3 block">Information</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is your typical delivery time?", a: "For major Indian metros, we offer next-day air freight via our premium cargo network. Standard surface cargo typically takes 3-5 business days." },
              { q: "How can I track my shipment?", a: "Enter your Waybill or Reference number in our 'Track Consignment' tool at the top of this page for real-time location updates." },
              { q: "Do you handle high-value or sensitive cargo?", a: "Absolutely. Our 'Specialized Hand Delivery' is designed for high-value items, documents, and fragile cargo requiring dedicated personal care." },
              { q: "Which areas do you serve in India?", a: "We provide comprehensive Pan-India coverage, reaching every major city and remote district through our integrated transport network." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[#1D1860] pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#3EA9D8] group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100/50 pt-4 font-medium">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 4.6 Store Locator / Map Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-2 block">Visit Us</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">Find Our Presence</h3>
          </div>
          <div className="w-full h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9273938005636!2d77.25380299999999!3d28.541902000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3da3ead3a8b%3A0xe35b169b3e36c0d3!2sDeb%20Air%20Express%20Cargo%20And%20Couriers!5e0!3m2!1sen!2sin!4v1775493368659!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 5. Professional Statistics */}
      <section className="py-12 bg-[#06041A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-x-0 lg:divide-x divide-white/10">
            {[
              { icon: Award, to: 27, label: "Years Experience" },
              { icon: Users, to: 135, label: "Team Members" },
              { icon: Heart, to: 957, label: "Happy Clients" },
              { icon: Truck, to: 1839, label: "Cargo Tracking" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-[#FF5722] mb-2 font-mono">
                  <CounterValue to={stat.to} />
                  {stat.to === 27 && "+"}
                </div>
                <p className="text-white font-bold text-sm md:text-base uppercase tracking-widest opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-full bg-[#3EA9D8]/5 blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-full bg-orange-500/5 blur-[120px] -z-10"></div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-12 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#1D1860] rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3EA9D8]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight">Prepare Your Business <br /> <span className="text-[#3EA9D8]">Next Logistics Jump</span></h2>
              <p className="text-gray-300 text-sm md:text-base mb-10 opacity-90 font-medium">
                Contact our consultation team today to optimize your supply chain with our award-winning logistics framework.
              </p>
              <div className="flex flex-col items-center">
                <a href="tel:+919311350228" className="bg-[#3EA9D8] hover:bg-white hover:text-[#1D1860] text-white px-8 py-4 rounded-xl font-bold text-lg md:text-xl transition-all shadow-lg flex items-center group/btn active:scale-95">
                  <Phone className="mr-3 w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  Direct Connect: +91-9311350228
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
