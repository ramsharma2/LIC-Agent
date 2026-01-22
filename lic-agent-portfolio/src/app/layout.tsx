import "@/app/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Indra Prakash - LIC Agent Portfolio | Life Insurance Expert",
  description: "Professional portfolio of Indra Prakash, authorized LIC agent from Khalilabad Branch with expertise in life insurance planning, policy services, and financial advisory.",
  keywords: ["LIC agent", "life insurance", "financial planning", "Basti", "Khalilabad", "SantKabirNagar", "Uttar Pradesh", "insurance advisor", "policy services"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-background antialiased">
        <div
          className={cn(
            "min-h-screen font-sans",
            inter.variable,
            poppins.variable,
            montserrat.variable
          )}
        >
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
