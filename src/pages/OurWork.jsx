import React, { useEffect } from 'react';
import WorkHero from '../components/ourWork/WorkHero.jsx';
import WorkSection from '../components/ourWork/WorkSection.jsx';
import WorkInquiry from '../components/ourWork/WorkInquiry.jsx';

// Assets
import branchThreeImage from '../assets/branchThreeImage.jpg';
import branchTwoImage from '../assets/branchTwoImage.jpg';
import ruralSchoolsAndScholarshipFund from '../assets/ruralSchoolsAndScholarshipFund.png';
import branchFiveImage from '../assets/branchFiveImage.jpg';
import branchFourImage from '../assets/branchFourImage.jpg';
import branchOneImage from '../assets/branchOneImage.jpg';

const programmeData = [
  {
    number: "01",
    image: branchThreeImage,
    tag: "CLEAN WATER & SANITATION",
    tagBg: "rgba(26, 120, 194, 0.15)",
    tagColor: "#1A78C2",
    title: "Safe Water for Every Household.",
    challenge: "Over 60% of rural Nigerian communities still lack access to clean, safe drinking water. Women and children walk an average of 5km daily to collect water from rivers and ponds shared with livestock — water that carries disease, costs time, and robs children of school hours.",
    response: "We drill boreholes, install hand pumps, and build community water governance systems that ensure every point keeps running long after our team moves on. We don't just build infrastructure — we build the human capacity to manage it.",
    testimonial: "Before the borehole, I woke at 4am every morning to fetch water before school. Now I sleep until 6am like a normal child.",
    testimonialAuthor: "SADIYA, AGE 13 · YOBE STATE",
    testimonialBg: "#EBF4FC",
    isReversed: false
  },
  {
    number: "02",
    image: branchTwoImage,
    tag: "FOOD SECURITY & NUTRITION",
    tagBg: "rgba(46, 158, 72, 0.15)",
    tagColor: "#2E9E48",
    title: "From Hunger to Harvest.",
    challenge: "Smallholder farmers — who produce over 80% of Nigeria's food supply — are trapped in a cycle of low yields, no market access, and climate vulnerability. Many rural families eat one meal a day not by choice, but because the land and the system have failed them.",
    response: "We work directly with farming households to provide improved seeds, organic fertilisers, and hands-on agricultural training. Then we do what most programmes skip — we connect farmers to buyers, cooperatives, and local markets so their harvests become real incomes.",
    testimonial: "They gave us seeds and showed us how to plant properly. This season was the first time in years I had enough food to feed my family and still sell at the market.",
    testimonialAuthor: "GARBA A., ZAMFARA STATE",
    testimonialBg: "#FDFAF6",
    isReversed: true
  },
  {
    number: "03",
    image: ruralSchoolsAndScholarshipFund,
    tag: "EDUCATION & LEARNING",
    tagBg: "rgba(107, 79, 160, 0.15)",
    tagColor: "#6B4FA0",
    title: "Every Child Deserves a Classroom.",
    challenge: "Over 10 million children are out of school in Nigeria — the highest number in the world. In rural communities, schools are often dilapidated, understaffed, and inaccessible. Girls are disproportionately affected, withdrawn early for domestic duties or marriage.",
    response: "We rehabilitate school buildings, supply learning materials, train and incentivise teachers, and fund scholarships for children — especially girls — who would otherwise age out of education unnoticed.",
    testimonial: "HARAF rebuilt our school and brought back our teacher. For the first time, my daughter has a desk to sit at and a book to read from.",
    testimonialAuthor: "HAJIYA RAMATU, PARENT, NIGER STATE",
    testimonialBg: "#FDFAF6",
    isReversed: false
  },
  {
    number: "04",
    image: branchFiveImage,
    tag: "HEALTHCARE & WELLNESS",
    tagBg: "rgba(232, 41, 58, 0.15)",
    tagColor: "#E8293A",
    title: "Medicine Where It's Never Reached.",
    challenge: "The nearest hospital is often 3–6 hours away for most rural Nigerian communities. Maternal and child mortality rates in rural areas are three times higher than in urban centres. Preventable diseases — malaria, cholera, malnutrition — remain the leading killers simply because care never arrives.",
    response: "Our mobile clinic model brings primary healthcare, maternal services, immunisation, and health education directly to remote communities on a regular monthly schedule — free of charge, every time.",
    testimonial: "I almost lost my baby because the hospital was too far. The HARAF nurse came to my village and saved us both. I named my son Emmanuel — God with us.",
    testimonialAuthor: "BLESSING O., ADAMAWA STATE",
    testimonialBg: "#FDFAF6",
    isReversed: true
  },
  {
    number: "05",
    image: branchFourImage,
    tag: "WOMEN'S ECONOMIC EMPOWERMENT",
    tagBg: "rgba(232, 86, 122, 0.15)",
    tagColor: "#E8567A",
    title: "When Women Rise, Communities Rise.",
    challenge: "Rural Nigerian women are disproportionately excluded from economic life — denied land rights, credit access, and market participation. When women cannot earn, entire households suffer. When women do earn, studies show 90% of income goes back into family welfare.",
    response: "We run skills training, establish cooperative societies, provide microfinance, and mentor women to build sustainable businesses — from tailoring and soap-making to digital commerce and agribusiness.",
    testimonial: "I used to depend on my husband for every kobo. Now I have a business, a loan repaid, and three women I employ myself. HARAF gave me my voice.",
    testimonialAuthor: "HAJIYA RAMATU, BORNO STATE",
    testimonialBg: "#FDFAF6",
    isReversed: false
  },
  {
    number: "06",
    image: branchOneImage,
    tag: "CLIMATE-SMART AGRICULTURE",
    tagBg: "rgba(46, 158, 72, 0.15)",
    tagColor: "#2E9E48",
    title: "Farming for Today and Tomorrow.",
    challenge: "HARAF Livelihood empowerment initiatives have been instrumental in helping farming communities, especially girls, women, and youth, adapt to climate change in Nigeria. By providing access to resources, education, and sustainable farming practices, HARAF has enabled these groups to enhance their resilience to climate-related shocks. For instance, rural women have reported improved farming outcomes and increased income after adopting climate-smart techniques. Through training and support, HARAF has helped farmers adopt methods like composting, agroforestry, and organic soil conservation, leading to improved crop yields and food security.",
    response: "We train farmers in climate-resilient agricultural practices — drought-resistant crops, water harvesting, agroforestry, and soil restoration — so communities can protect their food security against a changing climate.",
    testimonial: "Last year the rains failed completely. Every other farmer in my village lost everything. My farm survived because of what HARAF taught me about water harvesting.",
    testimonialAuthor: "Rakiya Mohammed., BORNO STATE",
    testimonialBg: "#FDFAF6",
    isReversed: true
  }
];

function OurWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <WorkHero />
      <div className="flex flex-col">
        {programmeData.map((programme, index) => (
          <WorkSection 
            key={index}
            {...programme}
          />
        ))}
      </div>
      <WorkInquiry />
    </div>
  );
}

export default OurWork;
