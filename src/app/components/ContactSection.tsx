export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-[1100px] mx-auto px-5 py-[120px]"
    >
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold text-[#0b2a4a]">
          Engineering Collaboration Portal
        </h2>
        <p className="text-slate-500 mt-3 max-w-[600px] mx-auto">
          Submit RFQ, technical requirements, or partnership inquiries.
          Our engineering team responds within 24 hours.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT: STATUS PANEL */}
        <div className="relative rounded-3xl overflow-hidden p-8 text-white bg-[#050b1f]">

          {/* glow */}
          <div className="absolute -top-20 -right-20 w-[220px] h-[220px] bg-cyan-400/20 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-[220px] h-[220px] bg-blue-500/20 blur-[90px]" />

          <div className="relative z-10 space-y-6">

            <div>
              <h3 className="text-xl font-semibold">
                Global Engineering Desk
              </h3>
              <p className="text-white/60 text-sm mt-2">
                Dedicated RFQ response system for industrial clients
              </p>
            </div>

            <div className="space-y-4 text-sm">

              {[
                ["⚡", "Avg response: 12–24h"],
                ["🔒", "NDA available on request"],
                ["🌍", "Global supply chain support"],
                ["🏭", "Automotive-grade production"],
              ].map(([icon, text]) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <span>{icon}</span>
                  <span className="text-white/80">{text}</span>
                </div>
              ))}

            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-white/50">
              Chuanghua Industrial • Engineering Division
            </div>
          </div>
        </div>

        {/* CENTER: FORM CORE */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

          <h3 className="text-lg font-semibold text-[#0b2a4a] mb-6">
            Submit Technical Request
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            <input className="input" placeholder="Full Name *" />
            <input className="input" placeholder="Business Email *" />
            <input className="input" placeholder="Company *" />
            <input className="input" placeholder="Country / Region" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">

            <select className="input">
              <option>Inquiry Type</option>
              <option>RFQ</option>
              <option>Technical Support</option>
              <option>OEM Partnership</option>
            </select>

            <select className="input">
              <option>Product Category</option>
              <option>AI Server Transformer</option>
              <option>EV Inductor</option>
              <option>RF System</option>
              <option>Energy Storage</option>
            </select>

          </div>

          <textarea
            rows={6}
            className="input mt-4"
            placeholder="Describe voltage, frequency, power requirements, application..."
          />

          {/* UPLOAD */}
          <div className="mt-5 border border-dashed border-slate-300 rounded-2xl p-8 text-center bg-slate-50">
            <p className="text-sm text-slate-600">
              Upload technical drawings / specifications
            </p>
            <p className="text-xs text-slate-400 mt-1">
              PDF · STEP · DWG · DXF · ZIP
            </p>
            <input type="file" multiple className="mt-4" />
          </div>

          {/* BUTTON */}
          <button className="mt-6 w-full py-4 rounded-2xl bg-[#0b2a4a] text-white font-semibold hover:bg-blue-600 transition">
            Send Engineering Request
          </button>

        </div>
      </div>

      {/* CSS helper (important) */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          outline: none;
          font-size: 14px;
          background: white;
          transition: all 0.2s;
        }

        .input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
        }
      `}</style>
    </section>
  );
}