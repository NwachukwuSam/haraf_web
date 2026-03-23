import { useState, useEffect, useRef } from 'react';
import graceTitus from '../../assets/graceTitus.jpg';

// ─── Essay content per article ────────────────────────────────────────────────
const ESSAY_BODY = {
  0: {
    sections: [
      {
        heading: null,
        paragraphs: [
          "Every community we work in already knows what it needs. The borehole, the school, the cooperative — these are just the visible outputs of something much harder to measure: trust. This is a story about what it actually takes to earn it.",
          "We arrived in Guyuk in March 2021 with a plan. Clean water access within 90 days. The community listened politely. Two elders nodded. One woman in the back of the room said nothing and left early. Six months later, that woman — Hajiya Rakiya — became the person who kept the entire project from collapsing.",
          "The borehole was ready in week ten. By week fourteen, three of the five community liaison members we had appointed had stopped showing up to maintenance meetings. The pump handle was broken. Children were collecting water from the same stream we had been trying to replace.",
        ],
      },
      {
        heading: "The Infrastructure Was Never the Hard Part",
        paragraphs: [
          "Infrastructure fails when trust has not been built first. Not because communities don't want clean water — they do, desperately — but because the handover of ownership requires something that no logframe captures: the belief that this thing is theirs, not ours.",
          "Hajiya Rakiya taught us this. When we finally sat with her — not in a meeting room but at her compound at dusk — she told us that the community had seen NGOs come and go for fifteen years. Everyone drills a borehole, takes photos, and leaves. No one has ever come back.",
          "We came back. That is all it took. Not a second borehole. Not more funding. Just the act of returning, and of asking what went wrong rather than explaining why it went right.",
        ],
      },
      {
        heading: "What We Changed After Guyuk",
        paragraphs: [
          "We now spend the first three months of any community engagement doing nothing except listening. No deliverables. No visible outputs. Just presence, questions, and the slow work of demonstrating that we are not going to disappear.",
          "Our donors find this difficult to report on. 'Trust-building' does not have a standard indicator. You cannot photograph it. But every durable piece of infrastructure we have built in the last four years has had this phase underneath it, invisible and essential.",
          "The borehole is not the point. The point is the relationship that makes the borehole mean something. We are still learning how to build that — and how to explain its value to a sector that mostly only counts what it can count.",
        ],
      },
    ],
    meta: { topic: "Community Trust & Field Practice", published: "February 20, 2026", length: "~2,100 words", category: "Field Reflection" },
    toc: ["The Infrastructure Was Never the Hard Part", "What We Changed After Guyuk", "What Donors Don't See"],
  },
  1: {
    sections: [
      {
        heading: null,
        paragraphs: [
          "In the summer of 2019, I sat in a meeting room in Abuja with twelve representatives from international donor organisations, each of whom had flown in from a different continent to discuss rural poverty in Nigeria. Not one of them had ever spent a night in a rural Nigerian community. I remember thinking: this is the frame. This is exactly the problem.",
          "The word \"beneficiary\" entered the development sector's vocabulary sometime in the 1970s, borrowed from the legal world of trusts and wills. A beneficiary, in that context, is someone who receives something they did not earn — a windfall, an inheritance, a gift from someone with more. The word carries within it an assumption of passivity. You do not work to become a beneficiary. You simply are one.",
          "When we apply this word to communities — living, breathing, working, striving communities of human beings — we make a category error so fundamental that it shapes every decision that follows. Who decides what they need? Who designs the programme? Who evaluates success? The answer, in almost every case, is not the \"beneficiary.\" And this is not an accident. It is the logic of the frame.",
        ],
      },
      {
        heading: "The Language We Use Is the Policy We Make",
        paragraphs: [
          "There is a concept in linguistics called the Sapir-Whorf hypothesis — the idea that the language we use shapes the reality we perceive. I am not a linguist, and I am not making a purely academic argument. I am saying something more practical: the words we use in the development sector determine what we see, what we measure, and ultimately what we build. And right now, the words are wrong.",
          "Consider how differently a programme feels when it is designed for \"community members\" versus designed for \"beneficiaries.\" The first implies that the people involved have a stake in the outcome — that they belong to something, and that their belonging gives them voice. The second implies they are fortunate to be included at all.",
        ],
      },
      {
        heading: "The Evidence We're Building",
        paragraphs: [
          "None of this is easy. Changing language inside large institutions is slow, political work. Donors have reporting templates that use the word \"beneficiary.\" Governments have policies that use it. We ourselves have ten years of documents that use it.",
          "But I believe — and our field experience increasingly supports this — that the communities we work with change faster, sustain more, and build more when they are approached as partners rather than recipients. The evidence is not merely anecdotal. We have been tracking it. We will publish it.",
        ],
      },
    ],
    meta: { topic: "Language & Framing in Development", published: "December 20, 2025", length: "~2,400 words", category: "Aid Reform" },
    toc: ["The Language We Use", "What Communities Told Us", "Three Words That Work Better", "The Evidence We're Building"],
  },
  9: {
    sections: [
      {
        heading: null,
        paragraphs: [
          "There is a village in Adamawa State called Wuro Ngaoje. It sits 47 kilometres from the nearest tarred road. The closest health facility is a two-hour walk through farmland. The nearest school with a qualified teacher is in the next local government area. When we first visited in 2017, the community elder told us: 'We have heard about development. It always stops at the main road.'",
          "That sentence has stayed with me for eight years. Not because it is unusual — we have heard versions of it in nearly every community we have ever worked in — but because it is so precisely, so devastatingly accurate. Development, as it is currently structured and funded, stops at the main road. It follows the path of least resistance: the communities that are easiest to access, easiest to photograph, easiest to count. The rest — the ones sitting 47 kilometres down an unpaved track — wait.",
          "HARAF was founded on a simple, uncomfortable premise: that the communities most excluded from development are not excluded by accident. They are excluded by design — by funding models that reward scale over depth, by reporting systems that value visible outputs over invisible processes, and by a sector-wide assumption that 'hard to reach' is a logistical problem rather than a moral one.",
        ],
      },
      {
        heading: "What 'Unreached' Actually Means",
        paragraphs: [
          "The development sector uses the word 'unreached' as though it describes a property of communities — as though some villages are simply, inherently, far away. But distance is only one dimension of exclusion. In our ten years of field work, we have identified at least five distinct barriers that together constitute what it means to be unreached.",
          "The first is geographic: physical distance from infrastructure, markets, and services. The second is institutional: communities that have no registered structures, no formal land tenure, and no legal pathway to access government programmes. The third is linguistic: communities where the dominant language of government and development organisations is not spoken, where forms cannot be filled, where meetings cannot be fully understood.",
          "The fourth barrier is historical: communities that have been promised things before and been let down so consistently that they have built a rational, evidence-based distrust of outside organisations. And the fifth — the one least talked about in development circles — is the barrier of perceived unimportance. Communities that have been told, implicitly and explicitly and for generations, that their problems are too small, too remote, or too complicated to be worth solving.",
        ],
      },
      {
        heading: "The Cost of the Last Mile",
        paragraphs: [
          "Working in truly remote communities is expensive. A borehole that costs ₦800,000 in a peri-urban area can cost ₦2.4 million in a remote one. A community health outreach that serves 200 people near a main road might serve 40 people in a remote village — at the same cost. Per-unit cost calculations, which dominate donor reporting, make remote communities look inefficient.",
          "This is not a trivial observation. It shapes everything. When donors require organisations to demonstrate cost-effectiveness, the rational response is to work where things are cheaper and easier. The communities that are hardest to reach generate the worst numbers on the metrics that funding decisions are based on. They fall out of the portfolio. They remain unreached.",
          "We have spent the last four years building an alternative model: one that accepts higher per-unit costs as the price of genuine inclusion, that reports not just on outputs but on the depth of exclusion that was overcome to produce them, and that treats the remoteness of a community not as a problem to be managed but as evidence of the very failure the sector exists to address.",
        ],
      },
      {
        heading: "Without Barriers — What It Actually Takes",
        paragraphs: [
          "Reaching unreached communities without barriers requires three things that are easy to say and very hard to fund. The first is time. Genuinely excluded communities do not trust quickly. The first six months of any programme in a remote community should be budgeted as relationship-building, with no deliverable except presence. Most funding cycles do not permit this.",
          "The second is flexibility. Communities that have been excluded from formal systems have often developed their own informal systems — governance structures, resource-sharing arrangements, conflict resolution mechanisms — that are invisible to standard needs assessments but absolutely essential to programme design. Reaching these communities requires the ability to adapt constantly, which most logframes explicitly prohibit.",
          "The third is permanence. Or at least the credible promise of it. The community elder in Wuro Ngaoje was not asking us to fix everything. He was asking us to come back. To be the kind of organisation that does not vanish after the project period ends. We have been going back to Wuro Ngaoje for eight years. There is now a functioning water system, a women's cooperative with 34 members, and a community school that the village built themselves with HARAF's technical support. None of this happened in a project cycle. All of it happened because we did not stop at the main road.",
        ],
      },
      {
        heading: "A Different Way of Counting",
        paragraphs: [
          "If we are serious about reaching the unreached, we need a different way of measuring success. Not cost per beneficiary, but depth of exclusion overcome. Not number of communities served, but whether the communities served were the ones most in need. Not speed of delivery, but durability of outcome.",
          "This is not romantic idealism. It is practical necessity. The communities that are easiest to serve are, increasingly, being served — by government programmes, by larger NGOs, by corporate social responsibility initiatives. The gap that remains, the gap that is growing, is the gap at the very edge of the map. That is where HARAF chooses to work. Not because it is easier. Because it is where the need is greatest, where the failure of the sector is most visible, and where genuine change — when it finally comes — has the deepest roots.",
          "The village in Wuro Ngaoje now has a water point that the community manages themselves. It has been functioning for four years without a breakdown that the community could not fix. The elder who told us that development always stops at the main road attended the opening of the school last September. He said nothing. He stood at the back and watched the children. That is what reaching the unreached looks like. It does not make a good photograph. It does not fit neatly into a quarterly report. But it is the work.",
        ],
      },
    ],
    meta: { topic: "Access, Exclusion & Field Philosophy", published: "March 10, 2026", length: "~3,200 words", category: "Field Reflection" },
    toc: [
      "What 'Unreached' Actually Means",
      "The Cost of the Last Mile",
      "Without Barriers — What It Actually Takes",
      "A Different Way of Counting",
    ],
  },
};

// Default essay body for repeated articles
const DEFAULT_ESSAY = {
  sections: [
    {
      heading: null,
      paragraphs: [
        "In 2014 I thought the biggest barrier to rural development was money. By 2016 I thought it was government. By 2019 I was beginning to suspect it was us — the NGOs, the consultants, the visiting experts — who were sometimes the problem.",
        "This is the most honest version of a decision in the field that I made in ten years. It is not a comfortable essay to write. It is also, I think, the most useful one I have written.",
        "Ten years in the field teaches you mostly what doesn't work. The programmes that look good in the proposal but dissolve on contact with reality. The theories of change that survive the workshop but not the village. The partners who were never really partners at all.",
      ],
    },
    {
      heading: "What I Got Wrong About Money",
      paragraphs: [
        "The assumption that more funding equals more impact is the founding myth of the sector. It feels self-evidently true — of course more resources help. But what I have observed, consistently, is that underfunded programmes with deep community buy-in outlast well-funded programmes that communities treat as someone else's project.",
        "The Gombe water programme we ran in 2016 with a ₦4 million budget failed within eighteen months. The Madagali cooperative we supported in 2018 with a ₦900,000 seed grant is still operating, now with twelve times its original membership.",
      ],
    },
    {
      heading: "What I Got Right (Eventually)",
      paragraphs: [
        "The thing I eventually got right is also the simplest: showing up consistently over a long time and having no agenda except to understand. No deliverable for that visit. No report to write. Just presence.",
        "Communities know the difference between a visit and a relationship. You cannot fake the latter. And you cannot build it in a 90-day project cycle.",
      ],
    },
  ],
  meta: { topic: "Field Practice & Reflection", published: "November 28, 2025", length: "~3,000 words", category: "Field Reflection" },
  toc: ["What I Got Wrong About Money", "What I Got Wrong About Government", "What I Got Wrong About Communities", "What I Got Right (Eventually)"],
};

// ─── Article data ─────────────────────────────────────────────────────────────
const articles = [
  {
    category: "FIELD REFLECTION",
    date: "February 20, 2026",
    readTime: "8 min read",
    title: "The Borehole Is Not the Point.",
    excerpt: "Every community we work in already knows what it needs. The borehole, the school, the cooperative — these are just the visible outputs of something much harder to measure: trust...",
    author: "Chukwudi Nwosu",
    role: "Head of Field Operations",
    avatar: graceTitus,
  },
  {
    category: "COMMUNITY LEADERSHIP",
    date: "December 20, 2025",
    readTime: "9 min read",
    title: "Stop Calling Them \"Beneficiaries\".",
    excerpt: "The word beneficiary is doing a lot of quiet damage in the development sector. It positions communities as passive receivers of other people's decisions. We've been experimenting...",
    author: "Chukwudi Nwosu",
    role: "Head of Field Operations",
    avatar: graceTitus,
  },
  {
    category: "FIELD REFLECTION",
    date: "November 28, 2025",
    readTime: "15 min read",
    title: "Ten Years In the Field. Ten Things I Got Wrong.",
    excerpt: "In 2014 I thought the biggest barrier to rural development was money. By 2016 I thought it was government. By 2019 I was beginning to suspect it was us — the NGOs, the consultants...",
    author: "Mrs. Grace Titus",
    role: "Founder & Executive Director",
    avatar: graceTitus,
  },
  {
    category: "FOOD SYSTEMS",
    date: "January 28, 2026",
    readTime: "10 min read",
    title: "The Smallholder Farmer Is the Most Important Person in Nigeria.",
    excerpt: "They produce 80% of the food. They occupy 70% of the farmland. They employ the majority of the rural poor. And they receive less than 4% of formal agricultural credit. This is not a gap.",
    author: "Aisha Bello",
    role: "Director of Programmes",
    avatar: graceTitus,
  },
  {
    category: "AID REFORM",
    date: "January 16, 2026",
    readTime: "11 min read",
    title: "The 90-Day Programme Is a Fiction We Need to Stop Selling to Donors.",
    excerpt: "We know — because we've measured it — that the most significant community changes begin to show up between 18 and 36 months. Yet most humanitarian funding cycles are 12 months or less.",
    author: "Chukwudi Nwosu",
    role: "Head of Field Operations",
    avatar: graceTitus,
  },
  {
    category: "WATER & CLIMATE",
    date: "January 9, 2026",
    readTime: "7 min read",
    title: "What Happens to a Borehole When the Rains Stop Coming?",
    excerpt: "Climate change is not a future problem in rural Nigeria — it is the daily reality of the communities we serve. As water tables fall and seasons shift, the infrastructure we've built is already under pressure.",
    author: "Ibrahim Musa",
    role: "Head of Water & Sanitation",
    avatar: graceTitus,
  },
  {
    category: "POLICY & ADVOCACY",
    date: "February 1, 2026",
    readTime: "12 min read",
    title: "Nigeria's Rural Budget Has Been Wrong for Thirty Years. Here's the Evidence.",
    excerpt: "A deep dive into federal and state agricultural budgets from 1994–2024 reveals a pattern so consistent it can only be described as intentional neglect. We built the data set. Now we're publishing it.",
    author: "Fatima Yusuf",
    role: "Director of Partnerships",
    avatar: graceTitus,
  },
  {
    category: "WOMEN & POWER",
    date: "February 8, 2026",
    readTime: "6 min read",
    title: "She Already Had the Plan. She Just Needed ₦50,000.",
    excerpt: "The most common thing we hear from women entering our cooperative programme is not 'teach me how.' It's 'finally, someone will listen.' What we think of as economic empowerment is often just removing obstacles.",
    author: "Ngozi Adeleke",
    role: "Head of Women's Empowerment",
    avatar: graceTitus,
  },
  {
    category: "EDUCATION",
    date: "December 10, 2025",
    readTime: "5 min read",
    title: "What a Child Learns in a Roofless School.",
    excerpt: "Not mathematics. Not reading. What a child learns in a school with no roof, no teacher, and no books is a lesson about their own worth — about whether the world considers them worth investing in.",
    author: "Aisha Bello",
    role: "Director of Programmes",
    avatar: graceTitus,
  },
  {
    category: "FIELD REFLECTION",
    date: "March 10, 2026",
    readTime: "14 min read",
    title: "Reaching the Unreached Without Barriers.",
    excerpt: "There is a village in Adamawa State called Wuro Ngaoje. It sits 47 kilometres from the nearest tarred road. The community elder told us: 'We have heard about development. It always stops at the main road.' That sentence has stayed with us for eight years...",
    author: "Mrs. Grace Titus",
    role: "Founder & Executive Director",
    avatar: graceTitus,
  },
];

// ─── Category colours ─────────────────────────────────────────────────────────
const CAT_COLORS = {
  "FIELD REFLECTION":    { bg: "#F3EAD8", text: "#5C4D32" },
  "COMMUNITY LEADERSHIP":{ bg: "#E8F0FE", text: "#1A4FA0" },
  "FOOD SYSTEMS":        { bg: "#E8F5E9", text: "#1B5E20" },
  "AID REFORM":          { bg: "#FDE8E8", text: "#8B1A1A" },
  "WATER & CLIMATE":     { bg: "#E3F2FD", text: "#0D47A1" },
  "POLICY & ADVOCACY":   { bg: "#EDE7F6", text: "#4527A0" },
  "WOMEN & POWER":       { bg: "#FCE4EC", text: "#880E4F" },
  "EDUCATION":           { bg: "#FFF3E0", text: "#BF360C" },
};

// ─── Share / copy link button ─────────────────────────────────────────────────
function CopyLinkBtn() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="bg-harafBlue text-white w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center hover:bg-[#1462a8] hover:scale-105 transition-all"
      aria-label="Copy link"
      title={copied ? "Copied!" : "Copy link"}
    >
      {copied ? (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )}
    </button>
  );
}

// ─── Full essay reader (modal) ────────────────────────────────────────────────
function EssayReader({ article, index, onClose }) {
  const essay   = ESSAY_BODY[index] ?? DEFAULT_ESSAY;
  const scrollRef = useRef(null);
  const catStyle  = CAT_COLORS[article.category] || { bg: "#EEF5FC", text: "#1A78C2" };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const share = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    const links = {
      twitter:  `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
    };
    if (links[platform]) window.open(links[platform], "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#f5f6f7] overflow-y-auto"
      style={{ animation: "readerIn 0.32s cubic-bezier(0.22,1,0.36,1) both" }}
      ref={scrollRef}
    >
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-[#f5f6f7]/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full flex-shrink-0"
              style={{ background: catStyle.bg, color: catStyle.text }}
            >
              {article.category}
            </span>
            <span className="text-gray-400 text-xs hidden sm:block truncate">{article.title}</span>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-harafBlue transition-colors bg-white border border-gray-200 hover:border-harafBlue px-4 py-2 rounded-lg group"
          >
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Ideas
          </button>
        </div>
      </div>

      {/* Hero title band */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-8 py-10 sm:py-14">
        <div className="max-w-3xl mx-auto">

          {/* Back button — sits above the title, clearly visible */}
          <button
            onClick={onClose}
            className="group inline-flex items-center gap-2 text-harafBlue font-dm-sans font-bold text-xs uppercase tracking-widest mb-8 hover:gap-3 transition-all"
          >
            <span className="w-7 h-7 rounded-full border-2 border-harafBlue/30 group-hover:border-harafBlue flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </span>
            Back to Ideas
          </button>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400 text-xs">{article.date}</span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-400 text-xs">{article.readTime}</span>
          </div>
          <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-3">
            <img src={article.avatar} alt={article.author} className="w-11 h-11 rounded-full object-cover grayscale" />
            <div>
              <p className="font-dm-sans font-bold text-sm text-primary">{article.author}</p>
              <p className="font-dm-sans text-[11px] text-orange-700 uppercase tracking-tight font-medium">{article.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

        {/* Share bar — vertical on desktop, horizontal strip on mobile */}
        <div className="col-span-1 lg:col-span-1 flex flex-row lg:flex-col items-center justify-start gap-4 lg:gap-6 lg:pt-2">
          <p className="text-[10px] tracking-[0.4em] text-gray-400 font-bold uppercase lg:rotate-[-90deg] lg:mb-2">
            SHARE
          </p>
          <button onClick={() => share("twitter")} aria-label="Share on X"
            className="bg-harafBlue text-white w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center hover:bg-[#1462a8] hover:scale-105 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>
          <button onClick={() => share("facebook")} aria-label="Share on Facebook"
            className="bg-harafBlue text-white w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-[#1462a8] hover:scale-105 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.694V11.08h3.126V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.626h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </button>
          <button onClick={() => share("whatsapp")} aria-label="Share on WhatsApp"
            className="bg-harafBlue text-white w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center hover:bg-[#1462a8] hover:scale-105 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>
          <CopyLinkBtn />
        </div>

        {/* Article body */}
        <div className="col-span-1 lg:col-span-7 font-serif text-[#4a3f38] leading-[1.85] text-[16px] sm:text-[17px]">
          {essay.sections.map((section, si) => (
            <div key={si}>
              {section.heading && (
                <div className="mt-12 mb-1">
                  <p className="text-harafBlue text-[13px] font-dm-sans font-bold tracking-[0.2em] uppercase">
                    {section.heading}
                  </p>
                  <div className="h-px w-full bg-blue-200 mt-2 mb-6" />
                </div>
              )}
              {section.paragraphs.map((para, pi) => (
                <p
                  key={pi}
                  className={`mt-8 ${si === 0 && pi === 0
                    ? "first-letter:text-[72px] first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-harafBlue first-letter:font-playfair first-letter:font-bold"
                    : ""}`}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Right sidebar */}
        <div className="col-span-1 lg:col-span-4 space-y-10">

          {/* About this essay */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-[11px] tracking-[0.3em] text-harafBlue font-dm-sans font-bold uppercase mb-4">
              About This Essay
            </h3>
            <div className="space-y-2.5 font-dm-sans text-sm text-gray-600">
              <p><span className="font-bold text-primary">Topic:</span> {essay.meta.topic}</p>
              <p><span className="font-bold text-primary">Published:</span> {essay.meta.published}</p>
              <p><span className="font-bold text-primary">Length:</span> {essay.meta.length}</p>
              <p><span className="font-bold text-primary">Category:</span> {essay.meta.category}</p>
            </div>
          </div>

          {/* In this essay */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-[11px] tracking-[0.3em] text-harafBlue font-dm-sans font-bold uppercase mb-4">
              In This Essay
            </h3>
            <ul className="space-y-2.5">
              {essay.toc.map((item, i) => (
                <li key={i} className="font-dm-sans text-sm text-gray-600 hover:text-harafBlue cursor-pointer transition-colors flex items-center gap-2">
                  <span className="text-harafBlue/40 text-xs">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Share buttons */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-[11px] tracking-[0.3em] text-harafBlue font-dm-sans font-bold uppercase mb-4">
              Share This Essay
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: "TWITTER/X",  action: () => share("twitter") },
                { label: "FACEBOOK",   action: () => share("facebook") },
                { label: "WHATSAPP",   action: () => share("whatsapp") },
                { label: "COPY LINK",  action: () => navigator.clipboard.writeText(window.location.href) },
              ].map(({ label, action }) => (
                <button
                  key={label}
                  onClick={action}
                  className="border border-blue-200 bg-blue-50 hover:bg-blue-100 hover:scale-[1.02] active:scale-[0.98] transition-all text-harafBlue font-dm-sans font-bold text-[11px] tracking-widest uppercase py-2.5 px-3 rounded-lg"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Author card */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-[11px] tracking-[0.3em] text-harafBlue font-dm-sans font-bold uppercase mb-4">
              Written By
            </h3>
            <div className="flex items-center gap-3">
              <img src={article.avatar} alt={article.author} className="w-12 h-12 rounded-full object-cover grayscale flex-shrink-0" />
              <div>
                <p className="font-dm-sans font-bold text-sm text-primary">{article.author}</p>
                <p className="font-dm-sans text-[11px] text-orange-700 uppercase tracking-tight font-medium mt-0.5">{article.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom back button ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-16 pt-4">
        <div className="border-t border-gray-200 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-dm-sans text-[11px] text-gray-400 uppercase tracking-widest mb-1">Done reading?</p>
            <p className="font-playfair font-bold text-primary text-lg">Explore more ideas from the field.</p>
          </div>
          <button
            onClick={onClose}
            className="group flex items-center gap-2.5 bg-harafBlue hover:bg-[#1462a8] active:scale-[0.99] transition-all text-white font-dm-sans font-bold text-xs tracking-[0.18em] uppercase rounded-xl px-7 py-3.5 shadow-[0_4px_18px_rgba(26,120,194,0.25)]"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Ideas
          </button>
        </div>
      </div>

      <style>{`
        @keyframes readerIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ─── Article card ─────────────────────────────────────────────────────────────
function ArticleCard({ article, index, onClick }) {
  const catStyle = CAT_COLORS[article.category] || { bg: "#EEF5FC", text: "#1A78C2" };
  return (
    <div
      onClick={() => onClick(index)}
      className="bg-[#F8FBFF] border border-blue-50/50 p-8 flex flex-col h-full w-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
    >
      <div className="mb-5">
        <span
          className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase"
          style={{ background: catStyle.bg, color: catStyle.text }}
        >
          {article.category}
        </span>
      </div>

      <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-4 uppercase tracking-wider">
        <span>{article.date}</span>
        <span>•</span>
        <span>{article.readTime}</span>
      </div>

      <h3 className="text-[20px] leading-tight font-playfair font-bold text-[#1a1a1a] mb-4 group-hover:text-harafBlue transition-colors">
        {article.title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-[15px] mb-8 flex-grow font-dm-sans">
        {article.excerpt}
      </p>

      <div className="pt-5 border-t border-gray-100">
        <div className="flex items-center gap-3 mb-5">
          <img src={article.avatar} alt={article.author} className="w-10 h-10 rounded-full object-cover grayscale" />
          <div>
            <p className="text-sm font-bold text-gray-800 leading-none font-dm-sans">{article.author}</p>
            <p className="text-[11px] text-orange-700 font-medium mt-1 uppercase tracking-tight font-dm-sans">{article.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-harafBlue text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all font-dm-sans">
          Read Essay
          <svg width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function IdeaCard() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <section className="bg-white py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {articles.map((art, index) => (
            <div key={index} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex">
              <ArticleCard
                article={art}
                index={index}
                onClick={setOpenIndex}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Quote band */}
      <div className="bg-harafBlue w-full py-12 px-6">
        <h2 className="text-white text-xl sm:text-2xl font-bold italic font-playfair text-center leading-relaxed">
          "The communities we serve are not waiting to be saved.<br className="hidden sm:block" />
          They are waiting for systems to stop blocking them."
        </h2>
        <div className="text-harafYellow text-[13px] font-bold tracking-[0.2em] uppercase text-center mt-4 font-dm-sans">
          Featured Essay
        </div>
      </div>

      {/* Essay reader — full screen takeover */}
      {openIndex !== null && (
        <EssayReader
          article={articles[openIndex]}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}