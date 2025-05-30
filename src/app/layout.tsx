import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import { Github } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codivio",
  description: "Code + Video Call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedIn>
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
                  {children}
                </main>
                <footer className="py-6 sm:py-8 bg-gray-900">
                  <div className="container text-center text-gray-200 mx-auto px-3 sm:px-4">
                    <p className="text-sm sm:text-base">
                      Developed and designed by <span className="font-semibold">Chirag Sharma</span>
                    </p>
                    <a
                      href="https://github.com/chiraagsharma24/Codivio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center mt-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                      <span>View Source Code</span>
                    </a>
                  </div>
                </footer>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="w-full max-w-[90%] sm:max-w-md p-4 sm:p-8">
                  <RedirectToSignIn />
                </div>
              </div>
            </SignedOut>

            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
