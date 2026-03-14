import { motion } from "framer-motion";
import { Search, Filter, Star, MapPin, Users, TrendingUp } from "lucide-react";

import { Card } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { Link } from "react-router-dom";

const talents = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "sarahj",
    role: "Senior Full-Stack Developer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    location: "San Francisco, CA",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    followers: "12.5K",
    rating: 4.9,
    projects: 48,
    hourlyRate: "$120/hr",
  },
  {
    id: 2,
    name: "Michael Chen",
    username: "michaelc",
    role: "UI/UX Design Lead",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    location: "New York, NY",
    skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
    followers: "18.2K",
    rating: 5.0,
    projects: 62,
    hourlyRate: "$95/hr",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    username: "emilyr",
    role: "AI/ML Engineer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    location: "Remote",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
    followers: "15.7K",
    rating: 4.8,
    projects: 35,
    hourlyRate: "$150/hr",
  },
];

export function ExploreTalent() {
  return (
    <div className="space-y-6">

      {/* Search + Filters */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <div className="flex-1">
            <div className="relative">

              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

              <Input
                placeholder="Search by name, skills, or role..."
                className="pl-11 bg-white/5 border-white/10 focus:border-purple-500"
              />

            </div>
          </div>

          <Select defaultValue="all">

            <SelectTrigger className="w-full md:w-48 bg-white/5 border-white/10">
              <SelectValue placeholder="Category"/>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="developers">Developers</SelectItem>
              <SelectItem value="designers">Designers</SelectItem>
              <SelectItem value="data">Data Scientists</SelectItem>
              <SelectItem value="managers">Product Managers</SelectItem>
            </SelectContent>

          </Select>

          <Button variant="outline" className="border-white/10">
            <Filter className="w-4 h-4 mr-2"/>
            Filters
          </Button>

        </div>
      </motion.div>

      {/* AI Recommendation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 p-4">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5"/>
            </div>

            <div>
              <h3 className="font-semibold">
                AI-Powered Recommendations
              </h3>
              <p className="text-sm text-gray-400">
                Showing talent based on your preferences
              </p>
            </div>

          </div>

        </Card>
      </motion.div>

      {/* Talent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {talents.map((talent, index) => (

          <motion.div
            key={talent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >

            <Card className="bg-white/5 border-white/10 hover:border-purple-500/30 transition hover:scale-105 p-6">

              <div className="text-center mb-4">

                <Avatar className="w-24 h-24 mx-auto mb-3 ring-2 ring-purple-500/30">
                  <AvatarImage src={talent.avatar}/>
                  <AvatarFallback>
                    {talent.name[0]}
                  </AvatarFallback>
                </Avatar>

                <h3 className="font-semibold text-lg">
                  {talent.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {talent.role}
                </p>

                <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
                  <MapPin className="w-4 h-4"/>
                  {talent.location}
                </div>

              </div>

              {/* Skills */}

              <div className="flex flex-wrap gap-2 mb-4 justify-center">

                {talent.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-purple-500/10 text-purple-300"
                  >
                    {skill}
                  </Badge>
                ))}

              </div>

              {/* Stats */}

              <div className="flex justify-between text-sm mb-4 p-3 bg-white/5 rounded-lg">

                <div className="text-center">
                  <div className="font-semibold">
                    {talent.followers}
                  </div>
                  <div className="text-xs text-gray-400">
                    Followers
                  </div>
                </div>

                <div className="text-center">

                  <div className="flex items-center justify-center gap-1 font-semibold">
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor"/>
                    {talent.rating}
                  </div>

                  <div className="text-xs text-gray-400">
                    Rating
                  </div>

                </div>

                <div className="text-center">
                  <div className="font-semibold">
                    {talent.projects}
                  </div>
                  <div className="text-xs text-gray-400">
                    Projects
                  </div>
                </div>

              </div>

              {/* Actions */}

              <div className="flex gap-2">

                <Link
                  to={`/dashboard/profile/${talent.username}`}
                  className="flex-1"
                >

                  <Button variant="outline" className="w-full border-white/10">
                    View Profile
                  </Button>

                </Link>

                <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500">
                  Hire
                </Button>

              </div>

            </Card>

          </motion.div>

        ))}

      </div>

    </div>
  );
}