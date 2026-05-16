"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Search, ShieldCheck, Clock, MapPin,
  ArrowRight, CheckCircle2, Box, Truck, Package,
  Info, AlertCircle, RotateCcw
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

// Helper function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

// Get status color and icon
const getStatusDetails = (status: string) => {
  switch (status.toLowerCase()) {
    case 'delivered':
      return { color: 'bg-emerald-500', icon: CheckCircle2, label: 'Delivered' };
    case 'out for delivery':
      return { color: 'bg-blue-500', icon: Truck, label: 'Out for Delivery' };
    case 'in transit':
      return { color: 'bg-amber-500', icon: Package, label: 'In Transit' };
    case 'picked up':
      return { color: 'bg-purple-500', icon: Box, label: 'Picked Up' };
    default:
      return { color: 'bg-gray-500', icon: Info, label: status };
  }
};

interface TrackingHistoryItem {
  status_id: number;
  courier_id: number;
  status: string;
  location: string | null;
  remarks: string | null;
  updated_at: string;
}

export default function Track() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [trackingError, setTrackingError] = useState<string | null>(null);
  const [trackingData, setTrackingData] = useState<TrackingHistoryItem[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsTracking(true);
    setTrackingError(null);
    setTrackingData(null);
    setHasSearched(true);

    try {
      // Fetch tracking history from API
      const response = await fetch(`https://courier-main.vercel.app/api/couriers/${trackingNumber}/track-courier`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("No shipment found with this tracking number");
        }
        throw new Error("Failed to fetch tracking data");
      }

      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("No tracking history available for this shipment");
      }

      // Sort by updated_at descending (newest first)
      const sortedData = [...data].sort((a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );

      setTrackingData(sortedData);
    } catch (error) {
      setTrackingError(error instanceof Error ? error.message : "An error occurred while tracking");
      setTrackingData(null);
    } finally {
      setIsTracking(false);
    }
  };

  const resetSearch = () => {
    setHasSearched(false);
    setTrackingData(null);
    setTrackingError(null);
    setTrackingNumber("");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Get current status (first item since sorted newest first)
  const currentStatus = trackingData && trackingData.length > 0 ? trackingData[0].status : null;
  const statusDetails = currentStatus ? getStatusDetails(currentStatus) : null;

  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-white overflow-x-hidden pt-16 md:pt-20">

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
              Trace Your Shipments <br />
              <span className="text-[#3EA9D8]">With Surgical Precision</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-gray-100 text-sm md:text-lg mb-10 max-w-xl font-bold"
            >
              Access high-fidelity tracking data for your air and surface consignments. Enter your AWB or Reference number below.
            </motion.p>

            {/* Premium Tracking Input */}
            <motion.form
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              onSubmit={handleTrack}
              className="relative max-w-2xl group flex flex-col md:block"
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <Search className="text-[#3EA9D8] w-5 h-5 md:w-6 md:h-6" />
                </div>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="AWB / Ref No."
                  className="w-full bg-white/10 backdrop-blur-2xl border-2 border-white/10 text-white rounded-2xl md:rounded-3xl py-5 md:py-6 pl-14 md:pl-16 pr-4 md:pr-44 focus:outline-none focus:border-[#3EA9D8] transition-all text-sm md:text-base font-bold placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  disabled={isTracking}
                  className="hidden md:flex absolute right-3 top-3 bottom-3 bg-[#3EA9D8] hover:bg-white hover:text-[#1D1860] text-white px-8 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 items-center shadow-xl disabled:opacity-50"
                >
                  {isTracking ? "Processing..." : "Track Now"}
                </button>
              </div>
              <button
                type="submit"
                disabled={isTracking}
                className="md:hidden mt-4 bg-[#3EA9D8] hover:bg-white hover:text-[#1D1860] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center shadow-xl disabled:opacity-50"
              >
                {isTracking ? "Processing..." : "Track Now"}
              </button>
            </motion.form>

            {/* Loading indicator */}
            <AnimatePresence>
              {isTracking && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-[#3EA9D8] text-sm font-bold flex items-center gap-2"
                >
                  <div className="w-4 h-4 border-2 border-[#3EA9D8]/30 border-t-[#3EA9D8] rounded-full animate-spin" />
                  Fetching real-time shipment data...
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Decorative Light */}
        <div className="absolute top-0 right-0 w-[500px] h-full bg-[#3EA9D8]/5 blur-[120px] -z-10"></div>
      </section>

      {/* 2. Tracking Results Section - Shows when user searches */}
      <AnimatePresence mode="wait">
        {hasSearched && (
          <motion.section
            key="tracking-results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {trackingError ? (
                // Error State
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center"
                >
                  <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <AlertCircle className="w-10 h-10 text-red-500" />
                  </div>
                  <h3 className="text-xl font-black text-red-700 mb-2">Shipment Not Found</h3>
                  <p className="text-red-600 mb-6">{trackingError}</p>
                  <button
                    onClick={resetSearch}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors"
                  >
                    <RotateCcw size={18} />
                    Try Another Tracking Number
                  </button>
                </motion.div>
              ) : trackingData && trackingData.length > 0 ? (
                // Tracking Results
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-[#1D1860] px-6 md:px-8 py-6 text-white">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <span className="text-[#3EA9D8] font-black uppercase text-[10px] tracking-widest">Tracking Details</span>
                        <h2 className="text-2xl font-black mt-1">AWB: {trackingNumber}</h2>
                      </div>
                      <div className={`${statusDetails?.color} text-white px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg`}>
                        {statusDetails && (
                          <>
                            <statusDetails.icon size={14} />
                            {statusDetails.label}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                      <Clock size={16} />
                      Shipment History Timeline
                    </h3>

                    <div className="relative">
                      {/* Vertical Line */}
                      <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-t from-[#3EA9D8] via-gray-300 to-gray-200 rounded-full"></div>

                      <div className="space-y-6">
                        {trackingData.reverse().map((item, index) => {
                          
                          const isLatest = index === trackingData.length - 1;
                          const itemStatusDetails = getStatusDetails(item.status);
                          const StatusIcon = itemStatusDetails.icon;

                          return (
                            <motion.div
                              key={item.status_id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={`relative flex gap-5 items-start group ${isLatest
                                  ? 'items-end' : 'items-start'
                                }`}
                            >
                              {/* Timeline Dot */}
                              <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 ${isLatest
                                  ? `${itemStatusDetails.color} ring-4 ring-opacity-30 ${itemStatusDetails.color.replace('bg', 'ring')} animate-pulse`
                                  : 'bg-white border-2 border-gray-200'
                                }`}>
                                {isLatest ? (
                                  <StatusIcon size={20} className="text-white" />
                                ) : (
                                  <div className={`w-3 h-3 rounded-full ${itemStatusDetails.color}`}></div>
                                )}
                              </div>

                              {/* Content */}
                              <div className={`flex-1 ${isLatest
                                  ? 'pb-0' : 'pb-6'
                                }`}>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                  <h4 className={`font-black text-sm uppercase tracking-wide ${isLatest ? 'text-[#1D1860]' : 'text-gray-700'
                                    }`}>
                                    {item.status}
                                    {/* {isLatest && (
                                      <span className="ml-2 text-[10px bg-[#3EA9D8]/10 text-[#3EA9D8] px-2 py-0.5 rounded-full">
                                        CURRENT
                                      </span>
                                    )} */}
                                  </h4>
                                  <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                                    <Clock size={10} />
                                    {formatDate(item.updated_at)}
                                  </span>
                                </div>

                                {item.location && (
                                  <p className="text-sm text-gray-600 font-medium flex items-center gap-1 mt-1">
                                    <MapPin size={12} className="text-[#3EA9D8]" />
                                    {item.location}
                                  </p>
                                )}

                                {item.remarks && (
                                  <p className="text-xs text-gray-500 mt-1 italic">
                                    "{item.remarks}"
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Reset Button */}
                    <div className="mt-10 pt-6 border-t border-gray-100 flex justify-center">
                      <button
                        onClick={resetSearch}
                        className="text-[#3EA9D8] hover:text-[#1D1860] font-black text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                      >
                        <RotateCcw size={14} />
                        Track Another Shipment
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 3. Why Trust Our Tracking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
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
                  <p className="text-gray-700 text-sm font-bold leading-relaxed">{feature.d}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Global Network Stats */}
      <section className="py-12 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Network Capability</p>
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