export default function HowItWorks() {
  return (
    <section className="px-10 py-24 bg-gradient-to-b from-black to-purple-950/30">

      <h2 className="text-3xl font-bold text-center mb-16">
        How It Works
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="p-8 rounded-xl border border-purple-500/20 bg-purple-500/10">

          <h3 className="text-xl font-semibold mb-4">
            For Talent
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>1 Create your professional profile</li>
            <li>2 Upload your best projects</li>
            <li>3 Build your following</li>
            <li>4 Get discovered by companies</li>

          </ul>

        </div>

        <div className="p-8 rounded-xl border border-blue-500/20 bg-blue-500/10">

          <h3 className="text-xl font-semibold mb-4">
            For Recruiters
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>1 Post job openings</li>
            <li>2 AI powered talent discovery</li>
            <li>3 Message candidates</li>
            <li>4 Hire the perfect match</li>

          </ul>

        </div>

      </div>

    </section>
  );
}