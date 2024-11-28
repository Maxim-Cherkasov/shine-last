"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
  backgroundImage: string;
  children?: React.ReactNode;
  borderColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export function ServiceCard({ 
  title, 
  icon: Icon, 
  items, 
  backgroundImage, 
  children,
  borderColor,
  gradientFrom,
  gradientTo 
}: ServiceCardProps) {
  return (
    <Card className="relative border-none hover:shadow-2xl transition-all duration-500 overflow-hidden group backdrop-blur-md transform hover:-translate-y-1 hover:scale-[1.02]">
      {/* Animated rainbow border effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x opacity-70`}>
        <div className="absolute inset-x-0 top-0 h-[4px]" style={{ background: 'inherit' }} />
        <div className="absolute inset-y-0 left-0 w-[4px]" style={{ background: 'inherit' }} />
        <div className="absolute inset-y-0 right-0 w-[4px]" style={{ background: 'inherit' }} />
        <div className="absolute inset-x-0 bottom-0 h-[4px]" style={{ background: 'inherit' }} />
        
        {/* Crystalline corner effects with rainbow gradients */}
        <div className="absolute top-0 left-0 w-12 h-12">
          <div className="absolute w-full h-full border-t-[4px] border-l-[4px] rounded-tl-xl bg-gradient-to-br from-blue-400 to-purple-400 opacity-50 transform -rotate-6" />
          <div className="absolute w-full h-full border-t-[4px] border-l-[4px] rounded-tl-xl bg-gradient-to-br from-purple-400 to-pink-400 opacity-50 transform rotate-6" />
        </div>
        <div className="absolute top-0 right-0 w-12 h-12">
          <div className="absolute w-full h-full border-t-[4px] border-r-[4px] rounded-tr-xl bg-gradient-to-bl from-pink-400 to-purple-400 opacity-50 transform rotate-6" />
          <div className="absolute w-full h-full border-t-[4px] border-r-[4px] rounded-tr-xl bg-gradient-to-bl from-purple-400 to-blue-400 opacity-50 transform -rotate-6" />
        </div>
        <div className="absolute bottom-0 left-0 w-12 h-12">
          <div className="absolute w-full h-full border-b-[4px] border-l-[4px] rounded-bl-xl bg-gradient-to-tr from-blue-400 to-purple-400 opacity-50 transform rotate-6" />
          <div className="absolute w-full h-full border-b-[4px] border-l-[4px] rounded-bl-xl bg-gradient-to-tr from-purple-400 to-pink-400 opacity-50 transform -rotate-6" />
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-12">
          <div className="absolute w-full h-full border-b-[4px] border-r-[4px] rounded-br-xl bg-gradient-to-tl from-pink-400 to-purple-400 opacity-50 transform -rotate-6" />
          <div className="absolute w-full h-full border-b-[4px] border-r-[4px] rounded-br-xl bg-gradient-to-tl from-purple-400 to-blue-400 opacity-50 transform rotate-6" />
        </div>
      </div>

      {/* Background image with frost effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity duration-500"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient background with frost pattern */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} backdrop-blur-sm`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_1px)] bg-[length:12px_12px]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%)] bg-[length:24px_24px]" />
      </div>

      {/* Content */}
      <div className="relative">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="relative">
              <Icon className="w-6 h-6 text-blue-500" />
              <span className="absolute -inset-2 bg-blue-200/40 blur-md rounded-full animate-pulse" />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-xl">
              {title}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 group/item">
                <span className="text-blue-400 group-hover/item:text-pink-400 transition-colors transform group-hover/item:scale-110 duration-300">❄</span>
                <span className="text-gray-700 group-hover/item:text-blue-700 transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          {children && (
            <div className="relative">
              {children}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-100/50 via-white/50 to-pink-100/50 -z-10 blur-sm" />
            </div>
          )}
        </CardContent>
      </div>

      {/* Enhanced frost effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-blue-100/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.8),transparent_50%)]" />
      </div>
    </Card>
  );
}