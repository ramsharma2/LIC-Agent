"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-licDarkBlue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/lic-logo.png"
                alt="LIC Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">{t('footer.agentName')}</h3>
                <p className="text-xs text-gray-300">{t('footer.agentTitle')}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.description')}
            </p>
            <p className="text-sm text-gray-300">
              <strong>{t('footer.licenseNo')}:</strong> 02431359
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.expertise')}
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.testimonials')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.licResources')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://licindia.in/Products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.licProducts')}
                </a>
              </li>
              <li>
                <a
                  href="https://ebiz.licindia.in/D2CPM/#Login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.premiumPayment')}
                </a>
              </li>
              <li>
                <a
                  href="https://licindia.in/Customer-Services/Policy-Status-New"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.policyStatus')}
                </a>
              </li>
              <li>
                <a
                  href="https://licindia.in/Download-Forms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.downloadForms')}
                </a>
              </li>
              <li>
                <a
                  href="https://licindia.in/Customer-Services/IRDA-Public-Disclosures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.irdaDisclosures')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-licGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                </svg>
                <span className="text-gray-300">9125467007</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-licGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">indra.0781@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-licGold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Near Sugar Mill Road, Khalilabad, Uttar Pradesh - 272175
                </span>
              </li>
            </ul>
          </div> 
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} {t('footer.agentName')}. {t('footer.allRightsReserved')}
          </p>
          <p className="mt-2">
            {t('footer.licenseInfo')}
          </p>
          <p className="mt-4 text-xs">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
