import { motion } from "framer-motion";
import { Plus, Search, Filter, Star } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
    likes: 523,
    views: 8200,
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    status: "Published",
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    description: "WebSocket-based chat app with real-time messaging",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600",
    likes: 412,
    views: 6500,
    tags: ["WebSocket", "React", "Node.js"],
    status: "Published",
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    description: "Machine learning powered analytics and insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    likes: 789,
    views: 12300,
    tags: ["AI", "Python", "D3.js", "React"],
    status: "Draft",
  },
];

export function Projects() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Projects</h1>
            <p className="text-gray-400">
              {projects.length} total projects
            </p>
          </div>

          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Search */}

        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">

              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <Input
                placeholder="Search projects..."
                className="pl-11 bg-white/5 border-white/10 focus:border-purple-500"
              />

            </div>
          </div>

          <Button variant="outline" className="border-white/10">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </motion.div>

      {/* Projects Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project, index) => (

          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >

            <Link to={`/dashboard/projects/${project.id}`}>

              <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-500/30 transition-all overflow-hidden group">

                {/* Image */}

                <div className="relative">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />

                  <div className="absolute top-3 right-3">

                    <Badge
                      className={
                        project.status === "Published"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-black"
                      }
                    >
                      {project.status}
                    </Badge>

                  </div>

                </div>

                {/* Content */}

                <div className="p-4">

                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}

                  <div className="flex flex-wrap gap-2 mb-3">

                    {project.tags.slice(0, 3).map((tag) => (

                      <Badge
                        key={tag}
                        className="text-xs bg-purple-500/10 text-purple-300"
                      >
                        {tag}
                      </Badge>

                    ))}

                  </div>

                  {/* Stats */}

                  <div className="flex items-center justify-between text-sm text-gray-400">

                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.likes}</span>
                    </div>

                    <div>
                      {project.views.toLocaleString()} views
                    </div>

                  </div>

                </div>

              </Card>

            </Link>

          </motion.div>

        ))}

      </div>
    </div>
  );
}