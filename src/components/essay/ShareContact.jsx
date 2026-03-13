export default function ShareContact() {
  return (
    
    <section className="bg-[#163e63] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20">

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">

        {/* Left Text */}
        <div>

          <h2 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl mb-4">
            Did This Essay Challenge How You Think?
          </h2>

          <p className="text-blue-200">
            Share it with someone who needs to read it.
          </p>

        </div>


        {/* Share Buttons */}
        <div className="flex gap-2 sm:gap-4 flex-wrap justify-center lg:justify-start">

          <button className="bg-[#2b557a] px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm tracking-wider hover:bg-[#3b6b8a] hover:scale-105 transition-all duration-200">
            TWITTER/X
          </button>

          <button className="bg-[#2b557a] px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm tracking-wider hover:bg-[#3b6b8a] hover:scale-105 transition-all duration-200">
            WHATSAPP
          </button>

          <button className="bg-[#2b557a] px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm tracking-wider hover:bg-[#3b6b8a] hover:scale-105 transition-all duration-200">
            INSTAGRAM
          </button>

          <button className="bg-yellow-400 text-black px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm tracking-wider font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-200">
            COPY LINK
          </button>

        </div>

      </div>

    </section>
   
    
  )
}