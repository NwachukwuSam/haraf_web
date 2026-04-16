import HeadLineImage from '../../assets/headlineImage1.jpg';

function IdeasHero() {
  return (
    <section
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] flex items-end sm:items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeadLineImage})` }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(28,21,16,0.15) 10%, rgba(28,21,16,0.72) 60%, rgba(28,21,16,0.88) 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 md:mx-0 pb-10 sm:pb-0">
        <div className="max-w-2xl px-2 md:px-4">
          <p className="text-harafYellow text-[11px] sm:text-sm font-dm-sans font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            WHERE WE THINK OUT LOUD
          </p>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl xl:text-[76px] italic font-playfair font-black leading-[1.08] mb-4 sm:mb-6">
            Ideas That <br />
            Change How <br />
            We See Rural.
          </h1>

          <p className="text-white/90 text-base sm:text-lg md:text-xl font-cormorant italic leading-relaxed max-w-lg">
            We don't just do the work — we interrogate it. Here you'll find
            essays, field reflections, and uncomfortable questions from the
            people closest to the communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IdeasHero;