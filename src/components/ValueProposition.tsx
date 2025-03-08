export default function ValueProposition() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">SignalsHQ is built for Auditors</h2>
          <p className="section-subtitle">
            Our platform is designed specifically for the unique needs of audit
            professionals, helping you work smarter and deliver better results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Streamline your work</h3>
            <p className="text-gray-600">
              Automate repetitive tasks like document vouching, test of details,
              and data collection. Focus on what matters most: providing
              insights and value to your clients.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Works with your favorite tools
            </h3>
            <p className="text-gray-600">
              Seamlessly integrates with your existing audit software and
              workflow. No need to change your processes—we enhance them.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Save hours every week</h3>
            <p className="text-gray-600">
              Our clients save an average of 15+ hours per week on documentation
              tasks. That's time you can reinvest in growing your practice or
              improving work-life balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
