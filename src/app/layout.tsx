import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";


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
    <ConvexClerkProvider suppressHydrationWarning>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <SignedIn>
              <div className="min-h-screen">
                <Navbar />
                <main className="px-4 sm:px-6 lg:px-8">{children}</main>
              </div>
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>

          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
