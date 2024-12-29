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

        <div className="md:px-8">
        <Navbar/>
        {
          children
        }
        </div>
 
    );
  }
  