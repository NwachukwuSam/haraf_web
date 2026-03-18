import { useState } from 'react';
import HeadLineImage from '../../assets/headlineImage1.jpg';
function IdeasHero () {

    return(
        <section 
             className="relative w-full h-[90vh] flex items-center bg-cover bg-center"
             style={{ backgroundImage: `url(${HeadLineImage})` }}
           >
             {/* Linear Gradient Overlay */}
             <div 
               className="absolute inset-0 z-0"
               style={{ 
                 background: 'linear-gradient(to bottom, rgba(28, 21, 16, 0.2) 20%, rgba(28, 21, 16, 0.65) 65%)' 
               }}
             />
       
             <div className="max-w-7xl mx-auto px-4 md:px-10 sm:px-6 lg:px-8 relative z-10 w-full">
               <div className="max-w-3xl">
                 <p className="text-harafYellow text-sm font-dm-sans font-bold tracking-[0.2em] uppercase mb-4">
                   WHERE WE THINK OUT LOUD
                 </p>
                 <h1 className="text-white text-6xl lg:text-[80px] italic font-playfair font-black leading-tight mb-8">
                   Ideas That <br />Change How <br />We See Rural.
                 </h1>
                 <p className="text-white text-xl md:text-[22px] font-cormorant italic leading-relaxed max-w-xl">
                  We don't just do the work — we interrogate it.
                  Here you'll find essays, field reflections, and uncomfortable
                  questions from the people closest to the communities we serve.
                 </p>
               </div>
             </div>
           </section>
    );
}
export default IdeasHero;