import { motion } from "framer-motion";
import { Search, UserMinus } from "lucide-react";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import { Link } from "react-router-dom";

const following = [
  {
    id: 1,
    name: "Alex Turner",
    username: "alext",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Maya Patel",
    username: "mayap",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    role: "Product Designer",
  },
  {
    id: 3,
    name: "James Wilson",
    username: "jamesw",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
    role: "Data Analyst",
  },
];

export function Following() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">
          Following
        </h1>

        <p className="text-gray-400">
          892 following
        </p>

        {/* Search */}
        <div className="mt-6">
          <div className="relative">

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

            <Input
              placeholder="Search following..."
              className="pl-11 bg-white/5 border-white/10 focus:border-purple-500"
            />

          </div>
        </div>
      </motion.div>

      {/* Following List */}
      <div className="space-y-3">

        {following.map((user, index) => (

          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-4 hover:bg-white/10 transition">

              <div className="flex items-center gap-4">

                {/* Avatar */}
                <Link to={`/dashboard/profile/${user.username}`}>

                  <Avatar className="w-16 h-16 ring-2 ring-purple-500/30 hover:ring-purple-500">

                    <AvatarImage src={user.avatar}/>

                    <AvatarFallback>
                      {user.name[0]}
                    </AvatarFallback>

                  </Avatar>

                </Link>

                {/* Info */}
                <div className="flex-1">

                  <Link
                    to={`/dashboard/profile/${user.username}`}
                    className="hover:text-purple-400"
                  >

                    <h3 className="font-semibold">
                      {user.name}
                    </h3>

                  </Link>

                  <p className="text-sm text-gray-400">
                    {user.role}
                  </p>

                </div>

                {/* Unfollow */}
                <Button
                  variant="outline"
                  className="border-white/10"
                >

                  <UserMinus className="w-4 h-4 mr-2"/>

                  Unfollow

                </Button>

              </div>

            </Card>

          </motion.div>

        ))}

      </div>

    </div>
  );
}