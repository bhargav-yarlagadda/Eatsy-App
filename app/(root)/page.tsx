"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import CategoryList from "@/components/Home/CategoryList";
import RangeSelect from "@/components/Home/RangeSelect";
import SelectRating from "@/components/Home/SelectRating";
const page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [session]);
  return (
    
      <div className="grid grid-flow-col pt-2 pb-8 grid-cols-4 h-screen">
        <div className="col-span-1 bg-gray-800 rounded-s-md overflow-y-scroll"
        style={{scrollbarWidth:'none'}}>
          <CategoryList onCategoryChange={()=>{}} />
            <RangeSelect onRadiusChange={()=>{}} />
              <SelectRating onRatingChange={()=>{}} />
        </div>
        <div className="col-span-3 bg-blue-400">
        second
        </div>
      </div>
  );
};

export default page;
