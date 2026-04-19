import { motion } from 'motion/react';
import { ChefHat, Info } from 'lucide-react';
import chefPlate from '../assets/images/chef-plate.jpg';

const menuSections = [
  {
    title: "To Begin",
    description: "Starters focused on freshness and texture",
    items: [
      { name: "Somerset Cider Onion Soup", price: "£9", desc: "Classic onion soup enriched with local cider, topped with cave-aged cheddar croutons." },
      { name: "Potted Smoked Trout", price: "£11", desc: "Locally smoked trout, dill butter, pickled cucumber, toasted sourdough." },
      { name: "Heritage Beetroot & Whipped Goat's Cheese", price: "£10", desc: "Roasted beets, honeyed walnuts, watercress, balsamic pearls.", vegetarian: true },
      { name: "Pan-Seared Scallops", price: "£14", desc: "Wild scallops, cauliflower purée, crisp pancetta, caper raisin dressing." }
    ]
  },
  {
    title: "Mains from Land & Sea",
    description: "Our signature dishes celebrating the best of British produce",
    items: [
      { name: "West Country Venison Loin", price: "£28", desc: "Juniper-crusted venison, braised red cabbage, parsnip crisps, blackberry jus." },
      { name: "Cornish Market Fish of the Day", price: "£MP", desc: "Sustainably sourced day-boat fish, samphire, crushed jersey royals, brown butter sauce." },
      { name: "Slow-Cooked Pork Belly", price: "£24", desc: "Orchard-fed pork, apple gel, black pudding croquette, mustard mash." },
      { name: "Wild Mushroom Risotto", price: "£19", desc: "Carnaroli rice, foraged mushrooms, truffle oil, pecorino shavings.", vegetarian: true },
      { name: "Flying Fish Fish & Chips", price: "£18", desc: "Line-caught haddock in ale batter, triple-cooked chips, crushed peas, tartare sauce." }
    ]
  },
  {
    title: "From the Grill",
    description: "Dry-aged heritage beef, aged for 28 days for maximum flavor",
    items: [
      { name: "8oz West Country Sirloin", price: "£26", desc: "Served with vine tomatoes, portobello mushroom, and triple-cooked chips." },
      { name: "10oz Ribeye", price: "£29", desc: "Marbled beef for richness. Served with bone marrow butter and seasonal greens." },
      { name: "The Flying Fish Burger", price: "£17", desc: "High-quality beef patty, smoked bacon, cheddar, brioche bun, skin-on fries." }
    ]
  },
  {
    title: "Something Sweet",
    description: "Indulgent desserts crafted by our pastry chef",
    items: [
      { name: "Warm Treacle Tart", price: "£9", desc: "Traditional English favorite served with clotted cream and stem ginger." },
      { name: "Local Apple & Blackberry Crumble", price: "£8", desc: "Served with bird's custard or vanilla bean gelato." },
      { name: "Somerset Cheese Selection", price: "£12", desc: "Artisanal cheeses from independent local makers, quince paste, crackers." },
      { name: "Dark Chocolate & Sea Salt Fondant", price: "£10", desc: "Baked to order, please allow 15 minutes. Served with honeycomb." }
    ]
  }
];

export default function Menu() {
  return (
    <div className="bg-sand min-h-screen">
      {/* Header Overlay Section */}
      <section className="bg-mist pt-48 pb-24 relative overflow-hidden border-b border-teal-soft">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 flex justify-center items-center pointer-events-none">
            <ChefHat size={600} className="text-teal-dark" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-px bg-copper mx-auto mb-10"></div>
            <span className="text-copper uppercase tracking-[0.4em] text-[10px] font-black block mb-4">The Culinary Experience</span>
            <h1 className="text-5xl md:text-8xl text-teal-dark mb-8 italic font-serif leading-tight">The Menu</h1>
            <p className="max-w-2xl mx-auto text-ink/70 font-medium leading-relaxed text-sm lg:text-base italic">
              Our menus are a reflection of the seasons and the rich terroir of Somerset. 
              We work with over 15 local suppliers to ensure excellence in every bite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-24 md:py-40 bg-sand">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-36">
            {menuSections.map((section, sIdx) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sIdx * 0.15 }}
              >
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-3xl md:text-5xl text-teal-dark font-serif italic">{section.title}</h2>
                  <p className="text-teal-mid text-[10px] uppercase tracking-[0.4em] font-black">{section.description}</p>
                  <div className="w-16 h-px bg-teal-dark/10 mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
                  {section.items.map((item, iIdx) => (
                    <div key={item.name} className="flex flex-col gap-4 group">
                      <div className="flex justify-between items-baseline border-b border-teal-dark/5 pb-4">
                        <h3 className="text-lg text-teal-dark group-hover:text-copper transition-colors font-serif italic font-medium">
                          {item.name}
                          {item.vegetarian && <span className="text-[9px] ml-3 px-2 py-0.5 border border-copper/30 text-copper rounded-sm font-sans uppercase font-black">V</span>}
                        </h3>
                        <span className="text-teal-mid font-bold font-sans text-[10px] tracking-[0.2em]">{item.price}</span>
                      </div>
                      <p className="text-ink/60 text-sm font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Notes / Dietary */}
          <div className="mt-40 p-12 md:p-20 bg-mist rounded-sm border border-teal-soft flex flex-col md:flex-row items-center gap-12 shadow-sm">
            <div className="bg-teal-dark text-sand p-6 rounded-sm shrink-0 shadow-lg">
              <Info size={32} strokeWidth={2} />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h4 className="font-serif text-2xl italic text-teal-dark">Allergies & Substitutions</h4>
              <p className="text-[10px] text-ink/70 leading-relaxed uppercase tracking-[0.2em] font-bold">
                If you have any food allergies or intolerances, please inform your server before ordering. 
                Our kitchen uses nuts, seeds, and flour. We have comprehensive vegan and gluten-free menus 
                available upon request. (v) denotes vegetarian dishes.
              </p>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-[9px] uppercase tracking-[0.4em] text-ink/40 font-black">
              A discretionary 12.5% service charge will be added to your bill, all of which goes to our staff.
            </p>
          </div>
        </div>
      </section>
      
          {/* Visual Break */}
          <section className="mt-40 px-6">
            <div className="max-w-7xl mx-auto h-[600px] rounded-sm overflow-hidden shadow-2xl border border-teal-soft bg-mist">
              <img 
                src={chefPlate} 
                alt="Chef plating a dish" 
                className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110" 
                referrerPolicy="no-referrer"
              />
            </div>
          </section>

          {/* Food Testimonials */}
          <section className="mt-24 mb-24 max-w-5xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                {
                  name: "BlackLabradorMan",
                  review: "Loved the sailfish and the mutton curry. Haven't tasted Bajan dishes this good in years. Absolutely delicious."
                },
                {
                  name: "Rich",
                  review: "Food was excellent to a high standard. Warm friendly greeting. Superb room. Would happily visit again and again."
                }
              ].map((review, i) => (
                <div key={i} className="space-y-6">
                  <p className="font-serif text-3xl italic text-teal-dark leading-snug">"{review.review}"</p>
                  <p className="text-[10px] uppercase font-black tracking-[0.4em] text-copper">— {review.name}</p>
                </div>
              ))}
            </div>
          </section>
    </div>
  );
}
