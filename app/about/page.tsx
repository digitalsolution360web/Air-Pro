"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, Globe, Clock, ShieldCheck, Phone, 
  MoveRight, Leaf, Award, Users, Heart, Truck,
  Zap, MapPin, Search, BarChart3, Database,
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
    <div className="flex flex-col w-full min-h-screen font-sans bg-white overflow-x-hidden pt-16 md:pt-20">
      
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
             <div className="inline-flex items-center bg-[#3EA9D8]/10 backdrop-blur-md border border-[#3EA9D8]/20 px-4 py-2 rounded-full text-[#3EA9D8] text-xs font-black tracking-widest uppercase mb-4 shadow-xl">
               Engineering Indian Logistics Excellence Since 1995
             </div>
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight tracking-tight">
               Precision-Driven <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EA9D8] to-blue-400">Logistics DNA</span>
             </h1>
             <p className="text-gray-100 text-base md:text-lg font-bold max-w-xl leading-relaxed border-l-4 border-[#3EA9D8]/60 pl-5 py-1 mx-auto lg:mx-0">
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
              <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-xs mb-4 block">Legacy & Values</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#1D1860] mb-6 leading-tight">
                Deb Air Express: <br/> Faster, Greener, <span className="text-[#3EA9D8]">Smarter</span>.
              </h2>
              <div className="space-y-4 text-gray-900 font-bold text-sm md:text-base leading-relaxed lg:pr-8">
                <p>
                  At Deb Air Express, we believe that logistics is about trust. Founded in 1995, we've transformed the Indian logistics landscape by prioritizing clinical precision over mere delivery.
                </p>
                <p className="bg-slate-50 p-5 rounded-xl italic border-l-4 border-[#3EA9D8] text-[#1D1860] text-sm md:text-base font-bold">
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
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                       <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#3EA9D8] shrink-0">
                          <box.i size={18} />
                       </div>
                       <div>
                          <div className="text-sm font-black text-[#1D1860] mb-0.5">{box.t}</div>
                          <div className="text-gray-700 text-xs font-bold uppercase tracking-widest">{box.l}</div>
                       </div>
                    </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: Vision & Mission Section */}
      <section className="py-16 bg-[#06041A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-[#1D1860]/40 p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3EA9D8]/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h3 className="text-xl md:text-2xl font-black mb-6 text-[#3EA9D8] uppercase flex items-center gap-3">
                <Globe size={24} /> Vision
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-white font-bold">
                To be recognised as a trusted logistics partner known for speed, reliability, and exceptional customer relationships.
              </p>
            </div>
            <div className="bg-[#1D1860]/40 p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#3EA9D8]/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
               <h3 className="text-xl md:text-2xl font-black mb-6 text-[#3EA9D8] uppercase flex items-center gap-3">
                <Users size={24} /> Mission
              </h3>
              <ul className="space-y-3">
                {[
                  "To deliver shipments safely, efficiently, and on time",
                  "To build long-term partnerships through transparency and strong communication",
                  "To continuously upgrade technology and processes",
                  "To provide personalised, flexible logistics solutions supported by owner-level involvement"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm md:text-base font-bold text-white">
                    <CheckCircle2 size={16} className="text-[#3EA9D8] shrink-0 mr-3 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Infrastructure & Compliance Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Infrastructure & Resources */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#3EA9D8] text-white flex items-center justify-center shadow-lg">
                   <Truck size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#1D1860] uppercase">Infrastructure & Resources</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Rail partners for bulk and chemical transport",
                  "GPS-enabled fleets",
                  "Skilled drivers & handlers",
                  "24×7 communication and coordination"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm md:text-base font-bold text-gray-800 bg-slate-50 p-4 rounded-xl border border-gray-100 transition-all hover:border-[#3EA9D8]/50 hover:shadow-md">
                    <div className="w-2 h-2 rounded-full bg-[#3EA9D8] mr-4 shrink-0 shadow-[0_0_8px_rgba(62,169,216,0.6)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance & Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#1D1860] text-white flex items-center justify-center shadow-lg">
                   <ShieldCheck size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#1D1860] uppercase">Compliance & Certifications</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "GST Registered",
                  "MSME Registered",
                  "Compliant with chemical handling & transportation norms",
                  "Vehicles follow required safety standards"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm md:text-base font-bold text-gray-800 bg-slate-50 p-4 rounded-xl border border-gray-100 transition-all hover:border-[#1D1860]/50 hover:shadow-md">
                    <Award size={18} className="text-[#1D1860] mr-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Major Clients & Key Deliveries */}
      <section className="py-16 bg-[#f4f9fc] border-b border-[#3EA9D8]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Key Deliveries First for Impact */}
          <div className="mb-16">
             <div className="text-center mb-10">
                <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-2 block">Proven Track Record</span>
                <h3 className="text-xl md:text-2xl md:text-3xl font-black text-[#1D1860] uppercase">Key Client Deliveries</h3>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { client: "Khadim’s", desc: "We manage raw material supply via railway from Haryana to Kolkata within 24 hours, ensuring timely manufacturing operations." },
                  { client: "Jubilant", desc: "We handle chemical and liquid consignments, ensuring safe, compliant, and timely movement for pharma production needs." },
                  { client: "Beam Global & Brown-Forman", desc: "Deb Air Express has delivered consignments for these leading alcohol brands, maintaining secure and timely transportation standards." }
                ].map((delivery, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
                     <div className="absolute top-0 inset-x-0 h-1 bg-[#3EA9D8] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                     <div className="text-[#3EA9D8] mb-4">
                        <Briefcase size={28} />
                     </div>
                     <h4 className="text-lg font-black text-[#1D1860] mb-3">{delivery.client}</h4>
                     <p className="text-gray-900 text-sm font-bold leading-relaxed">{delivery.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Major Clients Grid */}
          <div>
            <div className="text-center mb-10">
               <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-2 block">Trusted By Industry Leaders</span>
               <h3 className="text-xl md:text-2xl font-black text-[#1D1860] uppercase">Major Clients</h3>
               <p className="text-gray-900 font-black text-sm mt-3">Deb Air Express proudly works with top companies such as:</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "M/S Jubilant Ingrevia Ltd.", "M/S Brown For Man Pvt. Ltd.", "M/s Beam Global Spirits & Wine (India) Pvt. Ltd",
                "M/S Khadim’s India Limited", "M/S Covestro India Pvt. Ltd.", "M/s Vineeth Precious Catalysts Pvt. Ltd.", 
                "M/S Kreative Organics Pvt. Ltd.", "M/s Adyati Marketing Services Pvt. Ltd.", "M/s Weaver Brands. Vaisa",
                "M/s Srini Pharmaceuticals Ltd. Telangana", "M/s shreepati pharmaceuticals private limited. Indore", "M/s, Atharva Laboratories Ltd.",
                "M/s Toyo Ink India Pvt. Ltd. Noida", "M/s, Phooltas Rail Solutions Pvt. Ltd.", "M/s, Ancadd Engineering Solutions.",
                "M/s, Nippon Paint (India) Pvt. Ltd.", "M/s, Expanded Polymer Ltd.", "M/s, Clariant Chemical India Ltd.",
                "M/s Helios Packaging Pvt. Ltd. Neemrana (Fog)", "M/s ONS Industries Pvt. Ltd.", "M/s Paragon Polymer Product Pvt. Ltd.",
                "M/s BASF India Limited", "M/s Global Footwear And Leathecraft Industries", "M/s Chemilac Paints Pvt. Ltd. Faridabad",
                "M/S Synergy Footwear Components", "M/s. Aroma Chemical Agencies (I) Pvt. Ltd.", "M/s Bhabha Atomic Research Center", 
                "M/s AVC Systems Solutions Pvt. Ltd."
              ].map((client, idx) => (
                <div key={idx} className="bg-white px-4 md:px-5 py-2 md:py-3 rounded-full border border-gray-200 shadow-sm text-[10px] md:text-sm font-bold text-[#1D1860] hover:border-[#3EA9D8] hover:text-[#3EA9D8] transition-colors cursor-default">
                  {client}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. NEW: Specialized Capacities Section — High Value Extra Content */}
      <section className="py-16 bg-[#f4f9fc] border-y border-[#3EA9D8]/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-10">
              <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-xs mb-2 block">Premium Capabilities</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">Industrial Standard Handling</h3>
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
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                   <div className="w-12 h-12 rounded-xl bg-[#3EA9D8] text-white flex items-center justify-center mb-5 shadow-lg group-hover:rotate-12 transition-transform">
                      <cap.i size={24} />
                   </div>
                   <p className="text-xs font-black text-[#3EA9D8] uppercase tracking-widest mb-2">{cap.label}</p>
                   <h5 className="text-lg font-black text-[#1D1860] mb-3">{cap.t}</h5>
                   <p className="text-gray-900 text-sm font-bold leading-relaxed">{cap.d}</p>
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
                 <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-xs mb-2 block">Operational Reach</span>
                 <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">Strategic Network Centers</h3>
              </div>
              <p className="text-gray-900 font-bold max-w-sm text-sm">
                24/7 cross-docking operations at the heart of India's commercial corridors.
              </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { r: "North India", h: "Delhi NCR", d: "High-speed air sorting and regional hub." },
                { r: "West India", h: "Mumbai", d: "Coastal logistics lead and pharma terminal." },
                { r: "South India", h: "Bengaluru", d: "Tech and electronics fulfillment center." },
                { r: "East India", h: "Kolkata", d: "Critical gateway for Eastern trade routes." }
              ].map((hub, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-gray-50 hover:bg-white hover:shadow-lg transition-all group">
                   <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-[#3EA9D8] group-hover:bg-[#1D1860] group-hover:text-white transition-all">
                      <MapPin size={20} />
                   </div>
                   <p className="text-[#3EA9D8] font-black text-xs tracking-widest uppercase mb-1">{hub.r}</p>
                   <h5 className="text-base font-black text-[#1D1860] mb-2">{hub.h}</h5>
                   <p className="text-gray-800 text-sm font-bold leading-snug">{hub.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. The Evolution Timeline — Tighter layout */}
      <section className="py-16 bg-[#f4f9fc] border-y border-[#3EA9D8]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
              <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-xs mb-2 block">Our History</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">Corporate Journey</h3>
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
                       <div className={`bg-white p-7 lg:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                          <div className={`text-[#3EA9D8] font-black text-3xl mb-3 flex items-center gap-3 ${idx % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                             {ms.year}
                          </div>
                          <h4 className="text-lg font-black text-[#1D1860] mb-3">{ms.title}</h4>
                          <p className="text-gray-800 font-black text-sm leading-relaxed">{ms.desc}</p>
                       </div>
                       <div className="absolute left-1/2 top-8 w-3 h-3 rounded-full bg-[#3EA9D8] -translate-x-1/2 border-2 border-white shadow-lg hidden lg:block"></div>
                    </motion.div>
                 ))}
              </div>
           </div>
           
           <div className="h-20 lg:h-32"></div>
        </div>
      </section>

      {/* 6. Core Operational Pillars — More specific descriptors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-xs mb-2 block">Our Values</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">Core Operational Pillars</h3>
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { i: Leaf, t: "Green Commitment", d: "Utilizing CNG-optimized fleet routing systems for a greener future." },
                { i: ShieldCheck, t: "Seal Security", d: "Proprietary tamper-evident cargo sealing at every stage." },
                { i: Clock, t: "ETA Precision", d: "99.8% record of meeting strict delivery windows on-time." },
                { i: Search, t: "Cloud Visibility", d: "Real-time API access for enterprise-level shipment tracking." },
                { i: BarChart3, t: "Elastic Capacity", d: "Specialized in sub-100kg to 10-ton logistics solutions." },
                { i: Heart, t: "Ethics & Care", d: "Dignity-led handling for personal and high-value parcels." }
              ].map((val, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group hover:border-[#3EA9D8]/30">
                   <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3EA9D8] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#3EA9D8] group-hover:text-white transition-all">
                      <val.i size={22} />
                   </div>
                   <h5 className="text-base font-black text-[#1D1860] mb-2">{val.t}</h5>
                   <p className="text-gray-800 text-sm font-bold leading-relaxed">{val.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. Statistics Recap */}
      <section className="py-14 bg-[#06041A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                   <CounterValue to={stat.to} />{idx === 0 ? '' : '+'}
                </div>
                <div className="text-[#3EA9D8] font-black text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Tighter Strategic CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
           <div className="relative bg-[#06041A] rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl overflow-hidden border border-[#3EA9D8]/10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#3EA9D8]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight">Partner with <span className="text-[#3EA9D8]">Excellence</span></h2>
                 <p className="text-gray-100 font-black mb-10 text-base max-w-xl mx-auto">
                   Join 900+ businesses who rely on Deb Air Express for mission-critical and eco-friendly logistics across India.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="bg-[#3EA9D8] hover:bg-white hover:text-[#06041A] text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl flex items-center justify-center">
                       Contact Expert <MoveRight className="ml-2 w-5 h-5" />
                    </Link>
                    <a href="tel:+919311350228" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-base transition-all border border-white/20 flex items-center justify-center">
                       +91-9311350228
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
