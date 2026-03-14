import { Outlet, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Home,
  Compass,
  Briefcase,
  MessageSquare,
  Bell,
  FolderKanban,
  Bookmark,
  Users,
  UserPlus,
  BarChart3,
  Settings,
  Search,
  Plus,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: Compass, label: "Explore Talent", path: "/dashboard/explore" },
  { icon: Briefcase, label: "Jobs", path: "/dashboard/jobs" },
  { icon: MessageSquare, label: "Messages", path: "/dashboard/messages", badge: 3 },
  { icon: Bell, label: "Notifications", path: "/dashboard/notifications", badge: 12 },
  { icon: FolderKanban, label: "My Projects", path: "/dashboard/projects" },
  { icon: Bookmark, label: "Saved Posts", path: "/dashboard/saved" },
  { icon: Users, label: "Followers", path: "/dashboard/followers" },
  { icon: UserPlus, label: "Following", path: "/dashboard/following" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

const suggestedTalent = [
  {
    id: 1,
    name: "Alex Turner",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Data Analyst",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
  },
];

const trendingSkills = [
  { name: "React", count: "12.5K" },
  { name: "Python", count: "10.2K" },
  { name: "UI Design", count: "8.9K" },
  { name: "AWS", count: "7.3K" },
  { name: "Machine Learning", count: "6.8K" },
];

export function DashboardLayout() {

  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* HEADER */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10"
      >
        <div className="flex items-center justify-between px-4 py-3">

          {/* Logo */}
          <div className="flex items-center gap-4">

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <Menu />}
            </Button>

            <Link to="/" className="flex items-center gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Sparkles className="w-5 h-5"/>
              </div>

              <span className="hidden sm:inline text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TalentHub
              </span>

            </Link>

          </div>

          {/* Search */}
          <div className="hidden md:block flex-1 max-w-xl mx-4">
            <div className="relative">

              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>

              <Input
                placeholder="Search talent, jobs..."
                className="pl-11 bg-white/5 border-white/10 focus:border-purple-500"
              />

            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">

            <Button className="hidden sm:flex bg-gradient-to-r from-purple-500 to-pink-500">
              <Plus className="w-4 h-4 mr-2"/>
              Create Post
            </Button>

            <Link to="/dashboard/profile">

              <Avatar className="cursor-pointer ring-2 ring-purple-500/30 hover:ring-purple-500">

                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"/>

                <AvatarFallback>JD</AvatarFallback>

              </Avatar>

            </Link>

          </div>

        </div>
      </motion.header>

      <div className="flex pt-16">

        {/* LEFT SIDEBAR */}
        <aside
          className={`fixed lg:static left-0 top-16 bottom-0 w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 overflow-y-auto z-40 transition-transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >

          <nav className="p-4 space-y-1">

            {menuItems.map((item) => {

              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                  ${isActive
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                    : "hover:bg-white/5 text-gray-400 hover:text-white"
                  }`}
                >

                  <item.icon className="w-5 h-5"/>

                  <span className="flex-1">{item.label}</span>

                  {item.badge && (
                    <Badge className="bg-purple-500">{item.badge}</Badge>
                  )}

                </Link>
              );
            })}

          </nav>

        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 lg:ml-64 lg:mr-80 p-4 md:p-6">
          <Outlet/>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block fixed right-0 top-16 bottom-0 w-80 bg-black/30 backdrop-blur-xl border-l border-white/10 overflow-y-auto p-6 space-y-6">

          {/* Suggested Talent */}
          <Card className="bg-white/5 border-white/10 p-4">

            <h3 className="font-semibold mb-4">
              Suggested Talent
            </h3>

            <div className="space-y-3">

              {suggestedTalent.map((talent) => (

                <div key={talent.id} className="flex items-center gap-3">

                  <Avatar>

                    <AvatarImage src={talent.image}/>

                    <AvatarFallback>
                      {talent.name[0]}
                    </AvatarFallback>

                  </Avatar>

                  <div className="flex-1">

                    <p className="text-sm font-medium">
                      {talent.name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {talent.role}
                    </p>

                  </div>

                  <Button size="sm" variant="ghost">
                    Follow
                  </Button>

                </div>

              ))}

            </div>

          </Card>

          {/* Trending Skills */}
          <Card className="bg-white/5 border-white/10 p-4">

            <h3 className="font-semibold mb-4">
              Trending Skills
            </h3>

            {trendingSkills.map((skill) => (

              <div
                key={skill.name}
                className="flex justify-between text-sm py-1"
              >

                <span>#{skill.name}</span>

                <span className="text-gray-400">
                  {skill.count}
                </span>

              </div>

            ))}

          </Card>

        </aside>

      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}

    </div>
  );
}