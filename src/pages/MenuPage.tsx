import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, X, Menu as MenuIcon } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MenuPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling on page load if needed, though browsers usually handle ID scrolling automatically

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="font-sans text-gray-800 bg-feduzzi-cream min-h-screen flex flex-col">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
            Ons Authentieke, Italiaanse Menu
          </h1>
        </div>
      </section>

      {/* Sub Navigation Bar */}
      <div className="bg-feduzzi-red py-4 md:py-6 sticky top-[110px] z-40 shadow-md">
        <div className="container mx-auto flex justify-center gap-8 md:gap-24 text-white text-base md:text-xl font-sans tracking-wide">
          <Link to="/webshop#maaltijden" className="hover:opacity-80 transition-opacity">Maaltijden</Link>
          <Link to="/webshop#broodjes" className="hover:opacity-80 transition-opacity">Broodjes</Link>
          <Link to="/webshop#traiteur" className="hover:opacity-80 transition-opacity">Traiteur</Link>
        </div>
      </div>

      {/* Passion Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Image (B&W Sandwich from source concept) */}
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] overflow-hidden rounded-[15px] border-4 border-white relative shadow-sm">
                {/* Using a high quality B&W food image to match style */}
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/b6060c89-2ea4-4c8a-8479-1c651f53d3b4/374747649_620261653307023_8620719050344451705_n.jpg?format=1000w"
                  alt="Italiaanse Passie"
                  className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-feduzzi-red font-serif text-3xl md:text-4xl italic">De passie voor het vak</h2>
              <div className="space-y-4 text-gray-700 text-lg font-light leading-relaxed">
                <p>
                  Feduzzi Mercato Italiano is een Italiaanse delicatessenwinkel, lunchroom en traiteur. Wij verkopen broodjes, pasta's, salades, wijnen, koffie, diverse soorten balsamico en olijfolie, kazen en vleeswaren. Dit kan ook allemaal bij ons in de winkel gegeten en gedronken worden. Verder hebben wij ook allerlei mooie Italiaanse producten in onze mercato voor thuis.
                </p>
                <p>
                  Wij focussen ons vooral op afhaal. Denk aan <Link to="/#order" className="underline decoration-1 underline-offset-4 text-feduzzi-red">belegde broodjes</Link> voor de lunch, een heerlijk diner voor thuis, borrelhapjes voor een feestje of iets dergelijks, maar ook kunnen wij een menu voor u samenstellen voor bijvoorbeeld zakelijke lunches of diners.
                </p>
                <p>
                  Feduzzi bestaat al sinds 1981 en is dan ook de eerste Italiaanse delicatessenwinkel in Amsterdam met ook een vestiging in Laren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="w-full">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/0487a6c1-d561-4705-9c50-95dd758c13b9/366812388_18189725005287593_995257834228342735_n.jpg?format=2500w"
          alt="Italiaanse delicatessen spread"
          className="w-full h-[40vh] md:h-[60vh] object-cover"
        />
      </section>

      {/* Quote Section (Green) */}
      <section className="bg-feduzzi-green py-24 text-center px-4">
        <h2 className="text-white font-serif text-3xl md:text-5xl italic font-light tracking-wide">
          “ Mangia bene, ridi spesso, ama molto”
        </h2>
      </section>

      {/* Delicatessen Grid Section */}
      <section className="py-20 bg-feduzzi-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-feduzzi-green font-serif text-3xl md:text-4xl italic font-light">Italiaanse Delicatessen</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Maaltijden */}
            <div id="maaltijden" className="flex flex-col space-y-6 scroll-mt-32">
              <div className="aspect-square overflow-hidden rounded-[15px] border-4 border-white shadow-sm">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c8d2dd66-dbfb-4173-86cb-93f27781a6d8/366812388_18189725005287593_995257834228342735_n.jpg?format=1000w"
                  alt="Maaltijden"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-feduzzi-green font-serif text-2xl md:text-3xl font-light">Maaltijden</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Heerlijke maaltijden van (vega)lasagne's tot authentieke pasta's en verfijnde desserts. Bekijk ons uitgebreide menu via de button hieronder
              </p>
              <div className="pt-2">
                <Link to="/webshop#maaltijden" className="inline-block border border-feduzzi-green text-feduzzi-green px-8 py-3 rounded-sm hover:bg-feduzzi-green hover:text-white transition-colors text-sm tracking-widest uppercase">
                  Bestel maaltijden
                </Link>
              </div>
            </div>

            {/* Broodjes */}
            <div id="broodjes" className="flex flex-col space-y-6 scroll-mt-32">
              <div className="aspect-square overflow-hidden rounded-[15px] border-4 border-white shadow-sm">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/3841bf8c-c54c-4f60-b994-6454f78f8635/379057150_18194403076287593_862347559648358630_n.jpg?format=1000w"
                  alt="Broodjes"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-feduzzi-green font-serif text-2xl md:text-3xl font-light">Broodjes</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Royaal belegde Italiaanse broodjes om van te genieten tijdens de lunchpauze. Bestel jouw favoriet via de knop hieronder
              </p>
              <div className="pt-2">
                <Link to="/webshop#broodjes" className="inline-block border border-feduzzi-green text-feduzzi-green px-8 py-3 rounded-sm hover:bg-feduzzi-green hover:text-white transition-colors text-sm tracking-widest uppercase">
                  Bestel broodjes
                </Link>
              </div>
            </div>

            {/* Traiteur */}
            <div id="traiteur" className="flex flex-col space-y-6 scroll-mt-32">
              <div className="aspect-square overflow-hidden rounded-[15px] border-4 border-white shadow-sm">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/b493b45d-de27-424d-847d-aad25edc4462/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam33.jpeg?format=1000w"
                  alt="Traiteur"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-feduzzi-green font-serif text-2xl md:text-3xl font-light">Traiteur</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Verse bereide maaltijden voor bijzondere (zakelijke) gelegenheden die we aan de deur komen brengen of die je gemakkelijk ophaalt bij ons. Bekijk ons uitgebreide overzicht
              </p>
              <div className="pt-2">
                <Link to="/webshop#traiteur" className="inline-block border border-feduzzi-green text-feduzzi-green px-8 py-3 rounded-sm hover:bg-feduzzi-green hover:text-white transition-colors text-sm tracking-widest uppercase">
                  Bekijk catering
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Testimonial Section */}
      <section className="bg-feduzzi-dark-red py-24 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <blockquote className="text-white font-serif text-2xl md:text-4xl italic font-light leading-snug">
            “ Briljante lasagne, zowel met als zonder vlees. Echt heerlijk. Ideaal voor een etentje thuis. Absolute aanrader.”
          </blockquote>
          <p className="text-white mt-8 text-lg font-light">- Jeroen de Bakker</p>
        </div>
      </section>

      {/* Catering Section with Collage */}
      <section id="catering" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">
            {/* Image Collage Area */}
            <div className="w-full md:w-1/2 relative h-[500px] md:h-[700px]">
              {/* Main Top Image */}
              <div className="absolute top-0 left-0 w-[85%] h-[55%] overflow-hidden rounded-[15px] border-4 border-white shadow-sm z-10">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/96968067-0474-4cca-85c8-31de4a0650e9/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam6.jpeg?format=1500w"
                  alt="Food Spread"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom B&W Image */}
              <div className="absolute bottom-0 right-0 w-[60%] h-[55%] overflow-hidden rounded-[15px] border-4 border-white shadow-xl z-20">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/477a6416-aa18-462b-9867-c081c390ae7b/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam18.jpg?format=1000w"
                  alt="Staff Member"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 md:pt-12 space-y-6">
              <h2 className="text-feduzzi-red font-serif text-3xl md:text-4xl italic">Italiaanse Catering</h2>
              <div className="space-y-4 text-gray-700 text-lg font-light leading-relaxed">
                <p>
                  Voor Italiaanse catering ben je bij Feduzzi aan het juiste adres. We gaan tot het uiterste om jou en je gasten een onvergetelijke Italiaanse maaltijd te bezorgen. Denk aan belegde broodjes voor de lunch, borrelhapjes voor een feestje, een compleet diner voor thuis of een samengesteld menu voor zakelijke lunches en diners. Alles wordt vers bereid en staat klaar om af te halen.
                </p>
                <p>
                  Bestel je telefonisch, dan kun je je bestelling dezelfde dag nog ophalen. Bestel je via het contactformulier, dan ligt je bestelling de volgende dag voor je klaar. Bezorging is mogelijk voor groepen vanaf 20 personen.
                </p>
                <p>
                  Sinds 1981 is Feduzzi dé Italiaanse delicatessenwinkel van Amsterdam, met inmiddels ook een vestiging in Laren. Laat ons weten wat je nodig hebt, dan zorgen wij voor catering waar je gasten blij van worden..
                </p>
                <div className="pt-4">
                  <Link to="/#vestigingen" className="underline decoration-1 underline-offset-4 hover:text-feduzzi-red transition-colors">
                    Bekijk onze vestigingen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MenuPage;