// Brand data — edit this file to update copy without touching components

export const COMPANY = {
  name: "Global IT Technology",
  phone: "03 9070 8103",
  phoneIntl: "+61390708103",
  email: "info@globalit.technology",
  address: "PO Box 298 Batman, Melbourne, VIC 3058, Australia",
  founded: "Melbourne",
  tagline: "Technology That Keeps Your Business Moving.",
  description:
    "An Australian family-owned IT and telecommunications company based in Melbourne, delivering reliable technology solutions that help businesses operate with confidence.",
} as const;

export const METRICS = [
  { value: "120+", label: "Projects Completed" },
  { value: "175+", label: "Satisfied Clients" },
  { value: "15", label: "Experienced Staff" },
  { value: "9.1", label: "Customer NPS" },
  { value: "100%", label: "Client Satisfaction Rate" },
] as const;

export type Service = {
  id: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    id: "managed-services",
    title: "Managed Services",
    icon: "Monitor",
    summary: "Proactive IT management at a predictable cost.",
    description:
      "We take responsibility for the ongoing management and maintenance of your IT environment under an agreed service arrangement. Proactive monitoring, patch management, and helpdesk support mean problems are resolved before they affect your operations.",
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    icon: "Cloud",
    summary: "Flexible cloud solutions for distributed teams.",
    description:
      "From secure file access to full cloud migrations, we design and implement cloud environments that allow your team to work productively from any location. We match the right platform to your business needs — not the other way around.",
  },
  {
    id: "maintenance-solutions",
    title: "Maintenance Solutions",
    icon: "Wrench",
    summary: "Infrastructure support and network cabling.",
    description:
      "We provide network cabling, technical maintenance, and infrastructure support for business environments. Our cabling work is carried out by ACMA-registered and certified professionals, ensuring compliance with Australian telecommunications standards.",
  },
  {
    id: "procurement",
    title: "Procurement",
    icon: "Package",
    summary: "Hardware sourcing, deployment, and fleet management.",
    description:
      "We help businesses source the right IT hardware for their requirements, plan and manage deployment projects, and maintain an accurate picture of their technology fleet — from initial spec through to end-of-life planning.",
  },
  {
    id: "consultancy",
    title: "Consultancy",
    icon: "LineChart",
    summary: "IT strategy, architecture, and business continuity.",
    description:
      "Our consultancy practice covers IT strategy, systems architecture, business transformation, risk management, and continuity planning. We provide independent, pragmatic advice — our goal is a well-considered outcome for your business, not the largest possible engagement.",
  },
  {
    id: "security-solutions",
    title: "Security Solutions",
    icon: "ShieldCheck",
    summary: "Evaluate, design, and implement appropriate security.",
    description:
      "We help businesses understand their security posture and select the right combination of tools and practices to address genuine risks. Our approach is proportionate — we recommend solutions that match your actual exposure, not a one-size-fits-all product stack.",
  },
];

export const PROBLEMS = [
  {
    icon: "PhoneOff",
    title: "Poor ISP Support",
    description:
      "Slow response times and generic troubleshooting from large internet service providers leave your team unable to work. We act as your technical advocate and ensure connectivity issues are escalated and resolved properly.",
  },
  {
    icon: "Router",
    title: "Network Equipment Failures",
    description:
      "Ageing switches, firewalls, and access points introduce instability and security risk. We assess, replace, and monitor your network hardware so infrastructure problems stop being a recurring disruption.",
  },
  {
    icon: "Wifi",
    title: "Unreliable Wi-Fi",
    description:
      "Coverage gaps, interference, and under-specced access points create friction across your workplace. We design and deploy wireless networks that provide consistent, predictable performance.",
  },
  {
    icon: "Phone",
    title: "Business Phone Systems",
    description:
      "Outdated PBX hardware and fragmented voice services create confusion and missed calls. We help businesses move to modern, integrated phone systems that work reliably across office and remote environments.",
  },
  {
    icon: "Globe",
    title: "Internet Reliability",
    description:
      "Unplanned outages and degraded speeds directly affect productivity and client experience. We assess your connectivity options and help implement redundancy arrangements appropriate to your business.",
  },
  {
    icon: "Database",
    title: "Data Backup & Recovery",
    description:
      "Businesses that have never tested their backup process often discover gaps when it is too late. We review, implement, and periodically verify backup solutions so that recovery is a planned event, not an emergency.",
  },
  {
    icon: "LayoutGrid",
    title: "CRM Integration",
    description:
      "Disconnected tools and manual workarounds reduce efficiency and introduce errors. We assist with the technical integration of business systems so your team can access the information they need, where they need it.",
  },
  {
    icon: "HardDrive",
    title: "Ageing Hardware",
    description:
      "End-of-lifecycle devices carry security vulnerabilities, performance penalties, and hidden support costs. We help businesses plan hardware refresh cycles that minimise disruption and protect against known risks.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Issue Definition",
    description:
      "We begin by listening. Understanding the stakeholder's needs, identifying the real problem behind the symptoms, and assessing the genuine business impact helps us avoid solving the wrong thing.",
  },
  {
    number: "02",
    title: "Brainstorming & Solution Discovery",
    description:
      "With the problem clearly defined, we evaluate suitable options — drawing on technical knowledge and industry experience to identify the most appropriate solution for your specific situation.",
  },
  {
    number: "03",
    title: "Implementation Planning",
    description:
      "We define tasks, objectives, scope, timelines, budgets, and expectations before anything is deployed. Clear planning prevents surprises and gives everyone involved a shared understanding of what to expect.",
  },
  {
    number: "04",
    title: "Problem Solving & Testing",
    description:
      "We implement the agreed solution, test rigorously, collect technical feedback, and make any necessary adjustments. Ongoing monitoring after delivery ensures the outcome continues to meet your needs.",
  },
];

export const WHY_GLOBAL_IT = [
  {
    icon: "Users",
    title: "Family-Owned, Melbourne-Based",
    description:
      "Global IT Technology is an Australian family-owned business founded in Melbourne. We are accountable to our clients directly — there is no corporate layer between you and the people doing the work.",
  },
  {
    icon: "Award",
    title: "20 Years of Industry Experience",
    description:
      "Our founder and director brings two decades of experience across telecommunications and technology in a range of industries. That depth of experience informs practical, realistic advice.",
  },
  {
    icon: "Handshake",
    title: "Honest, Pressure-Free Advice",
    description:
      "We aim to build lasting relationships, not close transactions. We will not recommend unnecessarily expensive or unsuitable products — our measure of success is whether the solution actually serves your business.",
  },
  {
    icon: "Target",
    title: "Focus on Your Core Business",
    description:
      "When your technology works reliably, your team can focus on what they do best. Our solutions are designed to improve system efficiency and reduce operational friction — quietly and consistently.",
  },
];
