import { config } from '../config/env.js';

export const defaultQuotation = {
  quotationNo: "QT-2024-001",
  quotationDate: "2012-12-12",
  createdAt: "2012-12-12",
  includeAbout: true,
  includeVisionMission: true,
  includeTerms: true,
  includeTeam: true,
  preparedFor: {
    name: "Hari Prasath",
    department: "Information Technology",
    institution: "V S B Engineering College",
    address: "69/1, 7B3 Bharathidasan Nagar 4th Cross, Thanthonimalai",
    city: "Karur",
    state: "Tamil Nadu",
    pincode: "639007",
  },
  product: {
    productName: "Go2 Edu U1 Robot",
    productDescription: "Go2 Edu U1 Robot with suitcase, Battery, charger, spare foot shoes 4 units, Remote controller, 15000 Mah Battery",
    quantity: 1,
    unitPrice: 910000,
    packing: 0,
    transitInsurance: 0,
    shipping: 0,
    gstPercentage: 18,
    gstAmount: 163800,
    grandTotal: 1073800,
    deliveryTime: "20 Days",
  },
};

export const defaultCompany = {
  companyName: "ROBOMIRACLE",
  tagline: "INNOVATION IN ROBOTICS",
  about: "At Robomiracle Technologies, we specialize in delivering innovative robotic solutions that redefine efficiency, precision, and automation across industries. Our expertise lies in developing cutting-edge robotics systems tailored to meet the unique needs of businesses, empowering them to achieve unparalleled operational excellence. From intelligent automation to custom-built robotic platforms, we bring advanced technology to life, ensuring seamless integration and transformative results. With a commitment to innovation and quality, we strive to be a trusted partner for organizations looking to embrace the future of robotics.",
  solution: "Robomiracle Technologies provides a wide range of innovative robotic solutions to meet the diverse challenges of modern industries. From advanced automation systems to customized robotic platforms, our solutions enhance efficiency and deliver measurable value. We specialize in industrial automation, service robotics, and educational robotics, catering to various applications with precision and reliability.\n\nAt Robomiracle, we offer end-to-end support, from design to deployment, ensuring seamless integration and maximum impact. Our solutions drive efficiency, reduce costs, and foster innovation, making robotics a transformative force for industries worldwide.",
  howItWorks: "At Robomiracle Technologies, our process begins with understanding your unique challenges and goals. We design customized robotic solutions, integrating advanced technologies like AI and IoT to meet specific needs. Each system undergoes rigorous testing to ensure precision and reliability.\n\nOur team collaborates closely with clients throughout implementation, providing seamless integration and training for optimal performance. Post-deployment, we offer ongoing support and maintenance to keep operations running smoothly.",
  vision: "At Robomiracle Technologies, we specialize in delivering innovative robotic solutions that redefine efficiency, precision, and automation across industries. Our expertise lies in developing cutting-edge robotics systems tailored to meet the unique needs of businesses, empowering them to achieve unparalleled operational excellence. From intelligent automation to custom-built robotic platforms, we bring advanced technology to life, ensuring seamless integration and transformative results.",
  mission: "Our mission at Robomiracle Technologies is to deliver innovative and accessible robotic solutions that empower businesses and improve lives. We are dedicated to driving technological advancement through cutting-edge designs, reliable automation, and customized services, ensuring value creation and seamless integration for our clients. Through collaboration and excellence, we aim to make robotics a transformative force across industries.",
  whyChooseUs: "At Robomiracle Technologies, we combine innovation, expertise, and customer-centricity to deliver unparalleled robotic solutions. Our team of skilled professionals ensures every product is tailored to meet your unique needs, driving efficiency and transforming operations. With a commitment to cutting-edge technology and rigorous quality standards, we provide reliable and scalable systems that adapt to evolving demands.\n\nWe pride ourselves on offering end-to-end support, from conceptualization to deployment and beyond. Our focus on building lasting partnerships ensures transparency, timely delivery, and exceptional service.",
  address: "RS puram Coimbatore",
  phone: ["+91 63804 73177", "+91 79071 08559"],
  email: "sales@robomiracle.com",
  website: "www.robomiracle.com",
};

export const defaultBankDetails = {
  accountName: "Robomiracle Technologies Private Limited",
  accountNo: "9009999909",
  ifscCode: "KKBK0008666",
  bankName: "KOTAK MAHINDRA BANK",
  branch: "Coimbatore",
};

export const defaultTerms = {
  title: "TERMS & CONDITIONS",
  points: [
    { heading: "Quotation Acceptance", description: "Once accepted by email or signature, the order is final and binding." },
    { heading: "Cancellation", description: "Orders cannot be cancelled after acceptance." },
    { heading: "Refund Policy", description: "No refund under any condition. Only manufacturing defects will be replaced after inspection. No monetary refund." },
    { heading: "Return Policy", description: "No return once the delivery note is signed. Any issue must be reported within 48 hours." },
    { heading: "Delivery & Delay", description: "Delays, if caused by us, will attract 0.3% of product value per week (6 working days) as adjustment in final payment. Maximum limit: 3% of total order value." },
    { heading: "Service Level Agreement (SLA)", description: "Response within 48 business hours. Resolution within 7 working days (subject to part availability). Support via call, mail, or remote session. On-site visit may attract service/travel charges. Hardware covered under warranty; software support as per SLA." },
    { heading: "Payment", description: "Full payment as per terms. Delay beyond 7 working days attracts 1.5% interest per month. Ownership transfers only after full payment." },
    { heading: "Force Majeure", description: "Robomiracle is not liable for delays due to factors beyond control (transport, customs, natural events, strikes, etc.)." },
    { heading: "Jurisdiction", description: "Subject to Coimbatore, Tamil Nadu jurisdiction only." },
    { heading: "Acceptance", description: "Proceeding with this quotation confirms acceptance of all above terms." },
  ],
};

export const defaultTeam = [
  { name: "Sooraj Sukumaran", role: "CTO & Co-Founder", photoUrl: "" },
  { name: "Rudresh N R",      role: "CEO & Co-Founder", photoUrl: "" },
  { name: "Sasivarana S",     role: "General Manager",  photoUrl: "" },
];


// ─── HELPERS ──────────────────────────────────────────────────

const fmt = (n) => Number(n || 0).toLocaleString("en-IN");

const formatDate = (dateStr) => {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch { return dateStr || ""; }
};

// Safely get terms points array regardless of input shape:
//   { points: [...] }  OR  { terms: [...] }  OR  [...]  OR  defaultTerms object
const getTermsPoints = (terms) => {
  if (!terms) return [];
  if (Array.isArray(terms)) return terms;
  if (Array.isArray(terms.points)) return terms.points;
  if (Array.isArray(terms.terms)) return terms.terms;
  if (Array.isArray(terms.items)) return terms.items;
  return [];
};

// Safely get terms title
const getTermsTitle = (terms) => {
  if (!terms) return "TERMS &amp; CONDITIONS";
  if (typeof terms === "object" && !Array.isArray(terms)) {
    const t = terms.title || terms.heading || terms.name;
    if (t) return t.replace(/&/g, "&amp;");
  }
  return "TERMS &amp; CONDITIONS";
};

const teamPhoto = (member) => {
  const url = member.photoUrl || member.photo || member.image || member.imageUrl;
  if (url) {
    return `<img src="${url}" class="team-card-img" alt="${member.name}" />`;
  }
  const initials = (member.name || "?")
    .split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return `
    <div style="width:140px;height:140px;border-radius:50%;background:linear-gradient(135deg,#1e3a8a,#2563eb);display:flex;align-items:center;justify-content:center;">
      <span style="font-size:48px;font-weight:800;color:white;letter-spacing:2px;">${initials}</span>
    </div>`;
};

const freeOrPrice = (val) =>
  (val === 0 || val === null || val === undefined || val === "0")
    ? `<span style="font-weight:700;color:#16a34a;">FREE</span>`
    : `<span style="font-weight:700;">&#8377;${fmt(val)}</span>`;


// ─── SHARED CSS ───────────────────────────────────────────────

const sharedCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Outfit', sans-serif;
    color: #1e293b;
    background: white;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ── Each page is exactly A4, never overflows ── */
  .page {
    width: 210mm;
    height: 297mm;
    page-break-after: always;
    position: relative;
    overflow: hidden;
    background: white;
    display: flex;
    flex-direction: column;
  }
  .page:last-child { page-break-after: auto; }

  @media print {
    @page { size: A4; margin: 0; }
    .page { page-break-after: always; }
    .page:last-child { page-break-after: auto; }
  }

  .top-bar {
    position: absolute; top: 0; left: 0; width: 100%; height: 6px; z-index: 20;
    background: linear-gradient(90deg, #1d4ed8 0%, #7c3aed 35%, #db2777 65%, #0891b2 100%);
    flex-shrink: 0;
  }
  .side-bar {
    position: absolute; top: 0; left: 0; width: 6px; height: 100%; z-index: 20;
    background: linear-gradient(180deg, #1d4ed8 0%, #7c3aed 50%, #db2777 100%);
  }
  .blob { position: absolute; border-radius: 50%; z-index: 1; pointer-events: none; }
  .blob-tl { top:-160px; left:-160px; width:520px; height:520px; background:radial-gradient(circle,rgba(59,130,246,.12) 0%,rgba(124,58,237,.06) 55%,transparent 75%); }
  .blob-br { bottom:-180px; right:-180px; width:600px; height:600px; background:radial-gradient(circle,rgba(219,39,119,.12) 0%,rgba(8,145,178,.05) 55%,transparent 75%); }
  .blob-tr { top:-120px; right:-120px; width:400px; height:400px; background:radial-gradient(circle,rgba(124,58,237,.10) 0%,transparent 70%); }

  /* FIX: content fills page exactly — no flex-grow gaps */
  .content {
    position: relative; z-index: 10;
    padding: 46px 52px 40px 56px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .content-cover { padding-top: 50px; }

  .section-title { font-size: 24px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; }
  .label { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 3px; }
  .value { font-size: 15px; font-weight: 700; color: #0f172a; }
  .body-text { font-size: 13px; line-height: 1.7; color: #475569; text-align: justify; }

  .card { background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:24px 28px; box-shadow:0 4px 20px rgba(0,0,0,.05); position:relative; overflow:hidden; }
  .card-accent::before { content:''; position:absolute; top:0; left:0; width:4px; height:100%; background:linear-gradient(180deg,#1d4ed8,#7c3aed,#db2777); }
  .card-blue   { border-top:3px solid #1d4ed8; }
  .card-purple { border-top:3px solid #7c3aed; }
  .card-pink   { border-top:3px solid #db2777; }
  .card-teal   { border-top:3px solid #0891b2; }
  .card-light  { background:#f8fafc; border:1px solid #e2e8f0; border-radius:14px; padding:14px 18px; }

  .grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .grid-3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; }
  .grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }

  table { width:100%; border-collapse:collapse; }
  thead tr { background:#f1f5f9; }
  th { padding:11px 14px; text-align:left; font-size:11px; font-weight:800; color:#1e3a8a; text-transform:uppercase; letter-spacing:1px; border-bottom:2px solid #e2e8f0; }
  td { padding:11px 14px; font-size:13px; color:#334155; border-bottom:1px solid #f1f5f9; vertical-align:middle; }
  .total-row td { font-weight:800; font-size:16px; color:#1d4ed8; border-top:2px solid #1d4ed8; border-bottom:none; }

  .chip { display:inline-block; padding:4px 12px; border-radius:100px; font-size:11px; font-weight:700; letter-spacing:0.5px; }
  .chip-blue  { background:#dbeafe; color:#1d4ed8; }
  .chip-green { background:#dcfce7; color:#15803d; }

  .divider          { height:1px; background:#e2e8f0; margin:16px 0; }
  .divider-gradient { height:2px; margin:20px 0; background:linear-gradient(90deg,#1d4ed8,#7c3aed,#db2777,transparent); }

  .icon-circle { width:32px; height:32px; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:14px; }
  .ic-blue  { background:#dbeafe; color:#1d4ed8; }
  .ic-green { background:#dcfce7; color:#15803d; }
  .ic-pink  { background:#fce7f3; color:#be185d; }

  .step-num { width:32px; height:32px; border-radius:50%; flex-shrink:0; background:linear-gradient(135deg,#1d4ed8,#7c3aed); display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:800; color:white; }

  .team-card { border-radius:20px; overflow:hidden; border:2px solid #e2e8f0; box-shadow:0 8px 30px rgba(0,0,0,.08); width:300px; height:400px; background:white; display:flex; flex-direction:column; }
  .team-card-img-wrapper { flex:1; width:100%; display:flex; align-items:center; justify-content:center; background:#f8fafc; min-height:0; overflow:hidden; }
  .team-card-img { width:100%; height:100%; object-fit:cover; display:block; }
  .team-card-overlay { width:100%; height:130px; background:linear-gradient(135deg,rgba(29,78,216,0.95),rgba(219,39,119,0.95)); padding:16px 20px; border-top:1px solid rgba(255,255,255,0.2); display:flex; flex-direction:column; align-items:center; justify-content:center; flex-shrink:0; }
  .team-icon-btn { width:32px; height:32px; border-radius:8px; background:rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; text-decoration:none; }

  .logo-box { background:white; border:1px solid #e2e8f0; border-radius:10px; height:56px; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; color:#475569; text-align:center; padding:6px; }
`;


// ─── MAIN TEMPLATE FUNCTION ───────────────────────────────────


export const generateHTMLTemplate = (quotation, company, bankDetails, terms, team) => {
  const p  = quotation.product || {};
  const c  = quotation.preparedFor || {};
  const subtotal = (p.unitPrice || 0) * (p.quantity || 1);

  // ── Normalise terms ──
  const termsTitle  = getTermsTitle(terms);
  const termsPoints = getTermsPoints(terms);

  // ── Normalise phone display ──
  const phoneDisplay = Array.isArray(company.phone)
    ? company.phone.join(" &nbsp;&middot;&nbsp; ")
    : (company.phone || "");

  const iconLn = `<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`;
  const iconIg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;
  const iconEm = `<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>`;
  const iconPh = `<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M20 22.621l-3.521-6.792c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.036z"/></svg>`;

  // Pages generators
  const pageCover = () => `
<div class="page">
  <div class="top-bar"></div>
  <div class="blob blob-tl"></div>
  <div class="blob blob-br"></div>

  <div class="content content-cover">

    <!-- Logo row -->
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:32px;">
      ${company.logo
        ? `<div style="width:52px;height:52px;border-radius:12px;border:1px solid #e2e8f0;background:white;display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.05);">
             <img src="${company.logo}" style="width:80%;height:80%;object-fit:contain;" alt="Logo" />
           </div>`
        : `<div style="width:52px;height:52px;border-radius:12px;background:linear-gradient(135deg,#1d4ed8,#7c3aed);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
             <span style="font-size:24px;font-weight:900;color:white;">${(company.companyName || "R").charAt(0)}</span>
           </div>`}
      <div>
        <div style="font-size:20px;font-weight:900;color:#0f172a;letter-spacing:-0.5px;">${company.companyName || "ROBOMIRACLE"}</div>
        <div style="font-size:10px;font-weight:700;color:#3b82f6;letter-spacing:2px;text-transform:uppercase;">${company.tagline || "INNOVATION IN ROBOTICS"}</div>
      </div>
    </div>

    <!-- Hero zone — fixed height so it never pushes content off page -->
    <div style="width:100%;height:420px;border-radius:16px;background:linear-gradient(135deg,#f4f7fa 0%,#ffffff 100%);border:1px solid #e2e8f0;display:flex;align-items:flex-end;justify-content:center;position:relative;overflow:hidden;flex-shrink:0;">
      <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(56,189,248,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.1) 1px,transparent 1px);background-size:20px 20px;"></div>
      <img src="${config.frontendUrl}/bg.webp" style="height:100%;width:100%;object-fit:cover;object-position:bottom center;position:relative;z-index:1;" alt="Background" />
    </div>

    <!-- Title block -->
    <div style="margin-top:40px;text-align:center;">
      <div style="font-size:11px;font-weight:800;color:#3b82f6;letter-spacing:3px;margin-bottom:12px;text-transform:uppercase;">COMMERCIAL PROPOSAL</div>
      <div style="font-size:48px;font-weight:900;color:#0f172a;line-height:1.1;letter-spacing:-1.5px;text-transform:uppercase;">
        ${p.productName || "PRODUCT"}<br>
        <span style="color:#1d4ed8;">PROPOSAL</span>
      </div>
    </div>

    <div style="height:3px;background:linear-gradient(90deg,#1d4ed8,#db2777,transparent);width:100%;margin:20px auto 28px;border-radius:2px;"></div>

    <!-- Prepared-for + meta — pinned to bottom via margin-top:auto -->
    <div style="display:flex;gap:20px;margin-top:5px;align-items:stretch;">
      <div style="flex:1;background:#f4f7fa;border:1px solid #e2e8f0;border-left:6px solid #4f46e5;border-radius:12px;padding:30px 24px;text-align:left;display:flex;flex-direction:column;justify-content:center;">
        <div style="font-size:11px;font-weight:800;color:#64748b;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;">PREPARED FOR</div>
        <div style="font-size:32px;font-weight:900;color:#0f172a;margin-bottom:6px;">${c.name || "&mdash;"}</div>
        <div style="font-size:16px;font-weight:600;color:#475569;margin-bottom:4px;">${c.department ? c.department + " &mdash; " : ""}${c.institution || ""}</div>
        <div style="font-size:14px;color:#94a3b8;">${c.city || ""}${c.city && c.state ? ", " : ""}${c.state || ""}${c.pincode ? " &mdash; " + c.pincode : ""}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;min-width:220px;justify-content:space-between;">
        <div style="background:white;border:1px solid #e2e8f0;border-radius:8px;padding:12px 16px;">
          <div style="font-size:10px;font-weight:800;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">QUOTATION NO.</div>
          <div style="font-size:16px;font-weight:800;color:#1e3a8a;">${quotation.quotationNo || "&mdash;"}</div>
        </div>
        <div style="background:white;border:1px solid #e2e8f0;border-radius:8px;padding:12px 16px;">
          <div style="font-size:10px;font-weight:800;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">DATE</div>
          <div style="font-size:16px;font-weight:800;color:#0f172a;">${formatDate(quotation.quotationDate || quotation.createdAt)}</div>
        </div>
        <div style="background:white;border:1px solid #e2e8f0;border-radius:8px;padding:12px 16px;">
          <div style="font-size:10px;font-weight:800;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">DELIVERY</div>
          <div style="font-size:16px;font-weight:800;color:#10b981;">${p.deliveryTime || "&mdash;"}</div>
        </div>
      </div>
    </div>

  </div>
</div>`;

  const pageAbout = () => quotation.includeAbout !== false ? `
<div class="page">
  <div class="top-bar"></div>
  <div class="blob blob-tr"></div>
  <div class="content">

    <div class="section-title">About Us</div>
    <div class="card card-accent">
      <p class="body-text">${(company.about || "").replace(/\n/g, "<br>")}</p>
    </div>

    <div class="divider" style="margin:20px 0;"></div>

    <div class="section-title">How It Works</div>
    <div class="card card-accent">
      <p class="body-text">${(company.howItWorks || "").replace(/\n/g, "<br>")}</p>
    </div>

    <div class="divider" style="margin:16px 0;"></div>

    <div class="section-title" style="margin-bottom:12px;">Our Solution</div>
    <div class="card card-accent">
      <p class="body-text">${(company.solution || "").replace(/\n/g, "<br>")}</p>
    </div>

  </div>
</div>` : "";

  const pageVision = () => quotation.includeVisionMission !== false ? `
<div class="page">
  <div class="top-bar"></div>
  <div class="blob blob-tl"></div>
  <div class="blob blob-br"></div>
  <div class="content">

    <div class="grid-2" style="gap:16px;margin-bottom:20px;">
      <div class="card" style="background:linear-gradient(150deg,#1e3a8a 0%,#1d4ed8 100%);border:none;padding:28px 30px;">
        <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.6);letter-spacing:3px;margin-bottom:10px;">OUR VISION</div>
        <div style="font-size:22px;font-weight:900;color:white;margin-bottom:12px;line-height:1.1;">Vision</div>
        <p style="font-size:12px;line-height:1.7;color:rgba(255,255,255,.85);margin:0;text-align:justify;">${(company.vision || "").replace(/\n/g, "<br>")}</p>
      </div>
      <div class="card" style="background:linear-gradient(150deg,#5b21b6 0%,#7c3aed 100%);border:none;padding:28px 30px;">
        <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.6);letter-spacing:3px;margin-bottom:10px;">OUR MISSION</div>
        <div style="font-size:22px;font-weight:900;color:white;margin-bottom:12px;line-height:1.1;">Mission</div>
        <p style="font-size:12px;line-height:1.7;color:rgba(255,255,255,.85);margin:0;text-align:justify;">${(company.mission || "").replace(/\n/g, "<br>")}</p>
      </div>
    </div>

    <div class="divider-gradient"></div>

    <div class="section-title" style="margin-top:16px;">Why Choose Us?</div>
    <div class="card card-accent" style="margin-top:8px;">
      <p class="body-text" style="font-size:13px;margin:0;">${(company.whyChooseUs || "").replace(/\n/g, "<br>")}</p>
    </div>

  </div>
</div>` : "";

  const pagePricing = () => `
<div class="page">
  <div class="top-bar"></div>
  <div class="blob blob-tl"></div>
  <div class="blob blob-br"></div>
  <div class="content" style="padding:40px 48px;">

    <!-- Page Header -->
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
      <div>
        <div style="font-size:10px;font-weight:800;color:#64748b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase;">COMMERCIAL PROPOSAL</div>
        <div style="font-size:28px;font-weight:900;color:#0f172a;letter-spacing:-1px;text-transform:uppercase;">${p.productName || "PRODUCT"} <span style="color:#1d4ed8;">PROPOSAL</span></div>
      </div>
      <div style="text-align:right;">
        ${company.logo ? `<img src="${company.logo}" style="width:120px;height:auto;max-height:50px;object-fit:contain;" alt="Logo" />` : `<div style="font-size:20px;font-weight:900;color:#0f172a;">${company.companyName}</div>`}
      </div>
    </div>

    <!-- Big Hero Image -->
    <div style="width:100%;height:320px;border-radius:16px;background:linear-gradient(135deg,#f4f7fa 0%,#ffffff 100%);border:1px solid #e2e8f0;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;flex-shrink:0;margin-bottom:24px;">
      <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(56,189,248,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.1) 1px,transparent 1px);background-size:20px 20px;"></div>
      ${p.productImage 
        ? `<img src="${p.productImage}" style="height:90%;width:90%;object-fit:contain;position:relative;z-index:1;drop-shadow:0 10px 20px rgba(0,0,0,0.1);" alt="Product" />` 
        : `<div style="position:relative;z-index:1;color:#94a3b8;font-weight:700;">No Product Image</div>`}
    </div>

    <!-- Table Card -->
    <div style="background:white;border-radius:12px;border:1px solid #e2e8f0;box-shadow:0 4px 15px rgba(0,0,0,0.03);margin-bottom:24px;">
      <table style="width:100%;border-collapse:separate;border-spacing:0;">
        <!-- Table Header -->
        <thead>
          <tr>
            <th style="background:#f8fafc;border-bottom:1px solid #e2e8f0;padding:14px 24px;text-align:left;font-size:10px;font-weight:800;color:#64748b;letter-spacing:1px;width:10%;border-top-left-radius:12px;">NO</th>
            <th style="background:#f8fafc;border-bottom:1px solid #e2e8f0;padding:14px 24px;text-align:left;font-size:10px;font-weight:800;color:#64748b;letter-spacing:1px;">DESCRIPTION</th>
            <th style="background:#f8fafc;border-bottom:1px solid #e2e8f0;padding:14px 24px;text-align:right;font-size:10px;font-weight:800;color:#64748b;letter-spacing:1px;width:25%;border-top-right-radius:12px;">AMOUNT (INR)</th>
          </tr>
        </thead>
        <tbody>
          <!-- Rows -->
          <tr>
            <td style="border-bottom:1px solid #f1f5f9;padding:16px 24px;font-size:11px;font-weight:700;color:#94a3b8;">01</td>
            <td style="border-bottom:1px solid #f1f5f9;padding:16px 24px;">
              <div style="font-size:13px;font-weight:800;color:#0f172a;margin-bottom:2px;">Base product unit</div>
              <div style="font-size:10px;color:#64748b;">${p.productDescription || "Standard unit configuration"}</div>
            </td>
            <td style="border-bottom:1px solid #f1f5f9;padding:16px 24px;text-align:right;font-size:14px;font-weight:700;color:#0f172a;">${subtotal.toLocaleString()}</td>
          </tr>
          <!-- Packing -->
          <tr>
            <td style="border-bottom:1px solid #f1f5f9;padding:16px 24px;font-size:11px;font-weight:700;color:#94a3b8;">02</td>
            <td style="border-bottom:1px solid #f1f5f9;padding:16px 24px;font-size:12px;font-weight:600;color:#334155;">Packing &amp; Forwarding</td>
            <td style="border-bottom:1px solid #f1f5f9;padding:16px 24px;text-align:right;font-size:13px;font-weight:600;color:#334155;">${freeOrPrice(p.packing) === 'FREE' ? '0' : Number(p.packing).toLocaleString()}</td>
          </tr>
          <!-- Insurance -->
          <tr>
            <td style="border-bottom:1px solid #f1f5f9;padding:16px 24px;font-size:11px;font-weight:700;color:#94a3b8;">03</td>
            <td style="border-bottom:1px solid #f1f5f9;padding:16px 24px;font-size:12px;font-weight:600;color:#334155;">Transit Insurance</td>
            <td style="border-bottom:1px solid #f1f5f9;padding:16px 24px;text-align:right;font-size:13px;font-weight:600;color:#334155;">${freeOrPrice(p.transitInsurance) === 'FREE' ? '0' : Number(p.transitInsurance).toLocaleString()}</td>
          </tr>
          <!-- Shipping -->
          <tr>
            <td style="border-bottom:1px solid #e2e8f0;padding:16px 24px;font-size:11px;font-weight:700;color:#94a3b8;">04</td>
            <td style="border-bottom:1px solid #e2e8f0;padding:16px 24px;font-size:12px;font-weight:600;color:#334155;">Shipping &amp; Handling</td>
            <td style="border-bottom:1px solid #e2e8f0;padding:16px 24px;text-align:right;font-size:13px;font-weight:600;color:#334155;">${freeOrPrice(p.shipping) === 'FREE' ? '0' : Number(p.shipping).toLocaleString()}</td>
          </tr>
          <!-- Subtotals inside the white section, right aligned -->
          <tr>
            <td colspan="2" style="padding:16px 24px 6px;text-align:right;font-size:10px;font-weight:800;color:#64748b;text-transform:uppercase;">SUBTOTAL</td>
            <td style="padding:16px 24px 6px;text-align:right;font-size:13px;font-weight:800;color:#0f172a;">${subtotal.toLocaleString()}</td>
          </tr>
          <tr>
            <td colspan="2" style="padding:6px 24px 18px;text-align:right;font-size:10px;font-weight:800;color:#64748b;text-transform:uppercase;">GST (${p.gstPercentage || 18}%)</td>
            <td style="padding:6px 24px 18px;text-align:right;font-size:13px;font-weight:800;color:#0f172a;">${Number(p.gstAmount).toLocaleString()}</td>
          </tr>
          <!-- Grand Total Bar -->
          <tr>
            <td colspan="2" style="background:#082f49;padding:18px 24px;text-align:left;font-size:11px;font-weight:800;letter-spacing:1px;color:white;border-bottom-left-radius:12px;">GRAND TOTAL</td>
            <td style="background:#082f49;padding:18px 24px;text-align:right;font-size:18px;font-weight:900;color:white;border-bottom-right-radius:12px;">₹ ${Number(p.grandTotal).toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Bottom Cards -->
    <div style="display:flex;gap:20px;">
      <!-- Payment Details -->
      <div style="flex:2;background:#f0f9ff;border-radius:12px;padding:24px;border:1px solid #e0f2fe;">
        <div style="font-size:10px;font-weight:800;color:#0369a1;letter-spacing:1px;margin-bottom:16px;text-transform:uppercase;">PAYMENT DETAILS</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div>
            <div style="font-size:9px;color:#0284c7;font-weight:800;margin-bottom:4px;text-transform:uppercase;">ACCOUNT NAME</div>
            <div style="font-size:12px;color:#0f172a;font-weight:800;">${bankDetails.accountName || ""}</div>
          </div>
          <div>
            <div style="font-size:9px;color:#0284c7;font-weight:800;margin-bottom:4px;text-transform:uppercase;">ACCOUNT NO</div>
            <div style="font-size:12px;color:#0f172a;font-weight:800;">${bankDetails.accountNo || ""}</div>
          </div>
          <div>
            <div style="font-size:9px;color:#0284c7;font-weight:800;margin-bottom:4px;text-transform:uppercase;">BANK &amp; BRANCH</div>
            <div style="font-size:12px;color:#0f172a;font-weight:800;">${bankDetails.bankName || ""} - ${bankDetails.branch || ""}</div>
          </div>
          <div>
            <div style="font-size:9px;color:#0284c7;font-weight:800;margin-bottom:4px;text-transform:uppercase;">IFSC CODE</div>
            <div style="font-size:12px;color:#0f172a;font-weight:800;">${bankDetails.ifscCode || ""}</div>
          </div>
        </div>
      </div>
      <!-- Delivery -->
      <div style="flex:1;background:#f0f9ff;border-radius:12px;padding:24px;border:1px solid #e0f2fe;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
        <div style="font-size:10px;font-weight:800;color:#0369a1;letter-spacing:1px;margin-bottom:12px;text-transform:uppercase;">ESTIMATED DELIVERY</div>
        <div style="font-size:24px;color:#082f49;font-weight:900;margin-bottom:8px;">${p.deliveryTime || "20 Days"}</div>
        <div style="font-size:10px;color:#64748b;line-height:1.4;">Post final approval and advance payment</div>
      </div>
    </div>

  </div>
</div>`;

  const pageTerms = () => quotation.includeTerms !== false && termsPoints.length > 0 ? `
<div class="page">
  <div class="top-bar"></div>
  <div class="blob blob-br"></div>
  <div class="content">

    <div class="section-title">${termsTitle}</div>

    <div class="card card-accent" style="padding:0;overflow:hidden;flex:1;">
      <div style="padding:0 28px;overflow:hidden;">
        ${termsPoints.map((pt, i) => `
          <div style="padding:14px 0;${i < termsPoints.length - 1 ? "border-bottom:1px solid #f1f5f9;" : ""}">
            <div style="display:flex;align-items:flex-start;gap:10px;">
              <div style="min-width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#1d4ed8,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:white;flex-shrink:0;margin-top:1px;">${i + 1}</div>
              <div>
                <div style="font-size:13px;font-weight:800;color:#0f172a;margin-bottom:4px;">${pt.heading || pt.title || pt.name || ""}</div>
                <p class="body-text" style="font-size:12px;margin:0;">${pt.description || pt.content || pt.text || ""}</p>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

  </div>
</div>` : "";

  const pageTeam = () => quotation.includeTeam !== false && Array.isArray(team) && team.length > 0 ? `
<div class="page">
  <div class="top-bar"></div>
  <div class="blob blob-tl"></div>
  <div class="blob blob-br"></div>
  <div class="content" style="align-items:center;justify-content:center;">

    <div style="text-align:center;margin-bottom:28px;width:100%;">
      <div style="font-size:10px;font-weight:800;color:#7c3aed;letter-spacing:3px;margin-bottom:10px;">MEET THE PEOPLE BEHIND ROBOMIRACLE</div>
      <div style="font-size:38px;font-weight:900;color:#0f172a;letter-spacing:-1px;">THE CORE <span style="color:#1d4ed8;">TEAM</span></div>
      <div class="divider-gradient" style="width:100px;margin:14px auto 0;"></div>
    </div>

    <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:40px;width:100%;margin-bottom:40px;">
      ${team.slice(0, 6).map(member => `
        <div class="team-card">
          <div class="team-card-img-wrapper">
            ${teamPhoto(member)}
          </div>
          <div class="team-card-overlay">
            <div style="font-size:22px;font-weight:900;color:white;letter-spacing:-0.5px;text-shadow:0 1px 2px rgba(0,0,0,0.3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;text-align:center;">${member.name || "&nbsp;"}</div>
            <div style="font-size:13px;font-weight:700;color:#fbcfe8;text-shadow:0 1px 2px rgba(0,0,0,0.3);margin-bottom:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:1px;text-transform:uppercase;width:100%;text-align:center;">${member.designation || member.role || "&nbsp;"}</div>
            <div style="display:flex;justify-content:center;gap:12px;min-height:32px;">
              ${member.linkedin ? `<a href="${member.linkedin}" target="_blank" class="team-icon-btn">${iconLn}</a>` : ''}
              ${member.instagram ? `<a href="${member.instagram}" target="_blank" class="team-icon-btn">${iconIg}</a>` : ''}
              ${member.email ? `<a href="mailto:${member.email}" class="team-icon-btn">${iconEm}</a>` : ''}
              ${member.phone ? `<a href="tel:${member.phone}" class="team-icon-btn">${iconPh}</a>` : ''}
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    <div style="margin-top:auto;text-align:center;width:100%;padding-bottom:16px;">
      <div style="display:inline-flex;align-items:center;gap:12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:12px 28px;">
        ${company.logo 
          ? `<img src="${company.logo}" style="height:36px;width:auto;object-fit:contain;" alt="Logo" />` 
          : `<div style="width:36px;height:36px;border-radius:9px;background:linear-gradient(135deg,#1d4ed8,#7c3aed);display:flex;align-items:center;justify-content:center;">
               <span style="font-size:18px;font-weight:900;color:white;">R</span>
             </div>`
        }
        <div style="font-size:20px;font-weight:900;color:#0f172a;letter-spacing:-0.5px;">${company.companyName || "ROBOMIRACLE"}</div>
      </div>
    </div>

  </div>
</div>` : "";

  const pageContact = () => `
<div class="page">
  <div class="top-bar"></div>
  <div class="blob blob-tl"></div>
  <div class="blob blob-tr"></div>
  <div class="content">

    <div style="position:relative;height:160px;margin-bottom:20px;border-radius:14px;overflow:hidden;flex-shrink:0;">
      <div style="position:absolute;inset:0;background:#0f172a;transform:skewY(-2deg) translateY(10px);transform-origin:top left;"></div>
      <div style="position:absolute;inset:0;background:#0ea5e9;transform:skewY(1.5deg) translateY(-6px);transform-origin:top left;opacity:.85;"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,#7c3aed,#c026d3);transform:skewY(-1deg);transform-origin:top left;display:flex;align-items:center;padding:0 46px;">
        <div>
          <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.65);letter-spacing:3px;margin-bottom:8px;">OUR REACH</div>
          <div style="font-size:24px;font-weight:900;color:white;line-height:1.1;letter-spacing:-0.5px;">TRUSTED BY INNOVATORS</div>
        </div>
      </div>
      <div style="position:absolute;top:14px;right:36px;width:100px;height:100px;background-image:radial-gradient(rgba(255,255,255,.3) 20%,transparent 20%);background-size:10px 10px;"></div>
    </div>

    <div class="section-title" style="font-size:20px;margin-bottom:8px;">Clients &amp; Collaborations</div>
    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 14px; justify-items: center; margin-top: 8px;">
      ${[
        "TCS", "Sri Chaitanya", "Nalanda College", "HICET",
        "LuLu", "GITAM", "Allen", "PSG",
        "SBI", "Sri Satya Sai University", "SRMIST", "Thamarai International School",
        "Sri Ramakrishna College of Arts & Science", "TVS", "Coca-Cola", "KPR Institute of Engineering and Technology"
      ].map((name, i) => `
        <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
          <div style="width:100px; height:80px; border-radius:10px; background:white; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
            <img src="${config.frontendUrl}/clients/c${i + 1}.webp" style="max-width:80%; max-height:80%; object-fit:contain;" alt="${name}" />
          </div>
          <div style="font-size:10px; font-weight:700; color:#475569; text-align:center;">${name}</div>
        </div>
      `).join("")}
    </div>

    <div class="divider" style="margin:20px 0;flex-shrink:0;"></div>

    <div style="display:flex;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;flex-shrink:0;">
      <div style="flex:1;padding:24px 28px;background:linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%);">
        <div style="font-size:13px;font-weight:800;color:#1d4ed8;margin-bottom:16px;">READY TO BUILD THE FUTURE TOGETHER?</div>
        <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:12px;">
          <div class="icon-circle ic-blue">&#128205;</div>
          <div>
            <div style="font-size:12px;font-weight:700;color:#0f172a;">${company.companyName || "Robomiracle Technologies"}</div>
            <div style="font-size:11px;color:#64748b;line-height:1.5;max-width:350px;">196, Second floor, Robomiracle Technologies, Tulasi Chambers, Thiruvenkatasamy Rd W, R.S. Puram, Coimbatore, Tamil Nadu 641002</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <div class="icon-circle ic-green">&#128222;</div>
          <div style="font-size:12px;font-weight:700;color:#0f172a;">+91-6379438840 | +91-6380473177 | +91-7907108559</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="icon-circle ic-pink">&#9993;</div>
          <div style="font-size:12px;font-weight:700;color:#0f172a;">${company.email || ""}</div>
        </div>
      </div>
      <div style="width:180px;background:linear-gradient(135deg,rgba(124,58,237,.1),rgba(8,145,178,.1));display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;border-left:1px solid #e2e8f0;">
        <div style="width:110px;height:110px;border-radius:10px;background:white;border:1px solid #e2e8f0;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(0,0,0,.08);overflow:hidden;">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuAQMAAAD8lbS4AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABCklEQVQ4ja2UO46EMBBECxEQ+gb4Imi4FsFKRiKYa7HiIuYGDgksasvM7GeyadjOnoOSu7q6gdcK5F4lDPVCcrPhANx84hiWCFgx5FvF1HBZmU6gpDjW/4Jw7j4tJ1AdtU6vvw2+jcXJ9pD6MfYsPiqhnv+M9U0MzL1EOHatd0YcmrlaNdA6t7iK6Po1AR/Sd5sNgfqTRKNfFWNNGLaup8KgviKv4dBwhpOx+WmODfeKygYfDdpwhtdqTNlHXMTA3Ut1IqP8NWEpSQ1h1t+MWPLsExqtVXzG+yyWLYNTroqyFbXdSmNJeCTs6FNC0GXgdhmlfM/yKFnxODLHQAkjHk4e98R/H5mz+FpfR7sgI1yGwXUAAAAASUVORK5CYII=" style="width:100%;height:100%;object-fit:cover;" alt="QR Code" />
        </div>
        <div style="margin-top:10px;font-size:10px;font-weight:800;color:#7c3aed;letter-spacing:2px;">SCAN HERE</div>
      </div>
    </div>

  </div>
</div>`;

  const renderCustomPage = (imageUrl) => `
<div class="page" style="padding:0;position:relative;background:white;">
  <div class="top-bar"></div>
  <img src="${imageUrl}" style="width:100%;height:100%;object-fit:cover;display:block;" alt="Custom Page" />
</div>`;

  // Default page order if not provided
  let order = quotation.pageOrder;
  if (!order || order.length === 0) {
    order = [
      { id: 'cover', type: 'standard' },
      { id: 'about', type: 'standard' },
      { id: 'vision', type: 'standard' },
      { id: 'pricing', type: 'standard' },
      { id: 'terms', type: 'standard' },
      { id: 'team', type: 'standard' },
      { id: 'contact', type: 'standard' }
    ];
  }

  const customPagesMap = {};
  if (quotation.customPages) {
    quotation.customPages.forEach(cp => {
      customPagesMap[cp.id] = cp.imageUrl;
    });
  }

  let bodyHtml = '';
  for (const item of order) {
    if (item.type === 'standard') {
      if (item.id === 'cover') bodyHtml += pageCover();
      if (item.id === 'about') bodyHtml += pageAbout();
      if (item.id === 'vision') bodyHtml += pageVision();
      if (item.id === 'pricing') bodyHtml += pagePricing();
      if (item.id === 'terms') bodyHtml += pageTerms();
      if (item.id === 'team') bodyHtml += pageTeam();
      if (item.id === 'contact') bodyHtml += pageContact();
    } else if (item.type === 'custom') {
      if (customPagesMap[item.id]) {
        bodyHtml += renderCustomPage(customPagesMap[item.id]);
      }
    }
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Quotation &mdash; ${company.companyName || "Robomiracle"}</title>
  <style>${sharedCSS}</style>
</head>
<body>
${bodyHtml}
</body>
</html>`;
};
export const generateDefaultQuotation = () =>
  generateHTMLTemplate(
    defaultQuotation,
    defaultCompany,
    defaultBankDetails,
    defaultTerms,
    defaultTeam
  );