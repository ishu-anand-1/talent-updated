import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  ExternalLink,
  Github,
  Heart,
  MessageCircle,
  Share2,
  Eye,
} from "lucide-react";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        {/* Back Button */}

        <Link to="/dashboard/projects">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Card */}

        <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1557821552-17105176677c?w=1200"
            alt="Project"
            className="w-full h-96 object-cover"
          />

          <div className="p-8">

            {/* Title */}

            <div className="flex items-start justify-between mb-6">

              <div>

                <h1 className="text-3xl font-bold mb-2">
                  E-commerce Platform
                </h1>

                <p className="text-gray-400">
                  Full-stack e-commerce solution with payment integration
                </p>

              </div>

              <div className="flex gap-2">

                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/10"
                >
                  <Github className="w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/10"
                >
                  <ExternalLink className="w-5 h-5" />
                </Button>

              </div>

            </div>

            {/* Tags */}

            <div className="flex flex-wrap gap-2 mb-6">

              {["React", "Node.js", "Stripe", "MongoDB", "TailwindCSS"].map(
                (tag) => (
                  <Badge
                    key={tag}
                    className="bg-purple-500/10 text-purple-300"
                  >
                    {tag}
                  </Badge>
                )
              )}

            </div>

            {/* Stats */}

            <div className="flex items-center gap-6 mb-6 p-4 bg-white/5 rounded-lg">

              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>523 Likes</span>
              </div>

              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-500" />
                <span>8.2K Views</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-purple-500" />
                <span>48 Comments</span>
              </div>

            </div>

            {/* Description */}

            <div className="text-gray-300 space-y-4 mb-8">

              <h2 className="text-xl font-semibold">
                About This Project
              </h2>

              <p>
                This is a comprehensive e-commerce platform built with
                modern web technologies. The platform includes product
                catalog, shopping cart, payment processing, order
                management, and admin dashboard.
              </p>

              <h3 className="text-lg font-semibold">
                Key Features
              </h3>

              <ul className="list-disc pl-6 space-y-1">
                <li>Responsive design</li>
                <li>Stripe payment integration</li>
                <li>Real-time inventory</li>
                <li>Advanced search & filtering</li>
                <li>User authentication</li>
              </ul>

            </div>

            {/* Buttons */}

            <div className="flex gap-3">

              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>

              <Button
                variant="outline"
                className="border-white/10"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Comment
              </Button>

              <Button
                variant="outline"
                className="border-white/10"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>

            </div>

          </div>

        </Card>

      </motion.div>

    </div>
  );
}