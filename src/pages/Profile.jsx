import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Calendar,
  MessageSquare,
  UserPlus,
} from "lucide-react";

import { Card } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const profileData = {
  johndoe: {
    name: "John Doe",
    username: "johndoe",
    role: "Senior Full-Stack Developer",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300",
    cover:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200",
    location: "San Francisco, CA",
    experience: "8+ years",
    joined: "Jan 2020",
    bio: "Passionate full-stack developer specializing in React, Node.js and cloud architecture.",
    followers: "12.5K",
    following: "892",
    rating: 4.9,

    skills: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "AWS", level: 85 },
      { name: "MongoDB", level: 82 },
    ],

    experience_items: [
      {
        title: "Senior Full-Stack Developer",
        company: "Tech Corp",
        period: "2022 - Present",
        description: "Leading development of cloud-native applications",
      },
      {
        title: "Full-Stack Developer",
        company: "StartupXYZ",
        period: "2020 - 2022",
        description: "Built scalable microservices architecture",
      },
    ],

    education: [
      {
        degree: "B.S Computer Science",
        school: "Stanford University",
        year: "2016",
      },
    ],

    projects: [
      {
        id: 1,
        title: "E-commerce Platform",
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=400",
        likes: 523,
        views: 8200,
        tags: ["React", "Node.js", "Stripe"],
      },
      {
        id: 2,
        title: "Real-time Chat App",
        image:
          "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400",
        likes: 412,
        views: 6500,
        tags: ["WebSocket", "React", "MongoDB"],
      },
    ],

    reviews: [
      {
        id: 1,
        author: "Sarah Johnson",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        rating: 5,
        text: "Exceptional developer! Delivered our project ahead of schedule.",
        date: "2 weeks ago",
      },
    ],
  },
};

export function Profile() {
  const { username } = useParams();

  const profile = profileData[username] || profileData["johndoe"];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* COVER CARD */}

      <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
        <div className="h-48 relative">
          <img
            src={profile.cover}
            alt="cover"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="w-32 h-32 -mt-20 ring-4 ring-black">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback>{profile.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-gray-400">{profile.role}</p>

              <div className="flex gap-4 text-sm text-gray-400 mt-2">
                <div className="flex gap-1 items-center">
                  <MapPin className="w-4 h-4" />
                  {profile.location}
                </div>

                <div className="flex gap-1 items-center">
                  <Briefcase className="w-4 h-4" />
                  {profile.experience}
                </div>

                <div className="flex gap-1 items-center">
                  <Calendar className="w-4 h-4" />
                  {profile.joined}
                </div>
              </div>

              <p className="text-gray-300 mt-3">{profile.bio}</p>

              <div className="flex gap-2 mt-4">
                <Button variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>

                <Button className="bg-purple-600 hover:bg-purple-700">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* PROFILE TABS */}

      <Tabs defaultValue="portfolio">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        {/* PORTFOLIO */}

        <TabsContent value="portfolio">
          <div className="grid md:grid-cols-2 gap-4">
            {profile.projects.map((project) => (
              <Card
                key={project.id}
                className="bg-white/5 border-white/10 p-4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md"
                />

                <h3 className="mt-3 font-semibold">{project.title}</h3>

                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* SKILLS */}

        <TabsContent value="skills">
          <Card className="bg-white/5 border-white/10 p-6">
            {profile.skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="h-2 bg-gray-700 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    className="h-2 bg-purple-500 rounded"
                  />
                </div>
              </div>
            ))}
          </Card>
        </TabsContent>

        {/* EXPERIENCE */}

        <TabsContent value="experience">
          {profile.experience_items.map((exp, i) => (
            <Card
              key={i}
              className="bg-white/5 border-white/10 p-6 mb-4"
            >
              <h4 className="font-semibold">{exp.title}</h4>
              <p className="text-purple-400">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.period}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </Card>
          ))}
        </TabsContent>

        {/* REVIEWS */}

        <TabsContent value="reviews">
          {profile.reviews.map((review) => (
            <Card
              key={review.id}
              className="bg-white/5 border-white/10 p-6 mb-4"
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={review.avatar} />
                </Avatar>

                <div>
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-gray-400 text-sm">{review.date}</p>
                  <p className="mt-2 text-gray-300">{review.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}