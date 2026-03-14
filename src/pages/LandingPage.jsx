import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Code,
  Palette,
  Database,
  Brain,
  Video,
  BarChart,
  Users,
  Target,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            TalentHub
          </h1>

          <div className="flex gap-4">

            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>

            <Link to="/signup">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                Get Started
              </Button>
            </Link>

          </div>

        </div>

      </header>

      {/* HERO */}

      <section className="relative py-32">

        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <Badge className="bg-purple-600/30 text-purple-300 mb-6">
            🚀 AI Powered Talent Marketplace
          </Badge>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Showcase Your Talent
            <br />

            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Get Discovered. Get Hired.
            </span>
          </motion.h1>

          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            TalentHub connects developers, designers and creators with
            companies worldwide.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link to="/signup?type=talent">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                Join as Talent
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Link to="/signup?type=recruiter">
              <Button variant="outline">Hire Talent</Button>
            </Link>

            <Link to="/dashboard/explore">
              <Button variant="ghost">
                <Play className="mr-2 w-4 h-4" />
                Explore Talent
              </Button>
            </Link>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">

            <div>
              <h3 className="text-3xl font-bold">50K+</h3>
              <p className="text-gray-400 text-sm">Active Talent</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-gray-400 text-sm">Companies</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100K+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

          </div>

        </div>

      </section>

      {/* TALENT CATEGORIES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Talent Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              { icon: Code, name: "Software Developers" },
              { icon: Palette, name: "UI/UX Designers" },
              { icon: Database, name: "Data Scientists" },
              { icon: Brain, name: "AI Engineers" },
              { icon: Video, name: "Content Creators" },
              { icon: BarChart, name: "Marketing Experts" },
            ].map((c, i) => {

              const Icon = c.icon;

              return (
                <Card
                  key={i}
                  className="p-8 text-center bg-white/5 border-white/10 hover:border-purple-500 hover:bg-white/10 transition"
                >
                  <Icon className="mx-auto mb-4 text-purple-400" />

                  <p className="text-sm">{c.name}</p>

                </Card>
              );
            })}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="py-24 bg-gradient-to-b from-black to-purple-950/20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* TALENT */}

            <Card className="p-8 bg-purple-500/10 border-purple-500/20">

              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Users /> For Talent
              </h3>

              <ul className="space-y-4 text-gray-300">

                <li className="flex gap-2">
                  <CheckCircle size={18} /> Create profile
                </li>

                <li className="flex gap-2">
                  <CheckCircle size={18} /> Upload projects
                </li>

                <li className="flex gap-2">
                  <CheckCircle size={18} /> Build followers
                </li>

                <li className="flex gap-2">
                  <CheckCircle size={18} /> Get hired
                </li>

              </ul>

            </Card>

            {/* RECRUITER */}

            <Card className="p-8 bg-blue-500/10 border-blue-500/20">

              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Target /> For Recruiters
              </h3>

              <ul className="space-y-4 text-gray-300">

                <li className="flex gap-2">
                  <CheckCircle size={18} /> Post jobs
                </li>

                <li className="flex gap-2">
                  <CheckCircle size={18} /> Discover talent
                </li>

                <li className="flex gap-2">
                  <CheckCircle size={18} /> Message candidates
                </li>

                <li className="flex gap-2">
                  <CheckCircle size={18} /> Hire instantly
                </li>

              </ul>

            </Card>

          </div>

        </div>

      </section>

      {/* SOCIAL PROOF */}

      <section className="py-20 text-center">

        <h2 className="text-3xl font-bold mb-8">
          Trusted by Professionals Worldwide
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">

          <Badge className="bg-purple-600/30">10K+ Developers</Badge>
          <Badge className="bg-purple-600/30">5K+ Designers</Badge>
          <Badge className="bg-purple-600/30">2K+ Recruiters</Badge>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10 text-center text-gray-400">
        © 2026 TalentHub. All rights reserved.
      </footer>

    </div>
  );
}