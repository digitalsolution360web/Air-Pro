"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users, Award, ShieldCheck, Mail, Phone,
  MoveRight, Globe, Share2, ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

export default function Team() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const team = [
    {
      img: "/team.jpg",
      // desc: "Driving the strategic vision of Deb Air Express with over 27 years of logistical leadership and innovation.",
      socials: ["#", "#", "#"]
    },
    {
      name: "Lalan Kumar Singh",
      role: "Operations Director",
      img: "/team1.jpg",
      desc: "Ensuring seamless surface and air cargo movements across the nationwide multi-modal network.",
      socials: ["#", "#", "#"]
    },
    {


      img: "/team2.jpg",
      // desc: "Optimizing our proprietary tracking infrastructure and sustainable fleet management systems.",
      socials: ["#", "#", "#"]
    }
  ];

  const SocialLogos = [
    // LinkedIn SVG
    () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    // Twitter/X SVG
    () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    // Facebook SVG
    () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
    )
  ];

  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-white overflow-x-hidden pt-24">

      {/* 1. Cinematic Header Banner */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#06041A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/b7.jpeg"
            alt="Our Team"
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
            The Pillars of Deb Air Express
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            The Visionaries Behind <br />
            <span className="text-[#3EA9D8]">Indian Logistics</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-gray-400 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Meet the leadership team dedicated to moving your business forward with precision, transparency, and 27 years of industrial excellence.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-full bg-[#3EA9D8]/5 blur-[120px] -z-10"></div>
      </section>

      {/* 2. Team Grid Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                {/* Card Image Wrapper */}
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl border-8 border-gray-50 group-hover:border-[#3EA9D8]/10 transition-all">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  {/* Overlay On Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#1D1860] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-4 justify-center">
                      {SocialLogos.map((Logo, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#3EA9D8] transition-all">
                          <Logo />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <span className="text-[#3EA9D8] font-black uppercase text-[10px] tracking-widest mb-3 block">{member.role}</span>
                  <h3 className="text-2xl font-black text-[#1D1860] mb-4">{member.name}</h3>
                  {member.desc && (
                    <p className="text-gray-500 text-sm font-medium leading-relaxed italic opacity-80 max-w-[280px] mx-auto">
                      "{member.desc}"
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brand Background Text (Subtle) */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 font-black text-[15rem] text-gray-50 pointer-events-none select-none -z-10 uppercase tracking-tighter opacity-50 font-sans">
          LEGACY
        </div>
      </section>

      {/* 3. Core Values Row */}
      <section className="py-16 bg-[#f4f9fc] border-y border-[#3EA9D8]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Award, t: "Visionary Leadership", d: "Founded by industry veterans with deep roots in aviation and surface cargo." },
              { icon: ShieldCheck, t: "Trusted Across Sectors", d: "Serving Fortune 500 companies and critical SMEs across India." },
              { icon: Users, t: "135+ Strong Workforce", d: "Our success is driven by a passionate team of logistics engineers." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start p-8 rounded-3xl bg-white border border-gray-100/50 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-[#06041A] text-[#3EA9D8] flex items-center justify-center shrink-0 shadow-lg">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="font-black text-[#1D1860] text-sm uppercase tracking-wider mb-2">{item.t}</h4>
                  <p className="text-gray-500 text-xs font-semibold leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Join the Team CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1D1860] rounded-[3.5rem] p-10 md:p-16 text-center text-white relative shadow-2xl overflow-hidden group"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 leading-tight">Ready to Drive the Future of <br /> <span className="text-[#3EA9D8]">Indian Logistics?</span></h2>
              <p className="text-gray-400 font-medium mb-10 text-sm md:text-base opacity-90 max-w-md mx-auto">
                We are always looking for passionate logistics experts to join our growing Pan-India network.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="bg-[#3EA9D8] hover:bg-white hover:text-[#1D1860] text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center">
                  Contact HR Lead <MoveRight className="ml-3" />
                </Link>
              </div>
            </div>
            {/* Decorative background light */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3EA9D8]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#3EA9D8]/20 transition-all duration-700"></div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
