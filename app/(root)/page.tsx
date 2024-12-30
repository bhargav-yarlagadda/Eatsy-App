"use client";
import GoogleMapView from "@/components/Home/GoogleMapView";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect,useState } from "react";
import CategoryList from "@/components/Home/CategoryList";
import RangeSelect from "@/components/Home/RangeSelect";
import SelectRating from "@/components/Home/SelectRating";
import GlobalAPI from "../../shared/GlobalAPI";
import { useContext } from "react";
import { UserLocationContext } from "@/context/userLocationContext";
const page = () => {
  
  const [category,setCategory]=useState();
  const [radius,setRadius]=useState(2500);
  const [businessList,setBusinessList]=useState([])
  const [businessListOrg,setBusinessListOrg]=useState([])
  const router = useRouter();
  const { data: session, status } = useSession();
  const locationContext= useContext(UserLocationContext)
  useEffect(() => { 
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);
  useEffect(()=>{
    getPlaces()
  },[])
  const onRatingChange=(rating:any)=>{
    if(rating.length==0)
    {
      setBusinessList(businessListOrg);
    }
   const result= businessList.filter(item=>{
   for(let i=0;i<rating.length;i++)
   {
      if(rating.item){

        if(item.rating >=rating[i])
        {
          return true;
  
        }
      }
      return false
   }
   })

    console.log(result)
  }
  const getPlaces = ()=>{
    GlobalAPI.getGooglePlace('indian',100,locationContext?.userLocation.lat,locationContext?.userLocation.lng)
    .then((res:any)=>{
      console.log(res.data)
    })
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 pt-2 pb-8 min-h-screen gap-4 md:grid-flow-col">
      {/* Sidebar: Category List, Range Select, and Rating */}
      <div
        className="col-span-1 bg-gray-800 rounded-s-md overflow-y-scroll md:h-auto h-full"
        style={{ scrollbarWidth: "none" }}
      >
          <CategoryList onCategoryChange={(value)=>setCategory(value)}/>
           <RangeSelect onRadiusChange={(value)=>setRadius(value)}/>
           <SelectRating onRatingChange={(value)=>onRatingChange(value)}/>
      </div>

      {/* Main Content: Google Map */}
      <div className="col-span-3 bg-blue-400 md:h-auto h-full">
        <GoogleMapView />
      </div>
    </div>
  );
};

export default page;
