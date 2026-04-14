import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import { FadeIn } from '../components/FadeIn';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="font-headline text-2xl italic text-secondary mb-4">{siteContent.about.storySubtitle}</h2>
              <h1 className="font-headline text-6xl md:text-8xl text-primary font-bold leading-tight tracking-tighter mb-8">
                {siteContent.about.storyTitle.split(' ').slice(0, -1).join(' ')} <span className="italic">{siteContent.about.storyTitle.split(' ').slice(-1)}</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed font-light">
                {siteContent.about.storyDescription}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative">
              <img
                src={siteContent.about.storyImage}
                alt="Vineyard"
                className="vineyard-mask-1 w-full aspect-[4/5] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-xl shadow-xl hidden md:block">
                <span className="font-headline italic text-4xl text-primary">{siteContent.global.scripture}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Statement - Organic Divider */}
      <section className="bg-surface-container-low py-24 my-16">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
            <div className="flex justify-center mb-8">
              <span className="material-symbols-outlined text-primary-container text-5xl">nature</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-10 leading-snug">
              {siteContent.about.missionStatement}
            </h2>
            <div className="w-24 h-0.5 bg-outline-variant/30 mx-auto mb-10"></div>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
              {siteContent.about.missionDescription}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* History & Host - Bento Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-12 gap-6 md:auto-rows-[400px]">
          {/* About CFC */}
          <FadeIn className="md:col-span-7">
            <div className="bg-surface-container-lowest p-12 rounded-xl flex flex-col justify-center h-full">
              <span className="font-label uppercase tracking-widest text-secondary font-semibold mb-4">Legacy</span>
              <h3 className="font-headline text-4xl text-primary font-bold mb-6">{siteContent.about.legacyTitle}</h3>
              {siteContent.about.legacyDescription.map((paragraph, index) => (
                <p key={index} className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
          {/* History Image */}
          <FadeIn delay={0.2} className="md:col-span-5">
            <div className="bg-surface-container rounded-xl overflow-hidden h-full">
              <img
                src={siteContent.about.legacyImage}
                alt="Conference Gathering"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          {/* ACFI Image */}
          <FadeIn delay={0.2} className="md:col-span-5 order-last md:order-none">
            <div className="bg-surface-container rounded-xl overflow-hidden h-full">
              <img
                src={siteContent.about.hostImage}
                alt="Host Church"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          {/* Our Host: ACFI */}
          <FadeIn className="md:col-span-7">
            <div className="bg-surface-container-high p-12 rounded-xl flex flex-col justify-center h-full">
              <span className="font-label uppercase tracking-widest text-secondary font-semibold mb-4">Host City</span>
              <h3 className="font-headline text-4xl text-primary font-bold mb-6">{siteContent.about.hostTitle}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                {siteContent.about.hostDescription}
              </p>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <span className="text-primary font-medium">{siteContent.global.location}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Leadership - Asymmetric Layout */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-screen-2xl mx-auto bg-surface">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-headline text-5xl text-primary font-bold mb-4">Leadership &amp; Heart</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              The dedicated team at ACFI and the CFC board working together to prepare the vineyard for your arrival.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {siteContent.about.leadership.map((leader, index) => (
            <React.Fragment key={index}>
              <FadeIn delay={index * 0.2}>
                <div className={`group ${index === 1 ? 'md:mt-12' : ''}`}>
                  <div className={`vineyard-mask-${index % 2 === 0 ? '2' : '1'} overflow-hidden mb-6 aspect-square bg-surface-container`}>
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h4 className="font-headline text-2xl text-primary font-bold">{leader.name}</h4>
                  <p className="text-secondary font-medium">{leader.role}</p>
                </div>
              </FadeIn>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <FadeIn>
          <div className="bg-primary rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDGmrUIlbsoZG7o1PD68C7wO1NgVMIFFe7K5niTrTiL39gYVKW1s0o-sMhOjTXegaUD76tRL9ZQlIro5R_pBVDJuWPhj4T-hHFSxG2TVsuBnQ1mY2rrgsJGIHD0h5UBTS87edyEYgqhoMMIBHpTf4q5pszM4sAlWZmyYp2-mox2NgbLYuHV379hVogVRISskR1knKvPyWpqfzw8R5FbPSNYoAEUgia5FIXkTV97zPgY7wz1xRS9kX3x5IoChBp4rDqmaD_SRQLYF0"
                alt="Pattern"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-6xl text-on-primary font-bold mb-8 italic">Ready to Abide?</h2>
              <p className="text-on-primary/80 text-xl max-w-2xl mx-auto mb-12 font-light">
                Join us in {siteContent.global.location.split(',')[0]} for a transformative weekend. Experience the peace of the vineyard and the joy of community.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link
                  to="/registration"
                  className="bg-surface text-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all inline-block"
                >
                  Register Now
                </Link>
                <Link
                  to="/program"
                  className="border border-on-primary/30 text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-on-primary/10 transition-all inline-block"
                >
                  View Schedule
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
