import { Star } from "lucide-react";

const talents = [
  {
    name: "Sarah Johnson",
    role: "Senior Full-Stack Developer",
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "Michael Chen",
    role: "UI/UX Design Lead",
    skills: ["Figma", "Adobe XD", "UI Design"],
  },
];

export default function TrendingTalent() {
  return (
    <section className="px-10 py-24">

      <h2 className="text-3xl font-bold text-center">
        Trending Talent
      </h2>

      <p className="text-gray-400 text-center mb-12">
        Discover top professionals making waves
      </p>

      <div className="grid md:grid-cols-4 gap-6">

        {talents.map((t, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500 transition"
          >

            <div className="w-16 h-16 rounded-full bg-gray-700 mb-4" />

            <h3 className="font-semibold">{t.name}</h3>

            <p className="text-gray-400 text-sm mb-3">
              {t.role}
            </p>

            <div className="flex gap-2 flex-wrap mb-4">
              {t.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs bg-purple-500/20 px-2 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>

            <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              Hire Me
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}