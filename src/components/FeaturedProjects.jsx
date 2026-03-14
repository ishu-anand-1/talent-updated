export default function FeaturedProjects() {
  return (
    <section className="px-10 py-24">

      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
          >

            <div className="h-48 bg-gray-800" />

            <div className="p-6">

              <h3 className="font-semibold">
                AI-Powered Analytics Dashboard
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                by Sarah Johnson
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}