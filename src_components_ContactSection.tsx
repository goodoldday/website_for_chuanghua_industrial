export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-[1200px] mx-auto px-5 py-24"
    >
      <div className="grid lg:grid-cols-[420px_1fr] gap-8">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-[#0b2a4a] to-[#2563eb] text-white rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-4">
            Contact Our Engineering Team
          </h2>

          <p className="opacity-90 mb-6">
            Looking for custom transformers, inductors,
            AI server power solutions or EV magnetic components?
          </p>

          <div className="space-y-4">
            <div>⚡ Response within 24 hours</div>
            <div>🔒 NDA Available</div>
            <div>🌍 Global Manufacturing Support</div>
            <div>🏭 1000+ Employees</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">

          <div className="grid md:grid-cols-2 gap-4">

            <input placeholder="Full Name *" className="p-3 rounded-xl border" />
            <input placeholder="Email *" className="p-3 rounded-xl border" />
            <input placeholder="Company Name *" className="p-3 rounded-xl border" />
            <input placeholder="Country" className="p-3 rounded-xl border" />

          </div>

          <select className="w-full mt-4 p-3 rounded-xl border">
            <option>Inquiry Type</option>
            <option>RFQ</option>
            <option>Technical Support</option>
            <option>New Project</option>
            <option>Partnership</option>
          </select>

          <select className="w-full mt-4 p-3 rounded-xl border">
            <option>Product Category</option>
            <option>AI Server Power Transformer</option>
            <option>Automotive Inductor</option>
            <option>RF Antenna</option>
            <option>Energy Storage</option>
          </select>

          <textarea
            rows={6}
            placeholder="Describe your requirements..."
            className="w-full mt-4 p-3 rounded-xl border"
          />

          <div className="mt-4 border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center">
            <input type="file" multiple className="mb-3" />
            <p>Upload Drawings, PDFs, Specifications</p>
            <p className="text-sm text-slate-500">PDF, STEP, DWG, DXF, ZIP</p>
          </div>

          <button
            className="w-full mt-6 py-4 rounded-2xl bg-[#0b2a4a] text-white font-semibold hover:bg-blue-600 transition"
          >
            Send Inquiry
          </button>

        </div>
      </div>
    </section>
  );
}