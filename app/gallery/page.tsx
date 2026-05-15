"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/b1.jpeg", alt: "Logistics 1" },
  { src: "/b2.jpeg", alt: "Logistics 2" },
  { src: "/b3.jpeg", alt: "Logistics 3" },
  { src: "/b4.jpeg", alt: "Logistics 4" },
  { src: "/b5.jpeg", alt: "Logistics 5" },
  { src: "/b6.jpeg", alt: "Logistics 6" },
  { src: "/b7.jpeg", alt: "Logistics 7" },
  { src: "/banner.jpg", alt: "Logistics Banner" }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 md:pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#1D1860] mb-4"
        >
          Our Visual Journey
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-800 text-lg max-w-2xl mx-auto font-bold"
        >
          Explore our logistics excellence through pictures. From fleet to warehousing, we ensure quality at every step.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg border-b-2 border-[#3EA9D8] pb-1">View Image</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
