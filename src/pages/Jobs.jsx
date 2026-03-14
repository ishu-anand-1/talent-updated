import { motion } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Star,
  Bookmark,
  TrendingUp,
} from "lucide-react";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: true,
    salary: "$120k - $180k",
    posted: "2 days ago",
    applicants: 45,
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    description:
      "We're looking for a Senior React Developer to join our growing team...",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Design Studio",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100",
    location: "New York, NY",
    type: "Full-time",
    remote: false,
    salary: "$90k - $130k",
    posted: "1 week ago",
    applicants: 78,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    description:
      "Join our design team to create beautiful and intuitive user experiences...",
  },
];

export function Jobs() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

        <div className="flex items-center justify-between mb-6">

          <div>
            <h1 className="text-3xl font-bold">
              Find Your Next Opportunity
            </h1>

            <p className="text-gray-400">
              Browse {jobs.length} available positions
            </p>
          </div>

          <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
            Post a Job
          </Button>

        </div>

        {/* Search + Filters */}

        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <div className="flex-1">

            <div className="relative">

              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>

              <Input
                placeholder="Search by title, company, or skills..."
                className="pl-11 bg-white/5 border-white/10 focus:border-purple-500"
              />

            </div>

          </div>

          <Select defaultValue="all">

            <SelectTrigger className="w-full md:w-48 bg-white/5 border-white/10">
              <SelectValue placeholder="Job Type"/>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="fulltime">Full-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="parttime">Part-time</SelectItem>
            </SelectContent>

          </Select>

          <Select defaultValue="all">

            <SelectTrigger className="w-full md:w-48 bg-white/5 border-white/10">
              <SelectValue placeholder="Location"/>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="remote">Remote Only</SelectItem>
              <SelectItem value="onsite">On-site</SelectItem>
            </SelectContent>

          </Select>

          <Button variant="outline" className="border-white/10">
            <Filter className="w-4 h-4 mr-2"/>
            More Filters
          </Button>

        </div>

      </motion.div>

      {/* AI Recommended Jobs */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 p-4">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5"/>
            </div>

            <div className="flex-1">

              <h3 className="font-semibold">
                AI-Matched Jobs
              </h3>

              <p className="text-sm text-gray-400">
                12 jobs match your profile perfectly
              </p>

            </div>

            <Badge className="bg-purple-500 text-white">
              New
            </Badge>

          </div>

        </Card>

      </motion.div>

      {/* Job List */}

      <div className="space-y-4">

        {jobs.map((job, index) => (

          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >

            <Card className="bg-white/5 border-white/10 hover:border-purple-500/30 p-6">

              <div className="flex flex-col md:flex-row gap-6">

                <Avatar className="w-16 h-16 rounded-xl ring-2 ring-purple-500/30">
                  <AvatarImage src={job.logo}/>
                  <AvatarFallback>
                    {job.company[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-3">

                  <div className="flex flex-col md:flex-row justify-between gap-4">

                    <div>

                      <h3 className="text-xl font-semibold">
                        {job.title}
                      </h3>

                      <p className="text-purple-400">
                        {job.company}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-2">

                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4"/>
                          {job.location}
                        </div>

                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4"/>
                          {job.type}
                        </div>

                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4"/>
                          {job.salary}
                        </div>

                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4"/>
                          {job.posted}
                        </div>

                      </div>

                    </div>

                    <div className="flex md:flex-col gap-2">

                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                        Apply Now
                      </Button>

                      <Button variant="outline" size="icon" className="border-white/10">
                        <Bookmark className="w-4 h-4"/>
                      </Button>

                    </div>

                  </div>

                  <p className="text-gray-300 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {job.remote && (
                      <Badge className="bg-green-500/20 text-green-300">
                        Remote
                      </Badge>
                    )}

                    {job.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-purple-500/10 text-purple-300"
                      >
                        {skill}
                      </Badge>
                    ))}

                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400">

                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" fill="currentColor"/>
                      Match: 95%
                    </div>

                    <div>
                      {job.applicants} applicants
                    </div>

                  </div>

                </div>

              </div>

            </Card>

          </motion.div>

        ))}

      </div>

      {/* Load More */}

      <div className="text-center py-8">

        <Button variant="outline" className="border-white/10">
          Load More Jobs
        </Button>

      </div>

    </div>
  );
}