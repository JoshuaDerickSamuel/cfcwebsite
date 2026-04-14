import React from 'react';
import { siteContent } from '../data/content';
import { FadeIn } from '../components/FadeIn';

export default function Registration() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registration form submitted! (Backend integration pending)");
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <FadeIn>
          <header className="mb-16 text-center">
            <span className="text-primary font-headline italic text-xl mb-4 block">Abide in Him</span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tight mb-6">
              Join the Vineyard - Register for {siteContent.global.conferenceName}
            </h1>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
              Come away to the garden. Secure your place at the {siteContent.global.conferenceName} as we explore what it means to be branches truly connected to the Vine.
            </p>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Registration Form Side */}
          <div className="lg:col-span-7 space-y-12">
            <FadeIn delay={0.1}>
              <section className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  </span>
                  <h2 className="text-2xl font-headline font-bold text-on-surface">Personal Information</h2>
                </div>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-on-surface-variant ml-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-surface-container border-none border-b-2 border-transparent focus:ring-0 focus:border-primary rounded-xl px-4 py-4 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-on-surface-variant ml-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-surface-container border-none border-b-2 border-transparent focus:ring-0 focus:border-primary rounded-xl px-4 py-4 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant ml-1">Church Affiliation</label>
                    <input
                      type="text"
                      placeholder="Your home church"
                      className="w-full bg-surface-container border-none border-b-2 border-transparent focus:ring-0 focus:border-primary rounded-xl px-4 py-4 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-on-surface-variant ml-1">Age Group</label>
                      <select className="w-full bg-surface-container border-none border-b-2 border-transparent focus:ring-0 focus:border-primary rounded-xl px-4 py-4 transition-all appearance-none">
                        <option>Select Age Group</option>
                        <option>Child (Under 12)</option>
                        <option>Youth (13-18)</option>
                        <option>Adult (19+)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-on-surface-variant ml-1">T-shirt size</label>
                      <select className="w-full bg-surface-container border-none border-b-2 border-transparent focus:ring-0 focus:border-primary rounded-xl px-4 py-4 transition-all appearance-none">
                        <option>Select Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant ml-1">Dietary Restrictions</label>
                    <textarea
                      rows={3}
                      placeholder="Please list any allergies or dietary needs"
                      className="w-full bg-surface-container border-none border-b-2 border-transparent focus:ring-0 focus:border-primary rounded-xl px-4 py-4 transition-all"
                    ></textarea>
                  </div>
                </form>
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section className="bg-surface-container-low rounded-[2.5rem] overflow-hidden relative min-h-[300px] flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI54VoAIH8_rkbW9Hdpc_Ar4tvaTc73TwtawtXo0IT_41gWhEcEiPCbV5iAEQpaWOebhTSH5xvDX99iaaTS7XpgeLzUDnlgBispfIAk44JEtew-fAugdqtPEbjy7YCc1nORUxh2XLuOEovKxDgAKfU1GxkVlStvEiPWn5Em2U1TEUMslEohGmQniH6tG5iSitiDOmMsY63o2ItCwtu63EWTvNmyoK96ta4zqnbxU1xGcw6sD3-2gJMJO6a9HEomdNvWDxJ5LrNPbM"
                  alt="Vineyard at sunset"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
                />
                <div className="relative z-10 text-center px-8">
                  <p className="font-headline italic text-2xl text-primary leading-relaxed">
                    {siteContent.global.scripture}
                  </p>
                </div>
              </section>
            </FadeIn>
          </div>

          {/* Payment & Confirmation Side */}
          <div className="lg:col-span-5 space-y-8 sticky top-32">
            <FadeIn delay={0.3}>
              <section className="bg-surface-container-highest rounded-[2.5rem] p-8">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                  </span>
                  <h2 className="text-2xl font-headline font-bold text-on-surface">Secure Payment</h2>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-surface-container-lowest rounded-2xl flex items-center gap-4 border border-outline-variant/10">
                    <div className="bg-primary-fixed/20 p-2 rounded-lg text-primary">
                      <span className="material-symbols-outlined">credit_card</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Selected Plan</p>
                      <p className="font-bold text-lg text-primary">Standard Registration</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-on-surface">$149</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="Name on card"
                        className="w-full bg-surface-bright border-none focus:ring-0 rounded-xl px-4 py-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          className="w-full bg-surface-bright border-none focus:ring-0 rounded-xl px-4 py-3"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 opacity-40">
                          <span className="material-symbols-outlined text-sm">credit_card</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full bg-surface-bright border-none focus:ring-0 rounded-xl px-4 py-3"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full bg-surface-bright border-none focus:ring-0 rounded-xl px-4 py-3"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <div className="flex justify-between text-sm text-on-surface-variant px-1">
                      <span>Subtotal</span>
                      <span>$149.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-on-surface-variant px-1">
                      <span>Processing Fee</span>
                      <span>$4.50</span>
                    </div>
                    <div className="vine-divider my-2"></div>
                    <div className="flex justify-between font-bold text-xl text-primary px-1">
                      <span>Total</span>
                      <span>$153.50</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-lg hover:bg-primary-container transition-all active:scale-95 shadow-xl shadow-primary/10"
                  >
                    Complete Registration
                  </button>
                  <p className="text-center text-xs text-on-surface-variant/60 flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Encrypted &amp; Secure Payment Processing
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Trust/Support Card */}
            <FadeIn delay={0.4}>
              <div className="p-6 rounded-[2rem] border border-outline-variant/15 flex items-center gap-4 bg-surface-container-low">
                <div className="bg-surface-bright p-3 rounded-2xl">
                  <span className="material-symbols-outlined text-primary">help_outline</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Need Help?</h4>
                  <p className="text-xs text-on-surface-variant">Our support team is here to help with your registration.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
