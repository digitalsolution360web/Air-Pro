"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, Globe, Clock, ShieldCheck, Phone, 
  HelpCircle, MoveRight, Leaf, Award, Users, Heart, Truck
} from "lucide-react";
import { motion, useInView, animate } from "framer-motion";

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

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stats = [
    { icon: Award, to: 27, label: "Years of Legacy" },
    { icon: Users, to: 135, label: "Qualified Experts" },
    { icon: Heart, to: 957, label: "Trusted Partners" },
    { icon: Truck, to: 1839, label: "Active Deliveries" }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-white overflow-x-hidden pt-24">
      
      {/* 1. Hero Section - Cinematic Header */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#06041A]">
        {/* Background Overlay & Abstract Decor */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/b1.jpeg" 
            alt="Logistics Background" 
            fill 
            priority
            className="object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06041A] via-transparent to-[#06041A]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3EA9D8]/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
             <motion.div 
               initial="hidden"
               animate="visible"
               variants={fadeInUp}
               className="inline-flex items-center bg-[#3EA9D8]/20 backdrop-blur-md border border-[#3EA9D8]/30 px-4 py-1.5 rounded-full text-[#3EA9D8] text-xs font-black tracking-widest uppercase mb-6"
             >
               EST. 1995
             </motion.div>
             <motion.h1 
               initial="hidden"
               animate="visible"
               variants={fadeInUp}
               className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
             >
               Building the Infrastructure <br/>
               <span className="text-[#3EA9D8]">of Modern India</span>
             </motion.h1>
             <motion.p 
               initial="hidden"
               animate="visible"
               variants={fadeInUp}
               className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
             >
               For over two decades, we've redefined the boundaries of what's possible in logistics, merging high-speed precision with environmental consciousness.
             </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Our Mission - Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Visual Part */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 aspect-[4/5] group">
                <Image 
                  src="/b6.jpeg" 
                  alt="Sustainable Logistics" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1860]/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 z-20 hidden md:block">
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl font-black text-[#1D1860]"><CounterValue to={27} />+</span>
                    <span className="text-[#3EA9D8] font-black uppercase text-[10px] tracking-widest">Years Experience</span>
                 </div>
              </div>
            </motion.div>

            {/* Text Part */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-xs mb-4 block underline underline-offset-8 decoration-2 decoration-[#3EA9D8]/30">The Visionary Mission</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#1D1860] mb-8 leading-tight">
                Deb Air Express: <br/> Faster, Greener, Smarter.
              </h2>
              <div className="space-y-6 text-gray-600 font-medium text-base leading-relaxed">
                <p>
                  At Deb Air Express, we believe that delivery services can be both fast and sustainable. That’s why we’re dedicated to providing eco-friendly courier services to businesses and individuals across India. 
                </p>
                <p>
                  Founded in 1995, our mission is to minimize our impact on the environment while delivering your shipments on time, every time. We specifically use the most efficient vehicles with only <span className="text-[#3EA9D8] font-bold">CNG as fuel</span> and Railway transport to significantly reduce our carbon footprint.
                </p>
                <p>
                  We are the only company in India providing specialized services for carrying liquids, fragile articles, perishable items, and medicine anywhere in the country with extraordinary care.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   "Experienced Workers in Tracking",
                   "Reliable Industrial Services",
                   "24/7 Premium Customer Support",
                   "Accurate Delivery Timing"
                 ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                       <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#3EA9D8]">
                          <CheckCircle2 size={14} />
                       </div>
                       <span className="text-[#1D1860] font-bold text-sm tracking-tight">{item}</span>
                    </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Sustainable Values - Icon Grid */}
      <section className="py-20 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-3 block">Our Values</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">The Pillars of Our Success</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Leaf, 
                title: "Eco-Friendly", 
                desc: "Focusing on CNG vehicles and Railway transport for a zero-carbon future.",
                color: "bg-emerald-50 text-emerald-600"
              },
              { 
                icon: ShieldCheck, 
                title: "Secured Handling", 
                desc: "Secured and waterproof warehouse infrastructure for total safety.",
                color: "bg-blue-50 text-blue-600"
              },
              { 
                icon: Clock, 
                title: "Time Precision", 
                desc: "Our mission is delivering shipments on time, every single time, without fail.",
                color: "bg-orange-50 text-orange-600"
              },
              { 
                icon: HelpCircle, 
                title: "Dedicated Care", 
                desc: "Expert solutions for perishables, liquids, and delicate medical consignments.",
                color: "bg-purple-50 text-purple-600"
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#3EA9D8]/30 hover:shadow-2xl transition-all group text-center"
              >
                <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mx-auto mb-6 shadow-sm transform group-hover:rotate-6 transition-transform`}>
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-black text-[#1D1860] mb-3">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Blur */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3EA9D8]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* 4. Interactive Statistics */}
      <section className="py-16 bg-gradient-to-r from-[#0d0A30] via-[#100D3D] to-[#0d0A30] relative overflow-hidden">
        {/* Background Sparkle */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-x-0 lg:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 px-10"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#3EA9D8] mb-6 border border-white/5">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl md:text-5xl font-black text-[#FF5722] mb-1 leading-none tracking-tighter">
                   <CounterValue to={stat.to} />+
                </div>
                <div className="text-white font-bold text-[11px] uppercase tracking-widest opacity-60 mt-3">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA - Join the Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-[#1D1860] rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden group shadow-[0_30px_100px_rgba(29,24,96,0.3)]"
           >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                 <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight">Join Us on Our Mission <br/> <span className="text-[#3EA9D8]">To Make Logistics Greener</span></h2>
                 <p className="text-gray-400 text-sm md:text-base mb-10 max-w-2xl mx-auto font-medium opacity-80">
                   Whether you're shipping a small package or industrial scale cargo, trust Deb Air Express to deliver in a way that is both fast and sustainable.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact" className="bg-[#3EA9D8] hover:bg-white hover:text-[#1D1860] text-white px-8 py-4 rounded-xl font-black text-base transition-all shadow-xl active:scale-95 flex items-center justify-center">
                       Partner With Us <MoveRight className="ml-2 w-5 h-5" />
                    </Link>
                    <a href="tel:+919311350228" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-base transition-all flex items-center justify-center">
                       <Phone className="mr-2 w-5 h-5" /> Direct Connect
                    </a>
                 </div>
              </div>
              
              {/* Decorative light */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#3EA9D8]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#3EA9D8]/30 transition-all duration-700"></div>
           </motion.div>
        </div>
      </section>

    </div>
  );
}
