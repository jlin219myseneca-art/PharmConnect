
export const ProblemsSection = () => {
    const problems = [
      {
        title: "Pharmacy Owners",
        description: "Struggling with $10K/month locum costs, 30-40% unfilled shifts, and inability to compete with chains."
      },
      {
        title: "Pharmacists",
        description: "Facing burnout, $16K pay gap vs. hospitals, and 300+ prescriptions/day with no time for patient care."
      },
      {
        title: "Patients",
        description: "Waiting 45+ minutes, lacking language-matched care, and unable to access clinical services locally."
      }
    ];
  
    return (
      <section className="py-20 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Three Critical Challenges</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="font-display text-xl font-semibold text-teal-900 mb-4">{problem.title}</h3>
                <p className="font-sans text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
