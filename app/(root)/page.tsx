"use client";
import GoogleMapView from "@/components/Home/GoogleMapView";
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
  }, [status]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 pt-2 pb-8 min-h-screen gap-4 md:grid-flow-col">
      {/* Sidebar: Category List, Range Select, and Rating */}
      <div
        className="col-span-1 bg-gray-800 rounded-s-md overflow-y-scroll md:h-auto h-full"
        style={{ scrollbarWidth: "none" }}
      >
        <CategoryList onCategoryChange={() => {}} />
        <RangeSelect onRadiusChange={() => {}} />
        <SelectRating onRatingChange={() => {}} />
      </div>

      {/* Main Content: Google Map */}
      <div className="col-span-3 bg-blue-400 md:h-auto h-full">
        <GoogleMapView />
      </div>
    </div>
  );
};

export default page;
