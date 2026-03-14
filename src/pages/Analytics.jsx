import { motion } from "framer-motion";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

import {
  TrendingUp,
  Eye,
  Heart,
  Users,
  MessageCircle,
  Target,
} from "lucide-react";


const profileViewsData = [
  { name: "Mon", views: 120 },
  { name: "Tue", views: 210 },
  { name: "Wed", views: 180 },
  { name: "Thu", views: 250 },
  { name: "Fri", views: 300 },
  { name: "Sat", views: 270 },
  { name: "Sun", views: 320 },
];

const followersData = [
  { name: "Jan", followers: 120 },
  { name: "Feb", followers: 180 },
  { name: "Mar", followers: 250 },
  { name: "Apr", followers: 310 },
  { name: "May", followers: 420 },
];

const engagementData = [
  { name: "Week 1", likes: 120, comments: 40 },
  { name: "Week 2", likes: 180, comments: 60 },
  { name: "Week 3", likes: 220, comments: 75 },
  { name: "Week 4", likes: 300, comments: 100 },
];


export function Analytics() {
  return (
    <div className="space-y-6">

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h1 className="text-3xl font-bold mb-2">
          Analytics Dashboard
        </h1>

        <p className="text-gray-400">
          Track your profile growth and engagement
        </p>

      </motion.div>


      {/* STATS CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Card className="p-6 flex items-center gap-4">

          <Eye className="w-8 h-8 text-blue-500" />

          <div>
            <p className="text-gray-500 text-sm">Profile Views</p>
            <p className="text-xl font-bold">2,340</p>
          </div>

        </Card>

        <Card className="p-6 flex items-center gap-4">

          <Users className="w-8 h-8 text-green-500" />

          <div>
            <p className="text-gray-500 text-sm">Followers</p>
            <p className="text-xl font-bold">1,280</p>
          </div>

        </Card>

        <Card className="p-6 flex items-center gap-4">

          <Heart className="w-8 h-8 text-red-500" />

          <div>
            <p className="text-gray-500 text-sm">Total Likes</p>
            <p className="text-xl font-bold">4,620</p>
          </div>

        </Card>

      </div>


      {/* TABS */}

      <Tabs defaultValue="views">

        <TabsList>

          <TabsTrigger value="views">
            <TrendingUp className="w-4 h-4 mr-2" />
            Profile Views
          </TabsTrigger>

          <TabsTrigger value="followers">
            <Users className="w-4 h-4 mr-2" />
            Followers
          </TabsTrigger>

          <TabsTrigger value="engagement">
            <MessageCircle className="w-4 h-4 mr-2" />
            Engagement
          </TabsTrigger>

        </TabsList>


        {/* PROFILE VIEWS */}

        <TabsContent value="views">

          <Card className="p-6">

            <ResponsiveContainer width="100%" height={300}>

              <AreaChart data={profileViewsData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="#6366f1"
                  fill="#6366f1"
                />

              </AreaChart>

            </ResponsiveContainer>

          </Card>

        </TabsContent>


        {/* FOLLOWERS */}

        <TabsContent value="followers">

          <Card className="p-6">

            <ResponsiveContainer width="100%" height={300}>

              <LineChart data={followersData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="followers"
                  stroke="#22c55e"
                />

              </LineChart>

            </ResponsiveContainer>

          </Card>

        </TabsContent>


        {/* ENGAGEMENT */}

        <TabsContent value="engagement">

          <Card className="p-6">

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={engagementData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="likes" fill="#ef4444" />

                <Bar dataKey="comments" fill="#3b82f6" />

              </BarChart>

            </ResponsiveContainer>

          </Card>

        </TabsContent>

      </Tabs>

    </div>
  );
}