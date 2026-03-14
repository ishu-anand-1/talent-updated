import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center p-4">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10"
      >

        {/* 404 Text */}
        <div className="mb-8">

          <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            404
          </h1>

          <h2 className="text-3xl font-semibold mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">

          <Link to="/">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>

          <Link to="/dashboard/explore">
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              <Search className="w-4 h-4 mr-2" />
              Explore Talent
            </Button>
          </Link>

        </div>

      </motion.div>
    </div>
  );
}