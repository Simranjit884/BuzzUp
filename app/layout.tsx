import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
// import { ModalProvider } from "@/components/providers/modal-provider";
import { CreateServerModal } from "@/components/modals/create-server-modal";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "BuzzUp",
  description: "A team chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            `${openSans.variable} antialiased`,
            "bg-white dark:bg-[#313338]",
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // forcedTheme="dark"
            enableSystem
            storageKey="buzzUp-theme"
          >
            <CreateServerModal />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
