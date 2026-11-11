import React, { useState, useRef } from "react";
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

const INTERNSHIPS = [
  "Internship Program",
  "Summer Internship",
  "Winter Internship",
  "Industrial Training",
  "Project Internship",
  "Virtual Internship",
  "Full Stack Development Course",
  "Data Science Bootcamp",
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

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof DocumentFormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.domain) newErrors.domain = "Domain is required";
    if (!form.role.trim()) newErrors.role = "Role is required";
    if (!form.internship) newErrors.internship = "Internship type is required";
    if (!form.startDate) newErrors.startDate = "Start date is required";
    if (!form.endDate) newErrors.endDate = "End date is required";
    if (form.startDate && form.endDate && form.startDate >= form.endDate) {
      newErrors.endDate = "End date must be after start date";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onGenerate(form);
    }
  };

  const handleChange = (field: keyof DocumentFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0d0d2b] to-[#0a0a1a] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/40">
              <span className="text-white font-bold text-lg">MC</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wide">
                MAXIM CODE
              </h1>
              <p className="text-xs text-cyan-400/70 tracking-widest uppercase">Building Future Innovators</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Document Generator</h2>
          <p className="text-slate-400 text-sm">Generate your professional internship certificate & offer letter</p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="e.g. Arjun Sharma"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Domain */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Domain <span className="text-cyan-400">*</span>
              </label>
              <select
                value={form.domain}
                onChange={(e) => handleChange("domain", e.target.value)}
                className="w-full bg-[#0d0d2b] border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              >
                <option value="">Select Domain</option>
                {DOMAINS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              {errors.domain && <p className="text-red-400 text-xs mt-1">{errors.domain}</p>}
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Role / Designation <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                value={form.role}
                onChange={(e) => handleChange("role", e.target.value)}
                placeholder="e.g. Full Stack Developer Intern"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
              {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role}</p>}
            </div>

            {/* Internship Type */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Internship / Course <span className="text-cyan-400">*</span>
              </label>
              <select
                value={form.internship}
                onChange={(e) => handleChange("internship", e.target.value)}
                className="w-full bg-[#0d0d2b] border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              >
                <option value="">Select Internship / Course</option>
                {INTERNSHIPS.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
              {errors.internship && <p className="text-red-400 text-xs mt-1">{errors.internship}</p>}
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Start Date <span className="text-cyan-400">*</span>
              </label>
              <input
                type="date"
                value={form.startDate}
                onChange={(e) => handleChange("startDate", e.target.value)}
                className="w-full bg-[#0d0d2b] border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
              {errors.startDate && <p className="text-red-400 text-xs mt-1">{errors.startDate}</p>}
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                End Date <span className="text-cyan-400">*</span>
              </label>
              <input
                type="date"
                value={form.endDate}
                onChange={(e) => handleChange("endDate", e.target.value)}
                className="w-full bg-[#0d0d2b] border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
              {errors.endDate && <p className="text-red-400 text-xs mt-1">{errors.endDate}</p>}
            </div>

            {/* Work Mode */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-3">Work Mode</label>
              <div className="flex gap-4">
                {(["Remote", "Hybrid", "On-site"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => handleChange("workMode", mode)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                      form.workMode === mode
                        ? "bg-gradient-to-r from-purple-600 to-cyan-500 border-transparent text-white shadow-lg shadow-purple-500/20"
                        : "bg-white/5 border-white/15 text-slate-400 hover:border-cyan-400/40 hover:text-white"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 text-lg tracking-wide"
          >
            ✨ Generate Documents
          </button>
        </form>

        <p className="text-center text-slate-600 text-xs mt-6">
          Powered by Maxim Code · MSME Registered · Building Future Innovators
        </p>
      </div>
    </div>
  );
};
