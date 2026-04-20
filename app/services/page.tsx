"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck, Plane, Train, Package, MoveRight,
  CheckCircle2, ShieldCheck, Clock, Users, Phone
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const services = [
    {
      icon: Truck,
      title: "Road Express Logistics",
      desc: "Comprehensive surface transportation spanning all Indian states with a heavy-duty fleet for industrial and retail sectors.",
      image: "/b2.jpeg",
      color: "from-blue-600 to-blue-800",
      features: ["Pan-India Network", "Faded Real-time Tracking", "GPS Enabled Fleet"]
    },
    {
      icon: Plane,
      title: "Air Freight & Next-Day",
      desc: "Critical priority air cargo solutions ensuring next-morning delivery to major commercial hubs across the country.",
      image: "/air.jpg",
      color: "from-[#3EA9D8] to-[#288eb9]",
      features: ["Next-Day Assurance", "Major Metro Coverage", "Specialized Air Handling"]
    },
    {
      icon: Train,
      title: "Rail & Multi-Modal Cargo",
      desc: "Leveraging India's massive railway network for high-volume, cost-efficient industrial goods movement with safety.",
      image: "/train.jpg",
      color: "from-purple-600 to-purple-900",
      features: ["Cost-Effective Bulk", "Industrial Rail Safety", "Scheduled Departures"]
    },
    {
      icon: Package,
      title: "Specialized Hand Delivery",
      desc: "Our premium 'By-Hand' service for mission-critical documents and high-value parcels requiring extreme personal care.",
      image: "/b5.jpeg",
      color: "from-orange-600 to-orange-800",
      features: ["Personal Courier Escort", "Sensitive Document Care", "Unmatched Security"]
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-white overflow-x-hidden pt-24">

      {/* 1. Cinematic Header Banner */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#06041A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/b9.jpeg"
            alt="Services Banner"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06041A] via-[#06041A]/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-block bg-[#3EA9D8]/20 backdrop-blur-md border border-[#3EA9D8]/30 px-6 py-2 rounded-full text-[#3EA9D8] text-[10px] font-black tracking-widest uppercase mb-8"
          >
            Comprehensive Solutions
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-none"
          >
            Precision Driven <br />
            <span className="text-[#3EA9D8]">Logistics Services</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-gray-100 text-base md:text-xl font-bold max-w-2xl leading-relaxed mx-auto lg:mx-0"
          >
            Bridging distances with 27 years of expertise. From surface transport to dedicated hand-delivery, we move what matters most to your business.
          </motion.p>
        </div>

        {/* Floating Decors */}
        <div className="absolute bottom-0 right-0 w-[600px] h-full bg-[#3EA9D8]/5 blur-[120px] rounded-full -mr-32 pointer-events-none"></div>
      </section>

      {/* 2. Services Grid - Professional Hover UI */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[11px] mb-4 block underline underline-offset-8 decoration-2 decoration-[#3EA9D8]/20">Global Standards</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1D1860] leading-tight">Elite Supply Chain Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-gray-100 perspective-1000"
              >
                {/* Default View Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between transition-all duration-700 group-hover:scale-95 group-hover:opacity-0 group-hover:translate-y-10 group-hover:blur-sm">
                  <div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-8 shadow-xl`}>
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-[#1D1860] mb-4 leading-tight">{service.title}</h3>
                    <div className="h-1 w-12 bg-[#3EA9D8] rounded-full mb-6"></div>
                    <p className="text-gray-800 text-sm font-bold leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="flex items-center text-[#1D1860] font-black text-[10px] tracking-widest uppercase group-hover:text-[#3EA9D8]">
                    Hover to Expand <MoveRight className="ml-3 w-4 h-4 animate-pulse" />
                  </div>
                </div>

                {/* Hover Details View (Overlay) */}
                <div className="absolute inset-0 z-20 transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 flex flex-col">
                  <div className="h-2/5 w-full relative">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D1860] to-transparent"></div>
                  </div>
                  <div className="h-3/5 w-full bg-[#1D1860] p-8 -mt-2">
                    <h4 className="text-white text-xl font-black mb-4">Core Benefits</h4>
                    <div className="space-y-4 mb-8">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#3EA9D8] mt-1 shrink-0" />
                          <span className="text-gray-300 text-xs md:text-sm font-bold uppercase tracking-tight leading-none">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact">
                      <button className="w-full bg-[#3EA9D8] hover:bg-white hover:text-[#1D1860] text-white py-4 rounded-xl font-black text-xs tracking-widest uppercase transition-all active:scale-95">
                        Get Custom Quote
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Subtle Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-100 z-30">
                  <div className={`h-full bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-700 delay-100`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Industry Solutions - Premium Zig-Zag Layout */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#3EA9D8] font-black tracking-[0.2em] uppercase text-[10px] mb-4 block bg-blue-50 w-fit mx-auto px-4 py-1.5 rounded-full ring-1 ring-[#3EA9D8]/20">Global Operational Excellence</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#1D1860] leading-tight max-w-3xl mx-auto">
              Precision Logistics for Every <span className="text-[#3EA9D8]">Industry Sector</span>
            </h2>
          </div>

          <div className="space-y-20">
            {/* Zig-Zag 1: Warehousing */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 group">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="inline-block bg-[#1D1860]/5 text-[#1D1860] font-black px-4 py-1 rounded-lg text-[10px] tracking-widest uppercase mb-6">Sector 01</div>
                <h3 className="text-3xl md:text-5xl font-black text-[#1D1860] mb-6 leading-[1.1] tracking-tight">
                  Strategic <br /> <span className="text-[#3EA9D8]">Warehousing</span> & <br /> Smart Inventory
                </h3>
                <p className="text-gray-800 text-lg md:text-xl font-bold leading-relaxed mb-6 max-w-xl">
                  Optimize your supply chain with our state-of-the-art warehousing facilities. We offer secure, climate-controlled storage integrated with real-time inventory tracking systems for maximum efficiency.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8">
                  {["Real-time Stock Visibility", "Advanced Security Systems", "Cross-Docking Efficiency", "Customized Pick & Pack"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3EA9D8]"></div>
                      <span className="font-bold text-[#1D1860] text-sm uppercase tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-4 text-[#1D1860] font-black text-xs tracking-[0.2em] uppercase">
                  Learn Operational Stack <MoveRight className="w-5 h-5 text-[#3EA9D8]" />
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative w-full aspect-square"
              >
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(29,24,96,0.15)] ring-[20px] ring-gray-50 group-hover:ring-[#3EA9D8]/5 transition-all duration-700">
                  <Image src="/b3.jpeg" alt="Warehousing" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1D1860]/40 to-transparent"></div>
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-10 -right-5 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-gray-100 animate-pulse">
                  <div className="text-[#3EA9D8] font-black text-3xl mb-1">99.9%</div>
                  <div className="text-[#1D1860] font-bold text-[9px] uppercase tracking-widest leading-none">Inventory Accuracy</div>
                </div>
              </motion.div>
            </div>

            {/* Zig-Zag 2: Cold Chain (Reversed) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 group">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full lg:pl-12"
              >
                <div className="inline-block bg-[#3EA9D8]/10 text-[#3EA9D8] font-black px-4 py-1 rounded-lg text-[10px] tracking-widest uppercase mb-6">Sector 02</div>
                <h3 className="text-3xl md:text-5xl font-black text-[#1D1860] mb-6 leading-[1.1] tracking-tight">
                  Precision-Controlled <br /> <span className="text-[#3EA9D8]">Cold Chain</span> Logistics
                </h3>
                <p className="text-gray-800 text-lg md:text-xl font-bold leading-relaxed mb-6 max-w-xl">
                  Ensure the integrity of your temperature-sensitive goods. From pharmaceuticals to perishables, our specialized fleet maintains exact conditions from origin to destination across India.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { t: "Strict Temperature Monitoring", d: "End-to-end logging for total accountability." },
                    { t: "FDA & ISO Compliant", d: "Meeting global standards for sensitive medical cargo." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <ShieldCheck className="text-[#3EA9D8]" size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-[#1D1860] text-sm uppercase tracking-tight mb-1">{item.t}</h4>
                        <p className="text-gray-700 text-xs font-bold leading-relaxed max-w-xs">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-block bg-[#1D1860] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase hover:bg-[#3EA9D8] transition-colors shadow-lg active:scale-95">
                  Request specialized Quote
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative w-full aspect-square"
              >
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(29,24,96,0.15)] ring-[20px] ring-gray-50 group-hover:ring-[#3EA9D8]/5 transition-all duration-700">
                  <Image src="/b1.jpeg" alt="Cold Chain" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1D1860]/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>

            {/* Zig-Zag 3: E-commerce */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 group">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="inline-block bg-[#1D1860]/5 text-[#1D1860] font-black px-4 py-1 rounded-lg text-[10px] tracking-widest uppercase mb-6">Sector 03</div>
                <h3 className="text-3xl md:text-5xl font-black text-[#1D1860] mb-6 leading-[1.1] tracking-tight">
                  Seamless <br /> <span className="text-[#3EA9D8]">E-commerce</span> & <br /> Last-Mile Delivery
                </h3>
                <p className="text-gray-800 text-lg md:text-xl font-bold leading-relaxed mb-6 max-w-xl">
                  Empower your online business with our scalable fulfillment solutions. We handle everything from picking and packing to lightning-fast last-mile delivery and effortless reverse logistics.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-black text-[#3EA9D8] mb-2 tracking-tighter">24H</div>
                    <div className="text-[#1D1860] font-black text-[10px] uppercase tracking-widest border-l-2 border-[#1D1860] pl-3">Standard<br />Delivery Cycle</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-[#3EA9D8] mb-2 tracking-tighter">0%</div>
                    <div className="text-[#1D1860] font-black text-[10px] uppercase tracking-widest border-l-2 border-[#1D1860] pl-3">Inventory<br />Loss Rate</div>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-4 text-[#3EA9D8] font-black text-xs tracking-[0.2em] uppercase border-b-2 border-[#3EA9D8]/20 pb-2 hover:border-[#3EA9D8] transition-all">
                  Scale your business <MoveRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative w-full aspect-square"
              >
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(29,24,96,0.15)] ring-[20px] ring-gray-50 group-hover:ring-[#3EA9D8]/5 transition-all duration-700">
                  <Image src="/b6.jpeg" alt="E-commerce Fulfillment" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1D1860]/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>

            {/* Zig-Zag 4: Project Cargo (Reversed) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 group">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full lg:pl-12"
              >
                <div className="inline-block bg-[#1D1860]/5 text-[#1D1860] font-black px-4 py-1 rounded-lg text-[10px] tracking-widest uppercase mb-6">Sector 04</div>
                <h3 className="text-3xl md:text-5xl font-black text-[#1D1860] mb-6 leading-[1.1] tracking-tight">
                  Industrial <br /> <span className="text-[#3EA9D8]">Project Cargo</span> & <br /> Heavy Lift
                </h3>
                <p className="text-gray-800 text-lg md:text-xl font-bold leading-relaxed mb-6 max-w-xl">
                  Handling the complex with precision engineering. From over-dimensional industrial machinery to mission-critical infrastructure, we plan and execute the most challenging transport missions.
                </p>
                <div className="grid grid-cols-1 gap-y-3 mb-8">
                  {[
                    { t: "Route Feasibility Surveys", d: "Detailed planning for oversized cargo movement." },
                    { t: "Heavy-Lift Equipment", d: "Specialized trailers and cranes for industrial loads." },
                    { t: "End-to-End Project Care", d: "Dedicated on-site support until final placement." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3EA9D8] mt-2"></div>
                      <div>
                        <span className="font-black text-[#1D1860] text-sm uppercase tracking-tight block">{item.t}</span>
                        <span className="text-gray-400 text-[10px] font-bold uppercase">{item.d}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-4 text-[#1D1860] font-black text-xs tracking-[0.2em] uppercase">
                  View Case Studies <MoveRight className="w-5 h-5 text-[#3EA9D8]" />
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative w-full aspect-square"
              >
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(29,24,96,0.15)] ring-[20px] ring-gray-50 group-hover:ring-[#3EA9D8]/5 transition-all duration-700">
                  <Image src="/b5.jpeg" alt="Project Cargo" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1D1860]/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Competitive Advantage - Feature Reveal */}
      <section className="py-16 bg-[#f4f9fc] border-y border-[#3EA9D8]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-4 block underline underline-offset-8 decoration-2 italic">Why Deb Air Express?</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#1D1860] mb-8 leading-tight">Enterprise Infrastructure <br /> Meets Personal Care</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: ShieldCheck, t: "Secured Handling", d: "Zero-damage guarantee for delicate cargo." },
                  { icon: Clock, t: "Real-time Visibility", d: "Proprietary 24/7 shipment tracking tech." },
                  { icon: Users, t: "Expert Fleet", d: "135+ qualified logistics professionals." },
                  { icon: Phone, t: "Priority Support", d: "Dedicated relationship managers for bulk." }
                ].map((adv, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#3EA9D8] shadow-md">
                      <adv.icon size={20} />
                    </div>
                    <h5 className="font-black text-[#1D1860] text-sm uppercase tracking-wider">{adv.t}</h5>
                    <p className="text-gray-800 text-xs font-bold leading-relaxed">{adv.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(29,24,96,0.15)] border-8 border-white aspect-[4/3]">
                <Image src="/b7.jpeg" alt="Reliable Logistics" fill className="object-cover" />
              </div>
              {/* Decorative Pill */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-gray-50 animate-bounce duration-[3000ms] hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="font-black text-[#1D1860] uppercase text-xs tracking-widest">Reliability Score</div>
                    <div className="text-2xl font-black text-emerald-600">99.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Support Contact CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1D1860] rounded-[3.5rem] p-10 md:p-16 text-center text-white relative shadow-2xl overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight tracking-normal underline underline-offset-[12px] decoration-[#3EA9D8]/50">Need a Specialized Solution?</h2>
              <p className="text-gray-200 font-bold mb-10 text-sm md:text-base italic">
                Contact our logistics engineers today for custom industrial frameworks and mission-critical shipments with personalized care.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919811350228" className="bg-[#3EA9D8] hover:bg-white hover:text-[#1D1860] text-white px-10 py-5 rounded-2xl font-black text-base md:text-lg transition-all shadow-xl active:scale-95 flex items-center justify-center group overflow-hidden">
                  <span className="relative z-10">Direct Call: +91-9811350228</span>
                </a>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(62,169,216,0.1),transparent_70%)]"></div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
