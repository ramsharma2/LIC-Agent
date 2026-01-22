"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Building
} from "lucide-react";
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: t('contact.successMessage')
        });
        formRef.current?.reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('contact.errorMessage')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: t('contact.phone'),
      value: "09125467007",
      href: "tel:+919125467007",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: t('contact.email'),
      value: "indra.0781@gmail.com",
      href: "indra.0781@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: t('contact.officeAddress'),
      value: t('contact.officeAddressValue'),
      href: "https://www.google.com/maps/place/Bhiriya+Rituraj,+Uttar+Pradesh+272190/@26.9517137,82.631286,3105m/data=!3m2!1e3!4b1!4m10!1m2!2m1!1sBeema+Sewa+Kendra,+Near+Punjab+National+Bank,+Bhiriya+Rituraj,+Sonha-Shivaghat+Marg,+Basti,+272190!3m6!1s0x3990cc9dcc3c2033:0xa35b3c809d4ee895!8m2!3d26.9511847!4d82.6496946!15sCmJCZWVtYSBTZXdhIEtlbmRyYSwgTmVhciBQdW5qYWIgTmF0aW9uYWwgQmFuaywgQmhpcml5YSBSaXR1cmFqLCBTb25oYS1TaGl2YWdoYXQgTWFyZywgQmFzdGksIDI3MjE5MJIBCGxvY2FsaXR54AEA!16s%2Fg%2F12hrdpngk?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: t('contact.licBranch'),
      value: t('contact.licBranchValue'),
      href: null,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: t('contact.workingHours'),
      value: t('contact.workingHoursValue'),
      href: null,
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: t('contact.appointments'),
      value: t('contact.appointmentsValue'),
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-licBlue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-licGold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <Badge className="bg-licBlue/10 text-licBlue hover:bg-licBlue/20 mb-4 px-4 py-1 text-sm transition-all duration-300 hover:scale-105">
            {t('contact.badge')}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('contact.title')} <span className="bg-gradient-to-r from-licBlue to-blue-700 bg-clip-text text-transparent">{t('contact.titleAccent')}</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={item.title} className="group border-2 border-gray-100 hover:border-licBlue/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-licBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-5 flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-licBlue to-blue-700 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-licBlue transition-colors text-sm font-medium"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">{t('contact.branchOffice')}</h3>
              <p className="text-gray-700 mb-4">
                <strong>{t('contact.branchInfo')}</strong><br />
                {t('contact.branchAddress')}
              </p>
              <p className="text-gray-700 mb-6">
                <strong>{t('contact.phone')}:</strong> 09125467007<br />
                <strong>{t('contact.email')}:</strong> indra.0781@gmail.com
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">{t('contact.socialMedia')}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/BalramRituraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                    aria-label="Facebook"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/BalramLi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-full"
                    aria-label="Twitter"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
                    aria-label="LinkedIn"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full"
                    aria-label="Instagram"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full"
                    aria-label="YouTube"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Connect Panel (replaces form) */}
          <div className="bg-gradient-to-br from-licBlue/10 to-blue-50 p-6 md:p-8 rounded-xl border-2 border-licBlue/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Connect Instantly</h3>
            <p className="text-gray-600 mb-8">Choose your preferred way to reach out</p>

            <div className="space-y-3">
              {/* Call Now Button */}
              <button
                onClick={() => window.location.href = "tel:+919125467007"}
                className="w-full p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-95"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: 09125467007</span>
              </button>

              {/* WhatsApp Chat Button */}
              <button
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=919125467007", "_blank")}
                className="w-full p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Chat</span>
              </button>

              {/* Email Button */}
              <button
                onClick={() => window.location.href = "mailto:indra.0781@gmail.com"}
                className="w-full p-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-95"
              >
                <Mail className="h-5 w-5" />
                <span>Email: indra.0781@gmail.com</span>
              </button>
            </div>

            {/* Divider */}
            <div className="my-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-br from-licBlue/10 to-blue-50 text-gray-500">OR</span>
              </div>
            </div>

            {/* Book Appointment Button */}
            <button
              onClick={() => window.open("https://forms.gle/MCjLEGK1wdtDZpnu5", "_blank")}
              className="w-full p-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-95"
            >
              <Calendar className="h-5 w-5" />
              <span>Book an Appointment</span>
            </button>

            {/* Info Cards */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-lg border border-licBlue/20 text-center">
                <div className="text-2xl font-bold text-licBlue mb-1">24/7</div>
                <div className="text-sm text-gray-600">Available Support</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-licBlue/20 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Reliable Service</div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3">Frequently Asked Questions</h4>
              <div className="space-y-3">
                <details className="group rounded-md border border-gray-200 bg-white p-4">
                  <summary className="cursor-pointer list-none font-medium text-gray-900">
                    How quickly will you respond?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600">I usually respond within the same business day.</p>
                </details>
                <details className="group rounded-md border border-gray-200 bg-white p-4">
                  <summary className="cursor-pointer list-none font-medium text-gray-900">
                    Do you provide home visits?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600">Yes, appointments for home visits are available.</p>
                </details>
                <details className="group rounded-md border border-gray-200 bg-white p-4">
                  <summary className="cursor-pointer list-none font-medium text-gray-900">
                    What documents are needed to get started?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600">Basic ID proof, address proof, and PAN are typically required.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
