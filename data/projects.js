export const projects = [
  {
    id: '01',
    slug: 'voicecake-ai',
    title: 'Voicecake.io AI Voice Platform',
    category: 'Conversational AI',
    client: 'Voicecake',
    year: '2025',
    role: 'Head of Product Design & Conversational AI',
    services: 'Product Design, Conversational Design, UX Research, Platform Architecture',
    description: 'Built a production-grade AI voice platform from inception to 20,000+ monthly calls, powering autonomous multilingual phone agents across 39 languages for hospitality, healthcare, and enterprise.',
    challenge: 'Businesses were drowning in phone calls. Receptionist costs £28K+/year, available 9-5 only. Traditional IVR had 60%+ abandonment. Existing AI solutions cost £2.50-4/call, required 6-month implementations, were English-only, and felt robotic. 40% of calls went to voicemail resulting in lost customers.',
    solution: 'Built a 0-to-1 platform where non-technical users deploy AI agents in 48 hours. Designed "Progressive Autonomy" framework: Phase 1 (Answer & Route), Phase 2 (Information & Action), Phase 3 (Complex Orchestration). Created multi-agent system with real-time task execution (booking, payments, CRM updates). Engineered prompt frameworks balancing human-like conversation with task efficiency. Implemented 3-step guided builder making deployment accessible to hotel owners and clinic managers.',
    outcome: '20,000+ calls/month across 150 businesses in 12 industries. 87% call resolution without human intervention. 97% of callers didn\'t realize it was AI. £28K average annual customer savings. 2.3-minute average handling time. 4.2/5 customer satisfaction. Scaled from 3 to 39 languages. Profitable by Month 4. Customer quote: "It\'s like having a receptionist who never gets sick, never takes vacation, and works for £650/month."',
    image: '/images/voicecake-caller-flow-whiteboard.png',
    details: ['Conversational AI', 'Multi-agent Orchestration', '0-to-1 Product', 'Platform UX', 'Prompt Engineering'],
    screens: [
      '/images/voicecake-agent-wireframe.png',
      '/images/voicecake-dashboard-overview.png',
      '/images/voicecake-custom-tools.png'
    ],
    extended: {
      duration: 'January 2025 - Present',
      team: '2 engineers, 1 product manager, 1 operations, myself (0-to-1 build)',
      tools: ['Figma', 'Python', 'OpenAI API', 'Twilio', 'Custom Orchestration Platform', 'Analytics Dashboard'],
      figmaLink: {
        url: 'https://www.figma.com/design/6IUGtLd36aGBxbhFeUGPga/VOICECAKE-UX?node-id=0-1&t=qmT7VPyOje17dSH3-1',
        label: 'Figma UX Research Link'
      },
      
      problemStatement: 'Service businesses (hospitality, healthcare, real estate) lose significant revenue from missed calls. 62% of callers won\'t leave voicemail - they call competitors instead. Traditional solutions were either too expensive (£2.50-4/call), too rigid (6-month implementations), or too robotic (60% abandonment on IVR).',
      
      keyIssues: [
        'Receptionist costs £28K+/year, only available 9-5, gets sick, takes vacation',
        'Traditional IVR systems ("Press 1 for...") had 60%+ abandonment rates',
        'Existing AI voice solutions cost £2.50-4 per call (unaffordable for SMBs)',
        'Competitors required 6-month implementations and didn\'t adapt quickly',
        '40% of calls went to voicemail resulting in lost customers and revenue'
      ],
      
      researchMethods: [
        '25 customer interviews: hotel owners, clinic managers, property managers',
        'Competitive analysis: Tested 12 existing AI phone solutions',
        'Technical feasibility: Built proof-of-concept in 2 weeks with OpenAI + Twilio',
        'Market sizing: 4.2M SMBs in US/UK that fit target profile',
        'Beta testing: 5 hotels (Week 3-4), then 25 businesses (Week 5-8), monitoring 500+ calls/week'
      ],
      
      keyInsights: [
        { title: 'Good Enough > Perfect', detail: '"I don\'t need perfect AI. I need something that answers 24/7, gets basic info, and escalates when needed. 40% of calls go to voicemail and we lose those customers." - Hotel owner' },
        { title: 'Multilingual Critical', detail: 'Hotels serve international tourists. Need to handle Spanish, French, Chinese seamlessly without caller specifying language' },
        { title: 'Fast Escalation Builds Trust', detail: 'When AI doesn\'t know, saying "Let me get someone who can help" maintains satisfaction. 87% success doesn\'t mean 13% angry customers if handoff is smooth' },
        { title: 'Silence is Natural', detail: 'Customers pause to think (booking dates). Early AI jumped in too fast. 3-second silence tolerance before speaking improved conversation flow' },
        { title: 'Non-technical Setup Required', detail: 'Hotel owners don\'t code. Need 3-step wizard with smart defaults. Any more than 3 steps = abandonment' }
      ],
      
      designPrinciples: [
        { title: 'Progressive Autonomy', detail: 'Phase 1: Answer & Route (80% handled). Phase 2: Information & Action (60% resolved). Phase 3: Complex Orchestration (80% resolved)' },
        { title: 'Human-First Tone', detail: 'Never say "I\'m an AI" - just be helpful. Match caller\'s energy and formality' },
        { title: 'Brevity Matters', detail: 'Speak 40% less than humans naturally do. People hate verbose AI' },
        { title: 'Interrupt Handling', detail: 'Let customers interrupt without breaking conversation flow' },
        { title: 'Graceful Degradation', detail: 'When AI doesn\'t know, say so and offer human handoff immediately' },
        { title: 'Contextual Adaptation', detail: 'Formal for business, casual for restaurants, empathetic for healthcare' }
      ],
      
      platformUX: {
        challenge: 'Non-technical hotel owners need to create AI agents without coding',
        solution: 'Guided 3-Step Builder',
        steps: [
          'Step 1: Basic Information (name, phone, languages, hours)',
          'Step 2: What should AI do? (answer questions, take bookings, handle requests, payments, transfers)',
          'Step 3: Customize Voice & Personality (voice type, tone, instant preview)'
        ],
        keyDecisions: [
          '3 steps max - any more and users abandon',
          'Smart defaults - most users click through',
          'Instant preview - hear AI before deploying',
          'Progressive disclosure - advanced settings hidden'
        ]
      },
      
      conversationalDesign: {
        approach: 'Prompt Engineering + Testing Framework',
        basePersonality: 'Warm but professional, concise (40% less than humans), proactive, adaptive to caller energy. Never say you\'re AI. If unsure, transfer to human.',
        scenarioPrompts: [
          'Booking Request: Check availability, confirm details, take payment or email link, provide confirmation number',
          'Complaint Handling: Acknowledge frustration, don\'t defend, gather specifics, offer immediate manager transfer, stay calm'
        ],
        multiAgentOrchestration: 'Main Agent handles conversation → hands off to Payment Agent for secure collection → returns to Main Agent for confirmation'
      },
      
      testingIterations: [
        { phase: 'Week 1-2: Internal Red Team', findings: 'Called AI 100+ times, found 23 failure modes, iterated prompts', outcome: 'Fixed compound questions, silence handling, accent adaptation' },
        { phase: 'Week 3-4: Beta (5 Hotels)', findings: 'Monitored all calls real-time, daily feedback', outcome: 'AI got stuck on compound questions - trained to decompose: "Let me answer those one at a time"' },
        { phase: 'Week 5-8: Scaled Beta (25 Businesses)', findings: '500+ calls/week, analytics dashboard tracking', outcome: '87% success rate, 13% transfer rate, 2.3 min avg duration, 4.2/5 satisfaction' }
      ],
      
      criticalInsightsFromTesting: [
        'Silence Handling: Customers paused to think. Early AI jumped in too fast. Fix: 3-second tolerance',
        'Accent Adaptation: Struggled with heavy accents. Fix: Accent detection → slower speech + confirmation questions',
        'Emotional Intelligence: Complaints needed empathy not efficiency. Fix: Sentiment detection → adjust tone + immediate manager offer',
        'Cultural Adaptation: Different phone etiquette by culture. Fix: Tone adapts by detected language (formal German, warm Spanish)'
      ],
      
      quantitativeResults: [
        { metric: 'Monthly calls handled', value: '20,000+', detail: 'Across 150 businesses in 12 industries' },
        { metric: 'Call resolution rate', value: '87%', detail: 'No human intervention needed' },
        { metric: 'AI detection rate', value: '3%', detail: '97% of callers didn\'t realize it was AI' },
        { metric: 'Average savings per customer', value: '£28K/year', detail: 'vs. full-time receptionist' },
        { metric: 'Average handling time', value: '2.3 minutes', detail: 'Efficient yet natural conversation' },
        { metric: 'Customer satisfaction', value: '4.2/5', detail: 'Post-call surveys from callers' },
        { metric: 'Languages deployed', value: '39', detail: 'Started with 3, scaled across continents' },
        { metric: 'Customer retention', value: '97%', detail: 'Only 4 customers churned' },
        { metric: 'Time to profitability', value: 'Month 4', detail: 'Covered development costs' }
      ],
      
      businessImpact: '£120K MRR (Monthly Recurring Revenue) by Month 6. 150 active customers across hospitality, healthcare, real estate, finance, government. Expanded from UK to US, Europe, Middle East, Asia-Pacific. 24/7 availability captured after-hours calls (40% increase in bookings for hotels).',
      
      technicalAchievements: [
        'Multilingual Excellence: 39 languages with natural code-switching (English to Spanish mid-call)',
        'Real-Time Task Execution: Integrated with 50+ systems (booking, payments, CRMs), 2.1s avg completion, 99.2% accuracy',
        'Quality at Scale: 100,000+ total calls processed, 87% success rate maintained, 4.2/5 quality score',
        'Governance & Safety: Content filtering, HIPAA compliance (healthcare), PCI-DSS (payments), GDPR (Europe)'
      ],
      
      testimonial: {
        quote: 'I was skeptical about AI answering our phones. But Voicecake handles 90% of calls perfectly, and guests don\'t even realize it\'s not a person. It\'s like having a receptionist who never gets sick, never takes vacation, and works for £650/month.',
        author: 'Maria Rodriguez',
        role: 'Boutique Hotel Owner, San Francisco'
      },
      
      learnings: [
        'Prompt engineering is product design - every word affects behavior, test relentlessly',
        'Users forgive AI mistakes if recovery is good - fast escalation to human maintains satisfaction',
        'Real-world edge cases emerge at scale - first 1,000 calls teach more than 100 hours of internal testing',
        'UX for AI is different than apps - no screens to guide, must respond <2 seconds, errors must be conversational',
        'Vertical-specific customization matters - hotels need upselling, healthcare needs HIPAA, real estate needs lead qualification',
        'Non-technical users need 3-step setup max with smart defaults and instant preview'
      ],
      
      nextPhase: [
        'Proactive outbound calling (appointment reminders, follow-ups)',
        'Voice biometrics for security',
        'Emotional intelligence improvements (detect urgency, frustration, joy)',
        'Enterprise features (call center replacement for 100+ agents)'
      ]
    }
  },
  {
    id: '02',
    slug: 'dwp-fraud-error-system',
    title: 'DWP Benefit Error System',
    category: 'Government / Public Sector',
    client: 'Department for Work and Pensions (Coforge)',
    year: '2023-2024',
    role: 'Senior UX Researcher / Interaction Designer',
    services: 'UX Research, Interaction Design, Accessible Design, GDS Prototyping',
    description: 'Redesigned the benefit payment error reporting system for vulnerable claimants, achieving 90% task completion and full WCAG 2.1 AA compliance while reducing customer service calls by 65%.',
    challenge: 'Benefit claimants experiencing payment errors were in crisis mode - rent due, no money for food. The existing 47-field form had a 40% drop-off rate, used complex government jargon, and added stress rather than helping. 60% of users had vulnerabilities including mental health conditions, cognitive disabilities, or visual impairments. Average reading age was 12 years, but forms were written for policy experts.',
    solution: 'Applied crisis-aware design principles assuming users were stressed and cognitively overloaded. Simplified 47 fields to 12 essential questions across 4 logical steps. Rewrote all content at 12-year-old reading level with zero jargon. Built interactive prototypes in GOV.UK Prototype Kit with accessibility baked in from day one. Added progressive disclosure, contextual help at every question, and always offered a human escape hatch to speak with a real person. Conducted 3 rounds of usability testing including users with visual impairments, dyslexia, and anxiety disorders.',
    outcome: '90% task completion rate (up from 60%). 65% reduction in customer service calls. 45% faster resolution time (18 days to 10 days). 35% reduction in abandoned reports. 100% WCAG 2.1 AA compliance certified by Digital Accessibility Centre. Customer satisfaction improved from 2.1 to 4.3/5. £2.3M annual savings in reduced call center volume.',
    image: '/images/dwp-caxton-house.png',
    details: ['GDS Standards', 'Accessible Design', 'WCAG 2.1 AA', 'User Research', 'Vulnerable Users'],
    screens: [
      '/images/dwp-authenticate-signin.png',
      '/images/dwp-affinity-map.png',
      '/images/dwp-prototype-kit-training.png'
    ],
    extended: {
      duration: 'October 2023 - July 2024',
      team: 'Government Digital Service, Policy teams, Developers, Accessibility experts',
      tools: ['GOV.UK Prototype Kit', 'Figma', 'UserTesting', 'Optimal Workshop'],
      
      problemStatement: 'Benefit claimants were experiencing payment errors and delays, causing severe financial distress. The existing system for reporting and resolving errors was complex, inaccessible, and adding to their stress rather than helping.',
      
      keyIssues: [
        '40% drop-off rate in error reporting journey',
        'High volume of expensive customer service calls',
        'Customers with disabilities couldn\'t complete forms',
        'Anxiety-inducing language making stressed users more stressed',
        'No clear timeline on when issues would be resolved'
      ],
      
      researchMethods: [
        '12 stakeholder interviews (Policy teams, call center staff, fraud investigators)',
        '15 user interviews with benefit claimants via Citizens Advice',
        'Contextual inquiry: Shadowed 8 customer service calls',
        '6 months of error reports and drop-off analytics analysis'
      ],
      
      keyInsights: [
        { title: 'Emotional State', detail: 'Users were in crisis mode - rent due, no money for food. They couldn\'t process complex information.' },
        { title: 'Literacy Issues', detail: 'Average reading age was 12 years old, but forms used government jargon.' },
        { title: 'Trust Deficit', detail: 'Customers feared reporting errors would stop ALL benefits, making situation worse.' },
        { title: 'Accessibility Barriers', detail: '60% of users had at least one vulnerability (mental health, cognitive disability, visual impairment).' },
        { title: 'Need for Reassurance', detail: '#1 request: "Just tell me when I\'ll get paid"' }
      ],
      
      designPrinciples: [
        { title: 'Crisis-Aware', detail: 'Assume user is stressed, hungry, anxious - design for cognitive overload' },
        { title: 'Plain Language First', detail: 'No jargon, 12-year-old reading level, short sentences' },
        { title: 'Trust Through Transparency', detail: 'Tell them exactly what happens next and when' },
        { title: 'Accessibility Baked In', detail: 'WCAG 2.1 AA minimum, test with assistive tech users' },
        { title: 'Progressive Disclosure', detail: 'Only ask what\'s needed at each step, don\'t overwhelm' },
        { title: 'Human Escape Hatch', detail: 'Always offer easy path to speak with a real person' }
      ],
      
      beforeAfterExample: {
        before: 'Provide details of the discrepancy between the amount you believe you should have received and the amount credited to your nominated account, including relevant payment reference numbers and dates.',
        after: 'How much were you expecting to be paid?\nYou can find this in your payment schedule.\n[Text input] £____\n[Link: I don\'t know / I need help]'
      },
      
      accessibilityFeatures: [
        'High contrast text (4.5:1 minimum)',
        'Clear focus states for keyboard navigation',
        'ARIA labels for screen readers',
        'Option to save and return later (for users with concentration issues)',
        'Video explanation option (for users with reading difficulties)'
      ],
      
      testingRounds: [
        { round: 1, users: 8, disabilities: 3, successRate: '75%', keyChanges: 'Changed "discrepancy" to "error", added "where to find this" help' },
        { round: 2, users: 6, disabilities: 2, successRate: '88%', keyChanges: 'Fixed 3 ARIA issues found with NVDA/JAWS screen readers' },
        { round: 3, users: 5, disabilities: 0, successRate: '95%', keyChanges: 'Final validation - average time 8 mins (down from 23)' }
      ],
      
      quantitativeResults: [
        { metric: 'Task completion rate', before: '60%', after: '90%', change: '+30%' },
        { metric: 'Customer service calls', before: 'Baseline', after: '-65%', change: '65% reduction' },
        { metric: 'Resolution time', before: '18 days', after: '10 days', change: '45% faster' },
        { metric: 'Abandoned reports', before: 'Baseline', after: '-35%', change: '35% reduction' },
        { metric: 'WCAG compliance', before: 'Partial', after: '100% AA', change: 'Full certification' },
        { metric: 'Customer satisfaction', before: '2.1/5', after: '4.3/5', change: '+105%' }
      ],
      
      businessImpact: '£2.3M annual savings in reduced call center volume. Faster error resolution reduced hardship fund payouts. Full compliance with FCA/DWP Consumer Duty guidance on vulnerable customers.',
      
      testimonial: {
        quote: 'Kamran\'s work directly improved outcomes for some of our most vulnerable claimants. The accessibility and clarity he built in means people in crisis can actually get help when they need it most.',
        author: 'Sarah Mitchell',
        role: 'DWP Policy Lead'
      },
      
      learnings: [
        'Designing for crisis requires radical simplification - every word matters',
        'Accessibility isn\'t a checklist - it requires testing with real disabled users',
        'Progressive disclosure is critical for users under cognitive load',
        'Trust is built through transparency about what happens next',
        'GDS standards exist for a reason - using proven patterns accelerates delivery'
      ]
    }
  },
  {
    id: '03',
    slug: 'hsbc-digital-transformation',
    title: 'HSBC Business Banking Platform',
    category: 'Enterprise Banking',
    client: 'HSBC',
    year: '2016-2018',
    role: 'Lead UX/UI Consultant',
    services: 'UX Strategy, Design Systems, Team Leadership, Enterprise UX',
    description: 'Led UX transformation of HSBC\'s business banking platform serving UK enterprises, managing 12 designers across UK and India to redesign legacy systems affecting billions in deposits.',
    challenge: 'HSBC\'s business banking was a 20-year patchwork of 8 legacy systems rated 2.3/5 for usability. Top 20 UK business customers (£500M+ deposits) were threatening to switch to competitors launching modern platforms. £12M annual cost in call center volume due to confusing UI. Needed to transform while running legacy systems in parallel - couldn\'t turn off old systems during migration.',
    solution: 'Convinced leadership to invest 3 months building comprehensive design system first (120 components, interaction patterns, accessibility standards) - ensuring consistency and enabling distributed UK/India team to work in parallel. Focused initial research on top 20 clients rather than trying to serve everyone. Simplified 200+ pages to 40 core pages organized by user task. Redesigned payment flow from 7 screens/18 fields/4 minutes to 3 screens/8 fields/45 seconds using smart defaults.',
    outcome: 'NPS improved from 12 to 58 (+46 points). Customer satisfaction: 4.2/5 (up from 2.3/5). All top 20 clients retained (£2.3B deposits). 40% reduction in call center volume (£4.8M annual savings). 67% of payments now on mobile (up from 8%). 23% reduction in payment errors. Won "Best Business Banking Platform" - Business Moneyfacts 2018. Design system adoption: 100% of new features. UK/India team velocity increased 40% in Year 2.',
    image: '/images/hsbc-application-interface.png',
    details: ['Enterprise UX', 'Design Systems', 'Distributed Teams', 'Legacy Migration', 'Financial Services'],
    screens: [
      '/images/hsbc-expandable-table-component.png',
      '/images/hsbc-search-input-component.png'
    ],
    extended: {
      duration: 'September 2016 - May 2018',
      team: '12 designers (6 UK, 6 offshore India), 40 developers, Product, Business stakeholders',
      tools: ['Sketch', 'InVision', 'Zeplin', 'Jira', 'Abstract', 'Custom Design System'],
      
      problemStatement: 'HSBC\'s business banking platform was a patchwork of legacy systems built over 20 years. UK businesses rated it 2.3/5 for usability. Major competitors (Barclays, NatWest) were launching modern digital platforms. HSBC needed to transform or lose market share and key enterprise customers.',
      
      keyIssues: [
        'Top 20 UK business customers (£500M+ deposits) threatening to switch banks',
        'High call center volume due to confusing UI (£12M annually)',
        'Challenger banks (Tide, Starling) offering superior UX',
        '8 different legacy systems with inconsistent interfaces and terminology',
        'Complex migration: couldn\'t turn off legacy - needed parallel operation'
      ],
      
      researchMethods: [
        'In-depth interviews (20): CEOs, CFOs, Finance Directors of top clients - 90 mins each at their offices',
        'Contextual inquiry (8): Shadowed finance teams during banking workflows',
        'Journey mapping workshops (12): Mapped current state with actual customers',
        'Competitive analysis: Tested Barclays, NatWest, Tide platforms',
        'Data analysis: 6 months of analytics - where users struggled, what they used most',
        'Call center observation: Listened to 50+ support calls'
      ],
      
      keyInsights: [
        { title: 'Speed Over Features', detail: '"I don\'t need fancy dashboards. I need to authorize a £2M payment in 30 seconds between meetings." - CFO, Tech Sector' },
        { title: 'Multi-User Complexity', detail: 'Enterprise banking involved 5-10 people with different roles, permissions, approval workflows. Current system made this chaos' },
        { title: 'Mobile Critical', detail: 'CFOs weren\'t at desks - approved payments from airports, trains, home. Mobile experience was atrocious' },
        { title: 'Trust Through Transparency', detail: 'Businesses needed audit trails, visibility into processing, confirmation of what happened when' },
        { title: 'Consistency Matters', detail: 'Each legacy system had different navigation, terminology, interaction patterns. Users had to relearn UI constantly' }
      ],
      
      designStrategy: {
        decision: 'Design System First - 3 months upfront investment',
        rationale: [
          'Ensure consistency across 8 legacy systems being replaced',
          'Allow distributed teams (UK + India) to work in parallel',
          'Speed up delivery long-term',
          'Create foundation for future innovation'
        ],
        components: [
          'UI Library: 120 components (buttons, forms, tables, navigation)',
          'Interaction Patterns: Payment flows, approvals, multi-step processes',
          'Content Guidelines: Tone of voice, terminology, error messaging',
          'Accessibility Standards: WCAG 2.1 AA baked into every component',
          'Code Library: React components for developers'
        ]
      },
      
      designPrinciples: [
        { title: 'Speed First', detail: 'Optimize for 5 most common tasks: payments, balances, transfers, approvals, reports' },
        { title: 'Role-Based', detail: 'Different users see different interfaces based on their role' },
        { title: 'Mobile Parity', detail: 'Full functionality on mobile, not a reduced "lite" version' },
        { title: 'Undo/Edit', detail: 'Let users fix mistakes without calling support' },
        { title: 'Predictable', detail: 'Every section follows same patterns - learn once, use everywhere' },
        { title: 'Transparent', detail: 'Show exactly where money is, what\'s processing, what\'s complete' }
      ],
      
      informationArchitecture: 'Simplified from 200+ pages to 40 core pages organized by user task, not bank structure',
      
      executionPhases: [
        {
          phase: 'Phase 1: Design System Build (Months 1-3)',
          team: 'Working with 2 senior designers',
          deliverables: [
            'Component Design: 120 components sketched, prototyped, tested',
            'Documentation: Every component had usage guidelines, accessibility notes, code specs',
            'Developer Collaboration: Weekly pairing sessions to ensure design feasibility',
            'Governance: Established design review process, contribution guidelines'
          ]
        },
        {
          phase: 'Phase 2: Core Journeys (Months 4-9)',
          team: '12 designers (6 UK onshore, 6 India offshore)',
          priorities: [
            'Priority 1 - Payments: Single-payment flow, multi-level approvals, scheduling, templates, beneficiaries',
            'Priority 2 - Account Management: Dashboard for 200+ accounts, transaction history, statements',
            'Priority 3 - User Management: Admin interface, permissions, approval chains, audit logging'
          ]
        }
      ],
      
      paymentFlowExample: {
        oldSystem: '7 screens, 18 form fields, 4 minutes average',
        newSystem: '3 screens, 8 form fields (smart defaults), 45 seconds average',
        improvements: [
          'Dropdown showing recent/saved/new payees',
          'Smart account selection showing available balance',
          'Combined scheduling with main form',
          'Processing time estimate shown upfront'
        ]
      },
      
      offshoreTeamManagement: [
        'Daily standups (6am UK / 11:30am India)',
        'Design critique twice weekly',
        'Shared Sketch libraries via Abstract',
        'Detailed handoff specs in Zeplin',
        'Monthly in-person visits to India office'
      ],
      
      testingStrategy: [
        {
          method: 'Remote Unmoderated Testing',
          frequency: 'Continuous',
          approach: 'UserTesting.com with business banking users, 20 tests per sprint, 5 key task scenarios',
          purpose: 'Identified issues before formal review'
        },
        {
          method: 'Client Validation Sessions',
          frequency: 'Monthly',
          approach: 'Brought prototypes to top 10 clients quarterly, 2-hour sessions at their offices, real scenarios using sanitized data',
          purpose: 'Documented feedback, prioritized changes'
        },
        {
          method: 'A/B Testing',
          frequency: 'Post-Launch',
          approach: 'Tested payment flow variations with 10% traffic',
          purpose: 'Measured completion rates, time-on-task, errors, iterated based on data'
        }
      ],
      
      keyIterations: [
        {
          issue: 'Bulk Payments Too Complex',
          finding: 'Users uploading 500+ payments couldn\'t easily review before submitting',
          fix: 'Added validation preview, error highlighting, bulk edit capabilities',
          result: '90% reduction in failed bulk uploads'
        },
        {
          issue: 'Approvers Didn\'t Have Context',
          finding: 'Approvers didn\'t know why a payment was needed',
          fix: 'Added "Notes to approver" field, payment history context',
          result: '40% faster approval times'
        },
        {
          issue: 'Mobile Payment Entry Tedious',
          finding: 'Users wanted to approve on mobile but not enter new payments',
          fix: 'Prioritized approval workflows on mobile, kept complex entry on desktop',
          result: '85% of approvals now done on mobile'
        }
      ],
      
      rolloutStrategy: [
        {
          phase: 'Beta (Months 10-12)',
          scope: 'Top 20 clients only',
          approach: 'Legacy available as fallback, weekly feedback sessions, rapid iteration'
        },
        {
          phase: 'Gradual Migration (Months 13-18)',
          scope: '10% of customers per week',
          approach: 'Monitor support calls, errors, complaints. Legacy remains available. Training materials and webinars'
        },
        {
          phase: 'Full Launch (Month 18+)',
          scope: 'All customers migrated',
          approach: 'Legacy decommissioned, ongoing optimization based on data'
        }
      ],
      
      quantitativeResults: [
        { metric: 'Net Promoter Score', before: '12', after: '58', change: '+46 points' },
        { metric: 'Customer satisfaction', before: '2.3/5', after: '4.2/5', change: '+83%' },
        { metric: 'Top client retention', before: 'At risk', after: '100%', change: '£2.3B deposits retained' },
        { metric: 'Payment errors', before: 'Baseline', after: '-23%', change: 'Better validation, clearer UI' },
        { metric: 'Call center volume', before: '£12M/year', after: '-40%', change: '£4.8M annual savings' },
        { metric: 'Payment processing time', before: '4 mins', after: '2.2 mins', change: '45% faster' },
        { metric: 'Mobile payment adoption', before: '8%', after: '67%', change: '+737%' }
      ],
      
      businessImpact: 'Prevented customer churn: Estimated £2.3B in deposits retained. Competitive positioning: Used in sales pitches to win new business clients. Awards: Won "Best Business Banking Platform" - Business Moneyfacts 2018.',
      
      teamImpact: [
        'Design system adoption: 100% of new features used system components',
        'Cross-team velocity: UK and India teams delivered 40% more in Year 2',
        'Quality improvement: Design QA issues reduced 75%'
      ],
      
      testimonial: {
        quote: 'The new HSBC platform finally matches what we expect from enterprise software in 2018. Kamran\'s team actually listened to how we work and designed around our reality, not around the bank\'s org chart.',
        author: 'CFO',
        role: 'FTSE 100 Company'
      },
      
      learnings: [
        'Design systems are force multipliers - initial investment pays off exponentially',
        'Enterprise UX requires understanding business workflows, not just individual users',
        'Managing distributed teams requires over-communication and strong governance',
        'Parallel system operation during migration is painful but necessary at scale',
        'Winning trust of skeptical enterprise customers requires showing, not telling',
        'Focusing on top customers first (not trying to serve everyone) accelerates learning'
      ]
    }
  },
  {
    id: '04',
    slug: 'praxia-bank',
    title: 'Praxia Bank',
    category: 'Mobile Banking',
    client: 'EY-Seren / Praxia Bank',
    year: '2019',
    role: 'Lead Principal UX Design Consultant',
    services: 'UX Research, Design Sprints, Design Systems, Team Leadership',
    description: 'Led the UX design for Greece\'s first and only challenger bank, creating a new paradigm for mobile and web banking backed by Atlas Merchant Capital.',
    challenge: 'Without an established presence in Greece, we had no existing customers to recruit for research. We needed to understand the Greek banking market from scratch while delivering a world-class mobile and web banking experience that could compete with established players.',
    solution: 'Introduced 5-day design sprints to align disconnected teams around user needs. Conducted extensive field studies including guerilla research, customer interviews, and empathy mapping. Created detailed personas and journey maps. Built a comprehensive design system for responsive web and native mobile applications.',
    outcome: 'Successfully launched Greece\'s first challenger bank with aligned, cohesive design across web and mobile. Created a scalable design system for future development and established new standards for user experience in the Greek financial sector.',
    image: '/images/praxia-design-library.png',
    details: ['Mobile Banking', 'Design Systems', 'Design Sprints', 'UX Research'],
    screens: [
      '/images/praxia-desktop-micro-interactions.mp4',
      '/images/praxia-account-detail-complete.mp4',
      '/images/praxia-dashboard-cards.png'
    ]
  },
  {
    id: '05',
    slug: 'nationwide-later-life',
    title: 'Later Life Mortgages',
    category: 'Financial Services',
    client: 'Nationwide Building Society',
    year: '2018-2019',
    role: 'Lead Product Designer',
    services: 'Service Design, Accessible Design, Design Systems, Dual-User Experience',
    description: 'Designed a high-stakes, two-sided financial service for vulnerable customers aged 55-88 while simultaneously building Nationwide\'s first cross-team responsive design system.',
    challenge: 'Nationwide saw a gap: members aged 55–88 needed tailored borrowing options (downsizing, equity release, debt consolidation), but the market was a mess of jargon and "product-first" thinking. The twist? This was a synchronous, two-sided experience: customers in-branch viewing a mirrored screen (often tech-hesitant and emotionally charged) and remote mortgage consultants driving the journey via live video.',
    solution: 'Created a journey that felt like a supportive conversation, not a clinical transaction. Facilitated two design sprints to bridge underwriting logic with human empathy. Established "Radical Transparency" principle where customers saw explanations for every number consultants viewed. Designed step-wise guidance, plain-language UI, and a persistent MC dashboard. Simultaneously led creation of Nationwide\'s first responsive design system using Atomic Design principles with heavy accessibility focus.',
    outcome: '~30% reduction in design/dev time for subsequent features using the new system. Consultants reported feeling more confident during sensitive later-life appointments. Moved Nationwide from "page-based" to "system-based" thinking. Created living design ecosystem through weekly audits where better solutions became new standards.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1000&auto=format&fit=crop',
    details: ['Dual-User Experience', 'Accessible Design', 'Design Systems', 'Service Design', 'Financial Services'],
    screens: [
      '/images/nationwide-underwriter-diagram.png',
      '/images/nationwide-affordability-results.png',
      '/images/nationwide-compare-products-final.png'
    ],
    extended: {
      duration: 'June 2018 - March 2019',
      team: 'Cross-functional teams (Later Life, Remo, Switcher), Mortgage Consultants, Design Council',
      tools: ['Sketch', 'InVision', 'Atomic Design System', 'Accessibility Testing Tools'],
      
      problemStatement: 'Nationwide identified an underserved demographic: members aged 55–88 who needed tailored borrowing options for downsizing, equity release, or debt consolidation. The market was filled with jargon and "product-first" thinking. The unique challenge was designing a synchronous, two-sided experience where customers (in-branch, tech-hesitant, emotionally charged) viewed a mirrored screen while remote Mortgage Consultants (expert users) drove the journey via live video.',
      
      mission: 'Design a high-stakes, two-sided financial service for a vulnerable demographic while simultaneously building Nationwide\'s first cross-team responsive design system.',
      
      theForgottenDemographic: {
        title: 'The Forgotten Demographic',
        customerSide: 'In-branch, viewing mirrored screen, often tech-hesitant and emotionally charged',
        consultantSide: 'Remote expert user driving the journey via live video',
        goal: 'Create a journey that felt like a supportive conversation, not a clinical transaction, while ensuring the Consultant had the power of a cockpit'
      },
      
      researchStrategy: {
        title: 'The "Proxy" Strategy',
        challenge: 'In a regulated environment, getting 80-year-olds into a lab on day one is tough',
        approach: 'Consultant-First Research Model',
        methods: [
          'Expert Interviews: Shadowed 5+ Mortgage Consultants to see where they were "hacking" old systems',
          'Pattern Observation: MCs were acting as "translators" - spending more time explaining acronyms (LTV, HPI) than giving advice',
          'Customer Pain Synthesis: Customers needed security - "Will I still own my home?" and "Can I afford to help my grandkids?"'
        ],
        keyInsight: 'Customers weren\'t just looking for rates; they were looking for security and understanding'
      },
      
      designSprints: [
        {
          sprint: 'Sprint 1: The Backbone',
          focus: 'Eligibility vs. Affordability logic',
          breakthrough: 'Moved team away from "Lorem Ipsum" and forced use of real, messy financial data early on',
          outcome: 'Established foundation for accurate, realistic design'
        },
        {
          sprint: 'Sprint 2: The Refinement',
          focus: 'Product Comparison',
          innovation: 'Instead of dense tables, designed "Outcome Cards" visualizing impact of three core paths: Capital + Interest, Interest Only, and Interest Roll-Up',
          outcome: 'Made complex financial products understandable at a glance'
        }
      ],
      
      designPrinciples: [
        { 
          title: 'Radical Transparency', 
          detail: 'Established "Mirrored Clarity" - if consultant saw a number, customer saw the explanation of that number'
        },
        { 
          title: 'Step-wise Guidance', 
          detail: 'Broke the "wall of questions" into bite-sized, contextual steps'
        },
        { 
          title: 'Plain-Language UI', 
          detail: 'Replaced "Equity Release" with "What you\'ll still own"'
        },
        { 
          title: 'At-a-Glance MC Dashboard', 
          detail: 'Designed persistent sidebar for consultant so they never had to "tab away" from customer to check a figure'
        }
      ],
      
      keyFeatures: [
        {
          feature: 'Mirrored Clarity',
          description: 'Customer and consultant see synchronized information with appropriate context for each role'
        },
        {
          feature: 'Outcome Cards',
          description: 'Visual comparison of mortgage products showing real impact rather than dense financial tables'
        },
        {
          feature: 'Persistent MC Dashboard',
          description: 'Consultant sidebar with all key information visible without leaving customer view'
        },
        {
          feature: 'Plain-Language Translations',
          description: 'Complex financial terms explained in simple, reassuring language customers understand'
        }
      ],
      
      designSystemChallenge: {
        title: 'A Culture of "Reinventing the Wheel"',
        problem: 'Three different teams (Later Life, Remo, Switcher) were all designing three different "Address Search" components - waste of talent and threat to brand trust',
        insight: 'While building the mortgage platform, noticed systemic inefficiency that needed addressing'
      },
      
      designSystemStrategy: {
        title: 'Inclusion over Mandate',
        approach: 'Formed a Design Council - multi-disciplinary squad of designers and devs from all three product areas',
        philosophy: 'Didn\'t just build a library; built a shared language',
        outcome: 'Top-down mandates fail; collaborative ownership succeeds'
      },
      
      designSystemArchitecture: {
        title: 'Atomic & Accessible',
        framework: 'Atomic Design principles with heavy focus on Accessibility (A11y)',
        layers: [
          {
            level: 'Atoms',
            components: 'Typography scales optimized for older eyes; semantic color palette (Success, Warning, Error)'
          },
          {
            level: 'Molecules',
            components: 'Form rows with integrated validation and helper text'
          },
          {
            level: 'Organisms',
            components: 'Complex, reusable assemblies like the "Product Comparison Module" pioneered in mortgage project'
          }
        ]
      },
      
      designSystemGovernance: {
        title: 'Governance that Actually Works',
        innovation: 'Introduced Weekly Design Audits',
        process: 'Pin screens to wall and ask: "Is this a new pattern, or a deviation?"',
        evolution: 'If it was a better solution, it became the new standard',
        result: 'Turned design system from static file into living, breathing ecosystem'
      },
      
      quantitativeResults: [
        { metric: 'Design/dev time for subsequent features', value: '~30% reduction', detail: 'By leveraging the new design system' },
        { metric: 'Consultant confidence', value: 'Significantly improved', detail: 'Reported feeling more "in control" during sensitive appointments' },
        { metric: 'Team efficiency', value: 'Eliminated redundancy', detail: 'Stopped three teams from building three different versions of same components' },
        { metric: 'System adoption', value: '100%', detail: 'Design system became standard across Later Life, Remo, and Switcher teams' }
      ],
      
      businessImpact: 'Moved Nationwide from "page-based" thinking to "system-based" thinking. Empowered consultants to handle sensitive conversations with confidence. Created scalable foundation for future financial products. Demonstrated that accessible design is not just ethical but a competitive advantage.',
      
      platformImpact: [
        'Speed to Market: Subsequent features saw ~30% reduction in design/dev time',
        'Empowered Staff: Consultants felt more confident during sensitive later-life appointments',
        'Scalability: Moved Nationwide from page-based to system-based thinking',
        'Accessibility: Typography and color systems optimized for older demographic'
      ],
      
      testimonial: {
        quote: 'This project proved that even in highly regulated, "boring" sectors like banking, great design is a competitive advantage. My role wasn\'t just to "make it look good"—it was to translate complex financial risk into a humane, accessible digital service.',
        author: 'Kamran Aslam',
        role: 'Lead Product Designer'
      },
      
      learnings: [
        'Consultant-first research can unlock insights about end users in regulated environments',
        'Two-sided experiences require designing for empathy AND efficiency simultaneously',
        'Plain language isn\'t "dumbing down" - it\'s respecting users\' emotional state',
        'Design systems succeed through inclusion, not mandate',
        'Weekly audits turn static libraries into living ecosystems',
        'Accessible design for vulnerable demographics is both ethical imperative and business advantage',
        'Complex financial products can be made human through radical transparency'
      ],
      
      uniqueContribution: 'Demonstrated that designing for vulnerable demographics requires both technical excellence and deep empathy. Created a dual-user experience that balanced consultant efficiency with customer reassurance. Built Nationwide\'s first truly collaborative design system through inclusive governance rather than top-down mandate.'
    }
  },
  {
    id: '06',
    slug: 'style-com',
    title: 'Style.com',
    category: 'E-commerce',
    client: 'Condé Nast',
    year: '2014-2015',
    role: 'Lead IA / Service Design Consultant',
    services: 'Information Architecture, Service Design, Visual Design',
    description: 'Led IA and service design for Condé Nast\'s entry into luxury e-commerce, creating seamless experiences for high-end fashion customers including Chanel, Louis Vuitton, and Gucci.',
    challenge: 'Fashion e-commerce sites struggle with cluttered, cumbersome navigation. We needed to create a modern, premium experience matching the sophistication expected by luxury brand customers while solving complex IA challenges.',
    solution: 'Conducted competitor analysis of ASOS, Net-a-Porter, and other fashion sites. Used card sorting and tree testing to create intuitive navigation architecture. Designed with generous white space, monochrome typography, and magazine-style layouts. Created the "cloud" saving feature based on user research.',
    outcome: 'Successfully launched Condé Nast\'s first major e-commerce platform with intuitive navigation for complex fashion catalogues. The "cloud" feature became a major differentiator. Platform later acquired by Farfetch.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop',
    details: ['Information Architecture', 'E-commerce', 'Luxury Fashion', 'Visual Design'],
    screens: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '07',
    slug: 'conde-nast-magazines',
    title: 'Vogue & GQ Digital',
    category: 'Digital Publishing',
    client: 'Condé Nast',
    year: '2014-2015',
    role: 'Product Designer / Senior UX Consultant',
    services: 'Product Design, User Research, Prototyping',
    description: 'Created a shoppable tray feature for Vogue and GQ digital magazines, allowing readers to purchase products while maintaining an immersive reading experience.',
    challenge: 'Enable commerce within digital magazines without interrupting the premium reading experience. Users needed to shop seamlessly while remaining engaged with editorial content.',
    solution: 'Designed a two-tier shoppable tray system: mid-height tray for browsing while reading, full-screen mode for focused shopping. Conducted guerilla testing in London and Oxford, plus user interviews with incentivized subscribers. Used Gestalt principles for product grouping.',
    outcome: 'Created seamless integration between editorial content and commerce. Maintained premium reading experience while enabling purchases. Developed reusable patterns for future magazine apps validated through unmoderated usability testing.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop',
    details: ['Digital Publishing', 'Product Design', 'User Research', 'iPad Apps'],
    screens: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop'
    ]
  }
]
