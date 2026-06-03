
export const TestimonialsSection = () => {
    const testimonials = [
      {
        quote: "PharmConnect has completely transformed how I manage my locum staffing. The consistency and quality are unmatched.",
        name: "Dr. Sarah Jenkins",
        title: "Owner, Independent Pharmacy"
      },
      {
        quote: "Joining the network meant I could finally focus on patient-centered care. The support structure is exactly what we needed.",
        name: "Marcus Thorne",
        title: "Pharmacist"
      },
      {
        quote: "The collaborative approach has allowed us to compete with the big chains while keeping our community-focused identity.",
        name: "Elena Rodriguez",
        title: "Owner, Community Pharmacy"
      }
    ];
  
    return (
      <section className="py-20 px-6 sm:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Trusted by Pharmacy Leaders</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <p className="font-sans text-gray-600 mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-teal-900">{t.name}</p>
                  <p className="font-sans text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
