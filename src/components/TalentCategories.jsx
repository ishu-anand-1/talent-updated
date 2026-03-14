const categories = [
  "Software Developers",
  "UI/UX Designers",
  "Data Scientists",
  "AI Engineers",
  "Content Creators",
  "Video Editors",
  "Product Managers",
  "Marketing Experts",
];

export default function TalentCategories() {
  return (
    <section className="px-10 py-24 bg-gradient-to-b from-black to-gray-900">

      <h2 className="text-3xl font-bold text-center mb-12">
        Talent Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {categories.map((c) => (
          <div
            key={c}
            className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-purple-500 transition"
          >
            <h3 className="font-semibold">{c}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}