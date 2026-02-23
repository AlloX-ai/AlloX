import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";
import { FaDiscord, FaFacebook, FaMedium, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-gray-200/50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={`https://cdn.allox.ai/allox/AlloX-desktop.svg`} alt="AlloX Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-gray-600">
              Narrative-driven capital allocation for TradFi & DeFi.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  to="/product"
                  className="hover:text-black transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-black transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="http://app.allox.ai/" target='_blank' rel="noreferrer" className="hover:text-black transition-colors">
                  Launch App
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Foundation</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <NavLink
                  to="/foundation"
                  className="hover:text-black transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/foundation#litepaper" className="hover:text-black transition-colors">
                  Litepaper
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/foundation#brand"
                  className="hover:text-black transition-colors"
                >
                  Brand
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-3 h-24">
            <a
              href="https://x.com/alloxdotai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={20} className="text-gray-700" />
            </a>
            <a
              href="https://t.me/alloxai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="Telegram"
            >
              <FaTelegram size={20} className="text-gray-700" />
            </a>
            {/* <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="Discord"
            >
              <FaDiscord size={20} className="text-gray-700" />
            </a> */}
            <a
              href="https://www.linkedin.com/company/alloxai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-700" />
            </a>
            <a
              href="https://www.instagram.com/allox.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-gray-700" />
            </a>
            <a
              href="https://github.com/AlloX-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-700" />
            </a>
             <a 
                href="https://www.facebook.com/alloxai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={20} className="text-gray-700" />
              </a>
              <a 
                href="https://medium.com/@allox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
                aria-label="Medium"
              >
                <FaMedium size={20} className="text-gray-700" />
              </a>
              <a 
                href="mailto:contact@allox.ai"
                className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-700" />
              </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200/50">
          {/* Social Icons */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>© 2026 AlloX Foundation. All rights reserved.</div>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-black transition-colors"
              >
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-black transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
