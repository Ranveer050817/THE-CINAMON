import React from 'react';
import { MapPin, Phone, Clock, Star, ChefHat, Timer, Users, ThumbsUp, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import heroImg from './assets/images/hero.jpg';
import aboutImg from './assets/images/regenerated_image_1780584762559.png';
import kebabImg from './assets/images/chicken_kabab.jpg';
import biryaniImg from './assets/images/chicken_biryani.jpg';
import rollImg from './assets/images/chicken_roll.jpg';
import restaurantImg from './assets/images/restaurant.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <UtensilsCrossed className="w-8 h-8 text-amber-700" />
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900">
                The Cinnamon
              </span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#about" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">About Us</a>
              <a href="#specials" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">Popular Dishes</a>
              <a href="#features" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">Why Us</a> 
              <a href="#reviews" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">Reviews</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <a href="tel:+918797779700" className="group flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md">
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                <span className="hidden sm:inline">+91 87977 79700</span>
                <span className="sm:hidden">Call</span>
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-stone-900 overflow-hidden min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src={heroImg}
            alt="Delicious Chinese food assortment"
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.span variants={fadeIn} className="inline-block py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold tracking-wider uppercase mb-6 border border-amber-500/20 backdrop-blur-sm">
              🌟 Welcome To Ranchi's Favorite
            </motion.span>
            <motion.h1 variants={fadeIn} className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-xl">
              The <span className="text-amber-500">Cinnamon</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl sm:text-2xl text-stone-300 mb-10 max-w-2xl font-light">
              Delicious Fast Food & Family Dining Experience
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-4">
              <a href="#contact" className="group px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white rounded-full font-medium text-lg transition-all text-center shadow-lg hover:shadow-amber-700/25 flex items-center justify-center gap-2">
                Plan Your Visit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+918797779700" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-full font-medium text-lg transition-all text-center flex items-center justify-center gap-2 border border-white/20">
                <Phone className="w-5 h-5" />
                Order Now
              </a>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-stone-300 bg-stone-950/40 p-8 rounded-3xl backdrop-blur-md border border-white/10 w-full max-w-4xl text-left sm:text-center shadow-2xl">
              <div className="flex items-center sm:flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-sm font-medium">Lalpur, Ranchi 834001</span>
              </div>
              <div className="flex items-center sm:flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-sm font-medium">+91 87977 79700</span>
              </div>
              <div className="flex items-center sm:flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-sm font-medium">Open Daily • Closes 10:00 PM</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-amber-100 rounded-[2rem] transform -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
              <img 
                src={aboutImg} 
                alt="Delicious Chowmein" 
                className="relative rounded-[2rem] object-cover h-[550px] w-full shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-4xl font-bold text-amber-700 mb-1">10+</div>
                <div className="text-sm font-medium text-stone-600">Years of Excellence</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-5xl font-bold text-stone-900 mb-6">Our Story</h2>
              <div className="w-24 h-1.5 bg-amber-700 rounded-full mb-8"></div>
              <p className="text-xl text-stone-600 mb-6 leading-relaxed font-light">
                Welcome to <strong className="text-stone-900 font-semibold">The Cinnamon</strong>, one of Ranchi's favorite fast-food destinations. We are committed to serving delicious meals made with quality ingredients and exceptional customer service.
              </p>
              <p className="text-xl text-stone-600 leading-relaxed font-light mb-10">
                Whether you're looking for a quick snack, family dinner, or casual dining experience with friends, The Cinnamon offers a comfortable setting and a diverse menu to satisfy every taste.
              </p>
              <div className="flex items-center gap-6 p-6 bg-stone-50 rounded-2xl border border-stone-100">
                 <div className="flex -space-x-4">
                  {['A', 'B', 'M', 'S'].map((initial, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-stone-50 bg-amber-600/10 text-amber-900 font-bold flex items-center justify-center">
                      {initial}
                    </div>
                  ))}
                 </div>
                 <div className="flex flex-col">
                    <span className="font-bold text-stone-900">Loved by locals</span>
                    <span className="text-sm text-stone-500">Join thousands of happy customers</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section id="specials" className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-serif text-5xl font-bold text-white mb-6">Popular Dishes</h2>
            <div className="w-24 h-1.5 bg-amber-600 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-stone-300 font-light">
              Experience the authentic flavors of our most loved and celebrated dishes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Chicken Kabab */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="aspect-[4/3] lg:aspect-[16/10] w-full">
                <img 
                  src={kebabImg} 
                  alt="Chicken Kabab" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex flex-col justify-end p-8 sm:p-10">
                <div className="inline-block px-4 py-1.5 bg-amber-600 text-white text-xs font-bold uppercase tracking-wider rounded-full self-start mb-4 shadow-lg">Must Try</div>
                <h3 className="text-3xl font-serif font-bold text-white mb-3 tracking-tight">Chicken Kabab</h3>
                <p className="text-stone-300 text-lg font-light mb-0 leading-relaxed">Juicy grilled chicken marinated with authentic spices and served hot.</p>
              </div>
            </motion.div>

            {/* Dum Biryani */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="aspect-[4/3] lg:aspect-[16/10] w-full">
                <img 
                  src={biryaniImg} 
                  alt="Dum Biryani" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex flex-col justify-end p-8 sm:p-10">
                <div className="inline-block px-4 py-1.5 bg-amber-600 text-white text-xs font-bold uppercase tracking-wider rounded-full self-start mb-4 shadow-lg">Must Try</div>
                <h3 className="text-3xl font-serif font-bold text-white mb-3 tracking-tight">Dum Biryani</h3>
                <p className="text-stone-300 text-lg font-light mb-0 leading-relaxed">Aromatic basmati rice layered with rich spices and tender chicken.</p>
              </div>
            </motion.div>

            {/* Chicken Roll */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="aspect-[4/3] lg:aspect-[16/10] w-full">
                <img 
                  src={rollImg} 
                  alt="Chicken Roll" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex flex-col justify-end p-8 sm:p-10">
                <div className="inline-block px-4 py-1.5 bg-amber-600 text-white text-xs font-bold uppercase tracking-wider rounded-full self-start mb-4 shadow-lg">Must Try</div>
                <h3 className="text-3xl font-serif font-bold text-white mb-3 tracking-tight">Chicken Roll</h3>
                <p className="text-stone-300 text-lg font-light mb-0 leading-relaxed">Soft paratha wrapped around flavorful chicken filling.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="features" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-serif text-5xl font-bold text-stone-900 mb-6">Why Choose Us</h2>
            <div className="w-24 h-1.5 bg-amber-700 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 font-light">
              We take pride in delivering an unforgettable dining experience through our core principles.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: ChefHat, title: "Fresh & Tasty Food", desc: "Every dish is prepared with care to ensure great taste and quality." },
              { icon: Timer, title: "Fast Service", desc: "Quick order preparation without compromising quality or taste." },
              { icon: Users, title: "Family Friendly", desc: "Comfortable dining environment strictly suitable for families and groups." },
              { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Thousands of happy and returning customers with positive reviews." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-amber-100">
                  <feature.icon className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 font-serif">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews & Ratings */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="font-serif text-5xl font-bold text-stone-900 mb-6">Customer Reviews</h2>
              <div className="w-24 h-1.5 bg-amber-700 rounded-full mb-6"></div>
              <p className="text-xl text-stone-600 font-light">
                Don't just take our word for it. Here is what our customers have to say about their experience at The Cinnamon.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-8 bg-stone-50 p-8 rounded-3xl border border-stone-100 w-full lg:w-auto shadow-sm"
            >
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold text-stone-900 tracking-tight">4.0<span className="text-xl text-stone-400 font-normal">/5</span></div>
                <div className="flex justify-center sm:justify-start gap-1 my-2">
                  {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                  <Star className="w-4 h-4 text-amber-200 fill-amber-200" />
                </div>
                <div className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Google Rating</div>
              </div>
              <div className="w-px bg-stone-200 hidden sm:block"></div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold text-stone-900 tracking-tight">30+</div>
                <div className="text-sm font-semibold text-stone-500 mt-[34px] uppercase tracking-wider">Customer Reviews</div>
              </div>
              <div className="w-px bg-stone-200 hidden sm:block"></div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold text-stone-900 tracking-tight">3.8<span className="text-xl text-stone-400 font-normal">/5</span></div>
                 <div className="flex justify-center sm:justify-start gap-1 my-2">
                  {[1, 2, 3].map(i => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" style={{ clipPath: 'inset(0 20% 0 0)' }} />
                  <Star className="w-4 h-4 text-amber-200 fill-amber-200" />
                </div>
                <div className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Food Platforms</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { text: "Awesome food and a great team.", name: "Vickey Gulson Benedict Ekka", initial: "V", color: "bg-blue-100 text-blue-700" },
              { text: "It's been more than a year I have been coming to this place.", name: "Somnath", initial: "S", color: "bg-emerald-100 text-emerald-700" },
              { text: "I have tasted the egg rolls and egg chowmein which are really good.", name: "Amrita Mitra", initial: "A", color: "bg-purple-100 text-purple-700" }
            ].map((review, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-stone-50 rounded-3xl p-10 relative border border-stone-100 shadow-sm">
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xl text-stone-700 italic mb-10 font-light leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                   <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${review.color}`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{review.name}</h4>
                    <span className="text-sm text-stone-500">Verified Customer</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA / Visit Us */}
      <section id="contact" className="py-24 bg-stone-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="font-serif text-5xl sm:text-6xl font-bold mb-6">Ready to enjoy delicious food?</h2>
              <p className="text-2xl text-stone-400 mb-12 leading-relaxed font-light">
                Visit The Cinnamon today or call us to place your order for takeout or delivery.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    <MapPin className="w-7 h-7 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Address</h3>
                    <p className="text-stone-400 leading-relaxed text-lg font-light">
                      Purulia Rd, Ajit Enclave,<br />
                      Lalpur, Ranchi,<br />
                      Jharkhand 834001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    <Phone className="w-7 h-7 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                    <a href="tel:+918797779700" className="text-2xl font-light text-amber-400 hover:text-amber-300 transition-colors">
                      +91 87977 79700
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    <Clock className="w-7 h-7 text-amber-500" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                    <p className="text-stone-400 text-lg font-light">
                      Open Daily<br />
                      Closing Time: 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Simulated Map / Image representation */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group"
            >
              <img 
                src={restaurantImg} 
                alt="Restaurant interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-950/40"></div>
              {/* Overlay Location Chip */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform text-stone-900 border border-white/20">
                 <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-amber-700" />
                 </div>
                 <div className="pr-4">
                    <strong className="text-lg font-bold block mb-0.5">The Cinnamon</strong>
                    <span className="text-stone-500 font-medium">Lalpur, Ranchi</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 py-16 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center">
              <UtensilsCrossed className="w-8 h-8 text-amber-500" />
            </div>
          </div>
          <h2 className="font-serif text-3xl font-bold text-white mb-6">The Cinnamon</h2>
          <p className="text-stone-400 mb-10 max-w-md mx-auto font-light text-lg">
            Delicious Fast Food & Family Dining Experience in Ranchi.
          </p>
          <div className="w-24 h-px bg-white/10 mx-auto mb-10"></div>
          <div className="text-stone-500 text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} The Cinnamon Restaurant. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


