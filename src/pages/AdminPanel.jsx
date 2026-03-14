import { motion } from "framer-motion";
import { Shield, Users, Briefcase, Flag, DollarSign } from "lucide-react";

import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";

const stats = [
  { label: "Total Users", value: "50,234", icon: Users, color: "from-blue-500 to-cyan-500" },
  { label: "Active Jobs", value: "1,245", icon: Briefcase, color: "from-purple-500 to-pink-500" },
  { label: "Revenue", value: "$125K", icon: DollarSign, color: "from-green-500 to-emerald-500" },
  { label: "Reports", value: "23", icon: Flag, color: "from-red-500 to-orange-500" },
];

export function AdminPanel() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">

      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-6">

            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
              <Shield className="w-7 h-7"/>
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Admin Panel
              </h1>
              <p className="text-gray-400">
                Platform management and analytics
              </p>
            </div>

          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >

                <Card className="bg-white/5 border-white/10 backdrop-blur-xl p-6">

                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6"/>
                  </div>

                  <p className="text-2xl font-bold">
                    {stat.value}
                  </p>

                  <p className="text-sm text-gray-400">
                    {stat.label}
                  </p>

                </Card>

              </motion.div>
            );
          })}

        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >

          <Tabs defaultValue="users" className="space-y-6">

            <TabsList className="bg-white/5 border border-white/10">

              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="jobs">Jobs</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>

            </TabsList>

            <TabsContent value="users">

              <Card className="bg-white/5 border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-4">
                  User Management
                </h3>
                <p className="text-gray-400">
                  Manage platform users and their permissions
                </p>
              </Card>

            </TabsContent>

            <TabsContent value="jobs">

              <Card className="bg-white/5 border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Job Moderation
                </h3>
                <p className="text-gray-400">
                  Review and moderate job postings
                </p>
              </Card>

            </TabsContent>

            <TabsContent value="reports">

              <Card className="bg-white/5 border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Reported Content
                </h3>
                <p className="text-gray-400">
                  Review flagged content and take action
                </p>
              </Card>

            </TabsContent>

            <TabsContent value="analytics">

              <Card className="bg-white/5 border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Platform Analytics
                </h3>
                <p className="text-gray-400">
                  View detailed platform metrics and insights
                </p>
              </Card>

            </TabsContent>

          </Tabs>

        </motion.div>

      </div>

    </div>
  );
}