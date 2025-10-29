"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function TestimonialSection() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      id: "t1",
      name: t('testimonials.client1Name'),
      position: t('testimonials.client1Position'),
      content: t('testimonials.client1Content'),
      rating: 5,
    },
    {
      id: "t2",
      name: t('testimonials.client2Name'),
      position: t('testimonials.client2Position'),
      content: t('testimonials.client2Content'),
      rating: 5,
    },
    {
      id: "t3",
      name: t('testimonials.client3Name'),
      position: t('testimonials.client3Position'),
      content: t('testimonials.client3Content'),
      rating: 5,
    },
    {
      id: "t4",
      name: t('testimonials.client4Name'),
      position: t('testimonials.client4Position'),
      content: t('testimonials.client4Content'),
      rating: 4,
    },
    {
      id: "t5",
      name: t('testimonials.client5Name'),
      position: t('testimonials.client5Position'),
      content: t('testimonials.client5Content'),
      rating: 5,
    },
    {
      id: "t6",
      name: t('testimonials.client6Name'),
      position: t('testimonials.client6Position'),
      content: t('testimonials.client6Content'),
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonial-section py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-licGold/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-licBlue/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <Badge className="bg-licGold/10 text-licGold hover:bg-licGold/20 mb-4 px-4 py-1 text-sm transition-all duration-300 hover:scale-105">
            {t('testimonials.badge')}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('testimonials.title')} <span className="bg-gradient-to-r from-licBlue to-blue-700 bg-clip-text text-transparent">{t('testimonials.titleAccent')}</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1 h-full">
                    <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-licGold/20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-licGold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardContent className="p-6 flex flex-col h-full relative z-10">
                        <div className="mb-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-licGold to-yellow-600 shadow-lg">
                            <Quote className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <p className="text-gray-700 mb-6 flex-grow leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <div className="flex items-center mb-3 gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={`star-${testimonial.id}-${i}`}
                                className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${
                                  i < testimonial.rating
                                    ? "text-licGold fill-licGold"
                                    : "text-gray-300"
                                }`}
                                style={{ transitionDelay: `${i * 50}ms` }}
                              />
                            ))}
                          </div>
                          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600 font-medium">
                            {testimonial.position}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 md:mt-24 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border-2 border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-licBlue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-licGold/5 rounded-full blur-3xl"></div>
          
          <div className="text-center relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t('testimonials.clientSatisfaction')}</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-licBlue to-licGold rounded-full mx-auto mb-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
              <div className="group text-center p-6 rounded-xl bg-white border-2 border-gray-100 hover:border-licBlue/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-licBlue to-blue-700 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-licBlue to-blue-700 bg-clip-text text-transparent mb-2">1400+</div>
                <p className="text-gray-600 font-medium">{t('testimonials.policiesSold')}</p>
              </div>
              <div className="group text-center p-6 rounded-xl bg-white border-2 border-gray-100 hover:border-licGold/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-licGold to-yellow-600 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-licGold to-yellow-600 bg-clip-text text-transparent mb-2">700+</div>
                <p className="text-gray-600 font-medium">{t('testimonials.serviceRequests')}</p>
              </div>
              <div className="group text-center p-6 rounded-xl bg-white border-2 border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 fill-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-2">99%</div>
                <p className="text-gray-600 font-medium">{t('testimonials.satisfaction')}</p>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-gradient-to-r from-licBlue/5 via-licGold/5 to-licBlue/5 rounded-xl border-l-4 border-licGold">
              <p className="text-gray-700 text-lg italic leading-relaxed">
                {t('testimonials.mission')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
