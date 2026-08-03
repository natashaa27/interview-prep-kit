import type {
  Framework,
  InterviewExperience,
  Handbook,
  Resource,
} from "../types";

// ─── FRAMEWORKS ─────────────────────────────────────────────────────────────

export const frameworks: Framework[] = [
  {
    id: 1,
    name: "CIRCLES Framework",
    subtitle: "Product Design — most widely used in PM interviews",
    source: "ISB BTC + IITK Casebook",
    steps: [
      {
        letter: "C",
        title: "Comprehend the Situation",
        description:
          "Clarify the goal (revenue, engagement, market share), constraints, and context. Ask: What is it? Who is it for? Why do they need it?",
      },
      {
        letter: "I",
        title: "Identify the Customer",
        description:
          "Define one target persona using demographic, geographic, profession, or psychographic cuts. Avoid designing for everyone.",
      },
      {
        letter: "R",
        title: "Report Customer Needs",
        description:
          'List user pain points and needs via user stories: "As a <role>, I want <goal> so that <benefit>". Use user journey maps for abstract questions.',
      },
      {
        letter: "C",
        title: "Cut Through Prioritization",
        description:
          "Prioritize needs using MoSCoW, RICE scoring, Impact-Effort matrix, or Kano model. Tie priority back to the stated goal.",
      },
      {
        letter: "L",
        title: "List the Solutions",
        description:
          'Brainstorm features for prioritized needs. Include one moonshot idea. Use reversal method, attribute method, or the "why" method.',
      },
      {
        letter: "E",
        title: "Evaluate Trade-offs",
        description:
          "State pros/cons for each solution. Consider revenue, UX, feasibility, and implementation cost. Being self-critical earns credibility.",
      },
      {
        letter: "S",
        title: "Summarize",
        description:
          "In 30 seconds: which feature you recommend, why it benefits users and the business, and why over alternatives.",
      },
    ],
  },
  {
    id: 2,
    name: "AARRR Metrics Framework",
    subtitle: "Pirate Metrics — for any product health question",
    source: "BITSoM Handbook + ISB",
    steps: [
      {
        letter: "A",
        title: "Acquisition",
        description:
          "How do users find you? CAC, channel-wise traffic, App Store downloads, ad conversion rates.",
      },
      {
        letter: "A",
        title: "Activation",
        description:
          'First "aha moment". Onboarding completion rate, time-to-first-value, D1 retention.',
      },
      {
        letter: "R",
        title: "Retention",
        description:
          "Do users come back? D7/D30/D90 retention, DAU/MAU ratio, churn rate, session frequency.",
      },
      {
        letter: "R",
        title: "Referral",
        description:
          "Do users tell others? NPS, K-factor, viral coefficient, invite acceptance rate.",
      },
      {
        letter: "R",
        title: "Revenue",
        description:
          "Do users pay? ARPU, LTV, conversion to paid, revenue per cohort, payback period.",
      },
    ],
  },
  {
    id: 3,
    name: "Root Cause Analysis (RCA)",
    subtitle: "For metric drops and product incidents",
    source: "ISB BTC + BITSoM + IITK",
    steps: [
      {
        letter: "1",
        title: "Validate the Metric",
        description:
          "Confirm data pipeline is intact, metric definition is consistent, and the drop is real — not a tracking error.",
      },
      {
        letter: "2",
        title: "Segment the Drop",
        description:
          "Isolate by: platform (iOS/Android/Web), region, user cohort, feature area, payment method, or time of day.",
      },
      {
        letter: "3",
        title: "Check Internal Changes",
        description:
          "Any recent deploys, A/B tests, UI changes, or infrastructure incidents that correlate with the drop timing?",
      },
      {
        letter: "4",
        title: "Check External Factors",
        description:
          "Competitor actions, news events, seasonal patterns, regulatory changes, or payment partner issues.",
      },
      {
        letter: "5",
        title: "Form & Test Hypotheses",
        description:
          "State 2-3 hypotheses ranked by likelihood. Define a quick check to confirm/reject each one within 24 hours.",
      },
      {
        letter: "6",
        title: "Fix & Monitor",
        description:
          "Implement fix, roll back offending change, or escalate. Set up monitoring alert to catch recurrence.",
      },
    ],
  },
  {
    id: 4,
    name: "GTM (Go-To-Market) Framework",
    subtitle: "4 Ps + STP — for new product launches",
    source: "ISB BTC + IITK Casebook",
    steps: [
      {
        letter: "S",
        title: "Segmentation",
        description:
          "Divide the market by demographics, geography, psychographics, or behaviour. Define 2-3 addressable segments.",
      },
      {
        letter: "T",
        title: "Targeting",
        description:
          "Choose your beachhead segment — highest need + willingness to pay + accessible. Defend this choice.",
      },
      {
        letter: "P",
        title: "Positioning",
        description:
          'One-sentence value prop: "For [target], [product] is the [category] that [benefit], unlike [alternative]".',
      },
      {
        letter: "P",
        title: "Product",
        description:
          "Define the core features for launch (MVP). What does the product do? What's out of scope for V1?",
      },
      {
        letter: "P",
        title: "Price",
        description:
          "Freemium, subscription, transaction fee, or premium? Compare to WTP and competitive benchmarks.",
      },
      {
        letter: "P",
        title: "Place / Distribution",
        description:
          "Owned channels (app store, website), partnership, direct sales, or community-led growth?",
      },
      {
        letter: "P",
        title: "Promotion",
        description:
          "Acquisition channels: organic (SEO, referral), paid (social ads), partnerships, PR. Define CAC target.",
      },
    ],
  },
  {
    id: 5,
    name: "Guesstimate Framework",
    subtitle: "Market sizing and estimation questions",
    source: "ISB BTC + BITSoM + IITK",
    steps: [
      {
        letter: "1",
        title: "Define & Confirm",
        description:
          "Restate the question clearly. Confirm scope with the interviewer (India only? Smartphone users only?). Narrow ambiguity.",
      },
      {
        letter: "2",
        title: "Express as an Equation",
        description:
          "Break into a formula: e.g. Daily Uber rides = Drivers × avg trips/day OR Population × % who use Uber × trips/month ÷ 30.",
      },
      {
        letter: "3",
        title: "Deconstruct Components",
        description:
          "Estimate each variable using anchor data (India population: 1.4B, smartphones: ~700M, urban: ~500M).",
      },
      {
        letter: "4",
        title: "State Assumptions Clearly",
        description:
          "Make your assumptions explicit and defensible. Don't treat assumptions as facts.",
      },
      {
        letter: "5",
        title: "Calculate & Sanity Check",
        description:
          "Do the math step-by-step. Sanity-check against known benchmarks (e.g. Uber says 1.5M daily India trips).",
      },
    ],
  },
  {
    id: 6,
    name: "RICE Scoring",
    subtitle: "Feature and roadmap prioritization",
    source: "BITSoM Handbook + IITK Casebook",
    steps: [
      {
        letter: "R",
        title: "Reach",
        description:
          "How many users will this impact in a given time period? Use DAU/MAU numbers or % of user base.",
      },
      {
        letter: "I",
        title: "Impact",
        description:
          "How much will this move the needle per user? Score 0.25 (minimal) to 3 (massive) based on estimated lift.",
      },
      {
        letter: "C",
        title: "Confidence",
        description:
          "How confident are you in your estimates? 100% (high data), 80% (some data), 50% (mostly assumptions).",
      },
      {
        letter: "E",
        title: "Effort",
        description:
          "How many person-months to build? Estimate by feature scope and team size.",
      },
      {
        letter: "=",
        title: "RICE Score = R × I × C ÷ E",
        description:
          "Rank all features by RICE score. Highest score = highest priority. Defend outliers with qualitative reasoning.",
      },
    ],
  },
  {
    id: 7,
    name: "Favourite Product Framework",
    subtitle: '"Tell me about a product you love" questions',
    source: "ISB BTC Handbook",
    steps: [
      {
        letter: "1",
        title: "Name the Product + Category",
        description:
          "State the product and briefly describe what category it's in and the core user problem it solves.",
      },
      {
        letter: "2",
        title: "The Pain Point It Solves",
        description:
          'Articulate the user problem clearly. "Instagram solves boredom and disconnection from friends." Avoid feature-speak.',
      },
      {
        letter: "3",
        title: "2-3 Specific Features You Love",
        description:
          "Pick features that show your product sense — explain *why* they work (user psychology, business model, UX principle).",
      },
      {
        letter: "4",
        title: "Improvement Opportunity",
        description:
          "Name one thing you'd improve and how. Use a mini-CIRCLES: persona → pain → solution → metric.",
      },
      {
        letter: "5",
        title: "Metrics of Success",
        description:
          "What are the product's north-star metric and 2-3 supporting metrics? Why these?",
      },
    ],
  },
  {
    id: 8,
    name: "Product Metrics Framework",
    subtitle: "Structuring metrics for any product question",
    source: "ISB BTC + BITSoM + IITK",
    steps: [
      {
        letter: "N",
        title: "North Star Metric",
        description:
          'The single metric that best captures the product\'s core value delivery (e.g. "weekly rides completed" for Uber).',
      },
      {
        letter: "A",
        title: "Acquisition Metrics",
        description: "New users, CAC, channel-wise installs, trial starts.",
      },
      {
        letter: "E",
        title: "Engagement Metrics",
        description:
          "DAU/MAU, session length, core action rate (e.g. songs played/session), feature adoption.",
      },
      {
        letter: "R",
        title: "Retention Metrics",
        description:
          "D1/D7/D30 retention, churn rate, resurrection rate, cohort LTV.",
      },
      {
        letter: "M",
        title: "Monetisation Metrics",
        description:
          "ARPU, conversion to paid, revenue per cohort, LTV:CAC ratio.",
      },
      {
        letter: "H",
        title: "Health / Quality Metrics",
        description:
          "Crash rate, p99 latency, error rate, NPS, CSAT — guardrail metrics to not trade off.",
      },
    ],
  },
  {
    id: 9,
    name: "Value vs Complexity",
    subtitle: "Prioritise quick wins and strategic bets",
    source: "IIMC Casebook",
    steps: [
      {
        letter: "V",
        title: "Value",
        description:
          "Estimate how much impact a feature will deliver for users and the business.",
      },
      {
        letter: "C",
        title: "Complexity",
        description:
          "Estimate implementation effort, dependencies, and risks for each initiative.",
      },
      {
        letter: "Q",
        title: "Quick Wins",
        description:
          "Identify high-value, low-complexity opportunities to prioritise first.",
      },
      {
        letter: "S",
        title: "Strategic Bets",
        description:
          "Evaluate high-value, high-complexity initiatives against long-term goals.",
      },
    ],
  },
  {
    id: 10,
    name: "KANO Model",
    subtitle: "Delight customers through feature prioritisation",
    source: "IIMC Casebook",
    steps: [
      {
        letter: "B",
        title: "Basic Features",
        description:
          "Identify expected features that customers take for granted.",
      },
      {
        letter: "P",
        title: "Performance Features",
        description:
          "Estimate features where improved performance increases satisfaction.",
      },
      {
        letter: "E",
        title: "Excitement Features",
        description:
          "Find features that delight customers and create positive surprise.",
      },
      {
        letter: "I",
        title: "Indifferent Features",
        description:
          "Avoid features that neither add satisfaction nor solve a core problem.",
      },
    ],
  },
  {
    id: 11,
    name: "Weighted Scoring",
    subtitle: "Score options against multiple criteria",
    source: "IIMC Casebook",
    steps: [
      {
        letter: "C",
        title: "Criteria",
        description:
          "Choose the evaluation factors that matter most for the decision.",
      },
      {
        letter: "W",
        title: "Weights",
        description:
          "Assign importance to each criterion based on strategy and impact.",
      },
      {
        letter: "S",
        title: "Score",
        description:
          "Rate each option against the criteria and compute weighted totals.",
      },
      {
        letter: "R",
        title: "Rank",
        description:
          "Prioritise the highest-scoring options and explain why.",
      },
    ],
  },
  {
    id: 12,
    name: "ICE Scoring",
    subtitle: "Impact, Confidence, Ease prioritisation",
    source: "IIMC Casebook",
    steps: [
      {
        letter: "I",
        title: "Impact",
        description:
          "Estimate how much value the idea will create for users or the business.",
      },
      {
        letter: "C",
        title: "Confidence",
        description:
          "Estimate how sure you are about your assumptions and estimates.",
      },
      {
        letter: "E",
        title: "Ease",
        description:
          "Estimate how easy it is to implement the idea with current resources.",
      },
    ],
  },
  {
    id: 13,
    name: "MoSCoW Method",
    subtitle: "Must, Should, Could, Won’t prioritisation",
    source: "IIMC Casebook",
    steps: [
      {
        letter: "M",
        title: "Must-have",
        description:
          "List the essential product requirements needed for success.",
      },
      {
        letter: "S",
        title: "Should-have",
        description:
          "List important items that can be postponed if necessary.",
      },
      {
        letter: "C",
        title: "Could-have",
        description:
          "List nice-to-have features that add value but are not urgent.",
      },
      {
        letter: "W",
        title: "Won’t-have",
        description:
          "List items intentionally deprioritised for the current phase.",
      },
    ],
  },
  {
    id: 14,
    name: "Opportunity Scoring",
    subtitle: "Prioritise based on customer need gaps",
    source: "IIMC Casebook",
    steps: [
      {
        letter: "U",
        title: "Understand",
        description:
          "Gather customer insights on importance and satisfaction.",
      },
      {
        letter: "G",
        title: "Gap",
        description:
          "Identify where importance is high and satisfaction is low.",
      },
      {
        letter: "P",
        title: "Prioritise",
        description:
          "Choose opportunities with the biggest gap and business value.",
      },
    ],
  },
  {
    id: 15,
    name: "Five Whys",
    subtitle: "Ask why until you reach the root cause",
    source: "IIMC Casebook",
    steps: [
      {
        letter: "1",
        title: "Ask why",
        description:
          "Start with the problem and ask why it happened.",
      },
      {
        letter: "2",
        title: "Ask why again",
        description:
          "For each answer, continue to ask why to dig deeper.",
      },
      {
        letter: "3",
        title: "Repeat",
        description:
          "Keep going until you reach the underlying root cause.",
      },
      {
        letter: "4",
        title: "Validate",
        description:
          "Check whether the final cause explains the symptom fully.",
      },
      {
        letter: "5",
        title: "Act",
        description:
          "Design a solution that addresses the root cause, not the symptom.",
      },
    ],
  },
  {
    id: 16,
    name: "REAN Framework",
    subtitle: "Reach, Engage, Activate, Nurture",
    source: "IIMC Casebook",
    steps: [
      {
        letter: "R",
        title: "Reach",
        description:
          "Define how to attract new users through acquisition channels.",
      },
      {
        letter: "E",
        title: "Engage",
        description:
          "Design the first experience that hooks the user.",
      },
      {
        letter: "A",
        title: "Activate",
        description:
          "Define the moment when a user first realizes value.",
      },
      {
        letter: "N",
        title: "Nurture",
        description:
          "Design retention and follow-up actions to keep users returning.",
      },
    ],
  },
];

// ─── INTERVIEW EXPERIENCES ───────────────────────────────────────────────────

export const experiences: InterviewExperience[] = [
  // ── ISB BTC 2021 ──────────────────────────────────────────────────────────

  {
    id: 1,
    company: "ADP India",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC 2021",
    rounds: `Round 1 (Technical, 45 min): "Which unmet need in the market can you think of productizing?" — Proposed fingerprint-based locking/unlocking for electric scooters. Panel of 3 interviewers simultaneously asked follow-ups: why is this a problem, target audience (answered: working millennials/Gen Z with high WTP), and success metrics (precision & recall via True/False Positives). Also asked: "How would you use your ISB learning to solve a problem from your previous job?"\n\nRound 2 (Design + RCA + Tech, 45 min): "What is your favourite product? How would you improve it?" — Chose Medium, identified problems with the Partner Program monetisation. Then: "Design a toy shelf for a kid." Used CIRCLES to design a rotatable, light-equipped shelf that acts as the child's companion — birthday reminder functionality, magical lighting when room dims, child-height accessible. Interviewer appreciated the human-centred approach.\n\nRound 3 (HR, 10 min): Salary negotiation.`,
    tip: 'You\'re interviewed simultaneously by 3 panellists — stay composed. Success metrics for product features should be very specific (precision/recall, not just "user satisfaction"). CIRCLES is expected but must feel natural not rehearsed. ADP deeply values candidates who can connect ISB learnings to real prior work experience.',
  },
  {
    id: 2,
    company: "Atlassian",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC 2021",
    rounds: `Pre-Assessment (case submission): Pick a software product you like. Document: (1) Two standout smart product choices + two improvements with rationale, (2) How would you explore the extent of the problem? (3) How will you prioritise between the 2 improvements? (4) Illustrate a new feature as solution with mock-ups. (5) Metrics to measure success.\n\nRound 1 (Design + Guesstimate + Behavioural, 50 min): Walked through case submission — asked follow-up: "As PM, design a feature to increase revenues for the product." Then: "Describe your second favourite product" (Swiggy). Then: "Estimate the weekly revenue of a movie theatre" — used bottom-up approach dividing weekday vs. weekend, covering multiple revenue streams. Interviewer was very helpful and responsive.\n\nRound 2 (GTM + Behavioural + Design, 50 min): "Pick a product of your choice, break it down, and devise the product strategy for 2-3 years down the line." Chose PhonePe — gave product breakdown + competitive analysis + 3-year strategy. Then: "Tell me about one failure experience and what you learnt." Then: "Describe one key skill not on your resume."\n\nRound 3 (Behavioural + HR, 45 min — Head of Product, India): "Tell me about the most effective team you've worked in and what made it effective." Looking for match with Atlassian values. "Describe an instance where there was a trade-off involved." "Tell me about a time when you had to balance between business team vs. project completion."`,
    tip: "The Head of Product, India personally conducted Round 3 — be ready for deep values alignment conversations. Atlassian values are not just a checklist — they need to be embedded in your experience stories. Don't make answers sound rehearsed. For the pre-assessment case, interviewers look for rigour in your metrics definition and prioritisation reasoning.",
  },
  {
    id: 3,
    company: "Bharti Airtel",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC 2021",
    rounds: `Round 1 (Design + Tech + Behavioural, 1 hr 20 min): "Why Airtel? Why PM? Given your background in API Management, what APIs would you build to integrate an SSO to Amazon Prime Video from Airtel DTH? Give the corresponding feature breakdown." Asked clarifying questions first — what kind of SSO? What exists on the platform already? Then broke down the entire SSO flow step by step explaining touchpoints and what work each entailed. Interviewer was very satisfied with the clarifying questions approach.\n\nProduct Design: "Design an e-commerce app for old people." Started with clarifying questions (Who are we? What app? Where launching? Time horizon? Constraints?) — narrowed to existing e-commerce product where elders struggle to place orders. Did CIRCLES: customer segments → pain points → solutions → metrics. Didn't make it look like a framework — let the interviewer feel he was driving the conversation.\n\nBehavioural: Airtel\'s future, Why Airtel, style as a PM, how to prioritise, what if you don\'t get the team you want. Spoke about Airtel\'s mission and XLabs revolutionising their product landscape. Mentioned RICE for prioritisation. On the team question: all Airtel products are consumer-facing so no objection working across teams.`,
    tip: "CIRCLES for PM prep is a must, but don't make it obvious — show structure without sounding rehearsed. Ask good, relevant clarifying questions and guide the interviewer to where you want to take them. Research Airtel XLabs and their consumer product landscape before going in. Technical background is an advantage — use it when explaining API and integration concepts.",
  },
  {
    id: 4,
    company: "Blackbuck",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC 2021",
    rounds: `Pre-Assessment: Case on Blackbuck's core matching problem — how can BlackBuck help shippers and fleet owners discover each other easily? Deliverables: problem statement, approach, features (frontend UI + backend algorithms), success metrics. Submission in document format, max 6 pages.\n\nRound 1 (GTM + Design + Behavioural + Metrics, 60 min): Past experience related to Program Management + metrics to track its success. "Design an MVP for WhatsApp's launch in India in 2008." Behavioural questions.\n\nRound 2 (Behavioural, 60 min): Resume-based questions. Why Product Management. Puzzles: "How many races are required to identify the 3 fastest horses among 25 horses when you cannot measure time?"\n\nRound 3 (Behavioural + Tech + Metrics, 90 min): "If DAU/MAU is increasing across the month what does it mean for the product?" (Answer: DAU/MAU cannot be ever-increasing within the month as it equals 1 on Day 1 — generally indicates more active users or new customer adoption). "What will be your strategy for developing a 2-sided marketplace platform?" "As PM at Amazon for designing the algorithm that predicts delivery time, what will be your major goals?" (Accuracy = minimum deviation from predicted time; minimum possible time; minimum cost — interviewer liked the 7-year-old explanation approach).\n\nRound 4 (HR, 15 min): Why BlackBuck? Tell me 2 things about you that are not on your resume.`,
    tip: "Rounds 2 and 3 are stress rounds — you'll be questioned on every statement. Spend good 20-25 minutes in each round on work experience detail. Blackbuck is obsessed with PMs who can talk about A/B testing, statistical significance, and setting up experiments. They also ask algorithm questions (elevator problem, greedy algorithms common in transportation). Know DAU/MAU thoroughly — they will probe nuances.",
  },
  {
    id: 5,
    company: "BrowserStack",
    role: "Associate Product Manager",
    offered: "Yes",
    type: "Tech",
    source: "ISB BTC 2021",
    rounds: `Pre-Assessment: "BrowserStack currently provides a feature to file a bug directly onto JIRA after capturing it while testing. Redesign this feature to increase its adoption for Live Product."\n\nRound 1 (Product Design, 60 min): Resume walkthrough with detailed internship questions. Then: "You are the CEO of a food delivery start-up catering only to corporates. USP: 5 different continental options daily. How would you approach product scoping and launch?" Clarified: product design + GTM + strategy needed. Product: reduced scope to tech parks in urban India, designed website + subscription plan. GTM: pilot test approach, market size estimation. Strategy: how to compete vs Swiggy/Zomato (differentiators: at-desk delivery, reduced waiting time, curated options).\n\nRound 2 (RCA + Metrics, 50 min): "Uber cancellations have increased by 10%. Give me all possible reasons." Asked clarifying questions on location, duration, user segment, time of day, measuring systems, and stage of cancellations. Then divided into external (regulation, competition, Android dependency, major events) and internal (went through full user journey step-by-step for each stage). Then: "You're PM for WhatsApp calls. Call drop rate by 10%. Give all metrics to understand if this is genuine and why?" — Call rating, avg call duration, number of people on call, internet level at time of call. Technical reasons: packet transmission, bandwidth allocation. Solutions: stop auto-downloads during calls, auto-connect to nearby WiFi.\n\nRound 3 (Metrics + Design, 50 min): Resume walkthrough. "How would you measure word of mouth for a digital product targeted towards companies?" "How would you design WhatsApp Pay?" — Clarified goal = monetisation. Designed 3 key features: easy refunds, customer support and order changes in chat, additional shopping offers.`,
    tip: "BrowserStack is extremely tech-savvy — they appreciate technical depth in your answers. For RCA, they want ALL possible reasons, not just a structured tree — think broadly. Call it out explicitly when an answer needs to be more technical. The company values candidates who use the products they're designing during prep. Know JIRA, testing workflows, and developer tooling well.",
  },
  {
    id: 6,
    company: "Amazon",
    role: "Pathways (Leadership Development Programme)",
    offered: "No",
    type: "Product",
    source: "ISB BTC 2021",
    rounds: `Round 1 (Behavioural + Technical, 60 min): "How would you guarantee that your delivery executive knocks at a door at exactly 7 am?" Three behavioural questions based on Amazon's 14 Leadership Principles — first two on the "Deep Dive" principle, third on "Ownership" (15 min each). "What features will you ask your engineering team to work on specifically?"`,
    tip: 'Amazon Pathways is exclusively about Leadership Principles — know all 14 deeply and have 2-3 STAR stories prepared for each. The behavioural questions test the principle, not the domain. "Deep Dive" means going far beyond the surface — they want to see extreme curiosity and comfort with granular data. Preparation for product features without LP context is insufficient for this role.',
  },
  {
    id: 7,
    company: "Accenture Technology",
    role: "Technology Consulting",
    offered: "Yes",
    type: "Tech",
    source: "ISB BTC 2021",
    rounds: `Round 1 (Behavioural + Tech, 30-45 min): Resume walkthrough and work experience focus. Questions on cloud understanding (AWS vs Azure comparison), data and analytics architecture. Sample question: "What is the difference between hot and cold data?"\n\nRound 2 (GTM + Tech + Behavioural, 40 min): "Why Accenture Tech?" "Assume you are the consultant in a project where the client is a retail giant with unstructured data in silos, looking forward to a digitisation journey. Help me with the approach to convince the client on the next steps." Then technical questions on specific prior cloud/ML projects. Then behavioural softer aspects.\n\nRound 3 (HR, 15-20 min): Tell me about yourself. Questions around previous job switch. Expectations from Accenture, short-term goals. Weaknesses. Potentially: "Why should we take you? You seem too technical — will you be able to think on your feet as a consultant?" (Responded with: prior experience as debate club President + Toastmaster experience demonstrates communication ability, just needs to simplify technical explanations for senior stakeholders).`,
    tip: "Your resume match to the JD matters a lot — if your prior tech stack matches what Accenture is selling to clients (especially Azure/AWS/Oracle EBS), your interview will go much deeper technically. Be ready for architecture design scenarios. When asked to explain technical concepts, practice explaining to a non-technical audience. Accenture is interviewing for specific practice groups (Platform Advisory, Analytics, etc.) — find out which group and tailor accordingly.",
  },

  // ── ISB BTC Co2024 ─────────────────────────────────────────────────────────

  {
    id: 8,
    company: "ADP India",
    role: "Business Analyst",
    offered: "Yes",
    type: "BA",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Product Strategy, ~45 min): "ADP being a payroll handling solution provider, partnered with Visa to launch a card. Is this a good move or a bad move?" Approach: first guessed the problem they were trying to solve → then did market analysis (TAM, SAM, SOM) → checked if this adds value to ADP's existing offerings → took a decision.\n\nRound 2 (VP Round, ~30 min): Questions on resume, why ADP, strengths and weaknesses.\n\nRound 3 (HR, ~20 min): Culture fit, behavioural questions.`,
    tip: "Do thorough research on ADP. Go to their website and engineering blogs — most interview questions revolve around their actual products and how you understand their business. The more you talk about specific ADP products and technology choices, the better. For strategy questions: always start by identifying the problem being solved before evaluating the decision.",
  },
  {
    id: 9,
    company: "Airtel",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (RCA + Product Strategy, ~60 min): About yourself, why PM, why Airtel, fit assessment. Then RCA: "You are trying to log into the Airtel App but are unable to — diagnose." Approach: asked clarifying questions on device type, geography, customer segment → identified that OTP was not being successfully sent for non-Airtel networks → addressed using other MFA methods → proposed A/B testing before rollout. Second question: "How will you decide to build a product? (AI chatbot to resolve queries)" — very first-principles-based discussion.\n\nRound 2 (Product Design, ~50 min): "Design a KYC product which involves no use of facial biometrics." Required strong fintech industry knowledge. Major discussion on current KYC landscape, RBI regulations, alternative verification methods.\n\nRound 3 (Product Strategy, ~40 min): "How would you launch KYC product in a new market? Let's choose Malaysia." "How to improve the KYC process of Airtel today?"`,
    tip: 'Strong intent to join Airtel must come through clearly — prepare very specific answers on why Airtel (not just "telecom is interesting"). Read Airtel\'s shareholder letters and their 5-year digital transformation plans. For RCA, immediately ask clarifying questions to narrow geography, user segment, and platform. Airtel interviewers value product sense tied to business impact — every answer should connect to revenue or market share.',
  },
  {
    id: 10,
    company: "BrowserStack",
    role: "APM",
    offered: "Yes",
    type: "Tech",
    source: "ISB BTC Co2024",
    rounds: `Pre-Assessment: Case submission — redesign a BrowserStack feature to increase adoption. Must include: feature analysis, user research approach, solution with mock-ups, success metrics and north star.\n\nRound 1 (PRD Deep Dive + Strategy, 60+ min): In-depth walkthrough of case submission. Extensive questioning on metrics — "Why did you choose this north star specifically?" Every metric choice was probed with "why not X instead?". High-pressure, detailed round by Head of Product.\n\nRound 2 (Product Design + GTM, ~50 min): "Design a laundry service for ISB." Used product design framework — asked clarifying questions, analysed existing ISB laundry competition, assessed pain points, proposed features with GTM for rollout within ISB campus.`,
    tip: "Before making the deck: actually use BrowserStack products daily for a week. Get your case study reviewed by 2-3 people and prepare a slide-by-slide improvement document for interview discussion. Talk to current or former BrowserStack employees early — not just to understand the company but to understand the product culture. The Head of Product takes the first round personally — be prepared for very granular metric defence. Emphasis on: north star identification, why specific metrics and not others, counter-metrics.",
  },
  {
    id: 11,
    company: "DevRev",
    role: "Member of Product Management",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Pre-Assessment: Case submission on taking a product of your choice and suggesting improvements. (Example submission: product improvement for Spotify.)\n\nRound 1 (Product Strategy + Design + GTM + Metrics, ~60 min): In-depth discussion on the pre-assessment case. Questions: (1) Explain the deck, (2) How would you launch these features, (3) Resume-based questions, (4) How would you measure success post-launch. Cross-questioning on every feature choice: "Why this feature? Why this UI? What are counter-metrics?"\n\nRound 2 (Behavioural + Strategy, ~45 min): Resume-based questions. "Why product management?" "What is important to you in life?" Questions on new technologies (ChatGPT, ML, AI). Technical question on Precision and Recall. Head of Product (US-based) round — very conversational, testing you as a person.\n\nRound 3 (Behavioural, ~30 min): "Why DevRev?" "What products have you worked on?" Resume deep-dive.`,
    tip: "Start case preparation 1-2 months early — DevRev expects exceptional depth in your submission. Every sentence in your resume will be verified with follow-up questions. Read extensively about DevRev's product philosophy (customer-centric, developer-first). Keep product design, RCA, improvement, strategy, and GTM all sharp — they come up unpredictably. Head of Product round is conversational but tests intellectual depth and genuine product curiosity.",
  },
  {
    id: 12,
    company: "Paytm",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Case Deep Dive, ~60 min): Started with intro. Deep dive into case submission — questions around: why did you choose a particular category, customer segmentation rationale, thought process behind solutions, discussion on case metrics and GTM strategy, what improvements could be done. Interviewer had already gone through the case thoroughly — focus was on understanding thought process, not just the answers.\n\nRound 2 (Favourite Product + Strategy + API Technical, ~60 min): "What is your favourite product? 3 things you like and 3 things you don't like." (Spoke about Myntra.) Then product strategy question: "Myntra recently introduced a return fee. Why did they introduce it? How can you identify people who have genuine returns vs people who return used products/too frequent returns? Design a feature to identify this difference." Finally: "Explain what an API is and how it works for the Paytm feature you use the most." (Answered using movie booking feature as example.)\n\nRound 3 (APM role — Metrics + Design + GTM + Behavioural, ~60 min): Explain the case + deep questions on funnel metrics (CTR, impressions, conversion, abandonment). Main Q: "As a PM who interfaces between engineers and customers, how would you decide what features to build?" (Best answer: low-hanging fruits, RICE framework). Behavioural: Why Paytm? Design: "Design a washing machine for blind people."`,
    tip: 'Be thorough with your case submission — Paytm interviewers scrutinise it in detail before you arrive. Practice explaining APIs in plain language using real Paytm features. Paytm emphasises metrics internally — understand north star metrics, and be ready to define and defend 5+ supporting metrics for any feature. "Design for blind people" is a real question — be ready for accessibility-first product design. Research Paytm\'s current products and recent launches before going in.',
  },
  {
    id: 13,
    company: "Navi",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (RCA + Guesstimate, ~50 min): Case-based. "Swiggy spends $X on onboarding 10 new customers but only 3 come back to the platform. Do an RCA and suggest methods to increase this number." Identified demand-side and supply-side value drivers; interviewer asked to troubleshoot supply-side issues specifically. Came up with 3 initiatives: one hackathon-based, one short-term, one moonshot solution.\n\nRound 2 (Guesstimate, ~30 min): "Guess the number of Uber rides in Hyderabad metro city (cars only, point A to point B within city)."\n\nRound 3 (Personal Interview, ~30 min): Resume walkthrough, why analytics, short-term and long-term goals.\n\nRound 4 (Case + RCA, ~40 min): Another case-based round on similar lines to Round 1.`,
    tip: "There is no particular fixed format for Navi prep — the process is somewhat abstract. Be prepared to do basic RCAs on growth/retention metrics and be thorough with your resume. Navi values people who are good with numbers (guesstimates will appear). They want candidates who understand product metrics deeply (not just know them). For the Swiggy RCA: decompose into supply side and demand side drivers — interviewers specifically want this segmentation.",
  },
  {
    id: 14,
    company: "Razorpay",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (RCA + Product Strategy, ~60 min): "Razorpay payment success rate dropped 5pp. Find the cause." Walked through data segmentation tree: payment type → bank → time of day → recent deploys. Root cause: HDFC netbanking rate-limiting misconfiguration during maintenance. Then: "Build a chargeback management product for merchants." Designed: merchant dispute filing flow, automated evidence collection, timeline tracking, resolution dashboard.\n\nRound 2 (Feature Design, ~45 min): In-depth product design for Razorpay's merchant dashboard.\n\nRound 3 (Leadership + Values, ~30 min): "Tell me about a time you influenced without formal authority." STAR-format answers expected.`,
    tip: "Razorpay expects strong fintech domain knowledge — know UPI rails, payment gateway architecture, NPCI regulations, and merchant acquiring basics. For payment RCAs, always segment by: payment method (card/UPI/netbanking), bank, success rate, and timing. They look for candidates who are technically curious, not just product-process oriented. The chargeback product question tests B2B product empathy — understand merchant pain, not just user pain.",
  },
  {
    id: 15,
    company: "Microsoft",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Favourite Product + Design, ~60 min): "What is your favourite product? How would you improve it?" "How would you improve Teams specifically?" Went deep on Teams: target persona (remote worker), specific pain points (notification fatigue, meeting overload), proposed features (async meeting summary AI, smart do-not-disturb based on calendar).\n\nRound 2 (System Design + Technical, ~60 min): System design question on notification architecture for a large-scale messaging platform. Required thinking through: pub-sub systems, delivery guarantees, retry mechanisms, notification preferences store. Technical depth expected.\n\nRound 3 (Behavioural, ~45 min): Leadership story (STAR format). "Tell me about a time you led a cross-functional team through a conflict." "Tell me about a time you had to make a decision with incomplete information."`,
    tip: "Microsoft values both deep product sense AND technical depth. You should be able to discuss system design concepts (pub-sub, databases, API design) at a conceptual level. For the Teams question: don't just improve UI — think about deep workflow changes that would change how teams collaborate. Prepare 5-6 STAR stories covering: leadership, conflict resolution, ambiguous decisions, cross-functional influence, and failure/learning. Interviewers probe STAR stories deeply — be ready for 3+ follow-up questions on each.",
  },
  {
    id: 16,
    company: "PhonePe",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (GTM + Product Design, ~60 min): "GTM for PhonePe in rural India. How would you expand PhonePe's user base to rural Tier 3/4 cities and villages?" Required strong India market knowledge — ASHA workers, SHGs, panchayat infrastructure, feature phone and 2G network realities.\n\nRound 2 (Feature Design + B2B, ~50 min): "Design a feature to increase PhonePe Business merchant adoption." Focused on: merchant onboarding friction, analytics for small merchants, QR code activation in offline Tier 3 markets.\n\nRound 3 (RCA, ~40 min): "UPI success rate for PhonePe dropped suddenly. Find the root cause." Segmented by: payment type → bank → time of day. Required knowledge of NPCI systems, bank integration patterns, and common UPI failure modes.`,
    tip: "PhonePe deeply values India-first, Bharat-first thinking. Every solution must be stress-tested for: 2G connectivity, budget Android phones, low literacy, and Tier 2/3 distribution realities. For the rural GTM question, framing distribution through existing trusted intermediaries (kirana stores, ASHA workers) is the winning insight. For UPI RCA, know NPCI's system architecture and common failure modes (PSP server timeout, bank server timeout, VPA resolution errors).",
  },
  {
    id: 17,
    company: "Swiggy",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Product Design + Retention, ~60 min): "Improve Swiggy Instamart retention — 30-day retention is 28%, improve it to 50% in 2 quarters." Decomposed into: new users vs. power users, demand side vs. supply side, frequency drivers vs. basket size drivers. Proposed: Smart Repeat (ML-predicted recurring order), Instamart Plus subscription, contextual (not intrusive) push notification strategy.\n\nRound 2 (Guesstimate, ~30 min): "Estimate the number of daily orders on Swiggy nationwide." Bottom-up: city-by-city contribution, user base × order frequency, market share vs. Zomato.\n\nRound 3 (Product Strategy, ~45 min): "Should Swiggy expand into live events ticketing? What would the business case look like?" Evaluated: brand fit, distribution advantage (Swiggy already has trust + payment infra), risks (concentration in food, complexity of supply), recommendation with prioritisation rationale.`,
    tip: 'Swiggy interviews are conversational — they want to see your thought process unfold, not a polished framework recitation. Speak as you think. For the events ticketing question, they\'re testing strategic reasoning not just "yes/no" — show both sides before recommending. For the retention question, they specifically test whether you understand the difference between frequency retention (repeat orders) and basket retention (complete grocery basket coverage).',
  },
  {
    id: 18,
    company: "Walmart",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Product Design, ~60 min): "Design a product for last-mile delivery optimisation in US suburbs." Required understanding of US suburban geography, Walmart's existing distribution infrastructure, and the role of Walmart+ subscription in delivery commitments.\n\nRound 2 (Metrics, ~45 min): "What does success look like for Walmart+ subscription?" Define: NSM, activation metrics, retention metrics, monetisation metrics, guardrail metrics. Deep-dive into LTV vs. subscription cost trade-offs.\n\nRound 3 (Behavioural, ~40 min): "Tell me about a time you managed a complex stakeholder situation across multiple teams." STAR format, emphasis on cross-functional influence without authority.`,
    tip: "Walmart values operational feasibility above everything — never propose a product feature without addressing the supply chain, logistics, or operational constraints it creates. For the last-mile delivery question: think about Walmart's existing store-as-fulfilment-centre model, curbside pickup infrastructure, and partner delivery networks (e.g., Spark Driver). Walmart+ context is critical — know its current features and competitive position vs. Amazon Prime.",
  },
  {
    id: 19,
    company: "Ola",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Product Teardown, ~50 min): "Do a product teardown of the Ola Electric app. What would you change?" Required: user personas (EV owner vs. prospective buyer), current UX analysis, top 3 improvements with metrics. Interviewer asked: "If you had to improve one thing in 2 weeks, what would it be?"\n\nRound 2 (Strategy, ~45 min): "How should Ola compete with Rapido in the bike taxi segment?" Competitive analysis: Rapido's advantages (lower price, rider availability), Ola's advantages (brand trust, existing driver network, safety infrastructure). Proposed differentiated positioning.\n\nRound 3 (Behavioural, ~30 min): "Tell me about a time you drove cross-functional collaboration to deliver a product feature."`,
    tip: "Ola interviews are fast-paced and expect confident, structured answers quickly. Give a 30-second summary of your approach before diving into details — interviewers will interrupt if you meander. For the Rapido question, they want to see competitive strategy thinking, not just product features. Use the Ola Electric app heavily before the interview — they appreciate candidates who have clearly used the product.",
  },
  {
    id: 20,
    company: "WinZO",
    role: "Product Manager",
    offered: "No",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Product Design, ~50 min): "Improve WinZO's tournament discovery." Pain points: users don't know which tournaments to join, discovery is overwhelming with 70+ game categories, no personalisation by skill level or preferred game genre.\n\nRound 2 (Retention Strategy, ~45 min): "Retention strategy for casual gamers." Casual gamers (play 1-2 times/week) vs. hardcore gamers (daily). Focus on habit formation for casual segment through daily micro-contests and friend challenges.`,
    tip: "No offer — explicit feedback: lack of gaming domain knowledge. Play WinZO extensively before the interview. Understand gaming psychology: game loops, variable reward schedules, social competition mechanics, and how real-money gaming creates habit differently from free-to-play. Know the regulatory landscape for real-money gaming in India (Sikkim, Goa regulations). Gaming PM interviews reward candidates who think in terms of game design, not just product management.",
  },
  {
    id: 21,
    company: "Zynga",
    role: "Product Manager",
    offered: "Yes",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Game Design, ~60 min): "Design a social feature for FarmVille." Persona: existing FarmVille player who plays solo. Pain: lack of social motivation after the initial engagement phase. Solution: "Farm Neighbours" — players can visit each other's farms, send gifts, and participate in collaborative seasonal events.\n\nRound 2 (Metrics, ~45 min): DAU/MAU analysis for a hypothetical casual mobile game. Define north star, break down into engagement and monetisation metrics, identify leading indicators for churn risk.\n\nRound 3 (Technical, ~40 min): "How would you implement a real-time leaderboard for a game with 10 million concurrent players?" Required: Redis sorted sets, CDN caching strategy, eventual vs. strong consistency trade-offs.`,
    tip: "Zynga uniquely blends product and technical questions. Know basic data structures (sorted sets for leaderboards, queues for matchmaking) and system design principles for high-scale gaming features. For game design, think in terms of: core loop → social loop → meta-game. Know the difference between social mechanics that drive engagement (gifting, visiting) vs. mechanics that drive monetisation (cosmetics, boosters).",
  },
  {
    id: 22,
    company: "Flipkart",
    role: "APM Intern",
    offered: "Yes",
    type: "Product",
    source: "IITK Casebook",
    rounds: `Round 1 (Product Sense + Analytics, ~60 min): "Design a feature for Flipkart Grocery focused on Tier 2 users." Focused on: Tier 2 persona (feature phone + limited data), vernacular search, voice-based ordering for low-literacy users, trust signals for quality in grocery.\n\nRound 2 (Data Analysis, ~45 min): Given a dashboard of declining add-to-cart rates in the Flipkart app — what do you investigate? Walked through: segment by platform, by category, by user cohort, by geographic region. Then: check for recent A/B tests, UI changes, or app updates. Identified that a specific Android version update had broken the cart persistence for grocery category items.\n\nRound 3 (HR + Hiring Manager, ~30 min): Why Flipkart? Why APM? Career goals.`,
    tip: "Flipkart APM rounds are heavily data-driven. Be prepared to walk through dashboards with a structured, analytical mindset — they will present data tables and expect you to derive insights in real-time. For the Tier 2 grocery question, the key differentiator is understanding the technology reality: 2G, feature phones, low-literacy, and the role of trust in online grocery (freshness guarantee, authenticity). Show you've thought about India beyond metro markets.",
  },
  {
    id: 23,
    company: "Google",
    role: "APM Intern",
    offered: "Unknown",
    type: "Product",
    source: "IITK Casebook",
    rounds: `Round 1 (Product Design, ~60 min): "Improve Google Search for a specific use case — academic research." Focused on: the research workflow (query → scan results → deep read → cite), pain points (no citation assistance, no "related papers" synthesis, can't track reading history), proposed features (AI-powered research summary, Scholar integration, reading list with annotation).

Round 2 (Metrics, ~45 min): "How do you measure success of a new Google Maps feature (restaurant discovery improvements)?" Defined: NSM (restaurant discoveries leading to bookings), activation (feature discovery rate), engagement (searches using new feature), retention (repeat usage rate), business impact (commission revenue from reservations).

Round 3 (Leadership, ~40 min): "Tell me about a time you influenced without authority." Full STAR story with emphasis on how you rallied people around a shared goal without formal power.`,
    tip: "Google tests breadth AND depth — they will ask you to go very deep on metrics and trade-off analysis for any product question. For the Search improvement question, they expect you to think about search quality signals (click-through rate, zero-result rate, pogo-sticking) not just UX features. For the Maps metrics question, know how Google Maps monetises (local ads, API fees, reservations) so your metrics connect to business model.",
  },
  {
    id: 24,
    company: "Nykaa",
    role: "Product Manager",
    offered: "No",
    type: "Product",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Product Design, ~50 min): "Design a loyalty program for Nykaa." Interviewer asked for a wireframe sketch mid-way. Solution: tiered loyalty (Bronze/Silver/Gold based on annual spend), beauty points redeemable for products, exclusive early access for Gold members, personalised product recommendations based on skin type + purchase history.

Round 2 (Metrics + RCA, ~45 min): Deep-dive on cart abandonment metrics for Nykaa. "What metrics would you track, and how would you diagnose a 25% spike in cart abandonment?" Segmented by: product category (makeup vs skincare), payment method, user cohort (new vs returning), device type.`,
    tip: "No offer — feedback: insufficient depth on monetisation. For Nykaa specifically, every product feature must be tied to a monetisation or margin impact analysis. They think about: gross margin by category, blended take rate, advertising revenue from brand partners, and subscription monetisation. Design questions are not complete without a monetisation layer. Have unit economics ready for every feature you propose.",
  },
  {
    id: 25,
    company: "Contlo",
    role: "Technical Program Manager",
    offered: "Yes",
    type: "Tech",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Metrics + RCA + Work Ex, ~45 min): Standard work experience related questionnaire with metrics discussion.

Round 2 (Work Ex + Strategy, ~40 min): Risk mitigation and prioritisation of product rollout. "How would you prioritise a high-risk feature deployment across 500 enterprise clients?"

Round 3 (Technical, ~30 min): Technical question on parallel processing and threads. Load balancing strategies. Scrum master responsibilities.`,
    tip: "Brush up on technical concepts before this interview. Contlo is a marketing automation SaaS — know basic concepts: event-driven architecture, webhook integrations, API rate limiting, and A/B testing at scale. TPM role requires strong Scrum/Agile knowledge. Risk mitigation question requires understanding of feature flags, gradual rollouts (canary deployments), and rollback strategies.",
  },
  {
    id: 26,
    company: "Razorpay",
    role: "Business Analyst",
    offered: "Yes",
    type: "BA",
    source: "ISB BTC Co2024",
    rounds: `Round 1 (Analytics + SQL, ~60 min): SQL query writing — "Extract the top 10 merchants by transaction volume in the last 30 days, segmented by payment method." Expected optimised queries with indexing considerations.

Round 2 (Case + RCA, ~50 min): "Payment success rate optimisation for Razorpay." Segmented by payment method, bank, and time of day to find the bottleneck.

Round 3 (HR + Culture Fit, ~30 min): Culture fit, why BA, career aspirations.`,
    tip: "BA role at Razorpay requires strong SQL and analytical skills. Practice complex query optimisation (window functions, CTEs, aggregation with filters). For the payment RCA, know the difference between gateway-side failures and bank-side failures. Know Razorpay's product suite (Payment Links, Payment Pages, Smart Collect, Route) to contextualise your analytical answers.",
  },
];

// ─── HANDBOOKS ───────────────────────────────────────────────────────────────

export const handbooks: Handbook[] = [
  {
    icon: "📘",
    name: "The Product Case — Vol. I",
    source: "PM School",
    institution: "PM School",
    pages: 234,
    description:
      "25 top case studies and winning solutions from PM School's weekend challenges. Covers IIT/IIM campus hiring cases for companies like Uber, Meesho, Flipkart, LinkedIn, WhatsApp, OkCredit, Dream11, and more. Ideal for take-home assignment prep and understanding winning solution structures.",
    color: "#c8490a",
    pdfFile: "504656103-PM-school-ebook.pdf",
  },
  {
    icon: "📙",
    name: "The Product Case — Vol. II",
    source: "PM School",
    institution: "PM School",
    pages: 113,
    description:
      "10 expert-level cases from top campus hiring drives at IIT Kharagpur, IIT BHU, IIT Roorkee, and ISB. Includes Groww APM (WhatsApp investing), Flipkart PM, Netflix, Google Pay failed transactions, BigBasket power users, and Koo DAU/MAU improvement cases.",
    color: "#3a5fa8",
    pdfFile: "529010545-PM-school-ebook-2.pdf",
  },
  {
    icon: "📗",
    name: "BITSoM PM Handbook 2023-24",
    source: "BITS School of Management",
    institution: "BITSoM",
    pages: 149,
    description:
      "Comprehensive reference covering PM fundamentals, industry primers (FinTech, EdTech, HealthTech, E-Commerce), important frameworks, key metrics, product teardowns (Zepto, PhonePe, Spotify, Groww), new product design cases, 6 full RCA interview transcripts, 9 guesstimates with workings, and an interview guide.",
    color: "#2e7d4f",
    pdfFile: "Product_Management_Handbook.pdf",
  },
  {
    icon: "📕",
    name: "ISB BTC Handbook 2021",
    source: "Indian School of Business",
    institution: "ISB",
    pages: 204,
    description:
      "ISB's internal PM prep guide from the Class of 2021. Covers all major question types with frameworks (CIRCLES, AARRR, GTM, Pricing), and detailed interview experiences from companies including Accenture, ADP, Amazon, Atlassian, Bharti Airtel, Blackbuck, BrowserStack, Cisco, and 15+ more.",
    color: "#7b3fa0",
    pdfFile: "ISB_PM_Handbook.pdf",
  },
  {
    icon: "📓",
    name: "ISB BTC Handbook Co2024",
    source: "Indian School of Business",
    institution: "ISB",
    pages: 142,
    description:
      "Updated ISB handbook for the Class of 2024/25 with refreshed interview frameworks, 30+ real company interview experiences from ISB placements (ADP, Airtel, BrowserStack, DevRev, Paytm, Navi, Razorpay, Ola, Swiggy, WinZO, Zynga), curated resource list, and a question bank.",
    color: "#c8490a",
    pdfFile: "ISB-BTC-Handbook-Co2024.pdf",
  },
  {
    icon: "📒",
    name: "IITK PM Casebook 2024-25",
    source: "IIT Kanpur",
    institution: "IIT Kanpur",
    pages: 150,
    description:
      "First edition of the IIT Kanpur Product Club casebook. Contains 21 real-world PM interview cases across product design, RCA, metrics, strategy, and GTM — plus 4 guesstimates — all sourced from actual PM interviews. Each section features a detailed framework, sample case, and interview transcripts.",
    color: "#1a6b9a",
    pdfFile: "IITK_PM_Casebook__1770370843.pdf",
  },
  {
    icon: "📔",
    name: "IIMC Product Management Casebook 2023-24",
    source: "IIM Calcutta",
    institution: "IIM Calcutta",
    pages: 100,
    description:
      "A comprehensive IIM Calcutta casebook with product design, root cause analysis, app critiques, guesstimates, GTM and pricing cases. Ideal for interview prep and real-world PM thinking.",
    color: "#d73f87",
    pdfFile: "IIMC_Product_Management_Casebook_2023_24_1770713811.pdf",
  },
];

// ─── RESOURCES ───────────────────────────────────────────────────────────────

export const resources: Resource[] = [
  {
    icon: "📚",
    category: "Book",
    name: "Decode and Conquer — Lewis C. Lin",
    description:
      "The classic PM interview prep book. Chapter 2 on CIRCLES is referenced across all ISB handbooks. Essential reading before your first PM interview.",
  },
  {
    icon: "📚",
    category: "Book",
    name: "Inspired — Marty Cagan",
    description:
      "Product management philosophy from the godfather of modern PM. Covers product discovery, empowered teams, and the PM role. Referenced across all handbooks.",
  },
  {
    icon: "📚",
    category: "Book",
    name: "The Lean Startup — Eric Ries",
    description:
      "Foundation of MVP thinking and build-measure-learn cycles. Referenced in PM School case solutions for GTM and validation frameworks.",
  },
  {
    icon: "📚",
    category: "Book",
    name: "Design of Everyday Things — Don Norman",
    description:
      "Recommended in ISB BTC 2021 handbook. Fundamental for product design thinking, affordances, and user mental models.",
  },
  {
    icon: "📚",
    category: "Book",
    name: "Hooked — Nir Eyal",
    description:
      "Framework for building habit-forming products. Trigger → Action → Variable Reward → Investment cycle. Essential for retention and engagement questions.",
  },
  {
    icon: "📺",
    category: "YouTube",
    name: "Exponent",
    description:
      "Best YouTube channel for PM interview prep — walkthroughs of design, metrics, and strategy questions with structured frameworks. Widely cited in all handbooks.",
  },
  {
    icon: "📺",
    category: "YouTube",
    name: "Product School",
    description:
      "Conference talks, AMA sessions, and tutorials from working PMs at Google, Facebook, and startups. Good for understanding real-world PM workflows.",
  },
  {
    icon: "🌐",
    category: "Website",
    name: "Lenny's Newsletter",
    description:
      "Weekly deep-dives on growth, retention, and product strategy from ex-Airbnb PM Lenny Rachitsky. Widely cited in ISB BTC handbooks. Benchmark data for metrics is invaluable.",
  },
  {
    icon: "🌐",
    category: "Website",
    name: "Product Hunt",
    description:
      "Track new product launches, read product teardowns, and understand market trends. ISB BTC handbook lists it as essential for staying current.",
  },
  {
    icon: "🌐",
    category: "Website",
    name: "a16z.com",
    description:
      "Andreessen Horowitz insights on technology trends, market maps, and product thinking across sectors. Great for strategy and new market entry questions.",
  },
  {
    icon: "🌐",
    category: "Website",
    name: "igotanoffer.com/pm",
    description:
      "Product design framework walkthroughs with solved examples. ISB BTC 2021 handbook cites this specifically for CIRCLES framework deep dives.",
  },
  {
    icon: "🐦",
    category: "Twitter / X",
    name: "@shreyas",
    description:
      "Shreyas Doshi (ex-Twitter, Stripe) — one of the most followed PM thinkers. Threads on prioritization, leverage, and PM archetypes. Cited in ISB handbooks.",
  },
  {
    icon: "🐦",
    category: "Twitter / X",
    name: "@joulee",
    description:
      "Julie Zhuo (ex-Facebook VP Design) — product leadership, design thinking, growing as a PM and manager. Author of Making of a Manager.",
  },
  {
    icon: "🐦",
    category: "Twitter / X",
    name: "@cagan",
    description:
      "Marty Cagan (SVPG) — product discovery, empowered teams, and the craft of product management. Follow for ongoing product philosophy debates.",
  },
  {
    icon: "🎓",
    category: "Community",
    name: "PM School Weekend Challenges",
    description:
      "Real case challenges run by PM School every weekend with peer solutions and expert feedback. Best practical resource for take-home assignment prep — all Vol. I & II cases originated here.",
  },
];
