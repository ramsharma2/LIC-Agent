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

const testimonials = [
  {
    id: "t1",
    name: "Rajesh Sharma",
    position: "Business Owner",
    content: "Mr. Indra Prakash helped me secure my family's future with the right insurance policy. His knowledge and guidance made the process incredibly simple. I've recommended him to all my friends and family.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya Patel",
    position: "Teacher",
    content: "I was confused about which policy would be best for my children's education. Indra Prakash took the time to understand my needs and suggested the perfect solution. His after-sales service is also excellent!",
    rating: 5,
  },
  {
    id: "t3",
    name: "Amit Verma",
    position: "IT Professional",
    content: "The death claim process for my father's policy was handled with utmost care and professionalism. Indra Prakash stood by us during the difficult time and ensured a hassle-free claim settlement. Forever grateful!",
    rating: 5,
  },
  {
    id: "t4",
    name: "Sunita Jain",
    position: "Homemaker",
    content: "Indra Prakash is not just an agent but a financial advisor who truly cares about his clients. He has helped my family with multiple policies and always keeps us informed about premium payments and policy updates.",
    rating: 4,
  },
  {
    id: "t5",
    name: "Mahesh Kumar",
    position: "Government Employee",
    content: "I've been a client of Indra Prakash for over 5 years. His understanding of tax planning through insurance is exceptional. He helped me optimize my tax savings while ensuring adequate coverage.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Kavita Singh",
    position: "Doctor",
    content: "As a busy professional, I appreciate Balram's prompt service and attention to detail. He takes care of all my policy-related matters efficiently. Truly a trusted advisor for all insurance needs.",
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="testimonial-section py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-licGold/10 text-licGold hover:bg-licGold/20 mb-4">
            Client Feedback
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What My <span className="text-licBlue">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take my word for it. Here's what some of my clients have to say about their experience working with me.
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
            <h3 className="text-2xl font-semibold mb-4">Client Satisfaction</h3>
            <div className="flex justify-center items-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-licBlue mb-2">1400+</div>
                <p className="text-gray-600">Policies Sold</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-licBlue mb-2">700+</div>
                <p className="text-gray-600">Service Requests</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-licBlue mb-2">99%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
            <p className="text-gray-700 italic mt-8">
              "My mission is to provide exceptional service and build lasting relationships with my clients. Your trust is my greatest achievement."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
