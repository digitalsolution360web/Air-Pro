"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Phone, Mail, MapPin, Send, 
  Clock, Globe, MoveRight, CheckCircle2,
  User, Building
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-white overflow-x-hidden pt-24">
      
      {/* 1. Cinematic Header Banner */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#06041A]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/b9.jpeg" 
            alt="Contact Us" 
            fill 
            priority
            className="object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06041A] via-transparent to-[#06041A]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <motion.div 
             initial="hidden"
             animate="visible"
             variants={fadeInUp}
             className="inline-block bg-[#3EA9D8]/20 backdrop-blur-md border border-[#3EA9D8]/30 px-6 py-2 rounded-full text-[#3EA9D8] text-[10px] font-black tracking-widest uppercase mb-8"
           >
             Direct Channel
           </motion.div>
           <motion.h1 
             initial="hidden"
             animate="visible"
             variants={fadeInUp}
             className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
           >
             Get In Touch With <br/>
             <span className="text-[#3EA9D8]">Industry Experts</span>
           </motion.h1>
           <motion.p 
             initial="hidden"
             animate="visible"
             variants={fadeInUp}
             className="text-gray-100 text-sm md:text-lg font-bold max-w-2xl mx-auto leading-relaxed"
           >
             Our industrial response team is ready to assist with your complex logistics requirements within 24 hours.
           </motion.p>
        </div>

        {/* Decorative light */}
        <div className="absolute top-0 left-0 w-[500px] h-full bg-[#3EA9D8]/5 blur-[120px] -z-10"></div>
      </section>

      {/* 2. Contact Grid & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Left Column: Contact Info Info List */}
              <div className="flex-1">
                 <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-4 block underline underline-offset-8 decoration-2 decoration-[#3EA9D8]/20">Global Outreach</span>
                 <h2 className="text-2xl md:text-3xl font-black text-[#1D1860] mb-8 leading-tight">Headquarters Presence & Support Channels</h2>
                 
                 <div className="space-y-3.5">
                    {[
                      { icon: Building, t: "Company Name", d: "Deb Air Express", c: "#" },
                      { icon: User, t: "Proprietor", d: "Lalan Kumar Singh", c: "#" },
                      { icon: MapPin, t: "Address", d: "F-7 ground floor, main road Kalkaji, 110017", c: "#" },
                      { icon: Phone, t: "Phone", d: "9811350228, 9311350228", c: "tel:+919811350228" },
                      { icon: Mail, t: "Email", d: "debairexpress228@gmail.com", c: "mailto:debairexpress228@gmail.com" },
                      { icon: Clock, t: "Service Availability", d: "Monday to Sunday (24/7 Operations Support)", c: "#" }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-4 items-center p-4 rounded-2xl bg-slate-50 border border-gray-50 hover:shadow-md transition-all group"
                      >
                         <div className="w-12 h-12 rounded-xl bg-white text-[#3EA9D8] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#3EA9D8] group-hover:text-white transition-colors">
                            <item.icon size={22} />
                         </div>
                         <div>
                            <h4 className="font-black text-[#1D1860] text-[13px] uppercase tracking-wider mb-1 leading-none">{item.t}</h4>
                            <p className="text-gray-700 text-xs font-bold leading-relaxed">{item.d}</p>
                            {item.c !== "#" && (
                               <a href={item.c} className="text-[#3EA9D8] font-black text-[10px] tracking-widest uppercase flex items-center hover:scale-105 transition-transform origin-left mt-1.5">
                                  Connect Now <MoveRight className="ml-2 w-3 h-3" />
                               </a>
                            )}
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>

              {/* Right Column: Contact Information Form */}
              <div className="flex-1">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.98 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="bg-[#1D1860] rounded-[3.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden"
                 >
                    <div className="relative z-10">
                       <div className="mb-10">
                          <h3 className="text-2xl font-black mb-3">Initiate Consultation</h3>
                          <p className="text-gray-100 text-sm font-bold">Fill our high-priority support form and our specialists will contact you.</p>
                       </div>

                       <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#3EA9D8] ml-2">Full Name</label>
                                <input type="text" required placeholder="John Doe" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#3EA9D8] transition-all text-sm font-bold placeholder:text-gray-500" />
                             </div>
                             <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#3EA9D8] ml-2">Business Email</label>
                                <input type="email" required placeholder="john@company.com" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#3EA9D8] transition-all text-sm font-bold placeholder:text-gray-500" />
                             </div>
                          </div>
                          
                          <div className="space-y-2">
                             <label className="text-[10px] font-black uppercase tracking-widest text-[#3EA9D8] ml-2">Shipment Subject</label>
                             <input type="text" required placeholder="Consignment or Project Inquiry" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#3EA9D8] transition-all text-sm font-bold placeholder:text-gray-500" />
                          </div>

                          <div className="space-y-2">
                             <label className="text-[10px] font-black uppercase tracking-widest text-[#3EA9D8] ml-2">Specific Requirements</label>
                             <textarea rows={4} required placeholder="Describe your logistical needs..." className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#3EA9D8] transition-all text-sm font-bold placeholder:text-gray-500 resize-none"></textarea>
                          </div>

                          <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#3EA9D8] hover:bg-white hover:text-[#1D1860] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center shadow-xl disabled:opacity-50"
                          >
                             {isSubmitting ? "Submitting Inquiry..." : (isSuccess ? "Consultation Requested!" : "Submit Consultation")}
                             {!isSubmitting && !isSuccess && <Send className="ml-3 w-4 h-4" />}
                             {isSuccess && <CheckCircle2 className="ml-3 w-4 h-4" />}
                          </button>
                       </form>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#3EA9D8]/5 rounded-full blur-[100px]"></div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Immersive Map Section */}
      <section className="py-20 bg-[#f4f9fc] border-t border-[#3EA9D8]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-[#3EA9D8] font-black tracking-widest uppercase text-[10px] mb-3 block">Presence</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#1D1860]">Our Global Headquarters Hub</h3>
           </div>
           
           <div className="w-full h-[500px] md:h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9273938005636!2d77.25380299999999!3d28.541902000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3da3ead3a8b%3A0xe35b169b3e36c0d3!2sDeb%20Air%20Express%20Cargo%20And%20Couriers!5e0!3m2!1sen!2sin!4v1775493368659!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.01]"
              ></iframe>
           </div>
        </div>
      </section>

    </div>
  );
}
