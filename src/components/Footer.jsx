const Footer = () => {
    return (
      <footer
        className={`w-full py-10 md:py-16 bg-black text-white border-t border-zinc-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo and Social - Full width on small mobile */}
            <div className="col-span-2 mb-6 md:mb-0 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <img
                  src="http://localhost:5174/UOMI.svg"
                  alt="UOMI Logo"
                  className="h-8 md:h-10 w-auto"
                  style={{ filter: "invert(1)" }}
                />
              </div>
              <p
                className={`mb-4 md:mb-6 text-sm md:text-base text-gray-300 max-w-md`}
              >
                The layer 1 blockchain designed for autonomous AI. Built for
                verifiable on-chain computation, multi-chain agents, and the next
                generation of intelligent dApps.
              </p>
              <div className="flex space-x-4 mb-8">
                <a
                  href="https://x.com/uomiNetwork"
                  className={`p-2 rounded-full hover:bg-zinc-800 transition-colors duration-200`}
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-[#dffe00] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Uomi-network"
                  className={`p-2 rounded-full hover:bg-zinc-800 transition-colors duration-200`}
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-[#dffe00] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Navigation Links - 2 columns on mobile, 3 columns on larger screens */}
            <div>
              <h3
                className="font-semibold text-base md:text-lg mb-3 md:mb-4"
                style={{ color: "#dffe00" }}
              >
                Products
              </h3>
              <ul
                className={`space-y-2 md:space-y-3 text-sm md:text-base text-gray-300`}
              >
                <li>
                  <a href="https://app.uomi.ai" className="hover:text-[#dffe00] transition-colors">
                    Testnet
                  </a>
                </li>
                <li>
                  <a href="/docs" className="hover:text-[#dffe00] transition-colors">
                    Developer
                  </a>
                </li>
                <li>
                  <a href="/wasp" className="hover:text-[#dffe00] transition-colors">
                    Agent Studio
                  </a>
                </li>
                <li>
                  <a href="https://explorer.uomi.ai" className="hover:text-[#dffe00] transition-colors">
                    Explorer
                  </a>
                </li>
              </ul>
            </div>
  
            <div >
              <h3
                className="font-semibold text-base md:text-lg mb-3 md:mb-4"
                style={{ color: "#dffe00" }}
              >
                Resources
              </h3>
              <ul
                className={`space-y-2 md:space-y-3 text-sm md:text-base text-gray-300`}
              >
                <li>
                  <a href="https://docs.uomi.ai" className="hover:text-[#dffe00] transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/whitepaper" className="hover:text-[#dffe00] transition-colors">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-[#dffe00] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/RV5DUpjsdY" className="hover:text-[#dffe00] transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Newsletter */}
          <div
            className={`mt-12 md:mt-16 p-4 md:p-6 rounded-xl bg-zinc-900 border border-zinc-800`}
          >
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-lg md:text-xl font-bold mb-2">Stay up to date</h3>
                <p
                  className={`text-sm md:text-base text-gray-300`}
                >
                  Subscribe to our newsletter for the latest updates on product
                  launches, ecosystem news, and developer resources.
                </p>
              </div>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`px-3 md:px-4 py-2 md:py-3 rounded-lg sm:rounded-r-none w-full mb-2 sm:mb-0 focus:outline-none focus:ring-2 bg-zinc-800 border-zinc-700 text-white focus:ring-[#dffe00] border text-sm md:text-base`}
                  />
                  <button
                    className="text-black px-3 md:px-4 py-2 md:py-3 rounded-lg sm:rounded-l-none font-medium transition-colors text-sm md:text-base"
                    style={{
                      backgroundColor: "#dffe00",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#c8e500")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#dffe00")
                    }
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Bottom */}
          <div
            className={`mt-10 md:mt-16 pt-6 md:pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center`}
          >
            <p
              className={`text-gray-400 text-xs md:text-sm text-center md:text-left`}
            >
              © 2025 UOMI Network. All rights reserved.
            </p>
            <div
              className={`flex gap-4 md:gap-6 mt-4 md:mt-0 text-gray-400 text-xs md:text-sm`}
            >
              <a href="#" className="hover:text-[#dffe00] transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-[#dffe00] transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-[#dffe00] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;