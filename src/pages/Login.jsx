import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Mail, Lock, Github, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // temporary login logic
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-4">

      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >

        {/* Logo */}
        <div className="text-center mb-8">

          <Link to="/" className="inline-flex items-center gap-2 mb-6">

            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-7 h-7" />
            </div>

            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              TalentHub
            </span>

          </Link>

          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue your journey</p>

        </div>

        <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>

              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>

              <div className="relative mt-2">

                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 bg-white/5 border-white/10 focus:border-purple-500"
                  required
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>

              <div className="relative mt-2">

                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 bg-white/5 border-white/10 focus:border-purple-500"
                  required
                />

              </div>

            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm">

                <input type="checkbox" className="rounded" />

                <span className="text-gray-300">
                  Remember me
                </span>

              </label>

              <Link
                to="/forgot-password"
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                Forgot password?
              </Link>

            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Sign In
            </Button>

          </form>

          {/* Divider */}
          <div className="relative my-6">

            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black/50 text-gray-400">
                Or continue with
              </span>
            </div>

          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-3">

            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5"
              />
            </Button>

            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              <Github className="w-5 h-5" />
            </Button>

            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              <Linkedin className="w-5 h-5" />
            </Button>

          </div>

          {/* Signup */}
          <p className="text-center text-sm text-gray-400 mt-6">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              Sign up
            </Link>

          </p>

        </Card>

      </motion.div>

    </div>
  );
}