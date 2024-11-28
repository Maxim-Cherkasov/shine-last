"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles, Gift } from "lucide-react";

export function OfferHeader() {
  return (
    <div className="text-center space-y-4 my-12">
      <div className="flex justify-center gap-2">
        <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-pink-100 border-2 border-blue-200">
          <Sparkles className="w-4 h-4 mr-1 text-blue-500" />
          Акция "СИЯЙ"
        </Badge>
        <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-pink-100 border-2 border-blue-200">
          <Gift className="w-4 h-4 mr-1 text-blue-500" />
          С сюрприз-подарком
        </Badge>
      </div>
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-pink-500 to-blue-500 bg-size-200 animate-gradient-x">
        Профессиональный уход за лицом
      </h1>
      <div className="mt-30 relative">
        <div className="max-w-2xl mx-auto p-8 border-[4px] border-blue-300/70 rounded-[20px] bg-gradient-to-br from-white/95 via-blue-50/95 to-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgba(147,197,253,0.3)] relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-400/70 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-blue-400/70 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-blue-400/70 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-400/70 rounded-br-xl" />
          
          {/* Sparkle effects */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-200 rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-pink-200 rounded-full animate-pulse delay-300" />
          
          <p className="text-2xl font-medium relative z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
              🎄 <span className="font-bold">Дорогие Девочки!</span> В преддверии <span className="font-bold">волшебного Нового года</span> дарю Вам <span className="font-bold">особенный подарок</span> - <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">Акцию "СИЯЙ"!</span> Побалуйте себя <span className="font-bold">профессиональным уходом</span> за символическую цену (с выездом на дом) и получите <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">праздничный сюрприз</span>! 🎁
            </span>
          </p>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-100/20 via-white/20 to-pink-100/20 blur-lg -z-10" />
      </div>
    </div>
  );
}