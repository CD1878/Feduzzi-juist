import React from 'react';
import { Link } from 'react-router-dom';
import { INTRO_IMAGES } from '../constants';

const Intro: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="font-serif text-feduzzi-red text-3xl md:text-5xl mb-6">
            Feduzzi Mercato Italiano
          </h2>
          <div className="w-px h-12 bg-black mx-auto mb-8"></div>

          <div className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto space-y-6 font-light">
            <p>
              Feduzzi Mercato Italiano is een Italiaanse delicatessenwinkel, lunchroom en traiteur in één. Feduzzi heeft zich in 1981 gevestigd in Amsterdam en is sinds 2022 overgenomen door Nick en Nees.
            </p>
            <p>
              Feduzzi staat voor kwaliteit en gastvrijheid. Ons doel is dan ook om u thuis te laten voelen in onze winkel, zodat u niet alleen een boodschap komt halen, maar ook een ervaring rijker bent. Denk aan Italiaanse vlees-, vis- en vegagerechten, maar ook aan een rijk assortiment Italiaanse delicatessen die u niet snel ergens anders tegenkomt.
            </p>
            <p>
              Vriendelijk personeel, Italiaanse muziek en een prachtige winkels in <Link to="/vestigingen/amsterdam" className="underline hover:text-feduzzi-red">Amsterdam</Link> en <Link to="/vestigingen/laren" className="underline hover:text-feduzzi-red">Laren</Link> waar het lijkt alsof u echt in Italië bent. Wij staan voor u klaar. Wanneer zien wij u bij ons in de winkel?
            </p>
          </div>
        </div>

        {/* Collage Grid - Responsive */}
        <div className="relative w-full mt-12 mb-16">
          {/* Mobile Layout (hidden on md and up) */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm shadow-md">
              <img src={INTRO_IMAGES.bottles} alt="Bottles" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm shadow-md mt-8">
              <img src={INTRO_IMAGES.staff} alt="Staff" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square w-full col-span-2 overflow-hidden rounded-sm shadow-md">
              <img src={INTRO_IMAGES.meatballs} alt="Food" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Desktop Layout (hidden on mobile) */}
          <div className="hidden md:block relative w-full aspect-[16/9] lg:aspect-[2/1]">
            <div className="grid grid-cols-12 grid-rows-6 h-full w-full gap-4">

              {/* Left Image: Bottles */}
              <div className="col-start-1 col-end-5 row-start-1 row-end-4 z-10 transform translate-y-8">
                <img src={INTRO_IMAGES.bottles} alt="Bottles" className="w-full h-full object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500" />
              </div>

              {/* Center Top Image: Meatballs - Overlapping left */}
              <div className="col-start-4 col-end-8 row-start-2 row-end-5 z-20">
                <img src={INTRO_IMAGES.meatballs} alt="Food" className="w-full h-full object-cover rounded-sm shadow-xl hover:scale-[1.02] transition-transform duration-500" />
              </div>

              {/* Right Top Image: Staff */}
              <div className="col-start-8 col-end-12 row-start-1 row-end-4 z-10 transform -translate-y-4">
                <img src={INTRO_IMAGES.staff} alt="Staff" className="w-full h-full object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500" />
              </div>

              {/* Center Bottom Image: Salmon - Overlapping Meatballs */}
              <div className="col-start-3 col-end-7 row-start-4 row-end-7 z-30 transform -translate-x-4">
                <img src={INTRO_IMAGES.foodPrep} alt="Food Prep" className="w-full h-full object-cover rounded-sm shadow-xl hover:scale-[1.02] transition-transform duration-500" />
              </div>

              {/* Right Bottom Image: Bag - Overlapping Staff */}
              <div className="col-start-9 col-end-13 row-start-4 row-end-7 z-20 transform translate-x-2">
                <img src={INTRO_IMAGES.bag} alt="Service" className="w-full h-full object-cover rounded-sm shadow-lg hover:scale-[1.02] transition-transform duration-500" />
              </div>

              <div className="col-start-7 col-end-11 row-start-4 row-end-7 z-10 transform -translate-y-8">
                <div className="w-full h-full overflow-hidden rounded-sm shadow-lg">
                  <img src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/79a77524-d471-4efd-a2e7-8ff38bffe8c2/380536255_172926439119013_1414290766591190903_n.jpg" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" alt="Pasta" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/over-ons"
            className="inline-block bg-feduzzi-red text-white px-10 py-3 rounded-md text-lg uppercase tracking-wide hover:bg-red-800 transition-all duration-300"
          >
            Meer over ons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
