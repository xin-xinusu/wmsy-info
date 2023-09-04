import { createContext } from "react";

import { COLORS, Pages } from "../utils";

import EarningSVG from "../../assets/svg/Learn/earning.svg";
import FAQSVG from "../../assets/svg/Learn/faq.svg";
import GetStartedSVG from "../../assets/svg/Learn/getStarted.svg";
import GlossarySVG from "../../assets/svg/Learn/glossary.svg";
import GovernanceSVG from "../../assets/svg/Learn/governance.svg";
import WhatIsSVG from "../../assets/svg/Learn/whatIs.svg";
import PropertyManagementSVG from "../../assets/svg/Learn/propertyManagement.svg";
import TaxesSVG from "../../assets/svg/Learn/taxes.svg";

const LearnContext = createContext({
  learnModules: [
    {
      title: 'What is WMSY?',
      subTitle: "Learn about WMSY's real estate marketplace",
      icon: <WhatIsSVG fill={COLORS.DARK_PURPLE} width="67" height="67" />,
      articleBoxTitle: 'WMSY Overview',
      articles: [
        {
          id: 1,
          title: 'This is just a test article',
          markdown: `# H1 Header: Markdown Syntax Guide
## H2 Header: Another smaller header

### H3 Header: Smallest header

#### H4 Header: Even Smaller

##### H5 Header: Still smaller

###### H6 Header: The smallest
<iframe width="560" height="315" src="https://www.youtube.com/embed/UmBpEmy_ams?si=v79kMjjqQDvs5jjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

### Text Formatting

**Bold Text**: **Markdown is amazing.**

*Italic Text*: *Markdown is amazing.*

***Bold and Italic Text***: ***Markdown is amazing.***

Strikethrough: ~~This is a strikethrough text.~~

---

real estate 

### Lists

#### Unordered List

- Item 1
- Item 2
- Sub-item 1
- Sub-item 2
- Item 3

#### Ordered List

1. Item 1
2. Item 2
3. Item 3

---

### Links

[Google](https://www.google.com/)

[GitHub](https://www.github.com/)

---

![Markdown Logo](https://markdown-here.com/img/icon256.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/K3Ctc1UN0bQ?si=22wAxGFYclsG59lV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          `
        }
      ]
    },
    {
      title: 'Getting started with WMSY',
      subTitle: "Learn how to invest in real estate with what you have",
      icon: <GetStartedSVG fill={COLORS.DARK_PURPLE} width="67" height="67" />,
      articleBoxTitle: 'Quick Start Guide',
      articles: []
    },
    {
      title: 'FAQ',
      subTitle: "View Frequently Asked Questions",
      icon: <FAQSVG fill={COLORS.DARK_PURPLE} width="67" height="67" />,
      articleBoxTitle: 'Common Questions',
      articles: []
    },
    {
      title: 'Earning Rental Income & Appreciation',
      subTitle: "Detailed information about collecting  your rental income and earning appreciation",
      icon: <EarningSVG fill={COLORS.DARK_PURPLE} width="67" height="67" />,
      articleBoxTitle: 'Earning Potential Evaluation',
      articles: []
    },
    {
      title: 'Property Management',
      subTitle: "All WMSY properties are managed by experienced 3rd party Property Managers",
      icon: <PropertyManagementSVG fill={COLORS.DARK_PURPLE} width="67" height="67" />,
      articleBoxTitle: 'Property Management',
      articles: []
    },
    {
      title: 'How taxes work with WMSY',
      subTitle: "Learn about how taxes work when you invest with WMSY",
      icon: <TaxesSVG fill={COLORS.DARK_PURPLE} width="67" height="67" />,
      articleBoxTitle: 'WMSY Tax Info',
      articles: []
    },
    {
      title: 'WMSY Governance',
      subTitle: "Learn how WMSY’s governance systems works",
      icon: <GovernanceSVG fill={COLORS.DARK_PURPLE} width="67" height="67" />,
      articleBoxTitle: 'Governance',
      articles: []
    },
    {
      title: 'Glossary',
      subTitle: "View real estate related terms and definitions",
      icon: <GlossarySVG fill={COLORS.DARK_PURPLE} width="67" height="67" />,
      articleBoxTitle: 'Terms and Definitions',
      articles: []
    }
  ] 
});

export default LearnContext