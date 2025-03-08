export default function Cta() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Hyperscale your audit firm and grow your business with SignalsHQ's
            AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-blue-700 hover:bg-blue-50">
              Get Started
            </button>
            <button className="btn bg-transparent border-2 border-white text-white hover:bg-blue-700">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
