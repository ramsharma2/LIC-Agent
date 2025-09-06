"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  GraduationCap,
  BriefcaseMedical,
  Home,
  UserPlus,
  PiggyBank,
  FileCheck,
  FileHeart,
  Banknote
} from "lucide-react";

const services = [
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Life Insurance Planning",
    description: "Expert advice on selecting the right life insurance policies tailored to your family's needs",
  },
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: "Child Education Planning",
    description: "Secure your children's future education with specialized policies",
  },
  {
    icon: <BriefcaseMedical className="h-10 w-10" />,
    title: "Health Insurance",
    description: "Protection against medical expenses with comprehensive health insurance plans",
  },
  {
    icon: <PiggyBank className="h-10 w-10" />,
    title: "Retirement Planning",
    description: "Ensure a comfortable retirement with pension plans and annuities",
  },
  {
    icon: <Banknote className="h-10 w-10" />,
    title: "Tax Planning",
    description: "Optimize your tax savings through insurance investments under Section 80C",
  },
  {
    icon: <Home className="h-10 w-10" />,
    title: "Mortgage Protection",
    description: "Protect your home loan with specialized mortgage protection policies",
  },
];

const policyServices = [
  {
    icon: <UserPlus className="h-6 w-6" />,
    title: "Nominee Changes",
    description: "Assistance with changing policy nominees",
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Policy Revival",
    description: "Help with reviving lapsed policies",
  },
  {
    icon: <FileHeart className="h-6 w-6" />,
    title: "Death Claims",
    description: "Expedited death claim processing",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="services-section py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-licGold/10 text-licGold hover:bg-licGold/20 mb-4">
            My Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive <span className="text-licBlue">Insurance Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            I provide a wide range of insurance services tailored to meet your financial goals and protect your family's future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-licBlue h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-licBlue mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Additional Policy Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {policyServices.map((service) => (
              <div key={service.title} className="flex items-start gap-4 p-4 rounded-lg bg-licBlue/5">
                <div className="text-licBlue">{service.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700 italic">
              "I believe in providing personalized service to every client. Your financial security is my priority."
            </p>
            <p className="font-semibold mt-2">- Indra Prakash Sharma</p>
          </div>
        </div>
      </div>
    </section>
  );
}
