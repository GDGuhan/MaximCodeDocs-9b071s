import React, { useState } from "react";
import { DocumentFormData } from "@/types";

interface DocumentFormProps {
  onGenerate: (data: DocumentFormData) => void;
}

const DOMAINS = [
  "Web Development",
  "App Development",
  "Python",
  "Digital Marketing",
  "AI/ML",
  "Data Science",
  "Cybersecurity",
  "UI/UX Design",
  "Cloud Computing",
  "Other",
];

const ROLES: Record<string, string[]> = {
  "Web Development": ["Full Stack Developer Intern", "Frontend Developer Intern", "Backend Developer Intern", "React Developer Intern"],
  "App Development": ["Flutter Developer Intern", "Android Developer Intern", "iOS Developer Intern", "Mobile App Developer Intern"],
  "Python": ["Python Developer Intern", "Python Automation Intern", "Backend Developer Intern", "Scripting Intern"],
  "Digital Marketing": ["Digital Marketing Intern", "SEO Analyst Intern", "Social Media Marketing Intern", "Content Marketing Intern"],
  "AI/ML": ["Machine Learning Intern", "AI Research Intern", "Data Science Intern", "Deep Learning Intern"],
  "Data Science": ["Data Science Intern", "Data Analyst Intern", "Business Intelligence Intern", "Data Engineering Intern"],
  "Cybersecurity": ["Cybersecurity Intern", "Ethical Hacking Intern", "Security Analyst Intern", "Penetration Testing Intern"],
  "UI/UX Design": ["UI/UX Designer Intern", "Product Designer Intern", "Graphic Design Intern", "Interaction Design Intern"],
  "Cloud Computing": ["Cloud Engineer Intern", "DevOps Intern", "AWS/GCP Intern", "Site Reliability Intern"],
  "Other": ["General Intern", "Research Intern", "Operations Intern", "Management Intern"],
};

const INTERNSHIPS = [
  "Internship Program",
  "Summer Internship",
  "Winter Internship",
  "Industrial Training",
  "Project Internship",
  "Virtual Internship",
  "Full Stack Development Course",
  "Data Science Bootcamp",
  "AI/ML Certification Program",
  "Digital Marketing Bootcamp",
];

const FEATURES = [
  { icon: "🏆", label: "Certificate of Completion" },
  { icon: "📄", label: "Offer Letter" },
  { icon: "🔳", label: "QR Verification" },
  { icon: "🖨️", label: "PDF Export" },
  { icon: "🏢", label: "MSME Branding" },
  { icon: "✍️", label: "CEO Signature" },
];

export const DocumentForm: React.FC<DocumentFormProps> = ({ onGenerate }) => {
  const [form, setForm] = useState<DocumentFormData>({
    name: "",
    domain: "",
    role: "",
    internship: "",
    startDate: "",
    endDate: "",
    workMode: "Remote",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof DocumentFormData, string>>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const suggestedRoles = form.domain ? (ROLES[form.domain] || ROLES["Other"]) : [];

  const validate = (): boolean => {
    const e: Partial<Record<keyof DocumentFormData, string>> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.domain) e.domain = "Select a domain";
    if (!form.role.trim()) e.role = "Role is required";
    if (!form.internship) e.internship = "Select internship type";
    if (!form.startDate) e.startDate = "Start date required";
    if (!form.endDate) e.endDate = "End date required";
    if (form.startDate && form.endDate && form.startDate >= form.endDate)
      e.endDate = "End date must be after start date";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsGenerating(true);
    setTimeout(() => {
      onGenerate(form);
      setIsGenerating(false);
    }, 900);
  };

  const set = (field: keyof DocumentFormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const inputCls =
    "w-full bg-white/5 border border-white/12 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/25 transition-all";
  const selectCls =
    "w-full bg-[#0c0c22] border border-white/12 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/25 transition-all";
  const labelCls = "block text-sm font-medium text-slate-300 mb-2";
  const errCls = "text-red-400 text-xs mt-1.5 flex items-center gap-1";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#040410] via-[#080820] to-[#040410] flex flex-col">
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background:"radial-gradient(circle,#7c3aed,transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-8" style={{ background:"radial-gradient(circle,#06b6d4,transparent 70%)" }} />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-12 pb-6 px-4">
        <div className="inline-flex items-center gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-2xl overflow-hidden animate-float"
            style={{ border:"1.5px solid rgba(124,58,237,.6)", boxShadow:"0 0 20px rgba(124,58,237,.45)" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl tracking-tight">MC</span>
            </div>
          </div>
          <div className="text-left">
            <h1
              className="text-3xl font-bold tracking-[.18em]"
              style={{
                background:"linear-gradient(90deg,#a78bfa,#60a5fa,#06b6d4)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
              }}
            >
              MAXIM CODE
            </h1>
            <p className="text-[10px] text-cyan-400/60 tracking-[.25em] uppercase mt-px">Building Future Innovators</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Internship Document Generator</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Generate premium internship certificates &amp; professional offer letters with corporate-grade design
        </p>

        {/* Feature chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {FEATURES.map((f) => (
            <div key={f.label} className="glass-card rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs text-slate-300">
              <span>{f.icon}</span>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Card */}
      <div className="relative z-10 flex-1 flex items-start justify-center px-4 pb-12">
        <div className="w-full max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 shadow-2xl"
            style={{ boxShadow:"0 0 60px rgba(124,58,237,.12)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Full Name */}
              <div className="md:col-span-2">
                <label className={labelCls}>Full Name <span className="text-cyan-400">*</span></label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="e.g. Arjun Sharma"
                  className={inputCls}
                />
                {errors.name && <p className={errCls}><span>⚠</span>{errors.name}</p>}
              </div>

              {/* Domain */}
              <div>
                <label className={labelCls}>Domain <span className="text-cyan-400">*</span></label>
                <select value={form.domain} onChange={(e) => { set("domain",""); set("domain", e.target.value); set("role",""); }} className={selectCls}>
                  <option value="">Select Domain</option>
                  {DOMAINS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
                {errors.domain && <p className={errCls}><span>⚠</span>{errors.domain}</p>}
              </div>

              {/* Role */}
              <div>
                <label className={labelCls}>Role / Designation <span className="text-cyan-400">*</span></label>
                {suggestedRoles.length > 0 ? (
                  <select value={form.role} onChange={(e) => set("role", e.target.value)} className={selectCls}>
                    <option value="">Select Role</option>
                    {suggestedRoles.map((r) => <option key={r} value={r}>{r}</option>)}
                    <option value="custom">Custom Role…</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={form.role}
                    onChange={(e) => set("role", e.target.value)}
                    placeholder="e.g. Full Stack Developer Intern"
                    className={inputCls}
                  />
                )}
                {form.role === "custom" && (
                  <input
                    type="text"
                    onChange={(e) => set("role", e.target.value)}
                    placeholder="Enter custom role..."
                    className={`${inputCls} mt-2`}
                    autoFocus
                  />
                )}
                {errors.role && <p className={errCls}><span>⚠</span>{errors.role}</p>}
              </div>

              {/* Internship Type */}
              <div className="md:col-span-2">
                <label className={labelCls}>Internship / Course <span className="text-cyan-400">*</span></label>
                <select value={form.internship} onChange={(e) => set("internship", e.target.value)} className={selectCls}>
                  <option value="">Select Internship / Course</option>
                  {INTERNSHIPS.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
                {errors.internship && <p className={errCls}><span>⚠</span>{errors.internship}</p>}
              </div>

              {/* Start Date */}
              <div>
                <label className={labelCls}>Start Date <span className="text-cyan-400">*</span></label>
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) => set("startDate", e.target.value)}
                  className={selectCls}
                />
                {errors.startDate && <p className={errCls}><span>⚠</span>{errors.startDate}</p>}
              </div>

              {/* End Date */}
              <div>
                <label className={labelCls}>End Date <span className="text-cyan-400">*</span></label>
                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) => set("endDate", e.target.value)}
                  className={selectCls}
                />
                {errors.endDate && <p className={errCls}><span>⚠</span>{errors.endDate}</p>}
              </div>

              {/* Work Mode */}
              <div className="md:col-span-2">
                <label className={labelCls}>Work Mode</label>
                <div className="flex gap-3">
                  {(["Remote", "Hybrid", "On-site"] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => set("workMode", mode)}
                      className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                        form.workMode === mode
                          ? "bg-gradient-to-r from-purple-600 to-cyan-500 border-transparent text-white shadow-lg shadow-purple-500/25"
                          : "bg-white/4 border-white/12 text-slate-400 hover:border-cyan-400/40 hover:text-white"
                      }`}
                    >
                      {mode === "Remote" && "🌐 "}
                      {mode === "Hybrid" && "🏢 "}
                      {mode === "On-site" && "📍 "}
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full mt-7 py-4 rounded-xl font-bold text-white text-[15px] tracking-wide transition-all duration-300 relative overflow-hidden disabled:opacity-70"
              style={{
                background: isGenerating
                  ? "linear-gradient(90deg,#7c3aed,#2563eb,#06b6d4)"
                  : "linear-gradient(90deg,#7c3aed,#2563eb 40%,#06b6d4)",
                boxShadow: "0 0 30px rgba(124,58,237,.35), 0 4px 20px rgba(124,58,237,.2)",
              }}
            >
              {isGenerating ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Generating Documents…
                </span>
              ) : (
                "✨ Generate Documents"
              )}
            </button>

            {/* Footer note */}
            <p className="text-center text-slate-600 text-[11px] mt-5">
              Generates Certificate of Completion + Internship Offer Letter &nbsp;·&nbsp;
              Both documents include QR Verification &amp; CEO Signature
            </p>
          </form>

          <p className="text-center text-slate-700 text-xs mt-5">
            Powered by Maxim Code &nbsp;·&nbsp; MSME Registered &nbsp;·&nbsp; Chennai, India
          </p>
        </div>
      </div>
    </div>
  );
};
