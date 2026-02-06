function Divisions() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Cafe Card */}
        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">For Cafes & Restaurants</h2>
          <p className="text-gray-500 mt-4 mb-8 font-medium italic">"Create a signature ambience that makes customers stay longer."</p>
          <ul className="space-y-4">
            {['Premium ambience upgrade', 'Perceived air freshness', 'Photo-friendly "Feature Walls"', 'Low-light plant options'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                <span className="text-green-600">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate Card */}
        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">For Corporate Offices</h2>
          <p className="text-gray-500 mt-4 mb-8 font-medium italic">"Employee well-being + trackable sustainability inputs."</p>
          <ul className="space-y-4">
            {['Biophilic design & wellness', 'Resource-efficient irrigation', 'Quantifiable plant inventory', 'ESG & BRSR documentation'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                <span className="text-green-600">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Divisions