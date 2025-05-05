import React, { useState } from "react";
import {
  Globe,
  Search,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const EcosystemSection = () => {
    // State for search input
    const [searchTerm, setSearchTerm] = useState('');
    
    // Animation variants (reusing from BenefitsSection)
    const fadeUpVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] },
      },
    };
  
    const cardHoverVariants = {
      rest: { scale: 1, y: 0, boxShadow: "0 0 0 rgba(223, 254, 0, 0)" },
      hover: { 
        scale: 1.02, 
        y: -5,
        boxShadow: "0 8px 20px rgba(223, 254, 0, 0.15)",
        transition: { duration: 0.2 }
      }
    };
  
    // Mock data for ecosystem entries
    const ecosystemEntries = [
      {
        id: 1,
        name: "0x",
        description: "0x allows you to embed swaps in any onchain app. Tap into aggregated liquidity from 130+ sources, best prices & optimal trade execution.",
        profileImage: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9106b6ca74a7001624998_0x_logo.webp",
        backgroundImage: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b910681d1e917a4b1a10d9_0x_banner.webp",
        category: "Infra",
        tags: ["Dev Tooling", "Other Infra"]
      },
      {
        id: 2,
        name: "AUSD",
        description: "Agora is a stablecoin issuer of AUSD, backed 1:1 by cash and cash equivalent reserves managed by VanEck and custodied by State Street.",
        profileImage: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c620f4a0bab10af98e0508_ausd.webp",
        backgroundImage: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c620f148f4cde61d6cf7fb_ausd%20(1).webp",
        category: "Infra",
        tags: ["DeFi", "RWA", "Payments"]
      },
      {
        id: 3,
        name: "AZEx",
        description: "Your A-Z DeFi Hub in One Click. Trade any asset as margin with 100x leverage. Multi-Chain Protocol. AI-Powered Copytrading.",
        profileImage: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67e316cec7faf77a521ebdc3_AZEX-icon-wht-background-300x300.webp",
        backgroundImage: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67e316c93c4aa7bb9abb6b5c_azex%20banner.webp",
        category: "App",
        tags: ["DeFi"]
      }
    ];
  
    // Filter entries based on search term
    const filteredEntries = ecosystemEntries.filter(entry =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <section className="w-full py-16 bg-black text-zinc-200 overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(223, 254, 0, 0.1)" }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.div
            className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(223, 254, 0, 0.1)" }}
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </div>
  
        {/* Background dot matrix */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff08 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
  
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="mb-12 text-center">
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Ecosystem
            </motion.h2>
            
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-zinc-400"
            >
              Apps & Infrastructure <span className="text-[#dffe00] font-medium">Live on Testnet</span>
            </motion.p>
          </div>
  
          {/* Filters and search */}
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-zinc-400 mr-2 font-medium">Categories</span>
              
              <div className="relative">
                <select className="bg-zinc-900 text-white rounded-lg border border-zinc-800 py-2 px-4 pr-10 appearance-none cursor-pointer hover:border-[#dffe00] transition-all focus:border-[#dffe00] focus:ring-1 focus:ring-[#dffe00]">
                  <option>App</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select className="bg-zinc-900 text-white rounded-lg border border-zinc-800 py-2 px-4 pr-10 appearance-none cursor-pointer hover:border-[#dffe00] transition-all focus:border-[#dffe00] focus:ring-1 focus:ring-[#dffe00]">
                  <option>Infra</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <button className="bg-zinc-900 text-white rounded-lg border border-zinc-800 py-2 px-4 hover:border-[#dffe00] transition-all">
                Reset
              </button>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search Ecosystem"
                className="bg-zinc-900 text-white rounded-lg border border-zinc-800 py-2 px-4 pl-10 w-64 focus:outline-none focus:border-[#dffe00] focus:ring-1 focus:ring-[#dffe00] transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            </div>
          </div>
          
          {/* Results count */}
          <div className="mb-8">
            <p className="text-zinc-400">
              Showing <span className="font-medium text-white">232</span> matching results.
            </p>
          </div>
          
          {/* Grid of results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEntries.map((entry) => (
              <motion.div
                key={entry.id}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="rounded-2xl overflow-hidden relative border border-zinc-800/50 backdrop-blur-sm"
                style={{
                  background: "linear-gradient(to bottom right, rgba(30, 30, 30, 0.8), rgba(20, 20, 20, 0.9))"
                }}
              >
                <div className="relative h-32 overflow-hidden">
                  {/* Background image with overlay */}
                  <img 
                    src={entry.backgroundImage} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-black opacity-20"></div>
  
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">{entry.category}</span>
                  </div>
                  <div className="absolute top-4 right-16 z-10">
                    <button className="bg-black bg-opacity-70 text-white p-1 rounded-md hover:bg-[#dffe00] hover:text-black transition-all">
                      <Twitter className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-24 z-10">
                    <button className="bg-black bg-opacity-70 text-white p-1 rounded-md hover:bg-[#dffe00] hover:text-black transition-all">
                      <Globe className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="relative p-6">
                  <div className="absolute -top-10 left-6 w-16 h-16 rounded-full bg-zinc-900 border-4 border-black flex items-center justify-center overflow-hidden shadow-lg" style={{ boxShadow: "0 0 15px rgba(223, 254, 0, 0.15)" }}>
                    <img src={entry.profileImage} alt={entry.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="pt-8">
                    <h3 className="text-xl font-bold mb-2 text-white">{entry.name}</h3>
                    <p className="text-zinc-400 mb-4 text-sm leading-relaxed">{entry.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs text-zinc-400 bg-zinc-800/80 rounded-md px-2 py-1 hover:bg-zinc-700/80 transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default EcosystemSection;