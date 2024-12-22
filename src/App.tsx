import React from 'react';
import { GiftIcon, Utensils, Wine, Snowflake, Heart } from 'lucide-react';
import { ImageCarousel } from './components/ImageCarousel';
import { MenuHighlight } from './components/MenuHighlight';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-700 to-green-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Snowflake className="text-blue-400 w-12 h-12 absolute -top-6 -left-6 animate-spin-slow" />
            <GiftIcon className="w-16 h-16 text-red-600" />
            <Snowflake className="text-blue-400 w-12 h-12 absolute -bottom-6 -right-6 animate-spin-slow" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-center text-red-600 mb-6">
          God Jul! 🎄
        </h1>
        
        <div className="text-center text-gray-700 mb-8 space-y-4">
          <p className="text-xl font-medium text-green-700">
            Kjære Familien Svare,
          </p>
          <p className="text-lg">
            Vi vil gi dere en spesiell julegave i år - en uforglemmelig middag for hele familien på det eksklusive
          </p>
          <h2 className="text-2xl font-semibold text-red-700 flex items-center justify-center gap-2">
            <Utensils className="w-6 h-6" />
            Fogo Gaucho Brazilian Steakhouse
            <Wine className="w-6 h-6" />
          </h2>
          <p className="text-lg italic">
            Nairobi, Kenya
          </p>
        </div>

        <MenuHighlight />

        <div className="text-center space-y-4">
          <a 
            href="https://fogogaucho.co.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
          >
            Se restaurantens meny
          </a>
          
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Med kjærlig hilsen fra den Kenyanske Opdal familien
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
          </p>
        </div>

        <ImageCarousel />
      </div>
    </div>
  );
}

export default App;