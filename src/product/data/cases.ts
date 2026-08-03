import type { CaseStudy } from "../types";

export const cases: CaseStudy[] = [
  // PM SCHOOL VOL I
  {
    id: 1,
    title: "HobbyMatch — MVP Launch",
    source: "PM School Vol. I" as const,
    domain: "Marketplace",
    type: "Product Design" as const,
    tags: ["MVP", "GTM", "Wireframes", "Tech Stack", "Market Sizing"],
    summary:
      "HobbyMatch connects learners with local hobby teachers. As first PM, launch an MVP covering market opportunity, wireframes, tech stack, and GTM strategy.",
    question:
      "HobbyMatch connects you to teachers for a hobby you want to pursue in your vicinity (guitar, art, fitness). You have decided to launch an MVP. (1) Find the market opportunity. (2) Provide wireframes for the MVP. (3) What will be the tech stack? (4) Provide a well-defined GTM strategy. — PM School Weekend Challenge.",
    keyTakeaway:
      'North Star: "successful hobby matches per week". TAM = ₹8,000 Cr across music, art, fitness in India. GTM: launch in 3 metro cities via college campus partnerships + micro-influencer seeding before scaling. Revenue: 10% commission per booking.',
    approach: [
      "Market sizing: India hobby learning market ~₹8,000 Cr. Addressable slice = urban millennials (18-35) spending ₹500–2,000/month on self-improvement",
      "Two personas: Learner (18-30, urban, flexible scheduling) and Teacher (freelance professional, supplementary income)",
      "MVP features: onboarding + profile creation, geo-location teacher discovery, booking + calendar integration, in-app messaging, review system",
      "Tech stack: React Native (cross-platform), Node.js + Express (backend), PostgreSQL (database), Firebase (real-time chat), Google Maps API (geo-matching)",
      'GTM Phase 1: College campus ambassadors. Phase 2: Instagram micro-influencers in music/art. Phase 3: Teacher-side referral ("earn ₹500 per teacher referred")',
      "Success metrics: Matches per week (NSM), Teacher activation rate (first 3 bookings), D30 learner retention, CAC < ₹300",
    ],
  },
  {
    id: 2,
    title: "EatSure — Drive Repeat Purchase (Retention)",
    source: "PM School Vol. I" as const,
    domain: "Food Tech",
    type: "Retention" as const,
    tags: [
      "Retention",
      "Cloud Kitchen",
      "Loyalty",
      "Subscription",
      "Push Notifications",
    ],
    summary:
      "Average users prefer Zomato/Swiggy over cloud kitchen apps like EatSure. Design product solutions to drive repeat purchase behaviour on EatSure. Winning solution by Nishant Srivastava.",
    question:
      "You've been onboarded as PM at EatSure. A considerable proportion of orders of cloud kitchen companies are processed via Zomato or Swiggy. Despite cloud kitchens having their own apps, users still prefer aggregators. Work towards building product solutions to drive repeat purchase behaviour (Retention) on EatSure. — PM School Vol. I.",
    keyTakeaway:
      'EatSure\'s moat vs. aggregators is brand consistency + health tracking. "EatSure Plus" subscription (free delivery + calorie tracking + meal planning) directly attacks why users prefer Zomato. Target: D7 retention lift from 18% to 35%.',
    approach: [
      "Root cause: Zomato/Swiggy have wider choice. EatSure only has Rebel Foods brands. Users don't feel the need to open EatSure specifically",
      'Solution 1 — "EatSure Plus" subscription (₹149/month): Free delivery + meal plan + calorie tracking. Transforms transactional behaviour into habitual engagement',
      'Solution 2 — Personalised meal planner: Weekly meal schedule based on dietary preferences. Push notification: "Your Tuesday meal plan is ready — Faasos Keto Bowl is 40% off today"',
      "Solution 3 — Real-time kitchen tracker: Show which Rebel Foods kitchen is preparing your order + estimated prep time. Differentiator aggregators can't offer",
      "Solution 4 — EatSure Coins loyalty: 1 coin per ₹10 spent, redeemable for discounts. Coins expire in 60 days to drive urgency",
      "Negatively impacted metric: AOV (discounts may reduce). Mitigate by capping coin redemption to 15% of order value",
      "Success metrics: D7/D30 repeat order rate, subscription conversion, avg orders/user/month, CAC vs LTV",
    ],
  },
  {
    id: 3,
    title: "Khatabook (Dukaan) — Increase Seller Sales",
    source: "PM School Vol. I" as const,
    domain: "FinTech / SME",
    type: "Retention" as const,
    tags: ["B2B", "SME", "Retention", "WhatsApp", "Tier 2/3"],
    summary:
      "80% of users leave Dukaan by Khatabook after 15 days because they create a shop but fail to sell. Suggest 3 features to help sellers sell more. Winning solution by Aditya Saha & Shraman Pal — IIT KGP.",
    question:
      "You have recently joined as PM at Dukaan by Khatabook. Users (small business owners) can create a shop easily but sell only a fraction of their inventory. Hence, 80% of users leave after 15 days. Suggest 3 new features to increase selling via Dukaan. Include wireframes, metrics, and negatively impacted metrics. — IIT KGP Challenge.",
    keyTakeaway:
      "Core problem is distribution — sellers have a shop but no customers. The winning insight: leverage WhatsApp as the primary distribution channel since that's where seller-buyer relationships already exist in India. Distribution-solving features outperform shop UI improvements.",
    approach: [
      "Root cause: Sellers create shops but don't know how to get customers. Product assumes sellers have an existing audience — they don't",
      "Feature 1 — WhatsApp Catalogue Share: One-tap share of full product catalogue to any WhatsApp group/contact with auto-generated shop link",
      'Feature 2 — "Dukaan Discovery": Hyperlocal buyer discovery within 5km radius. Buyers can browse nearby Dukaan shops by category. Gives sellers organic reach',
      'Feature 3 — "Sell Faster" Analytics Dashboard: Shows most-viewed products, abandoned cart alerts, price suggestion benchmarking vs. similar products',
      "Feature 1 metrics: WhatsApp shares per seller, click-through rate, orders originating from WhatsApp",
      "Feature 2 metrics: Discovery page visits, new buyers acquired per seller",
      "Negatively impacted: GMV concentration risk (top 20% sellers may capture all discovery traffic). Monitor with sales distribution Gini coefficient",
    ],
  },
  {
    id: 4,
    title: "Dream11 — Increase Free-to-Paid Conversion",
    source: "PM School Vol. I" as const,
    domain: "Fantasy Sports",
    type: "Retention" as const,
    tags: [
      "Conversion",
      "Real Money Gaming",
      "Onboarding",
      "Gamification",
      "BITS Goa",
    ],
    summary:
      "Dream11 spends heavily on acquiring users but only a fraction play their first real-money contest. Suggest 3 product solutions to increase free-to-paid conversion. Winning solution by Kushagra Agarwal & Aseem Juneja — BITS Goa.",
    question:
      'You have recently joined as PM at Dream11. A considerable marketing budget goes into acquiring users and converting them into real-money users. A user is "converted" when they play their first real-money (cash) contest. Increase the conversion rate — suggest 3 new Product solutions. Avoid UI improvements or marketing solutions like push notifications, mailers. — BITS Goa Challenge.',
    keyTakeaway:
      'The conversion barrier is psychological — users fear losing real money before they understand the game. "First Contest Insurance" (money-back guarantee on first loss) drove 3x higher conversion than any UI improvement by removing loss-aversion directly.',
    approach: [
      "Barrier analysis: (a) Don't understand team selection strategy, (b) Fear losing real money, (c) Uncertainty: is this skill or luck?",
      'Feature 1 — "Cricket School" AI Coach: 3-minute interactive tutorial on team selection based on pitch + player form. Gamified quiz with coin rewards before first cash contest',
      'Feature 2 — "First Contest Insurance": If user loses first cash contest (min ₹25 entry), get full refund as D-Cash (Dream Cash, redeemable on next 5 contests). Removes loss-aversion barrier',
      'Feature 3 — "Beat the Expert" micro-contest: ₹10 entry contest against a Dream11 expert\'s team. Social proof: "if I can beat the expert, I\'m ready for bigger contests"',
      "Primary NSM: Free-to-paid conversion rate. Secondary: first cash contest entry rate, D-Cash utilisation, second cash contest within 7 days",
      "Negatively impacted: Short-term revenue (insurance refunds). Monitor: refund rate and conversion to paying user post-D-Cash",
    ],
  },
  {
    id: 5,
    title: "Meesho — Reseller Retention After First Sale",
    source: "PM School Vol. I" as const,
    domain: "Social Commerce",
    type: "Retention" as const,
    tags: ["Social Commerce", "Resellers", "WhatsApp", "Tier 2/3", "Retention"],
    summary:
      "60% of Meesho resellers leave after 7 days of their first sale. Suggest 2 BIG features (not UI tweaks or notifications) to enable resellers to sell more. Winning solution by Shoaib Hussain.",
    question:
      "You have recently joined as PM at Meesho. 60% of resellers leave the platform after the first 7 days of doing their first sale. Suggest 2 new BIG features to help increase selling via Meesho. Do NOT suggest UX/UI improvements or marketing solutions. Think of the next big thing! — PM School Vol. I.",
    keyTakeaway:
      'Meesho resellers are micro-entrepreneurs who lack business skills, not motivation. Two features addressed (1) inventory curation intelligence and (2) customer management — transforming Meesho from a "product catalogue" into a "business in a box" for Tier 2/3 India.',
    approach: [
      "Root cause: Resellers run out of customers after sharing to existing WhatsApp contacts. Lack tools to find new customers or know which products to sell next",
      'Feature 1 — "Trend Catalogue" (AI-curated selling kit): Every Monday, top 20 trending products in reseller\'s city with pre-written WhatsApp captions and suggested price markup. Eliminates "what to sell?" decision fatigue',
      'Feature 2 — "Meesho CRM" (Customer Relationship Manager): Simple contact book tracking which customers bought what, follow-up reminders ("Priya\'s order delivered 10 days ago — share new arrivals"), customer categorisation by preference',
      "Feature 1 metrics: Weekly products shared per reseller, GMV per recommendation, catalogue open rate",
      "Feature 2 metrics: CRM weekly active usage, repeat buyer rate per reseller, reseller D30 retention",
      "Negatively impacted: Margin pressure if resellers over-discount. Monitor: avg selling price vs. catalogue price",
    ],
  },
  {
    id: 6,
    title: "BookMyShow — Survive Beyond Ticketing (Post-COVID)",
    source: "PM School Vol. I" as const,
    domain: "Entertainment",
    type: "Strategy" as const,
    tags: ["Strategy", "Pivot", "Streaming", "Virtual Events", "COVID"],
    summary:
      "Due to COVID, multiplexes and concerts are not resuming. BMS must remain relevant to users. Suggest improvements in existing features or new features. Winning solution by Ananya Nandan.",
    question:
      "BookMyShow is the largest ticketing platform in India. Due to Covid, this category is not doing well. Multiplexes and concerts don't seem to be resuming. BMS is planning initiatives to remain relevant to users. As PM, come up with changes in the product. Select the highest value solution, describe it and its value proposition to user and BMS. — PM School Vol. I.",
    keyTakeaway:
      'BMS\'s moat is event discovery and curated taste — not just ticket processing. Strategy: evolve from "cinema booking" to "experience discovery" platform covering virtual concerts, online experiences, and streaming tie-ups — preserving brand equity during zero-event periods.',
    approach: [
      "Crisis: 100% of BMS revenue depended on physical events. Lockdown = zero revenue. Need to keep users engaged to prevent app uninstalls",
      'Solution 1 — "BMS At Home" virtual events: Live-streamed concerts, comedy shows, theatre with BMS ticketing. Partner with artists doing Instagram Lives. BMS adds: discovery, payment, audience',
      'Solution 2 — "BMS Experiences": Online masterclasses (cooking, fitness, skill sessions). BMS becomes an Airbnb Experiences competitor in digital',
      'Solution 3 — OTT aggregator integration: "Watch Now" on film pages linking to Netflix/Prime/Hotstar. BMS earns affiliate revenue per OTT subscription activated through app',
      "Prioritisation: Virtual events (highest potential, replicates core BMS value prop digitally, medium effort using existing infrastructure)",
      "Success metrics: MAU (prevent churn), virtual event GMV, streaming affiliate revenue, uninstall rate as guardrail",
    ],
  },
  {
    id: 7,
    title: "Nearbuy — Build a USP for Acquisition or Retention",
    source: "PM School Vol. I" as const,
    domain: "Local Commerce",
    type: "Product Design" as const,
    tags: ["Hyperlocal", "Deals", "Flash Sales", "Acquisition", "Retention"],
    summary:
      "As product owner for Nearbuy, build a USP to achieve User Acquisition or User Engagement/Retention. Winning solution by Ananya Nandan & Munmun Mohanty — IIFT.",
    question:
      "You've been onboarded as product owner for Nearbuy. Work towards building a USP to achieve: User Acquisition OR User Engagement/Retention. Select the highest value feature. Describe its value proposition to user and to Nearbuy. Provide UI mocks/flowcharts, explain the feature, identify the goal, describe how feature facilitates goal, and identify metrics. — IIFT Challenge.",
    keyTakeaway:
      '"Nearbuy Live" — geo-fenced real-time flash deals visible to users within 500m of a merchant — creates appointment-based urgency that aggregators can\'t replicate. Retention chosen over Acquisition since retention is harder to win in a competitive deals market.',
    approach: [
      "Goal: Retention (rationale: Nearbuy's problem is habit not awareness — users download but don't open daily)",
      '"Nearbuy Live" — geo-fenced flash deals: Merchants push 2-hour flash deals visible only to users within 500m. "Restaurant near you has 3 empty tables — 30% off if you arrive in 45 min." Creates urgency and habitual location-checking',
      "Technical implementation: Merchant dashboard to create flash deals. Background location permission for push alerts within geo-fence. Privacy: no location stored, only real-time matching",
      'Feature flow: Open Nearbuy → "Live Near You" tab shows active flash deals on map → Tap to claim → QR code for merchant redemption',
      "Metrics: Flash deal redemption rate, daily active users (target: 3x from current), merchant activation rate (% registered merchants using Live), revenue per flash deal",
      "Negatively impacted: Notification fatigue. Mitigate: max 2 Live alerts/day per user, fully configurable in settings",
    ],
  },
  {
    id: 8,
    title: "OkCredit (OkShop) — Increase Shop Conversion Rate (2%)",
    source: "PM School Vol. I" as const,
    domain: "FinTech / SME",
    type: "Product Design" as const,
    tags: ["B2B", "Conversion", "SME", "Onboarding", "IIT Bombay"],
    summary:
      "Only 40% of OkShop sign-ups create a shop and only 2% sell for the first time. Increase the 2% conversion rate. Winning solution by Mrigi Munjal & Puneet Shrivas — IIT Bombay.",
    question:
      "You have joined as PM at OkShop. Out of users who sign up, only 40% create their shop and only 2% sell for the first time (conversion rate = 2%). Increase this conversion rate. Suggest 3 Product solutions. Avoid marketing solutions, push notifications, email, SMS, or minor UI changes. — IIT Bombay Challenge.",
    keyTakeaway:
      'The 2% means 98% of shops never sell. Bottleneck is not product creation (sellers add items) but customer acquisition. Solutions focused on "first sale guaranteed" mechanics — lowering the psychological bar for the first transaction — had the highest impact.',
    approach: [
      "Funnel: Sign-up (100%) → Create shop (40%) → Add products (25%) → Share shop (15%) → First sale (2%). Biggest drop: Share→Sale",
      'Feature 1 — "First Sale Guarantee" programme: OkShop features new shops to a curated network of local buyers. Removes "who will buy from me?" anxiety. OkShop bears cost as CAC investment',
      'Feature 2 — WhatsApp Shop Link with Buyer Analytics: Auto-generate WhatsApp-shareable shop link. After sharing: "12 people viewed your shop, 3 added to cart." Shows tangible progress before first sale',
      'Feature 3 — "Shop in 5 Minutes" AI onboarding: Type product name → AI suggests category, price range, and product images from library. Reduces time-to-first-live-product to under 5 minutes',
      "Metrics: % new shops getting first sale within 7 days, WhatsApp link shares per shop, view-to-cart conversion, time to first product listing",
      "Negatively impacted: OkShop bears cost of first sale guarantee. Mitigate: cap guarantee to ₹500 order value, run as 3-month trial cohort",
    ],
  },
  {
    id: 9,
    title: "Aarogya Setu — Keep Relevant Post-COVID",
    source: "PM School Vol. I" as const,
    domain: "GovTech / Health",
    type: "Product Design" as const,
    tags: ["GovTech", "Health", "Post-COVID", "ABDM", "Engagement"],
    summary:
      "DAU/MAU on Aarogya Setu are falling. Keep it relevant post-COVID and evolve it into a long-term health platform. Winning solution by Kashish Bulani & Shivangi Prasad — BITS Hyderabad.",
    question:
      "With easing of lockdown and people accepting the new normal, concern about Covid is decreasing. DAU/MAU on Aarogya Setu are going down. You've been entrusted with keeping Aarogya Setu relevant. Think of product solutions to sustain/improve engagement post-COVID. Can Aarogya Setu become the go-to health platform by the Government? — BITS Hyderabad Challenge.",
    keyTakeaway:
      "Aarogya Setu has 200M+ installs — distribution is already won. Strategic opportunity: evolve from contact-tracing app into India's national health identity platform by integrating with ABDM (Ayushman Bharat Digital Mission) — the one place for all government health services.",
    approach: [
      "Current state: COVID contact tracing only. Post-COVID, no reason to open it daily. Uninstall rate rising",
      "Solution 1 — Health Locker (ABDM integration): Store vaccination certificates, medical records, prescriptions. Use case: show at airport, hospital, school. Becomes digital health wallet",
      "Solution 2 — Preventive Health Calendar: Personalised reminders for annual checkups, vaccination schedules (flu, dengue), blood pressure monitoring from trusted government source",
      "Solution 3 — Healthcare Access Hub: PMJAY (Ayushman Bharat) eligibility check + hospital finder + teleconsultation booking for BPL families. Bridge government schemes to citizens",
      "Solution 4 — Air Quality & Disease Outbreak Alerts: Location-based alerts for pollution spikes, dengue/malaria outbreaks nearby. Year-round relevance",
      "Privacy-first design: Health data stored locally on device, government servers receive only anonymised aggregate statistics",
      "Metrics: DAU (target: 10% of install base), health records stored, ABDM integration adoption rate, teleconsultation bookings",
    ],
  },
  {
    id: 10,
    title: "LinkedIn — Increase Engagement vs. Facebook/Instagram",
    source: "PM School Vol. I" as const,
    domain: "Professional Network",
    type: "Product Design" as const,
    tags: ["Engagement", "Social Features", "Creator Economy", "DAU/MAU"],
    summary:
      "Total time spent across 5 social platforms is fixed. LinkedIn must eat into time on Facebook, WhatsApp, Instagram, and Twitter. How? Winning solution by Vamshi Krishna Maganti.",
    question:
      "LinkedIn wants to eat Facebook, WhatsApp, Instagram and Twitter's lunch. Research shows that total time a user spends on these 5 platforms is fixed. How would you approach this problem? What engagement levers or products would you build? Define hypotheses, wireframes, and quantify improvement in engagement/retention. — PM School Vol. I.",
    keyTakeaway:
      "LinkedIn can't win on personal/entertainment content. Must dominate \"professional life\" time currently fragmented across Twitter (opinions), WhatsApp (work chats), YouTube (learning). Professional context creates features that can't be replicated — LinkedIn Live, Coffee Chats, and creator monetisation.",
    approach: [
      "Strategic positioning: Can't copy Facebook. Must dominate professional attention that is currently split across multiple platforms",
      "Lever 1 — LinkedIn Stories (professional format): 60-second video clips demonstrating a skill, sharing work insight, workplace milestone. Professional context makes it shareable in ways Instagram Stories aren't",
      'Lever 2 — "Coffee Chat" networking: 15-minute audio/video drop-in rooms by topic ("PM interviews", "Data Science careers"). Competes with Twitter Spaces with professional identity filter',
      'Lever 3 — LinkedIn Learning Challenges: Weekly skill challenges. "Complete this Excel challenge and share your result" → feed content + LinkedIn Learning subscription upsell',
      "Lever 4 — Creator Monetisation: Professional newsletter subscriptions (compete with Substack), course revenue share (compete with Udemy)",
      "Quantification: Each lever targeting 10-15 min/week additional time-on-platform per user. Compound effect across 900M users = major shift in professional attention economy",
      "Metrics: DAU/MAU ratio (current ~20%, target 35%), content shares, LinkedIn Learning subscription conversion, time-on-platform per session",
    ],
  },
  {
    id: 11,
    title: 'WhatsApp — Build "Dukaan-Tech" for Small Businesses',
    source: "PM School Vol. I" as const,
    domain: "Commerce / Messaging",
    type: "Product Design" as const,
    tags: ["SME", "WhatsApp Commerce", "MVP", "Market Sizing", "B2B2C"],
    summary:
      'WhatsApp is getting into "Dukaan-Tech" — empowering small business owners to create online shops, manage orders, and customer support. Build an MVP. Winning solution by Priyanka Mahipala.',
    question:
      'You\'ve recently joined WhatsApp as PM. WhatsApp is planning to get into "Dukaan-Tech" by leveraging its existing platform to empower small business owners. For the MVP: (1) Find how big is the market opportunity. (2) Provide neatly drawn wireframes. — PM School Vol. I.',
    keyTakeaway:
      "WhatsApp Business already has 50M+ business users in India. MVP opportunity: add commerce infrastructure (catalogue → cart → payment → order tracking) on top of existing conversations. Distribution is solved — just build the commerce layer. TAM = $12B Indian SME e-commerce opportunity.",
    approach: [
      "Market sizing: 63M MSMEs in India × 30% willing to sell online × avg GMV ₹5L/year = ₹9,000 Cr TAM",
      "Persona: Kirana store owner in Pune, 38 years old. Already uses WhatsApp Business to receive orders from 200+ regular customers. Pain: tracking orders manually, no payment integration, can't show full inventory",
      "MVP Feature 1 — Digital Catalogue: Owner uploads products with photos and prices. Customers browse within WhatsApp (no app install needed)",
      "MVP Feature 2 — Add to Cart + Order: Customer selects items, places order within chat. Owner gets structured order summary notification",
      "MVP Feature 3 — Payment via WhatsApp Pay UPI: One-tap payment within the order conversation. Order confirmed only after payment",
      'MVP Feature 4 — Order Status Updates: Automated message templates ("Your order is being prepared", "Out for delivery") with estimated time',
      "Metrics: Shops created, orders placed via MVP (vs. informal text orders), payment conversion rate, merchant NPS",
    ],
  },
  {
    id: 12,
    title: "Splitwise — Improve North Star: Transactions Posted",
    source: "PM School Vol. I" as const,
    domain: "FinTech / Social",
    type: "Product Design" as const,
    tags: ["North Star Metric", "PRD", "UPI", "Retention", "Social Payments"],
    summary:
      'Splitwise\'s North Star Metric is "Number of transactions posted". Write a PRD for 2 product solutions to improve this NSM. Winning solution by Akshay Jadhav.',
    question:
      'Splitwise\'s North Star is "No. of transactions posted". You have to improve this metric. Write a Product Requirement Document (PRD) covering 2 Product solutions to improve the North Star Metric for Splitwise. You can improve it by acquiring more users or improving retention. — PM School Vol. I.',
    keyTakeaway:
      'NSM "transactions posted" is driven by group size × transactions per group. Most impactful lever: integrating UPI settlement within Splitwise removes the biggest drop-off (users settle externally and then forget to mark in Splitwise). Group size: suggest groups from WhatsApp contact graph.',
    approach: [
      "NSM decomposition: Transactions posted = (Active groups) × (avg transactions/group/month). Improve either multiplier",
      'Solution 1 — "Groups from Contacts" (Acquisition): AI suggests Splitwise groups from WhatsApp groups. "You have a group called \'Goa Trip 2024\' on WhatsApp with 6 people — create a Splitwise group?" One-tap creation from contact graph',
      'Solution 2 — "Splitwise Pay" (UPI Settlement): Add in-app UPI settlement so members can settle debts without leaving Splitwise. Reduces friction → encourages more groups and more posting',
      "PRD for Solution 2: Goal: increase settlement rate from 40% to 70% within 90 days. User story: As a group member, I want to pay my friend directly in Splitwise so I don't switch to GPay/PhonePe. Success criteria: settlement rate, 30-day retention, new group creation",
      "Metrics: NSM (transactions posted), D30 group retention, settlement completion rate, new groups created via contact suggestion",
      "Risk: UPI integration requires RBI payment aggregator licence. Alternative: deep-link to pre-filled PhonePe/GPay UPI as interim",
    ],
  },
  {
    id: 13,
    title: "Uber Driver — Increase Net Weekly Earnings to ₹15,000",
    source: "PM School Vol. I" as const,
    domain: "Mobility / Gig Economy",
    type: "Strategy" as const,
    tags: [
      "Driver Economics",
      "Two-sided Marketplace",
      "Gig Economy",
      "Business Case",
    ],
    summary:
      "Raj drives for Uber in Bangalore: ₹8,000 gross/week, ₹5,000 in costs, ₹3,000 net. He needs ₹15,000/month minimum. Design a product solution. Expert solution by Prajney Sribhashyam.",
    question:
      "Raj lives in the suburbs of Bangalore. He drives for a cab aggregator and makes gross earnings of ₹8,000/week, costs ₹5,000/week (finance charges + fuel + maintenance + insurance). Net = ₹3,000/week = ₹12,000/month. He needs ₹15,000/month minimum to be sustainable. What product solution would you build to bring in this additional revenue? Provide a business case with pros/cons. — PM School Expert Solution.",
    keyTakeaway:
      'Pure ride-volume increase can\'t bridge the ₹3,000/month gap without burning out the driver. "Uber Connect" — small parcel delivery between trips — monetises 35% dead/idle time. 8 idle hours/day × 2 packages/hour × ₹50/package = ₹4,000/week incremental earnings.',
    approach: [
      "Problem framing: Raj has ~35% idle time between rides. Revenue per hour driven is near maximum. Must monetise deadhead/idle time",
      'Solution: "Uber Connect" — hyperlocal same-day parcel delivery integrated into driver app. Driver picks up a package within 1km of current location, drops off within 5km. ₹40-80 per package',
      "Business case: 8 idle hours/day × 2 packages/hour × ₹50/package = ₹800/day × 5 working days = ₹4,000/week incremental. Exceeds the ₹3,000 gap with buffer",
      "Pros: Asset-light (uses existing driver + vehicle), utilises dead miles, incremental revenue without extra time commitment",
      "Cons: Driver distraction (two app interfaces), package liability/damage risk, regulatory complexity (commercial goods transport licence)",
      "Safeguards: Packages max 5kg, no perishables/valuables, driver can reject any delivery, insurance coverage via Uber",
      "Metrics: Package deliveries per driver per day, driver NPS with feature, net weekly earnings post-feature adoption, package damage rate",
    ],
  },

  // PM SCHOOL VOL II
  {
    id: 14,
    title: "My11Circle — Improve Retention Against Cricket Seasonality",
    source: "PM School Vol. II" as const,
    domain: "Fantasy Sports",
    type: "Retention" as const,
    tags: [
      "Retention",
      "Off-season",
      "Real Money Gaming",
      "ARPU",
      "IIM Visakhapatnam",
    ],
    summary:
      "My11Circle faces extreme seasonality — users only engage during IPL/World Cup. As VP Product, suggest 4 solutions to increase year-round retention and improve ARPU. Solution by Jaideep Kalsi et al. — IIM Visakhapatnam.",
    question:
      'CEO email to you as VP Product: "Real money fantasy sports products face dependency on Cricket and its seasonality. Users come to the platform only during big events like IPL, World Cup, etc. Another concern: low ARPU and long break-even period compared to Rummy, Poker, etc. We need to improve retention at any cost. Suggest 4 new solutions." — IIM Visakhapatnam, PM School Vol. II.',
    keyTakeaway:
      "Seasonality can't be fixed by adding more cricket — expand to other sports AND create year-round daily engagement loops. The four solutions form a complete retention engine: (1) sports breadth, (2) daily engagement trigger, (3) social habit, (4) financial gamification.",
    approach: [
      "Root cause: Platform = cricket dependency. Off-season (8 months/year) has no compelling daily reason to open the app",
      "Solution 1 — Multi-sport expansion (Kabaddi, Football, NBA): Launch fantasy leagues for PKL, ISL, NBA with identical contest mechanics. Cricket fans are often football fans — low learning curve",
      'Solution 2 — Daily Fantasy "Flash Contests": 1-hour micro contests (₹25 entry, guaranteed ₹50 prize) available every day even without live matches. Based on simulated statistics and historical performance',
      'Solution 3 — "My11 Leagues" private friend leagues: WhatsApp-shareable private league codes. Season-long private tournaments drive weekly check-ins regardless of which sport is live',
      'Solution 4 — "Fantasy Coins" daily engagement: Login streak rewards (Day 1: 10 coins, Day 7: 100 coins) redeemable for contest entry discounts. Duolingo-style daily habit formation',
      "Metrics: D30 retention in non-IPL months (primary NSM), avg contests/user/month off-season, ARPU monthly, multi-sport adoption rate",
    ],
  },
  {
    id: 15,
    title: "Groww APM — Enable Stock Buying on WhatsApp",
    source: "PM School Vol. II" as const,
    domain: "WealthTech",
    type: "Product Design" as const,
    tags: ["APM", "WhatsApp", "Investing", "GTM", "IIT Kharagpur"],
    summary:
      "Design a product enabling people to buy stocks or mutual funds on WhatsApp. Groww APM hiring case at IIT Kharagpur. Solution by Shubhram Bhattacharya.",
    question:
      "WhatsApp is one of the most used products in India. Can you design a product that enables people to buy stocks or mutual funds on WhatsApp? Pointers: (1) What problem are you trying to solve? (2) What is the size of the problem? (3) How will the user journey work? (4) What are your success metrics? (5) GTM plan? — Groww APM Campus Case, IIT Kharagpur.",
    keyTakeaway:
      "WhatsApp-native investing flow (conversational, natural language) can unlock the next 200M investors that Zerodha/Groww can't reach through apps. Distribution is solved — WhatsApp already has trust and ubiquity. Just build the investment commerce layer on top.",
    approach: [
      "Problem size: 45 crore demat accounts vs 90 crore smartphone users = 50% untapped. Barrier: complexity of trading apps, fear of loss, lack of financial literacy",
      'WhatsApp channel flow: User messages "Groww" → Bot menu → "Buy ₹500 SIP in Nifty 50" → Fund details + risk rating → Confirm → WhatsApp Pay UPI → Confirmation receipt',
      "Key design principles: (1) Natural language queries not button menus. (2) Responses under 10 words for key decisions. (3) Full KYC via document image share (Aadhaar + PAN)",
      "GTM — 3 phases: Phase 1: existing Groww app users who use WhatsApp. Phase 2: Refer-a-friend via WhatsApp forward. Phase 3: Partnership with fintech influencers doing WhatsApp broadcast",
      "User journey: Awareness (WA forward) → KYC (in-chat) → First SIP setup (conversational) → Monthly nudge → Portfolio check → Upgrade to app for advanced features",
      "Metrics: WhatsApp KYC completion rate, first investment within 7 days, SIP auto-pay adoption, upgrade-to-full-app rate",
    ],
  },
  {
    id: 16,
    title: "Uber — Intercity Logistics vs. Bus: Which to Launch?",
    source: "PM School Vol. II" as const,
    domain: "Mobility / Logistics",
    type: "Strategy" as const,
    tags: [
      "Market Sizing",
      "GTM",
      "Prioritisation",
      "Business Case",
      "IIT BHU",
    ],
    summary:
      "In the wake of COVID, Uber plans to launch Intercity Logistics OR Intercity Bus Service. Build a business case for both and prioritise which to launch first as MVP. Solution by Ishika Mittal & Vaishnavi Tiwari — IIT BHU.",
    question:
      "You have recently joined as VP Products at Uber. Uber plans to launch either Intercity Logistics OR Intercity Bus Service. Create a business case for both and launch the MVP of the one you prioritise. (1) Market size for both. (2) Prioritise which to launch first. (3) Wireframes for MVP. (4) GTM strategy. (5) Metrics. (6) Write a press release announcing the service. — IIT BHU Challenge.",
    keyTakeaway:
      "Intercity Logistics > Intercity Bus because: (1) COVID accelerated e-commerce demand, (2) Bus requires physical fleet/regulatory overhead, (3) Uber's existing driver network is usable for logistics without new infrastructure. Launch Logistics on 3 corridors first.",
    approach: [
      "Market sizing — Logistics: India intercity logistics ~₹8.5L Cr/year. Small parcel (<25kg) segment = ₹40,000 Cr. COVID accelerated demand for reliable intercity parcel delivery",
      "Market sizing — Bus: India intercity bus ~₹35,000 Cr/year. But requires fleet ownership or deep partnerships with operators — capital intensive",
      "Prioritisation: Logistics wins on: lower regulatory burden, uses existing driver network, faster time-to-market, better margin profile",
      "Intercity Logistics MVP: Shipper books via Uber app → matched to driver going on Delhi-Mumbai route with spare boot space → Package tracking → Delivery confirmation with photo",
      "GTM: Launch on 3 corridors (Delhi-Jaipur, Mumbai-Pune, Bangalore-Chennai). Target: D2C e-commerce brands shipping individually packaged orders",
      'Press release: "Uber Freight Express — India\'s most reliable same-day intercity delivery, powered by the drivers you already trust"',
      "Metrics: Shipments per day, on-time delivery rate, cost per shipment vs. incumbents (Delhivery/BlueDart), shipper NPS",
    ],
  },
  {
    id: 17,
    title: "BigBasket — Create Power Users (Super-Loyal Customers)",
    source: "PM School Vol. II" as const,
    domain: "Grocery / Q-Commerce",
    type: "Retention" as const,
    tags: ["Power Users", "Loyalty", "Subscription", "Smart Lists", "Grocery"],
    summary:
      "BigBasket (recently acquired by Tata) needs to create Power Users — super-loyal customers. Suggest 3 product solutions (avoid push notifications, email, UI tweaks). Solution by Mohit Doddi.",
    question:
      "You have joined as PM at BigBasket. Entrusted with the task of next phase of growth. Create Power Users — users who are super-loyal to BigBasket. Come up with 3 Product solutions to drive this. Avoid push notifications, emails, or UI tweaks. For 2 solutions, provide wireframes and metrics. Publish a press release. — PM School Vol. II.",
    keyTakeaway:
      "Power users defined by basket completeness (% of weekly grocery needs) and purchase frequency (3+/week). The winning solutions targeted basket expansion and subscription habit formation — not discount loyalty programmes which attract deal-seekers, not loyal customers.",
    approach: [
      "Power user definition: Orders 3+/week, basket size >₹800, NPS 9-10, churn probability <5%",
      'Solution 1 — "BigBasket Smart Lists" (AI-powered recurring orders): App learns weekly purchase patterns → auto-generates "Your usual Tuesday grocery list" → one-tap reorder. Reduces friction from 5 min to 15 seconds per order',
      'Solution 2 — "BB Star" subscription (₹199/month): Unlimited free delivery + 5% back as BB Cash on all orders + "Members Only" prices on staples. Creates daily check-in habit and switching costs',
      'Solution 3 — "Farm Fresh Connect": Premium fresh produce from partner farms with farmer stories, harvest dates, zero-pesticide certifications. Premium segment (>₹5,000/month spend) pays 30% premium for this',
      'Wireframe spec for BB Star: Subscription badge on profile → members-only banner on home → BB Cash wallet with countdown timer → "Your savings this month: ₹340"',
      'Press release: "BigBasket Smart Lists — the grocery list that writes itself"',
      "Metrics: Basket completeness (% of household grocery from BB), weekly order frequency, subscription conversion and retention, premium segment GMV",
    ],
  },
  {
    id: 18,
    title: "Netflix — Grow Users in India Against OTT Competition",
    source: "PM School Vol. II" as const,
    domain: "Streaming",
    type: "Retention" as const,
    tags: ["User Growth", "India", "OTT", "Conversion", "Regional Languages"],
    summary:
      "Netflix India faces stiff competition from Hotstar, Amazon Prime, SonyLiv. YoY growth slowed. Suggest 3 product solutions to drive user growth. Solution by Naafiah Sadique.",
    question:
      "Netflix faces stiff competition from Hotstar, Amazon Prime, SonyLiv in India. Year-on-year growth has slowed for 2-3 years. You've joined as PM and been entrusted with the task of user growth. Come up with 3 Product solutions. Avoid push notifications, emails, or UI tweaks. Provide wireframes, metrics, and publish a press release. — PM School Vol. II.",
    keyTakeaway:
      "Netflix India is perceived as premium/English in a market that is 70% regional language. Three solutions attacked: (1) language perception, (2) price barrier, (3) social discovery — all three barriers simultaneously rather than picking one.",
    approach: [
      "Growth levers: Acquisition (new users), Reactivation (lapsed users), Conversion (free trial → paid)",
      'Solution 1 — "Netflix Party/Watch Together": Co-watching with friends via shareable link. First person pays, invites up to 3 friends to watch simultaneously. Drives word-of-mouth acquisition + increases perceived subscription value',
      'Solution 2 — "Mobile Preview Pass" (₹49/week trial): 7-day mobile-only plan at ₹49 (vs ₹199/month). Most Netflix India usage is mobile. Lower barrier = higher trial-to-paid conversion',
      'Solution 3 — "Netflix Desi Hub": Dedicated Indian language content hub. 100% dubbed/subtitled originals in top 8 regional languages. "Every show in your language, released same day as English version." Attacks Hotstar\'s regional content advantage directly',
      'Wireframe for Watch Together: Film page → "Watch With Friends" → Share WhatsApp link → Friends join synchronised stream → Live chat sidebar during playback',
      'Press release: "Netflix Watch Together — your living room, just bigger"',
      "Metrics: Trial-to-paid conversion, regional language stream hours as % of total, Watch Together invitations sent, D30 retention of trial users",
    ],
  },
  {
    id: 19,
    title: "Google Pay — Fix Failed Transactions & Improve UX",
    source: "PM School Vol. II" as const,
    domain: "Payments",
    type: "Product Design" as const,
    tags: [
      "UPI",
      "Failed Transactions",
      "UX",
      "Payment Recovery",
      "Play Store Ratings",
    ],
    summary:
      "Google Pay's Play Store ratings are declining due to failed transactions. CEO email: build a plan to alleviate user pain from failed transactions and improve overall UX. Solution by Sanika Oke.",
    question:
      "CEO email: \"For Q1 '21, focus is improving Google Pay. An ongoing concern: failed transactions. Play Store ratings going down. Even though we don't control the banking system, we need to alleviate the pain a user goes through when a transaction fails. Also, what else can we do to improve UX?\" Build a plan with at least 3 solutions, wireframes, and a press release. — PM School Vol. II.",
    keyTakeaway:
      '"Failure-first UX design" — treating failure as a first-class experience, not an edge case. GPay can\'t fix bank failures directly but can dramatically reduce user pain, confusion, and uncertainty during and after failure. This approach lifted ratings from 3.8 to 4.3 in comparable products.',
    approach: [
      "Root cause of failures: Bank server timeouts (40%), wrong UPI PIN (25%), insufficient balance (20%), NPCI/network issues (15%)",
      'Solution 1 — "Transaction Clarity Mode": When a transaction fails, show exact reason in plain language ("Your bank server timed out — not your fault"), estimated resolution time, auto-retry option. Replace cryptic error codes with human language',
      'Solution 2 — "Smart Retry Engine": Auto-retry after 30 seconds if failure due to bank timeout (with user permission). Progress bar: "Retrying with your bank... attempt 2 of 3". Industry retry success rate: ~60%',
      'Solution 3 — "Refund Tracker" dedicated section: For failed transactions where money was debited, show: status ("Refund in progress"), estimated date, bank reference number. Proactive updates via app notification',
      'Bonus — "Pay Later" safety net: For trusted contacts, allow sending a payment promise that converts to UPI transaction once bank is available',
      "Metrics: Transaction success rate improvement, Play Store rating (target: 3.8 → 4.3), failed transaction complaint rate, user trust score (in-app survey)",
    ],
  },

  // BITSOM HANDBOOK
  {
    id: 20,
    title: "Zepto — Cart Experience Teardown for 35+ Users",
    source: "BITSoM Handbook" as const,
    domain: "Q-Commerce",
    type: "Metrics" as const,
    tags: ["Teardown", "UX", "Accessibility", "AOV", "Retention", "Age 35+"],
    summary:
      'Evaluate the "building the cart before purchase" flow of the Zepto app. Redesign for users aged 35+ to increase Average Order Value and Retention. From BITSoM PM Handbook 2023-24.',
    question:
      'Evaluate the "building the cart before purchase" flow of the Zepto app and redesign the experience while identifying opportunities to make usability better for users age above 35 years, which will lead to increase in average order value and retention. — BITSoM PM Handbook 2023-24.',
    keyTakeaway:
      "Zepto's cart UX is optimised for power users (22-32). For 35+: smaller fonts, icon-heavy navigation, no saved cart → lower completion and basket size. Probable outcomes: decrease bounce rate, increase AOV via smart basket suggestions, improve D30 retention for 35+ cohort.",
    approach: [
      "User persona (35+ segment): Homemaker, 40, emergency grocery top-ups. Comfortable with WhatsApp but not power-app-user. Uses reading glasses",
      'Identified flaws: (1) Product images too small to verify brand/variant. (2) "Add to cart" is underline text not a clear CTA button. (3) No "Your usual items" section. (4) Checkout has too many steps',
      "Solution 1 — Large format product cards: Accessibility Mode toggle → larger images, text labels instead of icons, increased font size",
      'Solution 2 — "Your Zepto Basket" (AI recurring cart): Learns weekly purchase patterns → "Your weekly basket is ready — 12 items, ₹840. Add to cart in 1 tap" every Sunday',
      'Solution 3 — Simplified checkout: 3-step checkout (cart review → address confirm → payment) with progress bar. Surface "Apply coupon" as optional after payment selection',
      "Probable outcomes: Decrease bounce rate on cart page, increase AOV via smart basket suggestions, improve D30 retention for 35+ cohort",
      "Metrics: Cart abandonment by age cohort, AOV segmented by 35+ vs <35, Accessibility Mode adoption, basket completion rate",
    ],
  },
  {
    id: 21,
    title: "PhonePe — Improve Notifications & UX",
    source: "BITSoM Handbook" as const,
    domain: "FinTech / Payments",
    type: "Product Design" as const,
    tags: ["Teardown", "UPI", "Notifications", "UX", "Super App"],
    summary:
      "Improve PhonePe Mobile App in terms of notifications and overall UX. Includes user personas, notification system analysis, and recommendations. From BITSoM PM Handbook 2023-24.",
    question:
      "Improve PhonePe Mobile App in terms of notifications and overall user experience. — BITSoM PM Handbook 2023-24.",
    keyTakeaway:
      "PhonePe sends avg 4.2 notifications/day per user but only 1.1 are opened. Problem is relevance, not frequency. Contextual notifications (triggered by user behaviour patterns) can triple open rates while reducing total notification volume.",
    approach: [
      "User segments: Regular transactors (daily UPI), Occasional users (monthly bills), Investors (MF/Gold feature). Each segment has different notification needs",
      "Current problems: (a) Transaction confirmations delayed (should be instant). (b) Marketing notifications at wrong times (3pm while at work). (c) No unusual spending pattern security alert",
      "Recommendation 1 — Contextual notification scheduling: Bill reminders 3 days before due date. Cashback notifications on weekends (when people shop). Security alerts: immediate",
      "Recommendation 2 — Notification preference centre: Users choose notifications by category (Transactions/Offers/Reminders/News) at granular level",
      'Recommendation 3 — Rich transaction notifications: Instead of "₹500 sent to Rahul", show "₹500 sent to Rahul · 14:32 · Remaining balance: ₹4,230"',
      'UX improvements: Reduce home page icons from 24 to 12 top actions. Add "Recent contacts" prominently (50% of UPI = same 5 people)',
      "Metrics: Notification open rate (target: 1.1 → 3.5), notification opt-out rate, home page core action CTR, transaction complaint rate",
    ],
  },
  {
    id: 22,
    title: "Spotify — Boost Engagement, Retention & Revenue",
    source: "BITSoM Handbook" as const,
    domain: "Audio / Streaming",
    type: "Product Design" as const,
    tags: [
      "Teardown",
      "Engagement",
      "Retention",
      "Monetisation",
      "Social Listening",
    ],
    summary:
      "Evaluate how Spotify can boost user engagement, retention, and revenue by strengthening existing features and adding new ones. Full teardown from BITSoM PM Handbook 2023-24.",
    question:
      "Evaluate how Spotify can boost user engagement, user retention, and revenue by strengthening what it currently offers and potential new features. — BITSoM PM Handbook 2023-24.",
    keyTakeaway:
      'Spotify\'s moat is its taste graph — 12+ years of listening data per user. Opportunity: monetise this graph through social features ("what are my friends listening to?"), creator tools, and premium tier differentiation beyond audio quality — none of which competitors can replicate.',
    approach: [
      "User segments: Artists (content producers), Users (free + premium listeners), Advertisers (free tier)",
      "Current state — The Good: Mood-based browsing, Discover Weekly, social playlist sharing. The Bad: Premium plans page cluttered (cognitive overload), re-asks survey preferences on re-login despite having years of data",
      'Engagement boost: "Social Listening Mode" — see what 3 friends are currently listening to in a subtle sidebar. Drives conversation + competes with Apple Music social features',
      'Retention boost: "Your Music Year in Progress" — monthly micro-Wrapped. Instead of waiting till December, show evolving taste profile: "You\'ve discovered 24 new artists this month"',
      'Revenue boost — "Spotify Studio" tier (₹299/month): AI-powered remix tools + multi-device offline + monthly "30 min with an artist" content. Attracts music creators, not just listeners',
      "India-specific growth: 30-day free premium for new users, student plans (₹59/month), offline mode for low-connectivity areas",
      "Metrics: Skip rate, playlist save rate, premium conversion, D90 retention, podcast completion rate, creator growth rate",
    ],
  },
  {
    id: 23,
    title: "Google Docs — Improve for SMB Enterprise Market",
    source: "BITSoM Handbook" as const,
    domain: "Productivity / SaaS",
    type: "Product Design" as const,
    tags: ["Enterprise", "B2B", "SaaS", "SMB", "Identity Verification"],
    summary:
      "How would you improve Google Docs? Strategic goal: enterprise market penetration against Microsoft Office. Focus on SMBs. Full interview transcript from BITSoM PM Handbook 2023-24.",
    question:
      "Case 2: How would you improve Google Docs? What are the key metrics? [Strategic context: Google wants to win enterprise market share vs. Microsoft Office, particularly in SMBs.] — BITSoM PM Handbook 2023-24.",
    keyTakeaway:
      'SMBs need Google Docs for document officiation and compliance — not just writing. Building "electronic identity verification" using Google Accounts creates a moat Microsoft can\'t match without rebuilding their identity infrastructure from scratch.',
    approach: [
      "User categorisation: Consumers vs. Businesses. Strategic goal: increase paying enterprise customers",
      "SMB focus: Small law firms, accountants, financial advisors, real estate. Core pain: multi-tool document workflows, no trusted identity verification for legal processes, confidential docs in unencrypted email",
      "Pain points: (1) Multiple tools for one workflow (Docs + DocuSign + email + physical signatures). (2) No identity verification — can't use Docs for official submissions. (3) Version control issues",
      'Solution A — Google ID for official document certification: Google Account as electronic identity proof. "Certified by [Google Account]" badge. Enables Docs for official loan applications, immigration forms, etc.',
      "Solution B — Integrated with official procedures: Partner with government portals (GST filing, company registration) to accept Google Docs format submissions",
      "Solution C — Document vault: Secure version-controlled storage with audit trail. All stakeholders see who changed what, when, with verified identity",
      "Prioritisation: Google ID certification wins — aligns with Google's mission, differentiates from Microsoft, highest barrier to copy",
      "Metrics: Paying SMB customers, market share vs. Microsoft 365, official document submissions via Docs, B2B NPS",
    ],
  },
  {
    id: 24,
    title: "Google Pay — Design Credit Card Bill Payment Feature",
    source: "BITSoM Handbook" as const,
    domain: "FinTech / Payments",
    type: "Product Design" as const,
    tags: ["Credit Cards", "UPI", "India", "Personas", "RICE"],
    summary:
      "You are a PM at Google Pay. Design a feature for paying credit card bills. Full interview transcript with personas, user journey, solutions, and RICE prioritisation from BITSoM PM Handbook 2023-24.",
    question:
      "Case 3: You are a PM at Google Pay. Design a feature for paying credit card bills. [Context: Goal = get more individuals to use GPay to pay credit card bills. India focus. Consumer-first approach.] — BITSoM PM Handbook 2023-24.",
    keyTakeaway:
      "Credit card holders have higher purchasing power and are growing in India (BNPL trend). The core opportunity: Google Pay already has the payment infra and user trust. Adding credit card bill payment creates daily engagement touchpoint beyond P2P UPI. Personised bill reminders + spending categorisation drive monetisation.",
    approach: [
      "Goal: Get users to pay credit card bills via GPay platform. Easy + insightful + reliable = stickiness. Scope: India only initially",
      "Personas: Rohan (34, investment banker, 2 credit cards, travel allowances). Preeti (28, dietitian, loves EMI, frequent online shopper). Naresh (50, father, pays bills for insurance and petrol). Prioritise Rohan + Preeti (urban, active, Tier 1)",
      "Pain points: (1) Hard to remember multiple payment due dates. (2) Statements generated via email — time-consuming to check. (3) Users unaware of additional fees/interest. (4) Statements poorly categorised. (5) No positive reinforcement for on-time full payment",
      "Solutions: (1) Register credit cards via scan feature. (2) Show total dues at month-start as budget planning. (3) T-3 day banner before due date showing potential interest saved by paying in full. (4) Google Calendar integration for due date reminders. (5) Rewards for on-time full payment. (6) Spending categorisation in statements. (7) Allow payments over ₹1L",
      "RICE prioritisation: Features 1, 2, 7 are bare minimum to enable credit card payments. Feature 6 (rewards) needs minimal effort (existing UPI reward infrastructure). Features 3 + 4 differentiate and drive on-time payment behaviour",
      "Metrics: Credit card bill payments via GPay, on-time payment rate, Play Store rating, ARPU from rewards/cashback partnerships",
    ],
  },

  // RCA CASES (BITSoM)
  {
    id: 25,
    title: "RCA: Nykaa Order Cancellation Up 20%",
    source: "BITSoM Handbook" as const,
    domain: "Beauty / E-Commerce",
    type: "RCA" as const,
    tags: ["RCA", "Cancellations", "Virtual Try-On", "Feature Release", "App"],
    summary:
      "Order cancellation on Nykaa is up 20% (post-24 hours, ready-to-ship stage). Focus: makeup products, app only. Full structured interview transcript from BITSoM PM Handbook 2023-24.",
    question:
      "Case 1 (RCA): Order cancellation on Nykaa is up by 20%. The cancellation window is 24 hours. [Interviewer context: focusing on beauty products (makeup), happening on app only, started suddenly within a week.] Find the root cause. — BITSoM PM Handbook.",
    keyTakeaway:
      "Systematic elimination: external factors (competition, pricing, regulations, media) all ruled out. Root cause: two simultaneous internal changes — virtual try-on feature showing products differently from real-world delivery + removal of authenticity badge (replaced with text to improve load speed).",
    approach: [
      "Clarification: Makeup or skincare? (Mostly makeup). App or website? (App only). Payment method related? (No). When did it start? (Suddenly, within a week). Happened before? (No)",
      "External check (all eliminated): Competitor activity? No. Price comparison? No. Regulatory? No. Bad press? No. Seasonal/geographic? No",
      "Internal investigation: Recent feature updates? YES — new features added recently",
      "Hypothesis 1 — Virtual try-on feature: Users try lipstick/eyeshadow virtually and choose a shade, but delivered product looks different due to lighting variance → post-delivery realisation → cancel before shipping window closes",
      "Hypothesis 2 — Authenticity badge removed: Team removed authenticity badge image for faster page load, replaced with text. For makeup (where counterfeit is a real concern), users now feel uncertain about product genuineness",
      "Root cause: Both internal changes coinciding — virtual try-on shade mismatch + removal of trust signal. Users doubt they chose the right colour AND doubt authenticity simultaneously",
      'Fix: (1) Calibrate virtual try-on algorithm for real-world lighting. (2) Restore authenticity badge. (3) Add "Reality match guarantee" — if product looks different from try-on, easy no-questions return',
    ],
  },
  {
    id: 26,
    title: "RCA: Grocery App Sales Down 25%",
    source: "BITSoM Handbook" as const,
    domain: "Grocery / E-Commerce",
    type: "RCA" as const,
    tags: [
      "RCA",
      "Android App Update",
      "COD",
      "Cart Abandonment",
      "$300M Button",
    ],
    summary:
      'A grocery e-commerce app has 25% fewer sales starting last week. Mobile app only. Full structured RCA with the famous "300 Million Dollar Button" reference. From BITSoM PM Handbook 2023-24.',
    question:
      "Case 2 (RCA): A grocery e-commerce app has had 25% lesser sale. [Context: Indian market, problem started last week, no demographic/geographic pattern, mobile app only, an Android app update was released last week.] Find the root cause. — BITSoM PM Handbook.",
    keyTakeaway:
      "Root cause: Android app update broke the Cash-on-Delivery button in the payment section. COD is India's most preferred grocery payment method (especially Tier 2+ cities). The candidate's \"300 Million Dollar Button\" reference impressed the interviewer — showing case study knowledge while asking a relevant clarifying question.",
    approach: [
      "Clarifications: Indian market. Problem started last week. Demographic/geographic pattern? None. Web or app? Mobile app only. Was there an app update? YES (Android, last week)",
      "External factors: New competitor? No. Sale/discounts by competitors? No. Supply chain disruption? No → Eliminated",
      "Internal check: Data analytics tool working? Yes. Are installs declining? No. Add-to-cart button working? Yes. Products appearing in cart? Yes. Any bug reports on payment? YES — specifically on cash on delivery",
      'Key question (with 300M Dollar Button story): "An e-commerce company saw a drop when they added a REGISTER button after add-to-cart. Did the update introduce anything similar to the checkout flow? Specifically is the COD button working?"',
      "Root cause confirmed: Android app update introduced a bug in the Cash-on-Delivery payment option in checkout. COD is dominant payment method for grocery in India → significant proportion of checkout completions failing",
      "Fix: Roll back Android update or patch COD flow immediately. Monitor: COD completion rate, Android checkout conversion",
    ],
  },
  {
    id: 27,
    title: "RCA: Flipkart Cart Additions Down 15%",
    source: "BITSoM Handbook" as const,
    domain: "E-Commerce",
    type: "RCA" as const,
    tags: ["RCA", "Cart Additions", "Android", "App Update", "Checkout Flow"],
    summary:
      "Flipkart sees a decline of 15% in cart additions over 3 days, mostly on mobile app. Full structured RCA interview with detailed funnel analysis from BITSoM PM Handbook 2023-24.",
    question:
      "Case 3 (RCA): Imagine you're working at Flipkart and noticing a decline of about 15% of cart additions to the shopping cart in the last three days, mostly on mobile app. Help diagnose the issue. — BITSoM PM Handbook.",
    keyTakeaway:
      "Systematic funnel approach (define metric → segment by platform → check internal changes → drill into specific flow). Root cause: Android app update to improve checkout flow introduced a bug — zero cart additions on specific new Android version in event data.",
    approach: [
      "Step 1 — Define metric: Cart addition = user clicks item on Flipkart app, it appears in shopping cart. Confirm analytics tool working",
      "Step 2 — Segment: Web vs. mobile? Mostly mobile. iOS vs. Android? Only Android. Specific categories or demographics? No pattern",
      "Step 3 — Internal changes: Recent Android app update? YES — major update to improve checkout flow. Bug reports? YES — increasing bug reports about paying/checking out products",
      "Step 4 — Drill into flow: Home → Product listing → Product page → Add to Cart → Cart → Checkout. Add to Cart button visible? Yes. Products showing in cart on new version? NO CART ADDITIONS AT ALL in event data",
      "Root cause: Checkout flow update introduced a bug on specific new Android version. Cart addition event fires but product doesn't persist in cart — users abandon and don't retry",
      "Fix: Identify affected Android version → push hotfix or pull update from Play Store. Route affected users to previous app version as interim",
      "Post-fix metrics: Cart additions per Android version, checkout conversion rate, cart abandonment rate",
    ],
  },
  {
    id: 28,
    title: "RCA: Facebook Friend Requests Down 10% Overnight",
    source: "BITSoM Handbook" as const,
    domain: "Social Media",
    type: "RCA" as const,
    tags: [
      "RCA",
      "Regulatory",
      "Competitor",
      "European Law",
      "Marketing Budget",
    ],
    summary:
      "Facebook friend requests dropped 10% overnight in the US, across all platforms. Full RCA interview with external factor analysis from BITSoM PM Handbook 2023-24.",
    question:
      "Case 4 (RCA): You are a PM at Facebook, and friend requests are down by 10% overnight in the US across iOS, Android, and web. What do you do? — BITSoM PM Handbook.",
    keyTakeaway:
      "Two converging external factors: (1) A European country passed a data privacy law specifically targeting Facebook and TikTok, limiting operations. (2) TikTok pivoting toward social features plus Facebook reducing marketing budget. Neither alone fully explains the drop — combination does.",
    approach: [
      "Clarifications: Overnight drop. US. All platforms (iOS + Android + Web). Only friend requests affected",
      "Internal check (all clear): Data quality? Trustworthy. Product deprioritisation or UI change? No — friend request feature still prominent. A/B tests? No tests affecting friend requests",
      "Seasonal check: Holiday/weekend pattern? No — unexpected vs. historical trends, no seasonality",
      "External — user behaviour: Major change? No overnight shift. Competitor: TikTok shifting from content to social app — recently introduced friend-finding features",
      "Regulatory check: A European country passed a new data privacy law overnight preventing Facebook from operating as usual in that country, affecting user actions across that region",
      "Marketing check: Facebook decreased marketing budget recently — confirmed",
      "Conclusion: (1) European regulatory block reducing user actions in that market. (2) TikTok becoming social competitor + Facebook cutting marketing = reduced new user acquisition. Both combining to drive down friend requests",
      "Recommended actions: Legal team on European compliance. Review marketing budget. Build product features making friend requests more compelling vs. TikTok social graph",
    ],
  },
  {
    id: 29,
    title: "RCA: Lyft Driver Cancellation Rate Up 5%",
    source: "BITSoM Handbook" as const,
    domain: "Mobility",
    type: "RCA" as const,
    tags: [
      "RCA",
      "Driver Behaviour",
      "Competitor",
      "Incentives",
      "Cancellations",
    ],
    summary:
      "Lyft has a 5% uptick in driver-initiated cancellations. No platform changes, no seasonal pattern. Full structured RCA with data scientist perspective from BITSoM PM Handbook 2023-24.",
    question:
      "Case 6 (RCA): Lyft has observed a 5% uptick in cancel rates. [Clues: driver-initiated cancellations, relatively sudden over last 2 weeks, no tech changes, no seasonal pattern, cancellations cluster at start of ride, Uber has increased marketing campaigns targeting Lyft drivers.] — BITSoM PM Handbook.",
    keyTakeaway:
      'Root cause: Uber launched aggressive driver-acquisition campaigns. Lyft drivers selectively cancel Lyft rides when they spot better Uber opportunities — "incentive arbitrage" behaviour. Solution: match or exceed Uber driver incentives + revise cancellation policy.',
    approach: [
      "Metric clarification: Driver-initiated cancellations (not rider). Logging unchanged. Sudden shift over last 2 weeks",
      "Segment: Geographic? Slight domestic concentration but no specific locale. Seasonal? No",
      "Technical: Platform changes? No. A/B tests (even app icon colour experiment)? Unrelated to cancels",
      'Driver behaviour data: Where in ride flow are cancellations happening? Clustering at START of ride (acceptance → pickup phase). No increase in pickup distances → eliminates "ride isn\'t worth it" theory',
      "External factors: Competitor activity? YES — Uber has increased marketing campaigns targeting Lyft drivers with better earnings promises",
      "Root cause: Drivers doing incentive arbitrage — accepting Lyft rides but cancelling if a better Uber ride opportunity appears. Triggered by Uber's aggressive driver acquisition campaign",
      'Solutions: (1) Enhance Lyft driver incentives to match/exceed Uber offers. (2) Cancellation policy revision — drivers with >X% cancel rate lose access to prime time incentives. (3) "Lyft Select" programme — top-rated low-cancel drivers get priority access to surge zones',
    ],
  },

  // BITSOM GUESSTIMATES
  {
    id: 30,
    title: "Guesstimate: Daily Active Users of Google Drive",
    source: "BITSoM Handbook" as const,
    domain: "Technology / Cloud",
    type: "Guesstimate" as const,
    tags: [
      "Guesstimate",
      "Market Sizing",
      "Google Drive",
      "Global",
      "Cloud Storage",
    ],
    summary:
      "Estimate the number of daily active users of Google Drive globally (personal + enterprise). Structured approach with internet penetration, market share, and gut check. From BITSoM PM Handbook 2023-24.",
    question:
      "Guesstimate 1: Estimate the number of daily users of Google Drive globally (both personal and enterprise users, daily active). — BITSoM PM Handbook 2023-24.",
    keyTakeaway:
      "Key estimation anchor: ~1.25B total Google Drive users globally. DAU rate of ~25-30% gives 300-375M daily users. Gut check: 1 in 4 global internet users using Drive daily is reasonable given its deep integration with Gmail, Docs, and Android. Google reported 1B+ Drive users in 2018.",
    approach: [
      "World population ~8B. Exclude countries where Google is blocked (China ~1.4B, parts of Russia ~0.1B) = ~6.5B addressable population",
      "Internet users: ~65% penetration = ~4.2B internet users",
      "Age filter: 15-60 age range = ~60% → ~2.5B potential users",
      "Google services adoption: ~75% of internet users use some Google service → ~1.9B",
      "Google Drive specifically vs. OneDrive/Dropbox: ~65% market share → ~1.25B total Drive users",
      "DAU rate: Not all users are daily active. 25-30% DAU rate → ~300-375M daily users",
      "Gut check: 1 in every 4 global internet users using Google Drive daily seems reasonable given Gmail + Docs + Android integration. Google publicly reported 1B+ Drive users in 2018 — consistent.",
    ],
  },
  {
    id: 31,
    title: "Guesstimate: Number of Hotels in Bangalore",
    source: "BITSoM Handbook" as const,
    domain: "Travel / Hospitality",
    type: "Guesstimate" as const,
    tags: [
      "Guesstimate",
      "Market Sizing",
      "Bangalore",
      "Area-based Estimation",
    ],
    summary:
      "Estimate the number of hotels (not Airbnb, only hotels) in Bangalore. Area-based approach with density distribution. Answer: ~800 hotels. From BITSoM PM Handbook 2023-24.",
    question:
      "Guesstimate 2: Estimate the number of hotels in Bangalore (only hotels, not Airbnb or lodges). — BITSoM PM Handbook 2023-24.",
    keyTakeaway:
      "Area-based approach more reliable than demand-based because supply (land zoning, density) constrains hotel count. Bangalore: 600km² → 300km² suitable → density tiers → ~800 hotels. Demand-side gut check (15,000 tourists ÷ 20 rooms/hotel = 750 hotels) is consistent.",
    approach: [
      "Approach: Supply-side (area-based), as land availability constrains hotel density",
      "Bangalore area: ~600 km². Usable for commercial development: ~50% (deducting parks, lakes, forests) = 300 km²",
      "Density distribution: High density (25% = 75 km²), Medium density (50% = 150 km²), Low density (25% = 75 km²)",
      "Hotels per km² by density: High = 5 hotels/km² → 75 × 5 = 375. Medium = 2.5/km² → 150 × 2.5 = 375. Low = 0.5/km² → 75 × 0.5 = 37",
      "Total: 375 + 375 + 37 = 787 ≈ 800 hotels",
      "Gut check — demand side: Bangalore population ~1.5 Cr. Assume 1 in 1,000 is tourist/business traveller = 15,000 guests. Average hotel has 20 rooms → 15,000 ÷ 20 = 750. Consistent with supply-side estimate",
      "Final answer: ~800 hotels in Bangalore",
    ],
  },
  {
    id: 32,
    title: "Guesstimate: Google Search Queries per Second",
    source: "BITSoM Handbook" as const,
    domain: "Technology / Search",
    type: "Guesstimate" as const,
    tags: [
      "Guesstimate",
      "Market Sizing",
      "Google Search",
      "Pareto 80/20",
      "Global",
    ],
    summary:
      "Estimate Google Search queries per second globally across all devices. Uses 80/20 rule and global internet data. Final answer: ~140,000/second. From BITSoM PM Handbook 2023-24.",
    question:
      "Guesstimate 3: Number of queries answered by Google Search per second (all devices globally; Google Search only, not Gmail/YouTube/Maps). — BITSoM PM Handbook 2023-24.",
    keyTakeaway:
      "Using the 80/20 rule simplifies: 80% of searches come from top 20% of users (who do 15-20/day). Final: ~12B searches/day = ~140,000/second. Google publicly reported ~8.5B searches/day in 2022 (98,000/sec) — candidate's estimate is in the same order of magnitude. A successful guesstimate.",
    approach: [
      "Google Search users: 7.5B world − 1.5B excluded countries = 6B. Internet penetration 70% = 4.2B. Google market share 80% = 3.36B → round to 3B",
      "Apply 80/20 rule: Top 20% (0.6B users) do 15-20 searches/day. Bottom 80% (2.4B users) do 2-3 searches/day",
      "Daily searches: Heavy users: 0.6B × 15 = 9B. Light users contribution: 9B ÷ 0.8 × 0.2 = 2.25B. Total = ~12B searches/day",
      "Per second: 12B ÷ 86,400 seconds = ~140,000 searches/second",
      "Gut check: Google publicly stated ~8.5B searches/day in 2022 = ~98,000/second. Candidate estimate of 140,000 is ~43% higher — reasonable given uncertain market share assumptions. Order of magnitude is correct",
    ],
  },
  {
    id: 33,
    title: "Guesstimate: Market Size for Driverless Cars in USA by 2030",
    source: "BITSoM Handbook" as const,
    domain: "Automotive / Technology",
    type: "Guesstimate" as const,
    tags: [
      "Guesstimate",
      "USA",
      "Driverless Cars",
      "Growth Projection",
      "Luxury Market",
    ],
    summary:
      "Estimate market size (by number of users) for fully automatic driverless cars in USA by 2030. Uses household income distribution and growth projections. From BITSoM PM Handbook 2023-24.",
    question:
      "Guesstimate 4: Estimate the market size for driverless cars in the USA by 2030. [Clarifications: market sizing by number of users, fully automatic, personal use only, assume technology and legalities ready by 2030.] — BITSoM PM Handbook 2023-24.",
    keyTakeaway:
      "Key assumption: 1 in 1,000 luxury car owners currently buys driverless. With 20% annual growth for 8 years = ~4x. Final answer: ~20,000 driverless cars by 2030. Consistent with real 2024 estimates of 20,000-40,000 autonomous vehicles in US.",
    approach: [
      "US households: 330M population ÷ 4 avg household size = 80M households",
      "Households affording luxury cars: High income (10%) = 8M households × 2 luxury cars = 16M. Upper-middle (20%) = 16M × 0.5 = 8M. Total: 24M luxury cars",
      "Current driverless adoption: 1 in 1,000 luxury car owners buys driverless (due to safety concerns + lack of trust) = 24,000 driverless cars today (2022)",
      "Annual replacement rate: Average car lifetime 5 years → 24,000 ÷ 5 = 4,800 new driverless/year",
      "Project to 2030 with 20% annual growth: 4,800 × (1.2)⁸ ≈ 4,800 × 4.3 = ~20,000",
      "Final answer: ~20,000 driverless cars in USA by 2030",
      "Gut check: Tesla FSD + Waymo + Cruise combined deployed ~20,000 autonomous vehicles by end of 2023. Estimate is reasonable.",
    ],
  },

  // ISB BTC 2021
  {
    id: 34,
    title: "Product Design: Design a Fire Alarm for Blind People",
    source: "ISB BTC 2021" as const,
    domain: "Hardware / Accessibility",
    type: "Product Design" as const,
    tags: [
      "Accessibility",
      "Hardware",
      "CIRCLES Framework",
      "Blind Users",
      "Safety",
    ],
    summary:
      "Classic abstract product design question used to illustrate the CIRCLES framework with a non-digital product. Canonical example from ISB BTC Handbook 2021.",
    question:
      "Design a fire alarm for blind people. [Used in ISB BTC 2021 as the canonical example to illustrate the CIRCLES framework for non-obvious user journeys where visual cues are unavailable.] — ISB BTC Handbook 2021.",
    keyTakeaway:
      "This case tests going beyond the obvious (louder alarm). For a blind person, the critical need is directional guidance to exits, not just alerting. The insight: design for the full escape experience, not just the alert. Winning solution: haptic wristband + bone-conduction directional audio.",
    approach: [
      "C — Comprehend: Goal = increase safety for blind individuals in fire emergencies. Constraint: cannot rely on visual signals. Context: buildings, offices, public spaces",
      "I — Identify: Focus on fully blind, mobile individuals (can evacuate independently, largest segment). Sub-segments: with caregiver vs. independent",
      "R — Report needs: (1) Immediate alert without visual cue. (2) Know direction of nearest exit. (3) Way to call for help if mobility impaired. (4) Not be overwhelmed by disorientation in smoke/noise",
      "C — Cut: Directional guidance to exit > alert mechanism > help calling (prioritised by criticality)",
      'L — List: (1) Vibrating wristband + directional audio ("Exit 20m, turn right"). (2) Haptic floor strips along evacuation route. (3) Smart cane integration via Bluetooth + vibration in exit direction',
      "E — Evaluate: Wristband wins: low infrastructure cost, mass adoptable, no building retrofit needed. Floor strips require massive building retrofits. Smart cane only helps cane users",
      "S — Summarise: Wristband + directional audio as MVP. Pairs with smart building fire alarm via Bluetooth. Accessible to most blind users without building changes.",
    ],
  },
  {
    id: 35,
    title: "Pricing: How Would You Monetise Google Maps?",
    source: "ISB BTC 2021" as const,
    domain: "Navigation / Advertising",
    type: "Monetisation" as const,
    tags: [
      "Pricing",
      "Monetisation",
      "Google Maps",
      "B2B",
      "Local Ads",
      "Data Analytics",
    ],
    summary:
      "How would you monetise Google Maps beyond the current B2B API billing? Classic pricing case from ISB BTC 2021 handbook pricing framework section.",
    question:
      "How would you monetise Google Maps? [Pricing framework question from ISB BTC Handbook 2021.] — ISB BTC Handbook 2021.",
    keyTakeaway:
      "Google Maps' monetisation should come from businesses that benefit from people using Maps — not from individual users (who are deeply price-sensitive). Three layers: API fees (existing), promoted pins/local ads (growing), and data analytics SaaS (largest untapped opportunity).",
    approach: [
      "Value chain: Maps creates value for (a) individuals navigating, (b) businesses being discovered, (c) developers via API, (d) advertisers reaching on-the-move consumers",
      "Willingness to pay: Businesses (high WTP — Maps directly drives footfall). Developers (paying already via API). Individuals (very low WTP)",
      'Revenue stream 1 — Local Business Ads: Promoted pins (restaurants, shops pay for top placement when user is nearby). "Sponsored" label like Google Search. Currently under-monetised vs. potential',
      'Revenue stream 2 — Maps Analytics SaaS: Sell anonymised foot traffic data to retailers ("25% of people searching for your competitor visit within 500m of your store"). High WTP from brick-and-mortar retail',
      "Revenue stream 3 — Enterprise API: Shift heavy API users to paid SLA-backed tiers. Current free tier subsidises billions of calls — heavy users should pay",
      'Revenue stream 4 (moonshot) — Maps Commerce: Buy products with same-day delivery from nearby stores via Maps. "Order from this restaurant directly"',
      "Prioritisation: Local Business Ads (highest near-term revenue) > Enterprise API (existing, need to scale) > Analytics SaaS (medium-term, high WTP)",
    ],
  },

  // ISB BTC Co2024
  {
    id: 36,
    title: "Product Design: Design a Washing Machine for Blind People",
    source: "ISB BTC Co2024" as const,
    domain: "Accessibility / Hardware",
    type: "Product Design" as const,
    tags: [
      "Accessibility",
      "Hardware",
      "Blind Users",
      "Paytm APM Interview",
      "CSR",
    ],
    summary:
      "Design a washing machine for blind people. Real Paytm APM interview question from ISB BTC Co2024 handbook. Tests deep user empathy and hardware product thinking.",
    question:
      'Design a washing machine for blind people. "I know you guys are good with your frameworks. Just talk about the target customers, customer journey with current products and anticipated pain points." [Context: Samsung CSR initiative, completely blind target users.] — Paytm APM Interview, ISB BTC Co2024.',
    keyTakeaway:
      'The question specifically said "target completely blind people — if they can use it, so can anyone else." This framing tells you to design for the extreme case, not the average case. The entire UX must be haptic + audio — not a visual simplification of an existing interface.',
    approach: [
      "C — Comprehend: Samsung CSR initiative, no commercial pressure. Goal: completely blind people can independently do their laundry",
      "I — Identify: Completely blind users. Sub-segments: tech-savvy blind (young, familiar with assistive tech) vs. elderly blind (less familiar). Focus: independently living adults",
      "R — Report needs via user journey (current): Sort clothes (can do by touch) → Load machine (manageable) → Select programme (CANNOT do — visual display) → Start machine (OK if one button) → Know when done (need audio alert) → Remove clothes (manageable)",
      "Pain point: Programme selection is entirely visual. Current washing machines have LCD displays, touch screens, no audio feedback",
      "C — Cut: Biggest pain = programme selection + cycle completion notification",
      'L — List solutions: (1) Audio + haptic programme dial — tactile ridges for each programme (colours replaced by textures), voice announcement of selected programme. (2) Braille labels on programme buttons. (3) App-controlled via VoiceOver. (4) Smart home assistant integration (Alexa: "Start a delicate wash for 30 minutes")',
      "E — Evaluate: Haptic + audio dial wins — works without app/internet, no smartphone required, accessible to elderly blind users",
      "Metrics: Task completion rate for blind users, error rate in programme selection, time to complete full laundry cycle independently, NPS of blind users",
    ],
  },
  {
    id: 37,
    title: "RCA: Swiggy — Only 3 of 10 New Users Return",
    source: "ISB BTC Co2024" as const,
    domain: "Food Tech",
    type: "RCA" as const,
    tags: [
      "RCA",
      "Retention",
      "Swiggy",
      "Navi Interview",
      "New Users",
      "D1 Retention",
    ],
    summary:
      "Swiggy spends $X on onboarding 10 new customers but only 3 return. Do an RCA and suggest methods to increase this number. Real Navi interview case from ISB BTC Co2024.",
    question:
      "Case: Swiggy spends $X on onboarding 10 new customers but sees that only 3 of them come back to the platform. Do an RCA and suggest methods to increase this number. [Answer identified demand-side and supply-side value drivers; interviewer asked to troubleshoot supply-side issues.] — Navi Interview, ISB BTC Co2024.",
    keyTakeaway:
      "D1/D7 retention for food delivery is heavily driven by first-order experience. The RCA decomposed into demand side (was the user hungry, did they find what they wanted?) and supply side (was the restaurant available, was delivery fast, was quality consistent?). Supply side issues were the primary driver.",
    approach: [
      "Problem: 70% of new users don't return after first order. D7 retention target = 30%+ (industry benchmark)",
      "Demand-side value drivers: Did the user want to order? (yes, they signed up). Did they find their desired cuisine? (friction: new users don't know how to filter). Did pricing feel competitive? (first-order discount creates expectation mismatch for 2nd order)",
      "Supply-side value drivers: Was the selected restaurant actually delivering? (restaurant availability fluctuates). Was delivery on time? (first-time users have no benchmark expectation). Was quality consistent? (no review history for new users to calibrate)",
      "Supply-side issues (deeper dive per interviewer): Restaurant ETA accuracy — Swiggy shows 25 min, actual delivery = 45 min. Quality inconsistency — first order at a new restaurant is a gamble. Driver availability in off-peak hours for impulse orders",
      'Solution 1 (hackathon/short-term): "New User Restaurant Shield" — curate top 20 restaurants per city that have 95%+ on-time delivery and 4.5+ rating for new user first orders. Default new users to this list',
      "Solution 2 (mid-term): ETA accuracy improvement — ML model using real-time kitchen prep data + driver location to show ±2 min accurate ETAs (not static estimates)",
      'Solution 3 (moonshot): "Swiggy Guarantee" — if D1 order is more than 15 min late, next order is free. Removes adoption risk completely',
      "Metrics: D1 retention, D7 retention, first-order NPS, time from sign-up to 2nd order",
    ],
  },
  {
    id: 38,
    title: "Strategy: ADP × Visa Payroll Card — Good Move or Bad?",
    source: "ISB BTC Co2024" as const,
    domain: "FinTech / HR Tech",
    type: "Strategy" as const,
    tags: [
      "Partnership",
      "Payroll",
      "B2B",
      "Strategy Evaluation",
      "ADP Interview",
    ],
    summary:
      "ADP partnered with Visa to launch a payroll card. Is this a good move or bad? Real ADP interview question from ISB BTC Co2024. Uses TAM/SAM/SOM and strategic fit analysis.",
    question:
      "ADP partnered with Visa to launch a card. Is this a good move or bad move? [Candidate used: identified problem they're solving → market analysis (TAM, SAM, SOM) → strategic fit → decision.] — ADP Interview, ISB BTC Co2024.",
    keyTakeaway:
      "Good move, conditional on Earned Wage Access (EWA) being the real product. ADP owns payroll data, Visa card captures real spend data — together they unlock EWA (access wages before payday) as a new revenue stream. Without EWA, it's just a commodity debit card with thin margins.",
    approach: [
      "Framework: Strategic fit + Market opportunity + Risks. First identify what problem this solves",
      "Problem ADP is solving: Payroll companies have high-value but under-monetised employee relationships. A Visa card makes every payroll disbursement a monetisable transaction",
      "Market opportunity: 70M+ US employees receiving payroll through ADP. If just 10% adopt the card = 7M cards × avg ₹5 interchange/month = significant recurring revenue",
      "Strategic fit: ADP owns payroll data (income, timing, employer) → Visa card captures spend data → Together = complete financial picture enabling credit underwriting and Earned Wage Access",
      "New revenue: (1) Interchange fees on every card transaction. (2) Earned Wage Access: employees access earned wages before payday for a fee (like a 0-interest salary advance). (3) Partner merchant offers based on spend data",
      "Risks: (1) Regulatory (CFPB oversight of earned wage access products). (2) Bank partner dependency (Visa requires issuing bank). (3) User adoption if employees already have preferred cards. (4) Competition from Gusto/Rippling who could launch similar products",
      "Verdict: GOOD MOVE if Earned Wage Access is the real product. Without EWA, it's a commodity debit card with thin margins and high competition",
    ],
  },
  {
    id: 39,
    title: "Guesstimate: Number of Uber Rides in Hyderabad",
    source: "ISB BTC Co2024" as const,
    domain: "Mobility",
    type: "Guesstimate" as const,
    tags: [
      "Guesstimate",
      "Uber",
      "Hyderabad",
      "Market Sizing",
      "Navi Interview",
    ],
    summary:
      "Estimate the number of Uber rides (cars only, point-to-point within city) in Hyderabad metro city. Real Navi interview guesstimate from ISB BTC Co2024.",
    question:
      "Guesstimate: I was asked to guess the number of Uber rides in Hyderabad metro city. Uber rides as in only cars from point A to point B, where A and B are within the Hyderabad city. — Navi Interview, ISB BTC Co2024.",
    keyTakeaway:
      "Bottom-up: Hyderabad population → income/age filter → cab users → Uber share → rides/user/day = estimate. Top-down gut check using Uber's disclosed India numbers. Final estimate: ~400,000 Uber rides/day in Hyderabad.",
    approach: [
      "Hyderabad metro population: ~1 Cr (10M)",
      "Working adults (18-60) who can afford Uber: ~30% of population = 3M. Further filter: monthly income >₹25,000 (Uber is premium vs. auto) = ~20% of total = 2M potential Uber users",
      "Of 2M potential users, active Uber users: ~40% = 800,000 Uber registered users in Hyderabad",
      "Rides per active user per day: 0.5 (users don't take Uber every day — avg 3-4 rides/week) = 800,000 × 0.5 = 400,000 rides/day",
      "Sanity check: Hyderabad is India's 4th largest city. Bangalore (similar size) reportedly has ~1M Uber rides/day. Hyderabad is less corporate/international = 40-60% of Bangalore's volume → 400,000-600,000/day. Consistent.",
      "Final answer: ~400,000 Uber rides per day in Hyderabad",
    ],
  },
  {
    id: 40,
    title: "Child Safety Tracker",
    source: "IIMC Casebook" as const,
    domain: "Safety",
    type: "Product Design" as const,
    tags: ["Safety", "Family", "Location", "Notifications"],
    summary:
      "Design a child safety tracker that helps parents monitor a child’s location, set safe zones, and respond quickly to emergencies.",
    question:
      "Design a child safety tracker product for parents and caregivers. Include user segments, key features, emergency response flow, and a plan for minimizing false alerts. — IIMC Casebook.",
    keyTakeaway:
      "The best solution balances real-time location visibility with privacy controls, clear alerts, and low friction for busy parents.",
    approach: [
      "Define primary users: parents, guardians, and caregivers who need child location visibility and reassurance.",
      "Use geofencing to create safe zones and notify caregivers when a child enters or leaves an area.",
      "Add quick emergency actions (SOS button, trusted contact dialer, location share) and reduce false positives with motion/context awareness.",
      "Measure success with alert accuracy, response time, daily active users, and repeat usage for trust-building.",
    ],
  },
  {
    id: 41,
    title: "Sustainable Practices in Households",
    source: "IIMC Casebook" as const,
    domain: "Sustainability",
    type: "Product Design" as const,
    tags: ["Sustainability", "Behavioural", "Home", "Energy"],
    summary:
      "Create a product that encourages Indian households to adopt sustainable daily habits across energy, water, and waste management.",
    question:
      "Design a digital solution that nudges households toward more sustainable practices without being intrusive or burdensome. — IIMC Casebook.",
    keyTakeaway:
      "Successful sustainability products make small, actionable habits easy to adopt and reward progress consistently.",
    approach: [
      "Identify the household decision maker and customise goals for electricity, water, waste segregation, and sustainable shopping.",
      "Use simple progress tracking, reminders, localised tips, and community benchmarks to motivate behaviour change.",
      "Provide actionable suggestions, one habit at a time, with suggested swaps and measurable impact estimates.",
      "Measure adoption with completed actions, repeat engagement, and self-reported habit persistence.",
    ],
  },
  {
    id: 42,
    title: "Cooking Assistant in Alexa/Echo",
    source: "IIMC Casebook" as const,
    domain: "Voice UX",
    type: "Product Design" as const,
    tags: ["Voice", "Kitchen", "Recipes", "Smart Home"],
    summary:
      "Design a voice-first cooking assistant for Alexa/Echo that helps users cook recipes hands-free, manage timers, and adapt instructions.",
    question:
      "Design a cooking assistant experience on a voice platform like Alexa. Focus on recipe guidance, kitchen safety, and helping users who are cooking with messy hands. — IIMC Casebook.",
    keyTakeaway:
      "A voice cooking assistant should provide clear step-by-step guidance, support interruptions gracefully, and keep the user's hands free.",
    approach: [
      "Prioritise voice-first interactions: start/resume recipes, set timers, answer ingredient substitutions, and handle pauses.",
      "Support different cooking styles with adaptive instructions based on user skill level and kitchen equipment.",
      "Build safety reminders and ingredient verification to reduce mistakes and maintain user trust.",
      "Measure success through task completion rate, repeat recipe use, and user satisfaction with timing and clarity.",
    ],
  },
  {
    id: 43,
    title: "Home System Solution to Control Devices",
    source: "IIMC Casebook" as const,
    domain: "Smart Home",
    type: "Product Design" as const,
    tags: ["IoT", "Smart Home", "Automation", "Control"],
    summary:
      "Design a home device control system that connects smart appliances and simplifies control for non-technical users.",
    question:
      "Design a smart home control solution that allows users to operate multiple devices from one interface with simple automations. — IIMC Casebook.",
    keyTakeaway:
      "The product should make device control intuitive, reduce setup friction, and provide a single source of truth for status and automation. ",
    approach: [
      "Map the user journey for onboarding devices, grouping them by room, and providing quick-access controls.",
      "Offer simple automations like schedules, scenes, and one-tap routines for common home scenarios.",
      "Ensure discovery and troubleshooting are clear for users who are not familiar with IoT setup.",
      "Measure success with device activation rate, automation usage, and user confidence in managing the home.",
    ],
  },
  {
    id: 44,
    title: "Fintech Lending Platform",
    source: "IIMC Casebook" as const,
    domain: "FinTech",
    type: "Product Design" as const,
    tags: ["Fintech", "Lending", "Credit", "Digital Wallet"],
    summary:
      "Design a lending platform for underserved users that supports credit discovery, loan eligibility, and responsible repayment.",
    question:
      "Design a digital lending product that helps users understand loan options, eligibility, and repayment risks. — IIMC Casebook.",
    keyTakeaway:
      "A strong fintech lending product balances credit access, transparency, and responsible borrowing with simple eligibility guidance.",
    approach: [
      "Define user segments: salaried, self-employed, and first-time borrowers.",
      "Use transparent eligibility criteria, personalised offers, and explainable EMIs to build trust.",
      "Add repayment reminders, credit score education, and a visible repayment calendar.",
      "Measure success with approvals, on-time repayment, and product NPS among borrowers.",
    ],
  },
  {
    id: 45,
    title: "Performance Improvement — YouTube",
    source: "IIMC Casebook" as const,
    domain: "Content",
    type: "Product Design" as const,
    tags: ["Video", "Engagement", "Recommendation", "Retention"],
    summary:
      "Design product improvements to increase watch-time, discovery, and user retention on a video platform like YouTube.",
    question:
      "YouTube wants to improve performance for creators and viewers. Propose product improvements that drive engagement while protecting content quality. — IIMC Casebook.",
    keyTakeaway:
      "Performance improvement should focus on helping users discover relevant content faster, reducing friction, and balancing long-term satisfaction. ",
    approach: [
      "Identify core problems: discovery gaps, creator monetisation, recommendation relevance, and content overwhelm.",
      "Propose solutions like improved topic-based collections, creator growth dashboards, and more transparent recommendation signals.",
      "Build guardrails to avoid clickbait and addictive patterns while increasing watch time through quality discovery.",
      "Measure success with watch-time per session, click-through rate on recommendations, and creator retention.",
    ],
  },
  {
    id: 46,
    title: "Returns in an Amazon Delivery Centre",
    source: "IIMC Casebook" as const,
    domain: "E-commerce",
    type: "RCA" as const,
    tags: ["RCA", "Logistics", "Returns", "E-commerce"],
    summary:
      "Investigate why return rates have spiked at an Amazon delivery centre and recommend the most critical corrective actions.",
    question:
      "Root cause analysis: Returns have increased in a delivery centre. Diagnose potential operational, product, and customer issues. — IIMC Casebook.",
    keyTakeaway:
      "A strong RCA should triangulate data from operations, product experience, and customer behaviour before recommending high-impact fixes.",
    approach: [
      "Segment returns by category, seller, region, and delivery time window.",
      "Check for operational issues: packing errors, damaged shipments, wrong item pick-up.",
      "Review customer-facing issues: unclear product descriptions, misleading images, or poor delivery timing expectations.",
      "Recommend targeted fixes such as improved quality checks, clearer product pages, and proactive customer communication.",
    ],
  },
  {
    id: 47,
    title: "User Engagement in WhatsApp during Covid-19",
    source: "IIMC Casebook" as const,
    domain: "Messaging",
    type: "RCA" as const,
    tags: ["RCA", "Engagement", "Messaging", "Pandemic"],
    summary:
      "Diagnose the drop in WhatsApp engagement during Covid-19 and recommend product changes to maintain user activity.",
    question:
      "Root cause analysis: WhatsApp user engagement fell during the pandemic. What could explain this, and how should the product respond? — IIMC Casebook.",
    keyTakeaway:
      "Engagement changes during a crisis often reflect shifting user needs rather than product failure; solutions should match new daily routines.",
    approach: [
      "Investigate usage by user type: personal chat, groups, businesses, and location-based behaviours.",
      "Consider external causes: lockdown patterns, reduced travel, or increased competition from video apps.",
      "Recommend features like richer group experiences, pandemic-specific stickers, and local community updates.",
      "Measure success with daily chat counts, time spent in group conversations, and reactivation of dormant users.",
    ],
  },
  {
    id: 48,
    title: "Movie Bookings in BookMyShow",
    source: "IIMC Casebook" as const,
    domain: "Entertainment",
    type: "RCA" as const,
    tags: ["RCA", "Tickets", "Conversion", "UX"],
    summary:
      "Identify the root cause of a decline in movie bookings on BookMyShow and propose product fixes to recover conversion.",
    question:
      "Root cause analysis: Movie bookings on an entertainment ticketing app are declining. Diagnose what is broken and why. — IIMC Casebook.",
    keyTakeaway:
      "Ticketing RCA should look at search, availability, pricing, and trust signals together to determine where users drop off.",
    approach: [
      "Analyze funnel drop-offs from search to seat selection to checkout.",
      "Check for inventory issues, high convenience fees, or payment failures that discourage booking.",
      "Evaluate user trust issues: unclear cancellation policies, COVID protocols, or seat availability mismatches.",
      "Recommend fixes such as simplified checkout, better showtime filters, and payment reliability improvements.",
    ],
  },
  {
    id: 49,
    title: "Disney Subscriptions",
    source: "IIMC Casebook" as const,
    domain: "Streaming",
    type: "RCA" as const,
    tags: ["RCA", "Subscription", "Churn", "Content"],
    summary:
      "Diagnose subscriber churn for a streaming service like Disney+ and suggest the most effective retention levers.",
    question:
      "Root cause analysis: Disney subscription metrics are weakening. Determine the likely causes and recommend retention actions. — IIMC Casebook.",
    keyTakeaway:
      "Churn RCA for streaming should separate content, pricing, and playback experience problems to avoid misguided fixes.",
    approach: [
      "Segment churn by tenure, price plan, geography, and content preferences.",
      "Assess whether the core issue is content fatigue, poor discovery, or pricing/package confusion.",
      "Recommend retention actions like personalised content rows, bundle offers, and better trial-to-paid conversion.",
      "Measure success with churn rate, viewing hours per subscriber, and content engagement for high-risk cohorts.",
    ],
  },
  {
    id: 50,
    title: "New Bank Accounts",
    source: "IIMC Casebook" as const,
    domain: "FinTech",
    type: "RCA" as const,
    tags: ["RCA", "Onboarding", "Banking", "Activation"],
    summary:
      "Diagnose why new bank account openings are lower than expected and recommend improvements to the onboarding funnel.",
    question:
      "Root cause analysis: New bank account signups have stalled. What are the possible causes and what should the bank fix first? — IIMC Casebook.",
    keyTakeaway:
      "Account opening problems often stem from friction in KYC, identity verification, or unclear value propositions during onboarding.",
    approach: [
      "Review the onboarding flow for friction points: document upload, OTP delays, credit bureau checks.",
      "Evaluate marketing funnel issues: unclear offer, poor value communication, or mismatch with target segment.",
      "Recommend experience improvements such as instant account previews, simpler KYC, and contextual help.",
      "Measure success with completion rate, time to account activation, and drop-off points in the funnel.",
    ],
  },
  {
    id: 51,
    title: "PhonePe Transactions",
    source: "IIMC Casebook" as const,
    domain: "FinTech",
    type: "RCA" as const,
    tags: ["RCA", "Transactions", "UPI", "Payments"],
    summary:
      "Discover the root cause behind a decline or inconsistency in PhonePe transaction success and propose product or operational fixes.",
    question:
      "Root cause analysis: PhonePe transaction success rates are unstable. Diagnose the issue and recommend a mitigation plan. — IIMC Casebook.",
    keyTakeaway:
      "Payment RCAs should combine bank, network, and product checks before suggesting fixes to avoid chasing the wrong problem.",
    approach: [
      "Segment transaction failures by payment method, issuing bank, time of day, and user segment.",
      "Check whether the issue is due to UPI infrastructure, app errors, or misconfigured merchant setup.",
      "Recommend solutions like smarter retry logic, clearer failure messages, and fallbacks for common bank errors.",
      "Measure success with success rate, failed transaction volume, and customer support ticket reduction.",
    ],
  },
  {
    id: 52,
    title: "Nykaa Returns",
    source: "IIMC Casebook" as const,
    domain: "Commerce",
    type: "RCA" as const,
    tags: ["RCA", "Returns", "Beauty", "Retention"],
    summary:
      "Analyze why Nykaa is seeing high return rates and propose changes to product pages, packaging, or logistics.",
    question:
      "Root cause analysis: Nykaa's beauty returns are rising sharply. Diagnose the reasons and select the most impactful interventions. — IIMC Casebook.",
    keyTakeaway:
      "Return rate RCAs need to distinguish between product misfit, expectation mismatch, and fulfilment errors.",
    approach: [
      "Analyze returns by category, price band, and customer comment reasons.",
      "Evaluate whether product descriptions, shade accuracy, or sample availability are causing dissatisfaction.",
      "Recommend better product visuals, trial-sized options, and improved return clarity.",
      "Measure success with return rate, repeat purchase rate, and customer satisfaction post-return.",
    ],
  },
  {
    id: 53,
    title: "Spotify Session Time",
    source: "IIMC Casebook" as const,
    domain: "Music",
    type: "RCA" as const,
    tags: ["RCA", "Engagement", "Audio", "Retention"],
    summary:
      "Find the cause of falling Spotify session lengths and recommend product changes to improve listening engagement.",
    question:
      "Root cause analysis: Spotify session time is decreasing. What could be causing the decline, and how should product respond? — IIMC Casebook.",
    keyTakeaway:
      "Session time issues are often due to discovery friction, irrelevant recommendations, or poor playlist continuity.",
    approach: [
      "Segment session time by user persona, playlist type, and device.",
      "Review recommendation quality, UI interruptions, and ad load for premium vs free users.",
      "Recommend improvements like better playlist transitions, personalised mixes, and contextual content suggestions.",
      "Measure success with session duration, songs per session, and satisfaction among at-risk users.",
    ],
  },
  {
    id: 54,
    title: "Splitwise App Critique",
    source: "IIMC Casebook" as const,
    domain: "Finance",
    type: "Product Design" as const,
    tags: ["Critique", "Splitting Bills", "Payments", "UX"],
    summary:
      "Critique the Splitwise app and propose improvements to make expense sharing easier and more transparent.",
    question:
      "Critique Splitwise as a product. What are its biggest problems and how would you improve the experience for roommates and groups? — IIMC Casebook.",
    keyTakeaway:
      "A good app critique identifies the core user problem, reduces friction, and makes accountability simpler for group expenses.",
    approach: [
      "Define personas: students, roommates, friends splitting trips and group expenses.",
      "Highlight issues like unclear payments, complex group settlements, and poor onboarding for new members.",
      "Propose simplified expense creation, smart reminders, and payment integrations with UPI or wallets.",
      "Measure success with faster settlement times, reduced disputes, and higher group retention.",
    ],
  },
  {
    id: 55,
    title: "Slack App Critique",
    source: "IIMC Casebook" as const,
    domain: "Communication",
    type: "Product Design" as const,
    tags: ["Critique", "Messaging", "Teams", "Notifications"],
    summary:
      "Evaluate Slack and recommend product improvements that reduce notification overload and improve collaboration.",
    question:
      "Critique Slack as a team communication product. What should be improved for better focus and faster decision-making? — IIMC Casebook.",
    keyTakeaway:
      "The best Slack improvements cut noise, make important messages easier to find, and help teams coordinate with less context switching.",
    approach: [
      "Identify pain points: channel fragmentation, notification overload, and hard-to-find information.",
      "Suggest solutions like smarter priority filtering, message summarisation, and better threaded conversation discovery.",
      "Balance real-time chat with async work by improving status signals and follow-up workflows.",
      "Measure success with reduced notification dismissals, faster resolution of mentioned requests, and satisfaction scores.",
    ],
  },
  {
    id: 56,
    title: "PhonePe App Critique",
    source: "IIMC Casebook" as const,
    domain: "FinTech",
    type: "Product Design" as const,
    tags: ["Critique", "Payments", "Wallet", "UX"],
    summary:
      "Critique PhonePe and recommend experience improvements for payments, discovery, and merchant engagement.",
    question:
      "Critique PhonePe's current product experience. How can it become easier to transact, discover offers, and trust merchant payments? — IIMC Casebook.",
    keyTakeaway:
      "A good critique for a fintech app focuses on simplifying core flows, reducing cognitive load, and increasing trust in payments and offers.",
    approach: [
      "Assess the landing flow, quick actions, and offer discovery experience.",
      "Identify confusion in bill payments, UPI transfer flows, and wallet recharges.",
      "Propose improvements like clearer payment reminders, merchant trust badges, and easier bill split flows.",
      "Measure success with transaction completion rate, time to payment, and feature adoption.",
    ],
  },
  {
    id: 57,
    title: "Flipkart Mobile App Critique",
    source: "IIMC Casebook" as const,
    domain: "Commerce",
    type: "Product Design" as const,
    tags: ["Critique", "E-commerce", "Search", "Recommendations"],
    summary:
      "Critique the Flipkart mobile app and propose ways to improve product discovery, checkout, and loyalty.",
    question:
      "Critique Flipkart’s mobile app. What are the biggest areas for improving search, discovery, and checkout? — IIMC Casebook.",
    keyTakeaway:
      "E-commerce critiques should make discovery more relevant, reduce decision fatigue, and simplify the checkout path.",
    approach: [
      "Evaluate the search experience, category navigation, and personalised recommendations.",
      "Identify friction in product detail pages, add-to-cart, and payment selection.",
      "Propose targeted improvements like smarter filters, clearer price comparisons, and faster checkout defaults.",
      "Measure success with conversion rate, search success, and time to purchase.",
    ],
  },
  {
    id: 58,
    title: "Google Calendar App Critique",
    source: "IIMC Casebook" as const,
    domain: "Productivity",
    type: "Product Design" as const,
    tags: ["Critique", "Calendar", "Scheduling", "Notifications"],
    summary:
      "Critique Google Calendar and recommend improvements for scheduling, meeting preparation, and time management.",
    question:
      "Critique Google Calendar. How can it better help users manage time, coordinate meetings, and reduce scheduling friction? — IIMC Casebook.",
    keyTakeaway:
      "Calendar product improvements should make it easier to find availability, reduce meeting overhead, and keep users organised.",
    approach: [
      "Review finding free time, meeting invitations, and cross-calendar conflicts.",
      "Identify issues like repetitive scheduling, unclear availability, and meeting context loss.",
      "Recommend features like smart agenda summaries, better location/context integration, and proactive time-blocking suggestions.",
      "Measure success with scheduling speed, declined meeting rates, and user satisfaction with weekly planning.",
    ],
  },
  {
    id: 59,
    title: "Zomato App Critique",
    source: "IIMC Casebook" as const,
    domain: "Food Tech",
    type: "Product Design" as const,
    tags: ["Critique", "Food Delivery", "Discovery", "Ratings"],
    summary:
      "Critique Zomato and recommend product improvements to make restaurant discovery and ordering more delightful.",
    question:
      "Critique Zomato’s app. How can it improve restaurant discovery, menu quality, and order confidence? — IIMC Casebook.",
    keyTakeaway:
      "A strong food delivery critique focuses on reducing choice overload, improving trust signals, and speeding ordering flows.",
    approach: [
      "Evaluate the search and filter experience for cuisine, ratings, and delivery time.",
      "Identify opportunities to improve review trust, menu clarity, and order customization.",
      "Propose better hero experiences for popular items, combo suggestions, and real-time order updates.",
      "Measure success with order completion rate, time-to-order, and average order value.",
    ],
  },
  {
    id: 60,
    title: "Spotify App Critique",
    source: "IIMC Casebook" as const,
    domain: "Music",
    type: "Product Design" as const,
    tags: ["Critique", "Music", "Discovery", "Personalization"],
    summary:
      "Critique Spotify and propose improvements that help users discover music, playlists, and podcasts more easily.",
    question:
      "Critique Spotify’s product experience. What would you improve to increase discovery and listening satisfaction? — IIMC Casebook.",
    keyTakeaway:
      "A good critique on a music app should improve personalisation, reduce friction in finding new content, and make navigation instinctive.",
    approach: [
      "Assess current recommendations, playlist discovery, and search response.",
      "Identify pain points in managing saved content, podcasts, and mixed media experiences.",
      "Recommend features like mood-based playlists, smarter radio creation, and clearer browse categories.",
      "Measure success with discovery click-through, playlist engagement, and session length.",
    ],
  },
  {
    id: 61,
    title: "Amazon Prime Video App Critique",
    source: "IIMC Casebook" as const,
    domain: "Streaming",
    type: "Product Design" as const,
    tags: ["Critique", "Video", "Content", "Navigation"],
    summary:
      "Critique Prime Video and suggest product improvements for content discovery, watchlists, and playback experience.",
    question:
      "Critique Amazon Prime Video. How can it make it easier to discover content, manage watchlists, and enjoy playback? — IIMC Casebook.",
    keyTakeaway:
      "Video streaming critiques should make it easier to find relevant content quickly and improve post-selection satisfaction.",
    approach: [
      "Evaluate the home screen, content categories, and personalised recommendations.",
      "Identify improvements around watchlist management, playback controls, and download handling.",
      "Suggest better content tagging, clearer price vs included indicators, and improved autoplay behaviour.",
      "Measure success with content discovery rate, watchlist usage, and completed watch ratio.",
    ],
  },
  {
    id: 62,
    title: "Kindle App Critique",
    source: "IIMC Casebook" as const,
    domain: "Reading",
    type: "Product Design" as const,
    tags: ["Critique", "Reading", "E-book", "User Experience"],
    summary:
      "Critique the Kindle app and recommend experience improvements for readers, book discovery, and annotation.",
    question:
      "Critique the Kindle reading experience. How can it improve book discovery, reading comfort, and note-taking? — IIMC Casebook.",
    keyTakeaway:
      "Reader-focused improvements should reduce friction in finding books, make reading less distracting, and simplify note capture.",
    approach: [
      "Assess the home, library, and reading modes for clarity and usability.",
      "Identify opportunities in search, recommendations, and social reading discovery.",
      "Propose better font controls, reading progress reminders, and exportable highlights.",
      "Measure success with reading session length, annotations created, and book discovery conversion.",
    ],
  },
  {
    id: 63,
    title: "Guesstimate: Daily Cafe Footfall",
    source: "IIMC Casebook" as const,
    domain: "Guesstimate",
    type: "Guesstimate" as const,
    tags: ["Guesstimate", "Market Sizing", "Cafes"],
    summary:
      "Estimate the daily footfall for a chain of cafes in a metro city using reasonable assumptions and sanity checks.",
    question:
      "Guesstimate the daily footfall for a popular cafe chain in a metro city. — IIMC Casebook.",
    keyTakeaway:
      "Use population, café penetration, and customer frequency assumptions to build a defensible estimate.",
    approach: [
      "Start with city population and the proportion of consumers who visit cafes regularly.",
      "Estimate café share by number of cafes and average daily customers per outlet.",
      "Adjust for weekday vs weekend variation and seasonal factors.",
      "Validate with a sanity check against known café volumes in similar cities.",
    ],
  },
  {
    id: 64,
    title: "Guesstimate: Fitness App Trainer Count",
    source: "IIMC Casebook" as const,
    domain: "Guesstimate",
    type: "Guesstimate" as const,
    tags: ["Guesstimate", "Fitness", "Market Sizing"],
    summary:
      "Estimate how many personal trainers an on-demand fitness app would need to serve a target user base.",
    question:
      "Guesstimate the number of trainers required for a mid-sized fitness app serving urban customers. — IIMC Casebook.",
    keyTakeaway:
      "Break the problem into users, usage frequency, trainer capacity, and utilisation rate.",
    approach: [
      "Estimate total active users, percentage that use trainer-led sessions, and sessions per week.",
      "Determine how many sessions a trainer can handle per day and their working days.",
      "Calculate total trainer demand and add a buffer for churn and peak season.",
      "Sanity-check the final number against known gym trainer ratios and market sizes.",
    ],
  },
  {
    id: 65,
    title: "Guesstimate: Daily Social Media Posts",
    source: "IIMC Casebook" as const,
    domain: "Guesstimate",
    type: "Guesstimate" as const,
    tags: ["Guesstimate", "Social Media", "Content"],
    summary:
      "Estimate how many posts are published each day on a popular social media platform.",
    question:
      "Guesstimate the number of posts created each day on a large social media platform. — IIMC Casebook.",
    keyTakeaway:
      "Use active users, posting frequency, and content habits to derive a reasonable daily estimate.",
    approach: [
      "Start with daily active users and the share of users who post content.",
      "Estimate average posts per active creator per day and include additional content like stories or reels.",
      "Adjust for platform behavior differences by region and purpose.",
      "Sanity-check the result against industry estimates of daily social media content volume.",
    ],
  },
  {
    id: 66,
    title: "GTM Case: Home Cooked Meal Delivery for Myntra",
    source: "IIMC Casebook" as const,
    domain: "Food Tech",
    type: "GTM" as const,
    tags: ["GTM", "Food Delivery", "Marketplace", "Retail"],
    summary:
      "Build a go-to-market plan for Myntra’s new home-cooked meal delivery service, targeting fashion-conscious urban customers.",
    question:
      "Design the GTM strategy for Myntra's home-cooked meal delivery service. Focus on user acquisition, positioning, and launch promotion. — IIMC Casebook.",
    keyTakeaway:
      "The GTM plan should connect Myntra’s brand strength with quality home cooking and convenience for its existing customer base.",
    approach: [
      "Define target customers: busy young professionals, fashion shoppers, and urban families.",
      "Position the product as trustworthy home food with aesthetic packaging and quick delivery.",
      "Use Myntra channels, influencer collaborations, and bundled fashion + food offers for launch.",
      "Measure success through acquisition cost, order frequency, and cross-sell conversion from Myntra users.",
    ],
  },
  {
    id: 67,
    title: "GTM Case: VR Fitness App",
    source: "IIMC Casebook" as const,
    domain: "Health Tech",
    type: "GTM" as const,
    tags: ["GTM", "Fitness", "VR", "Wellness"],
    summary:
      "Design a GTM plan for a VR fitness app that helps users exercise through immersive workouts.",
    question:
      "Create a go-to-market strategy for a VR fitness app targeting early adopters and health-conscious users. — IIMC Casebook.",
    keyTakeaway:
      "Successful VR fitness GTM focuses on clear value for motivation, differentiation from traditional workouts, and accessible hardware options.",
    approach: [
      "Identify the early adopter profile: tech-savvy fitness enthusiasts and home gym users.",
      "Position the app around immersive workouts, gamified progress, and social motivation.",
      "Launch with partnerships, trials on compatible headsets, and content tailored to beginner/intermediate users.",
      "Measure signups, session frequency, and retention by programme completion.",
    ],
  },
  {
    id: 68,
    title: "GTM Case: Sports Streaming for Netflix",
    source: "IIMC Casebook" as const,
    domain: "Streaming",
    type: "GTM" as const,
    tags: ["GTM", "Streaming", "Sports", "Content"],
    summary:
      "Develop a GTM strategy for Netflix entering live sports streaming to attract new subscribers.",
    question:
      "Design the go-to-market plan for Netflix's live sports streaming product. Focus on positioning, launch markets, and distribution. — IIMC Casebook.",
    keyTakeaway:
      "Sports streaming success depends on a clear value proposition, strong launch markets, and companion content that keeps users engaged off-season.",
    approach: [
      "Choose launch sports with strong digital viewership and Netflix-friendly rights structures.",
      "Position Netflix as the home for must-watch sports plus companion documentaries and short-form recaps.",
      "Use cross-promotion inside Netflix and partnerships with sports leagues and influencers.",
      "Measure trial conversion, watch time, and incremental subscriber growth from sports fans.",
    ],
  },
  {
    id: 69,
    title: "GTM Case: Next Big Thing for Amazon",
    source: "IIMC Casebook" as const,
    domain: "Strategy",
    type: "GTM" as const,
    tags: ["GTM", "Strategy", "Amazon", "Innovation"],
    summary:
      "Propose a new product launch and GTM plan for Amazon, focusing on a category with strong growth potential.",
    question:
      "Design the GTM strategy for Amazon's next big product launch. Choose a compelling category and explain launch cadence, customer acquisition, and partnerships. — IIMC Casebook.",
    keyTakeaway:
      "The right Amazon GTM strategy leverages scale, existing customer trust, and a differentiated value proposition. ",
    approach: [
      "Select a category where Amazon can leverage fulfilment, Prime membership, and data insights.",
      "Define customer segments and tailor launch messaging for early adopters and mainstream buyers.",
      "Use Amazon's own ecosystem for acquisition, bundling, and cross-selling.",
      "Measure adoption, cross-category retention, and the impact on Prime engagement.",
    ],
  },
  {
    id: 70,
    title: "Pricing Case: Kindle Fire HD",
    source: "IIMC Casebook" as const,
    domain: "Hardware",
    type: "Pricing" as const,
    tags: ["Pricing", "Hardware", "Tablets", "Value"],
    summary:
      "Set a pricing strategy for the Kindle Fire HD to balance affordability with hardware margins.",
    question:
      "Design the pricing strategy for the Kindle Fire HD tablet, considering competition, component costs, and consumer expectations. — IIMC Casebook.",
    keyTakeaway:
      "Pricing hardware requires balancing perceived value, ecosystem lock-in, and the competitive landscape of tablets and low-cost devices.",
    approach: [
      "Estimate manufacturing cost and target gross margin based on Amazon's strategic goals.",
      "Position the device as an affordable gateway to content and services rather than a premium tablet.",
      "Consider bundles, subsidies, and subscription-driven economics to lower the upfront price.",
      "Measure success with sell-through, attachment rates for content subscriptions, and market share.",
    ],
  },
  {
    id: 71,
    title: "Pricing Case: UberXL",
    source: "IIMC Casebook" as const,
    domain: "Mobility",
    type: "Pricing" as const,
    tags: ["Pricing", "Ridesharing", "Surge", "Demand"],
    summary:
      "Set the pricing strategy for UberXL to balance supply availability, driver incentives, and customer willingness to pay.",
    question:
      "Design the pricing model for UberXL. How should the app price larger ride options while ensuring enough driver supply and customer demand? — IIMC Casebook.",
    keyTakeaway:
      "Mobility pricing should align customer willingness-to-pay with driver earnings and marketplace liquidity.",
    approach: [
      "Segment customers by use case: family rides, airport trips, and group travel.",
      "Balance base fare, distance charge, and surge multipliers to keep supply healthy.",
      "Consider driver incentives, cancellation penalties, and transparent upfront pricing.",
      "Measure success with driver acceptance, ride completion rate, and average fare per trip.",
    ],
  },
  {
    id: 72,
    title: "Unconventional Case: Increase MS Paint Users",
    source: "IIMC Casebook" as const,
    domain: "Product Strategy",
    type: "Product Design" as const,
    tags: ["Unconventional", "Growth", "Productivity", "User Acquisition"],
    summary:
      "Propose product and growth ideas to increase daily users of MS Paint in a modern productivity ecosystem.",
    question:
      "Design a strategy to increase MS Paint usage. Who should use it, and what product changes would make it relevant today? — IIMC Casebook.",
    keyTakeaway:
      "Even legacy products can grow if the positioning shifts to a clear new user need and the experience is refreshed for modern habits.",
    approach: [
      "Define the core use cases: quick sketches, note-taking, teaching, and lightweight creative tasks.",
      "Propose new features like collaborative doodling, easy sharing, and templates for common tasks.",
      "Use bundling and discoverability within Windows and education ecosystems.",
      "Measure success with monthly active users, file creation rates, and frequency of use for target personas.",
    ],
  },
  {
    id: 73,
    title: "Unconventional Case: Smart Table for Restaurant",
    source: "IIMC Casebook" as const,
    domain: "Hospitality",
    type: "Product Design" as const,
    tags: ["Unconventional", "Restaurant", "IoT", "Dining"],
    summary:
      "Design a smart table solution for restaurants that improves ordering, payments, and guest experience.",
    question:
      "Design a smart restaurant table product that helps customers order food, request service, and pay without waiting. — IIMC Casebook.",
    keyTakeaway:
      "Smart restaurant hardware should simplify the dining experience while reducing staff friction and boosting order accuracy.",
    approach: [
      "Map the guest dining journey from seating to payment and identify friction points.",
      "Propose features like QR-based ordering, order status updates, and seamless bill splitting.",
      "Ensure staff notifications are efficient and privacy is preserved for diners.",
      "Measure success with order speed, table turnover, average bill value, and customer satisfaction.",
    ],
  },

];
