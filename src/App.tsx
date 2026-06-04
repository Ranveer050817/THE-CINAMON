import React from 'react';
import { MapPin, Phone, Clock, Star, ChefHat, Timer, Users, ThumbsUp, UtensilsCrossed } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-orange-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-8 h-8 text-orange-600" />
              <span className="font-serif text-2xl font-bold tracking-tight text-neutral-900">
                The Cinnamon
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-neutral-600 hover:text-orange-600 font-medium transition-colors">About Us</a>
              <a href="#features" className="text-neutral-600 hover:text-orange-600 font-medium transition-colors">Why Us</a>
              <a href="#reviews" className="text-neutral-600 hover:text-orange-600 font-medium transition-colors">Reviews</a>
            </div>
            <div className="flex items-center">
              <a href="tel:+918797779700" className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+91 87977 79700</span>
                <span className="sm:hidden">Call</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=2070"
            alt="Delicious Chinese food assortment"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 flex flex-col items-center text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold tracking-wider uppercase mb-6 border border-orange-500/30 backdrop-blur-sm">
            Welcome To
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            The Cinnamon
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-200 mb-10 max-w-2xl font-light">
            Delicious Fast Food & Family Dining Experience in Ranchi
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <a href="#contact" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-medium text-lg transition-all text-center">
              Plan Your Visit
            </a>
            <a href="tel:+918797779700" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full font-medium text-lg transition-all text-center flex items-center justify-center gap-2 border border-white/20">
              <Phone className="w-5 h-5" />
              Order Now
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-300 bg-neutral-950/40 p-6 rounded-2xl backdrop-blur-md border border-white/10 w-full max-w-4xl text-left sm:text-center">
            <div className="flex items-center sm:flex-col gap-4 sm:gap-2">
              <MapPin className="w-6 h-6 text-orange-500 shrink-0" />
              <span className="text-sm">Purulia Rd, Ajit Enclave, Lalpur, Ranchi 834001</span>
            </div>
            <div className="flex items-center sm:flex-col gap-4 sm:gap-2">
              <Phone className="w-6 h-6 text-orange-500 shrink-0" />
              <span className="text-sm">+91 87977 79700</span>
            </div>
            <div className="flex items-center sm:flex-col gap-4 sm:gap-2">
              <Clock className="w-6 h-6 text-orange-500 shrink-0" />
              <span className="text-sm">Open Daily • Closes at 10:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-100 rounded-3xl transform -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=992" 
                alt="Delicious Chowmein" 
                className="relative rounded-3xl object-cover h-[500px] w-full shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-neutral-900 mb-6">About Us</h2>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mb-8"></div>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Welcome to <strong className="text-neutral-900">The Cinnamon</strong>, one of Ranchi's favorite fast-food destinations. We are committed to serving delicious meals made with quality ingredients and exceptional customer service.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Whether you're looking for a quick snack, family dinner, or casual dining experience with friends, The Cinnamon offers a comfortable setting and a diverse menu to satisfy every taste.
              </p>
              <div className="mt-10 flex gap-4">
                 <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-12 h-12 rounded-full border-4 border-white object-cover bg-neutral-200" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer Avatar" />
                  ))}
                 </div>
                 <div className="flex flex-col justify-center">
                    <span className="font-bold text-neutral-900">Loved by locals</span>
                    <span className="text-sm text-neutral-500">Over thousands of happy customers</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="features" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-neutral-900 mb-6">Why Choose Us</h2>
            <div className="w-20 h-1.5 bg-orange-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600">
              We take pride in delivering an unforgettable dining experience through our core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <ChefHat className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 font-serif">Fresh & Tasty Food</h3>
              <p className="text-neutral-600 leading-relaxed">Every dish is prepared with care to ensure great taste and quality.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Timer className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 font-serif">Fast Service</h3>
              <p className="text-neutral-600 leading-relaxed">Quick order preparation without compromising quality or taste.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 font-serif">Family Friendly</h3>
              <p className="text-neutral-600 leading-relaxed">Comfortable dining environment strictly suitable for families and groups.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <ThumbsUp className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 font-serif">Customer Satisfaction</h3>
              <p className="text-neutral-600 leading-relaxed">Thousands of happy and returning customers with positive reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Ratings */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl font-bold text-neutral-900 mb-6">Customer Reviews</h2>
              <div className="w-20 h-1.5 bg-orange-600 rounded-full mb-6"></div>
              <p className="text-lg text-neutral-600">
                Don't just take our word for it. Here is what our customers have to say about their experience at The Cinnamon.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 bg-neutral-50 p-6 rounded-2xl border border-neutral-100 w-full lg:w-auto">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-neutral-900">4.0<span className="text-lg text-neutral-500 font-normal">/5</span></div>
                <div className="flex justify-center sm:justify-start gap-1 my-1">
                  {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                  <Star className="w-4 h-4 text-orange-200 fill-orange-200" />
                </div>
                <div className="text-sm font-medium text-neutral-500">Google Rating</div>
              </div>
              <div className="w-px bg-neutral-200 hidden sm:block"></div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-neutral-900">30+</div>
                <div className="text-sm font-medium text-neutral-500 mt-[26px]">Customer Reviews</div>
              </div>
              <div className="w-px bg-neutral-200 hidden sm:block"></div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-neutral-900">3.8<span className="text-lg text-neutral-500 font-normal">/5</span></div>
                 <div className="flex justify-center sm:justify-start gap-1 my-1">
                  {[1, 2, 3].map(i => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                  <Star className="w-4 h-4 text-orange-400 fill-orange-400" style={{ clipPath: 'inset(0 20% 0 0)' }} />
                  <Star className="w-4 h-4 text-orange-200 fill-orange-200" />
                </div>
                <div className="text-sm font-medium text-neutral-500">Food Platforms</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-2xl p-8 relative">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
              </div>
              <p className="text-lg text-neutral-700 italic mb-8 font-medium">"Awesome food and a great team."</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-xl">V</div>
                <div>
                  <h4 className="font-bold text-neutral-900">Vickey Gulson Benedict Ekka</h4>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 relative">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
              </div>
              <p className="text-lg text-neutral-700 italic mb-8 font-medium">"It's been more than a year I have been coming to this place."</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-xl">S</div>
                <div>
                  <h4 className="font-bold text-neutral-900">Somnath</h4>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 relative">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
              </div>
              <p className="text-lg text-neutral-700 italic mb-8 font-medium">"I have tasted the egg rolls and egg chowmein which are really good."</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-xl">A</div>
                <div>
                  <h4 className="font-bold text-neutral-900">Amrita Mitra</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Visit Us */}
      <section id="contact" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">Ready to enjoy delicious food?</h2>
              <p className="text-xl text-neutral-300 mb-10 leading-relaxed font-light">
                Visit The Cinnamon today or call us to place your order for takeout or delivery.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Address</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      Purulia Rd, Ajit Enclave,<br />
                      Lalpur, Ranchi,<br />
                      Jharkhand 834001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Call Us</h3>
                    <a href="tel:+918797779700" className="text-xl font-medium text-orange-400 hover:text-orange-300 transition-colors">
                      +91 87977 79700
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold mb-1">Business Hours</h3>
                    <p className="text-neutral-300">
                      Open Daily<br />
                      Closing Time: 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Map / Image representation */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1074" 
                alt="Restaurant interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-900/30"></div>
              {/* Overlay Location Chip */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3">
                 <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600" />
                 </div>
                 <div>
                    <strong className="text-neutral-900 block">The Cinnamon</strong>
                    <span className="text-neutral-500 text-sm">Lalpur, Ranchi</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <UtensilsCrossed className="w-10 h-10 text-orange-600" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-white mb-6">The Cinnamon</h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Delicious Fast Food & Family Dining Experience in Ranchi.
          </p>
          <div className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} The Cinnamon Restaurant. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

