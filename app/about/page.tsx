"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, Globe, Clock, ShieldCheck, Phone, 
  MoveRight, Leaf, Award, Users, Heart, Truck,
  Zap, Box, MapPin, Search, BarChart3, Database,
  Stethoscope, Briefcase, FileText
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
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const
      } 
    }
  };

  const stats = [
    { icon: Award, to: 27, label: "Years of Legacy" },
    { icon: Users, to: 135, label: "Qualified Experts" },
    { icon: Heart, to: 957, label: "Trusted Partners" },
    { icon: Truck, to: 1839, label: "Monthly Deliveries" }
  ];

  const milestones = [
    { year: "1995", title: "The Foundation", desc: "Deb Air Express was established with a focus on air cargo precision and reliability." },
    { year: "2005", title: "Pan-India Expansion", desc: "Launched comprehensive surface transport network across all Indian states and major hubs." },
    { year: "2015", title: "Green Initiative", desc: "Successfully pivoted to a 100% CNG fleet and prioritized Railway logistics for a greener future." },
    { year: "2024", title: "Digital Leadership", desc: "Implemented AI-driven tracking and reached a 99.8% on-time delivery record." }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-white overflow-x-hidden pt-24">
      
      {/* 1. Refined Hero Section — Smaller font sizes for a more professional feel */}
      <section className="relative w-full py-12 lg:py-20 overflow-hidden bg-[#06041A]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/train.jpg" 
            alt="About Deb Air" 
            fill 
            priority
            className="object-cover opacity-20 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06041A] via-[#06041A]/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto lg:mx-0"
          >
             <div className="inline-flex items-center bg-[#3EA9D8]/10 backdrop-blur-md border border-[#3EA9D8]/20 px-3 py-1 rounded-full text-[#3EA9D8] text-[8px] font-black tracking-[0.2em] uppercase mb-4 shadow-xl">
               Engineering Indian Logistics Excellence Since 1995
             </div>
             <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight tracking-tight uppercase">
               Precision-Driven <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EA9D8] to-blue-400">Logistics DNA</span>
             </h1>
             <p className="text-gray-400 text-sm md:text-base font-medium max-w-xl leading-relaxed italic border-l-2 border-[#3EA9D8]/50 pl-4 py-1 mx-auto lg:mx-0">
               Over 27 years of engineering reliability and sustainable movement across 28 states with industrial-grade precision.
             </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Story & Founder's Vision — Tighter spacing */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-gray-50 aspect-[4/5] group">
                <Image 
                  src="/b6.jpeg" 
                  alt="Operations" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-[1500ms]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1860]/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-[#1D1860] p-6 rounded-2xl shadow-2xl z-20 border border-white/5 text-white">
                 <div className="text-2xl font-black text-[#3EA9D8]">27+</div>
                 <div className="text-[7px] font-black uppercase tracking-[0.2em] opacity-60">Years Reputation</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="text-[#3EA9D8] font-black tracking-[0.3em] uppercase text-[8px] mb-4 block underline underline-offset-4 decoration-2 decoration-[#3EA9D8]/20">Legacy & Values</span>
              <h2 className="text-xl md:text-3xl font-black text-[#1D1860] mb-6 leading-tight tracking-tight uppercase group cursor-default">
                Deb Air Express: <br/> Faster, Greener, <span className="text-[#3EA9D8] group-hover:underline underline-offset-4 transition-all">Smarter</span>.
              </h2>
              <div className="space-y-4 text-gray-500 font-medium text-xs md:text-sm leading-relaxed lg:pr-8">
                <p>
                  At Deb Air Express, we believe that logistics is about trust. Founded in 1995, we've transformed the Indian logistics landscape by prioritizing clinical precision over mere delivery. 
                </p>
                <p className="bg-slate-50 p-4 rounded-xl italic border-l-2 border-[#3EA9D8] text-[#1D1860]">
                  "We pioneered the shift to 100% CNG-fueled fleets and expanded into multi-modal railway integrations to ensure that our operations are both efficient and environmentally responsible."
                </p>
                <p>
                  Beyond standard shipping, we specialize in high-stakes handling for pharmaceuticals, mission-critical medical consignments, and fragile high-value articles that require unparalleled personal care.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                 {[
                   { i: Globe, t: "PAN India", l: "Network Hubs" },
                   { i: ShieldCheck, t: "ISO 9001", l: "Certified Safety" },
                   { i: Zap, t: "Real-time", l: "GPS Tracking" },
                   { i: Database, t: "Secured", l: "Warehousing" }
                 ].map((box, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                       <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#3EA9D8] shrink-0">
                          <box.i size={14} />
                       </div>
                       <div>
                          <div className="text-xs font-black text-[#1D1860] leading-none mb-1">{box.t}</div>
                          <div className="text-gray-400 text-[7px] font-bold uppercase tracking-widest leading-none">{box.l}</div>
                       </div>
                    </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. NEW: Specialized Capacities Section — High Value Extra Content */}
      <section className="py-12 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-10">
              <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[8px] mb-2 block">Premium Capabilities</span>
              <h3 className="text-xl md:text-2xl font-black text-[#1D1860] uppercase">Industrial Standard Handling</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  i: Stethoscope, t: "Pharma Excellence", 
                  d: "GDP-compliant handling for life-saving medicines and laboratory samples with exact temperature maintenance.",
                  label: "ISO 14001 Standards" 
                },
                { 
                  i: Briefcase, t: "Mission Critical", 
                  d: "Direct 'By-Hand' escalation service for high-priority legal documents and secure industrial contracts.",
                  label: "Secured Escalation" 
                },
                { 
                  i: FileText, t: "Custom Documentation", 
                  d: "Expert regulatory support and documentation for complex inter-state industrial cargo movements.",
                  label: "Compliance Ready" 
                }
              ].map((cap, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                   <div className="w-10 h-10 rounded-xl bg-[#3EA9D8] text-white flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform">
                      <cap.i size={20} />
                   </div>
                   <h6 className="text-[7px] font-black text-[#3EA9D8] uppercase tracking-[0.2em] mb-2">{cap.label}</h6>
                   <h5 className="text-base font-black text-[#1D1860] mb-3 uppercase tracking-tight">{cap.t}</h5>
                   <p className="text-gray-400 text-xs font-semibold leading-relaxed line-clamp-3">{cap.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. Infrastructure Hubs — National Reach */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-10">
              <div className="max-w-2xl">
                 <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[8px] mb-2 block p-1.5 bg-blue-50 w-fit rounded-lg">Operational Reach</span>
                 <h3 className="text-xl md:text-2xl font-black text-[#1D1860] leading-tight uppercase">Strategic Network Centers</h3>
              </div>
              <p className="text-gray-400 font-bold max-w-sm text-[10px] uppercase opacity-60">
                24/7 cross-docking operations at the heart of India's commercial corridors.
              </p>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { r: "North India", h: "Delhi NCR", d: "High-speed air sorting and regional hub." },
                { r: "West India", h: "Mumbai", d: "Coastal logistics lead and pharma terminal." },
                { r: "South India", h: "Bengaluru", d: "Tech and electronics fulfillment center." },
                { r: "East India", h: "Kolkata", d: "Critical gateway for Eastern trade routes." }
              ].map((hub, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-gray-50 hover:bg-white hover:shadow-lg transition-all group">
                   <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4 text-[#3EA9D8] group-hover:bg-[#1D1860] group-hover:text-white transition-all">
                      <MapPin size={16} />
                   </div>
                   <h6 className="text-[#3EA9D8] font-black text-[7px] tracking-widest uppercase mb-1">{hub.r}</h6>
                   <h5 className="text-sm font-black text-[#1D1860] mb-2">{hub.h}</h5>
                   <p className="text-gray-400 text-[10px] font-bold leading-none">{hub.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. The Evolution Timeline — Tighter layout */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
              <h3 className="text-xl md:text-2xl font-black text-[#1D1860] uppercase underline underline-offset-8 decoration-[#3EA9D8]/50 inline-block px-8 py-2">Corporate Journey</h3>
           </div>

           <div className="relative">
              <div className="absolute left-1/2 top-0 w-px h-full bg-gray-200 -translate-x-1/2 hidden lg:block"></div>
              
              <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 gap-10 lg:gap-16">
                 {milestones.map((ms, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`relative flex flex-col ${idx % 2 !== 0 ? 'lg:translate-y-16' : ''}`}
                    >
                       <div className={`bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                          <div className={`text-[#3EA9D8] font-black text-2xl mb-2 transition-transform flex items-center gap-3 ${idx % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                             {ms.year}
                          </div>
                          <h4 className="text-base font-black text-[#1D1860] mb-2 uppercase">{ms.title}</h4>
                          <p className="text-gray-500 font-medium text-[11px] leading-relaxed line-clamp-2">{ms.desc}</p>
                       </div>
                       <div className="absolute left-1/2 top-8 w-2.5 h-2.5 rounded-full bg-[#3EA9D8] -translate-x-1/2 border-2 border-white shadow-lg hidden lg:block"></div>
                    </motion.div>
                 ))}
              </div>
           </div>
           
           <div className="h-20 lg:h-32"></div>
        </div>
      </section>

      {/* 6. Core Operational Pillars — More specific descriptors */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {[
                { i: Leaf, t: "Green Commitment", d: "Utilizing CNG-optimized fleet routing systems." },
                { i: ShieldCheck, t: "Seal Security", d: "Proprietary tamper-evident cargo sealing." },
                { i: Clock, t: "ETA Precision", d: "99.8% record of meeting strict delivery windows." },
                { i: Search, t: "Cloud Visibility", d: "Real-time API access for enterprise tracking." },
                { i: BarChart3, t: "Elastic Capacity", d: "Specialized in sub-100kg to 10-ton solutions." },
                { i: Heart, t: "Ethics & Care", d: "Dignity-led handling for personal high-value parcels." }
              ].map((val, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all group border-b-2 border-b-gray-50 hover:border-b-[#3EA9D8]">
                   <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3EA9D8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <val.i size={18} />
                   </div>
                   <h5 className="text-xs font-black text-[#1D1860] mb-2 uppercase tracking-tighter">{val.t}</h5>
                   <p className="text-gray-400 text-[9px] font-bold leading-normal uppercase opacity-70">{val.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. Statistics Recap */}
      <section className="py-10 bg-[#06041A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-4xl font-black text-white mb-1">
                   <CounterValue to={stat.to} />{idx === 0 ? '' : '+'}
                </div>
                <div className="text-[#3EA9D8] font-black text-[7px] uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Tighter Strategic CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
           <div className="relative bg-[#06041A] rounded-[2.5rem] p-10 md:p-14 text-center text-white shadow-2xl overflow-hidden border border-[#3EA9D8]/10 group">
              <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-xl md:text-3xl font-black mb-6 leading-tight uppercase underline underline-offset-[10px] decoration-[#3EA9D8]/30">Partner with Excellence</h2>
                 <p className="text-gray-400 font-medium mb-8 text-xs md:text-sm opacity-80 max-w-xl mx-auto italic">
                   Join 900+ businesses who rely on Deb Air Express for mission-critical and eco-friendly logistics across India.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="bg-[#3EA9D8] hover:bg-white hover:text-[#06041A] text-white px-8 py-4 rounded-xl font-black text-xs transition-all shadow-xl flex items-center justify-center uppercase tracking-widest">
                       Contact Expert <MoveRight className="ml-2 w-4 h-4" />
                    </Link>
                    <a href="tel:+919811350228" className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-black text-xs transition-all border border-white/10 flex items-center justify-center uppercase tracking-widest">
                       Support Direct
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
