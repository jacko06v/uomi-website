import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/Home";
import EcosystemPage from "./Pages/Ecosystem";
import Page404 from "./Pages/Page404";
import WaspPage from "./Pages/WaspPage";
import WhitepaperPage from "./Pages/WhitepaperPage";
import ConsensusPage from "./Pages/ConsensusPage";
import OPoCPresentation from "./Pages/Opoc";
import Docs from "./Pages/DocsPage";
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';
import Determinism from './Pages/Deterministc-indeterminism';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <Router>
      <div className={`min-h-screen bg-black text-white`}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/wasp" element={<WaspPage />} />
          <Route path="/whitepaper" element={<WhitepaperPage />} />
          <Route path="/consensus" element={<ConsensusPage />} />
          <Route path="/opoc" element={<OPoCPresentation />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/deterministc-indeterminism" element={<Determinism />} />
      



        </Routes>
        
        
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;


const Hero = () => {
  // Reference for the canvas
  const useRef = React.useRef;
  const useEffect = React.useEffect;
  const canvasRef = useRef(null);

  // Animation for matrix/binary code in background
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Characters for the matrix effect (binary, hex, and other symbols)
    const chars = "01アイウエオカキクケコサシスセソタチツテト々〆〇ー・:/.";

    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to track the y position of each column
    const drops = Array(columns).fill(0);

    // Draw the matrix effect
    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text styles
      ctx.fillStyle = "#dffe00"; // Updated to the new color
      ctx.font = `${fontSize}px monospace`;

      // Loop through and draw each character
      for (let i = 0; i < drops.length; i++) {
        // Random character from the chars string
        const char = chars[Math.floor(Math.random() * chars.length)];

        // Draw the character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Move down a row after drawing random character
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Randomly reset some drops
        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* Matrix animation canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40 z-0"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-30 z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Main Content Area - 8 columns on large screens */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              <span style={{ color: "#dffe00" }}>UOMI IS</span>
              <br />
              <span className="text-white">WHERE AI MEETS</span>
              <br />
              <span className="text-white">DECENTRALIZATION</span>
            </h1>

              <p className="text-lg text-zinc-300 max-w-3xl mt-6">
                UOMI brings DeFi to the next billion users through modular
                scalability, AI-native infrastructure, and unstoppable ai economic agents.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 pt-6"
              variants={itemVariants}
            >
              <motion.button
                className="text-black px-8 py-3.5 rounded font-bold shadow-lg flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "#dffe00",
                  boxShadow: "0 10px 15px -3px rgba(223, 254, 0, 0.2)",
                }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#c8e500", // Slightly darker variant on hover
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>LAUNCH APP</span>
              </motion.button>

              <motion.button
                className="px-8 py-3.5 rounded font-bold border border-zinc-700 hover:border-zinc-600 flex items-center justify-center gap-2 shadow-md shadow-black/20 bg-zinc-900/50 backdrop-blur-sm"
                whileHover={{
                  scale: 1.02,
                  borderColor: "#dffe00", // Highlight border with the main color
                  backgroundColor: "rgba(39, 39, 42, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>LEARN MORE</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Hero2 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const chars = "01アイウエオカキクケコサシスセソタチツテト々〆〇ー・:/.";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#dffe00";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
      <div className="absolute inset-0 opacity-20 z-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-36 relative z-20">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            variants={itemVariants}
          >
          
              <span style={{ color: "#dffe00" }}>UOMI IS</span>
              <br />
              <span className="text-white">WHERE AI MEETS</span>
              <br />
              <span className="text-white">DECENTRALIZATION</span>
 
          </motion.h1>

          <motion.p
            className="text-lg text-zinc-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            UOMI enables the future of autonomous agents and decentralized finance through scalable, AI-optimized infrastructure for developers and users worldwide.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-5 pt-4"
            variants={itemVariants}
          >
            <motion.button
              className="text-black px-8 py-3.5 rounded font-bold shadow-xl"
              style={{
                backgroundColor: "#dffe00",
                boxShadow: "0 12px 20px -5px rgba(223, 254, 0, 0.4)",
              }}
              whileHover={{ scale: 1.03, backgroundColor: "#c8e500" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>JOIN THE NETWORK</span>
            </motion.button>

            <motion.button
              className="px-8 py-3.5 rounded font-bold border border-zinc-700 hover:border-zinc-600 bg-zinc-900/60 backdrop-blur-md shadow-md"
              whileHover={{
                scale: 1.03,
                borderColor: "#dffe00",
                backgroundColor: "rgba(63, 63, 70, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>READ THE WHITEPAPER</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
