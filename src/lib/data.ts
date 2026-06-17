// Ree-Cycle CMS Data Store
// In production, this would come from Strapi/Sanity CMS via API

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: { name: string; avatar: string; role: string };
  category: string[];
  tags: string[];
  excerpt: string;
  body: string;
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
  status: "draft" | "published" | "archived";
  publishedAt: string;
  readTime: number;
}

export interface Facility {
  id: string;
  name: string;
  type: "recycling-plant" | "landfill" | "sorting-center" | "drop-off";
  province: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
  status: "active" | "under-construction" | "decommissioned";
  capacity: number;
  certifications: string[];
  phone: string;
  hours: string;
  gallery: string[];
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: string;
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  stats: { value: string; label: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  division: string;
  bio: string;
  photo: string;
  linkedIn: string;
  order: number;
}

export interface Event {
  id: string;
  name: string;
  type: "webinar" | "cleanup" | "exhibition" | "conference";
  date: string;
  location: string;
  description: string;
  registrationLink: string;
  bannerImage: string;
  status: "upcoming" | "ongoing" | "past";
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  deadline: string;
  status: "open" | "closed";
}

export interface CSRProgram {
  id: string;
  name: string;
  type: "education" | "cleanup" | "donation" | "partnership";
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  beneficiaries: number;
  partners: string[];
  gallery: string[];
}

export interface SustainabilityReport {
  id: string;
  title: string;
  year: number;
  period: string;
  summary: string;
  metrics: { name: string; value: string; unit: string }[];
}

export interface PressRelease {
  id: string;
  title: string;
  releaseDate: string;
  body: string;
  contactPerson: string;
  tags: string[];
}

// ============ MOCK DATA ============

export const companyInfo = {
  name: "Ree-Cycle",
  tagline: "Reimagining Waste. Rebuilding Indonesia.",
  headquarters: "Jakarta, Indonesia",
  position: "#1 Largest & Best Environmental Solutions Company in Indonesia",
  provinces: 34,
  facilities: 47,
  wasteProcessed: 2500000,
  co2Offset: 180000,
  communityImpacted: 3200000,
  plasticRecycled: 890000,
};

export const impactStats = [
  { label: "Tons of Waste Processed", value: 2500000, unit: "tons", icon: "trash" },
  { label: "Active Facilities Nationwide", value: 47, unit: "facilities", icon: "building" },
  { label: "Provinces Served", value: 34, unit: "provinces", icon: "map" },
  { label: "CO₂ Emissions Offset", value: 180000, unit: "tons", icon: "cloud" },
  { label: "Community Members Impacted", value: 3200000, unit: "people", icon: "users" },
  { label: "Plastic Recycled", value: 890000, unit: "tons", icon: "recycle" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How AI-Powered Sorting is Revolutionizing Waste Management in Indonesia",
    slug: "ai-sorting-revolutionizing-waste-management",
    coverImage: "/images/blog/ai-sorting.jpg",
    author: { name: "Dr. Andi Prasetyo", avatar: "/images/team/andi.jpg", role: "Chief Technology Officer" },
    category: ["Technology", "Innovation"],
    tags: ["AI", "sorting", "waste management", "automation"],
    excerpt: "Discover how Ree-Cycle's proprietary AI sorting system achieves 98.7% accuracy in waste separation, processing over 500 tons per day across our facilities.",
    body: `<p>Indonesia generates over 67 million tons of waste annually, with only 7% being properly recycled. At Ree-Cycle, we're changing that equation with our proprietary AI-powered sorting technology.</p><h2>The Challenge of Mixed Waste</h2><p>Traditional waste sorting relies heavily on manual labor, which is not only inefficient but also poses significant health risks to workers. Our AI sorting system uses advanced computer vision and near-infrared sensors to identify and separate waste materials at unprecedented speed and accuracy.</p><h2>How It Works</h2><p>Our sorting machines process waste through a multi-stage pipeline: first, a 3D scanner creates a digital profile of each item on the conveyor belt. Machine learning algorithms then classify each piece by material type, condition, and recyclability. Robotic arms with custom grippers then precisely pick and place items into the correct bins.</p><h2>Results That Speak</h2><p>Since deploying our AI sorting system across 12 facilities, we've achieved a 98.7% sorting accuracy rate — compared to the industry average of 65% for manual sorting. Each machine processes up to 500 tons per day, operating 24/7 with minimal downtime.</p>`,
    seoTitle: "AI Waste Sorting Technology | Ree-Cycle Indonesia",
    seoDescription: "Learn how Ree-Cycle's AI-powered sorting achieves 98.7% accuracy.",
    featured: true,
    status: "published",
    publishedAt: "2026-06-10",
    readTime: 8,
  },
  {
    id: "2",
    title: "Ree-Cycle Partners with KLHK on National Waste Reduction Blueprint",
    slug: "ree-cycle-partners-klhk-national-waste-reduction",
    coverImage: "/images/blog/klhk-partnership.jpg",
    author: { name: "Siti Nurhaliza", avatar: "/images/team/siti.jpg", role: "Head of Government Relations" },
    category: ["Policy", "Company News"],
    tags: ["KLHK", "government", "policy", "partnership"],
    excerpt: "Ree-Cycle signs landmark agreement with the Ministry of Environment and Forestry to develop a comprehensive national waste reduction framework.",
    body: `<p>In a historic move for Indonesia's environmental future, Ree-Cycle has signed a memorandum of understanding with the Ministry of Environment and Forestry (KLHK) to co-develop a national waste reduction blueprint.</p><h2>A Framework for Change</h2><p>The partnership will leverage Ree-Cycle's two decades of operational experience to inform policy decisions at the national level. Key focus areas include standardized waste classification, extended producer responsibility, and circular economy incentives.</p>`,
    seoTitle: "Ree-Cycle KLHK Partnership | National Waste Reduction",
    seoDescription: "Ree-Cycle partners with KLHK on national waste reduction framework.",
    featured: true,
    status: "published",
    publishedAt: "2026-06-05",
    readTime: 5,
  },
  {
    id: "3",
    title: "Opening Our 47th Facility: Ree-Cycle Reaches All 34 Provinces",
    slug: "47th-facility-all-34-provinces",
    coverImage: "/images/blog/47th-facility.jpg",
    author: { name: "Budi Hartono", avatar: "/images/team/budi.jpg", role: "VP of Operations" },
    category: ["Company News", "Infrastructure"],
    tags: ["expansion", "facilities", "milestone", "nationwide"],
    excerpt: "With the opening of our newest recycling plant in Papua, Ree-Cycle now operates in every province across the Indonesian archipelago.",
    body: `<p>We are proud to announce the opening of our 47th facility in Jayapura, Papua — marking Ree-Cycle's presence in all 34 provinces of Indonesia.</p><h2>A Nation Connected Through Sustainability</h2><p>This milestone represents more than just geographic coverage. It symbolizes our commitment to ensuring that every Indonesian community has access to proper waste management infrastructure.</p>`,
    seoTitle: "Ree-Cycle Now in All 34 Provinces | 47th Facility",
    seoDescription: "Ree-Cycle opens 47th facility, reaching all 34 Indonesian provinces.",
    featured: false,
    status: "published",
    publishedAt: "2026-05-28",
    readTime: 4,
  },
  {
    id: "4",
    title: "Community Spotlight: How Surabaya Became Indonesia's Most Recycling-Aware City",
    slug: "surabaya-recycling-awareness-community",
    coverImage: "/images/blog/surabaya-community.jpg",
    author: { name: "Maya Dewi", avatar: "/images/team/maya.jpg", role: "Community Programs Manager" },
    category: ["Community", "Environment"],
    tags: ["Surabaya", "community", "education", "awareness"],
    excerpt: "Through our grassroots education programs and accessible drop-off points, Surabaya has seen a 340% increase in household recycling participation.",
    body: `<p>Three years ago, household recycling rates in Surabaya hovered around 12%. Today, thanks to a collaborative effort between Ree-Cycle's community programs and local government, that number has jumped to over 52%.</p>`,
    seoTitle: "Surabaya Recycling Community Program | Ree-Cycle",
    seoDescription: "How Surabaya achieved 340% increase in recycling participation.",
    featured: false,
    status: "published",
    publishedAt: "2026-05-20",
    readTime: 6,
  },
  {
    id: "5",
    title: "Understanding E-Waste: Indonesia's Fastest-Growing Environmental Challenge",
    slug: "e-waste-indonesia-environmental-challenge",
    coverImage: "/images/blog/ewaste.jpg",
    author: { name: "Dr. Rina Wulandari", avatar: "/images/team/rina.jpg", role: "Environmental Scientist" },
    category: ["Technology", "Environment"],
    tags: ["e-waste", "electronics", "hazardous", "recycling"],
    excerpt: "Indonesia generates 2 million tons of e-waste annually. Our specialized processing plants are turning this toxic threat into recoverable resources.",
    body: `<p>Electronic waste is the fastest-growing waste stream in Indonesia. From smartphones to refrigerators, discarded electronics contain both valuable materials and hazardous substances that require specialized handling.</p>`,
    seoTitle: "E-Waste Recycling Indonesia | Ree-Cycle Solutions",
    seoDescription: "How Ree-Cycle processes Indonesia's growing e-waste problem.",
    featured: false,
    status: "published",
    publishedAt: "2026-05-15",
    readTime: 7,
  },
  {
    id: "6",
    title: "Our Zero-Leachate TPA Technology: Protecting Indonesia's Groundwater",
    slug: "zero-leachate-tpa-technology-groundwater",
    coverImage: "/images/blog/zero-leachate.jpg",
    author: { name: "Ir. Hendra Gunawan", avatar: "/images/team/hendra.jpg", role: "Head of Facility Engineering" },
    category: ["Technology", "Infrastructure"],
    tags: ["TPA", "landfill", "groundwater", "engineering", "leachate"],
    excerpt: "Learn about the advanced liner systems and leachate treatment technology that makes Ree-Cycle's TPA facilities the safest in Southeast Asia.",
    body: `<p>Traditional landfills pose a severe threat to groundwater through leachate contamination. Ree-Cycle's engineered TPA facilities use a multi-layer containment system that exceeds international environmental standards.</p>`,
    seoTitle: "Zero-Leachate TPA Technology | Ree-Cycle Landfill",
    seoDescription: "Advanced landfill technology protecting Indonesia's groundwater.",
    featured: false,
    status: "published",
    publishedAt: "2026-05-08",
    readTime: 6,
  },
];

export const facilities: Facility[] = [
  {
    id: "1", name: "Ree-Cycle Jakarta Recycling Hub", type: "recycling-plant",
    province: "DKI Jakarta", city: "Jakarta Timur",
    address: "Jl. Industri Hijau No. 88, Cakung, Jakarta Timur",
    lat: -6.1631, lng: 106.9710, status: "active", capacity: 800,
    certifications: ["ISO 14001:2015", "PROPER Emas"], phone: "+62 21 4567 8900",
    hours: "Mon-Sat 06:00-22:00", gallery: [],
  },
  {
    id: "2", name: "TPA Ree-Cycle Bandung", type: "landfill",
    province: "Jawa Barat", city: "Bandung",
    address: "Jl. Waste Management Area, Gedebage, Bandung",
    lat: -6.9500, lng: 107.6915, status: "active", capacity: 1200,
    certifications: ["ISO 14001:2015", "KLHK Certified"], phone: "+62 22 7890 1234",
    hours: "24/7", gallery: [],
  },
  {
    id: "3", name: "Ree-Cycle Surabaya Sorting Center", type: "sorting-center",
    province: "Jawa Timur", city: "Surabaya",
    address: "Kawasan Industri SIER, Rungkut, Surabaya",
    lat: -7.3138, lng: 112.7694, status: "active", capacity: 600,
    certifications: ["ISO 9001:2015", "ISO 14001:2015"], phone: "+62 31 8765 4321",
    hours: "Mon-Sat 07:00-23:00", gallery: [],
  },
  {
    id: "4", name: "Drop-Off Point Yogyakarta", type: "drop-off",
    province: "DI Yogyakarta", city: "Yogyakarta",
    address: "Jl. Malioboro No. 120, Yogyakarta",
    lat: -7.7956, lng: 110.3695, status: "active", capacity: 50,
    certifications: [], phone: "+62 274 123 456",
    hours: "Mon-Sun 08:00-20:00", gallery: [],
  },
  {
    id: "5", name: "Ree-Cycle Medan E-Waste Plant", type: "recycling-plant",
    province: "Sumatera Utara", city: "Medan",
    address: "Kawasan Industri Medan, Jl. Sumatera No. 45",
    lat: 3.5952, lng: 98.6722, status: "active", capacity: 300,
    certifications: ["ISO 14001:2015"], phone: "+62 61 456 7890",
    hours: "Mon-Sat 07:00-19:00", gallery: [],
  },
  {
    id: "6", name: "TPA Ree-Cycle Semarang", type: "landfill",
    province: "Jawa Tengah", city: "Semarang",
    address: "Jl. Lingkar Utara, Semarang",
    lat: -6.9667, lng: 110.4167, status: "under-construction", capacity: 900,
    certifications: [], phone: "+62 24 345 6789",
    hours: "Coming Soon", gallery: [],
  },
  {
    id: "7", name: "Ree-Cycle Bali Green Facility", type: "recycling-plant",
    province: "Bali", city: "Denpasar",
    address: "Jl. By Pass Ngurah Rai, Denpasar",
    lat: -8.6500, lng: 115.2167, status: "active", capacity: 400,
    certifications: ["ISO 14001:2015", "Green Industry Award"], phone: "+62 361 234 567",
    hours: "Mon-Sat 07:00-20:00", gallery: [],
  },
  {
    id: "8", name: "Drop-Off Point Makassar", type: "drop-off",
    province: "Sulawesi Selatan", city: "Makassar",
    address: "Jl. A.P. Pettarani, Makassar",
    lat: -5.1477, lng: 119.4327, status: "active", capacity: 30,
    certifications: [], phone: "+62 411 234 567",
    hours: "Mon-Sun 08:00-18:00", gallery: [],
  },
];

export const services: Service[] = [
  {
    id: "1", name: "Waste Management Infrastructure", slug: "waste-management",
    category: "Infrastructure", heroImage: "/images/services/waste-mgmt.jpg",
    shortDescription: "Design, build, and operate optimal waste disposal facilities (TPA) that comply with international environmental standards.",
    fullDescription: "Ree-Cycle designs, builds, and operates optimal waste disposal facilities (TPA — Tempat Pembuangan Akhir) across Indonesia. These facilities comply with international environmental standards and are engineered for zero-leachate contamination of soil and groundwater. Our integrated approach covers site selection, environmental impact assessment, facility construction, operations management, and post-closure rehabilitation.",
    benefits: ["Zero-leachate contamination guarantee", "International standard compliance", "Real-time environmental monitoring", "Community engagement programs", "Post-closure land rehabilitation"],
    stats: [{ value: "15+", label: "Active TPA Sites" }, { value: "1,200", label: "Tons/Day Capacity" }, { value: "100%", label: "Environmental Compliance" }],
  },
  {
    id: "2", name: "AI-Powered Waste Sorting Technology", slug: "waste-sorting-technology",
    category: "Technology", heroImage: "/images/services/sorting.jpg",
    shortDescription: "AI-powered, sensor-based automatic sorting machines for high-throughput waste separation and maximum material recovery.",
    fullDescription: "We develop and deploy AI-powered, sensor-based automatic sorting machines capable of separating organic, inorganic, hazardous, and recyclable waste at high throughput. Our proprietary computer vision system identifies waste items in milliseconds, while precision robotic arms handle the physical separation — reducing human error and maximizing material recovery rates to an industry-leading 98.7%.",
    benefits: ["98.7% sorting accuracy", "500+ tons/day per machine", "24/7 automated operation", "Real-time analytics dashboard", "Custom material profiles"],
    stats: [{ value: "98.7%", label: "Sorting Accuracy" }, { value: "500+", label: "Tons/Day" }, { value: "12", label: "Deployed Systems" }],
  },
  {
    id: "3", name: "Advanced Recycling Processing", slug: "recycling-processing",
    category: "Processing", heroImage: "/images/services/recycling.jpg",
    shortDescription: "End-to-end recycling plants transforming plastic, paper, metal, glass, and e-waste into secondary raw materials.",
    fullDescription: "Ree-Cycle operates end-to-end recycling processing plants capable of transforming plastic, paper, metal, glass, and e-waste into raw secondary materials sold back to manufacturers, effectively closing the material loop. Our plants handle the complete recycling chain from receiving and sorting through cleaning, shredding, and pelletizing — producing high-quality recycled materials that meet industrial standards.",
    benefits: ["Closed-loop material recovery", "Multi-material processing", "Industrial-grade output quality", "E-waste safe handling", "Manufacturer buy-back partnerships"],
    stats: [{ value: "890K", label: "Tons Recycled" }, { value: "5", label: "Material Types" }, { value: "95%", label: "Recovery Rate" }],
  },
  {
    id: "4", name: "Environmental Consulting & Advisory", slug: "environmental-consulting",
    category: "Consulting", heroImage: "/images/services/consulting.jpg",
    shortDescription: "Expert advisory on environmental policy, sustainable city planning, and green infrastructure for government and corporate partners.",
    fullDescription: "Ree-Cycle works closely with KLHK, BUMN entities, and local government bodies to advise on environmental policy, sustainable city planning, and green infrastructure. Our consulting team brings decades of hands-on operational experience combined with deep regulatory knowledge to help organizations design and implement effective waste management strategies.",
    benefits: ["Policy framework development", "Environmental impact assessment", "Sustainable city master planning", "Green infrastructure design", "Regulatory compliance guidance"],
    stats: [{ value: "20+", label: "Government Partners" }, { value: "50+", label: "Projects Delivered" }, { value: "34", label: "Provinces Advised" }],
  },
];

export const teamMembers: TeamMember[] = [
  { id: "1", name: "Ir. Rahmat Hidayat", title: "Chief Executive Officer", division: "Executive", bio: "With 25 years in environmental engineering, Rahmat founded Ree-Cycle to transform Indonesia's waste management landscape.", photo: "/images/team/rahmat.jpg", linkedIn: "#", order: 1 },
  { id: "2", name: "Dr. Andi Prasetyo", title: "Chief Technology Officer", division: "Technology", bio: "Former AI researcher at MIT, Andi leads our waste-sorting technology innovation and automation systems.", photo: "/images/team/andi.jpg", linkedIn: "#", order: 2 },
  { id: "3", name: "Siti Nurhaliza, MBA", title: "Chief Operating Officer", division: "Operations", bio: "Siti oversees all 47 facilities across Indonesia, ensuring operational excellence and environmental compliance.", photo: "/images/team/siti.jpg", linkedIn: "#", order: 3 },
  { id: "4", name: "Budi Hartono", title: "VP of Infrastructure", division: "Infrastructure", bio: "Civil engineer with 20 years of experience in large-scale environmental infrastructure projects.", photo: "/images/team/budi.jpg", linkedIn: "#", order: 4 },
  { id: "5", name: "Maya Dewi, M.Sc", title: "Head of Community Programs", division: "CSR & Community", bio: "Environmental sociologist leading nationwide recycling awareness and education programs.", photo: "/images/team/maya.jpg", linkedIn: "#", order: 5 },
  { id: "6", name: "Dr. Rina Wulandari", title: "Head of Environmental Science", division: "Research", bio: "Environmental scientist specializing in waste impact assessment and circular economy research.", photo: "/images/team/rina.jpg", linkedIn: "#", order: 6 },
];

export const events: Event[] = [
  { id: "1", name: "Indonesia Circular Economy Summit 2026", type: "conference", date: "2026-07-15", location: "Jakarta Convention Center", description: "Annual summit bringing together government, industry, and NGOs to discuss Indonesia's circular economy roadmap.", registrationLink: "#", bannerImage: "/images/events/summit.jpg", status: "upcoming" },
  { id: "2", name: "Beach Cleanup Drive — Bali", type: "cleanup", date: "2026-06-28", location: "Kuta Beach, Bali", description: "Join Ree-Cycle and 500+ volunteers for our monthly beach cleanup initiative.", registrationLink: "#", bannerImage: "/images/events/cleanup.jpg", status: "upcoming" },
  { id: "3", name: "Smart Waste Management Webinar", type: "webinar", date: "2026-06-20", location: "Online — Zoom", description: "Learn about IoT-enabled waste monitoring systems and their impact on city-level waste management.", registrationLink: "#", bannerImage: "/images/events/webinar.jpg", status: "upcoming" },
];

export const jobs: JobListing[] = [
  { id: "1", title: "Senior Environmental Engineer", department: "Engineering", location: "Jakarta", type: "full-time", experience: "5+ years", description: "Lead the design and optimization of waste processing systems.", requirements: ["Bachelor's in Environmental/Civil Engineering", "5+ years in waste management", "PROPER certification preferred"], benefits: ["Competitive salary", "Health insurance", "Professional development", "Green commute allowance"], deadline: "2026-07-30", status: "open" },
  { id: "2", title: "AI/ML Engineer — Computer Vision", department: "Technology", location: "Jakarta (Hybrid)", type: "full-time", experience: "3+ years", description: "Develop and improve computer vision models for waste classification.", requirements: ["MS/PhD in Computer Science or related", "Experience with PyTorch/TensorFlow", "Computer vision expertise"], benefits: ["Competitive salary", "Stock options", "Remote flexibility", "Conference budget"], deadline: "2026-08-15", status: "open" },
  { id: "3", title: "Community Outreach Coordinator", department: "CSR", location: "Surabaya", type: "full-time", experience: "2+ years", description: "Coordinate recycling education programs across East Java communities.", requirements: ["Bachelor's in Social Sciences or related", "Community engagement experience", "Fluent in Bahasa Indonesia and Javanese"], benefits: ["Competitive salary", "Travel allowance", "Health insurance"], deadline: "2026-07-20", status: "open" },
  { id: "4", title: "Data Analyst — Sustainability Reporting", department: "Data", location: "Jakarta", type: "full-time", experience: "2+ years", description: "Analyze and visualize environmental impact data for ESG reporting.", requirements: ["Bachelor's in Statistics/Data Science", "SQL and Python proficiency", "Experience with data visualization tools"], benefits: ["Competitive salary", "Health insurance", "Learning budget"], deadline: "2026-07-25", status: "open" },
];

export const csrPrograms: CSRProgram[] = [
  { id: "1", name: "Sekolah Hijau — Green Schools Initiative", type: "education", location: "Nationwide", startDate: "2024-01-01", endDate: "2026-12-31", description: "Environmental literacy program reaching 500+ schools across Indonesia with recycling education and hands-on workshops.", beneficiaries: 125000, partners: ["Ministry of Education", "UNICEF Indonesia"], gallery: [] },
  { id: "2", name: "Bersih Nusantara — Clean Archipelago", type: "cleanup", location: "10 Major Cities", startDate: "2025-06-01", endDate: "2026-12-31", description: "Monthly community cleanup drives in 10 major Indonesian cities, mobilizing thousands of volunteers.", beneficiaries: 50000, partners: ["Local Governments", "WWF Indonesia"], gallery: [] },
  { id: "3", name: "Daur Ulang untuk Semua — Recycling for All", type: "partnership", location: "Java & Bali", startDate: "2025-01-01", endDate: "2027-12-31", description: "Partnership with local waste picker communities to provide equipment, safety gear, and fair pricing for collected recyclables.", beneficiaries: 8000, partners: ["Waste Picker Cooperatives", "ILO"], gallery: [] },
];

export const sustainabilityReports: SustainabilityReport[] = [
  {
    id: "1", title: "Ree-Cycle Annual Sustainability Report 2025", year: 2025, period: "Annual",
    summary: "Comprehensive overview of Ree-Cycle's environmental impact, social responsibility, and governance practices.",
    metrics: [
      { name: "Total Waste Processed", value: "2.5M", unit: "tons" },
      { name: "Recycling Rate", value: "78", unit: "%" },
      { name: "CO₂ Offset", value: "180K", unit: "tons" },
      { name: "Water Saved", value: "4.2B", unit: "liters" },
      { name: "Trees Planted Equivalent", value: "2.8M", unit: "trees" },
      { name: "Community Members Reached", value: "3.2M", unit: "people" },
    ],
  },
];

export const pressReleases: PressRelease[] = [
  { id: "1", title: "Ree-Cycle Achieves Milestone: Operations in All 34 Provinces", releaseDate: "2026-05-28", body: "Ree-Cycle announces the opening of its 47th facility...", contactPerson: "PR Team — pr@reeecycle.co.id", tags: ["milestone", "expansion"] },
  { id: "2", title: "Ree-Cycle Wins ASEAN Environmental Excellence Award 2026", releaseDate: "2026-04-15", body: "The ASEAN Council recognizes Ree-Cycle for outstanding contribution...", contactPerson: "PR Team — pr@reeecycle.co.id", tags: ["award", "recognition"] },
];

export const partners = [
  "KLHK", "BAPPENAS", "WWF Indonesia", "WALHI", "Greenpeace Indonesia",
  "UN Environment", "World Bank", "ADB", "USAID", "JICA",
];

export const testimonials = [
  { quote: "Ree-Cycle has fundamentally transformed how we approach waste management in our province. Their technology is world-class.", author: "Dr. Ahmad Fauzi", role: "Head of Environmental Agency, West Java" },
  { quote: "The community education programs have changed the recycling culture in our neighborhood. Our children now lead the way.", author: "Ibu Ratna", role: "Community Leader, Surabaya" },
  { quote: "As an investor, Ree-Cycle's ESG credentials and operational transparency give us tremendous confidence.", author: "James Chen", role: "Director, Green Capital Partners" },
];
