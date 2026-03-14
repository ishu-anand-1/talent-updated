import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  TrendingUp,
  Code,
  Play,
  ExternalLink,
} from "lucide-react";

import { Card } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

import { useState } from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      username: "sarahj",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      role: "Senior Full-Stack Developer",
    },
    content:
      "Just launched my new AI-powered analytics dashboard! 🚀 Built with React, D3.js, and TensorFlow.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    likes: 1243,
    comments: 87,
    shares: 45,
    tags: ["React", "AI", "Dashboard"],
    timestamp: "2 hours ago",
    type: "project",
  },
];

export function Dashboard() {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [savedPosts, setSavedPosts] = useState(new Set());

  const toggleLike = (postId) => {
    const newLiked = new Set(likedPosts);

    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }

    setLikedPosts(newLiked);
  };

  const toggleSave = (postId) => {
    const newSaved = new Set(savedPosts);

    if (newSaved.has(postId)) {
      newSaved.delete(postId);
    } else {
      newSaved.add(postId);
    }

    setSavedPosts(newSaved);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* Create Post */}
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-center gap-3 mb-4">

          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"/>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <input
            placeholder="Share your achievements..."
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-purple-500"
          />

        </div>

        <div className="flex gap-3">

          <Button variant="ghost" size="sm">
            <Play className="w-4 h-4 mr-2"/>
            Video
          </Button>

          <Button variant="ghost" size="sm">
            <Code className="w-4 h-4 mr-2"/>
            Code
          </Button>

          <Button className="ml-auto bg-gradient-to-r from-purple-500 to-pink-500">
            Post
          </Button>

        </div>
      </Card>

      {/* Posts */}

      {posts.map((post) => (

        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <Card className="bg-white/5 border-white/10 overflow-hidden">

            {/* Header */}

            <div className="p-6 pb-4">

              <div className="flex justify-between mb-4">

                <Link
                  to={`/dashboard/profile/${post.user.username}`}
                  className="flex gap-3"
                >

                  <Avatar>
                    <AvatarImage src={post.user.avatar}/>
                    <AvatarFallback>
                      {post.user.name[0]}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-semibold">
                      {post.user.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {post.user.role}
                    </p>
                  </div>

                </Link>

                <MoreHorizontal className="w-5 h-5"/>

              </div>

              <p className="mb-3">
                {post.content}
              </p>

              <div className="flex gap-2 mb-3">

                {post.tags.map((tag) => (
                  <Badge key={tag}>
                    #{tag}
                  </Badge>
                ))}

              </div>

            </div>

            {/* Image */}

            {post.image && (
              <img
                src={post.image}
                alt=""
                className="w-full h-96 object-cover"
              />
            )}

            {/* Actions */}

            <div className="p-6 pt-4 flex gap-2">

              <Button
                variant="ghost"
                onClick={() => toggleLike(post.id)}
              >
                <Heart
                  className="w-4 h-4 mr-2"
                  fill={likedPosts.has(post.id) ? "red" : "none"}
                />
                Like
              </Button>

              <Button variant="ghost">
                <MessageCircle className="w-4 h-4 mr-2"/>
                Comment
              </Button>

              <Button variant="ghost">
                <Share2 className="w-4 h-4 mr-2"/>
                Share
              </Button>

              <Button
                variant="ghost"
                onClick={() => toggleSave(post.id)}
              >
                <Bookmark
                  fill={savedPosts.has(post.id) ? "currentColor" : "none"}
                />
              </Button>

            </div>

          </Card>

        </motion.div>
      ))}

    </div>
  );
}