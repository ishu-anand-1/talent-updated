import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Mail,
  Lock,
  Github,
  Linkedin,
  User,
  Briefcase,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

import { useState } from "react";

export function Signup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const defaultType =
    searchParams.get("type") === "recruiter" ? "recruiter" : "talent";

  const [userType, setUserType] = useState(defaultType);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // mock signup
    navigate("/dashboard");
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-4">

      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >

        {/* HEADER */}

        <div className="text-center mb-8">

          <Link to="/" className="inline-flex items-center gap-2 mb-6">

            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-7 h-7" />
            </div>

            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              TalentHub
            </span>

          </Link>

          <h1 className="text-3xl font-bold mb-2">
            Create Your Account
          </h1>

          <p className="text-gray-400">
            Join thousands of professionals
          </p>

        </div>

        {/* CARD */}

        <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8">

          {/* USER TYPE */}

          <Tabs value={userType} onValueChange={setUserType} className="mb-6">

            <TabsList className="grid w-full grid-cols-2 bg-white/5">

              <TabsTrigger value="talent">
                <User className="w-4 h-4 mr-2" />
                Talent
              </TabsTrigger>

              <TabsTrigger value="recruiter">
                <Briefcase className="w-4 h-4 mr-2" />
                Recruiter
              </TabsTrigger>

            </TabsList>

          </Tabs>

          {/* FORM */}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}

            <div>

              <Label htmlFor="name">Full Name</Label>

              <div className="relative mt-2">

                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    handleChange("name", e.target.value)
                  }
                  className="pl-11 bg-white/5 border-white/10"
                  required
                />

              </div>

            </div>

            {/* EMAIL */}

            <div>

              <Label htmlFor="email">Email</Label>

              <div className="relative mt-2">

                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    handleChange("email", e.target.value)
                  }
                  className="pl-11 bg-white/5 border-white/10"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <Label htmlFor="password">Password</Label>

              <div className="relative mt-2">

                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    handleChange("password", e.target.value)
                  }
                  className="pl-11 bg-white/5 border-white/10"
                  required
                />

              </div>

            </div>

            {/* CONFIRM PASSWORD */}

            <div>

              <Label htmlFor="confirmPassword">
                Confirm Password
              </Label>

              <div className="relative mt-2">

                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleChange("confirmPassword", e.target.value)
                  }
                  className="pl-11 bg-white/5 border-white/10"
                  required
                />

              </div>

            </div>

            {/* TERMS */}

            <label className="flex items-start gap-2 text-sm">

              <input type="checkbox" className="mt-1 rounded" required />

              <span className="text-gray-300">
                I agree to the{" "}
                <Link to="#" className="text-purple-400">
                  Terms
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-purple-400">
                  Privacy Policy
                </Link>
              </span>

            </label>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Create Account
            </Button>

          </form>

          {/* SOCIAL LOGIN */}

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

          <div className="grid grid-cols-3 gap-3">

            <Button variant="outline" className="border-white/10">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5"
              />
            </Button>

            <Button variant="outline" className="border-white/10">
              <Github className="w-5 h-5" />
            </Button>

            <Button variant="outline" className="border-white/10">
              <Linkedin className="w-5 h-5" />
            </Button>

          </div>

          <p className="text-center text-sm text-gray-400 mt-6">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-purple-400 font-semibold"
            >
              Sign in
            </Link>

          </p>

        </Card>

      </motion.div>
    </div>
  );
}