import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* BADGE */}

        <div className="inline-flex items-center px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm mb-6">
          🚀 AI Powered Talent Marketplace
        </div>

        {/* TITLE */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Showcase Your Talent
          <br />

          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Get Discovered. Get Hired.
          </span>
        </motion.h1>

        {/* DESCRIPTION */}

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Join the world's most advanced AI-powered talent marketplace.
          Connect with top companies, showcase your work, and accelerate your career.
        </p>

        {/* BUTTONS */}

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <Link to="/signup?type=talent">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
              Join as Talent
              <ArrowRight size={18} />
            </button>
          </Link>

          <Link to="/signup?type=recruiter">
            <button className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition">
              Hire Talent
            </button>
          </Link>

          <Link to="/dashboard/explore">
            <button className="flex items-center gap-2 px-6 py-3 text-gray-300 hover:text-white transition">
              <Play size={16} />
              Explore Talent
            </button>
          </Link>

        </div>

        {/* STATS */}

        <div className="flex justify-center gap-16 mt-16 text-gray-400">

          <div>
            <h3 className="text-3xl font-bold text-white">50K+</h3>
            <p>Active Talent</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">10K+</h3>
            <p>Companies</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">100K+</h3>
            <p>Projects</p>
          </div>

        </div>

      </div>

    </section>
  );
}