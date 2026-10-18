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
      "Ongoing management, proactive monitoring, patch deployment, and rapid helpdesk support to prevent downtime before it impacts your business.",
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    icon: "Cloud",
    summary: "Flexible cloud solutions for distributed teams.",
    description:
      "Secure file access, Microsoft 365 migrations, and scalable cloud architectures tailored to keep your team productive anywhere.",
  },
  {
    id: "maintenance-solutions",
    title: "Maintenance Solutions",
    icon: "Wrench",
    summary: "Infrastructure support and network cabling.",
    description:
      "ACMA-registered telecommunications cabling, network hardware maintenance, and on-site infrastructure support across Melbourne.",
  },
  {
    id: "procurement",
    title: "Procurement",
    icon: "Package",
    summary: "Hardware sourcing, deployment, and fleet management.",
    description:
      "Strategic IT hardware purchasing, seamless rollouts, and lifecycle management from initial specification to safe decommissioning.",
  },
  {
    id: "consultancy",
    title: "Consultancy",
    icon: "LineChart",
    summary: "IT strategy, architecture, and business continuity.",
    description:
      "Independent, pragmatic advice on technology roadmaps, systems architecture, disaster recovery, and digital risk management.",
  },
  {
    id: "security-solutions",
    title: "Security Solutions",
    icon: "ShieldCheck",
    summary: "Evaluate, design, and implement appropriate security.",
    description:
      "Targeted cybersecurity assessments, endpoint protection, and compliance practices matched proportionately to your actual business risks.",
  },
];

export const PROBLEMS = [
  {
    icon: "PhoneOff",
    title: "Poor ISP Support",
    description:
      "Slow response times and generic troubleshooting from large telcos. We act as your advocate to resolve connectivity issues swiftly.",
  },
  {
    icon: "Router",
    title: "Network Equipment Failures",
    description:
      "Ageing switches and firewalls that cause downtime. We audit, modernise, and monitor your hardware for maximum stability.",
  },
  {
    icon: "Wifi",
    title: "Unreliable Wi-Fi",
    description:
      "Dead zones and dropped connections across your workplace. We deploy high-density, commercial-grade wireless coverage.",
  },
  {
    icon: "Phone",
    title: "Business Phone Systems",
    description:
      "Outdated PBX systems and missed customer calls. We implement cloud voice solutions that work seamlessly in office or remote.",
  },
  {
    icon: "Globe",
    title: "Internet Reliability",
    description:
      "Speed degradation and unplanned outages. We set up high-speed business fibre with automated failover redundancy.",
  },
  {
    icon: "Database",
    title: "Data Backup & Recovery",
    description:
      "Untested backups that fail during emergencies. We implement automated cloud backups with regularly verified restore points.",
  },
  {
    icon: "LayoutGrid",
    title: "CRM Integration",
    description:
      "Fragmented software and manual data entry. We integrate your core business applications for smooth, unified workflows.",
  },
  {
    icon: "HardDrive",
    title: "Ageing Hardware",
    description:
      "Slow computers that introduce security vulnerabilities. We manage predictable refresh cycles without business disruption.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Issue Definition",
    description:
      "We listen closely to uncover the real problem behind the symptoms and understand the true business impact.",
  },
  {
    number: "02",
    title: "Solution Discovery",
    description:
      "We evaluate tailored options using our 20+ years of telco and IT experience to find the most pragmatic fit.",
  },
  {
    number: "03",
    title: "Implementation Planning",
    description:
      "We define scope, timelines, and budgets upfront so there are no surprises or hidden costs during deployment.",
  },
  {
    number: "04",
    title: "Delivery & Verification",
    description:
      "We roll out the solution, conduct thorough stress testing, and provide ongoing proactive monitoring.",
  },
];

export const WHY_GLOBAL_IT = [
  {
    icon: "Users",
    title: "Family-Owned, Melbourne-Based",
    description:
      "Direct accountability with no corporate layers or offshore call centers between you and the technical team.",
  },
  {
    icon: "Award",
    title: "20 Years Industry Experience",
    description:
      "Deep telecommunications and systems expertise delivering practical, field-tested technology advice.",
  },
  {
    icon: "Handshake",
    title: "Honest, Pressure-Free Advice",
    description:
      "We recommend only what your business genuinely needs — no oversized contracts or vendor lock-in.",
  },
  {
    icon: "Target",
    title: "Focus on Your Core Business",
    description:
      "Quiet, reliable IT infrastructure that frees your team to focus on growing your business.",
  },
];
