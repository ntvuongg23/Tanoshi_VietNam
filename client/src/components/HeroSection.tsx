import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Hero Headlines */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              <span className="block">We Design. We Code. You Shine</span>
              {/* <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">You Shine</span> */}
            </h1>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Tanoshi Vietnam
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              Tanoshi drives digital transformation through intelligent software solutions and user-centric design.
              We help businesses streamline operations, enhance customer experiences, and unlock growth by combining
              innovative technology with thoughtful, functional design. From concept to deployment, Tanoshi is your
              partner in building future-ready digital systems that deliver real impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700 transition-all duration-200 px-8 py-4 text-lg font-medium rounded-md"
            >
              Our Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 px-8 py-4 text-lg font-medium rounded-md"
            >
              Contact Us
            </Button>
          </div>

          {/* Partner Logos Carousel */}
          <div className="pb-14 md:pb-24 mt-20">
            <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
              <div className="relative w-full mx-auto max-w-4xl opacity-90 dark:opacity-70 overflow-hidden before:content-[''] before:absolute before:inset-0 before:w-full before:bg-[linear-gradient(to_right,white_0%,transparent_10%,transparent_90%,white_100%)] before:z-10 flex flex-nowrap px-5 lg:px-12 justify-center gap-4 lg:gap-8">
                <div className="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-[marquee_90000ms_linear_both_infinite] will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/mozilla.svg" alt="mozilla" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/github.svg" alt="github" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/1password.svg" alt="1password" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/pwc.svg" alt="pwc" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/pika.svg" alt="pika" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/humata.svg" alt="humata" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/udio.svg" alt="udio" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/langchain.svg" alt="langchain" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/resend.svg" alt="resend" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/loops.svg" alt="loops" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/mobbin.svg" alt="mobbin" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/gopuff.svg" alt="gopuff" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/chatbase.svg" alt="chatbase" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/betashares.svg" alt="betashares" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/submagic.svg" alt="submagic" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                </div>
                <div className="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-[marquee_90000ms_linear_both_infinite] will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/mozilla.svg" alt="mozilla" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/github.svg" alt="github" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/1password.svg" alt="1password" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/pwc.svg" alt="pwc" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/pika.svg" alt="pika" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/humata.svg" alt="humata" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/udio.svg" alt="udio" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/langchain.svg" alt="langchain" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/resend.svg" alt="resend" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/loops.svg" alt="loops" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/mobbin.svg" alt="mobbin" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/gopuff.svg" alt="gopuff" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/chatbase.svg" alt="chatbase" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/betashares.svg" alt="betashares" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                  <div className="h-12 lg:h-12 w-max !inline-block">
                    <img src="https://supabase.com/images/logos/publicity/submagic.svg" alt="submagic" className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block" draggable="false" />
                  </div>
                </div>
              </div>
            </div>
            <p className="w-full text-center text-sm text-gray-500 mt-6 lg:mt-8">Trusted by fast-growing companies worldwide</p>
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-blue-50/30 pointer-events-none"></div>
    </section>
  );
}
