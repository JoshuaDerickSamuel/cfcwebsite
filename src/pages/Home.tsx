import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, animate } from 'motion/react';
import { siteContent } from '../data/content';
import { FadeIn } from '../components/FadeIn';

const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);
  const initialValue = useRef(value);

  useEffect(() => {
    const controls = animate(0, initialValue.current, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(Math.round(v)),
      onComplete: () => { hasAnimated.current = true; }
    });
    return controls.stop;
  }, []);

  useEffect(() => {
    if (hasAnimated.current) {
      setDisplayValue(value);
    }
  }, [value]);

  return <span>{displayValue.toString().padStart(2, '0')}</span>;
};

const CountdownTimer = () => {
  const targetDate = new Date(siteContent.global.countdownTarget).getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 md:gap-6 items-baseline text-primary">
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-headline font-bold"><AnimatedNumber value={timeLeft.days} /></span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-60">Days</span>
      </div>
      <span className="text-xl md:text-2xl font-light opacity-30">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-headline font-bold"><AnimatedNumber value={timeLeft.hours} /></span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-60">Hrs</span>
      </div>
      <span className="text-xl md:text-2xl font-light opacity-30">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-headline font-bold"><AnimatedNumber value={timeLeft.minutes} /></span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-60">Min</span>
      </div>
      <span className="text-xl md:text-2xl font-light opacity-30">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-headline font-bold"><AnimatedNumber value={timeLeft.seconds} /></span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-60">Sec</span>
      </div>
    </div>
  );
};

export default function Home() {
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const videoRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);

  const nextHighlight = () => setActiveHighlight((prev) => (prev + 1) % siteContent.programHighlights.length);
  const prevHighlight = () => setActiveHighlight((prev) => (prev - 1 + siteContent.programHighlights.length) % siteContent.programHighlights.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVideoPlaying(true);
          observer.disconnect(); // Only play once
        }
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center pt-32 pb-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 bg-center bg-cover opacity-20 scale-[1.15]"
          style={{ 
            backgroundImage: `url(${siteContent.hero.backgroundImage})`,
            y: heroY
          }}
        ></motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <FadeIn delay={0.8}>
              <span className="inline-block px-4 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label text-sm font-semibold mb-6 tracking-widest uppercase">
                Annual Christian Family Conference
              </span>
            </FadeIn>
            
            <motion.div
              initial={{ opacity: 0, scale: 1.15, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-headline text-7xl md:text-9xl text-primary font-bold leading-[0.9] tracking-tighter mb-8">
                {siteContent.hero.title} <br />
                <span className="italic font-normal text-secondary ml-12 md:ml-24">{siteContent.hero.subtitle}</span>
              </h1>
            </motion.div>

            <FadeIn delay={1.0}>
              <p className="font-headline text-xl md:text-2xl text-on-surface-variant italic mb-12 max-w-xl">
                {siteContent.hero.quote}
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <Link
                  to="/registration"
                  className="px-10 py-5 bg-primary text-on-primary text-xl font-bold rounded-xl editorial-shadow hover:scale-105 transition-transform inline-block"
                >
                  Register Now
                </Link>
                {/* Countdown Timer */}
                <CountdownTimer />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pastor's Invitation Section */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative group" ref={videoRef}>
                <div className="w-full max-w-[320px] mx-auto aspect-[9/16] bg-surface-container-highest rounded-[40px] overflow-hidden editorial-shadow relative">
                  {isVideoPlaying ? (
                    <iframe
                      className="w-full h-full"
                      src={`${siteContent.pastorInvitation.videoUrl}?autoplay=1&mute=1`}
                      title="Pastor's Invitation"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        className="w-full h-full object-cover cursor-pointer"
                        src={siteContent.pastorInvitation.videoThumbnail}
                        alt="Warm and welcoming interior of a modern church"
                        onClick={() => setIsVideoPlaying(true)}
                      />
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/0 transition-colors cursor-pointer pointer-events-none"
                      >
                        <div className="w-20 h-20 bg-on-primary text-primary rounded-full flex items-center justify-center editorial-shadow">
                          <span className="material-symbols-outlined text-4xl">play_arrow</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary-fixed/30 rounded-full blur-3xl -z-10"></div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-8">{siteContent.pastorInvitation.title}</h2>
                <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
                  <p className="italic text-primary font-headline text-xl">
                    {siteContent.pastorInvitation.quote}
                  </p>
                  {siteContent.pastorInvitation.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <div className="pt-4">
                    <p className="font-headline font-bold text-primary">{siteContent.pastorInvitation.author}</p>
                    <p className="text-sm opacity-70">{siteContent.pastorInvitation.authorTitle}</p>
                  </div>
                  <div className="pt-6 flex gap-6 items-center">
                    <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:underline decoration-dotted">
                      Learn More About CFC
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section 
        className="py-32 relative overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdf2e9]/95 via-[#fdf2e9]/80 to-[#fdf2e9]/40 backdrop-blur-[1px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <FadeIn>
              <div className="max-w-xl">
                <h2 className="font-headline text-5xl md:text-6xl text-[#0a3622] font-bold mb-4 tracking-tight">Event Details</h2>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed font-medium">
                  Mark your calendars for an unforgettable gathering of faith, family, and fellowship in the heart of Texas.
                </p>
                <Link
                  to="/registration"
                  className="px-8 py-4 bg-[#0a3622] text-white font-bold rounded-full hover:bg-[#0a3622]/90 transition-all shadow-lg inline-block text-sm tracking-wide"
                >
                  Register for {siteContent.global.location.split(',')[0]} {siteContent.global.dates.split(',')[1].trim()}
                </Link>
              </div>
            </FadeIn>
            
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Dates Card */}
              <FadeIn delay={0.2}>
                <div className="bg-[#fdfbf7] p-8 rounded-[32px] shadow-xl min-w-[220px]">
                  <div className="w-12 h-12 bg-[#bbf7d0] rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[#166534]">calendar_month</span>
                  </div>
                  <h4 className="font-headline font-bold text-gray-900 text-xl mb-1">Dates</h4>
                  <p className="text-gray-600 text-sm font-medium">{siteContent.global.dates}</p>
                </div>
              </FadeIn>
              
              {/* Location Card */}
              <FadeIn delay={0.4}>
                <div className="bg-[#fdfbf7] p-8 rounded-[32px] shadow-xl min-w-[220px]">
                  <div className="w-12 h-12 bg-[#e9d5ff] rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[#6b21a8]">location_on</span>
                  </div>
                  <h4 className="font-headline font-bold text-gray-900 text-xl mb-1">Location</h4>
                  <p className="text-gray-600 text-sm font-medium">{siteContent.global.location}</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-32 bg-surface-container-low overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-headline text-5xl md:text-6xl text-primary font-bold tracking-tight">Program Highlights</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center mb-16">
              {/* Left Arrow */}
              <button
                onClick={prevHighlight}
                className="absolute left-0 md:left-8 z-30 p-2 text-primary hover:scale-110 transition-transform"
              >
                <span className="material-symbols-outlined text-5xl md:text-7xl">arrow_back_ios</span>
              </button>

              {/* Carousel Track */}
              <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                {siteContent.programHighlights.map((highlight, index) => {
                  let offset = index - activeHighlight;
                  if (offset < -1) offset += siteContent.programHighlights.length;
                  if (offset > 1) offset -= siteContent.programHighlights.length;

                  let translateX = offset * 115; // 115% to create a gap
                  let scale = offset === 0 ? 1 : 0.85;
                  let zIndex = offset === 0 ? 20 : 10;
                  let opacity = offset === 0 ? 1 : 0.4;

                  return (
                    <div
                      key={index}
                      className="absolute top-0 bottom-0 w-[65%] md:w-[380px] transition-all duration-700 ease-in-out rounded-[40px] overflow-hidden cursor-pointer shadow-2xl"
                      style={{
                        transform: `translateX(${translateX}%) scale(${scale})`,
                        zIndex,
                        opacity
                      }}
                      onClick={() => setActiveHighlight(index)}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={highlight.image}
                        alt={highlight.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <h3 className="absolute bottom-10 w-full text-center text-white font-headline text-3xl md:text-5xl font-bold tracking-widest uppercase px-4">
                        {highlight.title}
                      </h3>
                    </div>
                  );
                })}
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextHighlight}
                className="absolute right-0 md:right-8 z-30 p-2 text-primary hover:scale-110 transition-transform"
              >
                <span className="material-symbols-outlined text-5xl md:text-7xl">arrow_forward_ios</span>
              </button>
            </div>
          </FadeIn>

          {/* Active Highlight Description */}
          <FadeIn delay={0.4}>
            <div className="max-w-3xl mx-auto text-center px-4">
              <h3 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-6 uppercase tracking-widest">
                {siteContent.programHighlights[activeHighlight].title}
              </h3>
              <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed">
                {siteContent.programHighlights[activeHighlight].description}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Schedule At-A-Glance Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="bg-primary text-on-primary rounded-[60px] p-12 md:p-16 lg:p-28 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <span className="material-symbols-outlined text-[200px]">schedule</span>
              </div>
              <div className="relative z-10">
                <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-12">Schedule At-A-Glance</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
                  {siteContent.schedule.map((day, index) => (
                    <div key={index} className="border-l-2 border-on-primary/30 pl-8 md:pl-10">
                      <h4 className="font-bold text-2xl mb-3">{day.title}</h4>
                      <p className="text-lg opacity-90">{day.summary}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/program"
                  className="px-10 py-5 bg-on-primary text-primary text-lg font-bold rounded-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors inline-block"
                >
                  View Detailed Program
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Summary Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-6">Questions?</h2>
                <p className="text-on-surface-variant">
                  We've gathered the most common inquiries to help you prepare for {siteContent.global.conferenceName}.
                </p>
              </div>
            </FadeIn>
            <div className="space-y-6 mb-12">
              {(showAllFaqs ? siteContent.faqs : siteContent.faqs.slice(0, 2)).map((faq, index) => (
                <div key={index}>
                  <FadeIn delay={index * 0.1}>
                    <div className="bg-surface p-8 rounded-3xl editorial-shadow">
                      <h4 className="font-bold text-primary mb-2">{faq.question}</h4>
                      <p className="text-on-surface-variant">
                        {faq.answer}
                      </p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <button 
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-on-primary transition-colors inline-block"
                >
                  {showAllFaqs ? 'Show Less' : 'View All FAQs'}
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
