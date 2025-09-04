export type Project = {
    name: string;
    href: string;       // where the card should link
    repo?: string;      // owner/repo for GitHub OG preview image
    tags?: string[];
    blurb?: string;
    featured?: boolean;
    thumb?: string;     // optional custom image
  };
  
  export const PROJECTS: Project[] = [
    // ---------- Featured ----------
    {
      name: "Vintage Collectibles Price Evaluator (PLUTUS)",
      href: "https://github.com/abdxxll/Capstone-Final-Vintage-Collectibles-Price-Evaluator-",
      repo: "abdxxll/Capstone-Final-Vintage-Collectibles-Price-Evaluator-",
      tags: ["Agents", "Supabase", "Valuation", "Gemini", "Roboflow"],
      blurb: "AI-assisted price discovery for antiques & collectibles with market signals.",
      featured: true,
    },
    {
      name: "Campus Foot Traffic Intelligence",
      href: "https://github.com/abdxxll/Campus-Foot-TrafficIntelligence",
      repo: "abdxxll/Campus-Foot-TrafficIntelligence",
      tags: ["Computer Vision", "YOLOv12", "Tracking", "Heatmaps"],
      blurb: "Video-based analytics for campus planning, space optimization, and safety.",
      featured: true,
    },
  
    // ---------- Academic Projects (Project-Portfolio repo) ----------
    {
      name: "NLP for Yelp Recommendations",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Project1_NLP%20Insights",
      repo: "abdxxll/Project-Portfolio",
      tags: ["NLP", "Recommenders"],
      blurb: "Extracting text signals from reviews to improve recommendations.",
    },
    {
      name: "Retail Customer Segmentation (CRM)",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Project2_CRM%20with%20Customer%20Clustering",
      repo: "abdxxll/Project-Portfolio",
      tags: ["K-Means", "Segmentation", "Analytics"],
      blurb: "Customer clusters and actionable CRM insights for a hypothetical retailer.",
    },
    {
      name: "Uber: Disruptive Innovation & Strategy",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Project3_Uber%27s%20Business%20Strategy",
      repo: "abdxxll/Project-Portfolio",
      tags: ["Strategy", "Case Study"],
      blurb: "Competitive dynamics, risk, and growth scenarios for Uber.",
    },
    {
      name: "ML in Flood Risk Mitigation",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Project4_ML%20in%20Flood%20Risk%20Mitigation",
      repo: "abdxxll/Project-Portfolio",
      tags: ["ML", "Risk"],
      blurb: "Applications that enhance flood risk prediction and response.",
    },
  
    // ---------- Applied AI Research ----------
    {
      name: "Student Mental Health — Data-Driven Insights",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Applied%20AI%20Research/Data-Driven%20Analysis%20of%20Student%20Mental%20Health%2C%20Academic%20Pressure%2C%20Coping%20Mechanisms%2C%20and%20Demographics",
      repo: "abdxxll/Project-Portfolio",
      tags: ["Survey", "Visualization", "Econometrics"],
      blurb: "Linking demographics, pressure, and coping mechanisms to outcomes.",
    },
    {
      name: "Decoding the Language of Animals (AI & Conservation)",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Applied%20AI%20Research/Decoding%20the%20Language%20of%20Animals%20-%20AI%20Applications%20in%20Animal%20Communication%20and%20Conservation",
      repo: "abdxxll/Project-Portfolio",
      tags: ["AI", "Conservation"],
      blurb: "Exploring AI for interspecies communication and wildlife protection.",
    },
    {
      name: "ML-Enabled Competitive Intelligence",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Applied%20AI%20Research/Machine%20Learning-Enabled%20Competitive%20Intelligence%20-%20Reshaping%20Strategic%20Business%20Insights",
      repo: "abdxxll/Project-Portfolio",
      tags: ["ML", "Strategy"],
      blurb: "Using ML to reshape insight generation for strategic decisions.",
    },
    {
      name: "Python-Enabled Automation",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Applied%20AI%20Research/Python-Enabled%20Automation%3A%20Principles%2C%20Practice%2C%20and%20Applications",
      repo: "abdxxll/Project-Portfolio",
      tags: ["Automation", "Python"],
      blurb: "Principles and practice of automation across business tasks.",
    },
  
    // ---------- Misc. Papers (selected) ----------
    {
      name: "Rising Global Food Insecurity — Paradigm Shift",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Misc.%20Papers/Rising%20Global%20Food%20Insecurity%20-%20Proposal%20for%20a%20Paradigm%20Shift%20in%20Eradication%20Methodologies",
      repo: "abdxxll/Project-Portfolio",
      tags: ["Policy", "Development"],
      blurb: "High-level proposal to rethink systemic poverty and hunger.",
    },
    {
      name: "Applied Regression Analysis — Parsimony",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Misc.%20Papers/Applied%20Regression%20Analysis%20-%20Parsimonious%20Linear%20Regression",
      repo: "abdxxll/Project-Portfolio",
      tags: ["Econometrics"],
    },
    {
      name: "Poverty & Decision-Making (Scarcity Theory)",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Misc.%20Papers/Poverty%20and%20Decision-Making%3A%20Applying%20Scarcity%20Theory%20to%20Multi-Generational%20Traps",
      repo: "abdxxll/Project-Portfolio",
      tags: ["Behavioral Econ"],
    },
    {
      name: "Cambodia’s Growth & China Relations",
      href: "https://github.com/abdxxll/Project-Portfolio/tree/main/Misc.%20Papers/Balancing%20Growth%20and%20Dependency%3A%20Cambodia%E2%80%99s%20Economic%20Progress%20and%20Relations%20with%20China",
      repo: "abdxxll/Project-Portfolio",
      tags: ["Development", "Policy"],
    },
  ];
  