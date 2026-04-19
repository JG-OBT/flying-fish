export default function CookiePolicy() {
  return (
    <div className="bg-sand min-h-screen pt-48 pb-40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="w-16 h-px bg-copper mb-10"></div>
        <h1 className="text-5xl md:text-8xl text-teal-dark font-serif italic mb-20 underline decoration-copper/10 underline-offset-[24px] leading-tight">Cookie Policy</h1>
        
        <div className="space-y-16 text-ink/80 font-medium leading-[1.8]">
          <p className="text-2xl italic border-l-4 border-copper/30 pl-10 py-4 text-ink text-balance">
            This site uses cookies—small text files that are placed on your machine to help 
            the site provide a better user experience.
          </p>

          <section className="space-y-8 pt-10">
            <h2 className="text-3xl font-serif italic text-teal-dark font-medium border-b border-teal-dark/5 pb-4">How we use cookies</h2>
            <p className="opacity-90">
              In general, cookies are used to retain user preferences, store information for things 
              like booking carts, and provide anonymised tracking data to third party applications 
              like Google Analytics.
            </p>
          </section>

          <section className="space-y-12">
            <h2 className="text-3xl font-serif italic text-teal-dark font-medium border-b border-teal-dark/5 pb-4">Types of cookies we use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-10 bg-mist rounded-sm border border-teal-dark/5 shadow-sm">
                <h3 className="text-sm font-black text-copper uppercase tracking-[0.3em] mb-4">Essential</h3>
                <p className="text-xs leading-relaxed opacity-70 font-bold uppercase tracking-widest text-ink">Necessary for the website to function, such as storing your booking progress.</p>
              </div>
              <div className="p-10 bg-mist rounded-sm border border-teal-dark/5 shadow-sm">
                <h3 className="text-sm font-black text-copper uppercase tracking-[0.3em] mb-4">Performance</h3>
                <p className="text-xs leading-relaxed opacity-70 font-bold uppercase tracking-widest text-ink">Helps us understand how visitors interact with our site through anonymous data.</p>
              </div>
              <div className="p-10 bg-mist rounded-sm border border-teal-dark/5 shadow-sm">
                <h3 className="text-sm font-black text-copper uppercase tracking-[0.3em] mb-4">Preference</h3>
                <p className="text-xs leading-relaxed opacity-70 font-bold uppercase tracking-widest text-ink">Allows us to remember your choices (like your preferred language or region).</p>
              </div>
              <div className="p-10 bg-mist rounded-sm border border-teal-dark/5 shadow-sm">
                <h3 className="text-sm font-black text-copper uppercase tracking-[0.3em] mb-4">Marketing</h3>
                <p className="text-xs leading-relaxed opacity-70 font-bold uppercase tracking-widest text-ink">Used to track visitors across websites to display relevant advertisements.</p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-serif italic text-teal-dark font-medium border-b border-teal-dark/5 pb-4">Managing Cookies</h2>
            <p className="opacity-90">
              As a rule, cookies will make your browsing experience better. However, you may 
              prefer to disable cookies on this site and on others. The most effective way to 
              do this is to disable cookies in your browser. 
            </p>
            <p className="opacity-90">
              We suggest consulting the Help section of your browser or taking a look at 
              <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-copper font-black underline underline-offset-4 ml-1 hover:text-teal-dark transition-colors">
                the About Cookies website
              </a> which offers guidance for all modern browsers.
            </p>
          </section>

          <p className="pt-24 text-[10px] uppercase tracking-[0.4em] text-copper/60 font-black">
            Last updated: April 2026
          </p>
        </div>
      </div>
    </div>
  );
}
