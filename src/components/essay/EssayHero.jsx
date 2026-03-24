import GraceTitus from '../../assets/graceTitus.jpg'
export default function EssayHero() {
  return (
    <div className="w-full">

      {/* Top Article Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 lg:px-20 py-4 border-b bg-white gap-3 sm:gap-0">

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">

          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
            SYSTEM THINKING
          </span>

          <span>March 1, 2026</span>

          <span>•</span>

          <span>12 min read</span>

        </div>

        <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
          <span>0%</span>
          <div className="w-32 sm:w-48 h-[3px] bg-gray-200 rounded">
            <div className="w-0 h-full bg-blue-600"></div>
          </div>
        </div>

      </div>


      {/* Hero Section */}
      <section className="bg-[#163e63] text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-24">

        <div className="max-w-5xl">

          {/* Breadcrumb */}
          <p className="text-sm tracking-[0.25em] text-yellow-300 mb-10">
            OUR IDEAS › SYSTEMS THINKING
          </p>

          {/* Title */}
          <h1 className="font-playfair italic text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] leading-snug md:leading-[1.1] font-medium mb-16 max-w-3xl">
            Why "Giving Aid" Is the
            Wrong Frame — And
            What We Should Say
            Instead.
          </h1>

          {/* Author */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

            <img
              src={GraceTitus}
              alt="Grace Titus"
              className="w-12 h-12 rounded-full border"
              width="48"
              height="48"
              fetchpriority="high"
              loading="eager"
            />

            <div>
              <p className="font-semibold text-white">
                Mrs. Grace Titus
              </p>

              <p className="text-blue-200 text-sm">
                Founder & Executive Director, HARAF
              </p>
            </div>

          </div>
            <p className="text-blue-200 mt-5 text-sm">
                Published March 1 2026     .   12 minutes read
              </p>
        </div>

        

      </section>
      <div className="bg-blue-500 w-full lg:h-70 px-4 sm:px-6 lg:px-20 py-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            <div className="hidden sm:block h-28 sm:h-44 lg:h-45 w-1.5 mt-2 bg-yellow-300"></div>
            <h2 className="text-gray-200 mt-5 sm:mt-0 font-playfair italic leading-loose text-lg sm:text-xl md:text-2xl font-semibold max-w-3xl">
              “The word beneficiary is doing a lot of quiet damage in the<br /> 
              development sector. It positions communities as passive receivers of<br /> other
              people's decisions.”
            </h2>

        </div>

    </div>
  )
}