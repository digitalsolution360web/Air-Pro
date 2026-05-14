"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
  { name: "Track", href: "/track" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 w-full z-50 flex justify-center pointer-events-none transition-all duration-500 ease-out ${isScrolled ? "top-0 mt-4 px-4" : "top-0 mt-0 px-0"}`}>
      <nav className={`pointer-events-auto w-full transition-all duration-500 ease-out ${isScrolled ? "max-w-7xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_15px_40px_-15px_rgba(29,24,96,0.15)] rounded-2xl md:rounded-full" : "max-w-full bg-white shadow-md border-b border-gray-100 rounded-none bg-opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? "h-20" : "h-24"}`}>
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center pr-4">
              <Link href="/">
                <Image
                  src="/logo1.png"
                  alt="Brand Logo"
                  width={130}
                  height={42}
                  className="cursor-pointer object-contain hover:scale-105 transition-transform duration-300"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-3 bg-slate-50/50 rounded-full px-2 py-1 border border-black/5">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#1D1860] relative group font-semibold text-[15px] px-4 py-2 rounded-full transition-all duration-300 hover:text-[#3EA9D8]"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Premium hover pill background */}
                  <span className="absolute inset-0 bg-[#3EA9D8]/10 rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out z-0"></span>
                </Link>
              ))}
            </div>

            {/* Login Button Section */}
            <div className="hidden md:flex items-center pl-4">
              <Link href="/https://courier-main.vercel.app/dashboard">
                <button className="relative overflow-hidden bg-[#1D1860] text-white px-8 py-2.5 rounded-full font-bold text-[15px] shadow-[0_4px_14px_0_rgba(29,24,96,0.25)] hover:shadow-[0_6px_20px_rgba(62,169,216,0.3)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <span className="relative z-10">Login / Sign In</span>
                  {/* Subtle shine effect */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#1D1860] bg-slate-100 p-2 rounded-full hover:bg-slate-200 focus:outline-none transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-24 left-0 w-full px-4"
            >
              <div className="bg-white/95 backdrop-blur-xl shadow-2xl border border-white/50 rounded-2xl overflow-hidden p-3 mt-2">
                <div className="space-y-1">
                  {NavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-[#1D1860] hover:text-[#3EA9D8] hover:bg-[#3EA9D8]/5 rounded-xl font-semibold text-[16px] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-3 pb-2 px-1">
                    <Link href="/https://courier-main.vercel.app/dashboard" onClick={() => setIsOpen(false)}>
                      <button className="w-full bg-[#1D1860] hover:bg-[#151147] text-white px-4 py-3.5 rounded-xl transition-all shadow-lg font-bold text-[16px]">
                        Login Account
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
