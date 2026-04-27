import { FaTwitter, FaFacebookF, FaInstagram, FaLink } from 'react-icons/fa';

export default function EssayWriteUp() {
  return (
    <div className="bg-[#f5f6f7] min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-25 max-w-[1400px] mx-auto">

        {/* LEFT SHARE BAR */}
        <div className="col-span-1 lg:col-span-1 flex flex-row lg:flex-col items-center lg:items-center justify-between lg:justify-start gap-6 lg:gap-10 text-blue-600">

          <p className="rotate-0 lg:rotate-[-90deg] tracking-[0.4em] text-xs text-gray-500">
            SHARE
          </p>

          <button
            type="button"
            aria-label="Share on X"
            className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >
            <FaTwitter className="w-5 h-5" />
          </button>

          <button
            type="button"
            aria-label="Share on Facebook"
            className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >
            <FaFacebookF className="w-5 h-5" />
          </button>

          <button
            type="button"
            aria-label="Share on Instagram"
            className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >
            <FaInstagram className="w-5 h-5" />
          </button>

          <button
            type="button"
            aria-label="Copy link"
            className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >
            <FaLink className="w-5 h-5" />
          </button>

        </div>


        {/* ARTICLE TEXT */}
        <div className="col-span-1 lg:col-span-7 font-serif text-[#4a3f38] leading-relaxed text-[16px] sm:text-[17px]">

          {/* Title Section */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c3e50] font-sans leading-tight mb-4">
              Built on Resolve, Growing Through Service: My Reflection on Capacity Building at HARAF
            </h1>
            <p className="text-blue-600 text-base sm:text-lg font-medium mt-2">
              By Galaxy Thami, Founder & Executive Director, HARAF
            </p>
            <div className="h-px w-16 bg-blue-300 mt-6"></div>
          </div>

          {/* Drop cap first paragraph */}
          <p className="first-letter:text-6xl sm:first-letter:text-[80px] first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:text-blue-600">
            I founded HARAF on three things: determination, hard work, and a deep, restless passion for humanitarian service. 
            I started with a conviction that crisis-affected people in Borno, Adamawa, and Yobe States deserved a faster, more 
            dignified response; and that we could be the ones to deliver it if we were willing to outwork the problem.  
            In those early days of emergency response, the needs were overwhelming. Displaced families arriving with nothing. 
            Communities cut off by insecurity. Coordination meetings where decisions had to be made in minutes, not weeks. 
            I learned quickly that passion gets you to the field, but only capacity keeps you effective once you're there.
          </p>

          {/* Frederick Douglass quote */}
          <div className="mt-10 pl-6 border-l-4 border-blue-400 italic text-gray-600">
            <p className="text-lg">
              "If there is no struggle, there is no progress."
            </p>
            <p className="text-sm mt-1 text-gray-500">— Frederick Douglass</p>
          </div>

          <p className="mt-6">
            HARAF was born in struggle, and it is through struggle that we keep progressing; by building our people as we respond.  
            Emergency response leaves no room for delay. When floods sweep through communities in Adamawa, when conflict displaces 
            thousands overnight in Borno, when sudden arrivals overwhelm camps in Yobe, our staff must think clearly under pressure, 
            adapt instantly, and act decisively. That level of readiness isn't accidental. It is trained. It is practiced. It is built, 
            one staff member at a time.
          </p>

          <p className="mt-6">
            That is why capacity building at HARAF is not a workshop we schedule after the emergency. It is the emergency response. 
            Every deployment is a classroom. Every rapid assessment is a test of judgment. Every post-distribution monitoring exercise 
            is a chance to sharpen how we listen.
          </p>

          {/* Vince Lombardi quote */}
          <div className="mt-10 pl-6 border-l-4 border-blue-400 italic text-gray-600">
            <p className="text-lg">
              "The only place success comes before work is in the dictionary."
            </p>
            <p className="text-sm mt-1 text-gray-500">— Vince Lombardi</p>
          </div>

          <p className="mt-6">
            Our teams work, they learn, and then they work again; better.  
            I've watched a program assistant become a field lead because we trusted him to coordinate a sudden influx in a transit site. 
            I've seen a security focal point turn into a community negotiator because he understood that access is earned through 
            relationships, not just clearances. I've seen drivers become first responders because we trained them in basic first aid 
            and protection principles. This is what I mean when I say we don't just hire staff; we grow humanitarians.
          </p>

          {/* HARAF's approach section */}
          <p className="mt-10 text-blue-600 font-semibold text-lg">
            HARAF's Approach to Growth
          </p>
          <div className="h-0.5 w-full bg-blue-200 mt-1 mb-6"></div>

          <p className="mt-2">
            HARAF's approach to growth is deliberate. First, we build for uncertainty. Crisis response in the BAY states demands 
            staff who can plan and pivot in the same breath. So, we train in scenario planning, adaptive management, and 
            decision-making under stress. Second, we break silos. An emergency does not respect departments. A finance officer 
            needs to grasp why speed of cash transfer matters when markets are collapsing. When we learn across functions, we 
            respond as one. Third, we measure growth in lives reached, not certificates earned. If a training does not make us 
            faster, safer, or more accountable to crisis-affected people, we redesign it.
          </p>

          {/* Peter Drucker quote */}
          <div className="mt-10 pl-6 border-l-4 border-blue-400 italic text-gray-600">
            <p className="text-lg">
              "We now accept the fact that learning is a lifelong process of keeping abreast of change."
            </p>
            <p className="text-sm mt-1 text-gray-500">— Peter Drucker</p>
          </div>

          <p className="mt-6">
            In the BAY states, change is the only constant. New displacements. New access constraints. New coordination structures. 
            If HARAF staff stop learning, we stop being useful. I will not let that happen on my watch.
          </p>

          <p className="mt-6">
            I founded HARAF because I believed hard work and determination could turn compassion into action. I still believe it. 
            But now I also know this: sustained action requires sustained growth. My role as Founder and Executive Director is 
            to make sure every HARAF staff member has the tools, mentorship, and space to become the kind of responder I would 
            trust with my own family.
          </p>

          <p className="mt-6">
            Our mission is urgent, but our investment in people is long-term. The same determination that drove me to register 
            HARAF is the determination I ask from each colleague; to learn relentlessly, to lead humbly, and to treat every 
            emergency as both a duty and a discipline. Because the people of Borno, Adamawa, and Yobe are not waiting for 
            perfect conditions. They are waiting for us. And we will meet them prepared, principled, and growing.
          </p>

          {/* Aristotle quote */}
          <div className="mt-12 pt-4 border-t border-blue-100">
            <p className="text-xl italic text-gray-700">
              "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
            </p>
            <p className="text-sm mt-2 text-gray-500">— Aristotle</p>
          </div>

          <p className="mt-8 font-medium text-blue-700">
            That is how HARAF began. That is how we will endure.
          </p>

        </div>


        {/* RIGHT SIDEBAR */}
        <div className="col-span-1 lg:col-span-4 space-y-12">

          {/* ABOUT THIS ESSAY */}
          <div>
            <h3 className="text-xs tracking-[0.3em] text-blue-600 mb-4">
              ABOUT THIS ESSAY
            </h3>
            <div className="text-gray-700 text-sm space-y-3">
              <p><strong>Author:</strong> Galaxy Thami</p>
              <p><strong>Role:</strong> Founder & Executive Director, HARAF</p>
              <p><strong>Topic:</strong> Capacity Building & Humanitarian Response</p>
              <p><strong>Published:</strong> March 2026</p>
              <p><strong>Region:</strong> Borno, Adamawa & Yobe States (BAY)</p>
            </div>
          </div>

          {/* IN THIS ESSAY */}
          <div>
            <h3 className="text-xs tracking-[0.3em] text-blue-600 mb-4">
              IN THIS ESSAY
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">
                → Founding HARAF: Determination & Service
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                → Why Capacity Building IS Emergency Response
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                → Growing Humanitarians: Real Stories
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                → HARAF's Three Pillars of Growth
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                → Sustaining Action Through Learning
              </li>
            </ul>
          </div>

          {/* KEY QUOTES */}
          <div>
            <h3 className="text-xs tracking-[0.3em] text-blue-600 mb-4">
              KEY QUOTES
            </h3>
            <div className="space-y-4 text-sm text-gray-600 italic">
              <p className="border-l-2 border-blue-300 pl-3">
                "If there is no struggle, there is no progress."
              </p>
              <p className="border-l-2 border-blue-300 pl-3">
                "The only place success comes before work is in the dictionary."
              </p>
              <p className="border-l-2 border-blue-300 pl-3">
                "Excellence is never an accident."
              </p>
            </div>
          </div>

          {/* SHARE BUTTONS */}
          <div>
            <h3 className="text-xs tracking-[0.3em] text-blue-600 mb-4">
              SHARE THIS ESSAY
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="border-blue-200 border bg-blue-100 p-3 text-sm hover:bg-blue-200 hover:scale-105 transition-all duration-200">
                TWITTER/X
              </button>
              <button className="border-blue-200 border bg-blue-100 p-3 text-sm hover:bg-blue-200 hover:scale-105 transition-all duration-200">
                INSTAGRAM
              </button>
              <button className="border-blue-200 border bg-blue-100 p-3 text-sm hover:bg-blue-200 hover:scale-105 transition-all duration-200">
                WHATSAPP
              </button>
              <button className="border-blue-200 border bg-blue-100 p-3 text-sm hover:bg-blue-200 hover:scale-105 transition-all duration-200">
                COPY LINK
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}