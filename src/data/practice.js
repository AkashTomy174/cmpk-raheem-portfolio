export const practiceAreas = [
  {
    number: '01',
    slug: 'strategic-settlement',
    title: 'Strategic Settlement',
    short: 'Dispute de-escalation, negotiated resolution, and protection of enterprise value.',
    overview:
      'Strategic Settlement is concerned with resolving high-value disputes before they harden into prolonged institutional conflict. The objective is a negotiated outcome that protects enterprise value, relationships, and continuity of operations.',
    challenges: [
      'A commercial disagreement is escalating faster than either party intended.',
      'Internal stakeholders disagree on whether to negotiate or litigate.',
      'Prior informal attempts at resolution have stalled or broken down.',
    ],
    approach:
      'Work typically begins with an independent assessment of the dispute’s actual drivers, separate from its stated positions, followed by structuring a negotiation pathway appropriate to the parties and forums involved.',
    stakeholders: 'Boards, promoters, counterparties, internal legal teams, and where relevant, external counsel.',
    engagement: 'Confidential advisory engagement, typically running alongside — not in place of — formal legal representation.',
  },
  {
    number: '02',
    slug: 'regulatory-intelligence',
    title: 'Regulatory Intelligence',
    short: 'Understanding emerging regulatory, administrative, and sub-national risks.',
    overview:
      'Regulatory Intelligence focuses on understanding how regulatory, administrative, and sub-national systems are likely to move — and what that means for a business or institution before a formal notice ever arrives.',
    challenges: [
      'Regulatory signals are appearing at a local or sub-national level before reaching national attention.',
      'A business cannot tell whether an administrative shift is a genuine risk or noise.',
      'Compliance functions are reactive rather than anticipatory.',
    ],
    approach:
      'The work combines systemic reading of administrative behaviour with structured monitoring of the specific regulatory environment relevant to the client’s operations.',
    stakeholders: 'Corporate leadership, compliance functions, and institutional promoters operating across regulatory jurisdictions.',
    engagement: 'Ongoing or periodic advisory retainer, calibrated to the pace of the relevant regulatory environment.',
  },
  {
    number: '03',
    slug: 'stakeholder-negotiation',
    title: 'Stakeholder Negotiation',
    short: 'Structured dialogue between businesses, institutions, communities, and financial stakeholders.',
    overview:
      'Stakeholder Negotiation structures dialogue among parties whose interests do not naturally align — businesses, institutions, communities, and financial stakeholders — toward a workable and lawful outcome.',
    challenges: [
      'Multiple stakeholders hold conflicting positions with no structured forum for dialogue.',
      'Prior negotiations lacked the authorisation or process to produce a binding outcome.',
      'Trust between parties has deteriorated to the point that direct engagement is unproductive.',
    ],
    approach:
      'Advisory work centres on establishing structured and appropriately authorised communication, sequencing issues so that resolvable matters are not held hostage by intractable ones.',
    stakeholders: 'Corporate promoters, community representatives, financial institutions, and relevant administrative bodies.',
    engagement: 'Time-bound advisory mandate structured around a defined negotiation objective.',
  },
  {
    number: '04',
    slug: 'ppp-resilience',
    title: 'PPP Resilience',
    short: 'Risk analysis and structural thinking for long-term public-private projects.',
    overview:
      'PPP Resilience applies structural risk analysis to long-term public-private partnership projects, where commercial, regulatory, and political timelines rarely move in step.',
    challenges: [
      'A long-duration project faces shifting regulatory or administrative conditions over its lifecycle.',
      'Risk allocation in the original structure no longer reflects current realities.',
      'Stakeholders disagree on how to respond to a material change in circumstances.',
    ],
    approach:
      'The approach analyses the project’s structural resilience against foreseeable regulatory and institutional change, identifying where the original framework requires strengthening.',
    stakeholders: 'Project promoters, institutional partners, lenders, and relevant regulatory or administrative authorities.',
    engagement: 'Structural review followed by advisory support through implementation of any recommended changes.',
  },
  {
    number: '05',
    slug: 'leadership-counsel',
    title: 'Leadership Counsel',
    short: 'Confidential strategic perspective for consequential personal and institutional decisions.',
    overview:
      'Leadership Counsel provides senior decision-makers with a confidential, independent perspective on consequential decisions that carry personal, institutional, or reputational weight.',
    challenges: [
      'A decision carries consequences beyond what internal advisors are positioned to evaluate.',
      'Internal counsel is, by its nature, not independent of organisational interests.',
      'A leader needs a considered outside view before committing to a course of action.',
    ],
    approach:
      'Engagements are structured as confidential advisory conversations, focused on examining a decision’s wider consequences before it is taken.',
    stakeholders: 'Individual senior leaders, promoters, and boards, engaged directly and confidentially.',
    engagement: 'Confidential, direct advisory relationship, engaged as needed rather than on a fixed schedule.',
  },
];

export const getPracticeBySlug = (slug) => practiceAreas.find((item) => item.slug === slug);
