export default function PrivacyPolicy() {
  return (
    <div className="bg-sand min-h-screen pt-48 pb-40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="w-16 h-px bg-copper mb-10"></div>
        <h1 className="text-5xl md:text-8xl text-teal-dark font-serif italic mb-20 underline decoration-copper/10 underline-offset-[24px] leading-tight">Privacy Policy</h1>
        
        <div className="space-y-16 text-ink/80 font-medium leading-[1.8]">
          <p className="text-2xl italic border-l-4 border-copper/30 pl-10 py-4 text-ink text-balance">
            At The Flying Fish, we are committed to protecting and respecting your privacy. 
            This policy explains when and why we collect personal information, how we use it, 
            and how we keep it secure.
          </p>

          <section className="space-y-8 pt-10">
            <h2 className="text-3xl font-serif italic text-teal-dark font-medium border-b border-teal-dark/5 pb-4">1. Information we collect</h2>
            <p className="opacity-90">
              We may collect and process information about you when you book a table, sign up 
              for our newsletter, or contact us via our website. This includes your name, email address, 
              phone number, and any dietary requirements you share with us.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-serif italic text-teal-dark font-medium border-b border-teal-dark/5 pb-4">2. How we use your info</h2>
            <p className="opacity-90">We use your information to:</p>
            <ul className="list-disc pl-10 space-y-6 marker:text-copper opacity-90">
              <li>Manage and confirm your restaurant bookings.</li>
              <li>Respond to your enquiries or feedback.</li>
              <li>Send you occasional marketing updates (if you have opted in).</li>
              <li>Tailor our dining experience to your specified dietary needs.</li>
            </ul>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-serif italic text-teal-dark font-medium border-b border-teal-dark/5 pb-4">3. Data Security</h2>
            <p className="opacity-90">
              We implement a variety of security measures to maintain the safety of your 
              personal information. Your information is stored on secure servers and is 
              only accessible by a limited number of persons who have special access rights.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-serif italic text-teal-dark font-medium border-b border-teal-dark/5 pb-4">4. Sharing your info</h2>
            <p className="opacity-90">
              We do not sell, trade, or otherwise transfer your personally identifiable information 
              to outside parties except for the purpose of operating our website (e.g., booking platforms 
              like OpenTable) or conducting our business, so long as those parties agree to keep this info confidential.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-serif italic text-teal-dark font-medium border-b border-teal-dark/5 pb-4">5. Your rights</h2>
            <p className="opacity-90">
              You have the right to request access to the personal information we hold about you. 
              You can also request that we correct or delete any information you believe is inaccurate. 
              Please contact us at hello@theflyingfish.co.uk for any such requests.
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
