import { useState } from 'react';
import { siteContent } from '../data/content';
import { FadeIn } from '../components/FadeIn';

export default function Program() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAq8aLuVq1yyBnZ2_xSoeKDgrV9sNOaHyn9Q0UsNlfvQlfArqjWaQTikLGFJe3zk9JQ0oNKhZz0oFl3M8dCQ-hzFAnHbtHoDCUI4P2HTLpOx--v93yZi7GL0OK7KtB2R0ad_4cKxlxdrFD7nnHDn_lsEgOklIDISEHF_YpVEQ18hOfAfaZocGceDEWtdy-KO7xGrbVkqBWpaCsIjsKSEy19XNb7dn60pfttuTfyeotg2oTCTR6VvoAHmtxP1fGyBUditTXoOAKvlk"
            alt="lush green vineyard rows stretching into a golden sunlit morning mist"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="font-headline italic text-primary text-xl mb-4">{siteContent.hero.quote}</p>
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-background">
              Conference <br className="hidden md:block" /> Program
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-px bg-outline-variant/30"></div>
              <span className="material-symbols-outlined mx-4 text-primary opacity-50">eco</span>
              <div className="w-16 h-px bg-outline-variant/30"></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Day Navigation Sidebar */}
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="sticky top-32 space-y-4">
                <h2 className="font-headline text-3xl font-bold text-primary mb-8">The Timeline</h2>
                {siteContent.schedule.map((day, index) => (
                  <button 
                    key={index} 
                    onClick={() => setSelectedDayIndex(index)}
                    className={`w-full text-left p-6 rounded-xl transition-all group ${index === selectedDayIndex ? 'bg-primary text-on-primary shadow-lg scale-105' : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface'}`}
                  >
                    <span className={`block text-xs uppercase tracking-widest mb-1 ${index === selectedDayIndex ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>{day.day}</span>
                    <span className="block text-2xl font-headline font-bold">{day.date}</span>
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Timeline Content */}
          <div className="lg:col-span-9">
            <div className="space-y-12">
              {siteContent.schedule[selectedDayIndex].events.map((event, index) => (
                <div key={index}>
                  <FadeIn delay={index * 0.1}>
                    <div className="relative pl-12 border-l border-outline-variant/30">
                      <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ring-8 ring-surface ${index === 0 ? 'bg-primary' : 'bg-outline-variant w-3 h-3 -left-1.5 ring-4'}`}></div>
                      <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-2">
                        <span className={`font-headline text-xl font-bold ${index === 0 ? 'text-primary' : 'text-on-surface-variant'}`}>{event.time}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${index === 0 ? 'bg-secondary-fixed text-on-secondary-fixed' : index === 1 ? 'bg-surface-container-highest text-on-surface-variant' : 'bg-primary-container text-on-primary-container'}`}>{event.type}</span>
                      </div>
                      <h3 className={`text-3xl font-headline font-bold text-on-background ${index === 2 ? 'italic text-4xl' : ''}`}>{event.title}</h3>
                      {event.tracks ? (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                          {event.tracks.map((track, tIndex) => (
                            <div key={tIndex} className="p-6 bg-surface-container-low rounded-xl">
                              <h4 className="font-bold text-primary mb-2">{track.name}</h4>
                              <p className="text-sm">{track.desc}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-4 text-on-surface-variant max-w-2xl leading-relaxed">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Session Highlights - Bento Grid */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-16">
              <h2 className="font-headline text-5xl font-bold mb-4">Session Highlights</h2>
              <p className="text-on-surface-variant">Tailored experiences for every member of the family.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-8 h-auto md:h-[900px]">
            {/* Sermons */}
            <FadeIn className="md:col-span-8 md:row-span-1 h-full">
              <div className="relative overflow-hidden rounded-[40px] bg-primary group h-full">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  src={siteContent.sessionHighlights.keynote.image}
                  alt={siteContent.sessionHighlights.keynote.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="text-4xl font-headline font-bold text-white mb-4">{siteContent.sessionHighlights.keynote.title}</h3>
                  <p className="text-on-primary/80 max-w-lg">
                    {siteContent.sessionHighlights.keynote.description}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Youth Track */}
            <FadeIn delay={0.2} className="md:col-span-4 md:row-span-2 h-full">
              <div className="bg-white rounded-[40px] p-10 flex flex-col justify-between shadow-sm h-full">
                <div>
                  <span className="material-symbols-outlined text-secondary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                  <h3 className="text-3xl font-headline font-bold mb-4">{siteContent.sessionHighlights.youth.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {siteContent.sessionHighlights.youth.description}
                  </p>
                </div>
                <div className="mt-12">
                  <img
                    className="w-full h-64 object-cover rounded-3xl"
                    src={siteContent.sessionHighlights.youth.image}
                    alt={siteContent.sessionHighlights.youth.title}
                  />
                </div>
              </div>
            </FadeIn>

            {/* Praise & Worship */}
            <FadeIn delay={0.2} className="md:col-span-4 md:row-span-1 h-full">
              <div className="bg-primary-container rounded-[40px] p-10 flex flex-col justify-end text-on-primary-container h-full">
                <span className="material-symbols-outlined text-4xl mb-4">music_note</span>
                <h3 className="text-2xl font-headline font-bold mb-2">{siteContent.sessionHighlights.worship.title}</h3>
                <p className="text-sm opacity-90">
                  {siteContent.sessionHighlights.worship.description}
                </p>
              </div>
            </FadeIn>

            {/* Bible Quiz */}
            <FadeIn delay={0.4} className="md:col-span-4 md:row-span-1 h-full">
              <div className="bg-surface-container-highest rounded-[40px] p-10 relative overflow-hidden border border-outline-variant/10 h-full">
                <div className="relative z-10">
                  <h3 className="text-2xl font-headline font-bold mb-4">{siteContent.sessionHighlights.quiz.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6">
                    {siteContent.sessionHighlights.quiz.description}
                  </p>
                  <a href="#" className="inline-flex items-center text-primary font-bold hover:underline">
                    Register Team
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-surface text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto px-6">
            <span className="material-symbols-outlined text-primary text-6xl mb-8" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
            <h2 className="font-headline text-5xl font-bold mb-6">Join us in {siteContent.global.location.split(',')[0]}</h2>
            <p className="text-on-surface-variant text-lg mb-12">
              Registration is currently open. Secure your place in the vineyard and prepare for a transformative three-day journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-primary text-white rounded-full text-lg font-bold hover:scale-105 transition-transform">Register Now</button>
              <button className="px-10 py-5 bg-surface-container-high text-primary rounded-full text-lg font-bold hover:bg-surface-container-highest transition-colors">View Accommodations</button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
