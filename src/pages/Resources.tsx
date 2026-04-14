import React from 'react';
import { siteContent } from '../data/content';
import { FadeIn } from '../components/FadeIn';

export default function Resources() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-6">
              <h1 className="font-headline text-6xl md:text-8xl text-primary tracking-tight leading-none">
                Equipping <span className="italic font-normal">the</span> Vine
              </h1>
              <p className="text-on-surface-variant text-xl max-w-md leading-relaxed">
                Access essential materials, media, and travel information to prepare your heart for the {siteContent.global.conferenceName} experience in {siteContent.global.location.split(',')[0]}.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="organic-mask-1 overflow-hidden h-[400px] shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDel-rdI8qqejIY1C1bbx4gOLmRrZlhiPSpoW1iPlWD2S0OwvXNj3bdKqT41lTirUIts9eDdNUr2mQVZJ_Lgj2FZjJ8cX4SJ2SSeV2rERzMeu06LWAn7liogePOVw9ORD9oZCxo6-NHqLUjt2xwne2DDFCaCMAccGRV8w5U4ySJSLihP-p6GALt4DVsEgwbC180FhxShPTgoOPmNm2aw2E8dVqGjWdAFWnG6UygbhA9y21AFbB-6ykeVydfHh6Mrqh8uAUw1J4qQxE"
                  alt="Close up of lush green grape leaves in a vineyard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 organic-mask-2 border-8 border-surface overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkbG26wt-sk_Hj88tnLZsFqPIQvvuZ48XIML9PK-rc1inemhYJ6lg3eNoNmA3MqhI7-pGfADXsjNrhx5FZjkEBc9m8xdDSEi3n-Mr_OUj0cPysFJAR0J2B8xsDr86K0TSlOBzFMdlm42cOsU9p8aUGXmjcmYv9OaoFmCUOP1oEglCV-acx_G7DPUzP60NsMRlWtQLEtfJkol58YJIMb8NIGyUDRfzOZVUS8AeaTRwGiBqOzE93NXS50pt0WYiOvgk106_p4Xg9OgA"
                  alt="Handwritten leather journal and a wooden pen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Downloadable Materials: Bento Grid */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-headline text-4xl text-primary">Downloadable Materials</h2>
              <div className="w-24 h-[1px] bg-outline-variant/30 hidden md:block"></div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.resources.downloads.map((download, index) => (
              <React.Fragment key={index}>
                <FadeIn delay={index * 0.1}>
                  <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between group hover:bg-surface-bright transition-all duration-500 h-full">
                    <div>
                      <span className={`material-symbols-outlined text-4xl mb-6 ${index === 0 ? 'text-primary' : index === 1 ? 'text-tertiary' : 'text-primary-container'}`}>{download.icon}</span>
                      <h3 className="text-2xl font-headline mb-3">{download.title}</h3>
                      <p className="text-on-surface-variant text-sm mb-6">{download.description}</p>
                    </div>
                    <a href={download.link} className={`flex items-center font-semibold gap-2 group-hover:underline ${index === 0 ? 'text-primary' : index === 1 ? 'text-tertiary' : 'text-primary-container'}`}>
                      <span className="material-symbols-outlined">download</span> Download {download.title.split(' ')[0]}
                    </a>
                  </div>
                </FadeIn>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <FadeIn>
            <h2 className="font-headline text-4xl text-primary mb-12">Media Gallery</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {siteContent.resources.mediaGallery.map((media, index) => (
              <React.Fragment key={index}>
                <FadeIn delay={index * 0.1} className={`${index === 0 ? 'md:col-span-2 md:row-span-2' : index === 3 ? 'md:col-span-2 aspect-video' : 'aspect-video'}`}>
                  <div className={`relative overflow-hidden rounded-xl group cursor-pointer h-full w-full`}>
                    <img
                      src={media.image}
                      alt={media.title}
                      className={`w-full h-full object-cover transition-transform ${index === 0 ? 'duration-700 group-hover:scale-105' : 'group-hover:scale-105'}`}
                    />
                    {index === 0 ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex items-end p-8">
                          <div>
                            <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 inline-block">Featured Video</span>
                            <h4 className="text-white text-2xl font-headline">{media.title}</h4>
                          </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="material-symbols-outlined text-white text-7xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-on-background/20 group-hover:bg-on-background/40 transition-colors flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-4xl">{media.type === 'video' ? 'play_arrow' : 'photo_library'}</span>
                      </div>
                    )}
                  </div>
                </FadeIn>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="bg-surface-container py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <FadeIn>
              <h2 className="font-headline text-4xl text-primary mb-6 italic">{siteContent.global.location.split(',')[0]} Travel Guide</h2>
              <p className="text-on-surface-variant mb-8">
                Everything you need to know about your stay in the Heart of Texas. From the best local coffee to quiet prayer spots in the city.
              </p>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-bright transition-colors group">
                  <span className="material-symbols-outlined text-tertiary">hotel</span>
                  <span className="font-medium text-on-surface">Partner Hotels &amp; Lodging</span>
                  <span className="material-symbols-outlined ml-auto text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-bright transition-colors group">
                  <span className="material-symbols-outlined text-primary">directions_bus</span>
                  <span className="font-medium text-on-surface">Airport &amp; City Shuttle Info</span>
                  <span className="material-symbols-outlined ml-auto text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-bright transition-colors group">
                  <span className="material-symbols-outlined text-primary-container">restaurant</span>
                  <span className="font-medium text-on-surface">Dining &amp; Coffee Recommendations</span>
                  <span className="material-symbols-outlined ml-auto text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </a>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-8">
            <FadeIn delay={0.2} className="h-full">
              <div className="rounded-2xl overflow-hidden shadow-sm h-full min-h-[400px]">
                <img
                  src={siteContent.resources.travelGuideMap}
                  alt={`Modern stylized map of ${siteContent.global.location}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <span className="material-symbols-outlined text-tertiary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
            </div>
            <h2 className="font-headline text-4xl text-primary mb-4">Abide with us throughout the year</h2>
            <p className="text-on-surface-variant mb-10 text-lg">
              Receive monthly reflections, conference updates, and exclusive resources delivered to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 bg-surface-container-high border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary placeholder:text-on-surface-variant/50"
              />
              <button type="submit" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:bg-primary-container transition-all">
                Join Newsletter
              </button>
            </form>
            <p className="text-xs text-on-surface-variant/60 mt-4 uppercase tracking-widest">We honor your privacy and peace.</p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
