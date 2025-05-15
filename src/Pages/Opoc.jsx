import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

// Mathematical formula SVG component
const ProbabilityFormula = () => (
  <svg viewBox="0 0 320 80" className="w-full max-w-md mx-auto my-6">
    <text x="10" y="40" fill="#c8e500" fontSize="16" fontFamily="serif" fontStyle="italic">P(X = 0) = </text>
    <text x="90" y="25" fill="white" fontSize="16" fontFamily="serif" fontStyle="italic">( V-H )</text>
    <text x="90" y="55" fill="white" fontSize="16" fontFamily="serif" fontStyle="italic">( V )</text>
    <line x1="90" y1="40" x2="135" y2="40" stroke="white" strokeWidth="1" />
    <text x="145" y="40" fill="white" fontSize="16" fontFamily="serif" fontStyle="italic">≈ 7.6 × 10⁻⁶</text>
    <text x="270" y="40" fill="#c8e500" fontSize="16" fontFamily="serif" fontStyle="italic">→ 0</text>
  </svg>
);

const TypingText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 40);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isInView, text]);
  
  return <p ref={ref} className={className}>{displayText}<span className="animate-pulse">|</span></p>;
};

const sections = [
  {
    title: 'The Challenge',
    subtitle: 'Bringing AI to Blockchain',
    text: 'Traditional consensus algorithms like Proof of Work (PoW) and Proof of Stake (PoS) were never designed to verify heavy AI computations. Having every node verify each step of a large model execution would be prohibitively expensive and impossibly slow.',
    detail: 'Running a state-of-the-art AI model can require trillions of operations. If every validator had to verify these operations, network costs would be astronomical.',
    color: '#c8e500'
  },
  {
    title: 'The OPoC Solution',
    subtitle: 'Optimistic Validation',
    text: "OPoC (Optimistic Proof of Computation) leverages economic security and probabilistic guarantees instead of full network verification. A small subset of validators is randomly selected for each computation, creating a system that's both secure and efficient.",
    detail: 'This approach transforms an exponential verification problem into a linear one, making decentralized AI computation practical for the first time.',
    color: '#c8e500'
  },
  {
    title: 'How It Works',
    subtitle: 'Selective Verification',
    text: "Only a small, randomly selected subset of validators from the network performs each AI inference. If all selected validators agree on the result, it's accepted. If there's disagreement, the verification escalates to more validators.",
    detail: 'Byzantine (dishonest) validators are identified and penalized through token slashing, creating strong economic incentives for honest participation.',
    color: '#c8e500'
  },
  {
    title: 'Security Guarantees',
    subtitle: 'Mathematical Assurance',
    text: 'The probability that all selected validators are dishonest drops exponentially as the network grows. With even modest validator pools, the probability of successful fraud becomes vanishingly small.',
    detail: 'For a network with 100 validators where 10 validate each computation, the probability of selecting all dishonest validators (assuming 1/3 are dishonest) is approximately 0.0000076.',
    color: '#c8e500'
  },
  {
    title: 'Economic Security',
    subtitle: 'Financial Incentives',
    text: 'Each validator stakes tokens to participate. Attempting to cheat carries a slashing risk where these tokens are lost. The cost of successful fraud increases exponentially with network size.',
    detail: 'With a $10,000 stake per validator, the economic security of each computation can reach billions of dollars, making attacks financially irrational.',
    color: '#c8e500'
  },
  {
    title: 'Scaling Capability',
    subtitle: 'Linear Growth',
    text: 'As more nodes join the network, OPoC enables more parallel inferences by assigning each validator subset independently. This allows throughput to increase linearly with network size.',
    detail: "Unlike traditional consensus where adding nodes increases redundant computation, OPoC leverages new validators to increase the network's parallel processing capacity.",
    color: '#c8e500'
  },
  {
    title: 'Deterministic Output',
    subtitle: 'Consistency Guarantees',
    text: 'To ensure validators compute consistent outputs across different hardware, OPoC employs quantization techniques and stable randomness methods.',
    detail: 'Fixed PRNG seeds and integer-based inference models eliminate floating-point inconsistencies that could cause false disputes between honest validators.',
    color: '#c8e500'
  }
];

const StatCounter = ({ value, label, duration = 2000, symbol = "×" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl font-bold text-white mb-2">{count}{symbol}</span>
      <span className="text-white/60 text-lg text-center">{label}</span>
    </div>
  );
};

const ComparisonTable = () => {
  const tableRef = useRef(null);
  const isInView = useInView(tableRef, { once: true, margin: "-100px 0px" });
  
  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({ 
      opacity: 1, 
      x: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      } 
    })
  };
  
  return (
    <div ref={tableRef} className="w-full overflow-x-auto mt-12 mb-16">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left p-4 text-white/60">Approach</th>
            <th className="text-left p-4 text-white/60">Verification Cost</th>
            <th className="text-left p-4 text-white/60">Scaling</th>
            <th className="text-left p-4 text-white/60">Security</th>
          </tr>
        </thead>
        <tbody>
          <motion.tr 
            custom={0}
            variants={rowVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="border-b border-white/10"
          >
            <td className="p-4">Traditional PoW/PoS</td>
            <td className="p-4 text-red-400">Full network verification</td>
            <td className="p-4 text-red-400">Cost increases with nodes</td>
            <td className="p-4">Consensus-based</td>
          </motion.tr>
          <motion.tr 
            custom={1}
            variants={rowVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="border-b border-white/10"
          >
            <td className="p-4">ZK Proofs</td>
            <td className="p-4 text-yellow-400">Low verification, high proving</td>
            <td className="p-4 text-yellow-400">Limited by prover capacity</td>
            <td className="p-4">Cryptographic guarantees</td>
          </motion.tr>
          <motion.tr 
            custom={2}
            variants={rowVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <td className="p-4 text-[#c8e500] font-bold">OPoC</td>
            <td className="p-4 text-green-400">Subset verification</td>
            <td className="p-4 text-green-400">Linear with validators</td>
            <td className="p-4">Economic + Probabilistic</td>
          </motion.tr>
        </tbody>
      </table>
    </div>
  );
};

const NetworkDiagram = () => {
  return (
    <svg viewBox="0 0 400 200" className="w-full max-w-lg mx-auto my-8">
      {/* Network nodes */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 80;
        const x = 200 + radius * Math.cos(angle);
        const y = 100 + radius * Math.sin(angle);
        
        return (
          <motion.circle 
            key={i}
            cx={x}
            cy={y}
            r={i < 3 ? 8 : 4}
            fill={i < 3 ? "#c8e500" : "rgba(255,255,255,0.3)"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          />
        );
      })}
      
      {/* Connections between selected validators */}
      <motion.path 
        d="M 248 48 L 201 172 M 201 172 L 152 47 M 152 47 L 248 48" 
        stroke="#c8e500" 
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      
      {/* Central computation node */}
      <motion.circle 
        cx="200" 
        cy="100" 
        r="15" 
        fill="rgba(200,229,0,0.2)" 
        stroke="#c8e500"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      />
      
      <motion.text 
        x="200" 
        y="210" 
        textAnchor="middle" 
        fill="white" 
        fontSize="12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5 }}
      >
        Randomly selected validators (highlighted)
      </motion.text>
    </svg>
  );
};

export default function OpocExplainer() {
    const { scrollY } = useScroll();
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const scrollingSectionsRef = useRef(null);
    const stickyContainerRef = useRef(null);
    
    // Parallax effect for hero section
    const titleY = useTransform(scrollY, [0, 500], [0, 100]);
    const subtitleY = useTransform(scrollY, [0, 500], [0, 50]);
    const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);
    
    // Scroll indicator animation
    const scrollArrowY = useTransform(
      scrollY, 
      [0, 100], 
      [0, 20]
    );
    
    // Background animation
    const bgY = useTransform(scrollY, [0, 1000], [0, -100]);
    
    useEffect(() => {
      const handleScroll = () => {
        if (!scrollingSectionsRef.current || !stickyContainerRef.current) return;
        
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Get the position of the scrolling sections container
        const scrollingSectionsRect = scrollingSectionsRef.current.getBoundingClientRect();
        const stickyContainerRect = stickyContainerRef.current.getBoundingClientRect();
        
        // Only start animation when sticky container is fully visible
        // This means the top of the sticky container should be at the top of the viewport
        if (stickyContainerRect.top <= 0) {
          // Calculate which section should be active
          // Get the top position of the scrolling sections relative to the viewport
          const sectionsTopPosition = scrollingSectionsRect.top;
          
          // Calculate how far we've scrolled into the sections
          // The negative value means how far the scrolling sections have moved up
          const sectionsScrolledAmount = Math.abs(sectionsTopPosition);
          
          // Each section takes up one viewport height
          const sectionHeight = windowHeight;
          
          // Calculate the active section based on how far we've scrolled
          const newActiveSection = Math.min(
            Math.floor(sectionsScrolledAmount / sectionHeight),
            sections.length - 1
          );
          
          if (newActiveSection >= 0) {
            setActiveSection(newActiveSection);
          }
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const fadeUpVariant = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    
    const sideInVariant = {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
    };
    
    const staggerVariant = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          staggerChildren: 0.1,
          delayChildren: 0.3
        }
      }
    };
    
    const staggerItemVariant = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
      }
    };
  
  // Animated title with random character reveals
  const AnimatedTitle = ({ text, className }) => {
    // Split the text into individual characters
    const characters = text.split('');
    
    return (
      <h3 className={className}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // Random delay between 0 and 2 seconds for each character
            transition={{ 
              duration: Math.random() * 0.8 + 0.4, // Duration between 0.4s and 1.2s
              delay: Math.random() * 1.2,  // Delay between 0s and 1.2s
              ease: "easeOut" 
            }}
            viewport={{ once: true }}
            className="inline-block font-sx"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h3>
    );
  };
  
    return (
      <div ref={containerRef} className="bg-black text-white min-h-screen w-full font-sans">
        {/* Hero Section */}
        <div ref={heroRef} className="h-screen relative overflow-hidden flex flex-col justify-center items-center px-6">
          <motion.div
            style={{ y: titleY, opacity: opacityTransform }}
            className="text-center"
          >
            <AnimatedTitle
              text="Optimistic Proof of Computation"
              className="text-5xl md:text-5xl font-extrabold text-[#c8e500] leading-tight mb-8"
            />
            
            <motion.p
              style={{ y: subtitleY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              A revolutionary consensus protocol enabling efficient, secure, and scalable AI computation validation on decentralized networks.
            </motion.p>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            style={{ y: scrollArrowY, opacity: opacityTransform }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        </div>
        
        {/* Problem Statement */}
        <div className="bg-black/80 py-24 px-6 md:px-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px" }}
            variants={fadeUpVariant}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">The Problem</h2>
            <div className="h-1 w-24 bg-[#c8e500] mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  The intersection of artificial intelligence and blockchain has been hindered by a fundamental challenge: <strong className="text-white">verification overhead</strong>.
                </p>
                
                <TypingText 
                  text="Traditional consensus mechanisms require every node to verify computations—practical for financial transactions, but prohibitive for AI workloads that involve billions or trillions of operations."
                  className="text-lg text-white/70 leading-relaxed mb-6"
                />
                
                <p className="text-lg text-white/70 leading-relaxed">
                  This creates a seemingly insurmountable barrier to running machine learning models on decentralized networks.
                </p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-semibold text-[#c8e500] mb-8">The Cost of Verification</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <StatCounter value={100} label="% of Network Resources Wasted on Redundant Verification" symbol="%" />
                  <StatCounter value={1000} label="× Higher Cost for AI vs. Simple Transactions" />
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/50 text-sm italic">
                    "The combination of AI's computational intensity and blockchain's verification redundancy creates an exponential cost problem."
                  </p>
                </div>
              </div>
            </div>
            
            <ComparisonTable />
          </motion.div>
        </div>
        
        {/* Animation explaining OPoC */}
        {/* OPoC Concept Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px 0px" }}
          variants={fadeUpVariant}
          className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-24 relative"
          style={{ 
            background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,20,30,1) 100%)" 
          }}
        >
          <motion.div 
            className="absolute inset-0 opacity-10"
            style={{ y: bgY }}
          >
            <div className="grid grid-cols-8 h-full">
              {Array(64).fill(0).map((_, i) => (
                <div key={i} className="border-[0.5px] border-white/5"></div>
              ))}
            </div>
          </motion.div>
          
          <div className="max-w-6xl mx-auto z-10">
            <AnimatedTitle 
              text="The OPoC Protocol"
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            />
            <div className="h-1 w-24 bg-[#c8e500] mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  OPoC solves the AI-blockchain integration problem with a novel approach that drastically reduces verification costs while maintaining security.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-[#c8e500] text-xl font-semibold mb-3">Key Innovation:</h3>
                  <p className="text-white/70 leading-relaxed">
                    Instead of requiring the entire network to verify every computation, OPoC randomly selects a small subset of validators. The probability of selecting all malicious validators becomes vanishingly small as the network grows.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-[#c8e500] text-xl font-semibold mb-3">Mathematical Security:</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    The probability of selecting all malicious validators (assuming 1/3 of the network is malicious):
                  </p>
                  <ProbabilityFormula />
                </div>
              </div>
              
              <NetworkDiagram />
            </div>
          </div>
        </motion.div>
        
        {/* Scrolling Sections */}
        <div className="relative" ref={scrollingSectionsRef}>
          {/* Sticky container for section titles and content */}
          <div ref={stickyContainerRef} className="sticky top-0 h-screen flex items-center bg-black overflow-hidden">
            <div className="w-full px-6 md:px-24">
              <div className="max-w-5xl mx-auto">
                {/* Animated section content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-5 gap-8"
                  >
                    <div className="md:col-span-2">
                      <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <AnimatedTitle
                          text={sections[activeSection].title}
                          className="text-4xl md:text-4xl font-bold text-[#c8e500] mb-2"
                        />
                        <h3 className="text-xl text-white/40 mb-4">{sections[activeSection].subtitle}</h3>
                        <div className="h-1 w-16 bg-[#c8e500] mb-8"></div>
                      </motion.div>
                    </div>
                    
                    <div className="md:col-span-3">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-white/80 leading-relaxed mb-6"
                      >
                        {sections[activeSection].text}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-6 bg-white/5 p-6 rounded-lg border border-white/10"
                      >
                        <p className="text-white/70 leading-relaxed">
                          {sections[activeSection].detail}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Progress indicator */}
                <div className="mt-16">
                  <div className="flex space-x-2 justify-center">
                    {sections.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i === activeSection ? 'bg-[#c8e500]' : 'bg-white/20'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Spacer divs to enable scrolling */}
          <div className="w-full bg-transparent">
            {sections.map((_, i) => (
              <div key={i} className="h-screen w-full" />
            ))}
          </div>
        </div>
      
      {/* Economic Security Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px 0px" }}
        variants={staggerVariant}
        className="py-24 px-6 md:px-24 bg-gradient-to-b from-black/90 to-black"
      >
        <div className="max-w-5xl mx-auto">
          <AnimatedTitle
            text="Economic Security Model"
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          />
          <div className="h-1 w-24 bg-[#c8e500] mb-16"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              variants={staggerItemVariant}
              className="lg:col-span-2 bg-white/5 p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-[#c8e500] mb-6">How OPoC Makes Attacks Financially Irrational</h3>
              
              <div className="space-y-6 text-white/70">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c8e500] text-black flex items-center justify-center mr-4 mt-1">1</div>
                  <p>Each validator must stake tokens with real economic value to participate in the network.</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c8e500] text-black flex items-center justify-center mr-4 mt-1">2</div>
                  <p>If a validator attempts to verify fraudulent computations, their stake is "slashed" (partially or fully confiscated).</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c8e500] text-black flex items-center justify-center mr-4 mt-1">3</div>
                  <p>The minimum reward an attacker would need to make cheating worthwhile increases exponentially with network size.</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c8e500] text-black flex items-center justify-center mr-4 mt-1">4</div>
                  <p>With just 100 validators and a $10,000 stake per validator, the economic security per computation can reach over $1 billion.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xl font-semibold text-white/80">Minimum Attack Reward Formula:</p>
                <div className="mt-4 bg-white/10 p-4 rounded-lg text-[#c8e500] font-mono">
                  RewardToDefect = stake / P(allByzantine)
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerItemVariant}
              className="flex flex-col justify-between"
            >
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                <h3 className="text-xl font-semibold text-[#c8e500] mb-4">Economic Security</h3>
                <StatCounter 
                  value={1315} 
                  label="Million Dollar Security per Computation" 
                  symbol="M" 
                  duration={3000} 
                />
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-[#c8e500] mb-4">Attack Probability</h3>
                <div className="text-center">
                  <span className="text-4xl md:text-4xl font-bold text-white">~0.000076%</span>
                  <p className="text-white/60 mt-2">Chance of Successful Attack</p>
                </div>
                <div className="mt-6 text-white/50 text-sm">
                  <p>In a network with 100 validators, with 10 randomly selected for each computation (assuming 1/3 are Byzantine).</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Scaling Properties */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px 0px" }}
        variants={fadeUpVariant}
        className="min-h-screen py-24 px-6 md:px-24 bg-black"
      >
        <div className="max-w-5xl mx-auto">
          <AnimatedTitle
            text="Linear Scaling & Parallel Processing"
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          />
          <div className="h-1 w-24 bg-[#c8e500] mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold text-[#c8e500] mb-6">Unique Scaling Properties</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  Traditional blockchain consensus requires every node to verify every computation, making it impossible to scale throughput by adding more nodes.
                </p>
                <p className="text-white/70 leading-relaxed mb-8">
                  With OPoC, adding more validators to the network directly increases parallel processing capacity, creating linear throughput scaling.
                </p>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h4 className="text-lg font-semibold text-[#c8e500] mb-3">Parallel Inference Formula</h4>
                  <div className="text-white/90 text-lg font-mono">
                    Parallel Computations = V ÷ v
                  </div>
                  <p className="text-white/50 text-sm mt-4">
                    Where V is the total validator population and v is the number of validators needed per computation
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-[#c8e500] mb-8 text-center">Scalability Comparison</h3>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-lg text-white/70 mb-2">Traditional Consensus</h4>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-6 flex rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "20%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center text-center text-white text-xs whitespace-nowrap px-2 bg-red-500 rounded-full"
                      >
                        20%
                      </motion.div>
                    </div>
                    <p className="text-white/40 text-xs mt-1">Adding nodes increases redundant computation</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg text-white/70 mb-2">ZK-based Systems</h4>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-6 flex rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "50%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex flex-col justify-center text-center text-white text-xs whitespace-nowrap px-2 bg-yellow-500 rounded-full"
                      >
                        50%
                      </motion.div>
                    </div>
                    <p className="text-white/40 text-xs mt-1">High proving costs limit practical scalability</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg text-white/70 mb-2">OPoC Protocol</h4>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-6 flex rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col justify-center text-center text-white text-xs whitespace-nowrap px-2 bg-[#c8e500] rounded-full"
                      >
                        100%
                      </motion.div>
                    </div>
                    <p className="text-white/40 text-xs mt-1">Linear throughput scaling with network size</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <StatCounter value={10} label="Nodes" symbol="×" duration={1000} />
                  </div>
                  <div className="text-center">
                    <StatCounter value={100} label="Throughput" symbol="×" duration={1500} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
    
      
      {/* Deterministic Computation */}
   <motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px 0px" }}
  variants={fadeUpVariant}
  className="bg-black text-white py-24 px-6 md:px-24"
>
  <div className="max-w-6xl mx-auto space-y-16">
    {/* Title */}
    <div>
      <AnimatedTitle
        text="Deterministic Indeterminism"
        className="text-4xl md:text-6xl font-bold text-white"
      />
      <div className="h-1 w-24 bg-[#c8e500] mt-4"></div>
    </div>

    {/* Statement */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-10 max-w-3xl"
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-[#c8e500] mb-4">
        Embracing Uncertainty, Verifying Truth
      </h3>
      <p className="text-white/70 leading-relaxed">
        Traditional systems attempt to force determinism by eliminating all randomness. But in doing so, they restrict creativity, adaptability, and the natural behavior of intelligent agents.
      </p>
      <p className="text-white/70 leading-relaxed">
        UOMI introduces <span className="text-white font-semibold">Deterministic Indeterminism</span>: an innovative approach that accepts controlled unpredictability, and proves that results are still within defined and verifiable bounds.
      </p>
    </motion.div>

    {/* Proof Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="space-y-12"
    >
      <div className="max-w-3xl">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#c8e500] mb-4">
          Proofs, not Reproduction
        </h3>
        <p className="text-white/70 leading-relaxed">
          Instead of forcing every validator to reach an identical output, UOMI allows slight variations and proves via a probabilistic consensus that the computation was executed faithfully.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Range of Acceptable Results */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <h4 className="text-xl font-semibold text-[#c8e500]">Bounded Result Spaces</h4>
          <p className="text-white/70 text-sm">
            Validators agree on an expected range of valid outcomes, rather than a single hash. This makes room for intelligent flexibility.
          </p>
        </div>

        {/* Probabilistic Verification */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <h4 className="text-xl font-semibold text-[#c8e500]">Probabilistic Proofs</h4>
          <p className="text-white/70 text-sm">
            Instead of reproducing the exact result, validators verify that an output could plausibly come from the claimed model under shared conditions.
          </p>
        </div>

        {/* Security through Diversity */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <h4 className="text-xl font-semibold text-[#c8e500]">Diversity as a Feature</h4>
          <p className="text-white/70 text-sm">
            Agent decisions are no longer constrained by determinism. Instead, systems evolve with a richer, more natural decision space — still verifiable, always honest.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</motion.section>

      
     
      
      {/* Footer / Call to Action */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="py-24 px-6 md:px-24 bg-black border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedTitle
            text="The Future of Decentralized AI"
            className="text-3xl md:text-5xl font-bold text-[#c8e500] mb-8"
          />
          
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
            OPoC brings mathematical guarantees and economic alignment to large AI model inference, enabling a new generation of decentralized AI applications.
          </p>
          
          <button className="inline-block rounded-full bg-gradient-to-r from-[#c8e500] to-[#a9c000] px-8 py-4 text-black font-bold text-lg"
            onClick={() => window.location.href = "https://uomi.ai/consensus"}
          >
            Explore OPoC Paper
          </button>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-white/30 text-sm"
          >
            Building the foundation for trustless and efficient AI computation on decentralized networks
          </motion.div>
        </div>
      </motion.div>
    </div>
    );
    }
