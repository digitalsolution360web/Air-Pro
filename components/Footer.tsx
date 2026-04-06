import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, MapPin, Phone, Mail, ShieldCheck, Globe, Clock } from "lucide-react";

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0A30] text-gray-300 pt-24 pb-12 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3EA9D8]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1D1860]/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info (Spans 4 columns on large screens) */}
          <div className="lg:col-span-4 space-y-7">
            <div className="bg-white inline-block p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <Image
                src="/logo1.png"
                alt="Brand Logo"
                width={150}
                height={50}
                style={{ height: 'auto', width: 'auto' }}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-[15px] pr-4">
              Pioneering the future of global logistics and express tracking. We deliver unparalleled precision and security for your most critical assets across borders.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <FacebookIcon size={18} />, label: "Facebook" },
                { icon: <TwitterIcon size={18} />, label: "Twitter" },
                { icon: <InstagramIcon size={18} />, label: "Instagram" },
                { icon: <LinkedinIcon size={18} />, label: "LinkedIn" }
              ].map((social, idx) => (
                <a key={idx} href="#" aria-label={social.label} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3EA9D8] hover:border-[#3EA9D8] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg group">
                   <span className="text-gray-400 group-hover:text-white transition-colors">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-[14px]">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Team', 'Gallery', 'Careers', 'Press & Media', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Gallery' ? '/gallery' : '#'} className="text-gray-400 hover:text-[#3EA9D8] transition-colors text-[15px] flex items-center group">
                    <span className="w-0 h-[1px] bg-[#3EA9D8] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-[14px]">Services</h3>
            <ul className="space-y-4">
              {['Live Tracking', 'Air Freight', 'Ocean Cargo', 'Secure Warehousing', 'Customs'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-[#3EA9D8] transition-colors text-[15px] flex items-center group">
                    <span className="w-0 h-[1px] bg-[#3EA9D8] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Spans 4 columns) */}
          <div className="lg:col-span-4 bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-[#3EA9D8]/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3EA9D8]/10 rounded-full blur-[40px] group-hover:bg-[#3EA9D8]/20 transition-colors duration-500"></div>
            
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-[14px] relative z-10">Get In Touch</h3>
            
            <ul className="space-y-5 relative z-10">
              <li className="flex items-start">
                <div className="mt-1 mr-4 bg-[#3EA9D8]/20 p-2 rounded-lg text-[#3EA9D8]">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-[15px]">Global Headquarters</h4>
                  <p className="text-gray-400 text-sm mt-1">123 Express Avenue, Suite 400<br/>New York, NY 10001</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-4 bg-[#3EA9D8]/20 p-2 rounded-lg text-[#3EA9D8]">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-[15px]">24/7 Support</h4>
                  <p className="text-gray-400 text-sm mt-1">+1 (800) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-4 bg-[#3EA9D8]/20 p-2 rounded-lg text-[#3EA9D8]">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-[15px]">Email Us</h4>
                  <p className="text-gray-400 text-sm mt-1">support@airexpress.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Stats / Trust row */}
        <div className="py-8 border-y border-white/10 flex flex-wrap gap-6 justify-between items-center mb-10">
           <div className="flex items-center space-x-3 text-gray-400">
             <Globe className="text-[#3EA9D8] w-6 h-6" />
             <span className="font-medium text-white">Global Reach:</span>
             <span>150+ Countries</span>
           </div>
           <div className="flex items-center space-x-3 text-gray-400">
             <ShieldCheck className="text-[#3EA9D8] w-6 h-6" />
             <span className="font-medium text-white">Security:</span>
             <span>Enterprise Grade AES-256</span>
           </div>
           <div className="flex items-center space-x-3 text-gray-400">
             <Clock className="text-[#3EA9D8] w-6 h-6" />
             <span className="font-medium text-white">Support:</span>
             <span>24/7/365 Active Monitoring</span>
           </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Deb Air Express. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
