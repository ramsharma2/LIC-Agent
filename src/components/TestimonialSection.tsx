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
import { Star, Quote } from "lucide-react";
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
    <section id="testimonials" className="testimonial-section py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-licGold/10 text-licGold hover:bg-licGold/20 mb-4">
            {t('testimonials.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('testimonials.title')} <span className="text-licBlue">{t('testimonials.titleAccent')}</span>
          </h2>
          <p className="text-gray-600 text-lg">
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
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4 text-licGold">
                          <Quote className="h-8 w-8 opacity-50" />
                        </div>
                        <p className="text-gray-700 mb-4 flex-grow">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <div className="flex items-center mb-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={`star-${testimonial.id}-${i}`}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating
                                    ? "text-licGold fill-licGold"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">
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

        <div className="mt-16 md:mt-24 bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">{t('testimonials.clientSatisfaction')}</h3>
            <div className="flex justify-center items-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-licBlue mb-2">1400+</div>
                <p className="text-gray-600">{t('testimonials.policiesSold')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-licBlue mb-2">700+</div>
                <p className="text-gray-600">{t('testimonials.serviceRequests')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-licBlue mb-2">99%</div>
                <p className="text-gray-600">{t('testimonials.satisfaction')}</p>
              </div>
            </div>
            <p className="text-gray-700 italic mt-8">
              {t('testimonials.mission')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
