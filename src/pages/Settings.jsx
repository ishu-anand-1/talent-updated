import { motion } from "framer-motion";
import {
  User,
  Bell,
  CreditCard,
  Shield
} from "lucide-react";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "../components/ui/tabs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../components/ui/avatar";

export function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h1 className="text-3xl font-bold mb-2">
          Settings
        </h1>

        <p className="text-gray-400">
          Manage your account settings and preferences
        </p>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >

        <Tabs defaultValue="account" className="space-y-6">

          {/* Tabs */}

          <TabsList className="bg-white/5 border border-white/10">

            <TabsTrigger value="account">
              <User className="w-4 h-4 mr-2" />
              Account
            </TabsTrigger>

            <TabsTrigger value="privacy">
              <Shield className="w-4 h-4 mr-2" />
              Privacy
            </TabsTrigger>

            <TabsTrigger value="notifications">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>

            <TabsTrigger value="billing">
              <CreditCard className="w-4 h-4 mr-2" />
              Billing
            </TabsTrigger>

          </TabsList>

          {/* ACCOUNT */}

          <TabsContent value="account" className="space-y-6">

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">

              <h3 className="text-lg font-semibold mb-6">
                Profile Information
              </h3>

              <div className="space-y-6">

                {/* Avatar */}

                <div className="flex items-center gap-6">

                  <Avatar className="w-20 h-20">

                    <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" />

                    <AvatarFallback>
                      JD
                    </AvatarFallback>

                  </Avatar>

                  <div>

                    <Button
                      variant="outline"
                      className="border-white/10 mb-2"
                    >
                      Change Photo
                    </Button>

                    <p className="text-xs text-gray-400">
                      JPG, PNG or GIF. Max 2MB.
                    </p>

                  </div>

                </div>

                {/* Name */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>

                    <Label htmlFor="firstName">
                      First Name
                    </Label>

                    <Input
                      id="firstName"
                      defaultValue="John"
                      className="mt-2 bg-white/5 border-white/10"
                    />

                  </div>

                  <div>

                    <Label htmlFor="lastName">
                      Last Name
                    </Label>

                    <Input
                      id="lastName"
                      defaultValue="Doe"
                      className="mt-2 bg-white/5 border-white/10"
                    />

                  </div>

                </div>

                {/* Email */}

                <div>

                  <Label htmlFor="email">
                    Email
                  </Label>

                  <Input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="mt-2 bg-white/5 border-white/10"
                  />

                </div>

                {/* Bio */}

                <div>

                  <Label htmlFor="bio">
                    Bio
                  </Label>

                  <textarea
                    id="bio"
                    rows={4}
                    defaultValue="Passionate full-stack developer specializing in React and Node.js..."
                    className="mt-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                  />

                </div>

                {/* Location */}

                <div>

                  <Label htmlFor="location">
                    Location
                  </Label>

                  <Input
                    id="location"
                    defaultValue="San Francisco, CA"
                    className="mt-2 bg-white/5 border-white/10"
                  />

                </div>

                {/* Website */}

                <div>

                  <Label htmlFor="website">
                    Website
                  </Label>

                  <Input
                    id="website"
                    defaultValue="https://johndoe.dev"
                    className="mt-2 bg-white/5 border-white/10"
                  />

                </div>

                <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                  Save Changes
                </Button>

              </div>

            </Card>

            {/* Change Password */}

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">

              <h3 className="text-lg font-semibold mb-6">
                Change Password
              </h3>

              <div className="space-y-4">

                <Input
                  type="password"
                  placeholder="Current Password"
                  className="bg-white/5 border-white/10"
                />

                <Input
                  type="password"
                  placeholder="New Password"
                  className="bg-white/5 border-white/10"
                />

                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  className="bg-white/5 border-white/10"
                />

                <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                  Update Password
                </Button>

              </div>

            </Card>

          </TabsContent>

          {/* PRIVACY */}

          <TabsContent value="privacy">

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6 space-y-6">

              <h3 className="text-lg font-semibold">
                Privacy Controls
              </h3>

              {[
                "Public Profile",
                "Show Online Status",
                "Show Profile Views",
                "Allow Messages from Anyone",
                "Show Email Address",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-between"
                >

                  <p className="font-medium">
                    {item}
                  </p>

                  <Switch defaultChecked />

                </div>

              ))}

            </Card>

          </TabsContent>

          {/* NOTIFICATIONS */}

          <TabsContent value="notifications">

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6 space-y-6">

              <h3 className="text-lg font-semibold">
                Email Notifications
              </h3>

              {[
                "New Followers",
                "Likes and Comments",
                "Job Offers",
                "Messages",
                "Weekly Summary",
                "Product Updates",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-between"
                >

                  <p className="font-medium">
                    {item}
                  </p>

                  <Switch defaultChecked />

                </div>

              ))}

            </Card>

          </TabsContent>

          {/* BILLING */}

          <TabsContent value="billing" className="space-y-6">

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 p-6">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    Current Plan
                  </h3>

                  <p className="text-sm text-gray-400">
                    Free Plan
                  </p>

                </div>

                <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                  Upgrade to Pro
                </Button>

              </div>

            </Card>

            <Card className="bg-white/5 border-white/10 p-6">

              <h3 className="text-lg font-semibold mb-4">
                Payment Method
              </h3>

              <p className="text-gray-400 mb-4">
                No payment method added
              </p>

              <Button variant="outline" className="border-white/10">
                Add Payment Method
              </Button>

            </Card>

          </TabsContent>

        </Tabs>

      </motion.div>

    </div>
  );
}