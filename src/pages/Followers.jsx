import { motion } from "framer-motion";
import { Search, UserMinus } from "lucide-react";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import { Link } from "react-router-dom";

const followers = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "sarahj",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    role: "Full-Stack Developer",
    following: false,
  },
  {
    id: 2,
    name: "Michael Chen",
    username: "michaelc",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    role: "UI/UX Designer",
    following: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    username: "emilyr",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    role: "AI Engineer",
    following: true,
  },
];

export function Followers() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">
          Followers
        </h1>

        <p className="text-gray-400">
          12.5K followers
        </p>

        {/* Search */}
        <div className="mt-6">

          <div className="relative">

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

            <Input
              placeholder="Search followers..."
              className="pl-11 bg-white/5 border-white/10 focus:border-purple-500"
            />

          </div>

        </div>
      </motion.div>

      {/* Followers List */}
      <div className="space-y-3">

        {followers.map((follower, index) => (

          <motion.div
            key={follower.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-4 hover:bg-white/10 transition">

              <div className="flex items-center gap-4">

                {/* Avatar */}
                <Link to={`/dashboard/profile/${follower.username}`}>

                  <Avatar className="w-16 h-16 ring-2 ring-purple-500/30 hover:ring-purple-500">

                    <AvatarImage src={follower.avatar}/>

                    <AvatarFallback>
                      {follower.name[0]}
                    </AvatarFallback>

                  </Avatar>

                </Link>

                {/* Info */}
                <div className="flex-1">

                  <Link
                    to={`/dashboard/profile/${follower.username}`}
                    className="hover:text-purple-400"
                  >

                    <h3 className="font-semibold">
                      {follower.name}
                    </h3>

                  </Link>

                  <p className="text-sm text-gray-400">
                    {follower.role}
                  </p>

                </div>

                {/* Actions */}
                <div className="flex gap-2">

                  {follower.following ? (

                    <Button
                      variant="outline"
                      className="border-white/10"
                    >
                      Following
                    </Button>

                  ) : (

                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      Follow Back
                    </Button>

                  )}

                  <Button variant="ghost" size="icon">

                    <UserMinus className="w-4 h-4"/>

                  </Button>

                </div>

              </div>

            </Card>

          </motion.div>

        ))}

      </div>

    </div>
  );
}