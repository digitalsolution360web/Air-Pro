"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  Search, ShieldCheck, Clock, MapPin, 
  ArrowRight, CheckCircle2, Box, Truck 
} from "lucide-react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";

// Professional Counter Component
const CounterValue = ({ to, decimals = 0 }: { to: number; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate: (latest) => setCount(Number(latest.toFixed(decimals))),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, to, decimals]);

  return <span ref={ref}>{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
};

export default function Track() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber) return;
    
    setIsTracking(true);
    // Simulate API delay
    setTimeout(() => {
      setIsTracking(false);
      setShowResult(true);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-white overflow-x-hidden pt-24">
      
      {/* 1. Dynamic Hero Banner */}
      <section className="relative w-full py-20 lg:py-32 bg-[#06041A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/b8.jpeg" 
            alt="Tracking Infrastructure" 
            fill 
            priority
            className="object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06041A] via-[#06041A]/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
             <motion.div 
               initial="hidden"
               animate="visible"
               variants={fadeInUp}
               className="inline-flex items-center bg-[#3EA9D8]/20 backdrop-blur-md border border-[#3EA9D8]/30 px-5 py-2 rounded-full text-[#3EA9D8] text-[10px] font-black tracking-widest uppercase mb-8"
             >
               Real-time Transit Visibility
             </motion.div>
             <motion.h1 
               initial="hidden"
               animate="visible"
               variants={fadeInUp}
               className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
             >
               Trace Your Shipments <br/>
               <span className="text-[#3EA9D8]">With Surgical Precision</span>
             </motion.h1>
             <motion.p 
               initial="hidden"
               animate="visible"
               variants={fadeInUp}
               className="text-gray-400 text-sm md:text-lg mb-10 max-w-xl font-medium opacity-80"
             >
               Access high-fidelity tracking data for your air and surface consignments. Enter your AWB or Reference number below.
             </motion.p>

             {/* Premium Tracking Input */}
             <motion.form 
               initial="hidden"
               animate="visible"
               variants={fadeInUp}
               onSubmit={handleTrack}
               className="relative max-w-2xl group"
             >
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                   <Search className="text-[#3EA9D8] w-6 h-6" />
                </div>
                <input 
                  type="text" 
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter Consignment Number (AWB / Ref No.)" 
                  className="w-full bg-white/10 backdrop-blur-2xl border-2 border-white/10 text-white rounded-3xl py-6 pl-16 pr-44 focus:outline-none focus:border-[#3EA9D8] transition-all text-sm md:text-base font-bold placeholder:text-gray-500"
                />
                <button 
                  type="submit"
                  disabled={isTracking}
                  className="absolute right-3 top-3 bottom-3 bg-[#3EA9D8] hover:bg-white hover:text-[#1D1860] text-white px-8 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center shadow-xl disabled:opacity-50"
                >
                   {isTracking ? "Processing..." : "Track Now"}
                </button>
             </motion.form>
          </div>
        </div>

        {/* Decorative Light */}
        <div className="absolute top-0 right-0 w-[500px] h-full bg-[#3EA9D8]/5 blur-[120px] -z-10"></div>
      </section>

      {/* 2. Content Section - Why Trust Our Tracking? */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
               {!showResult ? (
                 <motion.div 
                   key="features"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="grid grid-cols-1 md:grid-cols-3 gap-12"
                 >
                    {[
                      { icon: ShieldCheck, t: "End-to-End Security", d: "Encrypted data ensures your shipment details remain confidential." },
                      { icon: Clock, t: "Milestone Tracking", d: "Get notified at every critical transit hub across India." },
                      { icon: MapPin, t: "GPS Precision", d: "Live fleet positioning for time-sensitive air cargo." }
                    ].map((feature, i) => (
                      <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-gray-50 hover:shadow-xl transition-all group">
                         <div className="w-14 h-14 rounded-2xl bg-white text-[#3EA9D8] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#3EA9D8] group-hover:text-white transition-all">
                            <feature.icon size={28} />
                         </div>
                         <h3 className="text-xl font-black text-[#1D1860] mb-3">{feature.t}</h3>
                         <p className="text-gray-500 text-sm font-medium leading-relaxed">{feature.d}</p>
                      </div>
                    ))}
                 </motion.div>
               ) : (
                 <motion.div 
                   key="result"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="max-w-4xl mx-auto"
                 >
                    <div className="bg-[#1D1860] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
                       <div className="relative z-10">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-white/10">
                             <div>
                                <span className="text-[#3EA9D8] font-black uppercase text-[10px] tracking-widest mb-1 block">Consignment Status</span>
                                <h2 className="text-2xl font-black">AWB: {trackingNumber || "DAE9283712"}</h2>
                             </div>
                             <div className="bg-emerald-500 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest flex items-center">
                                <CheckCircle2 size={14} className="mr-2" /> In Transit
                             </div>
                          </div>

                          <div className="space-y-8 relative">
                             {/* Line */}
                             <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#3EA9D8] to-white/10"></div>
                             
                             {[
                               { status: "Package Received", loc: "Delhi Gateway HQ", time: "Oct 12, 09:30 AM", active: true },
                               { status: "Processing in Hub", loc: "Gurgaon Logistics Center", time: "Oct 12, 02:45 PM", active: true },
                               { status: "Out for Transit", loc: "En-Route to Metro", time: "In Progress", active: false }
                             ].map((step, i) => (
                                <div key={i} className="flex gap-10 items-start">
                                   <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-[#1D1860] ${step.active ? "bg-[#3EA9D8] text-white" : "bg-white/10 text-white/30"}`}>
                                      {step.status.includes("Package") ? <Box size={20} /> : <Truck size={20} />}
                                   </div>
                                   <div>
                                      <h4 className={`font-black text-sm uppercase tracking-widest ${step.active ? "text-white" : "text-white/30"}`}>{step.status}</h4>
                                      <p className="text-gray-400 text-xs font-bold">{step.loc} | {step.time}</p>
                                   </div>
                                </div>
                             ))}
                          </div>
                          
                          <button 
                            onClick={() => setShowResult(false)}
                            className="mt-12 text-[#3EA9D8] font-black text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center"
                          >
                             BACK TO SEARCH <ArrowRight className="ml-2 w-4 h-4" />
                          </button>
                       </div>
                       <div className="absolute top-0 right-0 w-96 h-96 bg-[#3EA9D8]/5 rounded-full blur-[100px]"></div>
                    </div>
                 </motion.div>
               )}
            </AnimatePresence>
         </div>
      </section>

      {/* 3. Global Network Stats - Small Row */}
      <section className="py-12 bg-slate-50 border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Network Capability</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
               <div>
                  <div className="text-2xl font-black text-[#1D1860]"><CounterValue to={19} />k+</div>
                  <div className="text-[#3EA9D8] font-bold text-[9px] uppercase tracking-widest">Active Pincodes</div>
               </div>
               <div>
                  <div className="text-2xl font-black text-[#1D1860]"><CounterValue to={27} /></div>
                  <div className="text-[#3EA9D8] font-bold text-[9px] uppercase tracking-widest">Strategic Hubs</div>
               </div>
               <div>
                  <div className="text-2xl font-black text-[#1D1860]"><CounterValue to={99.8} decimals={1} />%</div>
                  <div className="text-[#3EA9D8] font-bold text-[9px] uppercase tracking-widest">Tracking Accuracy</div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
