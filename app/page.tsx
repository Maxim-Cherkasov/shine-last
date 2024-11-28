"use client";

import { Calendar, Clock, Heart } from "lucide-react";
import { OfferHeader } from "@/components/beauty/OfferHeader";
import { ServiceCard } from "@/components/beauty/ServiceCard";
import { ContactInfo } from "@/components/beauty/ContactInfo";
import { ChristmasSnow } from "@/components/beauty/ChristmasSnow";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed">
      <ChristmasSnow />
      <div className="min-h-screen bg-white/90 backdrop-blur-sm py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <OfferHeader />

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Основные процедуры"
              icon={Heart}
              backgroundImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800&h=600"
              borderColor="border-emerald-300/70"
              gradientFrom="from-white/90"
              gradientTo="to-emerald-50/30"
              items={[
                "Уход за лицом с применением профессиональных, абсолютно гипоаллергенных средств",
                "Массаж лица на выбор: ручной или аппаратный (ультразвук)",
                "За время сеанса проведу мини семинар по правильному уходу за лицом (бесплатно)",
                "Возможность приобрести профессиональные средства со скидкой (по заказу и рекомендациям, подбор по типу кожи)"
              ]}
            />

            <ServiceCard
              title="Детали курса"
              icon={Calendar}
              backgroundImage="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800&h=600"
              borderColor="border-red-300/70"
              gradientFrom="from-white/90"
              gradientTo="to-red-50/30"
              items={[
                "Для видимого результата рекомендован курс 8-10 дней",
                "Время экспозиций плюс массаж - 1,5 часа",
                "Выезд на дом включён в стоимость",
                "Начало процедур с 12 декабря 24 г"
              ]}
            />

            <ServiceCard
              title="Условия и цены"
              icon={Clock}
              backgroundImage="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800&h=600"
              borderColor="border-orange-300/70"
              gradientFrom="from-white/90"
              gradientTo="to-orange-50/30"
              items={[
                "Цена за 1 процедуру - 900 руб",
                "В цену включён выезд на дом",
                "Запись веду по предоплате 50% (от выбранного Вами количества процедур)",
                "Место и время ограничены!"
              ]}
            >
              <div className="mt-4 p-3 bg-gradient-to-r from-pink-50/90 to-red-50/90 backdrop-blur-sm rounded-lg border border-pink-200">
                <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 font-semibold">
                  Только для своих! Акция "СИЯЙ" с сюрприз-подарком!
                </p>
              </div>
            </ServiceCard>
          </div>

          <ContactInfo />
        </div>
      </div>
    </main>
  );
}