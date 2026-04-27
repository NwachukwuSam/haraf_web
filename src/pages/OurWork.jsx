import React, { useEffect } from 'react';
import WorkHero from '../components/ourWork/WorkHero.jsx';
import WorkSection from '../components/ourWork/WorkSection.jsx';
import WorkInquiry from '../components/ourWork/WorkInquiry.jsx';

// Assets
import branchThreeImage from '../assets/vaccine.jpg';
import branchTwoImage from '../assets/branchTwoImage.jpg';
import ruralSchoolsAndScholarshipFund from '../assets/sch.png';
import branchFiveImage from '../assets/health.jpg';
import branchFourImage from '../assets/branchFourImage.jpg';
import branchOneImage from '../assets/branchOneImage.jpg';

const programmeData = [
  
  {
    number: "01",
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
    number: "02",
    image: ruralSchoolsAndScholarshipFund,
    tag: "EDUCATION & LEARNING",
    tagBg: "rgba(107, 79, 160, 0.15)",
    tagColor: "#6B4FA0",
    title: "Every Child Deserves a Classroom.",
    challenge: "Nigeria has over 10 million children out of school; the highest number globally. For millions in Borno, Adamawa, and Yobe states, the barrier isn’t just distance. It’s poverty. Families facing crisis cannot afford books, uniforms, or fees. Girls are the first to be left behind, pulled into domestic labor or early marriage when education becomes a cost families cannot bear.",
    response: "We remove the cost of learning. HARAF supplies essential learning materials; books, stationery, and funds full sponsorships that cover school fees and related expenses for crisis-affected children, especially girls. By lifting the financial burden, we keep children in classrooms and give them a chance to finish what conflict interrupted: their education.",
    testimonial: "I thought school had ended for me after we were displaced. But HARAF gave me books, a uniform, and paid my fees. Now I am back in class. I want to be a teacher.",
    testimonialAuthor: "Aisha M., 14, sponsorship beneficiary | Adamawa State",
    testimonialBg: "#FDFAF6",
    isReversed: false
  },
  {
    number: "03",
    image: branchFiveImage,
    tag: "HEALTHCARE & WELLNESS",
    tagBg: "rgba(232, 41, 58, 0.15)",
    tagColor: "#E8293A",
    title: "Medicine Where It's Never Reached.",
    challenge: "The nearest hospital is often 3–6 hours away for most rural Nigerian communities. Maternal and child mortality rates in rural areas are three times higher than in urban centres. Preventable diseases — malaria, cholera, malnutrition — remain the leading killers simply because care never arrives.",
    response: "Our mobile clinic model brings primary healthcare, maternal services, immunisation, and health education directly to remote communities on a regular monthly schedule — free of charge, every time.",
    testimonial: "For the first time, I felt like I was in good hands, the midwives were kind, and the facility was clean. I didn’t have to worry about anything. It was completely different from my previous deliveries",
    testimonialAuthor: "BLESSING O., ADAMAWA STATE",
    testimonialBg: "#FDFAF6",
    isReversed: true
  },
  {
    number: "04",
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
    number: "05",
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
  },
  {
    number: "06",
    image: branchThreeImage,
    tag: "LIVESTOCK HEALTH & VETERINARY SERVICES",
    tagBg: "rgba(26, 120, 194, 0.15)",
    tagColor: "#1A78C2",
    title: "Livestock Vaccination and Farmer Capacity Strengthening in Adamawa State.",
    challenge: "In many rural communities across Adamawa State, livestock farmers face recurring outbreaks of preventable animal diseases due to low vaccination coverage and limited access to veterinary services. These diseases reduce productivity, cause significant financial losses, and threaten household livelihoods. Many farmers lack the knowledge and resources to properly manage animal health, leading to avoidable deaths and weakened food security.",
    response: "We deliver coordinated livestock vaccination campaigns while strengthening farmers’ capacity through hands-on training and extension support. By working directly with communities, we promote disease prevention, proper animal care practices, and sustainable herd management. Beyond vaccinations, we empower farmers with the knowledge and systems needed to protect their livestock, improve productivity, and build long-term resilience.",
    testimonial: "Before the vaccinations, I used to lose many of my goats every year. Now my animals are healthy, and I no longer fear sudden losses. I can plan and grow my farm with confidence.",
    testimonialAuthor: "SADIA, AGE 43 · YOBE STATE",
    testimonialBg: "#EBF4FC",
    isReversed: false
  },
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
