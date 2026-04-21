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
    <div className="flex flex-col w-full  font-sans bg-white overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative w-full pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center bg-black">

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

            <motion.p variants={fadeInUp} className="text-sm md:text-base text-gray-100 mb-8 leading-relaxed max-w-lg font-medium">
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
      <section className="py-12 bg-[#edf2f7]">
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
              <p className="text-gray-800 text-sm md:text-[15px] mb-6 leading-relaxed">
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

      {/* 2.25 Professional Statistics */}
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

      {/* 2.5 Why Choose Us Section */}
      <section className="py-16 bg-[#e8f0f7] overflow-hidden border-y border-[#3EA9D8]/10">
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
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Comprehensive Logistics & Services Overview with User-Specific Headings */}
      <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left Column: Company Overview & Key Highlights & Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-3 block">Corporate Profile</span>
              <h3 id="company-overview" className="text-2xl md:text-3xl font-black text-[#1D1860] mb-6">
                Company Overview
              </h3>
              <p className="text-gray-800 text-base leading-relaxed mb-10 font-medium">
                Deb Air Express is a professionally managed logistics and transportation company delivering fast, reliable, and customised supply chain solutions across India. As a relatively small but highly involved company, we take great pride in our customer service, personal attention, and long-standing client relationships. With our people present across most major regions, we stay connected and involved at every stage of the logistics process.
              </p>

              {/* Key Business Highlights */}
              <div className="mb-10 bg-slate-50 p-6 md:p-8 rounded-3xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3EA9D8]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <h4 className="text-xl font-black text-[#1D1860] mb-6 flex items-center gap-2">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Award size={20} className="text-[#3EA9D8]" />
                  </div>
                  Key Business Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    { label: "Company Name", value: "Deb Air Express" },
                    { label: "Industry", value: "Logistics & Transportation" },
                    { label: "Network", value: "Team presence across major regions in India" },
                    { label: "Strength", value: "Fast delivery and high client involvement" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] uppercase font-black tracking-widest text-[#3EA9D8] mb-1">{item.label}</span>
                      <span className="text-sm font-bold text-[#1D1860]">{item.value}</span>
                    </div>
                  ))}
                  <div className="sm:col-span-2 flex flex-col pt-2 border-t border-gray-100">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#3EA9D8] mb-1">Core Expertise</span>
                    <span className="text-sm font-bold text-[#1D1860]">Chemical, Liquid & Raw Material Transport (Rail & Road)</span>
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div className="space-y-4">
                <h4 className="text-xl font-black text-[#1D1860] mb-5 flex items-center gap-2">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Truck size={20} className="text-[#3EA9D8]" />
                  </div>
                  Services Offered
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Fast Delivery Services (Pan-India)",
                    "Chemical & Liquid Transportation via Railway",
                    "Specialised Logistics for Pharmaceuticals",
                    "Raw Material Transport for Factories & Manufacturers",
                    "Full Truck Load (FTL) Road Transport",
                    "Loading, Handling & Coordination Support",
                    "Customised Logistics Solutions with Regional Support"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-700 font-semibold gap-3 group">
                      <div className="mt-0.5 bg-[#3EA9D8]/10 p-1.5 rounded-full text-[#3EA9D8] transition-colors group-hover:bg-[#3EA9D8] group-hover:text-white">
                        <CheckCircle2 size={12} className="shrink-0" />
                      </div>
                      <span className="leading-snug text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Industry Expertise & Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full"
            >
              {/* Industry Expertise */}
              <div className="mb-12">
                <h3 className="text-xl font-black text-[#1D1860] mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-[#3EA9D8] text-white flex items-center justify-center mr-4 shadow-lg">
                    <Package size={20} />
                  </div>
                  Industry Expertise
                </h3>
                <p className="text-gray-700 text-sm mb-5 font-bold">We provide services across:</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Pharmaceuticals",
                    "Chemicals",
                    "Footwear & Retail",
                    "FMCG",
                    "Food & Alcohol Industry",
                    "Manufacturing & Industrial Sectors"
                  ].map((ind, i) => (
                    <span key={i} className="px-5 py-3 bg-white text-[#1D1860] rounded-2xl font-bold text-xs md:text-sm border border-gray-200 shadow-sm hover:border-[#3EA9D8] hover:text-[#3EA9D8] transition-all transform hover:-translate-y-1">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why Choose Deb Air Express */}
              <div className="bg-[#0b0826] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5 group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#3EA9D8] rounded-full blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2 transition-opacity group-hover:opacity-20"></div>

                <h3 className="text-2xl font-black mb-8 text-white tracking-wide flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <ShieldCheck className="text-[#3EA9D8]" size={24} />
                  </div>
                  Why Choose Deb Air Express
                </h3>

                <div className="space-y-4">
                  {[
                    { text: "Fast delivery is our core strength", isSub: false },
                    { text: "Expertise in chemical & liquid rail & Road transport", isSub: false },
                    { text: "Reliable rail and road network", isSub: false },
                    { text: "Team presence in nearly every key area", isSub: false },
                    { text: "Small-company advantage:", isSub: false },
                    { text: "Direct owner involvement", isSub: true },
                    { text: "Faster decision-making", isSub: true },
                    { text: "Personal attention to every shipment", isSub: true },
                    { text: "Strong customer relations", isSub: true },
                    { text: "Transparent communication and billing", isSub: true },
                    { text: "Highly flexible and customer-focused approach", isSub: true }
                  ].map((point, pIdx) => (
                    <div key={pIdx} className={`flex items-start text-sm md:text-[15px] ${point.isSub ? 'ml-8 text-gray-200 pl-5 border-l-2 border-[#3EA9D8]/20 py-1' : 'font-black text-white py-0.5'}`}>
                      {!point.isSub && (
                        <div className="w-2 h-2 rounded-full bg-[#3EA9D8] mr-4 mt-2 shrink-0 shadow-[0_0_10px_rgba(62,169,216,0.6)]"></div>
                      )}
                      <span className="leading-relaxed">{point.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0b0826] bg-slate-800 flex items-center justify-center">
                        <Users size={16} className="text-[#3EA9D8]" />
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-[#3EA9D8] font-black text-xl leading-none">957+</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-white/50">Trusted Partners</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Core Services - ZIG ZAG FORM */}
      <div className="w-full">
        {/* Services Title Section */}
        <section className="pt-16 pb-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-3 block underline underline-offset-8 decoration-2">Premium Expertise</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">Our Strategic Solutions</h3>
          </div>
        </section>

        {/* Individual Services Sections with Alternating Backgrounds */}
        {services.map((service, i) => {
          // Define a beautiful array of professional backgrounds for each row
          const bgColors = [
            "bg-white",
            "bg-[#ddeefb]",
            "bg-white",
            "bg-[#ddeefb]"
          ];
          const bg = bgColors[i % 4];

          return (
            <section key={i} className={`py-16 lg:py-24 overflow-hidden border-b border-gray-100/50 ${bg}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-24`}>
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
                    <p className="text-gray-800 text-sm md:text-base font-semibold leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link href="/services" className="inline-flex items-center text-[#3EA9D8] font-black text-sm tracking-widest group">
                      EXPLORE SERVICE <MoveRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 4. Testimonials */}
      <section className="py-16 bg-[#edf2f7] border-y border-gray-200 relative">
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
      <section className="py-16 bg-[#e6eef8] border-t border-[#3EA9D8]/10">
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
                <div className="px-6 pb-6 text-gray-700 text-sm leading-relaxed border-t border-gray-100/50 pt-4 font-bold">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 4.55 Leadership / Operations Director Section */}
      <section className="py-12 md:py-16 bg-[#f8fafc] relative">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Heading with Red Line Accents - Reduced margin */}
          <div className="flex items-center justify-center mb-10 md:mb-14 relative">
             <div className="h-[2px] bg-[#e3000f]/80 w-[20%] lg:w-[30%] hidden md:block absolute left-0 rounded-r-full"></div>
             <h2 className="text-3xl md:text-4xl font-black text-[#1D1860] px-6 text-center tracking-tight">
               Words That <span className="text-[#e3000f]">Guide Us</span>
             </h2>
             <div className="h-[2px] bg-[#e3000f]/80 w-[20%] lg:w-[30%] hidden md:block absolute right-0 rounded-l-full"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            
            {/* Overlapping Image Container - Tighter overlap */}
            <div className="md:absolute md:bottom-0 md:left-8 w-full md:w-[38%] px-6 md:px-0 relative z-20 flex justify-center md:block">
              <div className="w-full max-w-[320px] h-[360px] sm:h-[400px] md:h-[420px] lg:h-[460px] relative rounded-t-xl md:rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden border-b-0 md:border-b-[3px] border-[#e3000f] transform md:-translate-y-6 bg-gray-100 z-30 mb-[-1.5rem] md:mb-0">
                 <Image 
                   src="/founder.jpeg"
                   alt="Lalan Kumar Singh"
                   fill
                   priority
                   sizes="(max-width: 768px) 100vw, 400px"
                   className="object-cover object-[center_28%]"
                 />
              </div>
            </div>

            {/* Deep Blue Box - Compact Padding */}
            <div className="bg-[#122b46] w-full shadow-2xl rounded-[1rem] flex flex-col md:flex-row relative z-10 min-h-[300px]">
              
              {/* Left Spacer for image overlap (Desktop) */}
              <div className="hidden md:block w-[40%] shrink-0"></div>

              {/* Text Area - Reduced Gaps */}
              <div className="w-full md:w-[60%] p-8 pt-12 md:p-10 lg:p-12 flex flex-col justify-center">
                
                <div className="relative pl-4 md:pl-2">
                  <span className="text-4xl lg:text-5xl text-white font-serif font-black opacity-80 absolute top-[-10px] left-[-15px]">“</span>
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[1.6] mb-6 italic text-white tracking-wide">
                    When you build something meaningful, it's people and their stories that move us forward. Ensuring seamless surface and air cargo movements across the nationwide multi-modal network.
                  </p>
                  <span className="text-4xl lg:text-5xl text-white font-serif font-black opacity-80 absolute bottom-[-20px] right-[10px]">”</span>
                </div>
                
                <div className="mt-6 md:mt-8 pl-4 md:pl-2">
                  <h3 className="text-xl md:text-2xl font-black text-[#e3000f] mb-1 tracking-tight">
                    Lalan Kumar Singh
                  </h3>
                  <div className="text-white text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase mb-6 pb-3 md:pb-4 inline-block w-[90%] md:w-[85%] border-b border-white/20">
                    Founder
                  </div>
                  
                  <div>
                    <button className="bg-[#e3000f] text-white px-8 py-3 font-bold text-[11px] md:text-[12px] tracking-widest uppercase transition-all shadow-md hover:bg-[#cc000d] hover:-translate-y-0.5 hover:shadow-lg inline-block w-auto">
                      STORIES THAT MOVE US
                    </button>
                  </div>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4.56 Our Esteemed Clients - Logo Auto Slider */}
      <section className="py-8 md:py-12 bg-[#06041A] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#3EA9D8]/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#1D1860]/50 blur-[100px] rounded-full pointer-events-none" />

        {/* Heading */}
        <div className="text-center mb-6 md:mb-8 relative z-10">
          <span className="text-[#3EA9D8] font-black tracking-[0.3em] uppercase text-[10px] mb-2 block">
            Our Esteemed Clients
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
            Trusted by <span className="text-[#3EA9D8]">Industry Leaders</span>
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#3EA9D8] to-transparent mx-auto mt-3 rounded-full" />
        </div>

        {/* Slider Track */}
        <div className="relative overflow-hidden group">
          {/* Left / Right Fade Masks */}
          <div className="absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-[#06041A] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-[#06041A] to-transparent z-20 pointer-events-none" />

          {/* Scrolling Row — duplicated for seamless loop */}
          <div className="flex gap-8 md:gap-14 animate-logo-scroll group-hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[
              { img: "/Beam_Global_Spirits_Wine_Pvt_Ltd.png",  name: "Beam Global Spirits & Wine Pvt. Ltd." },
              { img: "/khadim.svg",                             name: "Khadim India Ltd." },
              { img: "/Covestro_India_Pvt_Ltd.png",            name: "Covestro India Pvt. Ltd." },
              { img: "/Jubilant_Ingrevia_Ltd.webp",            name: "Jubilant Ingrevia Ltd." },
              { img: "/Vineeth_Precious_Catalysts _Pvt_Ltd.jpg", name: "Vineeth Precious Catalysts Pvt. Ltd." },
              { img: "/Brown_For_Man_Pvt_Ltd..png",            name: "Brown For Man Pvt. Ltd." },
              // Duplicate set for seamless loop
              { img: "/Beam_Global_Spirits_Wine_Pvt_Ltd.png",  name: "Beam Global Spirits & Wine Pvt. Ltd." },
              { img: "/khadim.svg",                             name: "Khadim India Ltd." },
              { img: "/Covestro_India_Pvt_Ltd.png",            name: "Covestro India Pvt. Ltd." },
              { img: "/Jubilant_Ingrevia_Ltd.webp",            name: "Jubilant Ingrevia Ltd." },
              { img: "/Vineeth_Precious_Catalysts _Pvt_Ltd.jpg", name: "Vineeth Precious Catalysts Pvt. Ltd." },
              { img: "/Brown_For_Man_Pvt_Ltd..png",            name: "Brown For Man Pvt. Ltd." },
            ].map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 min-w-[180px] md:min-w-[210px] group/card"
              >
                {/* Logo Card */}
                <div className="w-[180px] h-[100px] md:w-[210px] md:h-[120px] bg-white border border-gray-100 rounded-2xl flex items-center justify-center px-5 py-4 shadow-md transition-all duration-300 group-hover/card:border-[#3EA9D8]/40 group-hover/card:-translate-y-1 group-hover/card:shadow-[0_8px_30px_rgba(62,169,216,0.18)]">
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="object-contain max-h-[65px] max-w-[140px] transition-all duration-300 group-hover/card:scale-105"
                  />
                </div>
                {/* Company Name */}
                <p className="text-center text-white font-bold text-[10px] md:text-[11px] tracking-wide leading-snug max-w-[170px] group-hover/card:text-[#3EA9D8] transition-colors duration-300">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-white/30 text-[10px] font-medium tracking-widest uppercase mt-6 relative z-10">
          Delivering Excellence Across Industries
        </p>
      </section>




      {/* 6. Final CTA Section */}
      <section className="py-12 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#1D1860] rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3EA9D8]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight">Prepare Your Business <br /> <span className="text-[#3EA9D8]">Next Logistics Jump</span></h2>
              <p className="text-gray-100 text-sm md:text-base mb-10 font-bold">
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
