import { motion } from 'motion/react';
import { Leaf, Award, Heart, ShieldCheck } from 'lucide-react';

import aboutIntro from '../assets/images/about-intro.jpg';
import interiorDetail from '../assets/images/interior-detail.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';

const values = [
  {
    icon: <Leaf className="text-teal-mid" />,
    title: "Seasonal Focus",
    desc: "Our menu changes at least four times a year, reflecting the exact moment in the Somerset agricultural calendar."
  },
  {
    icon: <Award className="text-teal-mid" />,
    title: "Artisan Sourcing",
    desc: "We prioritize small batch producers, from our cave-aged cheddar to our hand-dived scallops from the Cornish coast."
  },
  {
    icon: <Heart className="text-teal-mid" />,
    title: "Warm Hospitality",
    desc: "We believe fine dining should be welcoming. Our staff are trained to provide a service that is both observant and effortless."
  },
  {
    icon: <ShieldCheck className="text-teal-mid" />,
    title: "Sustainability",
    desc: "We aim to minimize our footprint through zero-waste kitchen practices and plastic-free sourcing where possible."
  }
];

export default function About() {
  return (
    <div className="bg-sand">
      {/* Header */}
      <section className="bg-mist pt-48 pb-32 border-b border-teal-soft">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="w-12 h-px bg-copper mb-6"></div>
            <span className="text-copper uppercase tracking-[0.4em] text-[10px] font-black block">Our Heritage</span>
            <h1 className="text-5xl md:text-8xl text-teal-dark leading-[1.05] tracking-tight font-serif italic italic">
              A Love Letter to <br /><span className="font-light not-italic text-teal-mid">Somerset</span>
            </h1>
            <p className="text-ink text-xl font-medium leading-relaxed max-w-lg italic opacity-80 border-l-2 border-copper/30 pl-8">
              The Flying Fish is owned and operated by husband and wife team Buddy and Kate. 
              Together, they bring a unique blend of Caribbean warmth and Somerset charm to every guest's experience.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img 
              src={aboutIntro} 
              alt="The founders outside the restaurant" 
              className="w-full h-[600px] object-cover rounded-sm shadow-2xl border border-teal-soft" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-48 px-6 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic">Meet Your <span className="font-light not-italic text-teal-mid">Hosts.</span></h2>
            <div className="space-y-8 text-ink/80 text-xl leading-relaxed italic font-medium">
              <p>
                Buddy hails from the beautiful island of Barbados, where flying fish are abundant. He brings his relaxed, friendly Caribbean vibe, family recipes and the perfect Rum Punch to the table.
              </p>
              <p>
                Kate was born and raised in Surrey. A former Metropolitan Police Detective, she loves to chat with guests and the only ‘grilling’ she gives these days is to your food!
              </p>
              <p>
                Together, they make perfect hosts and along with their staff, you are assured of a warm welcome and fantastic service with a personal touch.
              </p>
              <div className="pt-8 border-t border-teal-dark/10">
                <p className="text-2xl font-serif italic text-teal-dark font-light leading-relaxed">
                  "A lovely welcome on arrival. Nothing was too much trouble. A rum tasting dessert with Buddy at the end of the evening was wonderful."
                </p>
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-copper mt-4">— Kim W</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={interiorDetail} 
              alt="The welcoming atmosphere" 
              className="w-full h-[600px] object-cover rounded-sm shadow-2xl border border-teal-soft" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-teal-dark p-12 rounded-sm shadow-2xl hidden md:block border border-teal-soft">
              <p className="text-sand font-serif italic text-3xl mb-2">Caribbean Heart</p>
              <p className="text-sand/50 text-[10px] uppercase tracking-[0.4em] font-black">Somerset Soul</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 md:py-48 px-6 bg-mist text-teal-dark border-y border-teal-soft">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="space-y-10 group border border-teal-dark/5 p-10 rounded-sm hover:border-teal-mid transition-all bg-sand/50 shadow-sm"
              >
                <div className="w-14 h-14 rounded-sm bg-teal-dark/5 flex items-center justify-center group-hover:bg-teal-dark group-hover:text-sand transition-all duration-500 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-serif italic text-teal-dark">{v.title}</h3>
                <p className="text-ink/70 text-sm font-medium leading-relaxed uppercase tracking-wider">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Atmosphere Section */}
      <section className="py-24 md:py-48 px-6 bg-mist border-t border-teal-soft">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="grid grid-cols-2 gap-6">
            <img 
              src={gallery1} 
              alt="Interior atmosphere" 
              className="w-full h-96 object-cover rounded-sm mt-12 border border-teal-soft shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-6">
               <img 
                src={gallery2} 
                alt="Table setting" 
                className="w-full h-72 object-cover rounded-sm shadow-xl border border-teal-soft"
                referrerPolicy="no-referrer"
              />
               <img 
                src={gallery3} 
                alt="Wine cellar" 
                className="w-full h-72 object-cover rounded-sm shadow-xl border border-teal-soft"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="space-y-10">
            <div className="w-12 h-px bg-copper mb-6"></div>
            <span className="text-copper uppercase tracking-[0.3em] text-[10px] font-black block">The Experience</span>
            <h2 className="text-4xl md:text-7xl text-teal-dark font-serif italic">Comfort in every <br /><span className="font-light not-italic text-teal-mid">corner.</span></h2>
            <div className="space-y-6 text-ink/80 text-xl leading-relaxed font-normal">
              <p>
                Housed in a meticulously restored 17th-century coaching inn, The Flying Fish balances historic charm with modern comfort. Exposed beams, low lighting, and crackling fires in winter create a sense of timeless tranquility.
              </p>
              <p>
                Whether you're visiting for a quick lunch on the terrace or a celebratory five-course feast, we've designed our space to make you feel as though you've stepped into the home of a dear friend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
