import Navbar from "@/components/Navbar";
import { Metadata } from "next";

import { UserLocationContextProvider } from "@/context/userLocationContext";
export const metadata: Metadata = {
  title: "Eatsy | Home",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserLocationContextProvider>
      <div className="md:px-8">
        <Navbar />
        {children}
      </div>
    </UserLocationContextProvider>
  );
}
