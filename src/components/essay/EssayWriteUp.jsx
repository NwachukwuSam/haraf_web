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

          <p className="first-letter:text-6xl sm:first-letter:text-[80px] first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:text-blue-600">

            In the summer of 2019, I sat in a meeting room in Abuja with twelve
            representatives from international donor organisations, each of whom
            had flown in from a different continent to discuss rural poverty in
            Nigeria. Not one of them had ever spent a night in a rural Nigerian
            community. I remember thinking: this is the frame. This is exactly
            the problem.
          </p>

          <p className="mt-10">

            The word "beneficiary" entered the development sector’s vocabulary
            sometime in the 1970s, borrowed from the legal world of trusts and
            wills. A beneficiary, in that context, is someone who receives
            something they did not earn — a windfall, an inheritance, a gift from
            someone with more.
            The word carries within it an assumption of passivity. You do not
            work to become a beneficiary. You simply are one.
          </p>

          <p className="mt-10">

            When we apply this word to communities — living, breathing, working,
             striving communities of human beings — we make a category error so 
             fundamental that it shapes every decision that follows. Who decides
              what they need? Who designs the programme? Who evaluates success? 
              The answer, in almost every case, is not the "beneficiary." And
               this is not an accident. It is the logic of the frame.
          </p>

          <p className="mt-10">

            I have watched this play out in our own work at HARAF in ways that
             were uncomfortable to confront. In our early years, we were guilty
              of the same thing. We came with plans. We came with timelines. 
              We came with deliverables and logframes and reporting templates.
               And we presented them to communities as though we were doing them
                a favour simply by showing up.
          </p>

          <p className="mt-10 text-blue-400">
            The Language We Use Is the Policy We Make
          </p>
          <div className="h-0.5 w-full bg-blue-200 mt-1"></div>

          <p className="mt-10">
           There is a concept in linguistics called the Sapir-Whorf hypothesis — 
            the idea that the language we use shapes the reality we perceive. 
            I am not a linguist, and I am not making a purely academic argument.
             I am saying something more practical: the words we use in the development
              sector determine what we see, what we measure, and ultimately what we build.
               And right now, the words are wrong.
          </p>

          <p className="mt-10">
          Consider how differently a programme feels when it is designed for 
          "community members" versus designed for "beneficiaries." The first 
          implies that the people involved have a stake in the outcome — that they
           belong to something, and that their belonging gives them voice.
            The second implies they are fortunate to be included at all. 
            These are not subtle distinctions. They ripple through everything:
             who sits in the design meetings, whose feedback is weighted, who gets
              to say when a programme has succeeded.
          </p>

           <p className="mt-10 text-blue-400">
            The Evidence we're Building      
          </p>
          <div className="h-0.5 w-full bg-blue-200 mt-1"></div>

          <p className="mt-10">
             None of this is easy. Changing language inside large 
             institutions is slow, political work. Donors have reporting
              templates that use the word "beneficiary." Governments have
               policies that use it. We ourselves have ten years of documents
                that use it.
          </p>

          <p className="mt-10">
             But I believe — and our field experience increasingly supports 
             this — that the communities we work with change faster, sustain
              more, and build more when they are approached as partners rather 
              than recipients. The evidence is not merely anecdotal. We have been 
              tracking it. We will publish it.
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
              <p><strong>Topic:</strong> Language & Framing in Development</p>
              <p><strong>Published:</strong> March 1, 2026</p>
              <p><strong>Length:</strong> ~2,400 words</p>
              <p><strong>Category:</strong> Aid Reform</p>
            </div>

          </div>


          {/* IN THIS ESSAY */}
          <div>

            <h3 className="text-xs tracking-[0.3em] text-blue-600 mb-4">
              IN THIS ESSAY
            </h3>

            <ul className="space-y-3 text-gray-700 text-sm">

              <li className="hover:text-blue-600 cursor-pointer">
                → The Language We Use
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                → What Communities Told Us
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                → Three Words That Work Better
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                → The Evidence We're Building
              </li>

            </ul>

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
  )
}