export const HOME_PAGE_TEXT = {
  imageCoverTitle1: "Invest in rental properties",
  imageCoverTitle2: "like stocks.",
  imageCoverText:
    "Earn passive income from the most reliable asset class in real estate with residential rentals. Get started with as little as $100.",
  strapLineTitle: "Be a part of the journey without having to lift a finger",
  strapLineText:
    "Whether you are a beginner or a seasoned pro you can partake in memberships at any size. From single families to a 100+ unit properties. All with a click of the finger and a touch of Whimsy. It’s that easy.",
  investTitle: "Invest like the 1%",
  investText:
    "Earn passive income from rental assets and gain the benefits of being an investor",
  whyInvest: {
    title: "Why invest with us?",
    reliableYield:
      "Whimsy only allows property listings from rental businesses with a proven track record markets that deliver a strong long-term return.",
    fullyPassive:
      "Every property is required to come with full-service property management, so you are freed from time-consuming tasks and decisions.",
    fractionalOwnership:
      "Shares are offered in select residential rentals, this results in a lower barrier to entry & lower cost of diversification.",
    economicRights:
      "With Whimsy you’ll receive economic rights in the underlying property, including potential net rental income, tax benefits, and appreciation.",
    alignment:
      "We retain a direct ownership interest in each property. In short, we partner directly with you so you can invest with confidence.",
    liability:
      "Each property is held in an LLC and covered with property insurance that shields you from personal liability.",
  },
  howItWorks: {
    one: "Explore the WMSY marketplace for available opportunities that fit your investing appetite.",
    two: "Enter your wanted share amount, review the terms and fund your investment.",
    three:
      "We’ll take care of the rest. You sit back and earn your share of net monthly income and potential property appreciation.",
  },
  stillCurious: {
    firstQuestion:
      "Do I need to be involved in any aspect of property management?",
    firstAnswer:
      "No. The properties listed on WMSY are fully managed investments intended to require no investor involvement in asset or property management. As an investor, you simply select your investment amount and earn your pro-rata share of rental income.",
    secondQuestion: "What am I buying?",
    secondAnswer:
      "When you purchase shares in a Whimsy property offering, you are directly buying ownership in the Series of the Whimsy LLC that owns a specific property and are eligible to receive potential payouts derived from your share of monthly rental income as well as potential property value appreciation.",
    thirdQuestion: "Who is Whimsy for?",
    thirdAnswer:
      "Whimsy is a full-service platform for busy professionals to invest and own fractional ownership of rental properties. We lower the cost-of-entry and minimize the time commitment for real estate investing. Whimsy is engineered to help first-time investors easily understand different opportunities and help existing investors quickly enter new markets.",
  },
  investWithoutCompromiseText:
    "Our goal is to help smart investors invest smarter not harder. We are excited to welcome you to our growing community.",
};

export const getLastUpdatedText = (lastUpdated) => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - lastUpdated.getTime()) / 60000
  );
  if (difference < 60) {
    return `${difference} minute(s) ago`;
  } else if (difference < 1440) {
    return `${Math.floor(difference / 60)} hour(s) ago`;
  } else {
    return `${Math.floor(difference / 1440)} day(s) ago`;
  }
};

export const IMAGE_ALT = "No description available";
