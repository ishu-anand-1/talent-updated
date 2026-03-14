import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link to="/" className="flex items-center gap-3 font-bold text-lg">

          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Sparkles size={16} />
          </div>

          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            TalentHub
          </span>

        </Link>

        {/* NAV LINKS */}

        <nav className="hidden md:flex gap-8 text-gray-300">

          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Talent
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

        </nav>

        {/* ACTION BUTTONS */}

        <div className="flex items-center gap-4">

          <Link to="/login">
            <Button variant="ghost" className="text-gray-300">
              Sign In
            </Button>
          </Link>

          <Link to="/signup">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
              Get Started
            </Button>
          </Link>

        </div>

      </div>

    </header>
  );
}