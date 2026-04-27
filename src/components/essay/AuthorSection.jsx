import GraceTitus from '../../assets/graceTitus.jpg';
export default function AuthorSection() {
  return (
    <div>
    <section className="bg-[#e6edf3] border-t-4 border-[#1e5ea8] py-16 px-20">

      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-[0.35em] text-blue-600 mb-8">
          ABOUT THE AUTHOR
        </p>

        <div className="flex items-center gap-6 mb-6">

          <img
            src={GraceTitus}
            className="w-16 h-16 rounded-full"
            width="64"
            height="64"
            loading="lazy"
          />

          <div>
            <p className="font-semibold text-lg">
              Mrs. Galaxy Thami
            </p>

            <p className="text-blue-600 text-sm">
              Founder & Executive Director
            </p>

            <p className="text-gray-500 text-sm">
              14 essays published
            </p>
          </div>

        </div>

        <p className="text-gray-700 leading-loose max-w-5xl">

          Mrs Grace Titus founded HARAF in 2011 after a field visit to rural
          Adamawa State that she describes as "the meeting I never made it to."
          Before founding HARAF, she worked for eight years as a development
          economist. She writes about the politics of aid, the language of
          development, and what she has learned from a decade of staying in
          communities others visit briefly.

        </p>

        <div className="mt-6 space-x-6 text-blue-600 text-sm">
          <a href="#">Twitter/X</a>
          <a href="#">LinkedIn</a>
        </div>

      </div>
      

    </section>
    <div className='w-full h-10 bg-white '></div>
    </div>
  )
}