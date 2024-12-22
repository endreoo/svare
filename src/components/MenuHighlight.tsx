import React from 'react';
import { Utensils, Wine, PartyPopper } from 'lucide-react';

export function MenuHighlight() {
  return (
    <div className="bg-red-50 p-6 rounded-xl mb-8 space-y-4">
      <p className="text-lg text-gray-700 leading-relaxed">
        Nyt en fantastisk "All You Can Eat" opplevelse med noe for enhver smak! Her får dere 
        nyte de mest fantastiske grillede kjøttrettene, og for de som foretrekker noe annet 
        serveres det deilige pastaretter med ferske grønnsaker fra deres egen kjøkkenhage.
      </p>
      <div className="flex items-center justify-center gap-2 text-green-700">
        <Wine className="w-5 h-5" />
        <p className="text-lg font-medium">
          Alle drikker er inkludert - både med og uten alkohol! 🎉
        </p>
      </div>
      <p className="text-lg text-gray-700">
        Og desserten må ikke glemmes - prøv den berømte grillede ananasen med kanel eller 
        nyt deilig iskrem! Alt dette skal vi nyte sammen i herlige omgivelser. 
      </p>
      <div className="mt-6 text-center">
        <PartyPopper className="w-6 h-6 inline-block text-red-600 mr-2" />
        <p className="text-lg font-medium text-green-800 inline-block">
          Vi gleder oss til å dele denne opplevelsen med dere!
        </p>
      </div>
    </div>
  );
}