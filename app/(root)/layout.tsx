import Navbar from "@/components/Navbar";
import { Metadata } from "next";
export const metadata:Metadata={
    title:'Eatsy | Home'
}


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="px-8 py-2">
        <Navbar/>
        {
            children
        }
      </div>
    );
  }
  