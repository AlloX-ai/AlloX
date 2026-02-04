import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { FaDiscord, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import alloxFull from "../assets/alloxFull.svg";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-gray-200/50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={alloxFull} alt="AlloX Logo" className="h-8 w-auto" />
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
                <Link to="/app" target='_blank'  className="hover:text-black transition-colors">
                  Launch App
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Foundation</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  to="/foundation"
                  className="hover:text-black transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a href="/foundation#litepaper" className="hover:text-black transition-colors">
                  Litepaper
                </a>
              </li>
              <li>
                <a
                  href="/foundation#brand"
                  className="hover:text-black transition-colors"
                >
                  Brand
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3 h-24">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={20} className="text-gray-700" />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="Telegram"
            >
              <FaTelegram size={20} className="text-gray-700" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="Discord"
            >
              <FaDiscord size={20} className="text-gray-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-700" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-gray-700" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card w-12 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-700" />
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
