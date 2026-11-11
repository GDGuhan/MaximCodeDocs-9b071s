import { DocumentFormData, CertificateData, OfferLetterData } from "@/types";

const DOMAIN_SKILLS: Record<string, string[]> = {
  "Web Development": ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "REST APIs", "Responsive Design", "Git"],
  "App Development": ["Flutter", "Dart", "Firebase", "REST APIs", "Mobile UI/UX", "State Management", "Android/iOS"],
  "Python": ["Python 3.x", "Automation", "Data Handling", "Scripting", "OOP Concepts", "Flask", "NumPy"],
  "Digital Marketing": ["SEO", "Campaign Management", "Social Media Marketing", "Content Strategy", "Google Analytics", "Brand Building"],
  "AI/ML": ["Python", "Machine Learning", "Data Analytics", "Model Training", "TensorFlow", "Scikit-learn", "Data Visualization"],
  "Data Science": ["Python", "Data Analysis", "Pandas", "NumPy", "Matplotlib", "Statistical Modeling", "Power BI"],
  "Cybersecurity": ["Network Security", "Ethical Hacking", "Vulnerability Assessment", "Security Protocols", "Linux", "Kali Linux"],
  "UI/UX Design": ["Figma", "Prototyping", "User Research", "Wireframing", "Design Systems", "Usability Testing", "Adobe XD"],
  "Cloud Computing": ["AWS/GCP/Azure", "Cloud Architecture", "Docker", "Kubernetes", "CI/CD", "DevOps", "Terraform"],
};

function getSkillsForDomain(domain: string): string[] {
  const key = Object.keys(DOMAIN_SKILLS).find((k) =>
    domain.toLowerCase().includes(k.toLowerCase())
  );
  return key
    ? DOMAIN_SKILLS[key]
    : ["Problem Solving", "Communication", "Teamwork", "Critical Thinking", "Project Management", "Documentation"];
}

function generateCertificateId(): string {
  const year = new Date().getFullYear();
  const num = Math.floor(1000 + Math.random() * 9000);
  return `MC-${year}-${num}`;
}

function generateRefNumber(): string {
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const seq = Math.floor(100 + Math.random() * 900);
  return `MC/HR/OL/${year}${month}/${seq}`;
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}

function getTodayFormatted(): string {
  return new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}

function getResponsibilitiesForRole(role: string, domain: string): string[] {
  const dl = domain.toLowerCase();
  if (dl.includes("web")) {
    return [
      `Design and develop responsive, accessible web interfaces for live ${domain} projects at Maxim Code`,
      "Collaborate with the UI/UX team to implement pixel-perfect, cross-browser compatible components",
      "Write clean, scalable, and well-documented code following industry best practices and coding standards",
      "Participate in code reviews, sprint planning, and daily standup meetings",
      "Debug, troubleshoot, and optimize frontend/backend performance issues",
      "Assist in the end-to-end deployment and QA testing of production-grade web applications",
    ];
  }
  if (dl.includes("app")) {
    return [
      `Develop cross-platform mobile applications for ${domain} projects using modern frameworks`,
      "Integrate backend RESTful APIs and third-party services (Firebase, payment gateways, etc.)",
      "Ensure app performance, responsiveness, and smooth user experience across devices",
      "Write and maintain unit, widget, and integration tests for all implemented features",
      "Collaborate with backend engineers on API design, authentication, and data management",
      "Prepare and submit app builds to Google Play Store and Apple App Store",
    ];
  }
  if (dl.includes("python")) {
    return [
      "Develop and maintain Python scripts for automation, data processing, and internal tooling",
      "Analyze and transform raw datasets using Pandas, NumPy, and other Python libraries",
      "Build and document RESTful API endpoints using Flask or FastAPI frameworks",
      "Write comprehensive unit tests and maintain code quality through peer review",
      "Collaborate with cross-functional teams on data-driven product features",
      "Optimize existing scripts for performance, memory efficiency, and scalability",
    ];
  }
  if (dl.includes("marketing")) {
    return [
      "Plan, execute, and optimize digital marketing campaigns across Google, Meta, and LinkedIn",
      "Conduct in-depth keyword research and on-page/off-page SEO optimization",
      "Create, schedule, and analyze social media content for brand growth and engagement",
      "Monitor campaign KPIs using Google Analytics, Search Console, and Meta Ads Manager",
      "Prepare detailed weekly and monthly performance reports with actionable recommendations",
      "Assist in email marketing automation, lead generation, and CRM management activities",
    ];
  }
  if (dl.includes("ai") || dl.includes("ml") || dl.includes("data science")) {
    return [
      `Research, design, and implement machine learning models for ${domain} use cases at Maxim Code`,
      "Collect, preprocess, clean, and engineer features from large-scale training datasets",
      "Evaluate model accuracy, precision/recall, and fine-tune hyperparameters systematically",
      "Document model architecture, experimental findings, and deployment procedures thoroughly",
      "Present research outcomes, visualizations, and insights to technical leads and stakeholders",
      "Stay current with the latest AI/ML research papers, frameworks, and industry trends",
    ];
  }
  if (dl.includes("cyber") || dl.includes("security")) {
    return [
      `Conduct vulnerability assessments and penetration testing for ${domain} assignments`,
      "Assist in implementing security protocols, firewalls, and intrusion detection systems",
      "Research and document emerging cybersecurity threats, CVEs, and mitigation strategies",
      "Support incident response activities and prepare detailed security audit reports",
      "Configure and monitor SIEM tools, security dashboards, and network analyzers",
      "Collaborate with the development team on secure coding practices and DevSecOps principles",
    ];
  }
  if (dl.includes("ui") || dl.includes("ux") || dl.includes("design")) {
    return [
      `Create intuitive, user-centered wireframes and high-fidelity prototypes for ${domain} projects`,
      "Conduct user research, usability testing sessions, and synthesize actionable design insights",
      "Build and maintain scalable design systems, component libraries, and style guides in Figma",
      "Collaborate with engineering teams to ensure accurate implementation of design specifications",
      "Iterate on designs based on user feedback, A/B test results, and stakeholder reviews",
      "Present design concepts, rationale, and user flow diagrams to product and leadership teams",
    ];
  }
  return [
    `Support the ${domain} team in day-to-day technical, research, and operational tasks`,
    `Work on ${role}-specific assignments under the guidance of senior professionals and mentors`,
    "Participate actively in team meetings, sprint reviews, and project planning ceremonies",
    "Research industry trends, tools, and technologies relevant to ongoing projects",
    "Contribute to live project development, testing, and quality assurance activities",
    "Maintain detailed documentation, progress logs, and weekly status reports throughout the internship",
  ];
}

export function generateCertificateData(form: DocumentFormData): CertificateData {
  const certId = generateCertificateId();
  const skills = getSkillsForDomain(form.domain);
  const startFormatted = formatDate(form.startDate);
  const endFormatted = formatDate(form.endDate);

  const description =
    `This is to certify that <strong>${form.name}</strong> has successfully completed the ` +
    `<strong>${form.internship}</strong> in <strong>${form.domain}</strong> at <strong>Maxim Code</strong>. ` +
    `During the internship period from <strong>${startFormatted}</strong> to <strong>${endFormatted}</strong>, ` +
    `${form.name.split(" ")[0]} demonstrated exceptional dedication, hard work, and outstanding performance. ` +
    `Throughout this journey, they acquired hands-on expertise in <strong>${skills.slice(0, 4).join(", ")}</strong>, ` +
    `and contributed meaningfully to real-world projects. Their commitment to learning, adaptability, and ` +
    `professional attitude reflects the core values of Maxim Code — <em>Building Future Innovators</em>.`;

  return {
    title: "CERTIFICATE OF COMPLETION",
    subtitle: "This Certificate Is Proudly Presented To",
    name: form.name,
    description,
    skills,
    domain: form.domain,
    role: form.role,
    internship: form.internship,
    duration: `${startFormatted} – ${endFormatted}`,
    issueDate: getTodayFormatted(),
    certificateId: certId,
    qrUrl: `https://maximcode.in/verify/${certId}`,
    signatureLeft: "B. Guhan, CEO & Founder, Maxim Code",
    signatureRight: "Program Director, B. Guhan, Maxim Code",
    msme: "Maxim Code is recognized under the MSME (Micro, Small & Medium Enterprises) framework, Government of India, promoting skill development and innovation.",
    design: {
      theme: "neon_dark_tech",
      logoPosition: "top-left",
      qrPosition: "top-right",
      signaturePosition: "bottom",
      msmePosition: "bottom-center",
    },
  };
}

export function generateOfferLetterData(form: DocumentFormData): OfferLetterData {
  const startFormatted = formatDate(form.startDate);
  const endFormatted = formatDate(form.endDate);
  const responsibilities = getResponsibilitiesForRole(form.role, form.domain);

  return {
    title: "INTERNSHIP OFFER LETTER",
    date: getTodayFormatted(),
    recipient: form.name,
    refNumber: generateRefNumber(),
    opening:
      `We are pleased to offer you the position of <strong>${form.role}</strong> in the <strong>${form.domain}</strong> ` +
      `domain at <strong>Maxim Code</strong>. After carefully reviewing your profile, skills, and enthusiasm, ` +
      `we are confident that you will be a valuable addition to our growing team. This offer reflects our ` +
      `commitment to nurturing talent, fostering innovation, and building the next generation of industry professionals.`,
    details: {
      role: form.role,
      domain: form.domain,
      duration: `${startFormatted} to ${endFormatted}`,
      mode: form.workMode,
    },
    responsibilities,
    benefits: [
      "Internship Completion Certificate upon successful completion of the program",
      "Hands-on Live Project Experience with real clients and production environments",
      "One-on-one Mentorship from experienced industry professionals and domain experts",
      "Accelerated Skill Development in your chosen domain with structured learning milestones",
      "Career Growth guidance, resume building support, and LinkedIn profile recommendations",
      "Access to Maxim Code's exclusive learning resources, tools, and tech community",
    ],
    closing:
      `We are truly excited to welcome you to the Maxim Code family! This internship has been designed to provide ` +
      `you with meaningful real-world experience, expert mentorship, and the technical skills needed to excel in ` +
      `your career. Please confirm your acceptance by signing and returning this letter before your start date of ` +
      `<strong>${startFormatted}</strong>. Should you have any questions or require clarification, please feel free ` +
      `to reach out to our HR team at <strong>hr@maximcode.in</strong> or call us at +91-XXXXX-XXXXX. ` +
      `We look forward to working with you and witnessing your professional growth journey at Maxim Code.`,
    signature: "B. Guhan, CEO & Founder, Maxim Code",
    msme:
      "Maxim Code is an MSME-registered organization under the Ministry of MSME, Government of India (Reg. No. UDYAM-TN-XX-XXXXXXX). This internship aligns with MSME skill development and youth empowerment initiatives.",
  };
}
