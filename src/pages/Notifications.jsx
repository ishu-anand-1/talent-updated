import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  UserPlus,
  Briefcase,
  Star,
  TrendingUp,
  Award,
} from "lucide-react";

import { Card } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const notifications = [
  {
    id: 1,
    type: "like",
    user: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    },
    action: "liked your project",
    target: "AI Analytics Dashboard",
    timestamp: "2 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "comment",
    user: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
    action: "commented on your post",
    content: "This looks amazing! Great work!",
    timestamp: "15 minutes ago",
    read: false,
  },
  {
    id: 3,
    type: "follow",
    user: {
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
    action: "started following you",
    timestamp: "1 hour ago",
    read: false,
  },
  {
    id: 4,
    type: "job",
    user: {
      name: "TechCorp Inc.",
      avatar:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100",
    },
    action: "invited you to apply for",
    target: "Senior React Developer",
    timestamp: "2 hours ago",
    read: true,
  },
  {
    id: 5,
    type: "achievement",
    action: "earned a new badge",
    target: "Top Contributor",
    timestamp: "3 hours ago",
    read: true,
  },
  {
    id: 6,
    type: "review",
    user: {
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    },
    action: "left you a 5-star review",
    timestamp: "5 hours ago",
    read: true,
  },
];

const getIcon = (type) => {
  switch (type) {
    case "like":
      return <Heart className="w-5 h-5 text-red-500" fill="currentColor" />;
    case "comment":
      return <MessageCircle className="w-5 h-5 text-blue-500" />;
    case "follow":
      return <UserPlus className="w-5 h-5 text-green-500" />;
    case "job":
      return <Briefcase className="w-5 h-5 text-purple-500" />;
    case "achievement":
      return <Award className="w-5 h-5 text-yellow-500" />;
    case "review":
      return <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />;
    default:
      return <TrendingUp className="w-5 h-5 text-gray-400" />;
  }
};

export function Notifications() {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

        <div className="flex items-center justify-between mb-6">

          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            <p className="text-gray-400">{unreadCount} unread notifications</p>
          </div>

          <Button variant="outline" className="border-white/10">
            Mark all as read
          </Button>

        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >

        <Tabs defaultValue="all">

          <TabsList className="bg-white/5 border border-white/10 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="mentions">Mentions</TabsTrigger>
          </TabsList>

          {/* ALL */}

          <TabsContent value="all" className="space-y-3">

            {notifications.map((notification, index) => (

              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
              >

                <Card
                  className={`bg-white/5 backdrop-blur-xl border-white/10 p-4 hover:bg-white/10 transition-all ${
                    !notification.read ? "ring-2 ring-purple-500/30" : ""
                  }`}
                >

                  <div className="flex items-start gap-4">

                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      {getIcon(notification.type)}
                    </div>

                    <div className="flex-1">

                      {notification.user && (

                        <div className="flex items-center gap-2 mb-2">

                          <Avatar className="w-8 h-8">
                            <AvatarImage src={notification.user.avatar} />
                            <AvatarFallback>
                              {notification.user.name[0]}
                            </AvatarFallback>
                          </Avatar>

                          <span className="font-semibold">
                            {notification.user.name}
                          </span>

                        </div>

                      )}

                      <p className="text-gray-300">

                        {notification.action}{" "}

                        {notification.target && (
                          <span className="text-purple-400 font-semibold">
                            {notification.target}
                          </span>
                        )}

                      </p>

                      {notification.content && (

                        <p className="text-sm text-gray-400 mt-2 p-3 bg-white/5 rounded-lg">
                          "{notification.content}"
                        </p>

                      )}

                      <p className="text-xs text-gray-500 mt-2">
                        {notification.timestamp}
                      </p>

                    </div>

                  </div>

                </Card>

              </motion.div>

            ))}

          </TabsContent>

          {/* UNREAD */}

          <TabsContent value="unread" className="space-y-3">

            {notifications
              .filter((n) => !n.read)
              .map((notification, index) => (

                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >

                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-4 ring-2 ring-purple-500/30">

                    <div className="flex items-start gap-4">

                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        {getIcon(notification.type)}
                      </div>

                      <div className="flex-1">

                        <p className="text-gray-300">
                          {notification.action}
                        </p>

                        <p className="text-xs text-gray-500 mt-2">
                          {notification.timestamp}
                        </p>

                      </div>

                    </div>

                  </Card>

                </motion.div>

              ))}

          </TabsContent>

          {/* MENTIONS */}

          <TabsContent value="mentions">

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 text-center">
              <p className="text-gray-400">No mentions yet</p>
            </Card>

          </TabsContent>

        </Tabs>

      </motion.div>

    </div>
  );
}