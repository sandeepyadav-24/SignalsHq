export default function RoiStats() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Proven Results for Audit Firms</h2>
          <p className="section-subtitle">
            Our clients experience significant improvements in efficiency and
            accuracy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-5xl font-bold text-blue-600 mb-4">80%</div>
            <div className="text-xl font-medium text-gray-800">
              Reduction in manual effort
            </div>
            <p className="mt-4 text-gray-600">
              Automate repetitive tasks and free up your team for higher-value
              work
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-5xl font-bold text-purple-600 mb-4">5X</div>
            <div className="text-xl font-medium text-gray-800">
              Risk identification
            </div>
            <p className="mt-4 text-gray-600">
              Detect more potential issues with AI-powered risk analysis
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-5xl font-bold text-green-600 mb-4">2X</div>
            <div className="text-xl font-medium text-gray-800">
              Document processing speed
            </div>
            <p className="mt-4 text-gray-600">
              Process and analyze documentation twice as fast as manual methods
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
