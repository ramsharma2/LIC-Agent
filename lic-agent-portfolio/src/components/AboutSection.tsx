"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Users, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="about-section py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-licBlue/10 text-licBlue hover:bg-licBlue/20 mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="text-licBlue">Life Insurance</span> Expert
          </h2>
          <p className="text-gray-600 text-lg">
            Helping families secure their financial future through personalized life insurance solutions since 2023.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -right-4 -bottom-4 w-full h-full bg-licBlue/10 rounded-lg"></div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="\images\cover-photo.jpg"
                alt="Indra Prakash Sharma with LIC officials"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Indra Prakash Sharma</h3>
            <p className="text-gray-700 mb-6">
              Indra Prakash Sharma has been serving as an authorized Life Insurance Agent with Life Insurance Corporation of India (LIC) since March 15, 2023. With extensive experience and deep knowledge of the life insurance industry, he has helped over 1,400 clients secure their financial future through customized insurance planning.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-licBlue/10 flex items-center justify-center text-licBlue shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">IRDA Certified Professional</h4>
                  <p className="text-gray-600 text-sm">Certified by IRDA in March 2023 as an authorized life insurance agent</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-licBlue/10 flex items-center justify-center text-licBlue shrink-0">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">ZM Club Member</h4>
                  <p className="text-gray-600 text-sm">Achieved the prestigious ZM Club Membership for excellent performance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-licBlue/10 flex items-center justify-center text-licBlue shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Trusted by 1400+ Clients</h4>
                  <p className="text-gray-600 text-sm">Successfully sold over 1400 policies with excellent customer satisfaction</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-licBlue/10 flex items-center justify-center text-licBlue shrink-0">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">2+ Years of Experience</h4>
                  <p className="text-gray-600 text-sm">Providing expert insurance advice and service since 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="achievement-card">
            <CardContent className="p-0">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3 text-licBlue">70+</div>
                <h4 className="text-xl font-semibold mb-2">Death Claims</h4>
                <p className="text-gray-600">Successfully processed death claims, usually settled within 15-30 days</p>
              </div>
            </CardContent>
          </Card>

          <Card className="achievement-card">
            <CardContent className="p-0">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3 text-licBlue">700+</div>
                <h4 className="text-xl font-semibold mb-2">Free Services</h4>
                <p className="text-gray-600">Provided free policy services to help clients maintain their coverage</p>
              </div>
            </CardContent>
          </Card>

          <Card className="achievement-card">
            <CardContent className="p-0">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3 text-licBlue">42+</div>
                <h4 className="text-xl font-semibold mb-2">Maturity Claims</h4>
                <p className="text-gray-600">Helped clients receive their maturity benefits on time</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
