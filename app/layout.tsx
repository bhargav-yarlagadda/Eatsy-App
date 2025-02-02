import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Eatsy",
  description: "Discover top-rated restaurants, cafes, and food joints near you with Foodie Finder. Search by cuisine, location, or popular spots and satisfy your cravings instantly!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
       <Provider>
        {
          children
        }
       </Provider>
      </body>
    </html>
  );
}
