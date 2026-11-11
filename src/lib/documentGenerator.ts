import { DocumentFormData, CertificateData, OfferLetterData } from "@/types";

const DOMAIN_SKILLS: Record<string, string[]> = {
  "Web Development": ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "REST APIs", "Responsive Design"],
  "App Development": ["Flutter", "Dart", "Firebase", "REST APIs", "Mobile UI/UX", "State Management"],
  "Python": ["Python", "Automation", "Data Handling", "Scripting", "OOP Concepts", "Libraries & Frameworks"],
  "Digital Marketing": ["SEO", "Campaign Management", "Social Media Marketing", "Content Strategy", "Analytics", "Brand Building"],
  "AI/ML": ["Python", "Machine Learning", "Data Analytics", "Model Training", "TensorFlow/Sklearn", "Data Visualization"],
  "Data Science": ["Python", "Data Analysis", "Pandas", "NumPy", "Visualization", "Statistical Modeling"],
  "Cybersecurity": ["Network Security", "Ethical Hacking", "Vulnerability Assessment", "Security Protocols", "Linux"],
  "UI/UX Design": ["Figma", "Prototyping", "User Research", "Wireframing", "Design Systems", "Usability Testing"],
  "Cloud Computing": ["AWS/GCP/Azure", "Cloud Architecture", "Docker", "Kubernetes", "CI/CD", "DevOps"],
};

function getSkillsForDomain(domain: string): string[] {
  const key = Object.keys(DOMAIN_SKILLS).find((k) =>
    domain.toLowerCase().includes(k.toLowerCase())
  );
  return key ? DOMAIN_SKILLS[key] : ["Problem Solving", "Communication", "Teamwork", "Critical Thinking", "Project Management"];
}

function generateCertificateId(): string {
  const year = new Date().getFullYear();
  const num = Math.floor(1000 + Math.random() * 9000);
  return `MC-${year}-${num}`;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}

function getTodayFormatted(): string {
  return new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}

function getResponsibilitiesForRole(role: string, domain: string): string[] {
  const domainLower = domain.toLowerCase();
  if (domainLower.includes("web")) {
    return [
      `Design and develop responsive web interfaces for ${domain} projects`,
      "Collaborate with the design team to implement pixel-perfect UI components",
      "Write clean, maintainable, and well-documented code following best practices",
      "Participate in code reviews and contribute to technical discussions",
      "Debug and resolve technical issues in a timely manner",
      "Assist in the deployment and testing of web applications",
    ];
  }
  if (domainLower.includes("app")) {
    return [
      `Develop cross-platform mobile applications for the ${domain} team`,
      "Integrate backend APIs and third-party services into mobile apps",
      "Ensure app performance, quality, and responsiveness",
      "Write unit and integration tests for application features",
      "Collaborate with backend engineers on API design and integration",
      "Submit apps to app stores and manage release cycles",
    ];
  }
  if (domainLower.includes("python")) {
    return [
      "Develop Python scripts and automation tools for internal workflows",
      "Analyze and clean datasets using Python libraries",
      "Build and test APIs using Flask/FastAPI frameworks",
      "Document code and create technical reports",
      "Collaborate with cross-functional teams on data-driven projects",
      "Optimize existing scripts for performance and scalability",
    ];
  }
  if (domainLower.includes("marketing")) {
    return [
      "Plan and execute digital marketing campaigns across platforms",
      "Conduct keyword research and on-page SEO optimization",
      "Create and schedule social media content for brand growth",
      "Analyze campaign performance using Google Analytics and tools",
      "Prepare weekly/monthly performance reports for management",
      "Assist in email marketing and lead generation activities",
    ];
  }
  if (domainLower.includes("ai") || domainLower.includes("ml")) {
    return [
      `Research and implement machine learning models for ${domain} use cases`,
      "Collect, preprocess, and analyze training datasets",
      "Evaluate model performance and fine-tune hyperparameters",
      "Document model architecture, results, and insights",
      "Present findings to the technical team and stakeholders",
      "Stay updated with the latest AI/ML research and trends",
    ];
  }
  return [
    `Support the ${domain} team in day-to-day technical and operational tasks`,
    `Work on ${role}-specific assignments under guidance of senior professionals`,
    "Participate in team meetings, standups, and project planning sessions",
    "Research and present findings on assigned topics",
    "Contribute to live project development and testing",
    "Maintain documentation and progress reports throughout the internship",
  ];
}

export function generateCertificateData(form: DocumentFormData): CertificateData {
  const certId = generateCertificateId();
  const skills = getSkillsForDomain(form.domain);
  const startFormatted = formatDate(form.startDate);
  const endFormatted = formatDate(form.endDate);

  const description = `This is to certify that <strong>${form.name}</strong> has successfully completed the <strong>${form.internship}</strong> in <strong>${form.domain}</strong> at <strong>Maxim Code</strong>. During the internship period from <strong>${startFormatted}</strong> to <strong>${endFormatted}</strong>, ${form.name} demonstrated exceptional dedication, hard work, and outstanding performance. Throughout this journey, they acquired hands-on expertise in <strong>${skills.slice(0, 4).join(", ")}</strong>, and contributed meaningfully to real-world projects. Their commitment to learning, adaptability, and professional attitude reflects the values of Maxim Code — <em>Building Future Innovators</em>.`;

  return {
    title: "CERTIFICATE OF COMPLETION",
    subtitle: "This Certificate Is Proudly Presented To",
    name: form.name,
    description,
    skills,
    duration: `${startFormatted} – ${endFormatted}`,
    issueDate: getTodayFormatted(),
    certificateId: certId,
    qrUrl: `https://maximcode.in/verify/${certId}`,
    signatureLeft: "B. Guhan, CEO & Founder, Maxim Code",
    signatureRight: "Program Director, B. Guhan",
    msme: "Maxim Code is recognized under the MSME (Micro, Small & Medium Enterprises) framework, Government of India, promoting skill development and innovation.",
    design: {
      theme: "neon_dark_tech",
      logoPosition: "top-left",
      qrPosition: "top-right",
      signaturePosition: "bottom",
      msmePosition: "bottom-right",
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
    opening: `We are pleased to offer you the position of <strong>${form.role}</strong> in the <strong>${form.domain}</strong> domain at <strong>Maxim Code</strong>. After reviewing your profile and interest, we are confident that you will be a valuable addition to our team. This offer reflects our commitment to nurturing talent and building future innovators.`,
    details: {
      role: form.role,
      domain: form.domain,
      duration: `${startFormatted} to ${endFormatted}`,
      mode: form.workMode,
    },
    responsibilities,
    benefits: [
      "Internship Completion Certificate upon successful completion",
      "Hands-on Live Project Experience in real-world scenarios",
      "One-on-one Mentorship from industry professionals",
      "Accelerated Skill Development in your chosen domain",
      "Career Growth guidance and LinkedIn recommendation",
      "Access to Maxim Code's exclusive learning resources and community",
    ],
    closing: `We are excited to welcome you to the Maxim Code family! This internship is designed to provide you with real-world experience, mentorship, and the skills needed to thrive in your career. Please confirm your acceptance by signing and returning this letter before your start date of ${startFormatted}. Should you have any questions, feel free to reach out to our HR team at hr@maximcode.in. We look forward to working with you and witnessing your growth.`,
    signature: "B. Guhan, CEO & Founder, Maxim Code",
    msme: "Maxim Code is an MSME-registered organization under the Ministry of MSME, Government of India. This internship aligns with MSME skill development and youth empowerment initiatives.",
  };
}
