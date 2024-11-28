"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function ContactInfo() {
  const handleCall = () => {
    window.location.href = "tel:89088328985";
  };

  return (
    <div className="text-center space-y-4">
      <div className="bg-gradient-to-br from-white/80 to-pink-50/80 backdrop-blur-sm rounded-[20px] p-8 max-w-md mx-auto border-[3px] border-pink-300/70 shadow-[0_8px_30px_rgba(255,192,203,0.3)]">
        <p className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
          Наталья Георгиевна
        </p>
        <p className="text-lg text-gray-600 mt-1">Косметолог-Эстетист</p>
        <p className="text-md font-medium text-pink-600 mt-3">Пишите, звоните!</p>
        <Button 
          onClick={handleCall}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transition-all duration-300 mt-4 text-lg h-12" 
          size="lg"
        >
          <Phone className="w-5 h-5 mr-2" />
          8 908 832-89-85
        </Button>
      </div>
    </div>
  );
}