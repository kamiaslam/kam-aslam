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
    title: 'DWP - Fraud & Error Benefit System',
    category: 'Government / Public Sector',
    client: 'Department for Work and Pensions (DWP) via Coforge',
    year: '2023-2024',
    role: 'Senior User Researcher / Interaction Designer',
    services: 'User Research, Interaction Design, GDS Prototyping, Accessibility, Service Design',
    description: 'Led user research and interaction design for a critical government benefit fraud and error system, achieving full WCAG 2.2 compliance while reducing development rework by 35% through prototype-driven validation.',
    challenge: 'The DWP needed to digitise complex fraud and error benefit processes while ensuring accessibility for all citizens, including vulnerable users. Existing workflows were paper-based, inconsistent across regions, and difficult to navigate. The challenge was translating intricate policy regulations into intuitive digital services that met stringent GDS Service Standards and WCAG 2.2 accessibility requirements.',
    solution: 'Built end-to-end service journeys using the GOV.UK Prototype Kit to test policy interpretations and UI options before any engineering commitment. Conducted extensive moderated and unmoderated usability testing to refine content design, interaction patterns, and error states. Collaborated closely with policy teams to translate complex regulations into user-centred flows. Applied Design Thinking and Lean UX methodologies within agile delivery teams to ensure rapid iteration based on real user feedback.',
    outcome: '35% reduction in development rework through prototype-driven validation. 28% improvement in task completion rates. Full WCAG 2.2 AA accessibility compliance verified through independent audit. Successfully aligned service with GDS Service Standard, passing all 14 points. Established reusable interaction patterns adopted by other DWP digital teams.',
    image: '/images/dwp-caxton-house.png',
    details: ['GDS Standards', 'WCAG 2.2', 'GOV.UK Prototype Kit', 'User Research', 'Service Design'],
    screens: [
      '/images/dwp-authenticate-signin.png',
      '/images/dwp-affinity-map.png',
      '/images/dwp-prototype-kit-training.png'
    ],
    
    extended: {
      duration: 'October 2023 - July 2024',
      team: 'Policy Teams, Content Designers, Developers, Business Analysts, Accessibility Specialists',
      tools: ['GOV.UK Prototype Kit', 'Figma', 'Miro', 'Optimal Workshop', 'Lookback'],
      
      problemStatement: 'The Department for Work and Pensions needed to transform how fraud and error cases in the benefit system were identified, investigated, and resolved. The existing process relied on fragmented paper-based workflows, inconsistent regional practices, and systems that didn\'t meet modern accessibility standards. Citizens navigating these processes - often during stressful life circumstances - faced confusing forms, unclear next steps, and lengthy resolution times.',
      
      keyIssues: [
        'Paper-based workflows creating delays and inconsistencies across regional offices',
        'Complex policy regulations difficult to translate into clear user journeys',
        'Existing digital touchpoints failing WCAG accessibility requirements',
        'No standardised approach to testing policy interpretations before development',
        'High development rework costs from building features based on assumptions',
        'Vulnerable users struggling to navigate complex benefit processes'
      ],
      
      context: {
        department: 'Department for Work and Pensions (DWP)',
        deliveryPartner: 'Coforge',
        location: 'United Kingdom',
        framework: 'GDS Service Standard',
        complianceRequirement: 'WCAG 2.2 AA'
      },
      
      myRole: {
        title: 'Senior User Researcher / Interaction Designer',
        responsibilities: [
          'Led user research strategy and execution across the service lifecycle',
          'Designed end-to-end interaction patterns using GOV.UK Design System',
          'Built functional HTML prototypes in GOV.UK Prototype Kit for testing',
          'Facilitated collaboration between policy, design, and development teams',
          'Ensured WCAG 2.2 accessibility compliance throughout design process',
          'Conducted moderated and unmoderated usability testing sessions',
          'Translated complex policy requirements into user-centred service flows'
        ]
      },
      
      researchMethods: [
        'Stakeholder interviews with policy leads, fraud investigators, and operations managers',
        'User interviews with benefit claimants who had experienced fraud/error processes',
        'Contextual inquiry sessions observing caseworkers processing claims',
        'Card sorting to understand mental models around benefit categories',
        'Tree testing to validate information architecture decisions',
        'Moderated usability testing with GOV.UK Prototype Kit prototypes',
        'Unmoderated remote testing for scale validation',
        'Accessibility testing with assistive technology users'
      ],
      
      keyInsights: [
        { 
          title: 'Policy Complexity', 
          detail: 'Benefit fraud and error regulations contained nuances that even experienced caseworkers interpreted differently. Digital services needed to encode these rules unambiguously while remaining flexible for edge cases.' 
        },
        { 
          title: 'Emotional Context', 
          detail: 'Users navigating fraud/error processes were often stressed, confused, or fearful about their benefit status. The service needed to reassure while collecting necessary information.' 
        },
        { 
          title: 'Caseworker Burden', 
          detail: 'Front-line staff spent significant time on administrative tasks that could be automated, reducing their capacity for complex case assessment.' 
        },
        { 
          title: 'Regional Inconsistency', 
          detail: 'Different DWP offices had developed local workarounds, leading to inconsistent citizen experiences and data quality issues.' 
        },
        { 
          title: 'Accessibility Gaps', 
          detail: 'Existing digital touchpoints failed basic accessibility requirements, excluding users with visual, motor, or cognitive impairments.' 
        },
        { 
          title: 'Testing Gap', 
          detail: 'Policy interpretations were being coded directly into production systems without user validation, leading to costly rework when issues emerged.' 
        }
      ],
      
      designPrinciples: [
        { 
          title: 'Prototype Before You Build', 
          detail: 'Every policy interpretation and UI decision was tested with real users in the GOV.UK Prototype Kit before any engineering work began. This caught issues early when they were cheap to fix.' 
        },
        { 
          title: 'GDS Design System First', 
          detail: 'Used proven GOV.UK Design System components wherever possible. These patterns are already tested for accessibility and usability, reducing risk and speeding delivery.' 
        },
        { 
          title: 'Accessible by Default', 
          detail: 'WCAG 2.2 compliance wasn\'t a final checkbox - it was built into every design decision from day one. Tested with screen readers, keyboard navigation, and users with disabilities throughout.' 
        },
        { 
          title: 'Plain Language Always', 
          detail: 'Government policy is complex; citizen-facing services shouldn\'t be. Every piece of content was written at accessible reading levels and tested for comprehension.' 
        },
        { 
          title: 'One Thing Per Page', 
          detail: 'Applied the GDS principle of asking one question per page, reducing cognitive load and improving completion rates for complex multi-step journeys.' 
        },
        { 
          title: 'Design with Data', 
          detail: 'Used analytics and research findings to prioritise improvements. Focused effort where it would have the greatest impact on user success.' 
        }
      ],
      
      govukPrototypeKit: {
        headline: 'Prototype-Driven Design with GOV.UK Kit',
        description: 'The GOV.UK Prototype Kit was central to our design process. Rather than static wireframes, we built fully interactive HTML prototypes that looked and behaved like the real service. This allowed us to:',
        benefits: [
          'Test complex multi-step journeys with real conditional logic',
          'Validate policy interpretations with users before engineering commitment',
          'Demonstrate accessibility compliance to stakeholders',
          'Iterate rapidly based on usability testing feedback',
          'Hand off proven patterns directly to developers',
          'Reduce miscommunication between design and development'
        ],
        technicalApproach: [
          'Built journeys using Nunjucks templating with GOV.UK Frontend',
          'Implemented branching logic to test different policy scenarios',
          'Created realistic error states and validation messaging',
          'Integrated with session storage to maintain user state across pages',
          'Version controlled prototypes for team collaboration'
        ]
      },
      
      accessibilityApproach: {
        headline: 'WCAG 2.2 AA Compliance Throughout',
        standard: 'WCAG 2.2 AA',
        approach: [
          'Accessibility requirements defined at the start of every design sprint',
          'Used GOV.UK Design System components (pre-tested for accessibility)',
          'Conducted manual accessibility audits at each design iteration',
          'Tested with screen readers (NVDA, JAWS, VoiceOver)',
          'Tested with keyboard-only navigation',
          'Recruited users with disabilities for usability testing',
          'Worked with DWP accessibility specialists for expert review',
          'Documented accessibility decisions in design rationale'
        ],
        specificFeatures: [
          'Clear focus indicators exceeding minimum contrast requirements',
          'Error messages associated with form fields using aria-describedby',
          'Skip links and logical heading hierarchy',
          'Timeout warnings with ability to extend session',
          'Content written at appropriate reading level',
          'No reliance on colour alone to convey information'
        ]
      },
      
      usabilityTesting: {
        headline: 'Rigorous Testing at Every Stage',
        rounds: [
          {
            phase: 'Alpha',
            participants: 8,
            method: 'Moderated in-person',
            focus: 'Core journey validation and information architecture',
            keyFindings: [
              'Users confused by benefit category terminology - simplified language',
              'Multi-step form felt overwhelming - broke into smaller chunks',
              'Unclear what documents were needed - added checklist upfront'
            ]
          },
          {
            phase: 'Beta (Round 1)',
            participants: 12,
            method: 'Moderated remote',
            focus: 'End-to-end journey completion and error handling',
            keyFindings: [
              'Error messages too generic - made specific to each field',
              'Users unsure of progress - enhanced progress indicator',
              'Timeout caught users off guard - added warning 2 minutes before'
            ]
          },
          {
            phase: 'Beta (Round 2)',
            participants: 15,
            method: 'Mix of moderated and unmoderated',
            focus: 'Edge cases, accessibility, and scale validation',
            keyFindings: [
              'Screen reader users missed dynamic content - added aria-live regions',
              'Mobile users struggled with date picker - simplified to text inputs',
              'Users with cognitive disabilities needed more reassurance - added confirmation steps'
            ]
          },
          {
            phase: 'Pre-Live',
            participants: 6,
            method: 'Accessibility-focused testing',
            focus: 'WCAG 2.2 compliance verification',
            keyFindings: [
              'Minor focus order issue in one component - fixed',
              'Contrast ratio marginal on one status indicator - increased',
              'All critical issues resolved before launch'
            ]
          }
        ]
      },
      
      collaborationWithPolicy: {
        headline: 'Bridging Policy and Design',
        description: 'One of the most challenging aspects of government digital services is translating complex regulations into user-friendly experiences. I established a collaborative process with policy teams:',
        approach: [
          'Regular policy interpretation workshops using Miro for async collaboration',
          'Created "policy scenario" test scripts to validate edge cases',
          'Built prototype variations to test different policy interpretations',
          'Documented design decisions with policy rationale for audit trail',
          'Established feedback loop: prototype → test → policy review → iterate'
        ],
        outcome: 'This approach reduced late-stage policy disputes by ensuring alignment early. When policy teams could see their regulations working in a realistic prototype, they could identify issues before development.'
      },
      
      deliveryMethodology: {
        headline: 'Lean UX in Agile Delivery',
        approach: 'Design Thinking + Lean UX within 2-week sprints',
        practices: [
          'Participated in sprint planning to align design work with delivery priorities',
          'Ran design critiques with developers to catch implementation issues early',
          'Maintained a living prototype that evolved alongside the production build',
          'Created lightweight design documentation focused on developer needs',
          'Conducted mini research activities within sprints rather than big upfront phases',
          'Used hypothesis-driven design: "We believe [this change] will [improve this metric]"'
        ]
      },
      
      quantitativeResults: [
        { metric: 'Development Rework', before: 'Baseline', after: '-35%', change: 'Reduction through prototype validation' },
        { metric: 'Task Completion Rate', before: 'Baseline', after: '+28%', change: 'Improvement in user success' },
        { metric: 'WCAG 2.2 Compliance', before: 'Partial', after: '100% AA', change: 'Full certification achieved' },
        { metric: 'GDS Service Standard', before: 'N/A', after: '14/14', change: 'All points passed' },
        { metric: 'Usability Test Rounds', before: 'N/A', after: '4', change: '41 participants total' },
        { metric: 'Prototype Iterations', before: 'N/A', after: '23', change: 'Versions before dev handoff' }
      ],
      
      qualitativeOutcomes: [
        'Established prototype-first culture adopted by other DWP digital teams',
        'Created reusable interaction patterns now in DWP component library',
        'Improved collaboration model between policy and design teams',
        'Reduced friction for citizens navigating fraud/error processes',
        'Enabled caseworkers to focus on complex assessment rather than admin',
        'Met all GDS Service Standard assessment criteria'
      ],
      
      gdsServiceStandard: {
        headline: 'GDS Service Standard Alignment',
        description: 'The service was designed to meet all 14 points of the Government Digital Service Standard:',
        keyPoints: [
          { point: '1. Understand users and their needs', status: 'Met through extensive user research programme' },
          { point: '2. Solve a whole problem for users', status: 'End-to-end journey design from identification to resolution' },
          { point: '3. Provide a joined-up experience', status: 'Consistent with wider DWP digital services' },
          { point: '4. Make the service simple to use', status: 'One thing per page, plain language throughout' },
          { point: '5. Make sure everyone can use the service', status: 'WCAG 2.2 AA compliant, tested with disabled users' },
          { point: '6. Have a multidisciplinary team', status: 'Research, design, policy, development collaboration' },
          { point: '7. Use agile ways of working', status: 'Lean UX within 2-week sprints' },
          { point: '8. Iterate and improve frequently', status: '23 prototype iterations based on testing' },
          { point: '9. Create a secure service', status: 'Security review passed, data handling compliant' },
          { point: '10. Define what success looks like', status: 'Clear KPIs for task completion and satisfaction' }
        ]
      },
      
      businessImpact: 'The prototype-driven approach saved an estimated £180,000 in development rework costs by catching issues before engineering. The 28% improvement in task completion rates reduced follow-up contacts and caseworker intervention. Full accessibility compliance ensured the service could be used by all citizens, meeting the government\'s legal obligations under the Equality Act.',
      
      testimonial: {
        quote: 'Kam\'s approach to prototyping fundamentally changed how we work. By testing policy interpretations with real users before development, we caught issues that would have been incredibly expensive to fix later. His accessibility expertise ensured we met our obligations to all citizens.',
        author: 'Product Owner',
        role: 'DWP Digital Services'
      },
      
      learnings: [
        'The GOV.UK Prototype Kit is transformative for government services - it bridges the gap between policy intent and user reality',
        'Accessibility testing with real users reveals issues that automated tools miss - budget for it from the start',
        'Policy teams become design allies when they can see their regulations working in realistic prototypes',
        'One thing per page really works - it feels slower but completion rates prove it\'s faster',
        'GDS patterns exist for a reason - resist the urge to innovate when proven solutions exist',
        'Agile doesn\'t mean no documentation - lightweight but clear handoffs prevent implementation drift'
      ]
    }
  },
  {
    id: '03',
    slug: 'aws-loti-data-platform',
    title: 'AWS - LOTI Data Skills Platform',
    category: 'Government / Public Sector',
    client: 'AWS Institute / LOTI (London Office of Technology & Innovation)',
    year: '2021',
    role: 'Lead Product Designer',
    services: 'Product Design, Data Visualisation, Design Sprints, UX Research',
    description: 'Led design for a joint venture SaaS platform between AWS Institute and LOTI London, enabling 33 London boroughs to recruit, train, and share data talent for evidence-based decision-making, transforming how local government approaches data skills development.',
    challenge: 'As part of an AWS-LOTI collaboration, we faced the challenge that London boroughs were struggling to recruit and retain data talent. There was no centralised model to visualise skills gaps, share resources across councils, or enable evidence-based workforce planning. Each borough operated in isolation, competing for the same limited talent pool while lacking visibility into their collective capabilities.',
    solution: 'Through this AWS-LOTI joint venture, I led two intensive design sprints - the first focused on discovery and mapping the "Data Skills Landscape" across boroughs, the second on rapid prototyping and usability testing with council data analysts. Designed intuitive dashboards leveraging Amazon QuickSight and Tableau principles that allowed non-technical council leaders to visualise talent density and skills gaps. Created a scalable architecture supporting collaboration between distinct boroughs while maintaining data governance.',
    outcome: 'Delivered a robust SaaS platform that enables evidence-based policy improvements and cross-council collaboration. The AWS-LOTI platform now supports LOTI\'s communities of practice, enabling councils to share knowledge, track skills development, and foster collaboration across London\'s 33 boroughs. Empowered local government teams to upskill, connect, and drive evidence-based service improvements.',
    image: '/images/loti-aws-journey-map.png',
    details: ['Data Visualisation', 'SaaS Platform', 'Design Sprints', 'Public Sector', 'Dashboard Design'],
    screens: [
      '/images/loti-capabilities-screen.png'
    ],
    figmaLink: 'https://www.figma.com/design/fGu1TnPN1ewGD193yCvPBi/AWS---Loti-London-Project-2101-2022?node-id=10-1384&t=J2iahXf1me85W4Sf-1',
    
    extended: {
      duration: 'June 2021 - September 2021',
      team: 'LOTI Data Analysts, Product Managers, Startup Founders, Borough Representatives',
      tools: ['Figma', 'Amazon QuickSight', 'Tableau', 'Miro', 'UserTesting'],
      
      problemStatement: 'As part of a joint venture between AWS Institute and LOTI London, we tackled the challenge that London boroughs were operating in silos when it came to data talent. They competed for the same limited pool of data professionals, had no visibility into collective skills gaps, and lacked a framework for sharing expertise across council boundaries. This fragmented approach was hindering evidence-based decision-making at a time when data-driven policy was becoming critical.',
      
      keyIssues: [
        'No centralised visibility into data skills across 33 London boroughs',
        'Boroughs competing for same limited talent pool rather than collaborating',
        'Council leaders couldn\'t quantify skills gaps to justify training investment',
        'No mechanism for sharing data expertise between boroughs',
        'Disconnect between data team capabilities and policy needs'
      ],
      
      context: {
        client: 'LOTI (London Office of Technology & Innovation)',
        partnership: 'AWS Institute - Joint Venture Project',
        projectType: 'Collaboration between AWS and LOTI London',
        scope: '33 London borough councils',
        objective: 'Create a shared platform for data talent development and resource sharing'
      },
      
      researchMethods: [
        'Stakeholder interviews with LOTI leadership and borough data leads',
        'Mapping the "Data Skills Landscape" across participating boroughs',
        'Workshops with council data analysts to understand daily challenges',
        'Competitive analysis of existing talent management platforms',
        'User interviews with non-technical council leaders to understand data needs'
      ],
      
      keyInsights: [
        { 
          title: 'Isolation Problem', 
          detail: 'Each borough had built bespoke approaches to data skills development with no visibility into what other councils were doing or what skills existed nearby.' 
        },
        { 
          title: 'Leadership Gap', 
          detail: 'Non-technical council leaders struggled to understand data capabilities, making it difficult to advocate for investment or make evidence-based decisions.' 
        },
        { 
          title: 'Talent Scarcity', 
          detail: 'Boroughs were competing for the same small pool of data professionals rather than developing shared resources or talent pipelines.' 
        },
        { 
          title: 'Knowledge Silos', 
          detail: 'Best practices and successful approaches weren\'t being shared between councils, leading to repeated mistakes and missed opportunities.' 
        },
        { 
          title: 'Quantification Challenge', 
          detail: 'Without clear metrics on skills gaps, boroughs couldn\'t build business cases for training budgets or new hires.' 
        }
      ],
      
      designSprints: [
        {
          sprint: 1,
          name: 'Discovery Sprint',
          duration: '1 week',
          focus: 'Understanding the problem space',
          activities: [
            'Stakeholder interviews with LOTI leadership',
            'Mapping the current "Data Skills Landscape"',
            'Identifying key user personas across boroughs',
            'Defining success metrics for the platform',
            'Prioritising features through dot voting'
          ],
          outputs: [
            'Skills gap heat map across boroughs',
            'User persona definitions (Council Leader, Data Analyst, HR Lead)',
            'Feature prioritisation matrix',
            'Technical constraints documentation'
          ]
        },
        {
          sprint: 2,
          name: 'Prototyping Sprint',
          duration: '1 week',
          focus: 'Rapid design and validation',
          activities: [
            'Rapid wireframing of key user flows',
            'High-fidelity dashboard prototyping',
            'Usability testing with council data analysts',
            'Iteration based on user feedback',
            'Handoff preparation for development'
          ],
          outputs: [
            'Interactive Figma prototype',
            'Dashboard design system components',
            'Usability test findings report',
            'Development specification documentation'
          ]
        }
      ],
      
      designPrinciples: [
        { 
          title: 'Clarity for Non-Technical Users', 
          detail: 'Council leaders aren\'t data experts. Every visualisation needed to communicate insights at a glance without requiring technical knowledge.' 
        },
        { 
          title: 'Actionable Intelligence', 
          detail: 'Data without action is useless. Every dashboard element was designed to prompt a decision or next step.' 
        },
        { 
          title: 'Collaboration by Default', 
          detail: 'The platform architecture assumed cross-borough sharing, making collaboration the path of least resistance.' 
        },
        { 
          title: 'Scalable Foundation', 
          detail: 'Designed for 33 boroughs with potential to scale to other UK regions. Component-based architecture allowed rapid customisation.' 
        },
        { 
          title: 'Data Governance Built-In', 
          detail: 'Respected the autonomy of individual boroughs while enabling aggregated insights at the LOTI level.' 
        }
      ],
      
      solutionDetails: {
        headline: 'Making Complex Data Actionable',
        components: [
          {
            name: 'Skills Density Dashboard',
            description: 'Interactive heat map showing data talent distribution across London boroughs. Enabled leaders to identify skills clusters and gaps at a glance.',
            insight: 'Leveraged Amazon QuickSight patterns to create familiar, intuitive visualisations for users already working with AWS tools.'
          },
          {
            name: 'Capacity Planning Module',
            description: 'Forecasting tool allowing boroughs to model future skills needs based on policy priorities and project pipelines.',
            insight: 'Used Tableau-style progressive disclosure - summary view for executives, drill-down for analysts.'
          },
          {
            name: 'Talent Sharing Network',
            description: 'Marketplace-style interface connecting boroughs with available expertise to those with specific project needs.',
            insight: 'Designed trust indicators and previous collaboration history to reduce friction in cross-borough partnerships.'
          },
          {
            name: 'Training & Development Tracker',
            description: 'Individual and team skills progression tracking with recommended learning pathways based on borough priorities.',
            insight: 'Gamification elements to encourage ongoing engagement without feeling corporate or patronising.'
          }
        ]
      },
      
      dataVisualisationApproach: {
        headline: 'Visualising Capacity for Non-Technical Leaders',
        principles: [
          'Used familiar visual metaphors (traffic lights, heat maps) to communicate complex data',
          'Designed for "glanceability" - key insights visible within 3 seconds',
          'Progressive disclosure: summary → detail → raw data, based on user need',
          'Consistent colour coding across all visualisations for faster comprehension',
          'Always paired numbers with context (benchmarks, trends, comparisons)'
        ],
        tools: [
          'Amazon QuickSight integration for AWS ecosystem compatibility',
          'Tableau design patterns for proven data visualisation UX',
          'Custom Figma components for prototype fidelity'
        ]
      },
      
      accessibilityFeatures: [
        'Colour-blind safe palette with pattern differentiation',
        'Screen reader compatible data tables as alternative to charts',
        'Keyboard navigation for all dashboard interactions',
        'Plain language explanations for all metrics',
        'Mobile-responsive design for council leaders on the move'
      ],
      
      testingApproach: {
        participants: 'Council data analysts from 5 participating boroughs',
        method: 'Moderated usability testing via video call',
        tasks: [
          'Find the current data skills gap for your borough',
          'Identify a neighbouring borough with complementary skills',
          'Create a training plan for your team',
          'Generate a report for your council leader'
        ],
        keyFindings: [
          'Users expected geographic map view - added London borough map visualisation',
          'Terminology confusion between "capacity" and "capability" - standardised language',
          'Leaders wanted exportable reports for committee meetings - added PDF export',
          'Analysts wanted more granular skill categorisation - expanded taxonomy'
        ]
      },
      
      quantitativeResults: [
        { metric: 'Boroughs Supported', before: '0', after: '33', change: 'Full London coverage' },
        { metric: 'Design Sprint Duration', before: 'N/A', after: '2 weeks', change: 'Discovery to prototype' },
        { metric: 'User Personas Served', before: 'N/A', after: '3', change: 'Leaders, Analysts, HR' },
        { metric: 'Dashboard Components', before: 'N/A', after: '12', change: 'Reusable system' },
        { metric: 'Usability Test Success', before: 'N/A', after: '85%', change: 'Task completion rate' }
      ],
      
      qualitativeOutcomes: [
        'Enabled evidence-based policy improvements across London councils',
        'Created framework for cross-borough data talent collaboration',
        'Empowered non-technical leaders to understand and advocate for data investment',
        'Established reusable design patterns for future LOTI platforms',
        'Supported LOTI\'s communities of practice with shared visibility'
      ],
      
      businessImpact: 'The AWS-LOTI joint venture platform now supports LOTI\'s mission to make London the most collaborative city in the world for public sector innovation. It enables 33 borough councils to share knowledge, track skills development across the capital, and make evidence-based decisions about data talent investment. The design system created during this AWS collaboration has been reused for subsequent LOTI digital initiatives.',
      
      testimonial: {
        quote: 'Kam\'s ability to translate our complex requirements into intuitive visualisations was exceptional. He understood that our users aren\'t data scientists - they\'re council leaders who need to make decisions quickly. The platform he designed makes complex data accessible to everyone.',
        author: 'LOTI Project Lead',
        role: 'London Office of Technology & Innovation'
      },
      
      learnings: [
        'Design sprints are perfect for public sector innovation - they create momentum in traditionally slow-moving organisations',
        'Data visualisation for non-technical users requires ruthless simplification - if it needs explanation, it needs redesign',
        'Cross-organisational platforms need to balance individual autonomy with collective benefit',
        'Prototyping with real data (even sample data) reveals issues that placeholder content never will',
        'Public sector users are sophisticated - they appreciate good design and will champion it internally'
      ],
      
      figmaPrototype: {
        url: 'https://www.figma.com/design/fGu1TnPN1ewGD193yCvPBi/AWS---Loti-London-Project-2101-2022?node-id=10-1384&t=J2iahXf1me85W4Sf-1',
        label: 'View Figma Prototype'
      }
    }
  },
  {
    id: '04',
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
    id: '05',
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
    id: '06',
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
          sprint: 1,
          name: 'The Backbone',
          duration: '1 week',
          focus: 'Eligibility vs. Affordability logic',
          activities: [
            'Moved team away from "Lorem Ipsum" and forced use of real, messy financial data early on',
            'Mapped eligibility criteria and affordability calculations',
            'Prototyped logic flows with actual customer scenarios',
            'Tested with mortgage consultants for accuracy'
          ],
          outputs: [
            'Eligibility logic framework',
            'Affordability calculation model',
            'Realistic data prototypes',
            'Foundation for accurate design'
          ]
        },
        {
          sprint: 2,
          name: 'The Refinement',
          duration: '1 week',
          focus: 'Product Comparison',
          activities: [
            'Instead of dense tables, designed "Outcome Cards"',
            'Visualized impact of three core paths: Capital + Interest, Interest Only, and Interest Roll-Up',
            'Iterated with customer feedback',
            'Simplified complex financial product comparisons'
          ],
          outputs: [
            'Outcome Cards design',
            'Product comparison module',
            'Simplified visualization patterns',
            'Complex products made understandable'
          ]
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
    id: '07',
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
    id: '08',
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
